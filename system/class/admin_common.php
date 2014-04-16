<?php 
class admin_common extends dbclass{
	function get_common_detail($sorton, $sorttype = 'ASC', $option = '', $keyword = '', $var_limit, $table_name) {
		if(isset($keyword) && !empty($keyword)) {
			$search_cond = " AND ".$option." LIKE '".$keyword."%'";
		}
		if(!empty($sorton))
			$order_cond = ' ORDER BY '.$sorton.' '.$sorttype;
		else 
			$order_cond = ' ORDER BY '.$sorttype;
			$query = "SELECT * FROM  ".$table_name." WHERE deleteflag='No'".$search_cond.$order_cond.$var_limit; 
			
		$sql = $this->select($query);
		return $sql;
	}
	
	function countCommonDetail($option, $keyword,$table_name) {
		if(isset($keyword) && !empty($keyword)) {
			$search_cond = $option." = '".$keyword."'";
		}
		$query = "SELECT COUNT(*) AS tot FROM ".$table_name." WHERE ".$search_cond;
		$sql = $this->select($query);
		return $sql[0]["tot"];
	}
	
	function sum_common_detail($option, $keyword, $field, $table_name) {
		if(isset($keyword) && !empty($keyword)) {
			$search_cond = " AND ".$option." like '".$keyword."%'";
		}
		$query = "SELECT SUM($field) AS tot FROM ".$table_name." WHERE deleteflag='No'".$search_cond; 
		$sql = $this->select($query);
		return $sql[0]["tot"];
	}
	
	function getCalendar( $field, $where, $table_name, $limit = false) {
		$query = "SELECT $field  FROM ".$table_name." WHERE deleteflag='No' ".$where. ' '.$limit;  
		$sql = $this->select($query);
		return $sql;
	}
	function parms($param_name) {
	  global $HTTP_POST_VARS;
	  global $HTTP_GET_VARS;
	  $param_value = "";
	  if(isset($HTTP_POST_VARS[$param_name]))
		$param_value = trim($HTTP_POST_VARS[$param_name]);
	  else if(isset($HTTP_GET_VARS[$param_name]))
		$param_value = trim($HTTP_GET_VARS[$param_name]);
	
	  return $param_value;
	}
	
	function generateKey($length=6, $level=2){
	   list($usec, $sec) = explode(' ', microtime());
	   srand((float) $sec + ((float) $usec * 100000));
	
	   $validchars[1] = "0123456789abcdfghjkmnpqrstvwxyz";
	   $validchars[2] = "0123456789abcdfghjkmnpqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	   $validchars[3] = "0123456789_!@#$%&*()-=+/abcdfghjkmnpqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!@#$%&*()-=+/";
	
	   $password  = "";
	   $counter   = 0;
	
	   while ($counter < $length) {
	     $actChar = substr($validchars[$level], rand(0, strlen($validchars[$level])-1), 1);
	     if (!strstr($password, $actChar)) {
	        $password .= $actChar;
	        $counter++;
	     }
	   }
	   return $password;
	}
	
	function funoperation($table_name, $id) {
		$msg='';
		if($_REQUEST['action']=='active') {
			$query = "UPDATE ".$table_name." SET status='Active' WHERE ".$id." in (".implode(",",$_REQUEST['chk']).")";
			$msg='Selected Record(s) Active Successfully';
		}
		if($_REQUEST['action']=='inactive') {
			$query = "UPDATE ".$table_name." SET status='Inactive' WHERE ".$id." in (".implode(",",$_REQUEST['chk']).")";
			$msg='Selected Record(s) Inactive Successfully';
		}
		if($_REQUEST['action']=='delete') {
			$query = "UPDATE ".$table_name." SET deleteflag='Yes' WHERE ".$id." in (".implode(",",$_REQUEST['chk']).")";
			$msg='Selected Record(s) Deleted Successfully';
		}
		$this->update($query);
		return $msg;
	}

	function getCommonSingle($txtpage_contentid, $table_name, $id, $field = '', $tagCount = false, $tagStatus = 'Yes') {
		if(empty($field)) {
			$query = "SELECT * FROM ".$table_name." WHERE ".$id."='".$txtpage_contentid."'"; 
		$sql = $this->select($query);
		} else {
			$query = "SELECT $field FROM ".$table_name." WHERE ".$id."='".$txtpage_contentid."'";
			$sql = $this->select($query);
		} 
		if($tagCount) {
			$this->addTags($txtpage_contentid, $table_name, $id, $tagStatus);
		}
		return $sql;
	}
	
	function update_common_detail($id_val,$table_name,$id,$field) {
		$msg='';
		$sql="SELECT * FROM ".$table_name;
		$res=mysql_query($sql);
		
		$i = 0;
		while ($i < mysql_num_fields($res)) {
			$meta= mysql_fetch_field($res, $i);
			 $field_names[$i] = $meta ->name; 
			 $i++;
		}
		$arrfield=explode(',+,',$field);
		
		$query = "UPDATE ".$table_name." SET ";
		for($i=1;$i<count($field_names);$i++)
		{
			if($i == count($field_names)-1)
				$query .= $field_names[$i] ."='". $arrfield[$i-1]."'";
			else
				$query .= $field_names[$i] ."='". $arrfield[$i-1]."',";
		}
		 $query .="WHERE ".$id."='".$id_val."'";
		echo $query;
		die();
		$sql = $this->update($query);
		$msg='Records update Successfully';
		return $msg;
	}
	
	function add_common_detail($table_name, $field) {
		$msg='';

		$sql="SELECT * FROM ".$table_name;
		$res = mysql_query($sql);
						
		$i = 0;
		while ($i < mysql_num_fields($res)) {
			$meta= mysql_fetch_field($res, $i);
			 $field_names[$i] = $meta ->name; 
			 $i++;
		}
				
		$arrfield=explode(',+,',$field);
		
		$query = "INSERT  ".$table_name." SET ";
		for($i=1;$i<count($field_names);$i++) {
			if($i == count($field_names)-1)
				$query .= $field_names[$i] ."='". $arrfield[$i-1]."'";
			else
				$query .= $field_names[$i] ."='". $arrfield[$i-1]."',";
		}
		/*echo $query;
		die();*/
		
		$sql = $this->insert($query);
		//$msg='Records Added Successfully';
		$msg = mysql_insert_id();
		return $msg;
	}
	
	
	function dbUpdate(array $values, $table, $where = false, $limit = false) {
		if (count($values) < 0)
			return false;
		$fields = array();
		foreach($values as $field => $val)
			$fields[] = "`" . $field . "` = '" . $this->escapeString($val) . "'";
		$where = ($where) ? " WHERE " . $where : '';
		$limit = ($limit) ? " LIMIT " . $limit : '';
		//echo "UPDATE `" . $table . "` SET " . implode($fields, ", ") . $where . $limit; echo '<br/>' ;exit;
		if ($this->update(str_replace("'NOW()'", "NOW()","UPDATE `" . $table . "` SET " . implode($fields, ", ") . $where . $limit)))
			return true;
		else
			return false;
	}
	
	function dbInsert(array $values, $table) {
		if (count($values) < 0)
			return false;
		
		foreach($values as $field => $val)
			$values[$field] = $this->escapeString($val); 
			//echo "INSERT INTO `" . $table . "`(`" . implode(array_keys($values), "`, `") . "`) VALUES ('" . implode($values, "', '") . "')";  echo '<br/>'; exit;
			$lstId = $this->insert(str_replace("'NOW()'", "NOW()","INSERT INTO `" . $table . "`(`" . implode(array_keys($values), "`, `") . "`) VALUES ('" . implode($values, "', '") . "')"));
			
		if ($lstId)
			return $lstId;
		else
			return false;
	}
	
	function dbSelect($fields, $table, $where = false, $orderby = false, $limit = false) {
		if (is_array($fields))
			$fields = "`" . implode($fields, "`, `") . "`";

		$orderby = ($orderby) ? " ORDER BY " . $orderby : '';
		$where = ($where) ? " WHERE " . $where : '';
		$limit = ($limit) ? " LIMIT " . $limit : '';
		//echo "SELECT " . $fields . " FROM " . $table . $where . $orderby . $limit;
		$result = $this->select("SELECT " . $fields . " FROM " . $table . $where . $orderby . $limit);
		var_dump($result);
		if ($this->countRows($result) > 0) {
			$rows = array();

			while ($r = $this->fetchAssoc($result))
				$rows[] = $r;

			return $rows;
		} else
			return false;
	}
	
	function escapeString($str) {
		return mysql_real_escape_string($str);
	}
	
	public function selectOne($fields, $table, $where = false, $orderby = false) {
		$result = $this->select($fields, $table, $where, $orderby, '1');
		return $result[0];
	}
	
	
	public function selectOneValue($field, $table, $where = false, $orderby = false) {
		$result = $this->selectOne($field, $table, $where, $orderby);
		return $result[$field];
	}
	
	public function countRows($result = false) {
		$this->resCalc($result);
		return (int) mysql_num_rows(count($result));
	}
	
	private function resCalc(&$result) {
		if ($result == false)
			$result = $this->result;
		else {
			if (gettype($result) != 'resource')
				$result = $this->sql_query($result);
		}
		return;
	}
	public function updateTage($fld, $table) {
		$this->update("UPDATE `tags` SET `tag` = tag+1 WHERE table_name = '$table' AND table_field = '$fld'");
	}
	
	
	function trimSentence($str, $numChars=0, $force=0, $from=0) {
		mb_internal_encoding("UTF-8");
		$strLength = mb_strlen($str);
		if((mb_strlen($str) <= $numChars) && !$force) {
			return $str;
		}
		if($numChars == 0) {
			$numChars = mb_strlen($str);
		}
		$str = mb_substr($str, $from, $numChars);
		$pos = mb_strrpos($str, ' ');
		if(!empty($pos)) {
			$str=mb_substr($str, 0, $pos);
			}
		if ($strLength > $numChars) {
			$str;
		}
		return $str;
	}

function getAllowedPost($memID , $type) { 
	$memDetails = $this->select("SELECT  memtype FROM membership_feature WHERE name like '%$type%' LIMIT 0 , 1" );
	$typeAry = explode('/', $memDetails[0]['memtype']);
	$totCount = $typeAry[$memID-1];
	return $totCount;
}
	
	
function getPageTitles($TotalRowCount, $RowsPerPage, $CurrPageNo, $PageName, $AppendURL, $ClassLink='') {
		$TotalPages		=	ceil($TotalRowCount/$RowsPerPage);
		if($CurrPageNo < 8) {
			if($TotalPages < 10) {
				$Start	=	1;
				$End	=	$TotalPages;
			} else {
				$Start	=	1;
				$End	=	10;
			}
		} else {
			$Start	=	$CurrPageNo - 5;
			$End	=	$CurrPageNo + 4;
			if($End > $TotalPages)
				$End	=  $TotalPages;
		}	
		//$TitlePages		=	'Pages ';
		
		for($i=$Start; $i<=$End; $i++) {
			if($CurrPageNo == $i)
				$TitlePages	.=	"&nbsp;$i&nbsp;";		
			else
				$TitlePages	.=	"&nbsp;<a class=\"$ClassLink\" href=\"$PageName?currpage=$i$AppendURL\">$i</a>&nbsp;";		
		}
		return $TitlePages;
	
	}
	
function image_resize($filename,$path,$width = 300,	$height = 150) {
	getimagesize($filename);
	list($width_orig, $height_orig) = getimagesize($filename);
	$length=strlen($filename);
	$name=substr($filename,$length-3,$length);
	$image_p = imagecreatetruecolor($width, $height);
	if($name=='jpg' || $name=='JPG') {
		ini_set("memory_limit","150M");
		$image = imagecreatefromjpeg($filename);
		imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
		imagejpeg($image_p, $path);
	} else {
		ini_set("memory_limit","150M");
		$image = imagecreatefromgif($filename);
		imagecopyresampled($image_p, $image, 0, 0, 0, 0, $width, $height, $width_orig, $height_orig);
		imagegif($image_p, $path);
	}
}

function paging( $url, $total,  $limit, $page ) {
	if ($total > $limit){
		if($page>$total-5){
			$c=$total-$page;
			$page1=$page+$c;
		} else {
			$page1=$page+5;
		}
	}
	if($page<6){
		$d=6-$page;
		$s=5-$d;
		$page2=$page-$s;
	} else {
		$page2=$page-5;
	}
	
    if ($page == 1) { // this is the first page - there is no previous page 
       // echo "Previous"; 
	} else {        // not the first page, link to the previous page 
		echo "<a href=\"$url&page=1\" class=\"normaltext\">First</a>"; 
		echo " | ";
		echo " ";
        echo "<a href=\"$url&page=" . ($page - 1) . "\" class=\"normaltext\">Previous</a>"; 
	}
	if($page<6) {  
	 if($pager->numPages<5) {	
		for ($i = 1; $i <= $pager->numPages; $i++) { 
        	echo " | "; 
        	if ($i == $page) 
            	echo "","$i"; 
       	 	else 
            	echo "<a href=\"$url&page=$i\" class=\"normaltext\">$i</a>"; 
		} echo " | ";
	 } else {
	  for ($i = 1; $i <=5; $i++) { 
        	echo " | "; 
        	if ($i == $page) 
            	echo "","$i"; 
       	 	else 
            	echo "<a href=\"$url&page=$i\" class=\"normaltext\">$i</a>"; 
		} echo " | ";
	 }
	} else {
		for ($i = $page2; $i <= $page; $i++) { 
        	echo " | "; 
        	if ($i == $page) 
            	echo "$i"; 
        	else 
            	echo "<a href=\"$url&page=$i\" class=\"normaltext\">$i</a>"; 
    	}
    	 echo " | ";
	}
    if ($page == $pager->numPages) {// this is the last page - there is no next page 
		
        echo "";
	} else {            // not the last page, link to the next page 
		echo ""; 
        echo "<a href=\"$url&page=" . ($page + 1) . "\" class=\"normaltext\">Next</a>";
			echo " | ";
		echo "<a href=\"$url&page=".$total."\" class=\"normaltext\"> Last</a>";
	} 
}

	function getSingle($id, $idField, $tableName, $fieldName = false) {
		if(empty($fieldName))
			$sqlQry = "SELECT * FROM $tableName WHERE `$id` = $idField";
		else
			$sqlQry = "SELECT $fieldName FROM $tableName WHERE `$id` = $idField";
		return  $this->select($sqlQry);
	}
	
	function generateUrl($id, $table, $mod='') {
		switch ($table) {
	case 'content':
		$rst = $this->select( "SELECT pagename, parentid FROM `content` WHERE pageid = $id");
		$title = str_replace(' ', '-', trim(stripcslashes(strtolower($rst[0]['pagename']))));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		switch ($rst[0]['parentid'] ) {
			case 1 : 
				$link = SERVER_URL."club-facilities/$title-$id.html";
				break;
			case 2 : 
				$link = SERVER_URL."golf-course/$title-$id.html";
				break;
			case 3 : 
				$link = SERVER_URL."golf-academy/$title-$id.html";
				break;
			default :
				$link = SERVER_URL."content/$title-$id.html";
				break;
		}
		break;
	case 'press':
		$rst = $this->select( "SELECT news_title FROM `news_master` WHERE  is_active = 'Y' AND news_id = $id");
		$title = str_replace(' ', '-', strtolower($rst[0]['news_title']));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		$link = SERVER_URL."press-release/$title-$id.html";
		break;
	case 'imagegallery': 
		$rst = $this->select( "SELECT gallery_title FROM `gallery_master` WHERE gallery_id = $id");
		$title = str_replace(' ', '-', trim(stripcslashes(strtolower($rst[0]['gallery_title']))));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		$link = SERVER_URL."image-gallery/$title-$id.html";
		break;
	case 'offer':
		$rst = $this->select( "SELECT offer_title FROM `offers_master` WHERE  status = 'Active' AND offer_id = $id");
		$title = str_replace(' ', '-', trim(stripcslashes(strtolower($rst[0]['offer_title']))));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		$link = SERVER_URL."special-offer/$title-$id.html";
		break;
	case 'event':
		$rst = $this->select( "SELECT event_title FROM `event_master` WHERE  status = 'Active' AND event_id = $id");
		$title = $rst[0]['event_title'];
		$link = SERVER_URL."events-details.php?pid=$id";
		break;
	case 'newsletter':
		$rst = $this->select( "SELECT newsletter_title FROM  `newsletter_master` WHERE newsletter_id = $id AND status = 'Active'");
		$title = $rst[0]['newsletter_title'];
		$link = SERVER_URL."newsletter-details.php?pid=$id";
		break;
	case 'diary':
		$rst = $this->select( "SELECT golf_diary_title FROM  `golf_diary_master` WHERE golf_diary_id = $id AND status = 'Active'");
		$title = str_replace(' ', '-', trim(stripcslashes(strtolower($rst[0]['golf_diary_title']))));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		$link = SERVER_URL."golf-diary/$title-$id.html";
		break;
	case 'membership':
		$rst = $this->select( "SELECT mem_name, mem_desc  FROM  `memebership_types` WHERE mem_type_id = $id AND status = 'Active'");
		$title = str_replace(' ', '-', trim(stripcslashes(strtolower($rst[0]['mem_name']))));
		$title = str_replace('&', 'and', $title );
		$title = str_replace('\'', '', $title );
		$link = SERVER_URL."memebership/$title-$id.html";
		break;
	}
	
	return $link;
	}
}



?>
