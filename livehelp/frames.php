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
// Smarty Template
require('include/smarty/Smarty.class.php');

include('include/spiders.php');
include('include/database.php');
include('include/class.mysql.php');
include('include/class.aes.php');
include('include/class.cookie.php');
include('include/config.php');
include('include/functions.php');
include('include/version.php');

if (!isset($_REQUEST['NAME'])){ $_REQUEST['NAME'] = ''; }
if (!isset($_REQUEST['EMAIL'])){ $_REQUEST['EMAIL'] = ''; }
if (!isset($_REQUEST['QUESTION'])){ $_REQUEST['QUESTION'] = ''; }
if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['URL'])){ $_REQUEST['URL'] = ''; }

$user = htmlspecialchars(trim($_REQUEST['NAME']));
$email = htmlspecialchars(trim($_REQUEST['EMAIL']));
$department = htmlspecialchars(trim($_REQUEST['DEPARTMENT']));
$question = htmlspecialchars(trim($_REQUEST['QUESTION']));
$server = htmlspecialchars(trim($_REQUEST['SERVER']));
$referer = htmlspecialchars($_REQUEST['URL']);
$ipaddress = $_SERVER['REMOTE_ADDR'];
$json = (isset($_REQUEST['JSON'])) ? true : false;
$active = 0;

if ($json) {
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
	} else {
		// AJAX Cross-site Headers
		if (isset($_SERVER['HTTP_ORIGIN'])) {
			header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
			header('Access-Control-Allow-Credentials: true');
		}
	}
}

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
}

if (empty($user)) { $user = 'Guest'; }

// Reset Previous Chat History
if ($_SETTINGS['PREVIOUSCHATTRANSCRIPTS'] == false) { $chat = 0; }

// Existing Chat / Skip Verification
if ($chat > 0) {
	$query = sprintf("SELECT `username`, `email`, `server`, `department`, `active` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' AND `active` > 0 LIMIT 1", $chat);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
	
		// Chat Details
		$user = $row['user'];
		$email = $row['email'];
		$server = $row['server'];
		$department = $row['department'];
		$active = $row['active'];
		
	} else {
	
		// Update Chat
		$query = sprintf("UPDATE " . $table_prefix . "chats SET `request` = '%d', `username` = '%s', `datetime` = NOW(), `email` = '%s', `server` = '%s', `department` = '%s', `refresh` = NOW(), `active` = '0' WHERE `id` = '%d'", $request, $SQL->escape($user), $SQL->escape($email), $SQL->escape($server), $SQL->escape($department), $chat);
		$SQL->updatequery($query);
	
	}

}
else {

	// Verification
	if ($_SETTINGS['REQUIREGUESTDETAILS'] == true && $_SETTINGS['LOGINDETAILS'] == true) {

		if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
			include('locale/' . LANGUAGE . '/guest.php');
		}
		else {
			include('locale/en/guest.php');
		}

		if (empty($department)) { $department = '&DEPARTMENT=' . $department; }
		if (empty($user) || (empty($email) && $_SETTINGS['LOGINEMAIL'] == true)) {
			if ($json) {
				$json = array();
				$json['error'] = $_LOCALE['invaliddetailserror'];
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
			} else {
				header('Location: index.php?ERROR=empty' . $department);
			}
			exit();
		}
		else if ($_SETTINGS['LOGINEMAIL'] == true) {
			if (!preg_match('/^[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&\'*+\\\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+$/', $email)) {
				if ($json) {
					$json = array();
					$json['error'] = $_LOCALE['invalidemail'];
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
				} else {
					header('Location: index.php?ERROR=email' . $department);
				}
				exit();
			}
		}
	}
	
	// Add Chat Session
	$query = sprintf("INSERT INTO " . $table_prefix . "chats (`request`, `username`, `datetime`, `email`, `server`, `department`, `refresh`) VALUES ('%d', '%s', NOW(), '%s', '%s', '%s', NOW())", $request, $SQL->escape($user), $SQL->escape($email), $SQL->escape($server), $SQL->escape($department));
	$chat = $SQL->insertquery($query);

}

if ($request > 0) {

	// Visitor Details
	$query = sprintf("SELECT `id` FROM `" . $table_prefix . "requests` AS `requests` WHERE `id` = '%d' LIMIT 1", $request);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$request = $row['id'];
	}

	// Update Chat Session
	if ($active == -3 || $active == -1) {
		$query = sprintf("UPDATE " . $table_prefix . "chats SET `request` = '%d', `username` = '%s', `datetime` = NOW(), `email` = '%s', `server` = '%s', `department` = '%s', `refresh` = NOW(), `active` = '0' WHERE `id` = '%d'", $request, $SQL->escape($user), $SQL->escape($email), $SQL->escape($server), $SQL->escape($department), $chat);
		$SQL->updatequery($query);
	}
}

// Online Operators
if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
	$query = sprintf("SELECT `id`, `device` FROM " . $table_prefix . "users WHERE (`refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `status` = '1') OR `device` <> ''", $connection_timeout);
} else {
	$query = sprintf("SELECT `id` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `status` = '1'", $connection_timeout);
}
if ($_SETTINGS['DEPARTMENTS'] == true && !empty($department)) { $query .= sprintf(" AND `department` LIKE '%%%s%%'", $SQL->escape($department)); }
$rows = $SQL->selectall($query);

$devices = array();
if (is_array($rows)) {
	// iPhone / Android Devices
	if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
		foreach ($rows as $key => $row) {
			$device = $row['device'];
			if (!empty($device)) {
				$devices[] = $device;
			}
		}
	}
}
else {
	if ($json) {
		$json = array();
		$json['status'] = 'Offline';
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
	} else {
		header('Location: offline.php?SERVER=' . $server);
	}
	exit();
}

if (empty($user)) { $user = 'Guest'; }

$server = $_SETTINGS['URL'];

// Hostname
if ($request > 0) {
	$query = sprintf("SELECT `url` FROM " . $table_prefix . "requests WHERE `id` = '%d' LIMIT 1", $request);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$server = $row['url'];

		for ($i = 0; $i < 3; $i++) {
			$substr_pos = strpos($server, '/');
			if ($substr_pos === false) {
				break;
			}
			if ($i < 2) {
				$server = substr($server, $substr_pos + 1);
			}
			else {
				$server = substr($server, 0, $substr_pos);
			}
		
		}
		if (substr($server, 0, 4) == 'www.') { $server = substr($server, 4); }
	}
}

// Update Activity
if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
	// Insert Requested Live Help
	$query = sprintf("INSERT INTO " . $table_prefix . "activity (`user`, `username`, `datetime`, `activity`, `type`, `status`) VALUES ('%d', '%s', NOW(), 'requested Live Help with %s', 8, 0)", $chat, $SQL->escape($user), $SQL->escape($department));
	$SQL->insertquery($query);
}

// Send Guest Initial Question as chat message if different from previous
if (!empty($question)) {
	$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`) VALUES ('%d', '%s', NOW(), '%s', '1')", $chat, $SQL->escape($user), $SQL->escape($question));
	$SQL->insertquery($query);
}
	
// Cancel Initiate Chat
if ($request > 0) {
	$query = sprintf("UPDATE " . $table_prefix . "requests SET `initiate` = '-4' WHERE `id` = '%d'", $request);
	$SQL->updatequery($query);
}

// Current Server
if ($server != '') {
	$query = sprintf("SELECT `server` FROM " . $table_prefix . "chats WHERE `id` = '%d' LIMIT 1", $chat);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$server = $row['server'];
	}
}

function query_str($params) {
	$str = '';
	foreach ($params as $key => $value) {
	   $str .= (strlen($str) < 1) ? '' : '&';
	   $str .= $key . '=' . $value;
	}
	return ($str);
}

// TODO AJAX Total Pending Visitors / Average Wait
$query = sprintf("SELECT `department` FROM " . $table_prefix . "chats WHERE `id` = '%d' LIMIT 1", $chat);
$row = $SQL->selectquery($query);
if (is_array($row)) {
	$department = $row['department'];
	$query = sprintf("SELECT count(`id`) FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `active` = '0' AND `department` LIKE '%%s%' LIMIT 1", $connection_timeout, $SQL->escape($department));
}
else {
	$query = sprintf("SELECT count(`id`) FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `active` = '0' LIMIT 1", $connection_timeout);
}
$row = $SQL->selectquery($query);
if (is_array($row)) {
	$online = $row['count(`id`)'];
}
else {
	$online = '1';
}

// iPhone / Android PUSH Notifications
if (count($devices) > 0) {

	// iPhone / Android PUSH HTTP / HTTPS API Key
	$key = '20237df3ede04c4daa6657723cd6e62e473c26a0f793ac77ed17f1c14338d2fac9f1ccd8431b6152cad2647c1c04a25b4e7f0ee305c586cfad24aedea8ab34ac';
	
	// TODO: Future Accept Alert
	//array('body' => "$user is pending for Live Help at $server", 'action-loc-key' => 'Accept');
	
	// APNS Alert Options
	$alert = "$user is pending for Live Help at $server";
	$sound = 'Pending.wav';
	$badge = (is_numeric($online) ? $online : 0);
	
	// APNS JSON Payload
	$aps = array('alert' => $alert, 'sound' => $sound, 'badge' => $badge);
	$payload = array('aps' => $aps, 'chat' => array('id' => $chat, 'action' => 'accept'));
	
	// Web Service Data
	$data = array('key' => $key, 'devices' => $devices, 'payload' => $payload, 'gcm' => array('message' => 'chat'));
	$query = json_encode($data);
	$url = 'http://api.stardevelop.com/push.php';
	
	// Query Web Service
	if (function_exists('curl_init')) {
	
		$headers = array('Accept: application/json', 'Content-Type: application/json');
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_HEADER, $headers);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
		$result = curl_exec($ch);
		curl_close($ch);
		
	} else {
	
		// PHP5 HTTP POST
		if (version_compare(phpversion(), '5.0.0', '>=')) {
			$opts = array('http' =>
				array(
					'method'  => 'POST',
					'header'  => "Content-type: application/x-www-form-urlencoded\r\n" . "Content-Type: application/json\r\n" . "Accept: application/json\r\n",
					'content' => $query
				)
			);
			$context  = stream_context_create($opts);
			$result = file_get_contents($url, false, $context);
			
		} else {
		
			// PHP4 HTTP POST
			$body = $query;
			$headers = "POST $url 1.1\r\n";	
			$headers .= "Content-type: application/x-www-form-urlencoded\r\n";
			$headers .= "Content-Type: application/json\r\n";
			$headers .= "Accept: application/json\r\n";
			if (!empty($body)) {
				$headers .= "Content-length: " . strlen($body) . "\r\n";
			}
			$headers .= "\r\n";
			
			if ($fp = fsockopen('api.stardevelop.com', 80, $errno, $errstr, 180)) {
				fwrite($fp, $headers . $body, strlen($headers . $body));
				fclose();
			}
		}
	}
}

if ($_SETTINGS['LOGO'] != '') { $margin = 16; $footer = -10; $textmargin = 15; } else { $margin = 50; $footer = 30; $textmargin = 50; }

if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
	include('locale/' . LANGUAGE . '/guest.php');
}
else {
	include('locale/en/guest.php');
}

// Encrypt Session
if ($chat > 0 || $request > 0) {

	$cookie = array('visitor' => (int)$request, 'chat' => (int)$chat);
	$cookie = json_encode($cookie);
	$verify = sha1($cookie);

	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$session = $aes->iv . $verify . $aes->encrypt($cookie);
}

if ($json) {
	$json = array();
	$json['session'] = $session;
	$json['user'] = $user;
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
} else {
	header('Status: 400 Bad Request');
	exit();
}

?>