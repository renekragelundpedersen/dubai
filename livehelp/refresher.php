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
include('include/database.php');
include('include/class.mysql.php');
include('include/class.aes.php');
include('include/class.cookie.php');
include('include/config.php');
include('include/functions.php');

if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
if (!isset($_REQUEST['MESSAGE'])){ $_REQUEST['MESSAGE'] = 0; }
if (!isset($_REQUEST['TYPING'])){ $_REQUEST['TYPING'] = ''; }
if (!isset($_REQUEST['TIME'])){ $_REQUEST['TIME'] = ''; }

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

$message = $_REQUEST['MESSAGE'];
$status = $_REQUEST['TYPING'];

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

// Update Typing Status
$query = sprintf("SELECT `typing` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' LIMIT 1", $chat);
$row = $SQL->selectquery($query);
if (is_array($row)) {
	$typing = $row['typing'];
	
	if (isset($_COOKIE['LiveHelpOperator'])) {
		if ($status) { // Currently Typing
			switch($typing) {
			case 0: // None
				$result = 2;
				break;
			case 1: // Guest Only
				$result = 3;
				break;
			case 2: // Operator Only
				$result = 2;
				break;
			case 3: // Both
				$result = 3;
				break;
			}
		}
		else { // Not Currently Typing
			switch($typing) {
			case 0: // None
				$result = 0;
				break;
			case 1: // Guest Only
				$result = 1;
				break;
			case 2: // Operator Only
				$result = 0;
				break;
			case 3: // Both
				$result = 1;
				break;	
			}	
		}
	} else {
		if ($status) { // Currently Typing
			switch($typing) {
			case 0: // None
				$result = 1;
				break;
			case 1: // Guest Only
				$result = 1;
				break;
			case 2: // Operator Only
				$result = 3;
				break;
			case 3: // Both
				$result = 3;
				break;
			}
		}
		else { // Not Currently Typing
			switch($typing) {
			case 0: // None
				$result = 0;
				break;
			case 1: // Guest Only
				$result = 0;
				break;
			case 2: // Operator Only
				$result = 2;
				break;
			case 3: // Both
				$result = 2;
				break;	
			}	
		}
	}
				
	// Update the typing status of the specified Login ID
	$query = sprintf("UPDATE `" . $table_prefix . "chats` SET `typing` = '%d' WHERE `id` = '%d'", $result, $chat);
	$SQL->updatequery($query);
	
}

// Check if an operator has accepted the chat request
$query = sprintf("SELECT `username`, `active`, `department`, `datetime` FROM `" . $table_prefix . "chats` WHERE `id` = '%d'", $chat);
$row = $SQL->selectquery($query);
if (is_array($row)) {
	$username = $row['username'];
	$active = intval($row['active']);
	$datetime = $row['datetime'];
	$department = $row['department'];
}

$connection = true;

if ($active > 0) {

	// Operator Full Name
	$query = sprintf("SELECT `id`, `username`, `firstname`, `lastname` FROM `" . $table_prefix . "users` WHERE `id` = '%d' LIMIT 1", $active);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$operator = $row;
	}

	if ($message > 0) {
		// New Messages
		$query = sprintf("SELECT `id`, `datetime`, `username`, `message`, `align`, `status` FROM `" . $table_prefix . "messages` WHERE `chat` = '%d' AND `status` >= '0' AND `id` > '%d' ORDER BY `datetime`", $chat, $message);
	} else {
		// All Messages except PUSH
		$query = sprintf("SELECT `id`, `datetime`, `username`, `message`, `align`, `status` FROM `" . $table_prefix . "messages` WHERE `chat` = '%d' AND `status` >= '0' AND `status` <> '4' ORDER BY `datetime`", $chat);
	}
	$messagerows = $SQL->selectall($query);
	if (is_array($messagerows)) {

		// Total Operators
		$query = sprintf("SELECT DISTINCT `username` FROM " . $table_prefix . "messages WHERE `chat` = '%d' AND `status` > '0'", $chat);
		$operators = $SQL->selectall($query);
		if (is_array($operators)) {
			foreach ($messagerows as $key => $row) {
				if (is_array($row)) {
					
					// New Message
					if ((unixtimestamp($row['datetime']) - unixtimestamp($datetime)) > 0) {
						if ($operators > 1 && in_array($row['username'], $operators)) {
							$status = $row['status'];
							
							// If the username is not equal to the original operator
							// and the message was from an operator
							// and the joined conversation system message has not been sent
							if (($operator['username'] != $row['username']) && $status > 0) {
							
								// Select supporters full name
								$query = sprintf("SELECT `id`, `username`, `firstname`, `lastname` FROM `" . $table_prefix . "users` WHERE `username` = '%d' LIMIT 1", $SQL->escape($row['username']));
								$row = $SQL->selectquery($query);
								if (is_array($row)) {
									$first = $row['firstname'];
									$last = $row['lastname'];
									
									if (!empty($first)) {
										// Send message to notify user they are out of Pending status
										$message_joined = "$first $last";
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

// Check for Operator Connection Issue
$timeout = $connection_timeout * 2;
$query = sprintf("SELECT `id` FROM `" . $table_prefix . "users` WHERE `refresh` > DATE_SUB(NOW(), INTERVAL %d SECOND) AND `id` = '%d' LIMIT 1", $timeout, $active);
$row = $SQL->selectquery($query);
if (!is_array($row)) {
	$connection = false;
}

if ($_SETTINGS['CHATUSERNAME'] == false) { $username = ''; }

// HTTP/1.1
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

// HTTP/1.0
header('Pragma: no-cache');
header('Content-type: text/html; charset=utf-8');

if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
	include('locale/' . LANGUAGE . '/guest.php');
}
else {
	include('locale/en/guest.php');
}

// JSON Messages
$messages = array();

if (isset($message_joined)) {
	$message_joined .= ' ' . $_LOCALE['joinedconversation'];
	$message_joined = addslashes($message_joined);
	
	$messages[] = array('id' => '', 'username' => '', 'content' => $message_joined, 'align' => 2, 'status' => 1);
}

if ($active > 0 && $message == 0) {

	if (isset($operator) && is_array($operator)) {
		$name = addslashes($operator['firstname'] . ' ' . $operator['lastname']);
		$javascript = "jQuery(document).trigger('LiveHelp.Connected', [{$operator['id']}, '{$name}']);";
		$messages[] = array('id' => -4, 'username' => '', 'content' => $javascript, 'align' => 2, 'status' => 5);
		
		if (!empty($name)) {
			// Now Chatting Message
			$message = $_LOCALE['nowchattingwith'] . ' ' . $name;
			if ($_SETTINGS['DEPARTMENTS'] == true && !empty($department)) {
				$message .= ' (' . $department . ')';
			}
			addslashes($message);
			$messages[] = array('id' => -2, 'username' => '', 'content' => $message, 'align' => 2, 'status' => 1);
		}
		
	}
	
	$messages[] = array('id' => -3, 'username' => '', 'content' => 'if (jQuery(\'#Message\').length > 0) { document.onkeydown = focusChat; }', 'align' => 2, 'status' => 5);
	
	// Google Analytics Custom Variable
	if (!empty($_SETTINGS['ANALYTICS'])) {
		$google = 'if (typeof(_gaq) === \'object\') { _gaq.push([\'_setCustomVar\', 1, \'Live Chat Operator\', \'' . $first . ' ' . $last . '\', 2]); _gaq.push([\'_trackEvent\', \'Live Chat\', \'Chat Accepted\']); }';
		$messages[] = array('id' => -3, 'username' => '', 'content' => $google, 'align' => 2, 'status' => 5);
	}

	if ($_SETTINGS['INTRODUCTION'] != '') {
		$welcome = preg_replace("/(\r\n|\r|\n)/", '<br />', $_SETTINGS['INTRODUCTION']);
		$welcome = preg_replace("/({Username})/", $operator['firstname'], $welcome);

		$messages[] = array('id' => -1, 'username' => $operator['firstname'], 'content' => $welcome, 'align' => 1, 'status' => 1);
	}
}
elseif ($active == -3) {

	// Blocked Chat
	$closed = $_LOCALE['closedusermessage'];
	$messages[] = array('id' => '', 'username' => '', 'content' => 'jQuery(document).trigger("LiveHelp.BlockChat");', 'align' => 2, 'status' => 5);
}
elseif ($active == -1) {

	// Closed Chat
	$closed = $_LOCALE['closedusermessage'];
	$disable = 'if (jQuery(\'#LiveHelpMessageTextarea\').length > 0) { jQuery(document).trigger("LiveHelp.Disconnect"); }';
	
	$messages[] = array('id' => '', 'username' => '', 'content' => $closed, 'align' => 2, 'status' => 1);
	$messages[] = array('id' => '', 'username' => '', 'content' => $disable, 'align' => 2, 'status' => 5);
}

$typingresult = 0;
// Check the typing status of the current operator
$query = sprintf("SELECT `typing` FROM `" . $table_prefix . "chats` WHERE `id` = '%d'", $chat);
$row = $SQL->selectquery($query);
if (is_array($row)) {
	$typing = $row['typing'];
	
	switch($typing) {
	case 0: // None
		$typingresult = 0;
		break;
	case 1: // Guest Only
		$typingresult = 0;
		break;
	case 2: // Operator Only
		$typingresult = 1;
		break;
	case 3: // Both
		$typingresult = 1;
		break;		
	}
}

$names = array();

if (isset($messagerows)) {
	if (is_array($messagerows)) {
		
		foreach ($messagerows as $key => $row) {
			if (is_array($row)) {

				$id = $row['id'];
				$username = $row['username'];
				$message = $row['message'];
				$align = $row['align'];
				$status = $row['status'];
				
				if ($_SETTINGS['CHATUSERNAME'] == false) { $username = ''; }
				$message = str_replace('<', '&lt;', $message);
				$message = str_replace('>', '&gt;', $message);
				$message = preg_replace("/(\r\n|\r|\n)/", '<br />', $message);
				
				if ($status > 0) {
					if (!array_key_exists($username, $names)) {
						$query = sprintf("SELECT `firstname` FROM `" . $table_prefix . "users` WHERE `username` LIKE BINARY '%s' LIMIT 1", $username);
						$name = $SQL->selectquery($query);
						if (is_array($name)) {
							$username = $name['firstname'];
							$names[$username] = $name['firstname'];
						}
					} else {
						$username = $names[$username];
					}
				}
				
				// Output message
				if ($status >= 0) {
					$messages[] = array('id' => (int)$id, 'username' => $username, 'content' => $message, 'align' => (int)$align, 'status' => (int)$status);
				}
			}
		}

	}
}

// Update last refresh so user is online
$query = sprintf("UPDATE `" . $table_prefix . "chats` SET `refresh` = NOW() WHERE `id` = '%d'", $chat);
$SQL->updatequery($query);

// JSON Output
$json = array();

// Typing Status
if ($typingresult) { $json['typing'] = $typingresult; }

// Messages
if (count($messages) > 0) {
	$json['messages'] = $messages;
}

// Output JSON
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