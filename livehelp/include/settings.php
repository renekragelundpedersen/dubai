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
$database = include('./database.php');
if ($database) {
	include('./spiders.php');
	include('./class.mysql.php');
	include('./class.aes.php');
	include('./class.cookie.php');
	$installed = include('./config.php');
	include('./functions.php');
	include('./version.php');
} else {
	$installed = false;
}

if ($installed == false ) {
	exit();
}

if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }

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
	}
}

$department = $_REQUEST['DEPARTMENT'];

$hidden = 0;
$online = 0;
$away = 0;
$brb = 0;

// Counts the total number of support users within each Online/Offline/BRB/Away status mode
if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
	$query = "SELECT `username`, `status`, `department`, `device` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) OR `device` <> ''";
} else {
	$query = "SELECT `username`, `status`, `department` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND)";
}
$rows = $SQL->selectall($query);
if (is_array($rows)) {
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
			if (!empty($row['device']) && $row['status'] == 1) {
				$online++;
			} else {
				if (!empty($department) && $_SETTINGS['DEPARTMENTS']) {
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

// Status Mode
$status = 'Offline';
if ($online > 0) {
	$status = 'Online';
} elseif ($brb > 0 && $brb >= $away) {
	$status = 'BRB';
} elseif ($away > 0) {
	$status = 'Away';
}

// Auto Initiate Chat
$initiate = false;
$query = sprintf("SELECT `initiate`, `path` FROM " . $table_prefix . "requests WHERE `id` = '%d'", $request);
$row = $SQL->selectquery($query);
if (is_array($row)) {

	$initiate = (int)$row['initiate'];
	$previouspath = explode('; ', $row['path']);
	$totalpages = count($previouspath) + 1;

	if ($initiate > 0 || $initiate == -1 || (isset($_SETTINGS['INITIATECHATAUTO']) && $_SETTINGS['INITIATECHATAUTO'] > 0 && $initiate == 0 && $online > 0 && $totalpages >= $_SETTINGS['INITIATECHATAUTO'])) {
		$initiate = true;
	} else {
		$initiate = false;
	}
}

// Offline Email Redirection
if (!empty($_SETTINGS['OFFLINEEMAILREDIRECT'])) {
	if (preg_match('/^[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&\'*+\\\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+$/', $_SETTINGS['OFFLINEEMAILREDIRECT'])) {
		$_SETTINGS['OFFLINEEMAILREDIRECT'] = 'mailto:' . $_SETTINGS['OFFLINEEMAILREDIRECT'];	
	}
	$_SETTINGS['OFFLINEEMAIL'] = 0;
}

// Departments
$departments = array();
if ($_SETTINGS['DEPARTMENTS'] == true)  {

	if ((float)$_SETTINGS['SERVERVERSION'] >= 3.80) { // iPhone PUSH Supported
		$query = sprintf("SELECT DISTINCT `department` FROM " . $table_prefix . "users WHERE (`refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `status` = '1') OR `device` <> '' ORDER BY `department`", $connection_timeout);
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
		sort($departments);
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
}

// Auto Open Chat
$autoload = 0;
$username = '';
$email = '';
$department = '';
$blocked = 0;
if ($chat > 0) {
	if ($request > 0) {
		$query = sprintf("SELECT `id`, `username`, `email`, `department`, `active` FROM `" . $table_prefix . "chats` AS `chats` WHERE (`id` = '%d' OR `request` = '%d') LIMIT 1", $chat, $request);
	} else {
		$query = sprintf("SELECT `id`, `username`, `email`, `department`, `active` FROM `" . $table_prefix . "chats` AS `chats` WHERE `id` = '%d' LIMIT 1", $chat, $request);
	}
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$active = $row['active'];
		if ($active > 0) {
			$autoload = 1;
			$chat = $row['id'];
			$username = $row['username'];
			$email = $row['email'];
			$department = $row['department'];
		} else if ($active == -3) {
			$blocked = 1;
		}
	}
}

// Encrypt Session
if ($request > 0) {

	$cookie = array('visitor' => (int)$request, 'chat' => (int)$chat);

	// Chat Session
	if ($chat == 0 && $request > 0) {
		$query = sprintf("SELECT `id`, `username`, `email`, `department`, `active` FROM `" . $table_prefix . "chats` WHERE `request` = '%d' LIMIT 1", $request);
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$cookie['chat'] = (int)$row['id'];
			$cookie['name'] = $row['username'];
			$cookie['email'] = $row['email'];
			$cookie['department'] = $row['department'];

			// Chat Blocked
			$active = $row['active'];
			if ($active == -3) {
				$blocked = 1;
			}
		}
	}

	$cookie = json_encode($cookie);
	$verify = sha1($cookie);

	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$session = $aes->iv . $verify . $aes->encrypt($cookie);
}

header('Content-type: text/html; charset=utf-8');

if (file_exists('../locale/' . LANGUAGE . '/guest.php')) {
	include('../locale/' . LANGUAGE . '/guest.php');
}
else {
	include('../locale/en/guest.php');
}

// Templates	
$templates = array();
$templatedir = '../templates/';

if (is_dir($templatedir)) {
	if ($dh = opendir($templatedir)) {
		while (($file = readdir($dh)) !== false) {
			if (is_dir($templatedir . $file) && $file != '.' && $file != '..') {
				$templates[] = $file;
			}
		}
		closedir($dh);
	}
}

// Language
$language = array();
$language['welcome'] = $_LOCALE['welcome'];
$language['enterguestdetails'] = $_LOCALE['enterguestdetails'];
$language['says'] = $_LOCALE['says'];
$language['pushedurl'] = $_LOCALE['pushedurl'];
$language['opennewwindow'] = $_LOCALE['opennewwindow'];
$language['sentfile'] = $_LOCALE['sentfile'];
$language['startdownloading'] = $_LOCALE['startdownloading'];
$language['disconnecttitle'] = $_LOCALE['disconnecttitle'];
$language['disconnectdescription'] = $_LOCALE['disconnectdescription'];
$language['thankyoupatience'] = $_LOCALE['thankyoupatience'];
$language['emailchat'] = $_LOCALE['emailchat'];
$language['togglesound'] = $_LOCALE['togglesound'];
$language['feedback'] = $_LOCALE['feedback'];
$language['disconnect'] = $_LOCALE['disconnect'];
$language['collapse'] = $_LOCALE['collapse'];
$language['expand'] = $_LOCALE['expand'];
$language['invalidemail'] = $_LOCALE['invalidemail'];
$language['name'] = $_LOCALE['name'];
$language['email'] = $_LOCALE['email'];
$language['department'] = $_LOCALE['department'];
$language['question'] = $_LOCALE['question'];
$language['send'] = $_LOCALE['send'];
$language['enteryourmessage'] = $_LOCALE['enteryourmessage'];
$language['switchpopupwindow'] = $_LOCALE['switchpopupwindow'];
$language['initiatechatquestion'] = $_LOCALE['initiatechatquestion'];
$language['rateyourexperience'] = $_LOCALE['rateyourexperience'];
$language['copyright'] = $_LOCALE['stardevelopcopyright'];
$language['thankyoumessagesent'] = $_LOCALE['thankyoumessagesent'];
$language['cancel'] = $_LOCALE['cancel'];
$language['pleasewait'] = $_LOCALE['pleasewait'];
$language['telephonecallshortly'] = $_LOCALE['telephonecallshortly'];
$language['telephonethankyoupatience'] = $_LOCALE['telephonethankyoupatience'];
$language['connect'] = $_LOCALE['connect'];
$language['connecting'] = $_LOCALE['connecting'];
$language['closechat'] = $_LOCALE['closechat'];
$language['chatsessionblocked'] = $_LOCALE['chatsessionblocked'];
$language['accessdenied'] = $_LOCALE['accessdenied'];
$language['blockedchatsession'] = $_LOCALE['blockedchatsession'];

$json = (isset($_REQUEST['JSON'])) ? true : false;
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

	$json = array();
	$json['popupSize'] = array('width' => (int)$_SETTINGS['CHATWINDOWWIDTH'], 'height' => (int)$_SETTINGS['CHATWINDOWHEIGHT']);
	$json['initiateAlign'] = array('x' => strtolower($_SETTINGS['INITIATECHATHORIZONTAL']), 'y' => strtolower($_SETTINGS['INITIATECHATVERTICAL']));
	$json['currentStatus'] = $status;
	$json['offlineRedirect'] = $_SETTINGS['OFFLINEEMAILREDIRECT'];
	$json['offlineEmail'] = (int)$_SETTINGS['OFFLINEEMAIL'];
	$json['autoload'] = $autoload;
	$json['smilies'] = (int)$_SETTINGS['SMILIES'];
	$json['departments'] = $departments;
	$json['locale'] = LANGUAGE;
	$json['language'] = $language;
	$json['session'] = $session;
	$json['user'] = $username;
	$json['email'] = $email;
	$json['department'] = $department;
	$json['visitorTracking'] = (int)$_SETTINGS['VISITORTRACKING'];
	$json['requireGuestDetails'] = (int)$_SETTINGS['REQUIREGUESTDETAILS'];
	$json['loginEmail'] = (int)$_SETTINGS['LOGINEMAIL'];
	$json['loginQuestion'] = (int)$_SETTINGS['LOGINQUESTION'];
	$json['initiate'] = (int)$initiate;
	$json['templates'] = $templates;
	$json['blocked'] = $blocked;
	
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

header('Content-Type: text/javascript');

?>
LiveHelp.popupSize = {width: '<?php echo($_SETTINGS['CHATWINDOWWIDTH']); ?>', height: '<?php echo($_SETTINGS['CHATWINDOWHEIGHT']); ?>'};
LiveHelp.initiateAlign = {x: '<?php echo(strtolower($_SETTINGS['INITIATECHATHORIZONTAL'])); ?>', y: '<?php echo(strtolower($_SETTINGS['INITIATECHATVERTICAL'])); ?>'};
LiveHelp.currentStatus = '<?php echo($status); ?>';
LiveHelp.offlineRedirect = '<?php echo($_SETTINGS['OFFLINEEMAILREDIRECT']); ?>';
LiveHelp.offlineEmail = <?php echo((int)$_SETTINGS['OFFLINEEMAIL']); ?>;
LiveHelp.autoload = <?php echo($autoload); ?>;
LiveHelp.smilies = <?php echo((int)$_SETTINGS['SMILIES']); ?>;
LiveHelp.departments = <?php echo(json_encode($departments)); ?>;
LiveHelp.locale = '<?php echo(LANGUAGE); ?>';
LiveHelp.language = <?php echo(json_encode($language)); ?>;
LiveHelp.session = '<?php echo($session); ?>';
LiveHelp.user = '<?php echo($username); ?>';
LiveHelp.email = '<?php echo($email); ?>';
LiveHelp.department = '<?php echo($department); ?>';
LiveHelp.visitorTracking = <?php echo((int)$_SETTINGS['VISITORTRACKING']); ?>;
LiveHelp.requireGuestDetails = <?php echo((int)$_SETTINGS['REQUIREGUESTDETAILS']); ?>;
LiveHelp.loginEmail = <?php echo((int)$_SETTINGS['LOGINEMAIL']); ?>;
LiveHelp.loginQuestion = <?php echo((int)$_SETTINGS['LOGINQUESTION']); ?>;
LiveHelp.initiate = <?php echo((int)$initiate); ?>;
LiveHelp.templates = <?php echo(json_encode($templates)); ?>;
LiveHelp.blocked = <?php echo($blocked); ?>;