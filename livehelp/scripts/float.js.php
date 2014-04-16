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

if (!isset($_SERVER['DOCUMENT_ROOT'])){ $_SERVER['DOCUMENT_ROOT'] = ''; }
if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['TRACKER'])){ $_REQUEST['TRACKER'] = ''; }
if (!isset($_REQUEST['STATUS'])){ $_REQUEST['STATUS'] = ''; }
if (!isset($_REQUEST['TITLE'])){ $_REQUEST['TITLE'] = ''; }

$installed = false;
$database = include('../include/database.php');
if ($database) {
	include('../include/spiders.php');
	include('../include/class.mysql.php');
	include('../include/class.aes.php');
	include('../include/class.cookie.php');
	$installed = include('../include/config.php');
	include('../include/version.php');
} else {
	$installed = false;
}

// HTTP/1.1
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

// HTTP/1.0
header('Pragma: no-cache');
header('Content-type: text/javascript; charset=utf-8');

if ($installed == false) {
	include('../include/default.php');
	exit();
}

?>
<!--
// <?php echo($_LOCALE['stardeveloplivehelpversion'] . "\n"); ?>
// stardevelop.com Live Help International Copyright 2003

var hAlign = "left";
var vAlign = "bottom";

var InitiateChatTimer;

var layerHeight = 445;
var layerWidth = 708;

function floatRefresh() {
	window.clearTimeout(InitiateChatTimer);
	InitiateChatTimer = window.setTimeout('mainPositions("chatLayer"); floatRefresh();', 10);
}

function displayChatWindow() {

	resetLayerLocation();
	if (document.getElementById) {
		obj = document.getElementById('chatLayer');
		obj.style.top = topMargin + 'px'; document.getElementById('chatLayer').style.left = leftMargin + 'px';
	} else if (document.all) {
		obj = document.all['chatLayer'];
		obj.style.pixelTop = topMargin + 'px'; document.all['chatLayer'].style.pixelLeft = leftMargin + 'px';
	} else if (document.layers) {
		obj = document.layers['chatLayer'];
		obj.top = topMargin + 'px'; layers['chatLayer'].left = leftMargin + 'px';
	}
	
	floatRefresh();
	toggle('chatLayer');
	
}

//-->