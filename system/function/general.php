<?
function getconfigure() {
	global $dbobj;
	define('CONF_METATITLE', "FRAME");
	define('CONF_METADESC', "Frame");
	define('CONF_METAKEYWORD', "Frame");
	define('CONF_HEADER_TITLE', "Frame");
}



function image_resize($filename,$path,$width = 800,	$height = 600) {
	
	getimagesize($filename);
	list($width_orig, $height_orig) = getimagesize($filename);
	//$ratio_orig = $width_orig/$height_orig;
	
	/*if ($width/$height > $ratio_orig) {
	   $width = $height*$ratio_orig;
	} else {
	   $height = $width/$ratio_orig;
	}*/
	$length=strlen($filename);
	$name=substr($filename,$length-3,$length);
	$image_p = imagecreatetruecolor($width, $height);
 
	if($name=='jpg' || $name=='JPG') {
		ini_set("memory_limit","24M");
		$image = imagecreatefromjpeg($filename);
		imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
		imagejpeg($image_p, $path);
	} else {
		ini_set("memory_limit","24M");
		$image = imagecreatefromgif($filename);
		imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
		imagegif($image_p, $path);
	}
}
/*
 @name:get_page_content
 @para:name
 @return:page content
*/ 
function get_page_contentx($pageid)
{
	global $dbobj;
		
	$conquery = "SELECT * FROM page_content WHERE  status='Active' AND   deleteFlag='No' AND Pag_Id='".$pageid."'";

	$consql = $dbobj->select($conquery);
	
	return $consql;		
			
}
/*
 @name:get_totalrecords
 @usage :to get total records
 @para:table name,extra condition for field of table ,limit
 @return:contents
*/ 
function get_totalrecords($table_name='',$field='')
{
	global $dbobj;
	
	$conquery = "SELECT COUNT(*) AS tot FROM ".$table_name." WHERE  status='Active' AND   deleteflag='No' ";
	
	if($field !="")
		 $conquery.=" AND ".$field;
	
	$consql = $dbobj->select($conquery);
	return $consql[0]["tot"];	
			
}
/*
 @name:get_content
 @usage :to get all the content from the table
 @para:table name,sort order,extra condition for field of table ,limit
 @return:contents
*/ 
function get_content($table_name='',$order='',$field='',$limit='',$sort_type='') {
	if($sort_type=='') {
	 	$sort_type='ASC';
	}
	global $dbobj;
	if($table_name == 'configure') {
		$conquery = "SELECT * FROM ".$table_name." WHERE Con_Status='Active' AND   Con_DeleteFlag='No' ";
		if($field !="")
			 $conquery.=" AND ".$field;
		if($order !="")
			$conquery.="ORDER BY ".$order." ".$sort_type."";	
		
	}
	else if($table_name == 'country') {
		$conquery = "SELECT * FROM ".$table_name." WHERE  cou_Status='Active' AND  cou_DeleteFlag='No' ";
		if($field !="")
			 $conquery.=" AND ".$field;
		if($order !="")
			$conquery.="ORDER BY ".$order." ".$sort_type."";	
		
	} else {
	$conquery = "SELECT * FROM ".$table_name." WHERE  status='Active' AND   deleteflag='No' ";
	if($field !="")
		 $conquery.=" AND ".$field;
	if($order !="")
		$conquery.=" ORDER BY ".$order." ".$sort_type;
	}
	if($limit !='')
	{ 
		$conquery.=$limit;
	}
	//echo $conquery;
	$consql = $dbobj->select($conquery);
	return $consql;		
			
}
 function tep_has_category_subcategories($category_id) {
    $child_category_query = mysql_query("select * from category where parent_id = '". (int)$category_id . "'");
 	$child_category = mysql_fetch_array($child_category_query);

    if (count($child_category) > 0) {
	 return $child_category['cat_id'];
    }
  }
function tep_not_null($value) {
    if (is_array($value)) {
      if (sizeof($value) > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      if (($value != '') && (strtolower($value) != 'null') && (strlen(trim($value)) > 0)) {
        return true;
      } else {
        return false;
      }
    }
  }
 
   function tep_parse_input_field_data($data, $parse) {
    return strtr(trim($data), $parse);
  }

  function tep_output_string($string, $translate = false, $protected = false) {
    if ($protected == true) {
      return htmlspecialchars($string);
    } else {
      if ($translate == false) {
        return tep_parse_input_field_data($string, array('"' => '&quot;'));
      } else {
        return tep_parse_input_field_data($string, $translate);
      }
    }
  }
 // The HTML href link wrapper function
  function tep_href_link($page = '', $parameters = '', $connection = 'NONSSL', $add_session_id = true, $search_engine_safe = true) {
    global $request_type, $session_started, $SID;

    if (!tep_not_null($page)) {
      die('</td></tr></table></td></tr></table><br><br><font color="#ff0000"><b>Error!</b></font><br><br><b>Unable to determine the page link!<br><br>');
    }

    if ($connection == 'NONSSL') {
      $link = HTTP_URL;
    } elseif ($connection == 'SSL') {
      if (ENABLE_SSL == true) {
        $link =HTTPS_URL;
      } else {
        $link = HTTP_URL;
      }
    } else {
      die('</td></tr></table></td></tr></table><br><br><font color="#ff0000"><b>Error!</b></font><br><br><b>Unable to determine connection method on a link!<br><br>Known methods: NONSSL SSL</b><br><br>');
    }

    if (tep_not_null($parameters)) {
      $link .= $page . '?' . tep_output_string($parameters);
      $separator = '&';
    } else {
      $link .= $page;
      $separator = '?';
    }

    while ( (substr($link, -1) == '&') || (substr($link, -1) == '?') ) $link = substr($link, 0, -1);

// Add the session ID when moving from different HTTP and HTTPS servers, or when SID is defined
    if ( ($add_session_id == true) && ($session_started == true) && (SESSION_FORCE_COOKIE_USE == 'False') ) {
      if (tep_not_null($SID)) {
        $_sid = $SID;
      } elseif ( ( ($request_type == 'NONSSL') && ($connection == 'SSL') && (ENABLE_SSL == true) ) || ( ($request_type == 'SSL') && ($connection == 'NONSSL') ) ) {
        if (HTTP_COOKIE_DOMAIN != HTTPS_COOKIE_DOMAIN) {
          $_sid = tep_session_name() . '=' . tep_session_id();
        }
      }
    }

    if ( (SEARCH_ENGINE_FRIENDLY_URLS == 'true') && ($search_engine_safe == true) ) {
      while (strstr($link, '&&')) $link = str_replace('&&', '&', $link);

      $link = str_replace('?', '/', $link);
      $link = str_replace('&', '/', $link);
      $link = str_replace('=', '/', $link);

      $separator = '?';
    }

    if (isset($_sid)) {
      $link .= $separator . tep_output_string($_sid);
    }

    return $link;
  }
  /*
 @name:time_selection
 @usage :to get all the time 
 @para:table name,sort order,extra condition for field of table 
 @return:combobox of time
*/ 
  
  function time_selection ($type,$workhours,$whole_week='',$whole_day='')
{
		$hour=12;
		$minute=0;
		$ret='';
		if($workhours=='0')
			$ret.="<option value='00:00' >Closed</option>";
		else
		{
			$ret.="<option value='' >  ----  </option>";
			$arr=split('_',$workhours);
			$days=$arr[0];
			$from=$arr[1];
			$to=$arr[2];
			$temp=($type==0)?$arr[1]:$arr[2];
		}	
		
		$minute = sprintf ( "%02d", $minute );
		for($i=1;$i<=48;$i++)
		{
			
			$hour=(($hour> 12)?1:$hour);
			$minute = sprintf ( "%02d", $minute );
			$day=( ($i > 24)?'PM':'AM');
			$time=$hour.":".$minute.$day;	
			$style=($temp==$time)?'selected':'';
			$ret.="<option value='".$time."' ".$style.">".$time."</option>";
			$minute=$minute+30;
			
			if($minute ==60)
			{
				$minute=0;
				$hour++;
			}
		
	}
	
	return $ret;
}
 /*
 @name:getcpath
 @usage :to get parentid path
 @para:cat_id
 @return:cPath
*/ 
 function getcpath($id,$lattest_listing_cPath='')
 {
global $lattest_listing_cPath;
	//echo $lattest_listing_cPatharrtemp."<br>";
$lattest_listing_cPatharr=get_content('category','','cat_id="'.$id.'"');

if($lattest_listing_cPatharr[0]['parent_id'] !=0){
		$lattest_listing_cPath=($lattest_listing_cPath !='')?$lattest_listing_cPath.'_'.$lattest_listing_cPatharr[0]['parent_id']:$lattest_listing_cPatharr[0]['parent_id'];
	getcpath($lattest_listing_cPatharr[0]['parent_id'],$lattest_listing_cPath);
		}
		
//		return  $lattest_listing_cPatharrtemp;
					
 }
 /*
 @name:convert_date_ddmmyy
 @usage :convert date to dd-mm-yyyy formate
 @para:date
 @return:date
*/ 
function convert_date_ddmmyy($arr)
{
	$datearr1=explode("-",$arr );
	$date=$datearr1[2]."-".$datearr1[1]."-".$datearr1[0];
	
	return $date;		
			
}
/*
 @name:convert_date_yymmdd
 @usage :convert date to yyyy-mm-dd formate
 @para:date
 @return:date
*/ 
function convert_date_yymmdd($arr) {
	$datearr1=explode("-",$arr );
	$date=$datearr1[2]."-".$datearr1[1]."-".$datearr1[0];
	
	return $date;		
			
}

function generateHeaderMeta ($file) {
		global $dbobj;
		switch ($file) {
			case 'details.php':
				$id = $_REQUEST['pid'];
				$metaVal = $dbobj->select("SELECT page_meta_title, page_meta_desc, page_meta_keywords FROM content WHERE pageid  ='$id'");
				$CONF_METATITLE = stripcslashes($metaVal[0]['page_meta_title']);
				$CONF_METADESC = stripcslashes($metaVal[0]['page_meta_desc']);
				$metaleyword = stripcslashes($metaVal[0]['page_meta_keywords']);
				break;
			case 'contact.php':
				$id = '3';
				$metaVal = $dbobj->select("SELECT page_meta_title, page_meta_desc, page_meta_keywords FROM content WHERE pageid  ='$id'");
				$CONF_METATITLE = stripcslashes( $metaVal[0]['page_meta_title']);
				$CONF_METADESC = stripcslashes($metaVal[0]['page_meta_desc']);
				$metaleyword = stripcslashes($metaVal[0]['page_meta_keywords']);
				break;
			default:
				$CONF_METATITLE = 'APPELLO Real Estate';
				$CONF_METADESC = "APPELLO Real Estate";
				$metaleyword = "APPELLO Real Estate";
				break;
		}
?> 
<META NAME="desription" CONTENT = "<?php echo  strlen ($CONF_METADESC) == 0? CONF_METADESC : $CONF_METADESC;?>">
<META NAME="keywords" CONTENT="<?php echo  strlen ($metaleyword) == 0? CONF_METAKEYWORD : $metaleyword;?>">
<title><?php echo  strlen ($CONF_METATITLE) == 0? CONF_METATITLE :  $CONF_METATITLE;?></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="generator" content="" />
<meta name="copyright" content="" />
<meta name="robots" content="All" />
<?php }



function paginations($total_pages, $page, $key = ''){
    global $webpage;
	
    $pagination='<ul id="pagination">';
                  
    if($total_pages!=1){
        $max = 10;
        $shift = 5;
        if(!empty($key))
			$keyUrl = "&key=$key";
        
        $max_links = $max+1;
        $h=1;  
        
        if($total_pages>=$max_links){
        
            if(($page>=$max_links-$shift)&&($page<=$total_pages-$shift)){  
                $max_links = $page+$shift;
                $h=$max_links-$max;
            }
            
            if($page>=$total_pages-$shift+1){
                $max_links = $total_pages+1;
                $h=$max_links-$max;
            } 
        } else {
            $h=1;
            $max_links = $total_pages+1;
        }
        if($page>'1'){
            $pagination.= ' <li class="previous-off" ><a href="'.$webpage.'?page/'.($page-1).$keyUrl.'">Previous</a></li> ';
        }
        
        for ($i=$h;$i<$max_links;$i++){
            if($i==$page){
                $pagination.='<li><a class="active">'.$i.'</a></li>  ';
            } else { 
                $pagination.= '<li><a href="'.$webpage.'?page/'.$i.$keyUrl.'">'.$i.'</a></li> ';
            }
        }
        if(($page >='1')&&($page!=$total_pages)){
            $pagination.= '<li class="next"><a href="'.$webpage.'?page/'.($page+1).$keyUrl.'">Next</a></li> ';
        }
    }  else {
        $pagination.='<li><a href="" class="current">1</a></li>';
    }
    $pagination.='</ul>';
    return($pagination);
}
function orderKeyGen($orID = '') {
	global $dbobj;
	$sqlQry = "SELECT COUNT(*) as cnt FROM order_master  WHERE MONTH(frm_order_date) =".date('m');
	$cnt = $dbobj->select($sqlQry);
	return "FRM/".date('y')."/".date('m')."/".($cnt[0]['cnt']+1);
	 
}

function resizeDaImage($src_file, $dest_file, $size_limit_width, $size_limit_height)    {
//echo $src_file;
    $file_ext=getExtension($src_file);
    ####### RESIZING START #######
    $img_info = getimagesize ($src_file);
    $orig_width = $img_info[0];
    $orig_height = $img_info[1];
    $jpegQuality = 95;

    if ($orig_height/$size_limit_height > $orig_width/$size_limit_width )    {
        $scaledown = $orig_height;
        $size_limit = $size_limit_height;
    } else    {
        $scaledown = $orig_width;
        $size_limit = $size_limit_width;
    }
    $newscale = $size_limit / $scaledown;
    $new_w = (int)abs($orig_width * $newscale);
    $new_h = (int)abs($orig_height * $newscale);
    if ($new_w>$orig_width)    $new_w=$orig_width;
    if ($new_h>$orig_height)    $new_h=$orig_height;
    $base_image = imagecreatetruecolor($new_w, $new_h);
	
	
	ini_set ("upload_tmp_dir", SERVER_PATH."tmp"); 
	ini_set(safe_mode,Off); 
	$newfileaz = 'temp.jpg';
	//touch($newfile);
    imagejpeg($base_image, SERVER_PATH.'tmp/temp.jpg');
    imagedestroy($base_image); 
	ini_set(safe_mode,On); 
    if($file_ext=='jpg'){
        $img = imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');
        $imageToResize = imagecreatefromjpeg("$src_file");
    }
    if($file_ext=='gif'){
        $img = imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');
        $imageToResize = imagecreatefromgif("$src_file");
    }
    if($file_ext=='png'){
        $img = imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');
        $imageToResize = imagecreatefrompng("$src_file");
    }
    imageCopyResampled($img, $imageToResize, 0, 0, 0, 0, $new_w+1, $new_h+1, $orig_width, $orig_height);
    $new_image = imageCreateTrueColor($size_limit_width, $size_limit_height);
    imagefill($new_image, 0, 0, 0xffffff);
    imagecopy ($new_image, $img, ($size_limit_width-$new_w)/2, ($size_limit_height-$new_h)/2, 0, 0, $new_w, $new_h);
    
    if($file_ext=='jpg')
        imagejpeg($new_image, "$dest_file", $jpegQuality);
    if($file_ext=='gif')
        imagejpeg($new_image, "$dest_file", $jpegQuality);
    if($file_ext=='png')
        imagejpeg($new_image, "$dest_file", $jpegQuality);
        
    imagedestroy($new_image);
    imagedestroy($imageToResize);
    unlink(SERVER_PATH.'tmp/temp.jpg');
    #echo "Original Size = $orig_width x $orig_height => resizing done = $new_w x $new_h => adjustment done = $size_limit_width x $size_limit_height<br>";
    ####### RESIZING END #######
}

function getExtension($file) {
	if(($pos = strrpos($file,"."))!==false)
		return strtolower(substr($file,$pos+1,strlen($file)));
}

?>