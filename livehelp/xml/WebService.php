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
include('../include/database.php');
include('../include/class.mysql.php');
include('../include/phpmailer/class.phpmailer.php');
include('../include/config.php');
include('../include/version.php');
include('../include/functions.php');
include('../include/class.passwordhash.php');
include('../include/class.aes.php');

if (!ini_get('safe_mode')) { 
	set_time_limit(0);
}
ignore_user_abort(true);

// Database Connection
if (DB_HOST == '' || DB_NAME == '' || DB_USER == '' || DB_PASS == '') {
	// HTTP Service Unavailable
	if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 503 Service Unavailable'); } else { header('Status: 503 Service Unavailable'); }
	exit();
}

/* Cross-Origin Resource Sharing
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
*/

if (!isset($_REQUEST['Username'])){ $_REQUEST['Username'] = ''; }
if (!isset($_REQUEST['Password'])){ $_REQUEST['Password'] = ''; }
$_OPERATOR = array();

if (IsAuthorized() == true) {

	$_REQUEST = array_map('addslashes', $_REQUEST);

	switch ($_SERVER['QUERY_STRING']) {
		case 'Login':
			Login();
			break;
		case 'Users':
			Users();
			break;
		case 'Visitors':
			Visitors();
			break;
		case 'Visitor':
			Visitor();
			break;
		case 'Version':
			Version();
			break;
		case 'Settings':
			Settings();
			break;
		case 'InitaliseChat':
			InitaliseChat();
			break;
		case 'Chat':
			Chat();
			break;
		case 'Chats':
			Chats();
			break;
		case 'Operators':
			Operators();
			break;
		case 'Statistics':
			Statistics();
			break;
		case 'History':
			History();
			break;
		case 'Send':
			Send();
			break;
		case 'EmailChat':
			EmailChat();
			break;
		case 'Calls':
			Calls();
			break;
		case 'Responses':
			Responses();
			break;
		case 'Activity':
			Activity();
			break;
		default:
			if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
			break;
	}
	
} else {

	switch ($_SERVER['QUERY_STRING']) {
		case 'Version':
			Version();
			break;
		case 'ResetPassword':
			ResetPassword();
			break;
		default:
			if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
			break;
	}
	
}

exit();


function IsAuthorized() {

	global $_OPERATOR;
	global $_PLUGINS;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	// Encrypted Operator Session
	if (isset($_REQUEST['Session'])) {
		$cookie = base64_decode($_REQUEST['Session']);
		$aes = new AES256($_SETTINGS['AUTHKEY']); // TODO Setup Seperate Operator Key

		$size = strlen($aes->iv);
		$iv = substr($cookie, 0, $size);
		$verify = substr($cookie, $size, 40);
		$ciphertext = substr($cookie, 40 + $size);

		$decrypted = $aes->decrypt($ciphertext, $iv);
		
		if (sha1($decrypted) == $verify) {
			$cookie = json_decode($decrypted, true);
			
			$id = (int)$cookie['id'];
			$_REQUEST['Username'] = $cookie['username'];
			$_REQUEST['Password'] = $cookie['password'];
		}

	}

	$username = $_REQUEST['Username'];
	$password = $_REQUEST['Password'];

	if (isset($_REQUEST['Version']) && $_REQUEST['Version'] > 3.9) { 
		$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `email`, `department`, `datetime`, `disabled`, `privilege`, `status` FROM `" . $table_prefix . "users` WHERE `username` LIKE BINARY '%s' LIMIT 1", $SQL->escape($username));
	} else {
		$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `email`, `department`, `datetime`, `disabled`, `privilege`, `status` FROM `" . $table_prefix . "users` WHERE `username` LIKE BINARY '%s' AND `disabled` = 0 LIMIT 1", $SQL->escape($username));
	}
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$id = $row['id'];
		$username = $row['username'];
		$hash = $row['password'];
		$firstname = $row['firstname'];
		$lastname = $row['lastname'];
		$email = $row['email'];
		$department = $row['department'];
		$length = strlen($row['password']);

		// v4.0 Password
		$hasher = new PasswordHash(8, true);
		$check = $hasher->CheckPassword($password, $hash);

		// Legacy Hashes
		$legacy = '';
		if (substr($hash, 0, 3) != '$P$') {
			switch ($length) {
				case 40: // SHA1
					$legacy = sha1($password);
					break;
				case 128: // SHA512
					if (function_exists('hash')) {
						if (in_array('sha512', hash_algos())) {
							$legacy = hash('sha512', $password);
						} else if (in_array('sha1', hash_algos())) {
							$legacy = hash('sha1', $password);
						}
					} else if (function_exists('mhash') && mhash_get_hash_name(MHASH_SHA512) != false) {
						$legacy = bin2hex(mhash(MHASH_SHA512, $password));
					}
					break;
				default: // MD5
					$legacy = md5($password);
					break;
			}
		}

		// WHMCS Plugin
		if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
			if (isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 4.0) {
				$password = md5($password);
			}
		}

		if ((isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 4.0 && ($check || $hash == $legacy)) || $hash == $password) {

			// Upgrade Password Authentication
			if (isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 4.0) {
				if (substr($hash, 0, 3) != '$P$') {
					$hash = $hasher->HashPassword($_REQUEST['Password']);
					if (strlen($hash) >= 20) {
						// Update Password Hash
						$query = sprintf("UPDATE " . $table_prefix . "users SET `password` = '%s' WHERE `id` = %d LIMIT 1", $SQL->escape($hash), $id);
						$SQL->updatequery($query);
					}
				}
			}
		
			$_OPERATOR['DISABLED'] = $row['disabled'];
			if ($_OPERATOR['DISABLED']) {
				header('X-Disabled: *');
				return false;
			} else {
		
				$_OPERATOR['ID'] = $row['id'];
				$_OPERATOR['DATETIME'] = $row['datetime'];
				$_OPERATOR['PRIVILEGE'] = $row['privilege'];
				$_OPERATOR['STATUS'] = $row['status'];
		
				// WHMCS Plugin
				if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
					$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `email`, `supportdepts` FROM `tbladmins` WHERE `username` LIKE BINARY '%s' LIMIT 1", $SQL->escape($username));
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$username = $row['username'];
						$hash = $row['password'];
						$firstname = $row['firstname'];
						$lastname = $row['lastname'];
						$email = $row['email'];
						$departments = $row['supportdepts'];
						$custom = $row['id'];
						
						if ($hash == $password) {
							$departments = explode(',', $departments);
							$where = implode("' OR `id` = '", $departments);
							$query = sprintf("SELECT `name` FROM `tblticketdepartments` WHERE `id` = '%s'", $where);
							$rows = $SQL->selectall($query);
							if (is_array($rows)) {
								$departments = array();
								foreach ($rows as $key => $department) {
									if (is_array($department)) {
										$departments[] = $department['name'];
									}
								}
							}
							$department = implode('; ', $departments);
							
							$query = sprintf("UPDATE " . $table_prefix . "users SET `username` = '%s', `password` = '%s', `firstname` = '%s', `lastname` = '%s', `email` = '%s', `department` = '%s', `custom` = '%d' WHERE `id` = %d LIMIT 1", $SQL->escape($username), $SQL->escape($hash), $SQL->escape($firstname), $SQL->escape($lastname), $SQL->escape($email), $SQL->escape($department), $custom, $_OPERATOR['ID']);
							$SQL->updatequery($query);
							
							$_OPERATOR['USERNAME'] = $username;
							$_OPERATOR['PASSWORD'] = $hash;
							$_OPERATOR['NAME'] = (!empty($lastname)) ? $firstname . ' ' . $lastname : $firstname;
							$_OPERATOR['DEPARMENT'] = $department;
							return true;
						}
					} else {
						$_OPERATOR['USERNAME'] = $username;
						$_OPERATOR['PASSWORD'] = $hash;
						$_OPERATOR['NAME'] = (!empty($lastname)) ? $firstname . ' ' . $lastname : $firstname;
						$_OPERATOR['DEPARMENT'] = $department;
						return true;
					}
				} else {
					$_OPERATOR['USERNAME'] = $username;
					$_OPERATOR['PASSWORD'] = $hash;
					$_OPERATOR['NAME'] = (!empty($lastname)) ? $firstname . ' ' . $lastname : $firstname;
					$_OPERATOR['DEPARMENT'] = $department;
					return true;
				}
			}
			
		} else {
			if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
			
				$_OPERATOR['ID'] = $row['id'];
				$_OPERATOR['DATETIME'] = $row['datetime'];
				$_OPERATOR['PRIVILEGE'] = $row['privilege'];
				$_OPERATOR['STATUS'] = $row['status'];
			
				$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `email`, `supportdepts` FROM `tbladmins` WHERE `username` LIKE BINARY '%s'", $SQL->escape($username));
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$username = $row['username'];
					$hash = $row['password'];
					$firstname = $row['firstname'];
					$lastname = $row['lastname'];
					$email = $row['email'];
					$departments = $row['supportdepts'];
					$custom = $row['id'];
					
					if ($hash == $password) {
						$departments = explode(',', $departments);
						$where = implode("' OR `id` = '", $departments);
						$query = sprintf("SELECT `name` FROM `tblticketdepartments` WHERE `id` = '%s'", $where);
						$rows = $SQL->selectall($query);
						if (is_array($rows)) {
							$departments = array();
							foreach ($rows as $key => $department) {
								if (is_array($department)) {
									$departments[] = $department['name'];
								}
							}
						}
						$department = implode('; ', $departments);
						
						$query = sprintf("UPDATE " . $table_prefix . "users SET `username` = '%s', `password` = '%s', `firstname` = '%s', `lastname` = '%s', `email` = '%s', `department` = '%s', `custom` = '%d' WHERE `id` = %d", $SQL->escape($username), $SQL->escape($hash), $SQL->escape($firstname), $SQL->escape($lastname), $SQL->escape($email), $SQL->escape($department), $custom, $id);
						$SQL->updatequery($query);
						
						$_OPERATOR['USERNAME'] = $username;
						$_OPERATOR['PASSWORD'] = $hash;
						$_OPERATOR['NAME'] = (!empty($lastname)) ? $firstname . ' ' . $lastname : $firstname;
						$_OPERATOR['DEPARMENT'] = $department;
						return true;
					}
				
				}
			}
		
			$_OPERATOR['DISABLED'] = $row['disabled'];
			if ($_OPERATOR['DISABLED']) {
				header('X-Disabled: *');
				return false;
			}
		}
	} else {
		// WHMCS Plugin
		if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {

			// MD5 Password Hash
			if (isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 4.0) {
				$password = md5($password);
			}

			$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `email`, `supportdepts` FROM `tbladmins` WHERE `username` LIKE BINARY '%s'", $SQL->escape($username));
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$username = $row['username'];
				$hash = $row['password'];
				$firstname = $row['firstname'];
				$lastname = $row['lastname'];
				$email = $row['email'];
				$departments = $row['supportdepts'];
				$custom = $row['id'];
				
				$departments = explode(',', $departments);
				$where = implode("' OR `id` = '", $departments);
				$query = sprintf("SELECT `name` FROM `tblticketdepartments` WHERE `id` = '%s'", $where);
				$rows = $SQL->selectall($query);
				if (is_array($rows)) {
					$departments = array();
					foreach ($rows as $key => $department) {
						if (is_array($department)) {
							$departments[] = $department['name'];
						}
					}
				}
				$department = implode('; ', $departments);
				
				// Operator Password
				if ($hash == $password) {
					
					$query = sprintf("SELECT * FROM `" . $table_prefix . "users` WHERE `custom` = %d", $custom);
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$query = sprintf("UPDATE " . $table_prefix . "users SET `username` = '%s', `password` = '%s', `firstname` = '%s', `lastname` = '%s', `email` = '%s', `department` = '%s' WHERE `custom` = %d", $SQL->escape($username), $SQL->escape($hash), $SQL->escape($firstname), $SQL->escape($lastname), $SQL->escape($email), $SQL->escape($department), $custom);
						$SQL->updatequery($query);

						$id = $row['id'];
						$datetime = $row['datetime'];
						$privilege = $row['privilege'];
						$status = $row['status'];

					} else {
						$query = sprintf("INSERT INTO " . $table_prefix . "users (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `department`, `device`, `image`, `privilege`, `status`, `custom`) VALUES ('', '%s', '%s', '%s', '%s', '%s', '%s', '', '', '-1', '-1', '%d')", $SQL->escape($username), $SQL->escape($hash), $SQL->escape($firstname), $SQL->escape($lastname), $SQL->escape($email), $SQL->escape($department), $custom);
						$id = $SQL->insertquery($query);
						$privilege = -1;
						$status = -1;
					}
					
					$_OPERATOR['ID'] = $id;
					$_OPERATOR['USERNAME'] = $username;
					$_OPERATOR['PASSWORD'] = $hash;
					$_OPERATOR['NAME'] = (!empty($lastname)) ? $firstname . ' ' . $lastname : $firstname;
					$_OPERATOR['DEPARMENT'] = $department;
					
					if (!isset($datetime)) {
						$query = sprintf("SELECT `datetime` FROM `" . $table_prefix . "users` WHERE `custom` = %d", $custom);
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$_OPERATOR['DATETIME'] = $row['datetime'];
						}
					}
					$_OPERATOR['PRIVILEGE'] = $privilege;
					$_OPERATOR['STATUS'] = $status;
					return true;
					
				}
			}
		}
	
	}

	//  Supports v4.0 Authentication
	$version = '4.0';
	header('X-Authentication: ' . $version);

	return false;
}

function Login() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;
	
	// Automatic Database Upgrade
	$version = Upgrade();

	if (!isset($_SETTINGS['OPERATORVERSION'])){ $_SETTINGS['OPERATORVERSION'] = '3.28'; }
	if (!isset($_REQUEST['Action'])){ $_REQUEST['Action'] = ''; }
	if (!isset($_REQUEST['Device'])){ $_REQUEST['Device'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }

	// Encrypted Operator Session
	if (isset($_REQUEST['Session'])) {
		$cookie = base64_decode($_REQUEST['Session']);
		$aes = new AES256($_SETTINGS['AUTHKEY']); // TODO Setup Seperate Operator Key

		$size = strlen($aes->iv);
		$iv = substr($cookie, 0, $size);
		$verify = substr($cookie, $size, 40);
		$ciphertext = substr($cookie, 40 + $size);

		$decrypted = $aes->decrypt($ciphertext, $iv);
		
		if (sha1($decrypted) == $verify) {
			$cookie = json_decode($decrypted, true);
			
			$id = (int)$cookie['id'];
			$username = $cookie['username'];
			$password = $cookie['password'];
		}

	} else {
		$username = $_REQUEST['Username'];
		$password = $_REQUEST['Password'];
	}

	switch ($_REQUEST['Action']) {
		case 'Offline':
			$status = 0;
			break;
		case 'Hidden':
			$status = 0;
			break;
		case 'Online':
			$status = 1;
			break;
		case 'BRB':
			$status = 2;
			break;
		case 'Away':
			$status = 3;
			break;
		default:
			$status = -1;
			break;
	}
	
	if ($status != -1) {
		// Update Operator Session
		$query = sprintf("UPDATE " . $table_prefix . "users SET `datetime` = NOW(), `refresh` = NOW(), `status` = '%d'", $status);
		
		// iPhone APNS (PUSH Notifications)
		if (!empty($_REQUEST['Device'])) {
			$query .= ", `device` = '" . $_REQUEST['Device'] . "'";
		}
		$query .= " WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		$SQL->updatequery($query);
		
		// Update Operator Status
		$_OPERATOR['STATUS'] = $status;
		
	} else {
		// iPhone APNS (PUSH Notifications)
		if (!empty($_REQUEST['Device'])) {
			$query = sprintf("UPDATE " . $table_prefix . "users SET `device` = '%s' WHERE `id` = '%d'", $SQL->escape($_REQUEST['Device']), $SQL->escape($_OPERATOR['ID']));
			$SQL->updatequery($query);
		}
	}
	
	// Authentication
	$authentication = '4.0';

	// Encrypt Session
	$cookie = array('id' => (int)$_OPERATOR['ID'], 'username' => $username, 'password' => $password);
	$cookie = json_encode($cookie);
	$verify = sha1($cookie);
	$aes = new AES256($_SETTINGS['AUTHKEY']);  // TODO Setup Seperate Operator Key
	$session = $aes->iv . $verify . $aes->encrypt($cookie);
	$session = base64_encode($session);
	
	if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
		// Insert Login Activity
		$query = sprintf("INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `type`, `status`) VALUES ('%d', '%s', NOW(), 'signed into Live Help', 1, 1)", $SQL->escape($_OPERATOR['ID']), $SQL->escape($_OPERATOR['NAME']));
		$SQL->insertquery($query);
	}

	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Login xmlns="urn:LiveHelp" ID="<?php echo($_OPERATOR['ID']); ?>" Session="<?php echo($session); ?>" Version="<?php echo($_SETTINGS['OPERATORVERSION']); ?>" Database="<?php echo($version); ?>" Authentication="<?php echo($authentication) ?>" Name="<?php echo(xmlattribinvalidchars($_OPERATOR['NAME'])); ?>" Access="<?php echo($_OPERATOR['PRIVILEGE']); ?>"/>
<?php
	} else {
		header('Content-type: application/json; charset=utf-8');
		$login = array('ID' => (int)$_OPERATOR['ID'], 'Session' => $session, 'Version' => $_SETTINGS['OPERATORVERSION'], 'Database' => $version, 'Authentication' => $authentication, 'Name' => $_OPERATOR['NAME'], 'Access' => $_OPERATOR['PRIVILEGE'], 'Status' => (int)$_OPERATOR['STATUS']);
		$json = array('Login' => $login);
		$json = json_encode($json);
		echo($json);
		exit();
	}

}

function Users() {
	
	global $_OPERATOR;
	global $_SETTINGS;
	global $_PLUGINS;
	global $SQL;
	global $table_prefix;
	global $connection_timeout;
	
	if (!isset($_REQUEST['Action'])){ $_REQUEST['Action'] = ''; }
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Transfer'])){ $_REQUEST['Transfer'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	
	if (isset($_REQUEST['Device'])) {
		// Update iPhone APNS
		$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `device` = '" . $_REQUEST['Device'] . "' WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		$SQL->updatequery($query);
	} else {
		$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW() WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		$SQL->updatequery($query);
	}
	
	// Check for actions and process
	if ($_REQUEST['Action'] == 'Accept' && $_REQUEST['ID'] != '0') {
	
		// Check if already assigned to a Support operator
		$query = "SELECT `username`, UNIX_TIMESTAMP(`datetime`) AS `datetime`, `active` FROM " . $table_prefix . "chats WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			if ($row['active'] == '0' || $row['active'] == '-2') {
	
				$name = ucwords(strtolower($row['username']));
				$datetime = $row['datetime'];
	
				// Update the active flag of the guest user to the ID of the operator
				$query = "UPDATE " . $table_prefix . "chats SET `active` = '" . $_OPERATOR['ID'] . "' WHERE `id` = '" . $_REQUEST['ID'] . "'";
				$SQL->updatequery($query);
				
				if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
					// Insert Accepted Chat Activity
					$query = "INSERT INTO " . $table_prefix . "activity(`user`, `chat`, `username`, `datetime`, `activity`, `duration`, `type`, `status`) VALUES ('{$_OPERATOR['ID']}', '{$_REQUEST['ID']}', '$name', NOW(), 'accepted chat with $name', UNIX_TIMESTAMP(NOW()) - $datetime, 7, 1)";
					$SQL->insertquery($query);
				}
			}
		}
	}
	elseif ($_REQUEST['Action'] == 'Close' && $_REQUEST['ID'] != '0') {
	
		// Verify Closed Chat
		$query = "SELECT `active` FROM " . $table_prefix . "chats WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$active = $row['active'];
			
			if ($active > 0) {
	
				// Close Chat
				$query = "UPDATE " . $table_prefix . "chats SET `active` = '-1' WHERE `id` = '" . $_REQUEST['ID'] . "'";
				$SQL->updatequery($query);
				
				// WHMCS Plugin
				if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
					
					include('../plugins/whmcs/functions.php');

					// WHMCS ID
					$query = "SELECT `custom` FROM `" . $table_prefix . "custom` AS custom, `" . $table_prefix . "chats` As chats WHERE custom.request = chats.request AND chats.id = '" . $_REQUEST['ID'] . "' ORDER BY custom.id LIMIT 1";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$session = $row['custom'];
						
						// Log Chat Ticket
						$id = $_REQUEST['ID'];
						$seeds = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
						$c = null;
						$seeds_count = strlen($seeds) - 1;
						for ($i = 0; 8 > $i; $i++) {
							$c .= $seeds[rand(0, $seeds_count)];
						}
						
						// Department
						$query = "SELECT `id` FROM `tblticketdepartments` WHERE `hidden` = '' ORDER BY `order` ASC LIMIT 1";
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$department = $row['id'];
							
							// Chat Transcript
							$query = "SELECT `username`, `message`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '" . $_REQUEST['ID'] . "' AND `status` <= '3' ORDER BY `datetime`";
							$row = $SQL->selectquery($query);
							$transcript = ''; $textmessages = '';
							
							// Determine EOL
							$server = strtoupper(substr(PHP_OS, 0, 3));
							if ($server == 'WIN') { 
								$eol = "\r\n"; 
							} elseif ($server == 'MAC') { 
								$eol = "\r"; 
							} else { 
								$eol = "\n"; 
							}
							
							$transcript .= '[div="chat"]';
							while ($row) {
								if (is_array($row)) {
									$username = $row['username'];
									$message = $row['message'];
									$status = $row['status'];
									
									// Operator
									if ($status) {
										$transcript .= '[div="operator"][div="name"]' . $username . ' says:[/div][div="message"]' . $message . '[/div][/div]';  
										$textmessages .= $username . ' ' . $_LOCALE['says'] . ':' . $eol . '	' . $message . $eol; 
									}
									// Guest
									if (!$status) {
									
										// Replace HTML Code
										$message = str_replace('<', '&lt;', $message);
										$message = str_replace('>', '&gt;', $message);
									
										$transcript .= '[div="visitor"][div="name"]' . $username . ' says:[/div][div="message"]' . $message . '[/div][/div]';  
										$textmessages .= $username . ' ' . $_LOCALE['says'] . ':' . $eol . '	' . $message . $eol; 
									}
									$row = $SQL->selectnext();
								}
							}
							$transcript .= '[/div]';
							$transcript = preg_replace("/(\r\n|\r|\n)/", '<br/>', $transcript);
							
							// Insert Live Help Chat
							$query = "INSERT INTO tbltickets(`did`, `userid`, `c`, `date`, `title`, `message`, `status`, `urgency`, `lastreply`) VALUES ('$department', '$session', '$c', NOW(), 'Chat Log " . date('d/m/Y H:i') . "', '$transcript', 'Closed', 'Medium', NOW())";
							$id = $SQL->insertquery($query);

							// WHMCS Ticket Masking
							$mask = genTicketMask($id);

							// Update Mask Ticket ID
							$query = "UPDATE `tbltickets` SET `tid` = '$mask' WHERE `id` = '$id'";
							$SQL->updatequery($query);

						}
					}
				}
			}
		
			// Send Chat Transcript
			if (isset($_SETTINGS['AUTOEMAILTRANSCRIPT']) && $_SETTINGS['AUTOEMAILTRANSCRIPT'] != '') {

				$query = "SELECT `username`, `message`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '" . $_REQUEST['ID'] . "' AND `status` <= '3' ORDER BY `datetime`";
				$row = $SQL->selectquery($query);
				$htmlmessages = ''; $textmessages = '';
				while ($row) {
					if (is_array($row)) {
						$username = $row['username'];
						$message = $row['message'];
						$status = $row['status'];
						
						// Operator
						if ($status) {
							$htmlmessages .= '<div style="color:#666666">' . $username . ' says:</div><div style="margin-left:15px; color:#666666;">' . $message . '</div>'; 
							$textmessages .= $username . ' says:' . $eol . '	' . $message . $eol; 
						}
						// Guest
						if (!$status) {
							$htmlmessages .= '<div>' . $username . ' says:</div><div style="margin-left: 15px;">' . $message . '</div>'; 
							$textmessages .= $username . ' says:' . $eol . '	' . $message . $eol; 
						}
				
						$row = $SQL->selectnext();
					}
				}

				$htmlmessages = preg_replace("/(\r\n|\r|\n)/", '<br/>', $htmlmessages);	
				
				$html = <<<END
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<!--

div, p {
	font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #000000;
}

//-->
</style>
</head>

<body>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/en/images/ChatTranscript.gif" width="531" height="79" alt="Chat Transcript" /></p>
<p><strong>Chat Transcript:</strong></p>
<p>$htmlmessages</p>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/en/images/LogoSmall.png" width="217" height="52" alt="stardevelop.com" /></p>
</body>
</html>
END;
				if ($_SETTINGS['AUTOEMAILTRANSCRIPT'] != '') {
					$mail = new PHPMailer(true);
					try {
						$mail->CharSet = 'UTF-8';
						$mail->AddReplyTo($_SETTINGS['EMAIL'], $_SETTINGS['NAME']);
						$mail->AddAddress($_SETTINGS['AUTOEMAILTRANSCRIPT']);
						$mail->SetFrom($_SETTINGS['EMAIL']);
						$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['chattranscript'] . ' (' . $_LOCALE['autogenerated'] . ')';
						$mail->MsgHTML($html);
						$mail->Send();
						$result = true;
					} catch (phpmailerException $e) {
						trigger_error('Email Error: ' . $e->errorMessage(), E_USER_ERROR); 
						$result = false;
					} catch (Exception $e) {
						trigger_error('Email Error: ' . $e->getMessage(), E_USER_ERROR); 
						$result = false;
					}
				}
			}
		}
		
	}
	elseif ($_REQUEST['Action'] == 'Transfer' && $_REQUEST['ID'] != '0' && $_REQUEST['Transfer'] != '0') {
	
		$query = "UPDATE " . $table_prefix . "chats SET `datetime` = NOW(), `active`= '-2', `transfer` = '" . $_REQUEST['Transfer'] . "' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$SQL->updatequery($query);
		
	}
	elseif ($_REQUEST['Action'] == 'Block' && $_REQUEST['ID'] != '0') {
	
		// Block Chat
		$query = "UPDATE " . $table_prefix . "chats SET `active` = '-3' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$SQL->updatequery($query);
		
	}
	elseif ($_REQUEST['Action'] == 'Unblock' && $_REQUEST['ID'] != '0') {
	
		// Unblock Chat
		$query = "UPDATE " . $table_prefix . "chats SET `active` = '-1' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$SQL->updatequery($query);
		
	}
	elseif ($_REQUEST['Action'] == 'Hidden' || $_REQUEST['Action'] == 'Offline') {
	
		if ($_REQUEST['ID'] != '') {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '0' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		} else {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '0' WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		}
		$SQL->updatequery($query);
		
	}
	elseif ($_REQUEST['Action'] == 'Online') {
	
		if ($_REQUEST['ID'] != '') {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '1' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		} else {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '1' WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		}
		$SQL->updatequery($query);
		
	}
	elseif ($_REQUEST['Action'] == 'BRB') {
	
		if ($_REQUEST['ID'] != '') {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '2' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		} else {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '2' WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		}
		$SQL->updatequery($query);
	}
	elseif ($_REQUEST['Action'] == 'Away') {
	
		if ($_REQUEST['ID'] != '') {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '3' WHERE `id` = '" . $_REQUEST['ID'] . "'";
		} else {
			$query = "UPDATE " . $table_prefix . "users SET `refresh` = NOW(), `status` = '3' WHERE `id` = '" . $_OPERATOR['ID'] . "'";
		}
		$SQL->updatequery($query);
	}
	
	// Update Activity
	if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
	
		if ($_REQUEST['Action'] == 'Offline') {

			// Insert Sign Out Activity
			$query = "INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `type`, `status`) VALUES ('{$_OPERATOR['ID']}', '{$_OPERATOR['NAME']}', NOW(), 'signed out of Live Help', 2, 1)";
			$SQL->insertquery($query);

		} elseif ($_REQUEST['Action'] == 'Online' || $_REQUEST['Action'] == 'BRB' || $_REQUEST['Action'] == 'Away' || $_REQUEST['Action'] == 'Hidden') {
			
			switch ($_REQUEST['Action']) {
				case 'Hidden':
					$status = 'Hidden';
					$flag = 3;
					break;
				case 'BRB':
					$status = 'Be Right Back';
					$flag = 5;
					break;
				case 'Away':
					$status = 'Away';
					$flag = 6;
					break;
				default:
					$status = 'Online';
					$flag = 4;
					break;
			}
			
			if ($_REQUEST['ID'] != '') {
				// Select Operator Name
				$query_name = "SELECT `firstname`, `lastname` FROM  " . $table_prefix . "users " . $table_prefix . "users";
				$row = $SQL->selectquery($query_name);
				if (is_array($row)) {
					$name = $row['firstname'] . ' ' . $row['lastname'];
					
					// Insert Away Status Activity
					$query = "INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `type`, `status`) VALUES ('{$_OPERATOR['ID']}', '{$_OPERATOR['NAME']}', NOW(), 'changed the status of $name to $status', $flag, 1)";
					$SQL->insertquery($query);
				}
			} else {
			
				// Insert Status Activity
				$query = "INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `type`, `status`) VALUES ('{$_OPERATOR['ID']}', '{$_OPERATOR['NAME']}', NOW(), 'changed status to $status', $flag, 1)";
				$SQL->insertquery($query);
			}
		}
	}
	
	$lastcall = '0';
	$query = "SELECT MAX(`id`) AS `max` FROM " . $table_prefix . "callback LIMIT 1";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		if ($row['max'] != '') {
			$lastcall = $row['max'];
		}
	}
	
	$lastactivity = '0';
	if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
		$query = "SELECT MAX(`id`) AS `max` FROM " . $table_prefix . "activity WHERE `user` <> {$_OPERATOR['ID']} OR `status` = 0 LIMIT 1";
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			if ($row['max'] != '') {
				$lastactivity = $row['max'];
			}
		}
	}
	
	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
		
		if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
?>
<Users xmlns="urn:LiveHelp" LastCall="<?php echo($lastcall); ?>" LastActivity="<?php echo($lastactivity); ?>">
<?php
		} else {
?>
<Users xmlns="urn:LiveHelp" LastCall="<?php echo($lastcall); ?>">
<?php
		}
	} else {
		header('Content-type: application/json; charset=utf-8');

		$staff = array();
		$online = array();
		$pending = array();
		$transferred = array();

	}
	
	// Online Operators
	$query = "SELECT `id`, `username`, `status`, `device` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND (`status` = '1' OR `status` = '2' OR `status` = '3' OR (`device` <> '' AND `status` = '1')) ORDER BY `username`";
	$rows = $SQL->selectall($query);
	
	$total_users = count($rows);
	
	if (is_array($rows)) {
		if ($_REQUEST['Format'] == 'xml') {
?>
<Staff>
<?php
		}
	
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$id = $row['id'];
				$status = $row['status'];
				$username = $row['username'];
				$device = $row['device'];
				if (!empty($device)) { $status = '1'; }
				
				// Count the total NEW messages that have been sent to the current login
				$query = "SELECT max(`id`) FROM " . $table_prefix . "administration WHERE `username` = '$username' AND `user` = '" . $_OPERATOR['ID'] . "' AND (UNIX_TIMESTAMP(`datetime`) - UNIX_TIMESTAMP('" . $_OPERATOR['DATETIME'] . "')) > '0'";
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$messages = $row['max(`id`)'];
				}
				
				if ($_REQUEST['Format'] == 'xml') {
?>
<User ID="<?php echo($id); ?>" <?php if ($messages != '') { ?>Messages="<?php echo($messages); ?>" <?php } ?>Status="<?php echo($status); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
				} else {

					// Staff User JSON
					if ($messages != '') {
						$user = array('ID' => $id, 'Name' => $username, 'Messages' => $messages, 'Status' => $status);
					} else {
						$user = array('ID' => $id, 'Name' => $username, 'Status' => $status);
					}
					$staff[] = $user;
				}

			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
?>
</Staff>
<?php
		}

	}
	
	// Chatting Visitors
	$query = "SELECT chats.id, chats.request, chats.active, chats.username, chats.department, chats.server, chats.email, users.firstname, users.lastname FROM " . $table_prefix . "chats AS chats, " . $table_prefix . "users AS users WHERE chats.active = users.id AND chats.refresh > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND chats.active > '0' ORDER BY chats.username";
	$rows = $SQL->selectall($query);
	
	$total_users = count($rows);
	
	if (is_array($rows)) {
		if ($_REQUEST['Format'] == 'xml') {
?>
<Online>
<?php
		}
		
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$id = $row['id'];
				$username = $row['username'];
				$request = $row['request'];
				$active = $row['active'];
				
				$department = '';
				if (isset($row['department'])) {
					$department = $row['department'];
				}
				
				$server = '';
				if (isset($row['server'])) {
					$server = $row['server'];
				}
				
				$email = '';
				if (isset($row['email'])) {
					$email = $row['email'];
				}
				
				$question = '';
				if (isset($row['question'])) {
					$question = $row['question'];
				}
				
				$custom = '';
				$reference = '';
				
				// Integration
				$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = '%d'", $request);
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
				
				if ($_OPERATOR['PRIVILEGE'] <= 1 && $_OPERATOR['ID'] != $active) {
				
					$operator = '';
					if (isset($row['firstname']) && isset($row['lastname'])) {
						$operator = $row['firstname'] . ' ' . $row['lastname'];
					}
					
					if (isset($_REQUEST['Version'])) {
						if ($_REQUEST['Format'] == 'xml') {
?> 
<User ID="<?php echo($id); ?>" Active="<?php echo($active); ?>" Operator="<?php echo($operator); ?>" Visitor="<?php echo($request); ?>" Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
						} else {

							// Online User JSON
							$user = array('ID' => $id, 'Name' => $username, 'Active' => $active, 'Operator' => $operator, 'Visitor' => $request, 'Department' => $department, 'Server' => $server, 'Email' => $email, 'Question' => $question);
							$online[] = $user;
						}
					}
				}
				else if ($_OPERATOR['ID'] == $active) {
				
					// Count the Total Messages
					$query = "SELECT max(`id`) FROM " . $table_prefix . "messages WHERE `chat` = '$id' AND `status` <= '3' AND (UNIX_TIMESTAMP(`datetime`) - UNIX_TIMESTAMP('" . $_OPERATOR['DATETIME'] . "')) > '0'";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$messages = $row['max(`id`)'];
					}

					if ($_REQUEST['Format'] == 'xml') {
						if (empty($request)) {
?> 
<User ID="<?php echo($id); ?>" Active="<?php echo($active); ?>" <?php if ($messages != '') { ?> Messages="<?php echo($messages); ?>"<?php } ?> Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
						} else {
?> 
<User ID="<?php echo($id); ?>" Active="<?php echo($active); ?>" Visitor="<?php echo($request); ?>"<?php if ($messages != '') { ?> Messages="<?php echo($messages); ?>"<?php } ?> Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
						}
					} else {

						// Online User JSON
						$user = array('ID' => $id, 'Name' => $username, 'Active' => $active, 'Operator' => $operator, 'Visitor' => $request, 'Messages' => $messages, 'Department' => $department, 'Server' => $server, 'Email' => $email, 'Question' => $question);
						$online[] = $user;

					}
				
				}
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
?>
</Online>
<?php
		}
	}
		
	// Pending Visitors
	if ($_SETTINGS['DEPARTMENTS'] == true) {
		$sql = departmentsSQL($_OPERATOR['DEPARMENT']);
		$query = "SELECT DISTINCT `id`, `request`, `username`, `department`, `server`, `email` FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND `active` = '0' AND $sql ORDER BY `username`";
	}
	else {
		$query = "SELECT DISTINCT `id`, `request`, `username`, `server`, `email` FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND `active` = '0' ORDER BY `username`";
	}
	$rows = $SQL->selectall($query);
	
	$total_users = count($rows);
	
	if (is_array($rows)) {
		if ($_REQUEST['Format'] == 'xml') {
?>
<Pending>
<?php
		}
		
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$id = $row['id'];
				$username = $row['username'];
				$request = $row['request'];
				
				$department = '';
				if (isset($row['department'])) {
					$department = $row['department'];
				}
				
				$server = '';
				if (isset($row['server'])) {
					$server = $row['server'];
				}
				
				$email = '';
				if (isset($row['email'])) {
					$email = $row['email'];
				}
				
				$question = '';
				if (isset($row['question'])) {
					$question = $row['question'];
				}
				
				$custom = '';
				$reference = '';
				
				// Integration
				$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = '%d'", $request);
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
				
				if ($_REQUEST['Format'] == 'xml') {
					if (empty($request)) {
?>
<User ID="<?php echo($id); ?>" Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
					} else { 
?>
<User ID="<?php echo($id); ?>" Visitor="<?php echo($request); ?>" Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
					}
				} else {

					// Pending User JSON
					$user = array('ID' => $id, 'Name' => $username, 'Visitor' => $request, 'Department' => $department, 'Server' => $server, 'Email' => $email, 'Question' => $question);
					$pending[] = $user;
				}	
			}
		}
		if ($_REQUEST['Format'] == 'xml') {
?>
</Pending>
<?php
		}
	}
	
	// Transferred Visitors
	$query = "SELECT DISTINCT `id`, `request`, `username`, `department`, `server`, `email` FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND `active` = '-2' AND `transfer` = '" . $_OPERATOR['ID'] . "' ORDER BY `username`";
	$rows = $SQL->selectall($query);
	
	$total_users = count($rows);
	
	if (is_array($rows)) {
		if ($_REQUEST['Format'] == 'xml') {
?>
<Transferred>
<?php
		}
		
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$id = $row['id'];
				$request = $row['request'];
				$username = $row['username'];
				
				$department = '';
				if (isset($row['department'])) {
					$department = $row['department'];
				}
				
				$server = '';
				if (isset($row['server'])) {
					$server = $row['server'];
				}
				
				$email = '';
				if (isset($row['email'])) {
					$email = $row['email'];
				}
				
				$question = '';
				if (isset($row['question'])) {
					$question = $row['question'];
				}
				
				$custom = '';
				$reference = '';
				
				// Integration
				$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = '%d'", $request);
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
				
				if ($_REQUEST['Format'] == 'xml') {
?> 
<User ID="<?php echo($id); ?>" Visitor="<?php echo($request); ?>" Department="<?php echo(xmlattribinvalidchars($department)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>"><?php echo(xmlelementinvalidchars($username)); ?></User>
<?php
				} else {

					// Tranferrered User JSON
					$user = array('ID' => $id, 'Name' => $username, 'Visitor' => $request, 'Department' => $department, 'Server' => $server, 'Email' => $email, 'Question' => $question);
					$transferred[] = $user;
				}	
			}
		}

		if ($_REQUEST['Format'] == 'xml') {
?>
</Transferred>
<?php
		}
	}
			
	if ($_REQUEST['Format'] == 'xml') {
?>
</Users>
<?php
	} else {

		// Output JSON
		if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
			$users = array('LastCall' => $lastcall, 'LastActivity' => $lastactivity, 'Staff' => array('User' => $staff), 'Online' => array('User' => $online), 'Pending' => array('User' => $pending), 'Transferred' => array('User' => $transferred));
		} else {
			$users = array('LastCall' => $lastcall, 'Staff' => array('User' => $staff), 'Online' => array('User' => $online), 'Pending' => array('User' => $pending), 'Transferred' => array('User' => $transferred));
		}
		$json = array('Users' => $users);
		
		echo(json_encode($json));

	}
}

function Visitors() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $_PLUGINS;
	global $SQL;
	global $table_prefix;
	global $timezonehours;
	global $timezoneminutes;
	global $visitor_timeout;

	if (!isset($_REQUEST['Action'])){ $_REQUEST['Action'] = ''; }
	if (!isset($_REQUEST['Request'])){ $_REQUEST['Request'] = ''; }
	if (!isset($_REQUEST['Record'])){ $_REQUEST['Record'] = ''; }
	if (!isset($_REQUEST['Total'])){ $_REQUEST['Total'] = '6'; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	
	if ($_REQUEST['Action'] == 'Initiate' && $_OPERATOR['PRIVILEGE'] < 4) {
	
		if ($_REQUEST['Request'] != '') {
			// Update active field of user to the ID of the operator that initiated support
			$query = "UPDATE " . $table_prefix . "requests SET `initiate` = '" . $_OPERATOR['ID'] . "' WHERE `id` = '" . $_REQUEST['Request'] . "' AND `initiate` = 0";
			$SQL->updatequery($query);
		}
		else {
			// Initiate chat request with all visitors
			$query = "UPDATE " . $table_prefix . "requests SET `initiate` = '" . $_OPERATOR['ID'] . "' AND `initiate` = 0";
			$SQL->updatequery($query);
		}
	}
	elseif ($_REQUEST['Action'] == 'Remove' && $_OPERATOR['PRIVILEGE'] < 3) {
	
		if ($_REQUEST['Request'] != '') {
			// Update active field of user to the ID of the operator that initiated support
			$query = "UPDATE " . $table_prefix . "requests SET `status` = '1' WHERE `id` = '" . $_REQUEST['Request'] . "'";
			$SQL->updatequery($query);
		}
	}

	$query = "SELECT *, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`datetime`))) AS `sitetime`, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`))) AS `pagetime` FROM " . $table_prefix . "requests WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $visitor_timeout SECOND) AND `status` = '0' ORDER BY `id` ASC";
	$rows = $SQL->selectall($query);
	if (is_array($rows)) {
		$last = 0; $total= 0; $pageviews = 0;
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$last = $row['id'];
				$total += 1;
				$pageviews += substr_count($row['path'], '; ') + 1;
			}
		}

		if ($total > 0) {
			while ($total <= $_REQUEST['Record']) {
				$_REQUEST['Record'] = $_REQUEST['Record'] - $_REQUEST['Total'];
			}
		} else {
			$_REQUEST['Record'] = 0;
		}
		
		if ($_REQUEST['Format'] == 'xml') {
			header('Content-type: text/xml; charset=utf-8');
			echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Visitors xmlns="urn:LiveHelp" TotalVisitors="<?php echo($total); ?>" LastVisitor="<?php echo($last); ?>" PageViews="<?php echo($pageviews); ?>">
<?php
		} else {
			header('Content-type: application/json; charset=utf-8');
?>
{"Visitors": {
"TotalVisitors": <?php echo(json_encode($total)); ?>,
"LastVisitor": <?php echo(json_encode($last)); ?>,
"PageViews": <?php echo(json_encode($pageviews)); ?>,
<?php
		}
	
		$initiated_default_label = 'Live Help Request has not been Initiated';
		$initiated_sending_label = 'Sending the Initiate Live Help Request...';
		$initiated_waiting_label = 'Waiting on the Initiate Live Help Reply...';
		$initiated_accepted_label = 'Initiate Live Help Request was ACCEPTED';
		$initiated_declined_label = 'Initiate Live Help Request was DECLINED';
		$initiated_chatting_label = 'Currently chatting to Operator';
		$initiated_chatted_label = 'Already chatted to an Operator';
		$initiated_pending_label = 'Currently Pending for Live Help';
		
		$rating_label = 'Rating';			
		$unavailable_label = 'Unavailable';
		
		$count = count($rows);
		$total = $_REQUEST['Record'] + $_REQUEST['Total'];
		if ($count < $total) { $total_visitors = $count; } else { $total_visitors = $total; }
		
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				if ($key >= $_REQUEST['Record'] && $key < $_REQUEST['Record'] + $_REQUEST['Total']) {
					$current_request_id = $row['id'];
					$current_request_ipaddress = $row['ipaddress'];
					$current_request_user_agent = $row['useragent'];
					$current_request_resolution = $row['resolution'];
					$current_request_city = (isset($row['city'])) ? $row['city'] : '';
					$current_request_state = (isset($row['state'])) ? $row['state'] : '';
					$current_request_country = $row['country'];
					$current_request_current_page = $row['url'];
					$current_request_current_page_title = $row['title'];
					$current_request_referrer = $row['referrer'];
					$current_request_pagetime = $row['pagetime'];
					$current_request_page_path = $row['path'];
					$current_request_sitetime = $row['sitetime'];
					$current_request_initiate = $row['initiate'];

					$paths = explode('; ', $current_request_page_path);
					$total_pages = count($paths);
					
					// Last 20 Page Paths
					$last_paths = array_slice($paths, $total_pages - 20);
					$current_request_page_path = implode('; ', $last_paths);
					
					// Limit Page History
					if (strlen($current_request_page_path) > 500) {
						$current_request_page_path = substr($current_request_page_path, 0, 500);
					}
					
					// Operator Name
					$query = "SELECT chats.id, chats.username, `firstname`, `lastname`, chats.department, `rating`, `active` FROM " . $table_prefix . "chats AS chats, " . $table_prefix . "users AS users WHERE `active` = users.id AND `request` = '$current_request_id' LIMIT 1";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
					
						$current_session_id = $row['id'];
						$current_session_username = $row['username'];
						$current_session_firstname = $row['firstname'];
						$current_session_lastname = $row['lastname'];
						$current_session_department = $row['department'];
						$current_session_rating = $row['rating'];
						$current_session_active = $row['active'];
						
						if ($current_session_active == '-1' || $current_session_active == '-3') {
						
							// Display the rating of the ended chat request
							if ($current_session_rating > 0) {
								$current_request_initiate_status = $initiated_chatted_label . ' - ' . $rating_label . ' (' . $current_session_rating . '/5)';
							}
							else {
								$current_request_initiate_status = $initiated_chatted_label;
							}
							
							// Initiate Chat Status
							switch ($current_request_initiate) {
								case 0: // Not Initiated
									break;
								case -1: // Waiting
									$current_request_initiate_status = $initiated_waiting_label;
									break;
								case -2: // Accepted
									$current_request_initiate_status = $initiated_accepted_label;
									break;
								case -3: // Declined
									$current_request_initiate_status = $initiated_declined_label;
									break;
								case -4: // Chatting
									break;
								default: // Sending
									$current_request_initiate_status = $initiated_sending_label;
									break;
							}
						
						}
						else {
							if ($current_session_active > 0) {
								if ($current_session_firstname != '' && $current_session_lastname != '') {
									$current_request_initiate_status = $initiated_chatting_label . ' (' . $current_session_firstname . ' ' . $current_session_lastname . ')';
								}
								else {
									$current_request_initiate_status = $initiated_chatting_label . ' (' . $unavailable_label . ')';
								}
							}
							else {
								if ($current_session_department != '') {
									$current_request_initiate_status = $initiated_pending_label . ' (' . $current_session_department . ')';
								}
								else {
									$current_request_initiate_status = $initiated_pending_label;
								}
							}
						}
					}
					else {
					
						$query = "SELECT `id`, `username`, `active` FROM " . $table_prefix . "chats WHERE `active` <> 0 AND `request` = '$current_request_id' LIMIT 1";
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$current_session_id = $row['id'];
							$current_session_username = $row['username'];
							$current_session_active = $row['active'];
						} else {
							$current_session_id = 0;
							$current_session_username = '';
							$current_session_active = '';
						}
						
						// Initiate Chat Status
						switch($current_request_initiate) {
							case 0: // Default Status
								$current_request_initiate_status = $initiated_default_label;
								break;
							case -1: // Waiting
								$current_request_initiate_status = $initiated_waiting_label;
								break;
							case -2: // Accepted
								$current_request_initiate_status = $initiated_accepted_label;
								break;
							case -3: // Declined
								$current_request_initiate_status = $initiated_declined_label;
								break;
							default: // Sending
								$current_request_initiate_status = $initiated_sending_label;
								break;
						}
					}
					
					if ($current_request_current_page == '') {
						$current_request_current_page = $unavailable_label;
					}
					
					// Set the referrer as approriate
					if ($current_request_referrer != '' && $current_request_referrer != 'false') {
						$current_request_referrer_result = urldecode($current_request_referrer);
					}
					elseif ($current_request_referrer == false) {
						$current_request_referrer_result = 'Direct Visit / Bookmark';
					}
					else {
						$current_request_referrer_result = $unavailable_label;
					}
					
					if ($_SETTINGS['LIMITHISTORY'] > 0) {
						$history = explode(';', $current_request_page_path);
						$path = array();
						if (count($history) > $_SETTINGS['LIMITHISTORY']) {
							for($i = 0; $i < $_SETTINGS['LIMITHISTORY']; $i++) {
									array_unshift($path, array_pop($history));
							}
							$current_request_page_path = implode('; ', $path);
						}
					}
					
					if ($_REQUEST['Format'] == 'xml') {
						
						$query = "SELECT `custom`, `name`, `reference` FROM " . $table_prefix . "custom WHERE `request` = '$current_request_id' LIMIT 1";
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$current_request_custom = $row['custom'];
							$current_request_username = $row['name'];
							$current_request_reference = $row['reference'];
?>
<Visitor ID="<?php echo($current_request_id); ?>" Session="<?php echo($current_session_id); ?>" Active="<?php echo($current_session_active); ?>" Username="<?php echo(xmlattribinvalidchars($current_request_username)); ?>" Custom="<?php echo(xmlattribinvalidchars($current_request_custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($current_request_reference)); ?>">
<?php
						}
						else {
?>
<Visitor ID="<?php echo($current_request_id); ?>" Session="<?php echo($current_session_id); ?>" Active="<?php echo($current_session_active); ?>" Username="<?php echo(xmlattribinvalidchars($current_session_username)); ?>">
<?php
						}
?>
<Hostname><?php echo(xmlelementinvalidchars($current_request_ipaddress)); ?></Hostname>
<Country City="<?php echo(xmlattribinvalidchars($current_request_city)); ?>" State="<?php echo(xmlattribinvalidchars($current_request_state)); ?>"><?php echo($current_request_country); ?></Country>
<UserAgent><?php echo(xmlelementinvalidchars($current_request_user_agent)); ?></UserAgent>
<Resolution><?php echo(xmlelementinvalidchars($current_request_resolution)); ?></Resolution>
<CurrentPage><?php echo(xmlelementinvalidchars($current_request_current_page)); ?></CurrentPage>
<CurrentPageTitle><?php echo(xmlelementinvalidchars($current_request_current_page_title)); ?></CurrentPageTitle>
<Referrer><?php echo(xmlelementinvalidchars($current_request_referrer_result)); ?></Referrer>
<TimeOnPage><?php echo($current_request_pagetime); ?></TimeOnPage>
<ChatStatus><?php echo(xmlelementinvalidchars($current_request_initiate_status)); ?></ChatStatus>
<PagePath Total="<?php echo($total_pages); ?>"><?php echo(xmlelementinvalidchars($current_request_page_path)); ?></PagePath>
<TimeOnSite><?php echo($current_request_sitetime); ?></TimeOnSite>
</Visitor>
<?php
					} else {
?>
<?php if ($key == 0) { echo('"Visitor": ['); } ?>
{
"ID": <?php echo(json_encode($current_request_id)); ?>,
"Active": <?php echo(json_encode($current_session_active)); ?>,
"Session": <?php echo(json_encode($current_session_id)); ?>,
"Username": <?php echo(json_encode($current_session_username)); ?>,
"Hostname": <?php echo(json_encode($current_request_ipaddress)); ?>,
"City": <?php echo(json_encode($current_request_city)); ?>,
"State": <?php echo(json_encode($current_request_state)); ?>,
"Country": <?php echo(json_encode($current_request_country)); ?>,
"UserAgent": <?php echo(json_encode($current_request_user_agent)); ?>,
"Resolution": <?php echo(json_encode($current_request_resolution)); ?>,
"CurrentPage": <?php echo(json_encode($current_request_current_page)); ?>,
"CurrentPageTitle": <?php echo(json_encode($current_request_current_page_title)); ?>,
"Referrer": <?php echo(json_encode($current_request_referrer_result)); ?>,
"TimeOnPage": <?php echo(json_encode($current_request_pagetime)); ?>,
"ChatStatus": <?php echo(json_encode($current_request_initiate_status)); ?>,
"PagePath": <?php echo(json_encode($current_request_page_path)); ?>,
"TimeOnSite": <?php echo(json_encode($current_request_sitetime)); ?>
}<?php if ($key + 1 < $total_visitors) { echo(','); } else { echo(']'); } ?>
<?php
					}
				}
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
?>
</Visitors>
<?php
		} else {
?>
}}
<?php
		}
	}
	else {
		if ($_REQUEST['Format'] == 'xml') {
			header('Content-type: text/xml; charset=utf-8');
			echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Visitors xmlns="urn:LiveHelp"/>
<?php
		} else {
			header('Content-type: application/json; charset=utf-8');
?>
{"Visitors": null}
<?php
		}
	}
}

function Visitor() {

	global $_OPERATOR;
	global $SQL;
	global $_PLUGINS;
	global $table_prefix;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	
	$query = "SELECT *, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`datetime`))) AS `sitetime`, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`))) AS `pagetime` FROM " . $table_prefix . "requests WHERE `id` = '" . $_REQUEST['ID'] . "' LIMIT 1";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		
		$initiated_default_label = 'Live Help Request has not been Initiated';
		$initiated_sending_label = 'Sending the Initiate Live Help Request...';
		$initiated_waiting_label = 'Waiting on the Initiate Live Help Reply...';
		$initiated_accepted_label = 'Initiate Live Help Request was ACCEPTED';
		$initiated_declined_label = 'Initiate Live Help Request was DECLINED';
		$initiated_chatting_label = 'Currently chatting to Operator';
		$initiated_chatted_label = 'Already chatted to an Operator';
		$initiated_pending_label = 'Currently Pending for Live Help';
		
		$rating_label = 'Rating';			
		$unavailable_label = 'Unavailable';
		
		if (is_array($row)) {
			$id = $row['id'];
			$ipaddress = $row['ipaddress'];
			$useragent = $row['useragent'];
			$resolution = $row['resolution'];
			$country = $row['country'];
			$page = $row['url'];
			$pagetitle = $row['title'];
			$referrer = $row['referrer'];
			$pagetime = $row['pagetime'];
			$pagepath = $row['path'];
			$sitetime = $row['sitetime'];
			$initiate = $row['initiate'];
			
			// Operator Name
			$query = sprintf("SELECT `id`, `username`, `department`, `rating`, `active` FROM `" . $table_prefix . "chats` WHERE `request` = '%d' LIMIT 1", $id);
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
			
				$session = $row['id'];
				$username = $row['username'];
				$department = $row['department'];
				$rating = $row['rating'];
				$active = $row['active'];
				
				if ($active == '-1' || $active == '-3') {
				
					// Display the rating of the ended chat request
					if ($rating > 0) {
						$initiatestatus = $initiated_chatted_label . ' - ' . $rating_label . ' (' . $rating . '/5)';
					} else {
						$initiatestatus = $initiated_chatted_label;
					}
					
					// Initiate Chat Status
					switch ($initiate) {
						case 0: // Not Initiated
							break;
						case -1: // Waiting
							$initiatestatus = $initiated_waiting_label;
							break;
						case -2: // Accepted
							$initiatestatus = $initiated_accepted_label;
							break;
						case -3: // Declined
							$initiatestatus = $initiated_declined_label;
							break;
						case -4: // Chatting
							break;
						default: // Sending
							$initiatestatus = $initiated_sending_label;
							break;
					}
				
				}
				else {
				
					if ($active > 0) {
					
						$firstname = '';
						$lastname = '';
					
						$query = sprintf("SELECT `firstname`, `lastname` FROM " . $table_prefix . "users WHERE `id` = '%d' LIMIT 1", $active);
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$firstname = $row['firstname'];
							$lastname = $row['lastname'];
						}
					
						if ($firstname != '' && $lastname != '') {
							$initiatestatus = $initiated_chatting_label . ' (' . $firstname . ' ' . $lastname . ')';
						}
						else {
							$initiatestatus = $initiated_chatting_label . ' (' . $unavailable_label . ')';
						}
					}
					else {
						if ($department != '') {
							$initiatestatus = $initiated_pending_label . ' (' . $department . ')';
						}
						else {
							$initiatestatus = $initiated_pending_label;
						}
					}
				}
			}
			else {
				$session = 0;
				$username = '';
				$active = '';
				
				// Initiate Chat Status
				switch($initiate) {
					case 0: // Default Status
						$initiatestatus = $initiated_default_label;
						break;
					case -1: // Waiting
						$initiatestatus = $initiated_waiting_label;
						break;
					case -2: // Accepted
						$initiatestatus = $initiated_accepted_label;
						break;
					case -3: // Declined
						$initiatestatus = $initiated_declined_label;
						break;
					default: // Sending
						$initiatestatus = $initiated_sending_label;
						break;
				}
			}
			
			if ($page == '') {
				$page = $unavailable_label;
			}
			
			// Set the referrer as approriate
			if ($referrer != '' && $referrer != 'false') {
				$referrer = urldecode($referrer);
			}
			elseif ($referrer == false) {
				$referrer = 'Direct Visit / Bookmark';
			}
			else {
				$referrer = $unavailable_label;
			}
			
			header('Content-type: text/xml; charset=utf-8');
			echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
			
			// WHMCS Plugin
			if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
			
				$query = "SELECT `custom`, `name`, `reference` FROM " . $table_prefix . "custom WHERE `request` = '$id' LIMIT 1";
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$custom = $row['custom'];
					$username = $row['name'];
					$reference = $row['reference'];
?>
<Visitor xmlns="urn:LiveHelp" ID="<?php echo($id); ?>" Session="<?php echo($session); ?>" Active="<?php echo($active); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>">
<?php
				}
				else {
?>
<Visitor xmlns="urn:LiveHelp" ID="<?php echo($id); ?>" Session="<?php echo($session); ?>" Active="<?php echo($active); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>">
<?php
				}
			}
			else {
?>
<Visitor xmlns="urn:LiveHelp" ID="<?php echo($id); ?>" Session="<?php echo($session); ?>" Active="<?php echo($active); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>">
<?php
			}
?>
<Hostname><?php echo(xmlelementinvalidchars($ipaddress)); ?></Hostname>
<Country><?php echo($country); ?></Country>
<UserAgent><?php echo(xmlelementinvalidchars($useragent)); ?></UserAgent>
<Resolution><?php echo(xmlelementinvalidchars($resolution)); ?></Resolution>
<CurrentPage><?php echo(xmlelementinvalidchars($page)); ?></CurrentPage>
<CurrentPageTitle><?php echo(xmlelementinvalidchars($pagetitle)); ?></CurrentPageTitle>
<Referrer><?php echo(xmlelementinvalidchars($referrer)); ?></Referrer>
<TimeOnPage><?php echo($pagetime); ?></TimeOnPage>
<ChatStatus><?php echo(xmlelementinvalidchars($initiatestatus)); ?></ChatStatus>
<PagePath><?php echo(xmlelementinvalidchars($pagepath)); ?></PagePath>
<TimeOnSite><?php echo($sitetime); ?></TimeOnSite>
</Visitor>
<?php
		}
	}
	else {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Visitor xmlns="urn:LiveHelp"/>
<?php
	}
}

function Version() {

	global $_OPERATOR;
	global $SQL;
	global $table_prefix;
	global $web_application_version;
	global $windows_application_version;

	if (!isset($_REQUEST['Windows'])){ $_REQUEST['Windows'] = ''; }
	if ($_REQUEST['Windows'] == $windows_application_version) { $result = 'true'; } else { $result = 'false'; }
	
	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Version xmlns="urn:LiveHelp" Web="<?php echo($web_application_version); ?>" Windows="<?php echo($result); ?>"/>
<?php
	} else {

		if ($result && strtolower($result) !== "false") {
			$result = true;
		} else {
			$result = false;
		}
		
		header('Content-type: application/json; charset=utf-8');
		$json = array('Web' => floatval($web_application_version), 'Windows' => $result);
		echo(json_encode($json));
	}

	exit();
}

function Settings() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $_PLUGINS;
	global $SQL;
	global $table_prefix;
	global $head;
	global $body;
	global $image;
	
	if (!isset($_REQUEST['Cached'])){ $_REQUEST['Cached'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }

	// Save Settings Full Administrator / Department Administrator
	if ($_OPERATOR['PRIVILEGE'] < 2) {
	
		// Update Settings
		$updated = false;
		foreach ($_REQUEST as $key => $value) {
			// Valid Setting
			if (array_key_exists(strtoupper($key), $_SETTINGS)) { 
				$query = "UPDATE " . $table_prefix . "settings SET `value` = '$value' WHERE `name` = '$key'";
				$SQL->updatequery($query);
				$updated = true;
			}
		}
		
		// Last Updated
		if ($updated == true) {
			$query = "UPDATE " . $table_prefix . "settings SET `value` = NOW() WHERE `name` = 'LastUpdated'";
			$SQL->updatequery($query);
		}
		
		$query = "SELECT `name`, `value` FROM " . $table_prefix . "settings";
		$row = $SQL->selectquery($query);
		$_SETTINGS = array();
		while ($row) {
			if (is_array($row)) {
				$_SETTINGS[strtoupper($row['name'])] = $row['value'];
			}
			$row = $SQL->selectnext();
		}
		
		// Default Settings
		if (!isset($_SETTINGS['CHATWINDOWWIDTH'])) { $_SETTINGS['CHATWINDOWWIDTH'] = 625; }
		if (!isset($_SETTINGS['CHATWINDOWHEIGHT'])) { $_SETTINGS['CHATWINDOWHEIGHT'] = 435; }
		if (!isset($_SETTINGS['TEMPLATE'])) { $_SETTINGS['TEMPLATE'] = 'default'; }
		if (!isset($_SETTINGS['LOCALE'])) { $_SETTINGS['LOCALE'] = 'en'; }
		
	}
	
	// Time Zone Setting
	$_SETTINGS['DEFAULTTIMEZONE'] = date('Z');
	
	// Language Packs
	$languages = file('../locale/i18n.txt');
	$available_languages = '';
	foreach ($languages as $key => $line) {
		$i18n = explode(',', $line);
		$code = trim($i18n[0]);
		$available = file_exists('../locale/' . $code . '/guest.php');
		if ($available) {
			if ($available_languages == '') {
				$available_languages .= $code;
			}
			else {
				$available_languages .=  ', ' . $code;
			}
		}
	}

	// Templates	
	$templates = array();
	$templatedir = '../templates/';

	if (is_dir($templatedir)) {
		if ($dh = opendir($templatedir)) {
			while (($file = readdir($dh)) !== false) {
				if (is_dir($templatedir . $file) && $file != '.' && $file != '..') {
					
					$name = str_replace('whmcs', 'WHMCS', $file);
					$name = ucwords(str_replace('-', ' ', $name));
					
					$template = array('name' => $name, 'value' => $file);
					$templates[] = $template;
				}
			}
			closedir($dh);
		}
	}
	
	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Settings xmlns="urn:LiveHelp">
<Domain><?php echo(xmlelementinvalidchars($_SETTINGS['DOMAIN'])); ?></Domain>
<SiteAddress><?php echo(xmlelementinvalidchars($_SETTINGS['URL'])); ?></SiteAddress>
<Email><?php echo(xmlelementinvalidchars($_SETTINGS['EMAIL'])); ?></Email>
<Name><?php echo(xmlelementinvalidchars($_SETTINGS['NAME'])); ?></Name>
<Logo><?php echo(xmlelementinvalidchars($_SETTINGS['LOGO'])); ?></Logo>
<WelcomeMessage><?php echo(xmlelementinvalidchars($_SETTINGS['INTRODUCTION'])); ?></WelcomeMessage>
<?php 
	if (isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 3.5) { 
?>
<Smilies Enabled="<?php echo($_SETTINGS['SMILIES']); ?>"/>
<?php
	} else {
		if (!isset($_SETTINGS['GUESTSMILIES'])) { $_SETTINGS['GUESTSMILIES'] = '-1'; }
		if (!isset($_SETTINGS['OPERATORSMILIES'])) { $_SETTINGS['OPERATORSMILIES'] = '-1'; }
?>
<Smilies Guest="<?php echo($_SETTINGS['GUESTSMILIES']); ?>" Operator="<?php echo($_SETTINGS['OPERATORSMILIES']); ?>"/>
<?php
	}
?>
<Font Size="<?php echo(xmlattribinvalidchars($_SETTINGS['FONTSIZE'])); ?>" Color="<?php echo(xmlattribinvalidchars($_SETTINGS['FONTCOLOR'])); ?>" LinkColor="<?php echo(xmlattribinvalidchars($_SETTINGS['LINKCOLOR'])); ?>"><?php echo(xmlattribinvalidchars($_SETTINGS['FONT'])); ?></Font>
<ChatFont Size="<?php echo(xmlattribinvalidchars($_SETTINGS['CHATFONTSIZE'])); ?>" SentColor="<?php echo(xmlattribinvalidchars($_SETTINGS['SENTFONTCOLOR'])); ?>" ReceivedColor="<?php echo(xmlattribinvalidchars($_SETTINGS['RECEIVEDFONTCOLOR'])); ?>"><?php echo(xmlelementinvalidchars($_SETTINGS['CHATFONT'])); ?></ChatFont>
<BackgroundColor><?php echo(xmlelementinvalidchars($_SETTINGS['BACKGROUNDCOLOR'])); ?></BackgroundColor>
<OnlineLogo><?php echo(xmlelementinvalidchars($_SETTINGS['ONLINELOGO'])); ?></OnlineLogo>
<OfflineLogo><?php echo(xmlelementinvalidchars($_SETTINGS['OFFLINELOGO'])); ?></OfflineLogo>
<OfflineEmailLogo><?php echo(xmlelementinvalidchars($_SETTINGS['OFFLINEEMAILLOGO'])); ?></OfflineEmailLogo>
<BeRightBackLogo><?php echo(xmlelementinvalidchars($_SETTINGS['BERIGHTBACKLOGO'])); ?></BeRightBackLogo>
<AwayLogo><?php echo(xmlelementinvalidchars($_SETTINGS['AWAYLOGO'])); ?></AwayLogo>
<LoginDetails Enabled="<?php echo($_SETTINGS['LOGINDETAILS']); ?>" Required="<?php echo(xmlattribinvalidchars($_SETTINGS['REQUIREGUESTDETAILS'])); ?>" Email="<?php echo($_SETTINGS['LOGINEMAIL']); ?>" Question="<?php echo($_SETTINGS['LOGINQUESTION']); ?>"/>
<OfflineEmail Enabled="<?php echo($_SETTINGS['OFFLINEEMAIL']); ?>" Redirect="<?php echo(xmlattribinvalidchars($_SETTINGS['OFFLINEEMAILREDIRECT'])); ?>"><?php echo(xmlelementinvalidchars($_SETTINGS['OFFLINEEMAIL'])); ?></OfflineEmail>
<SecurityCode Enabled="<?php echo($_SETTINGS['SECURITYCODE']); ?>"/>
<Departments Enabled="<?php echo($_SETTINGS['DEPARTMENTS']); ?>"/>
<VisitorTracking Enabled="<?php echo($_SETTINGS['VISITORTRACKING']); ?>"/>
<Timezone Server="<?php echo($_SETTINGS['DEFAULTTIMEZONE']); ?>"><?php echo(xmlelementinvalidchars($_SETTINGS['TIMEZONE'])); ?></Timezone>
<Language Available="<?php echo(xmlattribinvalidchars($available_languages)); ?>"><?php echo(xmlelementinvalidchars($_SETTINGS['LOCALE'])); ?></Language>
<InitiateChat Vertical="<?php echo(xmlattribinvalidchars($_SETTINGS['INITIATECHATVERTICAL'])); ?>" Horizontal="<?php echo(xmlattribinvalidchars($_SETTINGS['INITIATECHATHORIZONTAL'])); ?>" Auto="<?php echo($_SETTINGS['INITIATECHATAUTO']); ?>"/>
<ChatUsername Enabled="<?php echo($_SETTINGS['CHATUSERNAME']); ?>"/>
<Campaign Link="<?php echo(xmlattribinvalidchars($_SETTINGS['CAMPAIGNLINK'])); ?>"><?php echo(xmlelementinvalidchars($_SETTINGS['CAMPAIGNIMAGE'])); ?></Campaign>
<IP2Country Enabled="<?php echo($_SETTINGS['IP2COUNTRY']); ?>"/>
<P3P><?php echo(xmlelementinvalidchars($_SETTINGS['P3P'])); ?></P3P>
<ChatWindowSize Width="<?php echo($_SETTINGS['CHATWINDOWWIDTH']); ?>" Height="<?php echo($_SETTINGS['CHATWINDOWHEIGHT']); ?>"/>
<Code>
<Head><![CDATA[<?php echo($head); ?>]]></Head>
<Body><![CDATA[<?php echo($body); ?>]]></Body>
<Image><![CDATA[<?php echo($image); ?>]]></Image>
</Code>
<?php
	if (isset($_PLUGINS)) {
?>
<Plugins>
<?php
		// Check if WHMCS Plugin enabled
		if ($_PLUGINS['WHMCS'] == true) {
?>
<Plugin ID="WHMCS">
<?php
		$query = "SELECT `value` FROM `tblconfiguration` WHERE `setting` = 'SystemSSLURL' LIMIT 1";
		$row = $SQL->selectquery($query);
		$address = $row['value'];
		if (empty($address)) {
			$query = "SELECT `value` FROM `tblconfiguration` WHERE `setting` = 'SystemURL' LIMIT 1";
			$row = $SQL->selectquery($query);
			$address = $row['value'];
		}
		
		if (substr($address, -1) != '/') {
			$address = $address . '/';
		}
		
		$customadminpath = '';
		require('../../../configuration.php');
		
		if (!$customadminpath) { $customadminpath = 'admin'; }
		$address .= $customadminpath . '/';
	
?>
<QuickLinks Address="<?php echo($address); ?>">
<Link Name="Summary" Image="card-address">clientssummary.php?userid={0}</Link>
<Link Name="Orders" Image="shopping-basket">orders.php?client={0}</Link>
<Link Name="Products / Services" Image="box">clientshosting.php?userid={0}</Link>
<Link Name="Domains" Image="globe-medium-green">clientsdomains.php?userid={0}</Link>
<Link Name="Invoices" Image="document-invoice">clientsinvoices.php?userid={0}</Link>
<Link Name="Add Order" Image="shopping-basket--plus">ordersadd.php?userid={0}</Link>
<Link Name="Create Invoice" Image="document--plus">invoices.php?action=createinvoice&amp;userid={0}</Link>
<Link Name="Quotes" Image="documents-text">clientsquotes.php?userid={0}</Link>
<Link Name="Tickets" Image="ticket">supporttickets.php?view=any&amp;client={0}</Link>
<Link Name="Emails" Image="mail-open-document">clientsemails.php?userid={0}</Link>
</QuickLinks>
</Plugin>
<?php
		}
?>
</Plugins>
<?php
	}

	if (is_array($templates)) {
?>
<Templates Current="<?php echo($_SETTINGS['TEMPLATE']); ?>">
<?php
		foreach ($templates as $key => $template) {
			$name = $template['name'];
			$value = $template['value'];
?>
<Template Name="<?php echo(xmlattribinvalidchars($name)); ?>" Value="<?php echo(xmlattribinvalidchars($value)); ?>" />
<?php
		}
?>
</Templates>
<?php
	}
?>
</Settings>
<?php
	} else {
		
		if ($_REQUEST['Cached'] != '') { 
			$updated = strtotime($_SETTINGS['LASTUPDATED']);
			$cached = strtotime($_REQUEST['Cached']);
			if ($updated - $cached <= 0) {
				if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 304 Not Modified'); } else { header('Status: 304 Not Modified'); }
				exit();
			}
		}
		
		header('Content-type: application/json; charset=utf-8');
?>
{"Settings": {
"Domain": <?php echo(json_encode($_SETTINGS['DOMAIN'])); ?>,
"SiteAddress": <?php echo(json_encode($_SETTINGS['URL'])); ?>,
"Email": <?php echo(json_encode($_SETTINGS['EMAIL'])); ?>,
"Name": <?php echo(json_encode($_SETTINGS['NAME'])); ?>,
"Logo": <?php echo(json_encode($_SETTINGS['LOGO'])); ?>,
"WelcomeMessage": <?php echo(json_encode($_SETTINGS['INTRODUCTION'])); ?>,
"Smilies": <?php echo(json_encode((int)$_SETTINGS['SMILIES'])); ?>,
"Font": { "Type": <?php echo(json_encode($_SETTINGS['FONT'])); ?>, "Size": <?php echo(json_encode($_SETTINGS['FONTSIZE'])); ?>, "Color": <?php echo(json_encode($_SETTINGS['FONTCOLOR'])); ?>, "LinkColor": <?php echo(json_encode($_SETTINGS['LINKCOLOR'])); ?> },
"ChatFont": { "Type": <?php echo(json_encode($_SETTINGS['CHATFONT'])); ?>, "Size": <?php echo(json_encode($_SETTINGS['CHATFONTSIZE'])); ?>, "SentColor": <?php echo(json_encode($_SETTINGS['SENTFONTCOLOR'])); ?>, "ReceivedColor": <?php echo(json_encode($_SETTINGS['RECEIVEDFONTCOLOR'])); ?> },
"BackgroundColor": <?php echo(json_encode($_SETTINGS['BACKGROUNDCOLOR'])); ?>,
"OnlineLogo": <?php echo(json_encode($_SETTINGS['ONLINELOGO'])); ?>,
"OfflineLogo": <?php echo(json_encode($_SETTINGS['OFFLINELOGO'])); ?>,
"OfflineEmailLogo": <?php echo(json_encode($_SETTINGS['OFFLINEEMAILLOGO'])); ?>,
"BeRightBackLogo": <?php echo(json_encode($_SETTINGS['BERIGHTBACKLOGO'])); ?>,
"AwayLogo": <?php echo(json_encode($_SETTINGS['AWAYLOGO'])); ?>,
"LoginDetails": { "Enabled": <?php echo(json_encode((int)$_SETTINGS['LOGINDETAILS'])); ?>, "Required": <?php echo(json_encode((int)$_SETTINGS['REQUIREGUESTDETAILS'])); ?>, "Email": <?php echo(json_encode((int)$_SETTINGS['LOGINEMAIL'])); ?>, "Question": <?php echo(json_encode((int)$_SETTINGS['LOGINQUESTION'])); ?> },
"OfflineEmail": { "Enabled": <?php echo(json_encode((int)$_SETTINGS['OFFLINEEMAIL'])); ?>, "Redirect": <?php echo(json_encode($_SETTINGS['OFFLINEEMAILREDIRECT'])); ?>, "Email": <?php echo(json_encode((int)$_SETTINGS['OFFLINEEMAIL'])); ?> },
"SecurityCode": <?php echo(json_encode((int)$_SETTINGS['SECURITYCODE'])); ?>,
"Departments": <?php echo(json_encode((int)$_SETTINGS['DEPARTMENTS'])); ?>,
"VisitorTracking": <?php echo(json_encode((int)$_SETTINGS['VISITORTRACKING'])); ?>,
"Timezone": { "Offset": <?php echo(json_encode($_SETTINGS['DEFAULTTIMEZONE'])); ?>, "Server": <?php echo(json_encode($_SETTINGS['TIMEZONE'])); ?> },
"Language": { "Available": <?php echo(json_encode($available_languages)); ?>, "Locale": <?php echo(json_encode($_SETTINGS['LOCALE'])); ?> },
"InitiateChat": { "Vertical": <?php echo(json_encode($_SETTINGS['INITIATECHATVERTICAL'])); ?>, "Horizontal": <?php echo(json_encode($_SETTINGS['INITIATECHATHORIZONTAL'])); ?>, "Auto": <?php echo(json_encode($_SETTINGS['INITIATECHATAUTO'])); ?> },
"ChatUsername": <?php echo(json_encode((int)$_SETTINGS['CHATUSERNAME'])); ?>,
"Campaign": { "Link": <?php echo(json_encode($_SETTINGS['CAMPAIGNLINK'])); ?>, "Image": <?php echo(json_encode($_SETTINGS['CAMPAIGNIMAGE'])); ?> },
"IP2Country": <?php echo(json_encode((int)$_SETTINGS['IP2COUNTRY'])); ?>,
"P3P": <?php echo(json_encode($_SETTINGS['P3P'])); ?>,
"ChatWindowSize": { "Width": <?php echo(json_encode((int)$_SETTINGS['CHATWINDOWWIDTH'])); ?>, "Height": <?php echo(json_encode((int)$_SETTINGS['CHATWINDOWHEIGHT'])); ?> },
"LastUpdated": <?php echo(json_encode($_SETTINGS['LASTUPDATED'])); ?>,
"Code": { "Head": <?php echo(json_encode($head)); ?>, "Body": <?php echo(json_encode($body)); ?>, "Image": <?php echo(json_encode($image)); ?> },
"Templates": <?php echo(json_encode($templates)); ?>
} }
<?php
	}

}

function InitaliseChat() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Message'])){ $_REQUEST['Message'] = ''; }

	$query = "SELECT `email`, `server`, `department`, `typing`, `active` FROM " . $table_prefix . "chats WHERE `id` = '" . $_REQUEST['ID'] . "'";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$email = $row['email'];
		$question = '';
		$server = $row['server'];
		$department = $row['department'];
		$typing = $row['typing'];
		$active = $row['active'];
	}

	$query = "SELECT `id`, `chat`, `username`, `message`, `align`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '" . $_REQUEST['ID'] . "' AND `status` <= '3' AND `id` > '" . $_REQUEST['Message'] . "' ORDER BY `datetime`";
	$rows = $SQL->selectall($query);
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$message = $row['id']; 
			}
		}
	}
	else {
		$message = '';
	}
	
	header('Content-type: text/xml; charset=utf-8');
	echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Messages xmlns="urn:LiveHelp" ID="<?php echo($_REQUEST['ID']); ?>" Status="<?php echo($active); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Server="<?php echo(xmlattribinvalidchars($server)); ?>" Department="<?php echo(xmlattribinvalidchars($department)); ?>" Question="<?php echo(xmlattribinvalidchars($question)); ?>">
<?php
if (is_array($rows)) {
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
		
			$id = $row['id'];
			$session = $row['chat']; 
			$username = $row['username'];
			$message = $row['message'];
			$align = $row['align'];
			$status = $row['status'];
			$custom = 0;
			
			// Integration
			if ($status == -4) {
				$query = "SELECT * FROM " . $table_prefix . "custom WHERE `id` = $align";
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
			}
			
			// Outputs sent message
			if ($status == 1) {
?>
<Message ID="<?php echo($id); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
			} else {	// Outputs received message
				if ($custom > 0) {
?>
<Message ID="<?php echo($id); ?>" Custom="<?php echo($custom); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
				} else {
?>
<Message ID="<?php echo($id); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
				}
			}
		}
	}
}
?>
</Messages>
<?php

}

function Chat() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Message'])){ $_REQUEST['Message'] = ''; }
	if (!isset($_REQUEST['Staff'])){ $_REQUEST['Staff'] = ''; }
	if (!isset($_REQUEST['Typing'])){ $_REQUEST['Typing'] = ''; }

	if (!$_REQUEST['Staff']) {
		$query = "SELECT `active`, `typing` FROM " . $table_prefix . "chats WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$active = $row['active'];
			$typing = $row['typing'];
			
			if ($_REQUEST['Typing']) { // Currently Typing
				switch($typing) {
				case 0: // None
					$typingresult = 2;
					break;
				case 1: // Guest Only
					$typingresult = 3;
					break;
				case 2: // Operator Only
					$typingresult = 2;
					break;
				case 3: // Both
					$typingresult = 3;
					break;		
				}
			}
			else { // Not Currently Typing
				switch($typing) {
				case 0: // None
					$typingresult = 0;
					break;
				case 1: // Guest Only
					$typingresult = 1;
					break;
				case 2: // Operator Only
					$typingresult = 0;
					break;
				case 3: // Both
					$typingresult = 1;
					break;		
				}
			}
				
			// Update the typing status of the specified chatting visitor
			$query = "UPDATE " . $table_prefix . "chats SET `typing` = '$typingresult' WHERE `id` = '" . $_REQUEST['ID'] . "'";
			$SQL->updatequery($query);
		}
	}
	else {
		$active = '-1';
		$typingresult = '0';
	}
	
	if ($_REQUEST['Staff']) {
		$query = "SELECT `username` FROM " . $table_prefix . "users WHERE `id` = '" . $_REQUEST['ID'] . "'";
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$username = $row['username'];
		}
		$query = "SELECT `id`, `user`, `username`, `message`, `align`, `status` FROM " . $table_prefix . "administration WHERE ((`user` = '" . $_REQUEST['ID'] . "' AND `username` = '" . $_OPERATOR['USERNAME'] . "') OR (`user` = '" . $_OPERATOR['ID'] . "' AND `username` = '$username')) AND `status` <= '3' AND `id` > '" . $_REQUEST['Message'] . "' AND (UNIX_TIMESTAMP(`datetime`) - UNIX_TIMESTAMP('" . $_OPERATOR['DATETIME'] . "')) > '0' ORDER BY `datetime`";
	}
	else {
		$query = "SELECT `id`, `chat`, `username`, `message`, `align`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '" . $_REQUEST['ID'] . "' AND `status` <= '3' AND `id` > '" . $_REQUEST['Message'] . "' ORDER BY `datetime`";
	}
	$rows = $SQL->selectall($query);
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$message = $row['id']; 
			}
		}
	}
	else {
		$message = '';
	}
	
	header('Content-type: text/xml; charset=utf-8');
	echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Messages xmlns="urn:LiveHelp" ID="<?php echo($_REQUEST['ID']); ?>" Typing="<?php echo($typingresult); ?>" Status="<?php echo($active); ?>" ChatType="<?php echo($_REQUEST['Staff']); ?>">
<?php
if (is_array($rows)) {
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
		
			if ($_REQUEST['Staff']) {
				$session = $row['user'];
			}
			else {
				$session = $row['chat']; 
			}
			$id = $row['id'];
			$username = $row['username'];
			$message = $row['message'];
			$align = $row['align'];
			$status = $row['status'];
			
			// Integration
			if ($status == -4) {
				$query = "SELECT * FROM " . $table_prefix . "custom WHERE `id` = $align";
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
			}
			
			// Outputs sent message
			if ((!$_REQUEST['Staff'] && $status == 1) || ($_REQUEST['Staff'] && $session == $_REQUEST['ID'] && $row['username'] == $_OPERATOR['USERNAME'])) {
?>
<Message ID="<?php echo($id); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
			}
			// Outputs received message
			if ((!$_REQUEST['Staff'] && $status != 1) || ($_REQUEST['Staff'] && $session == $_OPERATOR['ID'] && $row['username'] != $_OPERATOR['USERNAME'])) {
				if ($custom > 0) {
?>
<Message ID="<?php echo($id); ?>" Custom="<?php echo($custom); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
				} else {
?>
<Message ID="<?php echo($id); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
				}
			}
		}
	}
}
?>
</Messages>
<?php

}

function Chats() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['Data'])){ $_REQUEST['Data'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	
	if ($_REQUEST['Data'] == '') {
?>
<MultipleMessages xmlns="urn:LiveHelp"/>
<?php
		exit();
	}
	
	$chats = explode('|', $_REQUEST['Data']);
	if (is_array($chats)) {
		
		if ($_REQUEST['Format'] == 'xml') {
			header('Content-type: text/xml; charset=utf-8');
			echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<MultipleMessages xmlns="urn:LiveHelp">
<?php
		}
		else {
?>
{"MultipleMessages": 
<?php
		}
		
		$total_chats = count($chats);
		
		foreach ($chats as $chatkey => $chat) {
			list($id, $typingstatus, $staff, $message) = explode(',', $chat);
			
			$introduction = false;
			if ($message < 0) { $introduction = true; }
			
			$active = -1;
			$typingresult = 0;
			if (!$staff) {
				$query = "SELECT `username`, `active`, `typing` FROM " . $table_prefix . "chats WHERE `id` = '$id'";
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$username = $row['username'];
					$active = $row['active'];
					$typing = $row['typing'];
					
					if ($typingstatus) { // Currently Typing
						switch($typing) {
						case 0: // None
							$typingresult = 2;
							break;
						case 1: // Guest Only
							$typingresult = 3;
							break;
						case 2: // Operator Only
							$typingresult = 2;
							break;
						case 3: // Both
							$typingresult = 3;
							break;		
						}
					}
					else { // Not Currently Typing
						switch($typing) {
						case 0: // None
							$typingresult = 0;
							break;
						case 1: // Guest Only
							$typingresult = 1;
							break;
						case 2: // Operator Only
							$typingresult = 0;
							break;
						case 3: // Both
							$typingresult = 1;
							break;		
						}
					}
						
					// Update the typing status of the specified chatting visitor
					$query = "UPDATE " . $table_prefix . "chats SET `typing` = '$typingresult' WHERE `id` = '$id'";
					$SQL->updatequery($query);
				}
			}
			
			if ($staff) {
				$query = "SELECT `username` FROM " . $table_prefix . "users WHERE `id` = '$id'";
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$operator = $row['username'];
				}
				$query = "SELECT `id`, `user`, `username`, `datetime`, `message`, `align`, `status` FROM " . $table_prefix . "administration WHERE ((`user` = '$id' AND `username` = '" . $_OPERATOR['USERNAME'] . "') OR (`user` = '" . $_OPERATOR['ID'] . "' AND `username` = '$operator')) AND (`status` <= '3' OR `status` = '7') AND `id` > '$message' AND (UNIX_TIMESTAMP(`datetime`) - UNIX_TIMESTAMP('" . $_OPERATOR['DATETIME'] . "')) > '0' ORDER BY `datetime`";
			}
			else {
				$query = "SELECT `id`, `chat`, `username`, `datetime`, `message`, `align`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '$id' AND (`status` <= '3' OR `status` = '7') AND `id` > '$message' ORDER BY `datetime`";
			}
			$rows = $SQL->selectall($query);
			if (is_array($rows)) {
				foreach ($rows as $key => $row) {
					if (is_array($row)) {
						$message = $row['id']; 
					}
				}
			}
			else { $message = ''; }
			
			if ($_REQUEST['Format'] == 'xml') {
?>
<Messages xmlns="urn:LiveHelp" ID="<?php echo($id); ?>" Typing="<?php echo($typingresult); ?>" Status="<?php echo($active); ?>" ChatType="<?php echo($staff); ?>">
<?php
			}
			else {
?>
<?php if ($chatkey == 0) { echo('{"Messages": ['); } ?>
{
"ID": <?php echo(json_encode($id)); ?>,
"Typing": <?php echo(json_encode($typingresult)); ?>,
"Status": <?php echo(json_encode($active)); ?>,
"ChatType": <?php echo(json_encode($staff)); ?>
<?php
			}

/*
if ($introduction == true && $_SETTINGS['INTRODUCTION'] != '') {
	$_SETTINGS['INTRODUCTION'] = preg_replace("/({Username})/", $username, $_SETTINGS['INTRODUCTION']);
	if ($_REQUEST['Format'] == 'xml') {
?>
<Message ID="<?php echo($msgid); ?>" Datetime="<?php echo($datetime); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
	}
}
*/

$names = array();

if (is_array($rows)) {
	$total_messages = count($rows);
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
		
			if ($staff) {
				$session = $row['user'];
			}
			else {
				$session = $row['chat']; 
			}
			$msgid = $row['id'];
			$username = $row['username'];
			$datetime = $row['datetime'];
			$message = $row['message'];
			$align = $row['align'];
			$status = $row['status'];
			$custom = '';
			$reference = '';
			
			/* TODO Operator Username / Firstname
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
			*/
			
			// Integration
			if ($status == -4) {
				$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `id` = %d", $align);
				$integration = $SQL->selectquery($query);
				if (is_array($integration)) {
					$custom = $integration['custom'];
					$reference = $integration['reference'];
				}
			}
			
			// Outputs sent message
			if ((!$staff && $status == 1) || ($staff && $session == $id && $username == $_OPERATOR['USERNAME'])) {
				if ($_REQUEST['Format'] == 'xml') {
?>
<Message ID="<?php echo($msgid); ?>" Datetime="<?php echo($datetime); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
				}
				else {
?>
<?php if ($key == 0) { echo(',"Message": ['); } ?>
{
"ID": <?php echo(json_encode($msgid)); ?>,
"Content": <?php echo(json_encode($message)); ?>,
"Datetime": <?php echo(json_encode($datetime)); ?>,
"Align": <?php echo(json_encode($align)); ?>,
"Status": <?php echo(json_encode($status)); ?>,
"Username": <?php echo(json_encode($username)); ?>
}<?php if ($key + 1 < $total_messages) { echo(','); } else { echo(']'); } ?>
<?php
				}
			}
			// Outputs received message
			if ((!$staff && $status != 1) || ($staff && $session == $_OPERATOR['ID'] && $username == $operator)) {
				if ($_REQUEST['Format'] == 'xml') {
					if ($custom > 0 && !empty($reference)) {
?>
<Message ID="<?php echo($msgid); ?>" Datetime="<?php echo($datetime); ?>" Custom="<?php echo($custom); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
					} else {
?>
<Message ID="<?php echo($msgid); ?>" Datetime="<?php echo($datetime); ?>" Align="<?php echo($align); ?>" Status="<?php echo($status); ?>" Username="<?php echo(xmlattribinvalidchars($username)) ?>"><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php
					}
				}
				else {
?>
<?php if ($key == 0) { echo(',"Message": ['); } ?>
{
"ID": <?php echo(json_encode($msgid)); ?>,
"Content": <?php echo(json_encode($message)); ?>,
"Datetime": <?php echo(json_encode($datetime)); ?>,
"Align": <?php echo(json_encode($align)); ?>,
"Status": <?php echo(json_encode($status)); ?>,
"Username": <?php echo(json_encode($username)); ?>
}<?php if ($key + 1 < $total_messages) { echo(','); } else { echo(']'); } ?>
<?php
				}
			}
		}
	}
}
			if ($_REQUEST['Format'] == 'xml') {
?>
</Messages>
<?php
			}
			else {
?>
}<?php if ($chatkey + 1 < $total_chats) { echo(','); } else { echo(']'); } ?>
<?php
			}
		}
		if ($_REQUEST['Format'] == 'xml') {
?>
</MultipleMessages>
<?php
		}
		else {
?>
}}
<?php
		}
	}
}

function Operators() {

	global $_OPERATOR;
	global $SQL;
	global $table_prefix;
	global $operators;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['User'])){ $_REQUEST['User'] = ''; }
	if (!isset($_REQUEST['Firstname'])){ $_REQUEST['Firstname'] = ''; }
	if (!isset($_REQUEST['Lastname'])){ $_REQUEST['Lastname'] = ''; }
	if (!isset($_REQUEST['CurrentPassword'])){ $_REQUEST['CurrentPassword'] = ''; }
	if (!isset($_REQUEST['NewPassword'])){ $_REQUEST['NewPassword'] = ''; }
	if (!isset($_REQUEST['Email'])){ $_REQUEST['Email'] = ''; }
	if (!isset($_REQUEST['Department'])){ $_REQUEST['Department'] = ''; }
	if (!isset($_REQUEST['Image'])){ $_REQUEST['Image'] = ''; }
	if (!isset($_REQUEST['Privilege'])){ $_REQUEST['Privilege'] = ''; }
	if (!isset($_REQUEST['Disabled'])){ $_REQUEST['Disabled'] = ''; }
	if (!isset($_REQUEST['Status'])){ $_REQUEST['Status'] = ''; }
	if (!isset($_REQUEST['Cached'])){ $_REQUEST['Cached'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	if (!isset($_REQUEST['Version'])){ $_REQUEST['Version'] = ''; }
	
	// Password Hash
	$hash = '';
	$password = $_REQUEST['NewPassword'];

	// Hash Operator Password
	if (!empty($_REQUEST['Version']) && !empty($password)) {
		$version = $_REQUEST['Version'];
		list($major, $minor) = explode('.', $version);
		if ((int)$major >= 4) {
			if (strlen($password) > 72) { 
				$hash = '';
			} else {
				$hasher = new PasswordHash(8, true);
				$hash = $hasher->HashPassword($password);
				if (strlen($hash) < 20) {
					$hash = '';
				}
			}
		} else {
			if (function_exists('hash')) {
				if (in_array('sha512', hash_algos())) {
					$hash = hash('sha512', $password);
				}
				elseif (in_array('sha1', hash_algos())) {
					$hash = hash('sha1', $password);
				}
			} else if (function_exists('mhash') && mhash_get_hash_name(MHASH_SHA512) != false) {
				$hash = bin2hex(mhash(MHASH_SHA512, $password));
			} else if (function_exists('sha1')) {
				$hash = sha1($password);
			}
		}
	}

	if (!empty($_REQUEST['ID'])) {
	
		// Editing Own Account
		if ($_OPERATOR['ID'] == $_REQUEST['ID']) {
		
			// Can't change permission to lower value - higher administration rights
			if ($_REQUEST['Privilege'] < $_OPERATOR['PRIVILEGE']) {
				$_REQUEST['Privilege'] = $_OPERATOR['PRIVILEGE'];
			}
		}
		else {
			// Other Access Levels Excluding Full / Department Administrator
			if ($_OPERATOR['PRIVILEGE'] > 1) {
			
				if ($_REQUEST['Format'] == 'xml') {
					header('Content-type: text/xml; charset=utf-8');
					echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
			
?>
<Operators xmlns="urn:LiveHelp" />
<?php
				}
				else {
					header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php		
				}
				exit();
			}
		}
	
		// Update Existing Account
		if (!empty($_REQUEST['ID']) && !empty($_REQUEST['User']) && !empty($_REQUEST['Firstname']) && !empty($_REQUEST['Email']) && !empty($_REQUEST['Department']) && $_REQUEST['Privilege'] != '' && $_REQUEST['Disabled'] != '') {
			
			// Update Username
			$query = sprintf("SELECT `username` FROM " . $table_prefix . "users WHERE `id` = %d LIMIT 1", $SQL->escape($_REQUEST['ID']));
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$username = $row['username'];
				if ($_REQUEST['User'] != $username) {
					// Update Messages
					$query = sprintf("UPDATE " . $table_prefix . "messages SET `username` = '%s' WHERE `username` = '%s' AND `status` <> 0", $SQL->escape($_REQUEST['User']), $SQL->escape($username));
					$SQL->updatequery($query);

					// Update Operator Messages
					$query = sprintf("UPDATE " . $table_prefix . "administration SET `username` = '%s' WHERE `username` = '%s'", $SQL->escape($_REQUEST['User']), $SQL->escape($username));
					$SQL->updatequery($query);
				}
			}

			// Uploaded Operator Image
			$upload = isset($_FILES['files']) ? $_FILES['files'] : null;
			if ($upload && is_array($upload['tmp_name'])) {
				// Upload File
				$file = $upload['tmp_name'][0];

				// Validate Image
				list($width, $height) = @getimagesize($file);
				if ($width >= 100 && $width <= 300 && $height >= 100 && $height <= 300) {
					$content = file_get_contents($file);
					$_REQUEST['Image'] = base64_encode($content);
				}
			}

			// Full Administrator / Department Administrator
			if ($_OPERATOR['PRIVILEGE'] < 2) {
				// Update Account
				$query = "UPDATE " . $table_prefix . "users SET `username` = '" . $_REQUEST['User'] . "', `firstname` = '" . $_REQUEST['Firstname'] . "', `lastname` = '" . $_REQUEST['Lastname'] . "', `email` = '" . $_REQUEST['Email'] . "', `department` = '" . $_REQUEST['Department'] . "', `privilege` = '" . $_REQUEST['Privilege'] . "', `disabled` = '" . $_REQUEST['Disabled'] . "'";
				
				// Update Password
				if (!empty($hash)) {
					$query .= ", `password` = '" . $hash . "'";
				}

				// Update Image
				if (!empty($_REQUEST['Image'])) {
					$query .= ", `image` = '" . $_REQUEST['Image'] . "', `updated` = NOW()";
				}
				$query .= " WHERE `id` = '" . $_REQUEST['ID'] . "'";
			} else {
				// Update Account / Other Access Levels
				$query = "UPDATE " . $table_prefix . "users SET `username` = '" . $_REQUEST['User'] . "', `firstname` = '" . $_REQUEST['Firstname'] . "', `lastname` = '" . $_REQUEST['Lastname'] . "', `email` = '" . $_REQUEST['Email'] . "', `disabled` = '" . $_REQUEST['Disabled'];

				// Update Image
				if (!empty($_REQUEST['Image'])) {
					$query .= "', `image` = '" . $_REQUEST['Image'] . "', `updated` = NOW()";
				}
				$query .= " WHERE `id` = '" . $_REQUEST['ID'] . "'";
			}
			$result = $SQL->updatequery($query);
			if ($result == false) {
			
				if ($_REQUEST['Format'] == 'xml') {
					header('Content-type: text/xml; charset=utf-8');
					echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
			
?>
<Operators xmlns="urn:LiveHelp" />
<?php
				}
				else {
					header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
				}
				exit();
			}
	
		}
		elseif (!empty($_REQUEST['NewPassword'])) {  // Change password
			
			// Other Access Levels / Confirm Current Password
			if ($_OPERATOR['PRIVILEGE'] > 0 && !empty($_REQUEST['CurrentPassword'])) {
				$query = "SELECT `id` FROM " . $table_prefix . "users WHERE `id` = '" . $_REQUEST['ID'] . "' AND `password` = '" . $_REQUEST['CurrentPassword'] . "' LIMIT 1";
				$row = $SQL->selectquery($query);
			}
			// Full Admnistrator
			if ($_OPERATOR['PRIVILEGE'] <= 0 || is_array($row)) {
		
				$hash = $_REQUEST['NewPassword'];
				if (isset($_REQUEST['Version']) && $_REQUEST['Version'] >= 4.0) {
					$hasher = new PasswordHash(8, true);
					$hash = $hasher->HashPassword($hash);
				}

				$query = "UPDATE " . $table_prefix . "users SET `password` = '" . $hash . "' WHERE `id` = '" . $_REQUEST['ID'] . "'";
				$result = $SQL->updatequery($query);
				if ($result == false) {
				
					if ($_REQUEST['Format'] == 'xml') {
						header('Content-type: text/xml; charset=utf-8');
						echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
				
?>
<Operators xmlns="urn:LiveHelp" />
<?php
					}
					else {
						header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
					}
					exit();
				}
				
			} elseif (!is_array($row)) {
			
				// Forbidden - Incorrect Password
				if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
				exit();
				
			} else {
			
				if ($_REQUEST['Format'] == 'xml') {
					header('Content-type: text/xml; charset=utf-8');
					echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
				
?>
<Operators xmlns="urn:LiveHelp" />
<?php
				}
				else {
					header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
				}
				exit();
			}
		}
		else {  // Delete Account
		
			if ($_OPERATOR['ID'] != $_REQUEST['ID']) {
				$query = "DELETE FROM " . $table_prefix . "users WHERE `id` = '" . $_REQUEST['ID'] . "' AND `privilege` <> -1";
				$result = $SQL->deletequery($query);
				if ($result == false) {
				
					if ($_REQUEST['Format'] == 'xml') {
						header('Content-type: text/xml; charset=utf-8');
						echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Operators xmlns="urn:LiveHelp" />
<?php
					}
					else {
						header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
					}
					exit();
				}
			}
			else {
				if ($_REQUEST['Format'] == 'xml') {
					header('Content-type: text/xml; charset=utf-8');
					echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Operators xmlns="urn:LiveHelp" />
<?php
				}
				else {
					header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
				}
				exit();
			}
		
		} 
	}
	else {
	
		// Full Administrator / Department Administrator
		if ($_OPERATOR['PRIVILEGE'] < 2) {
	
			// Add Account
			if ($_REQUEST['User'] != '' && $_REQUEST['Firstname'] != '' && $_REQUEST['NewPassword'] != '' && $_REQUEST['Email'] != '' && $_REQUEST['Department'] != '' && $_REQUEST['Privilege'] != '' && $_REQUEST['Disabled'] != '') {
		
				if ($_OPERATOR['PRIVILEGE'] > 0 && $_REQUEST['Privilege'] == 0) {
					if ($_REQUEST['Format'] == 'xml') {
?>
<Operators xmlns="urn:LiveHelp" />
<?php
					}
					else {
?>
{"Operators": null}
<?php
					}
					exit();
				}
		
				if (isset($operators)) {
					$query = "SELECT COUNT(*) FROM " . $table_prefix . "users";
					$row = $SQL->selectquery($query);
					if (isset($row['COUNT(*)'])) {
						$total = $row['COUNT(*)'];
						if ($total == $operators) {
						
							if ($_REQUEST['Format'] == 'xml') {
								header('Content-type: text/xml; charset=utf-8');
								echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
				
?>
<Operators xmlns="urn:LiveHelp" />
<?php
							}
							else {
								header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
							}
							exit();
						}
					}
				}

				// Uploaded Operator Image
				$upload = isset($_FILES['files']) ? $_FILES['files'] : null;
				if ($upload && is_array($upload['tmp_name'])) {
					// Upload File
					$file = $upload['tmp_name'][0];

					// Validate Image
					list($width, $height) = @getimagesize($file);
					if ($width >= 100 && $width <= 300 && $height >= 100 && $height <= 300) {
						$content = file_get_contents($file);
						$_REQUEST['Image'] = base64_encode($content);
					}
				}

				$result = false;
				if (!empty($hash)) {
					$query = "INSERT INTO " . $table_prefix . "users(`username`, `firstname`, `lastname`, `password`, `email`, `department`, `device`, `image`, `updated`, `privilege`, `disabled`) VALUES('" . $_REQUEST['User'] . "', '" . $_REQUEST['Firstname'] . "', '" . $_REQUEST['Lastname'] . "', '" . $hash . "', '" . $_REQUEST['Email'] . "', '" . $_REQUEST['Department'] . "', '', '" . $_REQUEST['Image'] . "', NOW(), '" . $_REQUEST['Privilege'] . "', '" . $_REQUEST['Disabled'] . "')";
					$result = $SQL->insertquery($query);
				}
				if ($result == false) {
				
					if ($_REQUEST['Format'] == 'xml') {
						header('Content-type: text/xml; charset=utf-8');
						echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
				
?>
<Operators xmlns="urn:LiveHelp" />
<?php
					}
					else {
						header('Content-type: application/json; charset=utf-8');
?>
{"Operators": null}
<?php
					}
					exit();
				}
			}
		}
		
	}
	
	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
	}
	else {
		header('Content-type: application/json; charset=utf-8');
	}
	
	$query = "SELECT *, NOW() AS `time` FROM " . $table_prefix . "users ORDER BY `username`";
	$rows = $SQL->selectall($query);
	
	$total_operators = count($rows);
	
	if (is_array($rows)) {
		if (isset($operators)) {
			if ($_REQUEST['Format'] == 'xml') {
?>
<Operators xmlns="urn:LiveHelp" Limit="<?php echo($operators) ?>">
<?php
			}
			else {
?>
{"Operators": { "Limit": <?php echo(json_encode($operators)); ?>,
<?php
			}
		} else {
			if ($_REQUEST['Format'] == 'xml') {
?>
<Operators xmlns="urn:LiveHelp">
<?php
			}
			else {
?>
{"Operators": {
<?php
			}
		}

		$query = "SELECT messages.username, AVG(`rating`) AS `average` FROM `" . $table_prefix . "messages` AS messages, `" . $table_prefix . "chats` AS chats WHERE messages.chat = chats.id AND `status` = 1 AND `rating` <> 0 GROUP BY messages.username";
		$ratings = $SQL->selectall($query);

		foreach ($rows as $operatorkey => $row) {
			if (is_array($row)) {
				$operator_id = $row['id'];
				$operator_username = $row['username'];
				$operator_firstname = $row['firstname'];
				$operator_lastname = $row['lastname'];
				$operator_email = $row['email'];
				$operator_password = $row['password'];
				$operator_department = $row['department'];
				$operator_device = $row['device'];
				$operator_image = $row['image'];
				$operator_datetime = $row['datetime'];
				$operator_refresh = $row['refresh'];
				$operator_updated = $row['updated'];
				$operator_privilege = $row['privilege'];
				$operator_disabled = $row['disabled'];
				$operator_status = $row['status'];
				$operator_time = $row['time'];
				
				if (substr($operator_password, 0, 3) != '$P$') {
					$length = strlen($operator_password);
					switch ($length) {
						case 40: // SHA1
							$authentication = '2.0';
							break;
						case 128: // SHA512
							$authentication = '3.0';
							break;
						default: // MD5
							$authentication = '1.0';
							break;
					}
				} else {
					$authentication = '4.0';
				}
				
				$refresh = strtotime($operator_refresh);
				$time = strtotime($operator_time);
				if ($time - $refresh > 45) { $operator_status = 0; }
				
				if (!empty($_REQUEST['Cached'])) { 
					$updated = strtotime($operator_updated);
					$cached = strtotime($_REQUEST['Cached']);
					if ($updated - $cached <= 0) {
						$operator_image = '';
					}
				}
				
				$operator_rating = 'Unavailable';
				if (is_array($ratings)) {
					foreach ($ratings as $key => $rating) {
						if (is_array($rating)) {
							if ($rating['username'] == $operator_username) {
								$operator_rating = $rating['average'];
								break;
							}
						}
					}
				}
				
				if ($_REQUEST['Format'] == 'xml') {
?>
<Operator ID="<?php echo($operator_id); ?>" Updated="<?php echo($operator_updated); ?>" Authentication="<?php echo($authentication); ?>" Device="<?php echo(xmlattribinvalidchars($operator_device)); ?>">
<Username><?php echo(xmlelementinvalidchars($operator_username)); ?></Username>
<Firstname><?php echo(xmlelementinvalidchars($operator_firstname)); ?></Firstname>
<Lastname><?php echo(xmlelementinvalidchars($operator_lastname)); ?></Lastname>
<Email><?php echo(xmlelementinvalidchars($operator_email)); ?></Email>
<Department><?php echo(xmlelementinvalidchars($operator_department)); ?></Department>
<?php if ($operator_image != '') { ?><Image><![CDATA[<?php echo(xmlelementinvalidchars($operator_image)); ?>]]></Image><?php } ?>
<Datetime><?php echo(xmlelementinvalidchars($operator_datetime)); ?></Datetime>
<Refresh><?php echo(xmlelementinvalidchars($operator_refresh)); ?></Refresh>
<Privilege><?php echo($operator_privilege); ?></Privilege>
<Disabled><?php echo($operator_disabled); ?></Disabled>
<Status><?php echo($operator_status); ?></Status>
<Rating><?php echo(xmlelementinvalidchars($operator_rating)); ?></Rating>
</Operator>
<?php
				}
				else {
?>
<?php if ($operatorkey == 0) { echo('"Operator": ['); } ?>
{
"ID": <?php echo(json_encode($operator_id)); ?>,
"Updated": <?php echo(json_encode($operator_updated)); ?>,
"Authentication": <?php echo(json_encode($authentication)); ?>,
"Device": <?php echo(json_encode($operator_device)); ?>,
"Username": <?php echo(json_encode($operator_username)); ?>,
"Firstname": <?php echo(json_encode($operator_firstname)); ?>,
"Lastname": <?php echo(json_encode($operator_lastname)); ?>,
"Email": <?php echo(json_encode($operator_email)); ?>,
"Department": <?php echo(json_encode($operator_department)); ?>,
<?php if ($operator_image != '') { ?>"Image": <?php echo(json_encode($operator_image)); ?>,<?php } ?>
"Datetime": <?php echo(json_encode($operator_datetime)); ?>,
"Refresh": <?php echo(json_encode($operator_refresh)); ?>,
"Privilege": <?php echo(json_encode($operator_privilege)); ?>,
"Disabled": <?php echo(json_encode($operator_disabled)); ?>,
"Status": <?php echo(json_encode($operator_status)); ?>,
"Rating": <?php echo(json_encode($operator_rating)); ?>
}<?php if ($operatorkey + 1 < $total_operators) { echo(','); } else { echo(']'); } ?>
<?php
				}
			}
		}
		if ($_REQUEST['Format'] == 'xml') {
?>
</Operators>
<?php
		}
		else {
?>
}}
<?php
		}
	}
	else {
		if ($_REQUEST['Format'] == 'xml') {
?>
<Operators xmlns="urn:LiveHelp"/>
<?php
		}
		else {
?>
{"Operators": null}
<?php
		}
	}
}

function Statistics() {

	global $SQL;
	global $_SETTINGS;
	global $table_prefix;
	
	if (!isset($_REQUEST['Timezone'])){ $_REQUEST['Timezone'] = $_SETTINGS['SERVERTIMEZONE']; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	
	$hours = 0; $minutes = 0;
	$timezone = $_SETTINGS['SERVERTIMEZONE']; $from = ''; $to = '';
	if ($timezone != $_REQUEST['Timezone']) {
	
		$sign = substr($_REQUEST['Timezone'], 0, 1);
		$hours = substr($_REQUEST['Timezone'], -4, 2);
		$minutes = substr($_REQUEST['Timezone'], -2, 2);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$local = $sign . $hours . $minutes;
	
		$sign = substr($timezone, 0, 1);
		$hours = substr($timezone, 1, 2);
		$minutes = substr($timezone, 3, 4);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$remote = $sign . $hours . $minutes;
	
		// Convert to eg. +/-0430 format
		$hours = substr(sprintf("%04d", $local - $remote), 0, 2);
		$minutes = substr(sprintf("%04d", $local - $remote), 2, 4);
		if ($minutes != 0) { $minutes = ($minutes * 0.6); }
		$difference = ($hours * 60 * 60) + ($minutes * 60);
		
		if ($difference != 0) {
			$from = date('Y-m-d H:i:s', mktime(0, 0, 0, date('m'), date('d')-30, date('Y')));
			$to = date('Y-m-d H:i:s', mktime(24, 0, 0, date('m'), date('d'), date('Y')));
		}
	}

	if (empty($from) && empty($to)) {
		$from = date('Y-m-d H:i:s', mktime(0, 0, 0, date('m'), date('d')-30, date('Y')));
		$to = date('Y-m-d H:i:s', mktime(24, 0, 0, date('m'), date('d'), date('Y')));
	}
	
	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Statistics xmlns="urn:LiveHelp">
<?php
	}
	else {
		header('Content-type: application/json; charset=utf-8');
	}

	// Visitors Statistics - 30 days
	$dates = array_pad(array(), 30, 0);
	$data = ''; $start = '';
	
	$query = "SELECT DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)) AS `date`";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$date = $row['date'];
		$start = date('Y-m-d', mktime(0, 0, 0, substr($date, 5, 2), substr($date, 8, 2) - 30, substr($date, 0, 4)));
	}

	$query = "SELECT DATE(DATE_ADD(`datetime`, INTERVAL '$hours:$minutes' HOUR_MINUTE)) AS `date`, COUNT(*) AS `total` FROM " . $table_prefix . "requests WHERE DATE_ADD(`datetime`, INTERVAL '$hours:$minutes' HOUR_MINUTE) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 30 DAY) GROUP BY `date` ORDER BY `date` ASC LIMIT 0, 30";
	$rows = $SQL->selectall($query);
	if (is_array($rows)) {
		$i = 0;
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
			
				$current = $row['date'];
				$time = mktime(0, 0, 0, substr($current, 5, 2), substr($current, 8, 2), substr($current, 0, 4));
				
				$dates[$i] = (int)$row['total'];
				$i++;
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
			$data = implode(', ', $dates);
?>
	<Visitors Date="<?php echo(xmlattribinvalidchars($start)); ?>" Data="<?php echo(xmlattribinvalidchars($data)); ?>"/>
<?php
		} else {
			$data = array('Date' => $start, 'Data' => $dates);
			$visitors = $data;
		}
	}

	$query = "SELECT DISTINCT chats.id, UNIX_TIMESTAMP(DATE_ADD(`refresh`, INTERVAL '$hours:$minutes' HOUR_MINUTE)) - UNIX_TIMESTAMP(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) AS `duration` FROM " . $table_prefix . "chats AS chats JOIN " . $table_prefix . "messages AS messages ON (chats.id = messages.chat) WHERE DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 30 DAY) ORDER BY `duration` ASC";
	$rows = $SQL->selectall($query);
	
	// Duration Statistics - 30 Days
	$duration = array();
	
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {		
				$duration[] = (int)$row['duration'];
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
			$data = implode(', ', $duration);
?>
	<Duration Data="<?php echo(xmlattribinvalidchars($data)); ?>"/>
<?php
		} else {
			$duration = array('Data' => $duration);
		}
	}
	
	// Chat Statistics - 30 days
	$dates = array();
	$data = ''; $start = '';
	
	$query = "SELECT DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)) AS `date`";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$date = $row['date'];
		$start = date('Y-m-d', mktime(0, 0, 0, substr($date, 5, 2), substr($date, 8, 2) - 30, substr($date, 0, 4)));
		for ($i = 29; $i >= 0; $i--) {
			$time = mktime(0, 0, 0, substr($date, 5, 2), substr($date, 8, 2) - $i, substr($date, 0, 4));
			$dates[date('Y-m-d', $time)] = 0;
		}
	}
	
	$query = "SELECT DISTINCT DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) AS `date`, COUNT(DISTINCT chats.id) AS `total` FROM `" . $table_prefix . "chats` AS `chats` JOIN `" . $table_prefix . "messages` AS `messages` ON (chats.id = messages.chat) WHERE DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 30 DAY) GROUP BY `date` ORDER BY `date` ASC LIMIT 0, 30";
	$rows = $SQL->selectall($query);
	$i = 0; $total = count($rows);
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
			
				$current = $row['date'];
				$time = mktime(0, 0, 0, substr($current, 5, 2), substr($current, 8, 2), substr($current, 0, 4));
				$date = date('Y-m-d', $time);
				if (isset($dates[$date])) { $dates[$date] = (int)$row['total']; }
				
				$i++;
			}
		}

		if ($_REQUEST['Format'] == 'xml') {
			$data = implode(', ', $dates);
?>
	<Chats Date="<?php echo(xmlattribinvalidchars($start)); ?>" Data="<?php echo(xmlattribinvalidchars($data)); ?>"/>
<?php
		} else {
			$data = array();
			foreach ($dates as $key => $row) {
				$data[] = (int)$row;
			}
			$data = array('Date' => $start, 'Data' => $data);
			$chats = $data;
		}
	}

	$query = "SELECT DATE_FORMAT(DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)), '%w') AS `day`, COUNT(DISTINCT DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE))) AS `days` FROM `" . $table_prefix . "chats` AS `chats` JOIN `" . $table_prefix . "messages` AS `messages` ON (chats.id = messages.chat) WHERE DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 365 DAY) GROUP BY `day` ORDER BY DATE_FORMAT(DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)), '%w') ASC";
	$weeks = $SQL->selectall($query);

	$query = "SELECT DISTINCT DATE_FORMAT(DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)), '%w') AS `day` , COUNT(DISTINCT chats.id) AS `total` FROM `" . $table_prefix . "chats` AS `chats` JOIN `" . $table_prefix . "messages` AS `messages` ON (chats.id = messages.chat) WHERE DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 365 DAY) GROUP BY `day` ORDER BY DATE_FORMAT(DATE(DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE)), '%w') ASC LIMIT 0, 30";
	$rows = $SQL->selectall($query);

	// Chats - Weekday Average
	if (is_array($rows)) {
		$data = array();
		$days = array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

		for ($i = 0; $i < 7; $i++) {
			$data[$i] = array('Day' => $days[$i], 'Total' => 0, 'Average' => 0);
		}

		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$day = $row['day'];
				$total = (int)$row['total'];
				$average = 0;
				if (is_array($weeks)) {
					foreach ($weeks as $index => $weekday) {
						if ($day == $weekday['day']) {
							$average = round($total / (int)$weekday['days'], 1);
							break;
						}
					}
				}
				$data[$day] = array('Day' => $days[$day], 'Total' => $total, 'Average' => $average);
			}
		}
		if ($_REQUEST['Format'] == 'json') {
			$chats['Weekday'] = $data;
		}
	}

	$query = "SELECT `rating`, COUNT(*) AS `total` FROM `" . $table_prefix . "chats` WHERE DATE(`datetime`) > DATE_SUB(DATE(DATE_ADD(NOW(), INTERVAL '$hours:$minutes' HOUR_MINUTE)), INTERVAL 30 DAY) GROUP BY `rating` ORDER BY `rating` ASC";
	$rows = $SQL->selectall($query);
	
	// Rating Statistics - 30 Days
	$excellent = 0;
	$verygood= 0;
	$good = 0;
	$poor = 0;
	$verypoor = 0;
	$unrated = 0;
	
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
			
				$rating = (int)$row['rating'];
				$total = $row['total'];
				switch($rating) {
					case 5:
						$excellent = (int)$total;
						break;
					case 4:
						$verygood = (int)$total;
						break;
					case 3:
						$good = (int)$total;
						break;
					case 2:
						$poor = (int)$total;
						break;
					case 1:
						$verypoor = (int)$total;
						break;
					default:
						$unrated =(int) $total;
						break;
				}
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {
?>
	<Rating Excellent="<?php echo($excellent); ?>" VeryGood="<?php echo($verygood); ?>" Good="<?php echo($good); ?>" Poor="<?php echo($poor); ?>" VeryPoor="<?php echo($verypoor); ?>" Unrated="<?php echo($unrated); ?>"/>
<?php
		} else {
			$rating = array('Excellent' => $excellent, 'VeryGood' => $verygood, 'Good' => $good, 'Poor' => $poor, 'VeryPoor' => $verypoor, 'Unrated' => $unrated);
		}
	}
	
	if ($_REQUEST['Format'] == 'xml') {
?>
</Statistics>
<?php
	} else {
		$statistics = array('Visitors' => $visitors, 'Chats' => $chats, 'Duration' => $duration, 'Rating' => $rating);
		$json = array('Statistics' => $statistics);
		$json = json_encode($json);
		echo($json);
	}

}

function History() {

	global $_SETTINGS;
	global $_OPERATOR;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['StartDate'])){ $_REQUEST['StartDate'] = ''; }
	if (!isset($_REQUEST['EndDate'])){ $_REQUEST['EndDate'] = ''; }
	if (!isset($_REQUEST['Timezone'])){ $_REQUEST['Timezone'] = ''; }
	if (!isset($_REQUEST['Transcripts'])){ $_REQUEST['Transcripts'] = ''; }
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Version'])){ $_REQUEST['Version'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }

	if ($_REQUEST['Format'] == 'xml') {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
	} else {
		header('Content-type: application/json; charset=utf-8');
	}
	
	// View History if authorized
	if ($_OPERATOR['PRIVILEGE'] > 2) {
		if ($_REQUEST['Transcripts'] == '') {
			if ($_REQUEST['Format'] == 'xml') {
?>
<VisitorHistory xmlns="urn:LiveHelp"/>
<?php
			} else {
?>
{ "VisitorHistory": null }
<?php
			}
		exit();
		}
	}

	// Live Help Messenger 2.95 Compatibility
	if (isset($_REQUEST['Date'])) {
		list($from_year, $from_month, $from_day) = explode('-', $_REQUEST['Date']);
		list($to_year, $to_month, $to_day) = explode('-', $_REQUEST['Date']);
	} else {
		list($from_year, $from_month, $from_day) = explode('-', $_REQUEST['StartDate']);
		list($to_year, $to_month, $to_day) = explode('-', $_REQUEST['EndDate']);
	}

	$timezone = $_SETTINGS['SERVERTIMEZONE']; $from = ''; $to = '';
	if ($timezone != $_REQUEST['Timezone']) {
	
		$sign = substr($_REQUEST['Timezone'], 0, 1);
		$hours = substr($_REQUEST['Timezone'], -4, 2);
		$minutes = substr($_REQUEST['Timezone'], -2, 2);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$local = $sign . $hours . $minutes;
	
		$sign = substr($timezone, 0, 1);
		$hours = substr($timezone, 1, 2);
		$minutes = substr($timezone, 3, 4);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$remote = $sign . $hours . $minutes;
	
		// Convert to eg. +/-0430 format
		$hours = substr(sprintf("%04d", $local - $remote), 0, 2);
		$minutes = substr(sprintf("%04d", $local - $remote), 2, 4);
		if ($minutes != 0) { $minutes = ($minutes * 0.6); }
		$difference = ($hours * 60 * 60) + ($minutes * 60);
		
		if ($difference != 0) {
			$from = date('Y-m-d H:i:s', mktime(0 - $hours, 0 - $minutes, 0, $from_month, $from_day, $from_year));
			$to = date('Y-m-d H:i:s', mktime(0 - $hours, 0 - $minutes, 0, $to_month, $to_day + 1, $to_year));
		}
	}

	if (empty($from) && empty($to)) {
		$from = date('Y-m-d H:i:s', mktime(0, 0, 0, $from_month, $from_day, $from_year));
		$to = date('Y-m-d H:i:s', mktime(24, 0, 0, $to_month, $to_day, $to_year));
	}
	
	if ($_REQUEST['Transcripts'] != '') {
		
		$query = '';
		if ($timezone != $_REQUEST['Timezone']) {
			if ($difference != 0) {
				$query = "SELECT DISTINCT chats.id AS chat, chats.request, messages.username AS operator, `firstname`, `lastname`, `ipaddress`, `useragent`, `city`, `state`, `country`, `referrer`, `url`, `path`, DATE_ADD(chats.datetime, INTERVAL '$hours:$minutes' HOUR_MINUTE) AS `datetime`, DATE_ADD(chats.refresh, INTERVAL '$hours:$minutes' HOUR_MINUTE) AS `refresh`, chats.username, chats.department, chats.email, `rating`, `active` FROM `" . $table_prefix . "chats` AS chats LEFT JOIN `" . $table_prefix . "requests` AS requests ON (chats.request = requests.id) LEFT JOIN " . $table_prefix . "messages AS messages ON (chats.id = messages.chat) LEFT JOIN `" . $table_prefix . "users` AS users ON (messages.username = users.username) WHERE chats.datetime > '$from' AND chats.datetime < '$to' AND (messages.status = '1' OR messages.status = '7') AND chats.id > '{$_REQUEST['ID']}'";		
			}
		}
		if ($query == '') {		
			$query = "SELECT DISTINCT chats.id AS chat, chats.request, messages.username AS operator, `firstname`, `lastname`, `ipaddress`, `useragent`, `city`, `state`, `country`, `referrer`, `url`, `path`, chats.datetime AS `datetime`, chats.refresh AS `refresh`, chats.username, chats.department, chats.email, `rating`, `active` FROM `" . $table_prefix . "chats` AS chats LEFT JOIN `" . $table_prefix . "requests` AS requests ON (chats.request = requests.id) LEFT JOIN `" . $table_prefix . "messages` AS messages ON (chats.id = messages.chat) LEFT JOIN `" . $table_prefix . "users` AS users ON (messages.username = users.username) WHERE chats.datetime > '$from' AND chats.datetime < '$to' AND (messages.status = '1' OR messages.status = '7') AND chats.id > '{$_REQUEST['ID']}'";
		}
		
		// Limit History if not Administrator
		if ($_OPERATOR['PRIVILEGE'] > 2) {
			$query .= " AND users.username = '{$_REQUEST['Username']}'";
		}
		$query .= ' GROUP BY chats.id ORDER BY chats.datetime';

		if ($_REQUEST['Format'] == 'xml') {
?>
<ChatHistory xmlns="urn:LiveHelp">
<?php
		} else {
			$visitors = array();
		}

		$rows = $SQL->selectall($query);
		if (is_array($rows)) {
			foreach ($rows as $key => $row) {
				if (is_array($row)) {
				
					$id = $row['chat'];
					$request = $row['request'];
					$ipaddress = (!empty($row['ipaddress'])) ? $row['ipaddress'] : 'Unavailable';
					$useragent = (!empty($row['useragent'])) ? $row['useragent'] : 'Unavailable';
					$referer = (!empty($row['referrer'])) ? $row['referrer'] : 'Unavailable';
					$city = $row['city'];
					$state = $row['state'];
					$country = (!empty($row['country'])) ? $row['country'] : 'Unavailable';
					$url =  (!empty($row['url'])) ? $row['url'] : 'Unavailable';
					$path =  (!empty($row['path'])) ? $row['path'] : 'Unavailable';
					$username = $row['username'];
					$operator = (!empty($row['firstname'])) ? $row['firstname'] . ' ' . $row['lastname'] : $row['operator'];
					$department = $row['department'];
					$email = $row['email'];
					$rating = $row['rating'];
					$active = $row['active'];
					$datetime = $row['datetime'];
					$refresh = $row['refresh'];
					
					$custom = '';
					$reference = '';
					
					// Page Path Limit
					$paths = explode('; ', $path);
					$total = count($paths);
					$paths = array_slice($paths, $total - 20);
					$path = implode('; ', $paths);
					
					// Integration
					$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = %d", $request);
					$integration = $SQL->selectquery($query);
					if (is_array($integration)) {
						$custom = $integration['custom'];
						$reference = $integration['reference'];
					}
					
					if ($_REQUEST['Format'] == 'xml') {	
?>
<Visitor ID="<?php echo($request); ?>" Session="<?php echo($id); ?>" Active="<?php echo($active); ?>" Username="<?php echo(xmlattribinvalidchars($username)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Custom="<?php echo(xmlattribinvalidchars($custom)); ?>" Reference="<?php echo(xmlattribinvalidchars($reference)); ?>">
<Date><?php echo(xmlelementinvalidchars($datetime)); ?></Date>
<Refresh><?php echo(xmlelementinvalidchars($refresh)); ?></Refresh>
<Hostname><?php echo(xmlelementinvalidchars($ipaddress)); ?></Hostname>
<UserAgent><?php echo(xmlelementinvalidchars($useragent)); ?></UserAgent>
<CurrentPage><?php echo(xmlelementinvalidchars($url)); ?></CurrentPage>
<SiteTime><?php echo($timezone); ?></SiteTime>
<Referrer><?php echo(xmlelementinvalidchars($referer)); ?></Referrer>
<Country City="<?php echo(xmlattribinvalidchars($city)); ?>" State="<?php echo(xmlattribinvalidchars($state)); ?>"><?php echo(xmlelementinvalidchars($country)); ?></Country>
<PagePath><?php echo(xmlelementinvalidchars($path)); ?></PagePath>
<Operator><?php echo(xmlelementinvalidchars($operator)); ?></Operator>
<Department><?php echo(xmlelementinvalidchars($department)); ?></Department>
<Rating><?php echo(xmlelementinvalidchars($rating)); ?></Rating>
</Visitor>
<?php
					} else {
					
						$visitor = array("ID" => $request, "Session" => $id, "Active" => $active, "Username" => $username, "Email" => $email, "Date" => $datetime, "Refresh" => $refresh, "Hostname" => $ipaddress, "UserAgent" => $useragent, "CurrentPage" => $url, "SiteTime" => $timezone, "Referrer" => $referer, "City" => $city, "State" => $state, "Country" => $country, "PagePath" => $path, "Operator" => $operator, "Department" => $department, "Rating" => $rating);
						$visitors[] = array("Visitor" => $visitor);
						
					}
				}
			}
		}
		
		if ($_REQUEST['Format'] == 'xml') {	
?>
</ChatHistory>
<?php
		} else {

			$json = array("ChatHistory" => $visitors);
			echo(json_encode($json));
		}
	}
	else { // $_REQUEST['Transcripts'] == ''
		$query = '';
		if ($timezone != $_REQUEST['Timezone']) {
			if ($difference != 0) {
				$query = "SELECT *, DATE_ADD(`datetime`, INTERVAL '$hours:$minutes' HOUR_MINUTE) AS `timezone`, ((UNIX_TIMESTAMP(`refresh`) - UNIX_TIMESTAMP(`datetime`))) AS `sitetime`, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`))) AS `pagetime` FROM " . $table_prefix . "requests WHERE `datetime` > '$from' AND `datetime` < '$to' AND `status` = '0' AND `id` > '{$_REQUEST['ID']}' ORDER BY `request`";
			}
		}
		if ($query == '') {		
				$query = "SELECT *, `datetime` AS `timezone`, ((UNIX_TIMESTAMP(`refresh`) - UNIX_TIMESTAMP(`datetime`))) AS `sitetime`, ((UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`))) AS `pagetime` FROM " . $table_prefix . "requests WHERE `datetime` > '$from' AND `datetime` < '$to' AND `status` = '0' AND `id` > '{$_REQUEST['ID']}' ORDER BY `request`";
		}
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
?>
<VisitorHistory xmlns="urn:LiveHelp">
<?php
			while ($row) {
				if (is_array($row)) {
					$id = $row['id'];
					$ipaddress = $row['ipaddress'];
					$useragent = $row['useragent'];
					$resolution = $row['resolution'];
					$city = $row['city'];
					$state = $row['state'];
					$country = $row['country'];
					$datetime = $row['timezone'];
					$pagetime = $row['pagetime'];
					$sitetime = $row['sitetime'];
					$url = $row['url'];
					$title = $row['title'];
					$referer = $row['referrer'];
					$path = $row['path'];
					
					$pages = explode('; ', $path);
					$total = count($path);
					if ($total > 20) {
						$path = '';
						for ($i = $total - 20; $i < $total; $i++) {
							$path .= $pages[$i] . '; ';
						}
					}
?>
<Visitor ID="<?php echo($id); ?>">
<Hostname><?php echo(xmlelementinvalidchars($ipaddress)); ?></Hostname>
<UserAgent><?php echo(xmlelementinvalidchars($useragent)); ?></UserAgent>
<Resolution><?php echo(xmlelementinvalidchars($resolution)); ?></Resolution>
<Country City="<?php echo(xmlattribinvalidchars($city)); ?>" State="<?php echo(xmlattribinvalidchars($state)); ?>"><?php echo(xmlelementinvalidchars($country)); ?></Country>
<Date><?php echo(xmlelementinvalidchars($datetime)); ?></Date>
<PageTime><?php echo($pagetime); ?></PageTime>
<SiteTime><?php if (!isset($_REQUEST['Version'])) { echo($datetime); } else { echo($sitetime); } ?></SiteTime>
<CurrentPage><?php echo(xmlelementinvalidchars($url)); ?></CurrentPage>
<CurrentPageTitle><?php echo(xmlelementinvalidchars($title)); ?></CurrentPageTitle>
<Referrer><?php echo(xmlelementinvalidchars($referer)); ?></Referrer>
<PagePath><?php echo(xmlelementinvalidchars($path)); ?></PagePath>
</Visitor>
<?php
					$row = $SQL->selectnext();
				}
			}
?>
</VisitorHistory>
<?php
		}
		else {
?>
<VisitorHistory xmlns="urn:LiveHelp"/>
<?php
		}
	}	
	
}

function Send() {

	global $_OPERATOR;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Message'])){ $_REQUEST['Message'] = ''; }
	if (!isset($_REQUEST['Staff'])){ $_REQUEST['Staff'] = ''; }
	if (!isset($_REQUEST['Type'])){ $_REQUEST['Type'] = ''; }
	if (!isset($_REQUEST['Name'])){ $_REQUEST['Name'] = ''; }
	if (!isset($_REQUEST['Content'])){ $_REQUEST['Content'] = ''; }
	if (!isset($_REQUEST['Status'])){ $_REQUEST['Status'] = 1; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }
	
	$result = '0';
	
	// Check if the message contains any content else return headers
	if (empty($_REQUEST['Message']) && empty($_REQUEST['Type']) && empty($_REQUEST['Name']) && empty($_REQUEST['Content'])) {
		if ($_REQUEST['Format'] == 'xml') {	
			header('Content-type: text/xml; charset=utf-8');
			echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<SendMessage xmlns="urn:LiveHelp"/>
<?php
			exit();
		} else {
?>
{"SendMessage": null}
<?php
		}
	}
	

	if ($_REQUEST['Type'] != '' && $_REQUEST['Name'] != '' && $_REQUEST['Content'] != '') {
	
		// Strip the slashes because slashes will be added to whole string
		$type = $_REQUEST['Type'];
		$name = stripslashes(trim($_REQUEST['Name']));
		$content = stripslashes(trim($_REQUEST['Content']));
		$operator = '';
		
		switch ($type) {
			case 'LINK':
			case 'HYPERLINK':
				$type = 2;
				$command = addslashes($name . " \r\n " . $content);
				break;
			case 'IMAGE':
				$type = 3;
				$command = addslashes($name . " \r\n " . $content);
				break;
			case 'PUSH':
				$type = 4;
				$command = addslashes($content);
				$operator = addslashes('The ' . $name . ' has been PUSHed to the visitor.');
				break;
			case 'JAVASCRIPT':
				$type = 5;
				$command = addslashes($content);
				$operator = addslashes('The ' . $name . ' has been sent to the visitor.');
				break;
			case 'FILE':
				$type = 6;
				$command = addslashes($content);
				//$operator = addslashes('The ' . $name . ' has been sent to the visitor.');
				break;
		}
		
		if ($command != '') {
			$query = "INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('" . $_REQUEST['ID'] . "', '', NOW(), '$command', '2', '$type')";
			if ($operator != '') {
				$query .= ", ('" . $_REQUEST['ID'] . "', '', NOW(), '$operator', '2', '-1')";
			}
			$id = $SQL->insertquery($query);
			if ($id != false) {
				$result = '1';
			}
		}
		
	}
	
	// Format the message string
	$message = trim($_REQUEST['Message']);
		
	if (!empty($message)) {
		if (!$_REQUEST['Staff']) {
			// Send messages from POSTed data
			$query = "INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES('" . $_REQUEST['ID'] . "', '" . $_OPERATOR['USERNAME'] . "', NOW(), '" . $_REQUEST['Message'] . "', '1', '" . $_REQUEST['Status'] . "')";
			$id = $SQL->insertquery($query);
			if ($id != false) {
				$result = '1';
			}
		}
		else {
			$query = "INSERT INTO " . $table_prefix . "administration (`user`, `username`, `datetime`, `message`, `align`, `status`) VALUES('" . $_REQUEST['ID'] . "', '" . $_OPERATOR['USERNAME'] . "', NOW(), '" . $_REQUEST['Message'] . "', '1', '" . $_REQUEST['Status'] . "')";
			$id = $SQL->insertquery($query);
			if ($id != false) {
				$result = '1';
			}
		}
	}
	
	if ($_REQUEST['Format'] == 'xml') {	
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<SendMessage xmlns="urn:LiveHelp" Result="<?php echo($result); ?>"></SendMessage>
<?php
	} else {
?>
{"SendMessage": {"Result": <?php echo(json_encode($result)); ?>}}
<?php
	}

}

function EmailChat() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Email'])){ $_REQUEST['Email'] = ''; }

	// Determine EOL
	$server = strtoupper(substr(PHP_OS, 0, 3));
	if ($server == 'WIN') { 
		$eol = "\r\n"; 
	} elseif ($server == 'MAC') { 
		$eol = "\r"; 
	} else { 
		$eol = "\n"; 
	}
	
	// Language
	if (file_exists('../locale/' . LANGUAGE . '/admin.php')) {
		include('../locale/' . LANGUAGE . '/admin.php');
	}
	else {
		include('../locale/en/admin.php');
	}

	$query = "SELECT `username`, `message`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '" . $_REQUEST['ID'] . "' AND `status` <= '3' ORDER BY `datetime`";
	$row = $SQL->selectquery($query);
	$htmlmessages = ''; $textmessages = '';
	while ($row) {
		if (is_array($row)) {
			$username = $row['username'];
			$message = $row['message'];
			$status = $row['status'];
			
			// Remove HTML code
			$message = str_replace('<', '&lt;', $message);
			$message = str_replace('>', '&gt;', $message);
			
			// Operator
			if ($status) {
				$htmlmessages .= '<div style="color:#666666">' . $username . ' says:</div> <div style="margin-left:15px; color:#666666;">' . $message . '</div>'; 
				$textmessages .= $username . ' ' . $_LOCALE['says'] . ':' . $eol . '	' . $message . $eol; 
			}
			// Guest
			if (!$status) {
				$htmlmessages .= '<div>' . $username . ' says:</div> <div style="margin-left: 15px;">' . $message . '</div>'; 
				$textmessages .= $username . ' ' . $_LOCALE['says'] . ':' . $eol . '	' . $message . $eol; 
			}
	
			$row = $SQL->selectnext();
		}
	}

	$htmlmessages = preg_replace("/(\r\n|\r|\n)/", '<br/>', $htmlmessages);
	
	$html = <<<END
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<!--

div, p {
	font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #000000;
}

//-->
</style>
</head>

<body>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$_SETTINGS['LOCALE']}/images/ChatTranscript.gif" width="531" height="79" alt="{$_LOCALE['chattranscript']}" /></p>
<p><strong>{$_LOCALE['chattranscript']}:</strong></p>
<p>$htmlmessages</p>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$_SETTINGS['LOCALE']}/images/LogoSmall.png" width="217" height="52" alt="stardevelop.com" /></p>
</body>
</html>
END;
	
	$email = $_SETTINGS['EMAIL'];
	if (!empty($_REQUEST['Email'])) {
		$email = $_REQUEST['Email'];
	}

	$mail = new PHPMailer(true);
	try {
		$mail->CharSet = 'UTF-8';
		$mail->AddReplyTo($_SETTINGS['EMAIL'], $_SETTINGS['NAME']);
		$mail->AddAddress($email);
		$mail->SetFrom($_SETTINGS['EMAIL']);
		$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['chattranscript'];
		$mail->MsgHTML($html);
		$mail->Send();
		$result = true;
	} catch (phpmailerException $e) {
		trigger_error('Email Error: ' . $e->errorMessage(), E_USER_ERROR); 
		$result = false;
	} catch (Exception $e) {
		trigger_error('Email Error: ' . $e->getMessage(), E_USER_ERROR); 
		$result = false;
	}

}

function Calls() {

	global $SQL;
	global $table_prefix;
	
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Operator'])){ $_REQUEST['Operator'] = ''; }
	if (!isset($_REQUEST['Status'])){ $_REQUEST['Status'] = ''; }
	
	if ($_REQUEST['ID'] != '' && $_REQUEST['Status'] != '') {
			$query = "UPDATE " . $table_prefix . "callback SET `operator` = '" . $_REQUEST['Operator'] . "', `status` = '" . $_REQUEST['Status'] . "' WHERE `id` = '" . $_REQUEST['ID'] . "'";
			$SQL->updatequery($query);
	}
	

	$query = "SELECT * FROM " . $table_prefix . "callback WHERE `status` <> '5' ORDER BY `datetime`";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
	
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Calls xmlns="urn:LiveHelp" IPAddress="<?php echo(ip_address()); ?>">
<?php
		while ($row) {
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$datetime = $row['datetime'];
				$email = $row['email'];
				$country = $row['country'];
				$timezone = $row['timezone'];
				$dial = $row['dial'];
				$telephone = $row['telephone'];
				$message = $row['message'];
				$operator = $row['operator'];
				$status = $row['status'];
?>
<Call ID="<?php echo($id); ?>" Name="<?php echo(xmlattribinvalidchars($name)); ?>" Email="<?php echo(xmlattribinvalidchars($email)); ?>" Operator="<?php echo(xmlattribinvalidchars($operator)); ?>" Status="<?php echo(xmlattribinvalidchars($status)); ?>">
<Datetime><?php echo($datetime); ?></Datetime>
<Country><?php echo(xmlelementinvalidchars($country)); ?></Country>
<Timezone><?php echo(xmlelementinvalidchars($timezone)); ?></Timezone>
<Telephone Prefix="<?php echo(xmlattribinvalidchars($dial)); ?>"><?php echo(xmlelementinvalidchars($telephone)); ?></Telephone>
<Message><?php echo(xmlelementinvalidchars($message)); ?></Message>
</Call>
<?php
		
				$row = $SQL->selectnext();
			}
		}	
?>
</Calls>
<?php
	} else {
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Calls xmlns="urn:LiveHelp"/>
<?php
	}
	
	
}

function Upgrade() {

	global $SQL;
	global $table_prefix;

	// Automatic Upgrade
	$query = "SELECT `value` FROM `" . $table_prefix . "settings` WHERE `name` = 'ServerVersion';";
	$row = $SQL->selectquery($query);
	if (!is_array($row)) {
	
		// Upgrade database to Live Help Server Software 3.30
		if (file_exists('../install/mysql.schema.3.30.upgrade.txt')) {
		
			$sqlfile = file('../install/mysql.schema.3.30.upgrade.txt');
			if (is_array($sqlfile)) {
				$query = '';
				foreach ($sqlfile as $key => $line) {
					if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
						$line = str_replace('prefix_', $table_prefix, $line);
						$query .= trim($line); unset($line);
						if (strpos($query, ';') !== false) {
							if (function_exists('mysql_connect')) {
								$result = $SQL->miscquery($query);
								if ($result == false) { return '3.28'; }
							}
							$query = '';
						}
					}
				}
				unset($sqlfile);
			}
			
			$query = "INSERT INTO `" . $table_prefix . "settings` (`name`, `value`) VALUES ('ServerVersion', '3.30');";
			$SQL->insertquery($query);
			return Upgrade();
		
		}
		
	} else {
		// Check Database Schema Version
		$version = $row['value'];
		if ($version == '3.30') {
			// Upgrade database to Live Help Server Software 3.50
			if (file_exists('../install/mysql.schema.3.50.upgrade.txt')) {
			
				$sqlfile = file('../install/mysql.schema.3.50.upgrade.txt');
				if (is_array($sqlfile)) {
					$query = '';
					foreach ($sqlfile as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $table_prefix, $line);
							$query .= trim($line); unset($line);
							if (strpos($query, ';') !== false) {
								if (function_exists('mysql_connect')) {
									$result = $SQL->miscquery($query);
									if ($result == false) { return '3.30'; }
								}
								$query = '';
							}
						}
					}
					unset($sqlfile);
				}
				
				$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.50' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
				$SQL->updatequery($query);
				return Upgrade();
			
			}
		} elseif ($version == '3.50') {
		
			$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.60' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
			$SQL->updatequery($query);
			return '3.60';
			
		} elseif ($version == '3.60') {
			// Upgrade database to Live Help Server Software 3.70
			if (file_exists('../install/mysql.schema.3.70.upgrade.txt')) {
			
				$sqlfile = file('../install/mysql.schema.3.70.upgrade.txt');
				if (is_array($sqlfile)) {
					$query = '';
					foreach ($sqlfile as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $table_prefix, $line);
							$query .= trim($line); unset($line);
							if (strpos($query, ';') !== false) {
								if (function_exists('mysql_connect')) {
									$result = $SQL->miscquery($query);
									if ($result == false) { return '3.60'; }
								}
								$query = '';
							}
						}
					}
					unset($sqlfile);
				}
				
				$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.70' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
				$SQL->updatequery($query);
				return Upgrade();
			}
		} elseif ($version == '3.70') {
			// Upgrade database to Live Help Server Software 3.80
			if (file_exists('../install/mysql.schema.3.80.upgrade.txt')) {
			
				$sqlfile = file('../install/mysql.schema.3.80.upgrade.txt');
				if (is_array($sqlfile)) {
					$query = '';
					foreach ($sqlfile as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $table_prefix, $line);
							$query .= trim($line); unset($line);
							if (strpos($query, ';') !== false) {
								if (function_exists('mysql_connect')) {
									$result = $SQL->miscquery($query);
									if ($result == false) { return '3.70'; }
								}
								$query = '';
							}
						}
					}
					unset($sqlfile);
				}
				
				$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.80' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
				$SQL->updatequery($query);
				return Upgrade();
			}
		} elseif ($version == '3.80') {
			// Upgrade database to Live Help Server Software 3.90
			if (file_exists('../install/mysql.schema.3.90.upgrade.txt')) {
			
				$sqlfile = file('../install/mysql.schema.3.90.upgrade.txt');
				if (is_array($sqlfile)) {
					$query = '';
					foreach ($sqlfile as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $table_prefix, $line);
							$query .= trim($line); unset($line);
							if (strpos($query, ';') !== false) {
								if (function_exists('mysql_connect')) {
									$result = $SQL->miscquery($query);
									if ($result == false) { return '3.80'; }
								}
								$query = '';
							}
						}
					}
					unset($sqlfile);
				}
				
				$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.90' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
				$SQL->updatequery($query);
				return '3.90';
			}
		} elseif ($version == '3.90') {
			// Upgrade database to Live Help Server Software 3.90
			if (file_exists('../install/mysql.schema.3.95.upgrade.txt')) {
				
				$sqlfile = file('../install/mysql.schema.3.95.upgrade.txt');
				if (is_array($sqlfile)) {
					$query = '';
					foreach ($sqlfile as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $table_prefix, $line);
							$query .= trim($line); unset($line);
							if (strpos($query, ';') !== false) {
								if (function_exists('mysql_connect')) {
									$result = $SQL->miscquery($query);
									if ($result == false) { return '3.90'; }
								}
								$query = '';
							}
						}
					}
					unset($sqlfile);
				}
				
				// AuthKey Setting
				$key = '';
				$chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}\|;:\'",<.>/?';
				for ($index = 0; $index < 255; $index++) {
					$number = rand(1, strlen($chars));
					$key .= substr($chars, $number - 1, 1);
				}
				$query = sprintf("INSERT INTO `" . $table_prefix . "settings` (`name`, `value`) VALUES('AuthKey', '%s')", $SQL->escape($key));
				$SQL->insertquery($query);
				
				$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '3.95' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
				$SQL->updatequery($query);
				return '3.95';
			}
		}  elseif ($version == '3.95') {

			$query = "UPDATE `" . $table_prefix . "settings` SET `value` = '4.0' WHERE `" . $table_prefix . "settings`.`name` = 'ServerVersion' LIMIT 1;";
			$SQL->updatequery($query);
			return '4.0';
		}
		return $version;

	}
	
	return '3.28';

}

function Responses() {

	global $SQL;
	global $_RESPONSES;
	global $table_prefix;
	
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Operator'])){ $_REQUEST['Operator'] = ''; }
	if (!isset($_REQUEST['Department'])){ $_REQUEST['Department'] = ''; }
	if (!isset($_REQUEST['ResponsesArray'])){ $_REQUEST['ResponsesArray'] = ''; }
	if (!isset($_REQUEST['Name'])){ $_REQUEST['Name'] = ''; }
	if (!isset($_REQUEST['Category'])){ $_REQUEST['Category'] = ''; }
	if (!isset($_REQUEST['Content'])){ $_REQUEST['Content'] = ''; }
	if (!isset($_REQUEST['Type'])){ $_REQUEST['Type'] = ''; }
	if (!isset($_REQUEST['Tags'])){ $_REQUEST['Tags'] = ''; }
	if (!isset($_REQUEST['Cached'])){ $_REQUEST['Cached'] = ''; }
	if (!isset($_REQUEST['Format'])){ $_REQUEST['Format'] = 'xml'; }

	if ($_REQUEST['ResponsesArray'] != '') {
		$lines = preg_split("/(\r\n|\r|\n)/", trim($_REQUEST['ResponsesArray']));

		// Add Responses
		foreach ($lines as $key => $line) {

			$id = ''; $name = ''; $category = ''; $content = ''; $type = ''; $tags = '';
			list($id, $name, $category, $content, $type, $tags) = explode('|', $line);
			
			// Add / Update Response
			if (!empty($name) && !empty($content)) {
				if (!empty($id)) {
					$query = "SELECT * FROM " . $table_prefix . "responses WHERE `id` = '$id' LIMIT 1";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$query = "UPDATE " . $table_prefix . "responses SET `name` = '$name', `category` = '$category', `type` = '$type', `content` = '$content', `tags` = '$tags', `datetime` = NOW() WHERE `id` = '$id'";
						$result = $SQL->updatequery($query);
					}
				}
				else {
					$query = "INSERT INTO " . $table_prefix . "responses(`name`, `datetime`, `category`, `type`, `content`, `tags`) VALUES('$name', NOW(), '$category', '$type', '$content', '$tags')";
					$result = $SQL->insertquery($query);
				}
			}
			
		}
	} else if (!empty($_REQUEST['Name']) && !empty($_REQUEST['Content']) && !empty($_REQUEST['Type'])) {
		$id = $_REQUEST['ID'];
		$name = $_REQUEST['Name'];
		$category = $_REQUEST['Category'];
		$content = $_REQUEST['Content'];
		$type = $_REQUEST['Type'];
		$tags = $_REQUEST['Tags'];

		// Add / Update Response
		if (!empty($id)) {
			$query = "SELECT * FROM " . $table_prefix . "responses WHERE `id` = '$id' LIMIT 1";
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$query = "UPDATE " . $table_prefix . "responses SET `name` = '$name', `category` = '$category', `type` = '$type', `content` = '$content', `tags` = '$tags', `datetime` = NOW() WHERE `id` = '$id'";
				$result = $SQL->updatequery($query);
			}
		}
		else {
			$query = "INSERT INTO " . $table_prefix . "responses(`name`, `datetime`, `category`, `type`, `content`, `tags`) VALUES('$name', NOW(), '$category', '$type', '$content', '$tags')";
			$result = $SQL->insertquery($query);
		}
	}
	
	if (!empty($_REQUEST['ID']) && empty($_REQUEST['Name']) && empty($_REQUEST['Content']) && empty($_REQUEST['Type'])) {
		$id = $_REQUEST['ID'];
		$query = "DELETE FROM " . $table_prefix . "responses WHERE `id` = '$id' LIMIT 1";
		$SQL->deletequery($query);
	}
	
	$query = "SELECT * FROM " . $table_prefix . "responses ORDER BY `type` , `category`";
	if ($_REQUEST['Cached'] != '') {
		$query = "SELECT * FROM " . $table_prefix . "responses WHERE `datetime` > '" . $_REQUEST['Cached'] . "' ORDER BY `type` , `category`";
	}
	$rows = $SQL->selectall($query);

	if ($_REQUEST['Format'] == 'json') {
		header('Content-type: application/json; charset=utf-8');

		$json = array();
		$text = array();
		$hyperlink = array();
		$image = array();
		$push = array();
		$javascript = array();
		$lastupdated = '';
		
		if ($rows != false && count($rows) > 0) {
		
			foreach($rows as $key => $row) {
			
				$id = $row['id'];
				$name = $row['name'];
				$datetime = $row['datetime'];
				$content = $row['content'];
				$category = $row['category'];
				$type = (int)$row['type'];
				$tags = $row['tags'];
				if ($tags != '') {
					$tags = explode(';', $tags);
				} else {
					$tags = array();
				}
				
				// Last Updated
				if ($datetime == '') { $lastupdated = $datetime; }
				if (strtotime($datetime) - strtotime($lastupdated) > 0) {
					$lastupdated = $datetime;
				}
				
				switch($type) {
					case '1': // Text
						$text[] = array('ID' => $id, 'Name' => $name, 'Content' => $content, 'Category' => $category, 'Type' => $type, 'Tags' => $tags);
						break;
					case '2': // Hyperlink
						$hyperlink[] = array('ID' => $id, 'Name' => $name, 'Content' => $content, 'Category' => $category, 'Type' => $type, 'Tags' => $tags);
						break;
					case '3': // Image
						$image[] = array('ID' => $id, 'Name' => $name, 'Content' => $content, 'Category' => $category, 'Type' => $type, 'Tags' => $tags);
						break;
					case '4': // PUSH
						$push[] = array('ID' => $id, 'Name' => $name, 'Content' => $content, 'Category' => $category, 'Type' => $type, 'Tags' => $tags);
						break;
					case '5': // JavaScript
						$javascript[] = array('ID' => $id, 'Name' => $name, 'Content' => $content, 'Category' => $category, 'Type' => $type, 'Tags' => $tags);
						break;
				}
			}
			
			$json['Responses'] = array('LastUpdated' => $lastupdated,'Text' => $text, 'Hyperlink' => $hyperlink, 'Image' => $image, 'PUSH' => $push, 'JavaScript' => $javascript);
			
			echo(json_encode($json));
			exit();
			
		} else {
		
			if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 304 Not Modified'); } else { header('Status: 304 Not Modified'); }
			exit();
		}
		
	}
	
	$text = array();
	$hyperlink = array();
	$image = array();
	$push = array();
	$javascript = array();
	if ($rows != false && count($rows) > 0) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$type = $row['type'];
				switch($type) {
					case '1': // Text
						$text[] = $row;
						break;
					case '2': // Hyperlink
						$hyperlink[] = $row;
						break;
					case '3': // Image
						$image[] = $row;
						break;
					case '4': // PUSH
						$push[] = $row;
						break;
					case '5': // JavaScript
						$javascript[] = $row;
						break;
				}
			}
		}
	}
	
	header('Content-type: text/xml; charset=utf-8');
	echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");

?>
<Responses xmlns="urn:LiveHelp">
  <Text>
<?php

	if (is_array($text)) {
		while (count($text) > 0) {
			$row = $text[count($text) - 1];
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$content = $row['content'];
				$category = $row['category'];
				$type = $row['type'];

				if ($category != '') {
?>
	<Category Name="<?php echo(xmlattribinvalidchars($category)); ?>">
<?php
					for ($i = count($text) - 1; $i >= 0; $i--) {
						$row = $text[$i];
						if ($row['category'] == $category) {
							$id = $row['id'];
							$name = $row['name'];
							$content = $row['content'];
							$type = $row['type'];
?>
		<Response ID="<?php echo($id); ?>">
		  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
		  <Tags>
<?php
							$tags = explode(';', $row['tags']);
							if (count($tags) > 0) {
								foreach ($tags as $key => $tag) {
?>
			<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
								}
							}
?>
		  </Tags>
		</Response>
<?php
							array_splice($text, $i, 1);
						}
					}
?>
	</Category>
<?php
				} else {
?>
	<Response ID="<?php echo($id); ?>">
	  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
	  <Tags>
<?php
						$tags = explode(';', $row['tags']);
						if (count($tags) > 0) {
							foreach($tags as $key => $tag) {
?>
		<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
							}
						}
?>
	  </Tags>
	</Response>
<?php
					$popped = array_pop($text);
				}
			} else {
				$popped = array_pop($text);
			}
		}
	}
?>
  </Text>
  <Hyperlink>
<?php
	if (is_array($hyperlink)) {
		while (count($hyperlink) > 0) {
			$row = $hyperlink[count($hyperlink) - 1];
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$content = $row['content'];
				$category = $row['category'];
				$type = $row['type'];
				
				if ($category != '') {
?>
	<Category Name="<?php echo(xmlattribinvalidchars($category)); ?>">
<?php
					for($i = count($hyperlink) - 1; $i >= 0; $i--) {
						$row = $hyperlink[$i];
						if ($row['category'] == $category) {
							$id = $row['id'];
							$name = $row['name'];
							$content = $row['content'];
							$type = $row['type'];
?>
		<Response ID="<?php echo($id); ?>">
		  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
		  <Tags>
<?php
							$tags = explode(';', $row['tags']);
							if (count($tags) > 0) {
								foreach($tags as $key => $tag) {
?>
			<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
								}
							}
?>
		  </Tags>
		</Response>
<?php
							array_splice($hyperlink, $i, 1);
						}
					}
?>
	</Category>
<?php
				} else {
?>
	<Response ID="<?php echo($id); ?>">
	  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
	  <Tags>
<?php
					$tags = explode(';', $row['tags']);
					if (count($tags) > 0) {
						foreach($tags as $key => $tag) {
?>
		<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
						}
					}
?>
	  </Tags>
	</Response>
<?php
					$popped = array_pop($hyperlink);
				}
			} else {
				$popped = array_pop($hyperlink);
			}
		}
	}
?>
  </Hyperlink>
  <Image>
<?php
	if (is_array($image)) {
		while (count($image) > 0) {
			$row = $image[count($image) - 1];
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$content = $row['content'];
				$category = $row['category'];
				$type = $row['type'];
				
				if ($category != '') {
?>
	<Category Name="<?php echo(xmlattribinvalidchars($category)); ?>">
<?php
					for($i = count($image) - 1; $i >= 0; $i--) {
						$row = $image[$i];
						if ($row['category'] == $category) {
							$id = $row['id'];
							$name = $row['name'];
							$content = $row['content'];
							$type = $row['type'];
?>
		<Response ID="<?php echo($id); ?>">
		  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
		  <Tags>
<?php
							$tags = explode(';', $row['tags']);
							if (count($tags) > 0) {
								foreach ($tags as $key => $tag) {
?>
			<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
								}
							}
?>
		  </Tags>
		</Response>
<?php
							array_splice($image, $i, 1);
						}
					}
?>
	</Category>
<?php
				} else {
?>
	<Response ID="<?php echo($id); ?>">
	  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
	  <Tags>
<?php
					$tags = explode(';', $row['tags']);
					if (count($tags) > 0) {
						foreach($tags as $key => $tag) {
?>
		<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
						}
					}
?>
	  </Tags>
	</Response>
<?php
					$popped = array_pop($image);
				}
			} else {
				$popped = array_pop($image);
			}
		}
	}
?>
  </Image>
  <PUSH>
<?php
	if (is_array($push)) {
		while (count($push) > 0) {
			$row = $push[count($push) - 1];
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$content = $row['content'];
				$category = $row['category'];
				$type = $row['type'];
				
				if ($category != '') {
?>
	<Category Name="<?php echo(xmlattribinvalidchars($category)); ?>">
<?php
					for($i = count($push) - 1; $i >= 0; $i--) {
						$row = $push[$i];
						if ($row['category'] == $category) {
							$id = $row['id'];
							$name = $row['name'];
							$content = $row['content'];
							$type = $row['type'];
?>
		<Response ID="<?php echo($id); ?>">
		  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
		  <Tags>
<?php
							$tags = explode(';', $row['tags']);
							if (count($tags) > 0) {
								foreach($tags as $key => $tag) {
?>
			<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
								}
							}
?>
		  </Tags>
		</Response>
<?php
							array_splice($push, $i, 1);
						}
					}
?>
	</Category>
<?php
				} else {
?>
	<Response ID="<?php echo($id); ?>">
	  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
	  <Tags>
<?php
					$tags = explode(';', $row['tags']);
					if (count($tags) > 0) {
						foreach ($tags as $key => $tag) {
?>
		<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
						}
					}
?>
	  </Tags>
	</Response>
<?php
					$popped = array_pop($push);
				}
			} else {
				$popped = array_pop($push);
			}
		}
	}
?>
  </PUSH>
  <JavaScript>
<?php
	if (is_array($javascript)) {
		while (count($javascript) > 0) {
			$row = $javascript[count($javascript) - 1];
			if (is_array($row)) {
				$id = $row['id'];
				$name = $row['name'];
				$content = $row['content'];
				$category = $row['category'];
				$type = $row['type'];
				
				if ($category != '') {
?>
	<Category Name="<?php echo(xmlattribinvalidchars($category)); ?>">
<?php
					for($i = count($javascript) - 1; $i >= 0; $i--) {
						$row = $javascript[$i];
						if ($row['category'] == $category) {
							$id = $row['id'];
							$name = $row['name'];
							$content = $row['content'];
							$type = $row['type'];
?>
		<Response ID="<?php echo($id); ?>">
		  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
		  <Tags>
<?php
							$tags = explode(';', $row['tags']);
							if (count($tags) > 0) {
								foreach($tags as $key => $tag) {
?>
			<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
								}
							}
?>
		  </Tags>
		</Response>
<?php
							array_splice($javascript, $i, 1);
						}
					}
?>
	</Category>
<?php
				} else {
?>
	<Response ID="<?php echo($id); ?>">
	  <Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	  <Content><?php echo(xmlelementinvalidchars($content)); ?></Content>
	  <Tags>
<?php
					$tags = explode(';', $row['tags']);
					if (count($tags) > 0) {
						foreach($tags as $key => $tag) {
?>
		<Tag><?php echo(xmlelementinvalidchars($tag)); ?></Tag>
<?php
						}
					}
?>
	  </Tags>
	</Response>
<?php
					$popped = array_pop($javascript);
				}
			} else {
				$popped = array_pop($javascript);
			}
		}
	}
?>
  </JavaScript>
<?php
	if (isset($_RESPONSES) && is_array($_RESPONSES)) {
?>
  <Other>
<?php
		foreach ($_RESPONSES as $key => $response) {
			
			// Output Knowledge Base Responses
			$custom = @file_get_contents($response);
			if ($custom !== false) {
				$custom = str_replace('<?xml version="1.0" encoding="utf-8"?>', '', $custom);
				if (!empty($custom)) {
					echo($custom);
				}
			}
		}
?>
  </Other>
<?php
	}


?>
</Responses>
<?php

}

function ResetPassword() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['Username'])){ $_REQUEST['Username'] = ''; }
	if (!isset($_REQUEST['Email'])){ $_REQUEST['Email'] = ''; }

	header('Content-type: text/xml; charset=utf-8');

	if (file_exists('../locale/' . LANGUAGE . '/admin.php')) {
		include('../locale/' . LANGUAGE . '/admin.php');
	}
	else {
		include('../locale/en/admin.php');
	}

	$password = '';
	$chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	for ($index = 1; $index <= 10; $index++) {
		$number = rand(1, strlen($chars));
		$password .= substr($chars, $number - 1, 1);
	}
	
	// Change Password
	if (function_exists('hash') && in_array('sha512', hash_algos())) {
		$hash = hash('sha512', $password);
	} else {
		$hash = sha1($password);
	}
	
	// Reset Password
	$query = sprintf("UPDATE " . $table_prefix . "users SET `password` = '%s' WHERE `username` LIKE BINARY '%s' AND `email` = '%s'", $hash, $SQL->escape($_REQUEST['Username']), $SQL->escape($_REQUEST['Email']));
	$result = $SQL->updatequery($query);
	
	// Server
	$protocols = array('http://', 'https://');
	$server = str_replace($protocols, '', $_SETTINGS['URL']);
	
	if ($result !== false) {
		
		$html = <<<END
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<!--
div, p {
	font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #000000;
}
//-->
</style>
</head>

<body>
<div><img src="{$_SETTINGS['URL']}/livehelp/locale/en/images/PasswordReset.gif" width="531" height="79" alt="Password Reset" /></div>
<div><strong>{$_LOCALE['resetpassword']}:</strong></div>
<div></div><br/>
<div>{$_LOCALE['server']}: $server</div>
<div>{$_LOCALE['username']}: {$_REQUEST['Username']}</div>
<div>{$_LOCALE['password']}: $password</div><br/>
<div><img src="{$_SETTINGS['URL']}/livehelp/locale/en/images/LogoSmall.png" width="217" height="52" alt="stardevelop.com" /></div>
</body>
</html>
END;
		
		$mail = new PHPMailer(true);
		try {
			$mail->CharSet = 'UTF-8';
			$mail->AddReplyTo($_SETTINGS['EMAIL']);
			$mail->AddAddress($_REQUEST['Email']);
			$mail->SetFrom($_SETTINGS['EMAIL'], $_SETTINGS['NAME']);
			$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['resetpassword'];
			$mail->MsgHTML($html);
			$mail->Send();
			$result = true;
		} catch (phpmailerException $e) {
			trigger_error('Email Error: ' . $e->errorMessage(), E_USER_ERROR); 
			$result = false;
		} catch (Exception $e) {
			trigger_error('Email Error: ' . $e->getMessage(), E_USER_ERROR); 
			$result = false;
		}
		
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<ResetPassword xmlns="urn:LiveHelp" Value="<?php echo($result); ?>"></ResetPassword>
<?php
		
	}
	else {
		if (strpos(php_sapi_name(), 'cgi') === false) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }	
	}

}

function Activity() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	global $table_prefix;

	if (!isset($_REQUEST['Record'])){ $_REQUEST['Record'] = '0'; }
	if (!isset($_REQUEST['Total'])){ $_REQUEST['Total'] = '500'; }
	if (!isset($_REQUEST['Timezone'])){ $_REQUEST['Timezone'] = ''; }

	$timezone = $_SETTINGS['SERVERTIMEZONE']; $from = ''; $to = '';
	if ($timezone != $_REQUEST['Timezone']) {
	
		$sign = substr($_REQUEST['Timezone'], 0, 1);
		$hours = substr($_REQUEST['Timezone'], -4, 2);
		$minutes = substr($_REQUEST['Timezone'], -2, 2);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$local = $sign . $hours . $minutes;
	
		$sign = substr($timezone, 0, 1);
		$hours = substr($timezone, 1, 2);
		$minutes = substr($timezone, 3, 4);
		if ($minutes != 0) { $minutes = ($minutes / 0.6); }
		$remote = $sign . $hours . $minutes;
	
		// Convert to eg. +/-0430 format
		$hours = substr(sprintf("%04d", $local - $remote), 0, 2);
		$minutes = substr(sprintf("%04d", $local - $remote), 2, 4);
		if ($minutes != 0) { $minutes = ($minutes * 0.6); }
		$difference = ($hours * 60 * 60) + ($minutes * 60);

	}

	header('Content-type: text/xml; charset=utf-8');
	
	$query = '';
	if ($timezone != $_REQUEST['Timezone']) {
		if ($difference != 0) {
			$query = "SELECT `id`, `user`, `chat`, `username`, DATE_ADD(`datetime`, INTERVAL '$hours:$minutes' HOUR_MINUTE) AS `datetime`, `activity`, `duration`, `type`, `status` FROM " . $table_prefix . "activity WHERE (`user` <> {$_OPERATOR['ID']} OR `status` = 0) AND `id` > {$_REQUEST['Record']} ORDER BY `id` DESC LIMIT {$_REQUEST['Total']}";
		}
	}
	if (empty($query)) {
		$query = "SELECT * FROM " . $table_prefix . "activity WHERE (`user` <> {$_OPERATOR['ID']} OR `status` = 0) AND `id` > {$_REQUEST['Record']} ORDER BY `id` DESC LIMIT {$_REQUEST['Total']}";
	}

	if (isset($_REQUEST['Update'])) {
		if ($timezone != $_REQUEST['Timezone']) {
			if ($difference != 0) {
				$query = "SELECT `id`, `user`, `chat`, `username`, DATE_ADD(`datetime`, INTERVAL '$hours:$minutes' HOUR_MINUTE) AS `datetime`, `activity`, `duration`, `type`, `status` FROM " . $table_prefix . "activity WHERE (`user` <> {$_OPERATOR['ID']} OR `status` = 0) AND `id` < {$_REQUEST['Update']} ORDER BY `id` DESC LIMIT {$_REQUEST['Total']}";
			}
		}
		if (empty($query)) {
			$query = "SELECT * FROM " . $table_prefix . "activity WHERE (`user` <> {$_OPERATOR['ID']} OR `status` = 0) AND `id` < {$_REQUEST['Update']} ORDER BY `id` DESC LIMIT {$_REQUEST['Total']}";
		}
	}
	$rows = $SQL->selectall($query);
	
	echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Activity xmlns="urn:LiveHelp">
<?php
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$id = $row['id'];
				$user = $row['user'];
				$chat = $row['chat'];
				$username = xmlattribinvalidchars($row['username']);
				$datetime = xmlattribinvalidchars($row['datetime']);
				$activity = xmlelementinvalidchars($row['activity']);
				$duration = $row['duration'];
				$type = $row['type'];
				$status = $row['status'];
				
				// User
				// Visitor or Operator ID
				// See Status for ID type
				
				// Activity Type
				// 1: Signed In
				// 2: Signed Out
				// 3: Changed Status Hidden
				// 4: Changed Status Online
				// 5: Changed Status Be Right Back
				// 6: Changed Status Away
				// 7: Accepted Chat
				// 8: Requested Live Help
				// 9: Closed Chat
				
				// Status
				// 0: Visitor / Guest
				// 1: Operator
				
				// Accepted / Chat Closed
				if ($type == 7 || $type == 9) {
					
					if ($type == 7) {
						$query = "SELECT `request`, `active`, `email` FROM " . $table_prefix . "chats WHERE `id` = $chat LIMIT 1";
					} else {
						$query = "SELECT `request`, `active`, `email` FROM " . $table_prefix . "chats WHERE `id` = $user LIMIT 1";
					}
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$request = $row['request'];
						$active = $row['active'];
						$email = xmlattribinvalidchars($row['email']);
						
						$custom = '';
						$reference = '';
						
						// Visitor Session
						$query = sprintf("SELECT `id` FROM `" . $table_prefix . "requests` AS `requests` WHERE `id` = '%d' LIMIT 1", $request);
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$request = $row['id'];
							
							// Integration
							$query = sprintf("SELECT * FROM " . $table_prefix . "custom WHERE `request` = '%d'", $request);
							$integration = $SQL->selectquery($query);
							if (is_array($integration)) {
								$custom = $integration['custom'];
								$reference = $integration['reference'];
							}
							
						}
						
						// Accepted Chat
						if ($type == 7) {
							$query = "SELECT `firstname`, `lastname` FROM " . $table_prefix . "users WHERE `id` = $user LIMIT 1";
							$row = $SQL->selectquery($query);
							if (is_array($row)) {
								if (!empty($row['lastname'])) {
									$operator = $row['firstname'] . ' ' . $row['lastname'];
								} else {
									$operator = $row['firstname'];
								}
?>
<Item ID="<?php echo($id); ?>" User="<?php echo($user); ?>" Session="<?php echo($chat); ?>" Request="<?php echo($request); ?>" Active="<?php echo($active); ?>" Operator="<?php echo($operator); ?>" Username="<?php echo($username); ?>" Datetime="<?php echo($datetime); ?>" Email="<?php echo($email); ?>" Type="<?php echo($type); ?>" Status="<?php echo($status); ?>" Duration="<?php echo($duration); ?>" Custom="<?php echo($custom); ?>" Reference="<?php echo($reference); ?>"><?php echo($activity); ?></Item>
<?php
							}
						} else {
?>
<Item ID="<?php echo($id); ?>" User="<?php echo($user); ?>" Session="<?php echo($chat); ?>" Request="<?php echo($request); ?>" Active="<?php echo($active); ?>" Username="<?php echo($username); ?>" Datetime="<?php echo($datetime); ?>" Email="<?php echo($email); ?>" Type="<?php echo($type); ?>" Status="<?php echo($status); ?>" Duration="<?php echo($duration); ?>" Custom="<?php echo($custom); ?>" Reference="<?php echo($reference); ?>"><?php echo($activity); ?></Item>
<?php
						}
						continue;
					}
				}
?>
<Item ID="<?php echo($id); ?>" User="<?php echo($user); ?>" Username="<?php echo($username); ?>" Datetime="<?php echo($datetime); ?>" Type="<?php echo($type); ?>" Status="<?php echo($status); ?>"><?php echo($activity); ?></Item>
<?php
			}
		}
	}

?>
</Activity>
<?php
	
}

?>