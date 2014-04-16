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

if (!isset($_REQUEST['JSON'])){ $_REQUEST['JSON'] = ''; }

function strbytes($str) { 
	
	// Number of characters in string 
	$strlen_var = strlen($str); 
	
	// # Bytes
	$d = 0; 
  
	/* 
	* Iterate over every character in the string, 
	* escaping with a slash or encoding to UTF-8 where necessary 
	*/
	for ($c = 0; $c < $strlen_var; ++$c) { 
	  
		$ord_var_c = ord($str{$d});
		if (($ord_var_c >= 0x20) && ($ord_var_c <= 0x7F)) {
			// characters U-00000000 - U-0000007F (same as ASCII) 
			$d++;
		} else if (($ord_var_c & 0xE0) == 0xC0) {
			// characters U-00000080 - U-000007FF, mask 110XXXXX 
			// see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8 
			$d+=2;
		} else if (($ord_var_c & 0xF0) == 0xE0) {
			// characters U-00000800 - U-0000FFFF, mask 1110XXXX 
			// see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8 
			$d+=3;
		} else if (($ord_var_c & 0xF8) == 0xF0) { 
			// characters U-00010000 - U-001FFFFF, mask 11110XXX 
			// see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8 
			$d+=4;
		} else if (($ord_var_c & 0xFC) == 0xF8) {
			// characters U-00200000 - U-03FFFFFF, mask 111110XX 
			// see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8 
			$d+=5;
		} else if (($ord_var_c & 0xFE) == 0xFC) {
			// characters U-04000000 - U-7FFFFFFF, mask 1111110X 
			// see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8 
			$d+=6;
		} else {
			$d++;
		}
	}
  
	return $d; 
}

ignore_user_abort(true);


if (!isset($_REQUEST['STAFF'])){ $_REQUEST['STAFF'] = ''; }
if (!isset($_REQUEST['MESSAGE'])){ $_REQUEST['MESSAGE'] = ''; }
if (!isset($_REQUEST['RESPONSE'])){ $_REQUEST['RESPONSE'] = ''; }
if (!isset($_REQUEST['COMMAND'])){ $_REQUEST['COMMAND'] = ''; }
if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }

$id = intval($_REQUEST['ID']);
$staff = $_REQUEST['STAFF'];
$message = trim($_REQUEST['MESSAGE']);
$response = trim($_REQUEST['RESPONSE']);
$command = intval(trim($_REQUEST['COMMAND']));

// Check if the message contains any content else return headers
if (empty($message) && empty($response) && empty($command)) { exit(); }

if (isset($_COOKIE['LiveHelpOperator']) && !empty($id) && $id > 0) {
	
	$cookie = new Cookie();
	$session = $cookie->decode($_COOKIE['LiveHelpOperator']);
	
	$operator = intval($session['OPERATORID']);
	$authentication = $session['AUTHENTICATION'];
	$language = $session['LANGUAGE'];
	
	if (!empty($operator) && $operator > 0 && !empty($authentication)) {
	
		$query = sprintf("SELECT `username` FROM " . $table_prefix . "users WHERE `id` = '%d' AND `password` = '%s' LIMIT 1", $SQL->escape($operator), $SQL->escape($authentication));
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$username = $row['username'];
			
			if (!empty($message)) {
				// Send messages from POSTed data
				if ($staff) {
					$query = sprintf("INSERT INTO " . $table_prefix . "administration (`user`, `username`, `datetime`, `message`, `align`, `status`) VALUES('%d', '%s', NOW(), '%s', '1', '1')", $SQL->escape($id), $SQL->escape($username), $SQL->escape($message));
					$SQL->insertquery($query);
				}
				else {
					$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES('%d', '%s', NOW(), '%s', '1', '1')", $SQL->escape($id), $SQL->escape($username), $SQL->escape($message));
					$SQL->insertquery($query);
				}
			}
		
			// Format the message string
			$response = trim($response);
		
			if (!empty($response) && $response > 0) {
				// Send messages from POSTed response data
				$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('%d', '%s', NOW(), '%d', '1', '1')", $SQL->escape($id), $SQL->escape($username), $response);
				$SQL->insertquery($query);
			}
			if (!empty($command) && $command > 0) {
				$query = sprintf("SELECT `type`, `name`, `content` FROM " . $table_prefix . "responses WHERE `id` = '%d' AND `type` > 1 LIMIT 1", $SQL->escape($command));
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$type = $row['type'];
					$name = $row['name'];
					$content = addslashes($row['content']);
								
					switch ($type) {
						case '2':
							$status = 2;
							$command = addslashes($name . " \r\n " . $content); 
							$alert = '';
							break;
						case '3':
							$status = 3;
							$command = addslashes($name . " \r\n " . $content);
							$alert = '';
							break;
						case '4':
							$status = 4;
							$command = addslashes($content);
							$alert = addslashes('The ' . $name . ' has been PUSHed to the visitor.');
							break;
						case '5':
							$status = 5;
							$command = addslashes($content);
							$alert = addslashes('The ' . $name . ' has been sent to the visitor.');
							break;
					}
					
					if (!empty($command)) {
						$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('%d', '', NOW(), '%s', '2', '%s')", $SQL->escape($id), $SQL->escape($command), $SQL->escape($status));
						if (!empty($alert)) {
							$query .= sprintf(", ('%d', '', NOW(), '%s', '2', '-1')", $SQL->escape($id), $SQL->escape($alert));
						}
						$id = $SQL->insertquery($query);
					}
					
				}
			}
		}
	}

} else {
	
	$message = trim($_REQUEST['MESSAGE']);
	$message = str_replace('<', '&lt;', $message);
	$message = str_replace('>', '&gt;', $message);
	$message = trim($message);
	
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
	
	// Guest Chat Session
	if ($chat > 0) {
		$query = sprintf("SELECT `username`, `active` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' LIMIT 1", $chat);
		$row = $SQL->selectquery($query);

		// Blocked Chat
		if ($row['active'] == -3) {
			header('HTTP/1.1 403 Access Forbidden');
			header('Content-Type: text/plain');  
			exit();
		}

	} else {
		header('HTTP/1.1 403 Access Forbidden');
		header('Content-Type: text/plain');  
		exit();
	}
	
	if (!empty($message) && is_array($row)) {

		// Device ID
		$total = 0;
		$username = $row['username'];
		$active = intval($row['active']);

		// Send Guest Message
		$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`) VALUES ('%d', '%s', NOW(), '%s', '1')", $chat, $SQL->escape($username), $SQL->escape($message));
		$id = $SQL->insertquery($query);

		// iPhone / Android PUSH Alerts
		$query = sprintf("SELECT COUNT(`id`) AS total FROM " . $table_prefix . "messages WHERE `chat` = '%d' AND `status` = '7' LIMIT 1", $chat);
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$total = $row['total'];
		}
		
		if ($active > 0) {
			$query = sprintf("SELECT `device` FROM " . $table_prefix . "users WHERE `id` = '%d' LIMIT 1", $active);
			$row = $SQL->selectquery($query);
			if (is_array($row) || $total > 0) {
				$device = $row['device'];
				$devices = array($device);
				
				if (count($devices) > 0) {

					// iPhone / Android PUSH HTTP / HTTPS API Key
					$key = '20237df3ede04c4daa6657723cd6e62e473c26a0f793ac77ed17f1c14338d2fac9f1ccd8431b6152cad2647c1c04a25b4e7f0ee305c586cfad24aedea8ab34ac';
					
					// APNS Alert Options
					$alert = $username . ': ' . $message;

					$length = mb_strlen($alert, 'utf-8');
					$bytes = strbytes(json_encode($alert));
					$shortened = false;
					while ($bytes > 110) { // Max 200 bytes - Russian Cyrillic Issue 110 bytes
						$length--;
						$alert = mb_strcut($alert, 0, $length, 'utf-8');
						$bytes = strbytes(json_encode($alert));
						$shortened = true;
					}
					if ($shortened == true) { $alert .= '...'; }
					$sound = 'Message.wav';
					
					// APNS JSON Payload (Max. Payload 256 bytes)
					$aps = array('alert' => $alert, 'sound' => $sound);
					$json = array('aps' => $aps);
					
					// Web Service Data
					$data = array('key' => $key, 'devices' => $devices, 'payload' => $json, 'gcm' => array('message' => 'message'));
					$query = json_encode($data);
					$url = 'http://api.stardevelop.com/push.php';
					
					/* Test Payload Bytes
					$payload = json_encode($json);
					$bytes = strbytes($payload);
					echo('JSON Bytes: ' . $bytes);
					$apnsmessage = chr(0) . chr(0) . chr(32) . pack('H*', str_replace(' ', '', $device)) . chr(0) . chr(strbytes($payload)) . $payload;
					$bytes = strbytes($apnsmessage);
					echo('Payload Bytes: ' . $bytes);
					*/
					
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
			}
		}
	}

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
		$json['id'] = $id;
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
}
?>