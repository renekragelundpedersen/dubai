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

$installed = false;
$database = include('./include/database.php');
if ($database) {
	// Smarty Template
	require('include/smarty/Smarty.class.php');
	
	include('./include/spiders.php');
	include('./include/class.mysql.php');
	include('./include/class.aes.php');
	$installed = include('./include/config.php');
	include('./include/class.cookie.php');
	include('./include/functions.php');
	include('./include/version.php');
} else {
	$installed = false;
}

if ($installed == false) {
	include('./include/default.php');
}

if (!isset($_REQUEST['COMPLETE'])){ $_REQUEST['COMPLETE'] = ''; }
if (!isset($_REQUEST['CAPTCHA'])){ $_REQUEST['CAPTCHA'] = ''; }
if (!isset($_REQUEST['BCC'])){ $_REQUEST['BCC'] = ''; }
if (!isset($_REQUEST['SECURITY'])){ $_REQUEST['SECURITY'] = ''; }
if (!isset($_REQUEST['STATUS'])){ $_REQUEST['STATUS'] = ''; }

$json = (isset($_REQUEST['JSON'])) ? true : false;

// Update VoIP Call Status / JSON
if ($json) {

	$status = -1;
	if (isset($_REQUEST['SESSION'])) {
		$session = rawurldecode($_REQUEST['SESSION']);

		$iv = substr($session, 0, 16);
		$verify = substr($session, 16, 40);
		$ciphertext = substr($session, 56);
		
		$aes = new AES256($_SETTINGS['AUTHKEY']);
		$decrypted = $aes->decrypt($ciphertext, $iv);

		if (sha1($decrypted) == $verify) {
			$session = json_decode($decrypted, true);
			$id = $session['id'];
			
			if ($id > 0) {
				$query = sprintf("SELECT `status` FROM " . $table_prefix . "callback WHERE `id` = '%d' LIMIT 1", $id);
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$status = $row['status'];
				}
				
				// Update Status
				$status = (int)$_REQUEST['STATUS'];
				if ($status > 0) {
					$query = sprintf("UPDATE `" . $table_prefix . "callback` SET `status` = '%d' WHERE `id` = '%d' LIMIT 1", $status, $id);
					$SQL->updatequery($query);
				}
			}
			
		}
		
	}
	
	$json = array('status' => $status);
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
	
}

// Override Security
if (isset($_REQUEST['SECURITY'])) {

	$security = rawurldecode($_REQUEST['SECURITY']);

	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$size = strlen($aes->iv);
	$iv = substr($security, 0, $size);
	$verify = substr($security, $size, 40);
	$ciphertext = substr($security, 40 + $size);

	$security = '';
	$decrypted = $aes->decrypt($ciphertext, $iv);
	if (sha1(strtoupper($decrypted)) == $verify) {
		$security = $decrypted;
	}
}

header('Content-type: text/html; charset=utf-8');

if (file_exists('./locale/' . LANGUAGE . '/guest.php')) {
	include('./locale/' . LANGUAGE . '/guest.php');
}
else {
	include('./locale/en/guest.php');
}

$error = '';
$name = '';
$email = '';
$message = '';
$country = '';
$timezone = '';
$dial = '';
$telephone = '';
$captcha = '';
$status = '';

$ipcountry = '';
$countries = array();
$selected = '';

if (isset($_REQUEST['NAME']) && isset($_REQUEST['EMAIL']) && isset($_REQUEST['COUNTRY']) && isset($_REQUEST['DIAL']) && isset($_REQUEST['TELEPHONE']) && isset($_REQUEST['MESSAGE'])) {

	foreach ($_REQUEST as $key => $value) {
		if ($key != 'Submit') { 
			$value = str_replace('<', '&lt;', $value);
			$value = str_replace('>', '&gt;', $value);
			$value = trim($value);
			$_REQUEST[$key] = $value;
		}
	}

	$id = '';
	$name = stripslashes($_REQUEST['NAME']);
	$email = stripslashes($_REQUEST['EMAIL']);
	$message = stripslashes($_REQUEST['MESSAGE']);
	$country = stripslashes($_REQUEST['COUNTRY']);
	$dial = stripslashes($_REQUEST['DIAL']);
	$telephone = stripslashes($_REQUEST['TELEPHONE']);
	$timezone = stripslashes($_REQUEST['TIMEZONE']);
	$captcha = stripslashes($_REQUEST['CAPTCHA']);

	if (empty($name) || empty($email) || empty($message) || empty($country) || empty($telephone)) {
		$error = $_LOCALE['invaliddetailserror'];
	}
	else {
	
		if (!preg_match('/^[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&\'*+\\\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+$/', $email)) {
			$error = $_LOCALE['invalidemail'];
		}
		else {
		
			$security = sha1(strtoupper($security));
			$captcha = sha1(strtoupper($captcha));
			if ($security != $captcha && $_SETTINGS['SECURITYCODE'] == true && ((function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext') && $security_code)) {
				$error = $_LOCALE['invalidsecurityerror'];
				
				// Generate Security Code
				$chars = array('a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','1','2','3','4','5','6','7','8','9');
				$security = '';
				for ($i = 0; $i < 5; $i++) {
				   $security .= $chars[rand(0, count($chars)-1)];
				}

			}
			else {
				
				$pos = strpos($country, '+');
				$prefix = trim(substr($country, $pos));
				$country = trim(substr($country, 0, $pos - strlen($country)));
				
				if ($timezone) {
					$offset = -$timezone;
					$timezone = ($offset > 0) ? '+' : '-';
					$timezone .= floor($offset / 60);
					$timezone .= (($offset % 60) < 10) ? '0' . $offset % 60 : $offset % 60;
				}
				
				$query = sprintf("INSERT INTO " . $table_prefix . "callback(`datetime`, `name`, `email`, `country`, `timezone`, `dial`, `telephone`,`message`) VALUES(NOW(), '%s', '%s', '%s', '%s', '%s', '%s', '%s')", $SQL->escape($name), $SQL->escape($email), $SQL->escape($country), $SQL->escape($timezone), $SQL->escape($dial), $SQL->escape($telephone), $SQL->escape($message));
				$id = $SQL->insertquery($query);
			
			}
			
		}
	}
	
	// JSON / JSONP
	$json = array('id' => $id, 'error' => $error);
	$json = json_encode($json);

	$verify = sha1($json);
	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$encrypted = $aes->iv . $verify . $aes->encrypt($json);
	
	$json = json_encode($encrypted);
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
	
} else {

	// Reset Security Code
	$chars = array('a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','j','J','k','K','L','m','M','n','N','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','2','3','4','5','6','7','8','9');
	$ascii = array();

	$code = '';
	for ($i = 0; $i < 5; $i++) {
		$char = $chars[rand(0, count($chars) - 1)];
		$ascii[$i] = ord($char);
		$code .= $char;
	}

	$verify = sha1(strtoupper($code));
	$aes = new AES256($_SETTINGS['AUTHKEY'], $iv);
	$captcha = $aes->iv . $verify . $aes->encrypt($code);

	// Countries
	if ($_SETTINGS['IP2COUNTRY'] == true) {
		$ip = ip2long(ip_address());
		$query = sprintf("SELECT `code` FROM " . $table_prefix . "ip2country WHERE `ip_from` <= '%u' AND `ip_to` >= '%u' LIMIT 1", $ip, $ip);
		$row = $SQL->selectquery($query);
		if (is_array($row)){
			$ipcountry = $row['code'];
		}
	}
	
	// MaxMind Geo IP Location Plugin
	if (file_exists('./plugins/maxmind/GeoLiteCity.dat') && $_SETTINGS['SERVERVERSION'] >= 3.90) {
		// Note that you must download the New Format of GeoIP City (GEO-133).
		// The old format (GEO-132) will not work.

		include('./plugins/maxmind/geoipcity.php');
		include('./plugins/maxmind/geoipregionvars.php');

		// Shared Memory Support
		// geoip_load_shared_mem('./plugins/maxmind/GeoLiteCity.dat');
		// $gi = geoip_open('./plugins/maxmind/GeoLiteCity.dat', GEOIP_SHARED_MEMORY);

		$gi = geoip_open('./plugins/maxmind/GeoLiteCity.dat', GEOIP_STANDARD);
		$record = geoip_record_by_addr($gi, ip_address());
		if (!empty($record)) {
			$ipcountry = $record->country_code;
		}

		geoip_close($gi);
	
	}

	// Popular Countries
	$popular = array();
	if (!empty($ipcountry)) {
		$popular[] = $ipcountry;
	}
	$popular[] = 'US';
	$popular[] = 'UK';
	if (count($popular) > 0) {
		$where .= implode("' OR `code` = '", $popular);
		$query = sprintf("SELECT `code`, `country`, `dial` FROM " . $table_prefix . "countries WHERE `code` = '%s' ORDER BY `country`", $where);
		$rows = $SQL->selectall($query);
		if (is_array($rows)) {
			foreach ($rows as $key => $row) {
				if (is_array($row)) {
					$dial = '+' . $row['dial'];
					$country = ucwords(strtolower($row['country'])) . ' ' . $dial;
					$countries[] = $country;
				}
			}
		}
		$countries[] = '';
	}

	// Countries
	$query = 'SELECT `code`, `country`, `dial` FROM ' . $table_prefix . 'countries ORDER BY `country`';
	$row = $SQL->selectquery($query);
	while ($row) {
		if (is_array($row)) {
			$dial = '+' . $row['dial'];
			$country = ucwords(strtolower($row['country'])) . ' ' . $dial;
			$code = $row['code'];
			if (!empty($country) && $ipcountry == $code) {
				$countries[] = $country;
				$selected = $country;
			} else {
				$countries[] = $country;
			}
		}
		$row = $SQL->selectnext();
	}

}

// Smarty Templates
$smarty = new Smarty;

/* Smarty Options
$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->debug_tpl = './include/smarty/debug.tpl';
$smarty->caching = false;
$smarty->cache_lifetime = 120;
*/

$smarty->template_dir = './templates';
$smarty->compile_dir = './templates_c';
$smarty->cache_dir = './templates/cache';
$smarty->config_dir = './includes/smarty';

$smarty->assign('SETTINGS', $_SETTINGS, true);
$smarty->assign('language', LANGUAGE, true);
$smarty->assign('cookie', $_REQUEST['COOKIE'], true);
$smarty->assign('template', $_SETTINGS['TEMPLATE'], true);
	
$smarty->debugging = false;
$smarty->caching = false;

$smarty->assign('LOCALE', $_LOCALE, true);

$smarty->assign('name', $name);
$smarty->assign('email', $email);
$smarty->assign('country', $country);
$smarty->assign('server', $server);
$smarty->assign('prefix', $prefix);
$smarty->assign('telephone', $telephone);
$smarty->assign('message', $message);
$smarty->assign('title', 'Click-to-Call', true);
$smarty->assign('countries', $countries);
$smarty->assign('dial', $dial);
$smarty->assign('selected', $selected);

if (!empty($captcha)) {
	$smarty->assign('captcha', $captcha, true);
}

if (!empty($error)) { $smarty->assign('error', $error, true); }

// Compaign Image
if (!empty($_SETTINGS['CAMPAIGNIMAGE'])) {
	$smarty->assign('campaign', true);
} else {
	$smarty->assign('campaign', false);
}

// Campaign Link
if (!empty($_SETTINGS['CAMPAIGNLINK'])) {
	$smarty->assign('campaignlink', true);
} else {
	$smarty->assign('campaignlink', false);
}

// Security Code
if ($_SETTINGS['SECURITYCODE'] == true && (function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext') && $security_code) {
	$smarty->assign('security', true);
}

$smarty->display($_SETTINGS['TEMPLATE'] . '/call.tpl');
?>