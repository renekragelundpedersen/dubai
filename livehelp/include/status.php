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

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ORIGIN'])) {
		header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
		header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
		header('Access-Control-Allow-Headers: X-Requested-With');
		header('Access-Control-Allow-Credentials: true');
		header('Access-Control-Max-Age: 1728000');
		header('Content-Length: 0');
		header('Content-Type: text/plain');
		exit();
	} else {
		header('HTTP/1.1 403 Access Forbidden');
		header('Content-Type: text/plain');  
		exit();
	}
}

if (!isset($_SERVER['HTTP_REFERER'])){ $_SERVER['HTTP_REFERER'] = ''; }
if (!isset($_REQUEST['JS'])){ $_REQUEST['JS'] = false; }
if (!isset($_REQUEST['TRACKER'])){ $_REQUEST['TRACKER'] = false; }
if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['PLUGIN'])){ $_REQUEST['PLUGIN'] = ''; }
if (!isset($_REQUEST['CUSTOM'])){ $_REQUEST['CUSTOM'] = ''; }
if (!isset($_REQUEST['NAME'])){ $_REQUEST['NAME'] = ''; }

$installed = false;
$database = include('./database.php');
if ($database) {
	include('./spiders.php');
	include('./functions.php');
	include('./class.mysql.php');
	include('./class.aes.php');
	$installed = include('./config.php');
	include('./class.cookie.php');
}

if ($installed == false) {
	include('./default.php');
	$fp = @fopen('../../' . $_SETTINGS['DEFAULTLOGO'], 'rb');
	if ($fp == false) {
		header('Location: ../../' . $_SETTINGS['DEFAULTLOGO']);
	} else {
		header('Content-type: image/gif');
		$contents = fread($fp, filesize('../../' . $_SETTINGS['DEFAULTLOGO']));
		echo($contents);
	}
	fclose($fp);
	exit();
}

$javascript = htmlspecialchars($_REQUEST['JS']);
$tracker = htmlspecialchars($_REQUEST['TRACKER']);
$department = htmlspecialchars($_REQUEST['DEPARTMENT']);

$json = (isset($_REQUEST['JSON'])) ? true : false;
$callback = (isset($_REQUEST['CALLBACK'])) ? true : false;

$hidden = 0;
$online = 0;
$away = 0;
$brb = 0;

// Operators w/ Online/Offline/BRB/Away Status
if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
	$query = sprintf("SELECT `username`, `status`, `department`, `device` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) OR `device` <> ''", $connection_timeout);
} else {
	$query = sprintf("SELECT `username`, `status`, `department` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND)", $connection_timeout);
}
$rows = $SQL->selectall($query);
if (is_array($rows)) {
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
			if (!empty($row['device']) && $row['status'] == 1) {
				$online++;
			} else {
				if ($_SETTINGS['DEPARTMENTS'] && !empty($department)) {
					// Department Array
					$departments = array_map('trim', explode(';', $row['department']));
					if (array_search($department, $departments) !== false) {
						switch ($row['status']) {
							case 0: // Offline - Hidden
								$hidden++;
								break;
							case 1: // Online
								$online++;
								break;
							case 2: // Be Right Back
								$brb++;
								break;
							case 3: // Away
								$away++;
								break;
						}
					}
				}
				else {
					switch ($row['status']) {
						case 0: // Offline - Hidden
							$hidden++;
							break;
						case 1: // Online
							$online++;
							break;
						case 2: // Be Right Back
							$brb++;
							break;
						case 3: // Away
							$away++;
							break;
					}
				}
			}
		}
	}
}

if ($json == true || $javascript == true || $tracker == true) {

	if (!isset($_REQUEST['TITLE'])){ $_REQUEST['TITLE'] = ''; }
	if (!isset($_REQUEST['URL'])){ $_REQUEST['URL'] = ''; }
	if (!isset($_REQUEST['REFERRER'])){ $_REQUEST['REFERRER'] = ''; }
	if (!isset($_REQUEST['INITIATE'])){ $_REQUEST['INITIATE'] = ''; }
	if (!isset($_REQUEST['JSON'])){ $_REQUEST['JSON'] = ''; }
	
	$title = urldecode(substr($_REQUEST['TITLE'], 0, 150));
	$url = urldecode($_REQUEST['URL']);
	$referrer = urldecode($_REQUEST['REFERRER']);
	$initiate = $_REQUEST['INITIATE'];

	$totalpages = 0;
	$initiated = false;

	// AJAX Cross-site Headers
	if (isset($_SERVER['HTTP_ORIGIN'])) {
		header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
		header('Access-Control-Allow-Credentials: true');
	}

	// HTTP/1.1
	header('Cache-Control: no-store, no-cache, must-revalidate');
	header('Cache-Control: post-check=0, pre-check=0', false);
	
	// HTTP/1.0
	header('Pragma: no-cache');
	
	// Override Session
	$request = 0;
	$chat = 0;
	if (isset($_REQUEST['SESSION'])) {
		$cookie = rawurldecode($_REQUEST['SESSION']);
	
		$aes = new AES256($_SETTINGS['AUTHKEY']);

		$size = strlen($aes->iv);
		$iv = substr($cookie, 0, $size);
		$verify = substr($cookie, $size, 40);
		$ciphertext = substr($cookie, 40 + $size);

		$decrypted = $aes->decrypt($ciphertext, $iv);
		if (sha1($decrypted) == $verify) {
			$cookie = json_decode($decrypted, true);
			$request = $cookie['visitor'];
			$chat = $cookie['chat'];
		}
	} else {
		// Cookie
		if (isset($_COOKIE['LiveHelpSession'])) {

			$session = $_COOKIE['LiveHelpSession'];
			
			$cookie = new Cookie;
			$decrypted = $cookie->decode($_COOKIE['LiveHelpSession']);
			
			if (isset($decrypted['VISITOR']) && is_numeric($decrypted['VISITOR'])) { $request = (int)$decrypted['VISITOR']; }
			if (isset($decrypted['CHAT']) && is_numeric($decrypted['CHAT'])) { $chat = (int)$decrypted['CHAT']; }
			
		}
	}

	if ($request > 0) {
	
		// Initiate Chat
		$query = sprintf("SELECT `initiate`, `status`, `path` FROM `" . $table_prefix . "requests` WHERE `id` = '%d' LIMIT 1", $request);
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$initiateflag = $row['initiate'];
			$initiatestatus = $row['status'];
			
			if (!empty($url)) {
			
				// Current Page from URL
				$page = $url;
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
				
				$page = trim(addslashes($page));
				$path = addslashes($row['path']);
				$previouspath = explode('; ', $path);
				
				if ($page != trim(end($previouspath))) {
					$query = sprintf("UPDATE `" . $table_prefix . "requests` SET `request` = NOW(), `url` = '%s', `path` = '%s; %s', `status` = '0' WHERE `id` = '%d' LIMIT 1", $SQL->escape($referrer), $SQL->escape($path), $SQL->escape($page), $request);
					$SQL->updatequery($query);
					$totalpages = count($previouspath) + 1;
					
					if ($_SETTINGS['TRANSCRIPTVISITORALERTS'] == true && $chat > 0) {
						$query = sprintf("SELECT `username` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' AND `active` > 0 LIMIT 1", $chat);
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$username = $row['username'];
							$url = $_SERVER['HTTP_REFERER'];
							$message = sprintf("%s has just visited %s", $username, $url);
							
							$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('%d', '', NOW(), '%s', '2', '-2')", $chat, $SQL->escape($message));
							$SQL->insertquery($query);
						}
					}
					
				}
				else {
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `request` = NOW(), `url` = '%s', `status` = '0' WHERE `id` = '%d' LIMIT 1", $SQL->escape($referrer), $request);
					$SQL->updatequery($query);
					$totalpages = count($previouspath);
				}
			}

			// Initiate Chat
			if ($initiateflag > 0 || $initiateflag == -1) { $initiated = true; }
			if (isset($_SETTINGS['INITIATECHATAUTO']) && $_SETTINGS['INITIATECHATAUTO'] > 0) {
				if (($initiateflag == 0 || $initiateflag == -1) && $online > 0 && $totalpages >= $_SETTINGS['INITIATECHATAUTO']) {
					$initiated = true;
				}
			}
	
			if (!empty($initiate)) {
				// Update Initiate Status
				if ($initiate == 'Opened') {
					// Intiiate Opened
					$initiate = '-1';
				}
				elseif ($initiate == 'Accepted') {
					// Initiate Accepted
					$initiate = '-2';
				}
				elseif ($initiate == 'Declined') {
					// Initiate Declined
					$initiate = '-3';
				}
				
				if (empty($url) && empty($title)) {  // Update current page time
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `initiate` = '%s', `status` = '%s' WHERE `id` = '%d' LIMIT 1", $SQL->escape($initiate), $SQL->escape($initiatestatus), $request);
					$SQL->updatequery($query);
				}
				else {  // Update current page details
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `request` = NOW(), `initiate` = '%s', `url` = '%s', `title` = '%s', `status` = '0' WHERE `id` = '%d' LIMIT 1", $SQL->escape($initiate), $SQL->escape($url), $SQL->escape($title), $request);
					$SQL->updatequery($query);
				}
				
			} else {
				if (empty($url) && empty($title)) {  // Update current page time
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `status` = '%s' WHERE `id` = '%d' LIMIT 1", $SQL->escape($initiatestatus), $request);
					$SQL->updatequery($query);
				}
				else {  // Update current page details
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `refresh` = NOW(), `request` = NOW(), `url` = '%s', `title` = '%s', `status` = '0' WHERE `id` = '%d' LIMIT 1", $SQL->escape($url), $SQL->escape($title), $request);
					$SQL->updatequery($query);
				}
			}
		}
	} else {

		if (!isset($_REQUEST['WIDTH'])){ $_REQUEST['WIDTH'] = ''; }
		if (!isset($_REQUEST['HEIGHT'])){ $_REQUEST['HEIGHT'] = ''; }

		$width = $_REQUEST['WIDTH'];
		$height = $_REQUEST['HEIGHT'];
		// TODO Add Hostname with 500ms timeout
		//$ipaddress = gethostbyaddr(ip_address());
		//$ipaddress = gethostbyaddr_timeout(ip_address(), $dns, 500);
		$ipaddress = ip_address();
		$useragent = (isset($_SERVER['HTTP_USER_AGENT'])) ? substr($_SERVER['HTTP_USER_AGENT'], 0, 200) : '';
	
		if (!empty($width) && !empty($height) && !empty($url)) {
		
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
			if (empty($page)) { $page = '/'; }
			$page = urldecode(trim($page));
	
			// Update the current URL statistics within the requests tables
			if (empty($referrer)) { $referrer = 'Direct Visit / Bookmark'; }
			
			// MaxMind Geo IP Location Plugin
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
					$request = $SQL->insertquery($query);
				} else {
				
					$query = sprintf("INSERT INTO " . $table_prefix . "requests(`ipaddress`, `useragent`, `resolution`, `city`, `state`, `country`, `datetime`, `request`, `refresh`, `url`, `title`, `referrer`, `path`, `initiate`, `status`) VALUES('%s', '%s', '%s x %s', '', '', '%s', NOW(), NOW(), NOW(), '%s', '%s', '%s', '%s', '0', '0')", $SQL->escape($ipaddress), $SQL->escape($useragent), $SQL->escape($width), $SQL->escape($height), $SQL->escape($country), $SQL->escape($url), $SQL->escape($title), $SQL->escape($referrer), $SQL->escape($page));
					$request = $SQL->insertquery($query);
				
				}

				geoip_close($gi);
			
			} else {
			
				$country = '';
				if ($_SETTINGS['IP2COUNTRY'] == true) {
					$ip = ip2long(ip_address());
					$query = sprintf("SELECT `code` FROM " . $table_prefix . "ip2country WHERE ip_from <= '%u' AND ip_to >= '%u' LIMIT 1", $ip, $ip);
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
			
				$query = sprintf("INSERT INTO " . $table_prefix . "requests(`ipaddress`, `useragent`, `resolution`, `city`, `state`, `country`, `datetime`, `request`, `refresh`, `url`, `title`, `referrer`, `path`, `initiate`, `status`) VALUES('%s', '%s', '%s x %s', '', '', '%s', NOW(), NOW(), NOW(), '%s', '%s', '%s', '%s', '0', '0')", $SQL->escape($ipaddress), $SQL->escape($useragent), $SQL->escape($width), $SQL->escape($height), $SQL->escape($country), $SQL->escape($url), $SQL->escape($title), $SQL->escape($referrer), $SQL->escape($page));
				$request = $SQL->insertquery($query);
			
			}
			
			if (!isset($_REQUEST['REQUEST']) && !isset($_GET['callback'])) {
			
				if ($request > 0) {
					
					$data = array('visitor' => (int)$request, 'chat' => (int)$chat);
					
					// Chat Session
					if ($chat == 0 && $request > 0) {
						$query = sprintf("SELECT `id`, `username`, `email`, `department` FROM `" . $table_prefix . "chats` WHERE `request` = '%d' LIMIT 1", $request);
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$data['chat'] = (int)$row['id'];
							$data['name'] = $row['username'];
							$data['email'] = $row['email'];
							$data['department'] = $row['department'];
						}
					}
					
					$COOKIE = new Cookie;
					$data = $COOKIE->encode($data);
					setcookie('LiveHelpSession', $data, false, '/', $cookie_domain, 0);

					header('P3P: CP=\'' . $_SETTINGS['P3P'] . '\'');
					
				}
				
			}
			
			// WHMCS Integration / Quick Links
			if (isset($_COOKIE['WHMCSUID']) || isset($_SESSION['uid'])) {
				// Insert Custom Data into livehelp_custom with Request ID
				$id = (isset($_COOKIE['WHMCSUID']) ? $_COOKIE['WHMCSUID'] : $_SESSION['uid']);
				$reference = 'WHMCS';
				$name = '';
				
				if (is_numeric($id)) {
					
					$query = sprintf("SELECT `firstname`, `lastname` FROM `tblclients` WHERE `id` = '%d' LIMIT 1", $id);
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$name = $row['firstname'] . ' ' . $row['lastname'];
					}
					
					$query = sprintf("INSERT INTO " . $table_prefix . "custom(`request`, `custom`, `name`, `reference`) VALUES('%d', '%d', '%s', '%s')", $request, $id, $SQL->escape($name), $SQL->escape($reference));
					$SQL->insertquery($query);
				}
			}
			
		}
	}
	
	if ($javascript == true && $initiated == true) {
		echo('displayInitiateChat();');
	}

}

// Status Mode
$status = 'Offline';
if ($online > 0) {
	$status = 'Online';
} elseif ($brb > 0 && $brb >= $away) {
	$status = 'BRB';
} elseif ($away > 0) {
	$status = 'Away';
}

function LoadTrackerPixel($image) {
	$fp = @fopen($image, 'rb');
	if ($fp == false) {
		header('Location: ' . $_SETTINGS['URL'] . '/livehelp/include/' . $image);
	} else {
		$contents = fread($fp, filesize($image));
		echo($contents);
	}
	fclose($fp);
}

// JavaScript
if ($javascript == true) {
	echo('changeStatus("' . $status . '");');
	exit();
} elseif ($tracker == true) {
	if ($initiated == true) {
		LoadTrackerPixel($status . 'Initiate.gif');
	} else {
		LoadTrackerPixel($status . '.gif');
	}
	exit();
}

// Custom Integration
$plugin = htmlspecialchars(urldecode($_REQUEST['PLUGIN']));
$custom = htmlspecialchars(urldecode($_REQUEST['CUSTOM']));
$name = htmlspecialchars(urldecode($_REQUEST['NAME']));

if (!empty($request) && !empty($plugin) && !empty($custom)) {

	// Insert Custom Plugin / Integration Data
	if (is_numeric($custom)) {
		$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = %d AND `reference` = '%s' LIMIT 1", $request, $SQL->escape($plugin));
		$result = $SQL->selectquery($query);
		if (!is_array($result)) {
		
			// WHMCS Account Name
			if ($plugin == 'WHMCS' && empty($name)) {
				$query = sprintf("SELECT * FROM `tblclients` WHERE `id` = %d LIMIT 1", $SQL->escape($custom));
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$name = $row['firstname'] . ' ' . $row['lastname'];
					
					$query = "SELECT `value` FROM `tblconfiguration` WHERE `setting` = 'Charset' LIMIT 1";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$charset = $row['value'];
						if (!empty($charset) && $charset != 'utf-8') {
							$name = iconv($charset, 'UTF-8', $name);
						}
					}
				}
			}
		
			// Custom Integration
			$query = sprintf("INSERT INTO " . $table_prefix . "custom(`request`, `custom`, `name`, `reference`) VALUES('%d', '%d', '%s', '%s')", $request, $custom, $SQL->escape($name), $SQL->escape($plugin));
			$id = $SQL->insertquery($query);
			
			$query = sprintf("SELECT `username` FROM `" . $table_prefix . "chats` AS `chats` WHERE `id` = '%d' LIMIT 1", $chat);
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$username = $row['username'];
			
				// Chat Session
				if (!empty($username)) {
				
					$query = sprintf("SELECT `id` FROM " . $table_prefix . "messages WHERE `chat` = %d AND `status` = -4 LIMIT 1", $chat);
					$result = $SQL->selectquery($query);
					if (!is_array($result)) {
						$message = $username . ' has just signed into ' . $plugin;
						
						// Integration Message Alert
						$query = sprintf("INSERT INTO " . $table_prefix . "messages(`id`, `chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES('', '%d', '%s', NOW(), '%s', '%d', '-4')", $chat, $SQL->escape($username), $SQL->escape($message), $id);
						$SQL->insertquery($query);
					}
				}
				
			}
		}
	}
}

// JSON
if ($json) {

	$json = array();
	if ($request > 0) {
		
		$json = array('visitor' => (int)$request, 'chat' => (int)$chat);
		
		// Chat Session
		if ($chat == 0 && $request > 0) {
			$query = sprintf("SELECT `id`, `username`, `email`, `department` FROM `" . $table_prefix . "chats` WHERE `request` = '%d' LIMIT 1", $request);
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$json['chat'] = (int)$row['id'];
				$json['name'] = $row['username'];
				$json['email'] = $row['email'];
				$json['department'] = $row['department'];
			}
		}

		$session = json_encode($json);
		$verify = sha1($session);
		
		$aes = new AES256($_SETTINGS['AUTHKEY']);
		$session = $aes->iv . $verify . $aes->encrypt($session);
		$json['session'] = $session;
	}

	$json['status'] = $status;
	if ($initiated == true) { $json['initiate'] = true; }
	$json = json_encode($json);
	if (!isset($_GET['callback'])) {
		header('Content-Type: application/json; charset=utf-8');
		echo($json);
	} else {
		if (is_valid_callback($_GET['callback'])) {
			header('Content-Type: text/javascript; charset=utf-8');
			echo($_GET['callback'] . '(' . $json . ')');
		} else {
			header('Status: 400 Bad Request');
		}
	}
	exit();
}

function LoadStatusImage($status) {
	global $_SETTINGS;
	global $initiated;
	global $callback;

	if ($callback == true) {
		$image = $status;
		if ($image != 'Online') {
			$image = 'include/Offline.gif';
		} else {
			$image = 'locale/' . LANGUAGE . '/images/Callback.png';
		}
		$fp = @fopen($image, 'rb');
		if ($fp == false) {
			header('Location: ' . $_SETTINGS['URL'] . '/livehelp/' . $image);
		} else {
			header('Content-type: image/gif');
			$contents = fread($fp, filesize($image));
			echo($contents);
			fclose($fp);
		}
		return;
	}

	$status = strtoupper($status) . 'LOGO';

	if (substr($_SETTINGS[$status], 0, 7) != 'http://' && substr($_SETTINGS[$status], 0, 8) != 'https://') {
		$fp = @fopen('../../' . $_SETTINGS[$status], 'rb');
		if ($fp == false) {
			header('Location: ' . $_SETTINGS['URL'] . $_SETTINGS[$status]);
		} else {
			header('Content-type: image/gif');
			$contents = fread($fp, filesize('../../' . $_SETTINGS[$status]));
			echo($contents);
			fclose($fp);
		}
	} else {
		header('Location: ' . $_SETTINGS[$status]);
	}
}

// Status Images
switch ($status) {
	case 'BRB':
		LoadStatusImage('BeRightBack');
		break;
	case 'Away':
		LoadStatusImage('Away');
		break;		
	case 'Online':
		LoadStatusImage('Online');
		break;
	case 'Offline':
		LoadStatusImage('Offline');
		break;
}

?>