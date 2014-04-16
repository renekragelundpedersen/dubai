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
if (!isset($_SERVER['DOCUMENT_ROOT'])){ $_SERVER['DOCUMENT_ROOT'] = ''; }
if (!isset($_REQUEST['TITLE'])){ $_REQUEST['TITLE'] = ''; }
if (!isset($_REQUEST['URL'])){ $_REQUEST['URL'] = ''; }
if (!isset($_REQUEST['INITIATE'])){ $_REQUEST['INITIATE'] = ''; }
if (!isset($_REQUEST['REFERRER'])){ $_REQUEST['REFERRER'] = ''; }
if (!isset($_REQUEST['WIDTH'])){ $_REQUEST['WIDTH'] = ''; }
if (!isset($_REQUEST['HEIGHT'])){ $_REQUEST['HEIGHT'] = ''; }

include('./database.php');
include('./functions.php');
include('./class.mysql.php');
include('./class.aes.php');
include('./config.php');
include('./class.cookie.php');


$title = urldecode(substr($_REQUEST['TITLE'], 0, 150));
$url = urldecode($_REQUEST['URL']);
$initiate = $_REQUEST['INITIATE'];
$referrer = urldecode($_REQUEST['REFERRER']);
$width = $_REQUEST['WIDTH'];
$height = $_REQUEST['HEIGHT'];

$useragent = (isset($_SERVER['HTTP_USER_AGENT'])) ? substr($_SERVER['HTTP_USER_AGENT'], 0, 200) : '';

$request_initiated = false;
ignore_user_abort(true);

// Visitor Session Cookie
if (isset($_COOKIE['LiveHelpSession'])) {
	$cookie = new Cookie;
	$GUEST = $cookie->decode($_COOKIE['LiveHelpSession']);

	if (isset($GUEST['CHAT']) && !is_numeric($GUEST['CHAT'])) { $GUEST['CHAT'] = 0; }
	if (isset($GUEST['VISITOR']) && !is_numeric($GUEST['VISITOR'])) { $GUEST['VISITOR'] = 0; }

} else {

	// Initalise Guest Cookie
	$GUEST = array();
	$GUEST['VISITOR'] = 0;
	$GUEST['CHAT'] = 0;
}

if ($GUEST['VISITOR'] > 0) {

	// Select the Initiate flag to check if an Administrator has initiated the user with a Support request
	$query = sprintf("SELECT `initiate`, `status` FROM " . $table_prefix . "requests WHERE `id` = '%d' LIMIT 1", $GUEST['VISITOR']);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$request_initiate_flag = $row['initiate'];
		$request_status = $row['status'];
		if ($request_initiate_flag > 0 || $request_initiate_flag == -1){ $request_initiated = true; }

		if ($initiate != '') {
		
			// Update Initiate status fields to display the status of the floating popup.
			if ($initiate == 'Opened') {
				// Update request flag to show that the guest user OPENED the Online Chat Request
				$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `initiate` = '-1' WHERE `id` = '%d'", $GUEST['VISITOR']);
				$SQL->updatequery($query);
			}
			elseif ($initiate == 'Accepted') {
				// Update request flag to show that the guest user ACCEPTED the Online Chat Request
				$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `initiate` = '-2' WHERE `id` = '%d'", $GUEST['VISITOR']);
				$SQL->updatequery($query);
			}
			elseif ($initiate == 'Declined') {
				// Update request flag to show that the guest user DENIED the Online Chat Request
				$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `initiate` = '-3' WHERE `id` = '%d'", $GUEST['VISITOR']);
				$SQL->updatequery($query);
			}
			
			header('Content-type: image/gif');
			$fp = @fopen('Offline.gif', 'rb');
			if ($fp == false) {
				header('Location: ' . $_SETTINGS['URL'] . '/livehelp/include/Offline.gif');
			} else {
				$contents = fread($fp, filesize('Offline.gif'));
				echo($contents);
			}
			fclose($fp);
			exit();
		}

		if ($url == '' && $title == '') {  // Update current page time
			$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `status` = '%s' WHERE `id` = '%d'", $SQL->escape($request_status), $GUEST['VISITOR']);
			$SQL->updatequery($query);
		}
		else {  // Update current page details
			$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `request` = NOW(), `url` = '%s', `title` = '%s', `status` = '0' WHERE `id` = '%d'", $SQL->escape($url), $SQL->escape($title), $GUEST['VISITOR']);
			$SQL->updatequery($query);
		}
	
	}
	
}
else {

	if ($width != '' && $height != '' && $url != '') {

		// TODO Add Hostname with 500ms timeout
		//$ipaddress = gethostbyaddr(ip_address());
		//$ipaddress = gethostbyaddr_timeout(ip_address(), $dns, 500);
		$ipaddress = ip_address();
	
		$page = $_REQUEST['URL'];
		for ($i = 0; $i < 3; $i++) {
			$pos = strpos($page, '/');
			if ($pos === false) {
				$page = '';
				break;
			}
			if ($i < 2) {
				$page = substr($page, $pos + 1);
			}
			elseif ($i >= 2) {
				$page = substr($page, $pos);
			}
		}
		if ($page == '') { $page = '/'; }
		$page = trim($page);	

		// Update the current URL statistics within the requests tables
		if ($referrer == '') { $referrer = 'Direct Visit / Bookmark'; }
		
		$country = '';
		if ($_SETTINGS['IP2COUNTRY'] == true) {
			$ip = ip2long(ip_address());
			//$query = "SELECT c.country FROM " . $table_prefix . "countries AS c, " . $table_prefix . "ip2country AS i WHERE c.code = i.code AND i.ip_from <= '$ip' AND i.ip_to >= '$ip'";
			$query = sprintf("SELECT `code` FROM " . $table_prefix . "ip2country WHERE `ip_from` <= '%u' AND `ip_to` >= '%u' LIMIT 1", $ip, $ip);
			$row = $SQL->selectquery($query);
			if (is_array($row)){
				$code = $row['code'];
				$query = sprintf("SELECT country FROM  " . $table_prefix . "countries WHERE code = '%s' LIMIT 1", $code);
				$row = $SQL->selectquery($query);
				$country = ucwords(strtolower($row['country']));
			}
			else {
				$country = 'Unavailable';
			}
		}
		
		if (file_exists('../plugins/maxmind/GeoLiteCity.dat') && $_SETTINGS['SERVERVERSION'] >= 3.90) {
			// Note that you must download the New Format of GeoIP City (GEO-133).
			// The old format (GEO-132) will not work.

			include('../plugins/maxmind/geoipcity.php');
			include('../plugins/maxmind/geoipregionvars.php');

			// Shared Memory Support
			// geoip_load_shared_mem('../maxmind/GeoLiteCity.dat');
			// $gi = geoip_open('../maxmind/GeoLiteCity.dat', GEOIP_SHARED_MEMORY);

			$gi = geoip_open('../plugins/maxmind/GeoLiteCity.dat', GEOIP_STANDARD);

			$record = geoip_record_by_addr($gi, ip_address());
			if (!empty($record)) {
				$country = $record->country_name;
				if (isset($GEOIP_REGION_NAME[$record->country_code][$record->region])) { $state = $GEOIP_REGION_NAME[$record->country_code][$record->region]; } else { $state = ''; }
				$city = $record->city;

				$query = sprintf("INSERT INTO " . $table_prefix . "requests(`ipaddress`, `useragent`, `resolution`, `city`, `state`, `country`, `datetime`, `request`, `refresh`, `url`, `title`, `referrer`, `path`, `initiate`, `status`) VALUES('%s', '%s', '%s x %s', '%s', '%s', '%s', NOW(), NOW(), NOW(), '%s', '%s', '%s', '%s', '0', '0')", $SQL->escape($ipaddress), $SQL->escape($useragent), $SQL->escape($width), $SQL->escape($height), $SQL->escape($city), $SQL->escape($state), $SQL->escape($country), $SQL->escape($url), $SQL->escape($title), $SQL->escape($referrer), $SQL->escape($page));
				$GUEST['VISITOR'] = $SQL->insertquery($query);
			} else {
			
				$query = sprintf("INSERT INTO " . $table_prefix . "requests(`ipaddress`, `useragent`, `resolution`, `city`, `state`, `country`, `datetime`, `request`, `refresh`, `url`, `title`, `referrer`, `path`, `initiate`, `status`) VALUES('%s', '%s', '%s x %s', '', '', '%s', NOW(), NOW(), NOW(), '%s', '%s', '%s', '%s', '0', '0')", $SQL->escape($ipaddress), $SQL->escape($useragent), $SQL->escape($width), $SQL->escape($height), $SQL->escape($country), $SQL->escape($url), $SQL->escape($title), $SQL->escape($referrer), $SQL->escape($page));
				$GUEST['VISITOR'] = $SQL->insertquery($query);
			
			}

			geoip_close($gi);
		
		} else {
		
			$query = sprintf("INSERT INTO " . $table_prefix . "requests(`ipaddress`, `useragent`, `resolution`, `city`, `state`, `country`, `datetime`, `request`, `refresh`, `url`, `title`, `referrer`, `path`, `initiate`, `status`) VALUES('%s', '%s', '%s x %s', '', '', '%s', NOW(), NOW(), NOW(), '%s', '%s', '%s', '%s', '0', '0')", $SQL->escape($ipaddress), $SQL->escape($useragent), $SQL->escape($width), $SQL->escape($height), $SQL->escape($country), $SQL->escape($url), $SQL->escape($title), $SQL->escape($referrer), $SQL->escape($page));
			$GUEST['VISITOR'] = $SQL->insertquery($query);
		
		}
		
		$cookie = new Cookie;
		$data = $cookie->encode($GUEST);
		setcookie('LiveHelpSession', $data, false, '/', $cookie_domain, 0);
		header('P3P: CP=\'' . $_SETTINGS['P3P'] . '\'');
	}
}


// HTTP/1.1
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

// HTTP/1.0
header('Pragma: no-cache');

header('Content-type: image/gif');
if ($request_initiated == true) {
	$fp = @fopen('OfflineInitiate.gif', 'rb');
	if ($fp == false) {
		header('Location: ' . $_SETTINGS['URL'] . '/livehelp/include/OfflineInitiate.gif');
	} else {
		$contents = fread($fp, filesize('OfflineInitiate.gif'));
		echo($contents);
	}
	fclose($fp);
}
else {
	$fp = @fopen('Offline.gif', 'rb');
	if ($fp == false) {
		header('Location: ' . $_SETTINGS['URL'] . '/livehelp/include/Offline.gif');
	} else {
		$contents = fread($fp, filesize('Offline.gif'));
		echo($contents);
	}
	fclose($fp);
}
?>