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
	include('include/spiders.php');
	include('include/class.mysql.php');
	include('include/class.aes.php');
	include('include/class.cookie.php');
	$installed = include('include/config.php');
	include('include/functions.php');
} else {
	$installed = false;
}

if ($installed == false) {
	include('include/default.php');
}

if (!isset($_REQUEST['CODE'])){ $_REQUEST['CODE'] = ''; }

$json = (isset($_REQUEST['JSON'])) ? true : false;
$embed = (isset($_REQUEST['EMBED'])) ? true : false;
$reset = (isset($_REQUEST['RESET'])) ? true : false;
$code = stripslashes(htmlspecialchars(trim($_REQUEST['CODE'])));

// Override Security
if (isset($_REQUEST['SECURITY'])) {
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

if ($json) {

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
		
		// Output JSON / JSONP
		$json = array('captcha' => $captcha);
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
			}
		}
		
	} else {
	
		$result = false;
	
		// Validate Security Code
		if (strlen($code) == 5) {
			$security = sha1(strtoupper($security));

			$code = sha1(strtoupper($code));
			if ($security == $code && $_SETTINGS['SECURITYCODE'] == true) {
				$result = true;
			}
		} else {
			$result = false;
		}
		
		// Output JSON / JSONP
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
			}
		}
	}
	exit();
}

if ((function_exists('imagepng') || function_exists('imagejpeg')) && function_exists('imagettftext')) {

	function hex2rgb($hex) {
		$color = str_replace('#','',$hex);
		$rgb = array(hexdec(substr($color,0,2)), hexdec(substr($color,2,2)), hexdec(substr($color,4,2)));
		return $rgb;
	}
	
	if ($_SETTINGS['BACKGROUNDCOLOR'] == '') { $_SETTINGS['BACKGROUNDCOLOR'] = '#FFFFFF'; }
	$rgb = hex2rgb($_SETTINGS['BACKGROUNDCOLOR']);
	$image = imagecreate(80, 30); /* Create a blank JPEG image */
	$bg = imagecolorallocate($image, $rgb[0], $rgb[1], $rgb[2]);
	imagefilledrectangle($image, 0, 0, 80, 30, $bg);
	
	// Transparent Background
	//$image = imagecreatetruecolor(80, 30); /* Create a blank JPEG image */
	//$bg = imagecolorallocate($image, $rgb[0], $rgb[1], $rgb[2]);
	//imagecolortransparent($image, $bg);
	
	// Create random angle
	$size = 16;
	$angle = rand(-5, -3);
	$color = imagecolorallocate($image, 0, 0, 0);
	$path = dirname(__FILE__);
	if (substr($path, 0, 2) == '\\\\') { $path = '//' . substr($path, 2); }
	
	if (substr($path, -1) == '/') {
		$font = $path . 'styles/fonts/FrancophilSans.ttf';
	} else {
		$font = $path . '/styles/fonts/FrancophilSans.ttf';
	}
	
	// Determine text size, and use dimensions to generate x & y coordinates
	$textsize = imagettfbbox($size, $angle, $font, $security);
	$twidth = abs($textsize[2] - $textsize[0]);
	$theight = abs($textsize[5] - $textsize[3]);
	$x = (imagesx($image) / 2) - ($twidth / 2);
	$y = (imagesy($image)) - ($theight / 2);
	
	// Add text to image
	imagettftext($image, $size, $angle, $x, $y, $color, $font, $security);
	
	if (function_exists('imagepng')) {
		// Output GIF Image
		header('Content-Type: image/png');
		imagepng($image);
	}
	elseif (function_exists('imagejpeg')) {
		// Output JPEG Image
		header('Content-Type: image/jpeg');
		imagejpeg($image, '', 100);
	}
	
	// Destroy the image to free memory
	imagedestroy($image);
	exit();

}
else {

	if (strpos(php_sapi_name(), 'cgi') === false ) { header('HTTP/1.0 404 Not Found'); } else { header('Status: 404 Not Found'); }
	exit;
	
}

?>