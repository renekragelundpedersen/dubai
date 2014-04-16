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
include('../include/default.php');

header('Content-type: text/css');
?>

div, p, td {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: <?php echo($_SETTINGS['FONTSIZE']); ?>;
	color: <?php echo($_SETTINGS['FONTCOLOR']); ?>;
}


a.normlink:link, a.normlink:visited, a.normlink:active {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: #CCCCCC;
}
a.normlink:hover {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
}
.heading {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 16px;
}
.small {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 10px;
}
.headingusers {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 18px;
}
.smallusers {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 10px;
	color: #CBCBCB;
}
a.tooltip {
	position: relative;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 10px;
	z-index: 100;
	color: #000000;
	text-decoration: none;
	border-bottom-width: 0.05em;
	border-bottom-style: dashed;
	border-bottom-color: #CCCCCC;
}
a.tooltip:hover {
	z-index: 150;
	background-color: #FFFFFF;
}
a.tooltip span {
	display: none
}
a.tooltip:hover span {
    display: block;
    position: absolute;
    top: 15px;
	left: -100px;
	width: 175px;
	padding: 5px;
	margin: 10px;
    border: 1px dashed #339;
    background-color: #E8EAFC;
	color: #000000;
    text-align: center
}
