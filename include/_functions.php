<?php

//Common function to be utilised every where

/* *************************************************** */

//MOST USEFUL COMMON FUNCTIONS

function menuNavigation($menu=NULL,$lang='en',$slug,$parentSlug)
{
	$obj = new admin_common; 
	$sortfield =  ($lang == 'en') ? 'sort_order' : 'sort_order'; 
	$getMenuData  = $obj->select("SELECT * FROM menu_master WHERE menu_type='$menu' ORDER BY sort_order ASC");	//pre($getMenuData);
	//echo "SELECT * FROM  menu_items WHERE menu_id='{$getMenuData[0]['menu_id']}' AND parent_id=0 AND is_active='Y' ORDER BY ".$sortfield." ASC";
	$getParentData  = $obj->select("SELECT * FROM  menu_items WHERE menu_id='{$getMenuData[0]['menu_id']}' AND parent_id=0 AND is_active='Y' ORDER BY ".$sortfield." ASC");	
	if(count($getParentData) > 0)
	{
		$menuNavStr .= '<ul class="'.stripslashes(($lang=='ar') ? ($getMenuData[0]['object_class_arb']? $getMenuData[0]['object_class_arb'] :$getMenuData[0]['object_class'] ):$getMenuData[0]['object_class']).'" id="'.stripslashes(($lang=='ar') ? ($getMenuData[0]['object_id_arb']? $getMenuData[0]['object_id_arb'] :$getMenuData[0]['object_id'] ):$getMenuData[0]['object_id']).'">';
//echo $slug;
$i=1;
		foreach($getParentData as $key => $val)
		{
			$getSubData  = $obj->select("SELECT * FROM `menu_items` WHERE  menu_id='{$getMenuData[0]['menu_id']}' AND	parent_id='{$val['id']}' AND is_active='Y' ORDER BY ".$sortfield." ASC");	
			$slugStr=explode('=',$val['link']);
			/*if($val['link']=="javascript:void(0)")
			{
			$slugStr[1]="our-companies";
			}
			if(!isset($slug))
			{
			$aclass = "";
			}
			else if($slug==$slugStr[1])
			{
			$aclass = "class='active1'";
			}
			else if($currpage=='news')
			{
			$aclass = "class='active1'";
			}
			else if($parentSlug==$slugStr[1] and $parentSlug=='news')
			{
			$aclass = "class='active1'";
			}
			else if($parentSlug==$slugStr[1] and $parentSlug=='about-us')
			{
			$aclass = "class='active1'";
			}
			else if($parentSlug==$slugStr[1] and $parentSlug=='our-companies')
			{
			$aclass = "class='active1'";
			}
			else
			{
			$aclass = "";
			}*/
			if($i==5)
			{
			$bclass = "class='last'";
			}
			else
			{
			$bclass = "";
			}
			$menuNavStr .= '<li '.$bclass.((!$getParentData[$key+1] ||  ($lang == 'ar' && $menu != 'bottom') ) ? '' : '').'><a '.$aclass.' href="'.stripslashes($val['link']).'" '.((!$getParentData[$key+1] && $lang == 'en') ? '' : '').' class="'.stripslashes(($lang=='ar') ? ($val['object_class_arb']? $val['object_class_arb'] :$val['object_class'] ):$val['object_class']).'" id="'.stripslashes(($lang=='ar') ? ($val['object_id_arb']? $val['object_id_arb'] :$val['object_id'] ):$val['object_id']).'" target="'.stripslashes($val['target']).'">'.(stripslashes(($lang=='ar') ? ($val['name_arb']? $val['name_arb'] :$val['name'] ):$val['name'])).'</a>';
			if(count($getSubData) > 0)
			{
				$menuNavStr .= '<ul style="'.((count($getParentData) == $key+1) ? (($lang=='ar') ? 'left:-77px;' : '' ) : 'left:0px;').'">';
				foreach($getSubData as $key1 => $val1)
				{
					if($val1['id'] == '12' && $lang=='ar')
					{
						$link_url_array = $val1['link'] ? explode('.',stripslashes($val1['link'])) : '';
						if(file_exists(''.$link_url_array[0].'_arabic.'.$link_url_array[1]))
						{ 
							$link_url = ''.$link_url_array[0].'_arabic.'.$link_url_array[1];
						}
						else
						{
							$link_url = ''.stripslashes($val1['link']);
						}
					}
					else
					{
						$link_url = stripslashes($val1['link']);
					}
					$menuNavStr .= '
					  <li '.(($key1==0) ? 'class="droupmenu_top'.((!$getParentData[$key+1]) ? '_last' : '').'"' : ((count($getSubData) == $key1+1) ? 'class="droupmenu_bottom"' : '') ).((!$getSubData[$key1+1]) ? ' style="border:none;"' : '').'>
					  <a href="'.$link_url.'" style="'.((!$getSubData[$key1+1] && $lang == 'ar') ? 'border-bottom:none;' : '').((!$getParentData[$key+1]) ? '' : '').'" target="'.stripslashes($val1['target']).'">'.(stripslashes(($lang=='ar') ? ($val1['name_arb'] ? $val1['name_arb'] : $val1['name']) : $val1['name'])).'</a></li>';
				}
				$menuNavStr .= '</ul>';
			}
			$menuNavStr .=' </li>';
			$i++;
		}
		$menuNavStr .=' </ul>';
	}
	return $menuNavStr;
}
	
	function CustomListBox($tblname,$keyfield,$keyval,$showfield,$constraint,$conn,$lang=NULL)
	{
		$lang	   = get_session("language");
		if($lang=='ar')
		{
			$showfield1 = str_replace('_arb','',$showfield);
			$sql = "Select $keyfield,$showfield,$showfield1 from $tblname $constraint ";
		}
		else
		{
			$sql = "Select $keyfield,$showfield from $tblname $constraint ";
		}
		$rs = mysql_query($sql,$conn) or die($sql.mysql_error());
		if(mysql_num_rows($rs)>0)
		{
			while($row = mysql_fetch_row($rs))
			{
				$showfldParnt = $lang ? (trim($row[1]) ? $row[1] :  $row[2])  : $row[1] ;
				$sql1 = "Select pageid,pagename from $tblname WHERE is_active = 'Y' AND parentid='{$row[0]}'";
				$rs1 = mysql_query($sql1,$conn) or die($sql1.mysql_error());
				echo("<optgroup label=\"".$showfldParnt."\"></optgroup>");
				if(mysql_num_rows($rs1)>0)
				{
					while($row1 = mysql_fetch_row($rs1))
					{
						$showfld = $lang ? (trim($row1[1]) ? $row1[1] :  $row1[2])  : $row1[1] ;
						if(strcmp($row1[0],$keyval) == 0)
							echo("<option value=\"$row1[0]\" selected>&nbsp;&nbsp;&nbsp;".$showfld."</option>");
						else
							echo("<option value=\"$row1[0]\">&nbsp;&nbsp;&nbsp;".$showfld."</option>");
					}
				}
			 }
		 }
	}


function cleanQuery($string)

{

	if(get_magic_quotes_gpc())  // prevents duplicate backslashes

	{

		$string = stripslashes($string);

	}

	if (phpversion() >= '4.3.0')

	{

		$string = mysql_real_escape_string($string);

	}

	else

	{

		$string = mysql_escape_string($string);

	}

	return $string;

}



function slug($str,$tab) {

	$str = strtolower(trim($str));

	$str = preg_replace('/[^a-z0-9-]/', '-', $str);

	$str = preg_replace('/-+/', "-", $str);

	$str2 = $str;

	$sql_sel="select * from $tab where slug='$str2'";

	$res_sel=mysql_query($sql_sel);
	
	$row_sel = mysql_fetch_array($res_sel);

	if(mysql_num_rows($res_sel)>=1)

	{

	$sl=$str.date("is");

	}

	else

	{

	$sl=$str;

	}

	//echo $sl;exit;

	return $sl;

}



function tohtml($strValue)



{



	return htmlspecialchars($strValue);



}







function tourl($strValue)



{



	return urlencode($strValue);



}







function tosql($value, $type)



{



	if($value == "")



	return "NULL";



	else



	if($type == "Number")



	return doubleval($value);



	else



	{



		if(get_magic_quotes_gpc() == 0)



		{



			$value = str_replace("'","''",$value);



			$value = str_replace("\\","\\\\",$value);



		}



		else



		{



			$value = str_replace("\\'","''",$value);



			$value = str_replace("\\\"","\"",$value);



			$value = str_replace("'","''",$value);



		}







		return "'" . $value . "'";



	}



}







function tosql_n($value, $type)



{



	if($value == "")



	return "NULL";



	else



	if($type == "Number")



	return doubleval($value);



	else



	{



		if(get_magic_quotes_gpc() == 0)



		{



			$value = str_replace("'","''",$value);



			$value = str_replace("\\","\\\\",$value);



		}



		else



		{



			$value = str_replace("\\'","''",$value);



			$value = str_replace("\\\"","\"",$value);



			$value = str_replace("'","''",$value);



		}







		return "" . $value . "";



	}



}



function currency_format($curr)



{



	//return number_format($curr, 2, '.', ',');







	$dec_point = '.';



	$tmp = explode('.', $curr);



	$out = number_format($tmp[0], 0, '.', $thousands_sep);



	if (isset($tmp[1])) $out .= $dec_point.$tmp[1];







	return $out;







}



function format_number($num)



{



	return number_format($num, 2, '.', '');











}



function strip($value)



{



	if(get_magic_quotes_gpc() == 0)



	return $value;



	else



	return stripslashes($value);



}



function sanitize_data($input_data) {

  return htmlentities(stripslashes($input_data), ENT_QUOTES);

}



function get_param($param_name)



{



	global $HTTP_POST_VARS;



	global $HTTP_GET_VARS;







	$param_value = "";



	/*if(isset($HTTP_POST_VARS[$param_name]))



	$param_value = trim($HTTP_POST_VARS[$param_name]);



	else if(isset($HTTP_GET_VARS[$param_name]))



	$param_value = trim($HTTP_GET_VARS[$param_name]);*/







	if(isset($_POST[$param_name]))



	$param_value = trim($_POST[$param_name]);



	else if(isset($_GET[$param_name]))



	$param_value = trim($_GET[$param_name]);







	return addslashes($param_value);



}







function get_session($param_name)



{



	/*



	global $HTTP_POST_VARS;



	global $HTTP_GET_VARS;



	global ${$param_name};







	$param_value = "";



	if(!isset($HTTP_POST_VARS[$param_name]) && !isset($HTTP_GET_VARS[$param_name]) && session_is_registered($param_name))



	$param_value = ${$param_name};







	return $param_value;



	*/



	if(isset($_SESSION[$param_name]))



	{



		return $_SESSION[$param_name];



	}



	else



	{



		return "";



	}



}











function set_session($param_name, $param_value)



{



	global ${$param_name};



	if(session_is_registered($param_name))



	session_unregister($param_name);



	${$param_name} = $param_value;



	session_register($param_name);







	$_SESSION[$param_name] = $param_value;



}







//CUSTOMIZED FUNCTION







function getRecdCount($tblname,$constraint,$conn)



{



	$sql = "SELECT COUNT(*) FROM $tblname  $constraint";



	//echo $sql;



	$rs = mysql_query($sql,$conn);



	if(mysql_num_rows($rs) > 0)



	return(mysql_result($rs,0));



	else



	return(0);



}











function FindOtherValue($tblName,$field1,$val1,$field2,$conn)



{



	$sql = "Select  $field2  from  $tblName  where $field1 = '$val1' ";



	//echo $sql;



	$rs = mysql_query($sql,$conn);



	if(mysql_num_rows($rs) >0)



	{



		$row = mysql_fetch_row($rs);



		return($row[0]);



	}



	else



	return "";



}







function FindOtherValue1($tblName,$field1,$val1,$field2,$conn)



{



	$sql = "Select  $field2  from  $tblName  where $field1 = " . tosql($val1, "Text") . " ";



	//echo $sql;



	$rs = mysql_query($sql,$conn);



	if(mysql_num_rows($rs) >0)



	{



		$row = mysql_fetch_row($rs);



		return($row[0]);



	}



	else



	return "";



}







function FillListBox2($tblname,$keyfield,$keyval,$showfield,$constraint,$conn)



{



	echo $sql = "Select $keyfield,$showfield from $tblname $constraint ";



	$rs = mysql_query($sql,$conn) or die($sql.mysql_error());



	if(mysql_num_rows($rs)>0)



	{



		while($row = mysql_fetch_row($rs))



		{



			if(strcmp($row[0],$keyval) == 0)



			echo("<option value=\"$row[0]\" selected>$row[1]</option>");



			else



			echo("<option value=\"$row[0]\">$row[1]</option>");



		}



	}



}







function FillListBoxClass($tblname,$keyfield,$keyval,$showfield,$constraint,$conn)



{



	$sql = "Select $keyfield,$showfield, development_ref_id from $tblname $constraint ";



	$rs = mysql_query($sql,$conn) or die($sql.mysql_error());



	if(mysql_num_rows($rs)>0)



	{



		while($row = mysql_fetch_row($rs))



		{



			if(strcmp($row[0],$keyval) == 0)



			echo("<option class = \"$row[2]\" value=\"$row[0]\" selected>$row[1]</option>");



			else



			echo("<option class = \"$row[2]\" value=\"$row[0]\">$row[1]</option>");



		}



	}



}







function FillListBoxClassType($tblname,$keyfield,$keyval,$showfield,$constraint,$conn)



{



	$sql = "Select $keyfield,$showfield, propcat from $tblname $constraint ";



	$rs = mysql_query($sql,$conn) or die($sql.mysql_error());



	if(mysql_num_rows($rs)>0)



	{



		while($row = mysql_fetch_row($rs))



		{



			if(strcmp($row[0],$keyval) == 0)



			echo("<option class = \"$row[2]\" value=\"$row[0]\" selected>$row[1]</option>");



			else



			echo("<option class = \"$row[2]\" value=\"$row[0]\">$row[1]</option>");



		}



	}



}



function CheckDup($tblname,$field,$val,$con)



{



	$sql = "Select $field from $tblname where $field = '$val'";



	//echo($sql);



	$rs = mysql_query($sql,$con);



	if(mysql_num_rows($rs)>0)



	return(1);//Found



	else



	return(0);//Not found



}







function CheckDupEx($tblname,$field,$val,$condfld,$condval,$con)



{



	$sql = "Select $field from $tblname where $field = ".ToSql($val,"Text")." AND $condfld != '$condval'";







	$rs = mysql_query($sql,$con) or die($sql.mysql_error());



	//echo($sql);







	if(mysql_num_rows($rs)>0)



	return(1);//Found



	else



	return(0);//Not found



}







function CheckDupEx1($tblname,$field,$val,$condfld,$condval,$con)



{



	$sql = "Select $field from $tblname where $field = ".ToSql($val,"Text")." AND $condfld = '$condval'";



	$rs = mysql_query($sql,$con);



	//echo($sql);



	if(mysql_num_rows($rs)>0)



	return(1);//Found



	else



	return(0);//Not found



}







function CheckDupEx2($tblname,$field,$val,$condfld,$condval,$condfld2,$condval2,$con)



{



	$sql = "Select $field from $tblname where $field = '$val' AND $condfld = '$condval' AND $condfld2 != '$condval2'";



	$rs = mysql_query($sql,$con);



	//echo($sql);



	if(mysql_num_rows($rs)>0)



	return(1);//Found



	else



	return(0);//Not found



}







function CountRecs($tblnm,$constraint,$conn)



{



	$sql = "Select count(*) from $tblnm  $constraint";



	//echo $sql;



	$rs = mysql_query($sql,$conn);



	//echo("<br>#$sql#". mysql_num_rows($rs) ."#");



	if(mysql_num_rows($rs) > 0)



	return(mysql_result($rs,0));



	else



	return(0);



}







function FillListBox($tblname,$keyfield,$keyval,$showfield,$conn)



{



	$sql = "Select $keyfield,$showfield from $tblname ";



	$rs = mysql_query($sql,$conn);



	if(mysql_num_rows($rs)>0)



	{



		while($row = mysql_fetch_row($rs))



		{



			if(strcmp($row[0],$keyval) == 0)



			echo("<option value=\"$row[0]\" selected>$row[1]</option>");



			else



			echo("<option value=\"$row[0]\">$row[1]</option>");



		}



	}



}







function country_ListBox($defaultSelectfieldName = "",$defaultSelectfieldId = "",$valuetype)



{



	$selected = "";



	global $db;







	$sql = "Select * from countrylist order by country_name asc";



	$rs = mysql_query($sql,$db);



	if(mysql_num_rows($rs)>0)



	{



		while($row = mysql_fetch_array($rs))



		{



			$cid = $row["id"];



			$cname = $row["country_name"];







			if($cname == $defaultSelectfieldName)



			$selected = "selected";



			else



			$selected = "";







			if($valuetype == "ID")



			{



				echo("<option value=\"$cid\" $selected>$cname</option>");



			}



			else



			{



				echo("<option value=\"$cname\" $selected>$cname</option>");



			}







		} // while



	} // if



}







// get page content







function get_page_content($pagename)



{



	$pagename = trim($pagename);



	$query = "select  page_desc from content where pagename = '$pagename'";



	$result = mysql_query($query) or die($query.mysql_error());



	$total = mysql_num_rows($result);







	if($total)



	{



		$pagedesc = trim(mysql_result($result,0,"page_desc"));



	}



	else



	{



		$pagedesc = "";



	}







	return $pagedesc;



}







// get page Title







function get_page_title($pagename)



{



	$pagename = trim($pagename);



	$query = "select  pagetitle from content where pagename = '$pagename'";



	$result = mysql_query($query) or die($query.mysql_error());



	$total = mysql_num_rows($result);







	if($total)



	{



		$pagetitle = trim(mysql_result($result,0,"pagetitle"));



	}



	else



	{



		$pagetitle = "";



	}







	return $pagetitle;



}











function checkType($orgValue,$DataValue)



{



	if($orgValue == $DataValue)



	{



		$tmpSelect = "selected";



		return $tmpSelect;



	}



}







function get_page_meta_content($pagename)



{



	$pagename = trim($pagename);



	$query = "select  * from content where pagename = '$pagename'";



	$result = mysql_query($query) or die($query.mysql_error());



	$total = mysql_num_rows($result);







	if($total > 0)



	{



		$pagedesc = trim(mysql_result($result,0,"page_desc"));



		$fldpage_metatitle = stripslashes(trim(mysql_result($result,0,"page_meta_title")));



		$fldpage_metadesc = stripslashes(trim(mysql_result($result,0,"page_meta_desc")));



		$fldpage_metakey = stripslashes(trim(mysql_result($result,0,"page_meta_keywords")));







		$strdisplay = "<title>$fldpage_metatitle</title>



						   <meta name=\"description\" content=\"$fldpage_metadesc\">



						   <meta name=\"keywords\" content=\"$fldpage_metakey\">";



	}



	else



	{



		$strdisplay = "";



	}







	return trim($strdisplay);



}







function catnavigation($tmpParentDet2,$conn)



{



	global $level_id2;



	global $cnt2;







	$sqlLevel2 	= "Select cat_id,cat_name,parent_id,level_id from category_master where cat_id=$tmpParentDet2"; // AND is_active='Y'";



	$rsLevel 	= mysql_query($sqlLevel2) or die($sqlLevel2.mysql_error());



	if(mysql_num_rows($rsLevel) > 0)



	{



		$rowLevel 			= mysql_fetch_object($rsLevel);



		$tmpCatName			= $rowLevel->cat_name;



		$tmpParentId		= $rowLevel->parent_id;



		$tmpCatnewId		= $rowLevel->cat_id;



		$tmpLevelId			= $rowLevel->level_id;







		$level_id2[$cnt2][0]	= $tmpCatnewId;



		$level_id2[$cnt2][1]	= $tmpCatName;



		$level_id2[$cnt2][2]	= $tmpParentId;



		$level_id2[$cnt2][3]	= $tmpLevelId;







		$cnt2++;



		catnavigation($tmpParentId,$conn);



	}



}







function showchildcategories($parent_id,$CatArr)



{



	global $showalltree;



	$catquery = "select * from category_master where parent_id  = '$parent_id'";



	$catresult = mysql_query($catquery) or die($catquery.mysql_error());



	$cattotal = mysql_num_rows($catresult);







	if($cattotal > 0)



	{



		for($i=0;$i<$cattotal;$i++)



		{



			$catrow = mysql_fetch_array($catresult);







			$catname = $catrow["cat_name"];



			$catparentid = $catrow["parent_id"];



			$catid = $catrow["cat_id"];



			$levelid = $catrow["level_id"];



			$CatArr = showchildcategories($catid,$CatArr);



			$showalltree[] = $catid;



		}



	}







	return $showalltree;



}











function ImageUpload_new2($fileTmpPath,$filename,$fileNewImageName,$folderPath,$thumbHeight,$thumbWidth,$normalHeight,$normalWidth)



{



	$flsave = "";



	$fileNewThumbImageName = $fileNewImageName;







	if(is_uploaded_file($fileTmpPath))



	{



		$fileTmpExt = strtolower(substr($filename,strpos($filename,".")));



		$tmpNewFilePath = $folderPath.$fileNewImageName;



		//watermarkImage($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);



		if(move_uploaded_file($fileTmpPath,$tmpNewFilePath))



		{



			chmod($tmpNewFilePath,0777);



			$imgPhyPath	= $tmpNewFilePath;



			//watermarkImagerent($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);



			$tmpImgSize	= getimagesize($imgPhyPath);







			//echo "----main path---".$imgPhyPath."<br>";







			// create Thumb --------



			// $tmpImgSize[0] - width - 90



			// $tmpImgSize[1] - height  - 120







			if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			{



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 1"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewImageName;



					$tmpImgSizeNew	=  getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 2"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewImageName; // fileNewThumbImageName





						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				} // END if($tmpImgSize[0] > $thumbWidth )



				else



				{



					// if height > $thumbHeight



					//echo "-------> 3"."<br>";







					if($tmpImgSize[1] > $thumbHeight )



					{



						//echo "-------> 4"."<br>";



						saveThumbOnly($saveAs,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;







						$imgPhyPathNew	=  $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







						if ($tmpImgSizeNew[0] > $thumbHeight)



						{



							//echo "-------> 5"."<br>";



							//$saveAs1	= $tmpNewFilePath;



							$saveAs1	= $folderPath."thumb/".$fileNewImageName;



							//$saveAs1	= $folderPath.$fileNewThumbImageName;







							saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



							$flsave = $saveAs1;



							//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



							$imgPhyPathNew	=  $flsave;



							$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



						}



					}



				}



			} // end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			else



			{



				//echo "-------> 6"."<br>";



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 7"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewThumbImageName;



					$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 8"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewThumbImageName;







						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				}



				else



				{



					//echo "-------> 9"."<br>";



					$saveAs	= $tmpNewFilePath;



					saveThumbOnly($saveAs,$tmpImgSize[0],$tmpImgSize[1],"h",$fileNewThumbImageName);



					chmod($saveAs,0755);



					$flsave = $saveAs;



				}



			} // else end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))







		} // end if(move_uploaded_file($fldImage,$tmpNewFilePath))







	} // end if(is_uploaded_file($fileTmpPath))



	//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);







	//echo $flsave; exit;



	return $flsave;



}





function ImageUpload($fileTmpPath,$filename,$fileNewImageName,$folderPath,$thumbHeight,$thumbWidth,$normalHeight,$normalWidth,$watermark)



{



	$flsave = "";



	$fileNewThumbImageName = $fileNewImageName;







	if(is_uploaded_file($fileTmpPath))



	{



		$fileTmpExt = strtolower(substr($filename,strpos($filename,".")));



		$tmpNewFilePath = $folderPath.$fileNewImageName;



		//watermarkImage($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);



		if(move_uploaded_file($fileTmpPath,$tmpNewFilePath))



		{



			chmod($tmpNewFilePath,0755);



			$imgPhyPath	= $tmpNewFilePath;



			if($watermark=="1") {

				watermarkImagerent($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);

			}

			$tmpImgSize	= getimagesize($imgPhyPath);







			//echo "----main path---".$imgPhyPath."<br>";







			// create Thumb --------



			// $tmpImgSize[0] - width - 90



			// $tmpImgSize[1] - height  - 120







			if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			{



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 1"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewImageName;



					$tmpImgSizeNew	=  getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 2"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewImageName; // fileNewThumbImageName







						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				} // END if($tmpImgSize[0] > $thumbWidth )



				else



				{



					// if height > $thumbHeight



					//echo "-------> 3"."<br>";







					if($tmpImgSize[1] > $thumbHeight )



					{



						//echo "-------> 4"."<br>";



						saveThumbOnly($saveAs,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;







						$imgPhyPathNew	=  $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







						if ($tmpImgSizeNew[0] > $thumbHeight)



						{



							//echo "-------> 5"."<br>";



							//$saveAs1	= $tmpNewFilePath;



							$saveAs1	= $folderPath."thumb/".$fileNewImageName;



							//$saveAs1	= $folderPath.$fileNewThumbImageName;







							saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



							$flsave = $saveAs1;



							//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



							$imgPhyPathNew	=  $flsave;



							$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



						}



					}



				}



			} // end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			else



			{



				//echo "-------> 6"."<br>";



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 7"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewThumbImageName;



					$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 8"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewThumbImageName;







						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				}



				else



				{



					//echo "-------> 9"."<br>";



					$saveAs	= $tmpNewFilePath;



					saveThumbOnly($saveAs,$tmpImgSize[0],$tmpImgSize[1],"h",$fileNewThumbImageName);



					chmod($saveAs,0755);



					$flsave = $saveAs;



				}



			} // else end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))







		} // end if(move_uploaded_file($fldImage,$tmpNewFilePath))







	} // end if(is_uploaded_file($fileTmpPath))



	//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);







	//echo $flsave; exit;



	return $flsave;



} // end function ImageUpload($fileTmpPath,$filename)


function ImageUpload_new($fileTmpPath,$filename,$fileNewImageName,$folderPath,$thumbHeight,$thumbWidth,$normalHeight,$normalWidth)



{



	$flsave = "";



	$fileNewThumbImageName = $fileNewImageName;







	if(is_uploaded_file($fileTmpPath))



	{



		$fileTmpExt = strtolower(substr($filename,strpos($filename,".")));



		$tmpNewFilePath = $folderPath.$fileNewImageName;



		//watermarkImage($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);



		if(move_uploaded_file($fileTmpPath,$tmpNewFilePath))



		{



			chmod($tmpNewFilePath,0755);



			$imgPhyPath	= $tmpNewFilePath;



			watermarkImagerent($tmpNewFilePath, '../property_images/water-mark.png' , $tmpNewFilePath);



			$tmpImgSize	= getimagesize($imgPhyPath);







			//echo "----main path---".$imgPhyPath."<br>";







			// create Thumb --------



			// $tmpImgSize[0] - width - 90



			// $tmpImgSize[1] - height  - 120







			if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			{



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 1"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewImageName;



					$tmpImgSizeNew	=  getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 2"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewImageName; // fileNewThumbImageName







						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				} // END if($tmpImgSize[0] > $thumbWidth )



				else



				{



					// if height > $thumbHeight



					//echo "-------> 3"."<br>";







					if($tmpImgSize[1] > $thumbHeight )



					{



						//echo "-------> 4"."<br>";



						saveThumbOnly($saveAs,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;







						$imgPhyPathNew	=  $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







						if ($tmpImgSizeNew[0] > $thumbHeight)



						{



							//echo "-------> 5"."<br>";



							//$saveAs1	= $tmpNewFilePath;



							$saveAs1	= $folderPath."thumb/".$fileNewImageName;



							//$saveAs1	= $folderPath.$fileNewThumbImageName;







							saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



							$flsave = $saveAs1;



							//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



							$imgPhyPathNew	=  $flsave;



							$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



						}



					}



				}



			} // end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))



			else



			{



				//echo "-------> 6"."<br>";



				if($tmpImgSize[0] > $thumbWidth )



				{



					//echo "-------> 7"."<br>";



					saveThumbOnly($tmpNewFilePath,$thumbWidth,$thumbHeight,"h",$fileNewThumbImageName);



					$flsave = $tmpNewFilePath;







					$imgPhyPathNew	=  $folderPath."thumb/".$fileNewImageName;



					//$imgPhyPathNew	=  $folderPath.$fileNewThumbImageName;



					$tmpImgSizeNew	= getimagesize($imgPhyPathNew);







					if ($tmpImgSizeNew[1] > $thumbHeight)



					{



						//echo "-------> 8"."<br>";



						$saveAs1	    = $folderPath."thumb/".$fileNewImageName;



						//$saveAs1	    = $folderPath.$fileNewThumbImageName;







						saveThumbagain($saveAs1,$thumbWidth,$thumbHeight,"w",$fileNewThumbImageName);



						$flsave = $saveAs1;



						//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);



						$imgPhyPathNew	= $flsave;



						$tmpImgSizeNew	= getimagesize($imgPhyPathNew);



					}



				}



				else



				{



					//echo "-------> 9"."<br>";



					$saveAs	= $tmpNewFilePath;



					saveThumbOnly($saveAs,$tmpImgSize[0],$tmpImgSize[1],"h",$fileNewThumbImageName);



					chmod($saveAs,0755);



					$flsave = $saveAs;



				}



			} // else end if (($tmpImgSize[0] > $thumbWidth) && ($tmpImgSize[1] > $thumbHeight))







		} // end if(move_uploaded_file($fldImage,$tmpNewFilePath))







	} // end if(is_uploaded_file($fileTmpPath))



	//watermarkImage($flsave, '../property_images/water-mark.png' , $flsave);







	//echo $flsave; exit;



	return $flsave;



} // end function ImageUpload($fileTmpPath,$filename)







////////////////////// FUNCTION TO GENERATE THUMB NAILS IMAGES //////////////////////







function saveThumbOnly($filename,$width,$height,$fix,$fileThumbname)



{



	$dire 	=	dirname($filename);



	$fname 	= 	substr($filename,strlen($dire)+1);



	$thumb	=	$dire."/thumb/".$fname;



	//$thumb	=	$dire.$fname;



	$fileThumbname	=	$thumb; //$dire."/".$fileThumbname;



	createthumbonly($filename,$thumb,$fileThumbname,$width,$height,$fix);



}







function saveThumbagain($filename,$width,$height,$fix="n",$fileThumbname)



{



	$dire 	=	dirname($filename);



	$fname 	= 	substr($filename,strlen($dire)+1);



	$thumb	=	$dire."/".$fname;



	$fileThumbname	=	$dire."/".$fileThumbname;



	createthumbonly($filename,$thumb,$fileThumbname,$width,$height,$fix);



}







function createthumbonly($name,$filename,$fileThumbname,$new_w,$new_h,$fix)



{



	//--$fileThumbname : This is varibale used when you need to save thumb and orignal image in same path







	$system  = explode(".",$name);



	$cnt     = count($system);



	$ext123  = $system[$cnt-1];



	$src_img = "";







	if (preg_match("/jpg|jpeg/",$ext123))	{$src_img 	  = imagecreatefromjpeg($name);}



	if (preg_match("/png/",$ext123))		{$src_img	  =	imagecreatefrompng($name);}



	if (preg_match("/gif/",$ext123))		{$src_img	  =	imagecreatefromgif($name);}



	if (preg_match("/bmp/",$ext123))		{$src_img	  =	imagecreatefromwbmp($name);}







	$old_x	= imagesx($src_img);



	$old_y	= imagesy($src_img);







	if($old_x!=0)



	$aspect_ratio =  ($old_x/$old_y);







	if( $fix == "h" )



	{



		$new_h	=   ($new_w/$aspect_ratio);



	}



	else if( $fix == "w" )



	{



		$new_w	= ($new_h * $aspect_ratio);



	}







	$thumb_w	=	$new_w;



	$thumb_h	=	$new_h;







	$dst_img 	= imagecreatetruecolor($thumb_w,$thumb_h);



	imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y);







	if (preg_match("/png/",$system[1]))



	{



		imagepng($dst_img,$fileThumbname);



	}



	else if (preg_match("/gif/",$system[1]))



	{



		imagegif($dst_img,$fileThumbname);



	}



	else if (preg_match("/bmp/",$system[1]))



	{



		image2wbmp($dst_img,$fileThumbname);



	}



	else



	{



		imagejpeg($dst_img,$fileThumbname,100);



	}







	imagedestroy($dst_img);



	imagedestroy($src_img);







	$dir	= substr(dirname($fileThumbname),0,-5) ;







	$tmp 	= explode("/",$name);







	$tmpCnt	= count($tmp);







	$img	= $dir .$tmp[$tmpCnt-1];







}



////////////////////// FUNCTION TO GENERATE THUMB NAILS IMAGES //////////////////////







function EncodeURL($url)



{



	$url = ereg_replace("&","-",$url);



	return $url;



}







function DecodeURL($url)



{



	$url = ereg_replace("-","&",$url);



	return $url;



}







function get_cat_selectlist($current_cat_id, $count)



{



	$indent_flag = "";



	static $option_results;



	// if there is no current category id set, start off at the top level (zero)



	if (!isset($current_cat_id)) {



		$current_cat_id =0;



	}



	// increment the counter by 1



	$count = $count+1;







	// query the database for the sub-category of whatever the parent category is



	$sql = "SELECT cat_id , cat_name from category_master   where parent_id = '$current_cat_id' ";



	$sql .= "order by cat_name asc";







	$get_options = mysql_query($sql) or die($sql.mysql_error());



	$num_options = mysql_num_rows($get_options);







	// our category is apparently valid, so go ahead...



	if ($num_options > 0)



	{



		while (list($cat_id, $cat_name) = mysql_fetch_row($get_options))



		{







			// if its not a top-level category, indent it to show that its a child category



			if ($current_cat_id!=0) {



				$indent_flag = "&nbsp;&nbsp;";



				for ($x=2; $x<=$count; $x++) {



					$indent_flag .= "--&gt;&nbsp;";



				}



			}



			$cat_name = $indent_flag.$cat_name;



			$option_results[$cat_id] = $cat_name;



			// now call the function again, to recurse through the child category



			get_cat_selectlist($cat_id, $count );



		}



	}



	//print_r($option_results);



	return $option_results;



}







function get_proptype_selectlist($current_cat_id, $count)



{



	$indent_flag = "";



	static $option_results;



	// if there is no current category id set, start off at the top level (zero)



	if (!isset($current_cat_id)) {



		$current_cat_id =0;



	}



	// increment the counter by 1



	$count = $count+1;







	// query the database for the sub-category of whatever the parent category is



	$sql = "SELECT typeid,typename   from property_type_master where  status = 'Y' and maintypeid  = '$current_cat_id' ";



	$sql .= "order by typename asc";







	$get_options = mysql_query($sql);



	$num_options = mysql_num_rows($get_options);







	// our category is apparently valid, so go ahead...



	if ($num_options > 0)



	{



		while (list($cat_id, $cat_name) = mysql_fetch_row($get_options))



		{







			// if its not a top-level category, indent it to show that its a child category



			if ($current_cat_id!=0) {



				$indent_flag = "&nbsp;&nbsp;";



				for ($x=2; $x<=$count; $x++) {



					$indent_flag .= "--&gt;&nbsp;";



				}



			}



			$cat_name = $indent_flag.$cat_name;



			$option_results[$cat_id] = $cat_name;



			// now call the function again, to recurse through the child category



			get_proptype_selectlist($cat_id, $count );



		}



	}



	//print_r($option_results);



	return $option_results;



}











function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {



	$file = $path.$filename;



	$file_size = filesize($file);



	$handle = fopen($file, "r");



	$content = fread($handle, $file_size);



	fclose($handle);



	$content = chunk_split(base64_encode($content));



	$uid = md5(uniqid(time()));



	$name = basename($file);



	$header = "From: ".$from_name." <".$from_mail.">\r\n";



	$header .= "Reply-To: ".$replyto."\r\n";



	$header .= "MIME-Version: 1.0\r\n";



	$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";



	$header .= "This is a multi-part message in MIME format.\r\n";



	$header .= "--".$uid."\r\n";



	$header .= "Content-type:text/html; charset=iso-8859-1\r\n";



	$header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";



	$header .= $message."\r\n\r\n";



	$header .= "--".$uid."\r\n";



	$header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use diff. tyoes here



	$header .= "Content-Transfer-Encoding: base64\r\n";



	$header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";



	$header .= $content."\r\n\r\n";



	$header .= "--".$uid."--";



	mail($mailto, $subject, $content, $header);



}







function generateURL($pageID) {



	$query = "select  prop_name from property_master where prop_id = '$pageID'";



	$result = mysql_query($query) or die($query.mysql_error());



	$titleAry = mysql_fetch_array($result);



	$title = str_replace(' ', '-', strtolower($titleAry['prop_name']));



	$title = str_replace('&', 'and', $title );



	$title = str_replace('+', '-', $title );



	$title = str_replace('(', '-', $title );



	$title = str_replace(')', '-', $title );



	$title = str_replace('!', '-', $title );



	$title = str_replace('----', '-', $title );



	$title = str_replace('---', '-', $title );



	$title = str_replace('--', '-', $title );



	$title = str_replace(',', '', $title );



	$title = str_replace('\'', '', $title );



	$title .= '-rent-'.$pageID.'.html';



	$fullUrl = 'http://www.providentestate.com/dubai-rentals/'.$title;



	return $fullUrl;



}







function watermarkImagerent($sourcefile, $watermarkfile, $saveFile, $dir="center") {
		
		#
		# $sourcefile = Filename of the picture to be watermarked.
		# $watermarkfile = Filename of the 24-bit PNG watermark file.
		#
		
		//Get the resource ids of the pictures
		$watermarkfile_id = imagecreatefrompng($watermarkfile);
		imageAlphaBlending($watermarkfile_id, false);
		imageSaveAlpha($watermarkfile_id, true);
		$fileType = strtolower(substr($sourcefile, strlen($sourcefile)-3));
		
		switch($fileType) 
		{
			case('gif'):
				$sourcefile_id = imagecreatefromgif($sourcefile);
			break;
			
			case('png'):
				$sourcefile_id = imagecreatefrompng($sourcefile);
			break;
			
			default:
				$sourcefile_id = imagecreatefromjpeg($sourcefile);
		}
		
		//Get the sizes of both pix   
		$sourcefile_width=imageSX($sourcefile_id);
		$sourcefile_height=imageSY($sourcefile_id);
		$watermarkfile_width=imageSX($watermarkfile_id);
		$watermarkfile_height=imageSY($watermarkfile_id);
		
		if(isset($_REQUEST['imgPhoto_x']))
		{		
			$dest_x = $_REQUEST['imgPhoto_x'];
			$dest_y = $_REQUEST['imgPhoto_y'];
		}
		else if($dir == "center")
		{
			$dest_x = ( $sourcefile_width / 2 ) - ( $watermarkfile_width / 2 );
			$dest_y = ( $sourcefile_height / 2 ) - ( $watermarkfile_height / 2 );
		} 
		else if($dir == "top_right") 
		{
			$dest_x =  $sourcefile_width - $watermarkfile_width;
			$dest_y = 0;
		}
		else if($dir == "top_left") 
		{
			$dest_x =  0;
			$dest_y = 0;
		}
		else if($dir == "bottom_left") 
		{
			$dest_x =  0;
			$dest_y = $sourcefile_height - $watermarkfile_height;
		}
		else if($dir == "bottom_right") 
		{
			$dest_x =  $sourcefile_width - $watermarkfile_width;
			$dest_y = $sourcefile_height - $watermarkfile_height;
		}
		
		// if a gif, we have to upsample it to a truecolor image
		if($fileType == 'gif') 
		{
			// create an empty truecolor container
			$tempimage = imagecreatetruecolor($sourcefile_width,$sourcefile_height);
			
			// copy the 8-bit gif into the truecolor image
			imagecopy($tempimage, $sourcefile_id, 0, 0, 0, 0,$sourcefile_width, $sourcefile_height);
			
			// copy the source_id int
			$sourcefile_id = $tempimage;
		}
		imagecopy($sourcefile_id, $watermarkfile_id, $dest_x, $dest_y, 0, 0,$watermarkfile_width, $watermarkfile_height);
		//Create a jpeg out of the modified picture
		switch($fileType) 
		{
			// remember we don't need gif any more, so we use only png or jpeg.
			// See the upsaple code immediately above to see how we handle gifs
			case('png'):
				//header("Content-type: image/png");
				imagepng ($sourcefile_id);
			break;
			
			default:
				//header("Content-type: image/jpg");
				if($saveFile!=''){
					imagejpeg ($sourcefile_id,$saveFile,95);
				} else { 
					header("Content-type: image/jpg");
					imagejpeg ($sourcefile_id,"",95);
				}
				
			//echo "<img src='$saveFile'>";
		}       
		 
		imagedestroy($sourcefile_id);
		imagedestroy($watermarkfile_id);
		return true;
	
	}







function genRefNo ($tmpoutVal = 0) {  //echo '<br>';echo $tmpoutVal ;echo '<br>';



	$brokquery  = "select prop_ref_no,added_on from property_master ORDER BY prop_id DESC LIMIT 1 ";



	$brokresult = mysql_query($brokquery) or die($brokquery.mysql_error());



	$broktotal = mysql_num_rows($brokresult);



	$tmpout ="";



	if($broktotal > 0) {



		//for($k=0; $k<$broktotal; $k++) {



		$brokrow = mysql_fetch_array($brokresult);



		if($brokrow["prop_ref_no"]!=""){



			$tmprefno = $brokrow["prop_ref_no"];



		}



		$tmpaz = explode('/', $tmprefno);



		if($tmpaz[1] > $tmpout)



		$tmpval = $tmpaz[1];







		//} // for $n



	}



	if($tmpoutVal == 0)



	$tmpout = $tmpval+1;



	else



	$tmpout = $tmpoutVal + $tmpval;



	//echo	$tmpout = $tmpoutVal ;



	if(strlen($tmpout)==1) $tmpout = "000".$tmpout;



	if(strlen($tmpout)==2) $tmpout = "00".$tmpout;



	if(strlen($tmpout)==3) $tmpout = "0".$tmpout;



	// Generate Ref No.



	$fldstrno = $tmpout;



	//$fldrefno = date("y").date("m").'/'.$fldstrno;



	$fldrefno ='DLS-'.$fldstrno;



	if(checkExist($fldrefno)) {



		++$tmpoutVal;



		$fldrefno = genRefNo ($tmpoutVal);



	}



	return $fldrefno;



}







function checkExist($fldrefno) {



	$brokquery  = "select prop_ref_no FROM property_master WHERE prop_ref_no ='$fldrefno' ";



	$brokresult = mysql_query($brokquery) or die($brokquery.mysql_error());



	$broktotal = mysql_num_rows($brokresult);



	if($broktotal > 0)



	return true;



	else



	return false;



}







function get_name_by_id($table_name="",$id_field="",$name_field="",$id="",$consratint="")



{



	global $db;



	if($id != "")



	{



		$sql = "Select $name_field  from $table_name  WHERE $id_field = ".$id.$consratint." ORDER BY $name_field asc";



		//echo $sql;



		$rs = mysql_query($sql);



		if($rs)



		{



			if(mysql_num_rows($rs)>0 )



			return(mysql_result($rs,0));



		}



	}



	else



	{



		return "";



	}



}



function myTruncate($string, $limit, $break=".", $pad="...") {



	//return with no change if string is shorter than $limit



	if(strlen($string) <= $limit) return $string;



	// is $break present between $limit and the end of the string?



	if(false !== ($breakpoint = strpos($string, $break, $limit))) { if($breakpoint < strlen($string) - 1) { $string = substr($string, 0, $breakpoint) . $pad; } } return $string;



}











function resizeDaImage2($src_file, $dest_file, $size_limit_width, $size_limit_height)    {



	//echo $src_file;



	$file_ext=getExtension($src_file);



	####### RESIZING START #######



	$img_info = getimagesize ($src_file);



	$orig_width = $img_info[0];



	$orig_height = $img_info[1];



	$jpegQuality = 95;







	if ( $orig_height/$size_limit_height < $orig_width/$size_limit_width )    {



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



	@imagejpeg($base_image, SERVER_PATH.'tmp/temp.jpg');



	imagedestroy($base_image);



	ini_set(safe_mode,On);



	if($file_ext=='jpg'){



		$img = @imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');



		$imageToResize = @imagecreatefromjpeg("$src_file");



	}



	if($file_ext=='gif'){



		$img = @imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');



		$imageToResize = @imagecreatefromgif($src_file);



	}



	if($file_ext=='png'){



		$img = @imagecreatefromjpeg(SERVER_PATH.'tmp/temp.jpg');



		$imageToResize = @imagecreatefrompng($src_file);



	}



	@imageCopyResampled($img, $imageToResize, 0, 0, 0, 0, $new_w+1, $new_h+1, $orig_width, $orig_height);



	$new_image = imageCreateTrueColor($size_limit_width, $size_limit_height);



	imagefill($new_image, 0, 0, 0xffffff);



	@imagecopy ($new_image, $img, ($size_limit_width-$new_w)/2, ($size_limit_height-$new_h)/2, 0, 0, $new_w, $new_h);







	if($file_ext=='jpg')



	imagejpeg($new_image, "$dest_file", $jpegQuality);



	if($file_ext=='gif')



	imagejpeg($new_image, "$dest_file", $jpegQuality);



	if($file_ext=='png')



	imagejpeg($new_image, "$dest_file", $jpegQuality);







	imagedestroy($new_image);



	imagedestroy($imageToResize);







	#echo "Original Size = $orig_width x $orig_height => resizing done = $new_w x $new_h => adjustment done = $size_limit_width x $size_limit_height<br>";



	####### RESIZING END #######



}

function WordLimiter($text,$limit=20){

    $explode = explode(' ',$text);

    $string  = '';



    $dots = '...';

    if(count($explode) <= $limit){

        $dots = '';

    }

    for($i=0;$i<$limit;$i++){

        $string .= $explode[$i]." ";

    }

    if ($dots) {

        $string = substr($string, 0, strlen($string));

    }



    return $string.$dots;

}



?>