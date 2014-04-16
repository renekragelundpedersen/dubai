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

if (!isset($_REQUEST['REFERER'])){ $_REQUEST['REFERER'] = ''; }
if (!isset($_REQUEST['URL'])){ $_REQUEST['URL'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['TITLE'])){ $_REQUEST['TITLE'] = ''; }
if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }
if (!isset($_REQUEST['ERROR'])){ $_REQUEST['ERROR'] = ''; }

$installed = false;
$database = include('include/database.php');
if ($database) {
	// Smarty Template
	require('include/smarty/Smarty.class.php');
	
	include('include/spiders.php');
	include('include/class.mysql.php');
	include('include/class.aes.php');
	include('include/class.cookie.php');
	$installed = include('include/config.php');
	include('include/version.php');
} else {
	$installed = false;
}

if ($installed == false) {
	header('Location: offline.php');
	exit();
}

if (isset($_COOKIE['LiveHelpSession'])) {
	header('Location: ./index.php?LANGUAGE=' . LANGUAGE);
	exit();
}

header('Content-type: text/html; charset=utf-8');

if (file_exists('locale/' . LANGUAGE . '/guest.php')) {
	include('locale/' . LANGUAGE . '/guest.php');
} else {
	include('locale/en/guest.php');
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
$smarty->assign('cookie', $_REQUEST['COOKIE'], true);
$smarty->assign('template', $_SETTINGS['TEMPLATE'], true);

$smarty->debugging = false;
$smarty->caching = false;

$smarty->assign('LOCALE', $_LOCALE, true);
$smarty->assign('title', 'Error', true);

$smarty->display($_SETTINGS['TEMPLATE'] . '/cookies.tpl');

?>
