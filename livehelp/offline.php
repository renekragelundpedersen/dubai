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
$database = include('include/database.php');
if ($database) {
	// Smarty Template
	require('include/smarty/Smarty.class.php');
	
	include('include/spiders.php');
	include('include/functions.php');
	include('include/class.mysql.php');
	include('include/class.aes.php');
	$installed = include('include/config.php');
	include('include/class.cookie.php');
	include('include/phpmailer/class.phpmailer.php');
	include('include/version.php');
}

if ($installed == false) {
	header('Location: error.htm');
	exit();
}

if (!isset($_REQUEST['CAPTCHA'])){ $_REQUEST['CAPTCHA'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['UNIQUE'])){ $_REQUEST['UNIQUE'] = ''; }

header('Content-type: text/html; charset=utf-8');
if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
	include('locale/' . LANGUAGE . '/guest.php');
}
else {
	include('locale/en/guest.php');
}

$error = '';
$name = '';
$email = '';
$message = '';
$code = '';
$status = '';
$server = htmlspecialchars($_REQUEST['SERVER']);
$bcc = (isset($_REQUEST['BCC'])) ? true : false;
$json = (isset($_REQUEST['JSON'])) ? true : false;
$embed = (isset($_REQUEST['EMBED'])) ? true : false;
$reset = (isset($_REQUEST['RESET'])) ? true : false;

// Override Session
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

// Override Security
if ($json && isset($_REQUEST['SECURITY'])) {

	$cookie = rawurldecode($_REQUEST['SECURITY']);

	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$size = strlen($aes->iv);
	$iv = substr($cookie, 0, $size);
	$verify = substr($cookie, $size, 40);
	$ciphertext = substr($cookie, 40 + $size);

	$decrypted = $aes->decrypt($ciphertext, $iv);
	if (sha1(strtoupper($decrypted)) == $verify) {
		$security = $decrypted;
	}
}

if ($embed || $json) {

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

	// Adjust Width
	$_SETTINGS['CHATWINDOWWIDTH'] = 850;
	
}

if (isset($_REQUEST['NAME']) && isset($_REQUEST['EMAIL']) && isset($_REQUEST['MESSAGE'])) {

	foreach ($_REQUEST as $key => $value) {
		if ($key != 'Submit') { 
			$value = trim($value);
			$_REQUEST[$key] = $value;
		}
	}
	
	$name = stripslashes(htmlspecialchars($_REQUEST['NAME']));
	$email = stripslashes(htmlspecialchars($_REQUEST['EMAIL']));
	$message = stripslashes(htmlspecialchars($_REQUEST['MESSAGE']));
	$code = stripslashes(htmlspecialchars($_REQUEST['CAPTCHA']));
	
	if (empty($name) || empty($email) || empty($message) || ($_SETTINGS['SECURITYCODE'] && (function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext') && empty($code))) {
		$error = $_LOCALE['invaliddetailserror'];
		
		if ($json) {
			$json = array('result' => false, 'error' => $error);
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
		
	} elseif (!preg_match('/^[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&\'*+\\\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+$/i', $email)) {
	
		$error = $_LOCALE['invalidemail'];
		
		if ($json) {
			$json = array('result' => false, 'type' => 'EMAIL', 'error' => $error);
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
		
	} else {
	
		if (strlen($security) == 5) {

			$code = sha1(strtoupper($code));
			$security = sha1(strtoupper($security));
			if ($security != $code && $_SETTINGS['SECURITYCODE'] == true && ((function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext'))) {
				$error = $_LOCALE['invalidsecurityerror'];
				
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
				$aes = new AES256($_SETTINGS['AUTHKEY']);
				$captcha = $aes->iv . $verify . $aes->encrypt($code);

				if ($json) {
					$json = array('result' => false, 'type' => 'CAPTCHA', 'error' => $error);
					$json = json_encode($json);
					if (!isset($_GET['callback'])) {
						header('Content-Type: application/json; charset=utf-8');
						exit($json);
					} else {
						if (is_valid_callback($_GET['callback'])) {
							header('Content-Type: text/javascript; charset=utf-8');
							exit($_GET['callback'] . '(' . $json. ')');
						} else {
							header('Status: 400 Bad Request');
							exit();
						}
					}
				}

			} else {
				$country = 'Unavailable';
				$url = 'Unavailable';
				$title = 'Unavailable'; 
				$referrer = 'Unavailable';
				
				// Visitor Details
				$query = sprintf("SELECT `url`, `title`, `referrer` FROM " . $table_prefix . "requests WHERE `id` = '%d' LIMIT 1", $request);
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$url = $row['url'];
					$title = $row['title'];
					$referrer = $row['referrer'];
					
					if ($url == '') { $url = 'Unavailable'; }
					if ($title == '') { $title = 'Unavailable'; }
					if ($referrer == '') { $referrer = 'Unavailable'; } elseif ($referrer == 'false') { $referrer = 'Direct Link / Bookmark'; }
				}
				
				$country = 'Unavailable';
				// MaxMind Geo IP Location Plugin
				if (file_exists('./plugins/maxmind/GeoLiteCity.dat') && $_SETTINGS['SERVERVERSION'] >= 3.90) {
					// Note that you must download the New Format of GeoIP City (GEO-133).
					// The old format (GEO-132) will not work.

					include('./plugins/maxmind/geoipcity.php');
					include('./plugins/maxmind/geoipregionvars.php');

					// Shared Memory Support
					// geoip_load_shared_mem('../maxmind/GeoLiteCity.dat');
					// $gi = geoip_open('../maxmind/GeoLiteCity.dat', GEOIP_SHARED_MEMORY);

					$gi = geoip_open('./plugins/maxmind/GeoLiteCity.dat', GEOIP_STANDARD);
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
					if ($_SETTINGS['IP2COUNTRY'] == true) { 
						$ip = ip2long($_SERVER['REMOTE_ADDR']);
						
						$query = sprintf("SELECT `code` FROM " . $table_prefix . "ip2country WHERE `ip_from` <= '%u' AND `ip_to` >= '%u' LIMIT 1", $ip, $ip);
						$row = $SQL->selectquery($query);
						if (is_array($row)){
							$code = $row['code'];
							$query = sprintf("SELECT `country` FROM  " . $table_prefix . "countries WHERE code = '%s' LIMIT 1", $code);
							$row = $SQL->selectquery($query);
							$country = ucwords(strtolower($row['country']));
						}
					}
				}

				$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
				$message = preg_replace("/(\r\n|\r|\n)/", '<br/>', $message);
				$language = LANGUAGE;
				
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
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$language}/images/OfflineEmail.gif" width="531" height="79" alt="Offline Message" /></p>
<p><strong>Message:</strong></p>
<p>$message</p>
<p>$name<br/>$email</p>
<p>&nbsp;</p>
<p><strong>IP / Hostname Logged:</strong> $hostname<br />
<strong>Country:</strong> $country<br />
<strong>Current Page:</strong> <a href="$url">$url</a><br />
<strong>Current Page Title:</strong> $title<br />
<strong>Referer:</strong> <a href="$referrer">$referrer</a></p>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$language}/images/LogoSmall.png" width="217" height="52" alt="{$_SETTINGS['DOMAIN']}" /></p>
</body>
</html>
END;
				$mail = new PHPMailer(true);
				try {
					$mail->CharSet = 'UTF-8';
					$mail->AddReplyTo($email);
					$mail->AddAddress($_SETTINGS['EMAIL']);

					if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
						$mail->SetFrom($email, $name);
					} else {
						$mail->SetFrom($_SETTINGS['EMAIL'], $name);
					}

					$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['offlinemessage'];
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
				
				if ($bcc == true) {
				
					$bcchtml = <<<END
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
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$language}/images/OfflineEmail.gif" width="531" height="79" alt="Offline Message" /></p>
<p><strong>Message:</strong></p>
<p>$message</p>
<p>$name<br/>$email</p>
<p><img src="{$_SETTINGS['URL']}/livehelp/locale/{$language}/images/LogoSmall.png" width="217" height="52" alt="{$_SETTINGS['DOMAIN']}" /></p>
</body>
</html>
END;
					$mail = new PHPMailer(true);
					try {
						$mail->CharSet = 'UTF-8';
						$mail->AddReplyTo($_SETTINGS['EMAIL']);
						$mail->AddAddress($email);
						$mail->SetFrom($_SETTINGS['EMAIL'], $name);
						$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['offlinemessage'];
						$mail->MsgHTML($bcchtml);
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
				
				if ($json) {
					$json = array('result' => $result);
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
		}
	}
	
	$message = stripslashes($message);
	
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
$smarty->assign('template', $_SETTINGS['TEMPLATE'], true);

$smarty->debugging = false;
$smarty->caching = false;

$smarty->assign('LOCALE', $_LOCALE, true);
$smarty->assign('name', $name, true);
$smarty->assign('email', $email, true);
$smarty->assign('message', $message, true);
$smarty->assign('title', 'Offline Message', true);
$smarty->assign('time', time(), true);
$smarty->assign('embed', $embed, true);

// Reset Security Code
$captcha = '';
if ($reset) {

	// Generate Security Code
	$chars = array('a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','j','J','k','K','L','m','M','n','N','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','2','3','4','5','6','7','8','9');
	$ascii = array();

	$code = '';
	for ($i = 0; $i < 5; $i++) {
		$char = $chars[rand(0, count($chars) - 1)];
		$ascii[$i] = ord($char);
		$code .= $char;
	}

	$verify = sha1(strtoupper($code));
	$aes = new AES256($_SETTINGS['AUTHKEY']);
	$captcha = $aes->iv . $verify . $aes->encrypt($code);
}

if (isset($_REQUEST['SECURITY'])) {
	$smarty->assign('captcha', $_REQUEST['SECURITY'], true);
} else {
	$smarty->assign('captcha', rawurlencode($captcha), true);
}

$url = ($embed) ? $server : '';
$smarty->assign('url', $url, true);

if (!empty($error)) { $smarty->assign('error', $error, true); }

// Disable Offline Email
if ($_SETTINGS['OFFLINEEMAILREDIRECT'] != '' || $_SETTINGS['OFFLINEEMAIL'] == false) {
	$smarty->assign('disabled', true);
} else {
	$smarty->assign('disabled', false);
}

// Security Code
if ($_SETTINGS['SECURITYCODE'] == true && (function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext')) {
	$smarty->assign('security', true);
} else {
	$smarty->assign('security', false);
}

if ($json) {

	$html = $smarty->fetch($_SETTINGS['TEMPLATE'] . '/offline.tpl');
	$json = array('captcha' => $captcha, 'html' => $html);
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
	$smarty->display($_SETTINGS['TEMPLATE'] . '/offline.tpl');
}

?>