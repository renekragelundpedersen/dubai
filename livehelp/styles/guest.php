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
$database = include('../include/database.php');
if ($database) {
	include('../include/spiders.php');
	include('../include/class.mysql.php');
	include('../include/class.aes.php');
	include('../include/class.cookie.php');
	$installed = include('../include/config.php');
} else {
	$installed = false;
}

if ($installed == false) {
	header('Location: ./default.php');
}

header('Content-type: text/css');

if (file_exists('../locale/' . LANGUAGE . '/guest.php')) {
	include('../locale/' . LANGUAGE . '/guest.php');
}
else {
	include('../locale/en/guest.php');
}

if (!isset($_SETTINGS['DIRECTION'])) { $_SETTINGS['DIRECTION'] = 'ltr'; }
?>

div, p, td {
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	color: <?php echo($_SETTINGS['FONTCOLOR']); ?>;
	direction: <?php echo($_SETTINGS['DIRECTION']); ?>;
}
body {
	background-color: <?php echo($_SETTINGS['BACKGROUNDCOLOR']); ?>;
	color: <?php echo($_SETTINGS['FONTCOLOR']); ?>;
	margin: 0px;
	text-align: center;
	min-width: 100%;
	width: 100%;
}
a:link, a:visited, a:active {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: #CCCCCC;
}
a:hover {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
}
.message {
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	margin: 0px;
	margin-bottom: 5px;
}
a.message:link, a.message:visited, a.message:active {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: #CCCCCC;
}
a.message:hover {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
}

.box {
	background: #FAF6F7;
	border: 1px solid #ddd;
	padding: 5px;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 11px;
	text-align: justify;
	width: 95%;
	margin: 5px;
}