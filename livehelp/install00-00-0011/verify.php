<?php
/*
stardevelop.com Live Help
International Copyright stardevelop.com

You may not distribute this program in any manner,
modified or otherwise, without the express, written
consent from stardevelop.com

You may make modifications, but only for your own 
use and within the confines of the License Agreement.
All rights reserved.

Selling the code for this program without prior 
written consent is expressly forbidden. Obtain 
permission before redistributing this program over 
the Internet or in any other medium.  In all cases 
copyright and header must remain intact.  
*/

include('../include/functions.php');

error_reporting(E_ERROR | E_PARSE);
set_time_limit(0);

if (!get_magic_quotes_gpc()) {
	$_REQUEST = array_map('addslashes', $_REQUEST);
}

// HTTP/1.1
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

// HTTP/1.0
header('Pragma: no-cache');

$result = true;
$text = '';
$mysql = '';
$type = 0;

if (function_exists('mysql_connect')) {
	$link = mysql_connect($_REQUEST['HOSTNAME'], $_REQUEST['USERNAME'], $_REQUEST['PASSWORD']);
	if (!$link) {
		switch (mysql_errno()) {
			case 1045:
				$text = 'Invalid Database Username / Password';
				$mysql = mysql_error();
				$type = mysql_errno();
				$result = false;
				break;
		}
	} else {
		$selected = mysql_select_db($_REQUEST['DATABASE'], $link);
		if (!$selected) {
			$text = 'Invalid MySQL Database Name';
			$mysql = mysql_error();
			$type = mysql_errno(); // MySQL Error #1044
			$result = false;
		}
	}
} else {
	$link = mysqli_connect($_REQUEST['HOSTNAME'], $_REQUEST['USERNAME'], $_REQUEST['PASSWORD']);
	if (!$link) {
		switch (mysqli_connect_errno()) {
			case 1045:
				$text = 'Invalid Database Username / Password';
				$mysql = mysqli_error();
				$type = mysqli_errno();
				$result = false;
				break;
		}
	} else {
		$selected = mysqli_select_db($link, $_REQUEST['DATABASE']);
		if (!$selected) {
			$text = 'Invalid MySQL Database Name';
			$mysql = mysqli_error();
			$type = mysqli_errno(); // MySQL Error #1044
			$result = false;
		}
	}
}

$json = array();
$json['result'] = $result;
if (!$result) {
	$error = array();
	$error['error'] = $text;
	$error['mysql'] = $mysql;
	$error['type'] = $type;
	$json['error'] = $error;
}
$json = json_encode($json);
if (!isset($_GET['callback'])) {
	header('Content-Type: application/json; charset=utf-8');
	exit($json);
} else {
	if (is_valid_callback($_GET['callback'])) {
		header('Content-Type: text/javascript; charset=utf-8');
		exit($_GET['callback'] . '(' . $json . ')');
	} else {
		header('Status: 400 Bad Request');
		exit();
	}
}

?>