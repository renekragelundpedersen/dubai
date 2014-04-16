<?php 
$n=$_REQUEST['n'];
// CODE FOR PAGING
if (!isset($num_totrec)) $num_totrec = $db_recs[0]["tot"]; 
// $num_totrec SHOULD BE PASSED
// $pg_limit 	= 10;//$obj->ADM_PAGELIMIT; //page limit
if (!isset($n) or $n == "") {
	$rec_limit = $record_limit; //$obj->ADM_RECLIMIT;  //record limit
} else {
	$rec_limit = $n;
} 
$var_self = $dbobj->HOST; //url
$num_tmp = 0;
$var_flg = "0";
$var_limit = "";
$num_limit = 0;
$var_filter = ""; 
$start=$_REQUEST['start'];
$nstart=$_REQUEST['nstart'];
// YOU MAY NEED TO CHANGE THIS VARIBLE
if(isset($_REQUEST['file'])) {
	$fname = $_REQUEST['file'];
} else {
	$fname = 'default';
}
$var_file_url = $PHP_SELF . "?" . 'file='.$fname;
/**
* FOR EXAMPLE
* We use to call all the files from index.php and we pass the file name to index.php in query string by variable $file, so in this case we change above code to 
* //$var_file_url = $PHP_SELF . "?file=" . $file;
*/ 
// CHANGE THIS CODE WITH SUITABLE VARIABLES
if (isset($keyword)) $var_filter = "&keyword=" . rawurlencode($keyword) . "&option=$option"; 
// ENDS HERE
// SET Extra querystring variables to pass from here
// $var_extra can be attached with the links for this purpose

if (isset($start)) {
	$num_limit = ($start-1) * $rec_limit;
$var_limit = " LIMIT $num_limit,$rec_limit";
} else
	$var_limit = " LIMIT 0,$rec_limit";

if (!isset($nstart)) {
	if ($num_totrec) { // if recs exists!!
		if ($rec_limit > $num_totrec) {
			$num_pgs = 1;
			$var_flg = "2";
		} else {
			$num_loopctr = 0;
			$num_loopctr = ceil($num_totrec / $rec_limit);
			if ($pg_limit > $num_loopctr) {
				$num_pgs = $num_loopctr;
				$var_flg = "2";
			} else {
				$num_pgs = $pg_limit;
				if ($num_totrec <= ($rec_limit * $pg_limit)) $var_flg = "2";
				else $var_flg = "1";
			} 
		} 
		$var_link = "";
		$var_prevlink = ""; 
		// if sorting is set
		$var_sort_link = "";
		if (isset($sorton)) $var_sort_link = "&sorton=$sorton"; 
		// $var_prevlink ="<font face=verdana size=1 color=black>Prev <&nbsp;&nbsp;|";
		$var_prevlink = "";
		if (!isset($start)) {
			$start = 1;
		} 
		for($i = 1;$i <= $num_pgs;$i++) {
			if ($start == $i) {
				$var_link .= "$i&nbsp;|&nbsp;";
			} ELSE {
				$var_link .= "<a style=\"font-size:10px\" href=\"$var_self$var_file_url&nstart=1&start=$i$var_filter$var_sort_link$var_extra\">$i</a>&nbsp;|&nbsp;";
			} 
		} 
		if ($var_flag != "0" and $var_flg != "2") {
			$var_link .= "&nbsp;>&nbsp;<a style=\"font-size:10px\" href=\"$var_self$var_file_url&nstart=2&start=$i$var_filter$var_filter$var_sort_link$var_extra\"> Next</a></font>";
		} else {
			$var_link .= "";
			//$var_link .= "> Next</font>";
		} 
		$page_link = "";
		$page_link = "$var_prevlink $var_link";
	} else {
		// IF NO RECORDS EXISTS!!
		$var_link = "";
	} 
} else { // if nstart is set
	if ($num_totrec) { // if recs exists!!
		$num_loopctr = 0;
		$num_rem_rec = 0;
		$num_rem_rec = ($num_totrec - (($nstart-1) * $rec_limit * $pg_limit));
		$num_loopctr = ceil($num_rem_rec / $rec_limit);
		$num_tmp = $rec_limit * $nstart * $pg_limit;
		$last_start = 0;
		$last_start = ceil($num_totrec / $rec_limit);
		$last_nstart = 0;
		$last_nstart = ceil($num_totrec / ($rec_limit * $pg_limit));
		if ($num_tmp > $num_totrec) {
			$num_pgs = $num_loopctr;
			$var_flg = "2";
		} else {
			$num_pgs = $pg_limit;
			if ($num_totrec == ($nstart * $rec_limit * $pg_limit)) $var_flg = "2";
			else $var_flg = "1";
		} 
		$var_link = "";
		$var_prevlink = ""; 
		// if sorting is set
		$var_sort_link = "";
		if (isset($sorton)) $var_sort_link = "&sorton=$sorton";
		$num_prevnstart = 0;
		$num_prevstart = 0;
		$num_prevnstart = $nstart-1;
		$num_prevstart = ($nstart * $pg_limit) - $pg_limit;
		$num_tmp = ($num_totrec / $rec_limit);

		if ($nstart <= 1) {
			$var_prevlink = "";
			//$var_prevlink ="<font face=verdana size=1 color=black>Prev <&nbsp;|";
		} else
			$var_prevlink = "[<a style=\"font-size:10px\"  href=\"$var_self$var_file_url&nstart=1&start=1$var_filter$var_sort_link$var_extra\">First Page</a>]&nbsp;&nbsp;<a style=\"font-size:10px\"  href=\"$var_self$var_file_url&nstart=$num_prevnstart&start=$num_prevstart$var_filter$var_sort_link$var_extra\">Prev</a>&nbsp;<font face=verdana size=2 color=black><&nbsp;|</font>";

		for($i = 1;$i <= $num_pgs;$i++) {
			$num_start = $num_prevstart + $i;
			$num_nstart = $nstart + 1;
			if ($num_start == $start) $var_link .= "$num_start&nbsp;|&nbsp;";
			ELSE $var_link .= "<a style=\"font-size:10px\"  href=\"$var_self$var_file_url&nstart=$nstart&start=$num_start$var_filter$var_sort_link$var_extra\">$num_start</a>&nbsp;|&nbsp;";
		} 
		$num_start++;
		if ($var_flag != "0" and $var_flg != "2") {
			$var_link .= "&nbsp;><a style=\"font-size:10px\"  href=\"$var_self$var_file_url&nstart=$num_nstart&start=$num_start$var_filter$var_sort_link$var_extra\"> Next</a></font>&nbsp;&nbsp;[<a style=\"font-size:10px\"  href=\"$var_self$var_file_url&nstart=$last_nstart&start=$last_start$var_filter$var_sort_link$var_extra\">Last Page</a>]";
		} else {
			$var_link .= "";
			// $var_link .= "<font face=verdana size=1 color=black>&nbsp;> Next</font>";
		} 
		$page_link = "";
		$page_link = "$var_prevlink $var_link";
	} else {
		// IF NO RECORDS EXISTS!!
		$var_link = "";
	} 
} 
// if set the paging variables
if (isset($nstart)) $var_pgs = "&nstart=$nstart&start=$start"; //attach this with the sorting links  
// CODE FOR PAGING ENDS OVER HERE

function createpagecombo() {
	if(!isset($_REQUEST['n'])) $_REQUEST['n']=PAGE_COMBO;
	$page = '10,20,30,40,50,75,100';
	$pagearr=explode(",",$page);
	$selectstr = '';
	$selectstr = "<select name=\"n\" id=\"n\" class=\"textfield\" onchange=\"custuom_paging('".$_REQUEST['file']."')\">";
	for($r=0; $r<sizeof($pagearr); $r++) {
		if($_REQUEST['n']==$pagearr[$r]) {
   			$selectstr .= '<option value="'.$pagearr[$r].'" selected>Show '.$pagearr[$r].' Records Per Page</option>';
		} else {
			$selectstr .= '<option value="'.$pagearr[$r].'">Show '.$pagearr[$r].' Records Per Page</option>';
		}
	}
    $selectstr .= '</select>';
	return $selectstr;
}
?>