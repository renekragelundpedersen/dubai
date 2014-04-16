 <?php
/**
* @version		$Id: mod_liveelp.php 10381 2010-04-20 03:35:53Z stardevelop.com $
* @package		Live Help
* @copyright	Copyright (C) 2003 - 2010 Stardevelop Pty Ltd. All rights reserved.
* @license		Commercial License
* Joomla! is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

// Include the syndicate functions only once
require_once (dirname(__FILE__).DS.'helper.php');

// Default Site URL
if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
$host = $protocol . $_SERVER['HTTP_HOST'] . '/livehelp/';

// Settings
$url = $params->get('url', $host);
$library = $params->get('insert-library', 1);
$embedded = $params->get('embedded', 1);
$slider = $params->get('slider', 0);

// HTML Head / Scripts
$document = JFactory::getDocument();
$head = $document->getHeadData();
$scripts = $head['scripts'];

// Check jQuery
$jQueryExists = false;
foreach ($scripts as $key => $row) {
	if (strpos($key, 'jquery') !== false) {
		$jQueryExists = true;
	}
}

// Insert jQuery
if (!$jQueryExists && $library) {
	$document->addScript($url . 'scripts/jquery-latest.js');
}

if ($slider) {
	$document->addScript($url . 'scripts/jquery.easing.js');
}

// Remove Protocol
$protocols = array('http://', 'https://');
$url = str_replace($protocols, '', $url);

// Add JavaScript
if (!defined('LiveHelpJavaScriptInserted')) {
	
	// JavaScript Settings
	$settingsjs = 'var LiveHelpSettings = {};' . "\n";
	$settingsjs .= 'LiveHelpSettings.server = \'' . $url . '\';' . "\n";
	
	// Embedded Chat
	if ($embedded) {
		$settingsjs .= 'LiveHelpSettings.embedded = true;' . "\n";
	}
	
	// Live Chat Slider
	if ($slider) {
		$settingsjs .= 'LiveHelpSettings.inviteTab = true;' . "\n";
	}
	$document->addScriptDeclaration($settingsjs);
	
	$javascript = '(function($) {' . "\n";
	$javascript .= '	$(function() {' . "\n";
	$javascript .= '		$(window).ready(function() {' . "\n";
	$javascript .= '			LiveHelpSettings.server = LiveHelpSettings.server.replace(/[a-z][a-z0-9+\-.]*:\/\/|\/livehelp\/*(\/|[a-z0-9\-._~%!$&\'()*+,;=:@\/]*(?![a-z0-9\-._~%!$&\'()*+,;=:@]))|\/*$/g, \'\');' . "\n";
	$javascript .= '			var LiveHelp = document.createElement(\'script\'); LiveHelp.type = \'text/javascript\'; LiveHelp.async = true;' . "\n";
	$javascript .= '			LiveHelp.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + LiveHelpSettings.server + \'/livehelp/scripts/jquery.livehelp.min.js\';' . "\n";
	$javascript .= '			var s = document.getElementsByTagName(\'script\')[0];' . "\n";
	$javascript .= '			s.parentNode.insertBefore(LiveHelp, s);' . "\n";
	$javascript .= '		});' . "\n";
	$javascript .= '	});' . "\n";
	$javascript .= '})(jQuery);' . "\n";
	$document->addScriptDeclaration($javascript);
	
	define('LiveHelpJavaScriptInserted', true);
}

$layout = JModuleHelper::getLayoutPath('mod_livehelp');
require($layout);