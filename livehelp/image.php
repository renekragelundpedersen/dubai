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
include('include/version.php');

if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = 0; }
if (!isset($_REQUEST['SIZE'])){ $_REQUEST['SIZE'] = -1; }
if (!isset($_REQUEST['DEFAULT'])){ $_REQUEST['DEFAULT'] = ''; }

$row = '';
$id = $_REQUEST['ID'];
$size = $_REQUEST['SIZE'];
$default = $_REQUEST['DEFAULT'];
$updated = '';

if ($id > 0) {
	$query = sprintf("SELECT `image`, `updated` FROM " . $table_prefix . "users WHERE `id` = %d", $id);
	$row = $SQL->selectquery($query);
}

$im = false;
if (!empty($row) && is_array($row) && !empty($row['image'])) {
	$base64 = $row['image'];
	$updated = $row['updated'];
}

// Cache Image
$updated = strtotime($updated);
header('Cache-Control: public');
header('Expires: ' . date(DATE_RFC822, strtotime('+2 day')));
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $updated) . ' GMT', true, 200);

// Last Modified
if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && (strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) == $updated)) {
	header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $updated) . ' GMT', true, 304);
	exit();
}

if (!empty($base64)) {
	$im = imagecreatefromstring(base64_decode($base64));
} else {
	if ($default == '404') {
		header('HTTP/1.0 404 Not Found');
		exit();
	}
	$im = @imagecreatefrompng('./images/User.png');
}

if ($im == false) {
	if ($default == '404') {
		header('HTTP/1.0 404 Not Found');
		exit();
	}
	$im = @imagecreatefrompng('./images/User.png');
}

if ($im != false) {
	if ($size > 0) {
		$width = imagesx($im);
		$height = imagesy($im);
		$aspect_ratio = $height / $width;

		if ($width <= $size) {
			$neww = $width;
			$newh = $height;
		} else {
			$neww = $size;
			$newh = abs($neww * $aspect_ratio);
		}

		$image = imagecreatetruecolor($neww, $newh); 
		
		imagealphablending($image, false);
		imagesavealpha($image, true);
		
		// Preserve Transparency
		//imagecolortransparent($image, imagecolorallocate($image, 0, 0, 0));
		
		imagecopyresampled($image, $im, 0, 0, 0, 0, $neww, $newh, $width, $height);
		
		# Content Type Header
		header('Content-Type: image/png');

		# Output the image
		imagepng($image);

		# Free Memory
		imagedestroy($im);
		imagedestroy($image);

		
	} else {

		# Content Type Header
		header('Content-Type: image/png');

		imagealphablending($im, false);
		imagesavealpha($im, true);

		# Output the image
		imagepng($im);

		# Free Memory
		imagedestroy($im);
	
	}
} else {
	if ($default == '404') {
		header('HTTP/1.0 404 Not Found');
		exit();
	}
	header('Location: ./images/User.png');
	exit();
}

?>