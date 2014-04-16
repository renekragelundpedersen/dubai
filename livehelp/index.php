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

if (!isset($_REQUEST['NAME'])){ $_REQUEST['NAME'] = ''; }
if (!isset($_REQUEST['EMAIL'])){ $_REQUEST['EMAIL'] = ''; }
if (!isset($_REQUEST['ERROR'])){ $_REQUEST['ERROR'] = ''; }

$installed = false;
$database = include('include/database.php');
if ($database) {
	// Smarty Template
	require('include/smarty/Smarty.class.php');

	include('include/spiders.php');
	include('include/functions.php');
	include('include/class.mysql.php');
	include('include/class.aes.php');
	include('include/class.cookie.php');
	$installed = include('include/config.php');
	include('include/version.php');
} else {
	$installed = false;
}

if ($installed == false) {
	header('Location: ./offline.php');
	exit();
}

if ($installed == true) {

	$username = htmlspecialchars(trim($_REQUEST['NAME']));
	$email = htmlspecialchars(trim($_REQUEST['EMAIL'])); 
	$department = htmlspecialchars(trim($_REQUEST['DEPARTMENT']));

	// Override Session
	$session = '';
	$request = 0;
	$chat = 0;
	if (isset($_REQUEST['SESSION'])) {
		$session = rawurldecode($_REQUEST['SESSION']);
		
		$aes = new AES256($_SETTINGS['AUTHKEY']);

		$size = strlen($aes->iv);
		$iv = substr($session, 0, $size);
		$verify = substr($session, $size, 40);
		$ciphertext = substr($session, 40 + $size);

		$decrypted = $aes->decrypt($ciphertext, $iv);
		if (sha1($decrypted) == $verify) {
			$cookie = json_decode($decrypted, true);
			$request = $cookie['visitor'];
			$chat = $cookie['chat'];

			if (isset($cookie['username'])) { $username = $cookie['username']; }
			if (isset($cookie['email'])) { $email = $cookie['email']; }
			if (isset($cookie['department'])) { $department = $cookie['department']; }
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

	// Override Template
	if (isset($_REQUEST['TEMPLATE']) && file_exists('templates/' . $_REQUEST['TEMPLATE'] . '/')) {
		$_SETTINGS['TEMPLATE'] = $_REQUEST['TEMPLATE'];
	}

	// Online Users
	if (empty($_REQUEST['ERROR'])) {
		if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
			$query = sprintf("SELECT `id`, `department`, `device` FROM " . $table_prefix . "users WHERE (`refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) OR `device` <> '') AND `status` = '1'", $connection_timeout);
		} else {
			$query = sprintf("SELECT `id`, `department` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND AND `status` = '1'", $connection_timeout);
		}
		
		$available = 0;
		
		$rows = $SQL->selectall($query);
		if (is_array($rows)) {
			foreach ($rows as $key => $row) {
				if (is_array($row)) {
					if (!empty($row['device']) && $row['status'] == 1) {
						$available++;
					} else {
						if ($_REQUEST['DEPARTMENT'] != '' && $_SETTINGS['DEPARTMENTS'] == true) {
							// Department Array
							$departments = array_map('trim', explode(';', $row['department']));
							if (array_search($_REQUEST['DEPARTMENT'], $departments) !== false) {
								$available++;
							}
						}
						else {
							$available++;
						}
					}
				}
			}
		}

		// Offline Email
		if ($available == 0) {
			header('Location: ./offline.php?LANGUAGE=' . LANGUAGE);
			exit();
		}
	}
}

header('Content-type: text/html; charset=utf-8');

if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
	include('locale/' . LANGUAGE . '/guest.php');
}
else {
	include('locale/en/guest.php');
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

// Disable Telephone - Future Use
$_SETTINGS['LOGINTELEPHONE'] = false;

// Login Details
if ($chat > 0) {
	$query = sprintf("SELECT `username`, `email`, `department` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' LIMIT 1", $chat);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$username = $row['username'];
		$email = $row['email'];
		$department = $row['department'];
	}
}

$smarty->assign('LOCALE', $_LOCALE, true);
$smarty->assign('username', $username, true);
$smarty->assign('email', $email, true);
$smarty->assign('telephone', $telephone, true);
$smarty->assign('question', $question, true);
$smarty->assign('title', 'Live Chat', true);
$smarty->assign('session', $session, true);

// Department
if (!isset($_REQUEST['DEPARTMENT']) || isset($department)) {
	$selected = $department;
	$smarty->assign('department', $department);
	$smarty->assign('selected', $selected);
}

// Chat Connected
$connected = false;
if ($chat > 0 || $request > 0) {
	$query = sprintf("SELECT `username`, `email`, `server`, `department`, `active` FROM `" . $table_prefix . "chats` WHERE (`id` = '%d' OR `request` = '%d') AND `active` > 0 LIMIT 1", $chat, $request);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$connected = true;
	}
}

// Login Details
if ($_SETTINGS['LOGINDETAILS'] == false) {
	$connected = true;
}

if ($connected) {
	$smarty->assign('connected', $connected);
}

// Error Messages
if ($_REQUEST['ERROR'] == 'empty') {
	$smarty->assign('error', $_LOCALE['emptyuserdetails'], true);
} else if ($_REQUEST['ERROR'] == 'email') {
	$smarty->assign('error', $_LOCALE['invalidemail'], true);
}

// Required Details
if ($_SETTINGS['REQUIREGUESTDETAILS'] == true && $_SETTINGS['LOGINDETAILS'] == true) {
	$smarty->assign('required', true);
} else {
	$smarty->assign('required', false);
}

// Departments
if ($_SETTINGS['DEPARTMENTS'] == true && !isset($_REQUEST['DEPARTMENT']) && $installed == true || $_REQUEST['ERROR'] == 'empty')  {

	if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
		$query = sprintf("SELECT DISTINCT `department` FROM " . $table_prefix . "users WHERE (`refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) OR `device` <> '') AND `status` = '1' ORDER BY `department`", $connection_timeout);
	} else {
		$query = sprintf("SELECT DISTINCT `department` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `status` = '1' ORDER BY `department`", $connection_timeout);
	}
	$rows = $SQL->selectall($query);
	if (is_array($rows)) {
		$departments = array();
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$department = explode(';',  $row['department']);
				if (is_array($department)) {
					foreach ($department as $key => $depart) {
						$depart = trim($depart);
						if (!in_array($depart, $departments)) {
							$departments[] = $depart;
						}
					}
				}
				else {
					$department = trim($row['department']);
					if (!in_array($department, $departments)) {
						$departments[] = $department;
					}
				}
			}
		}
		
		$total = count($departments);
		if ($total > 1) {
			array_unshift($departments, '');
		}
		asort($departments);

		if (is_array($departments) && !isset($selected)) {
			foreach($departments as $key => $selected) {
				if ($total == 1) {
					$smarty->assign('selected', $selected);
				} else {
					$smarty->assign('selected', '');
				}
			}
		}

	}
	
	// WHMCS Departments
	if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
		$departs = $departments;
		$departments = array();
		if (is_array($departs)) {
			foreach ($departs as $key => $department) {
				$query = sprintf("SELECT `name`, `hidden` FROM `tblticketdepartments` WHERE `name` = '%s' LIMIT 1", $department);
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					if ($row['hidden'] != 'on') {
						$departments[] = $row['name'];
					}
				} else {
					$departments[] = $department;
				}
			}
			sort($departments);
		}
	}
	
	$smarty->assign('departments', $departments);
	
}

$smarty->display($_SETTINGS['TEMPLATE'] . '/index.tpl');

?>