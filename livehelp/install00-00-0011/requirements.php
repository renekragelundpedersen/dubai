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

// Detect WHMCS Installation
$plugin = '';
if (file_exists('../../../configuration.php')) {

	// WHMCS Database Configuration
	include('../../../configuration.php');
	if (isset($db_host) && isset($db_name) && isset($db_username) && isset($db_password)) {
		$plugin = 'WHMCS';
	}
}

// Configuration File
$writable = true;
$configuration = '../include/database.php';
if (file_exists($configuration)) {
	if (is_writable($configuration)) {
			$content = file_get_contents($configuration);
			if (!$handle = fopen($configuration, 'w')) {
				$writable = false;
			}
			else {
				if (!fwrite($handle, $content)) {
					$writable = false;
				}
				else {
					$writable = true;
					fclose($handle);
				}
			}
	}
	else {
		$writable = false;
	}
}
else {
	$writable = false;
}

// Check PHP Version
list($major, $minor) = explode('.', phpversion());

if ($writable == false) {
	// Installation Permissions Error
	$error = 'You must change the permissions of the /livehelp/include/database.php file so the file is writable.';
} else if ($major <= 4 && $minor < 3) {
	// Missing Installation Requirement
	$error = 'You must have at least PHP 4.3.0 installed.  Please upgrade your PHP installation.';
} else if (!function_exists('mysql_connect') && !function_exists('mysqli_connect')) { 
	// Missing Installation Requirement
	$error = 'You must enable the MySQL or MySQLi extensions within the PHP installation.';
} else if (!function_exists('preg_replace')) {
	// Missing Installation Requirement
	$error = 'You must enable the Perl-Compatible Regular Expression (PCRE) extension within the PHP installation.';
}

$json = array();
$json['result'] = (empty($error) && isset($writable) && $writable) ? true : false;
if (!empty($error)) {
	$json['error'] = $error;
}

// Plugin
if (!empty($plugin)) {
	$json['plugin'] = $plugin;
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