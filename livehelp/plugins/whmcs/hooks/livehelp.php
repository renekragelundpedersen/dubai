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

// Report all PHP errors
//error_reporting(E_ALL);

// Database
$table_prefix = 'modlivehelp_';

function hook_livehelpclientarea($vars) {
    global $smarty;
	global $CONFIG;
	
	if (!empty($CONFIG['SystemSSLURL'])) {
		$server = trim($CONFIG['SystemSSLURL']);
	} else {
		$server = trim($CONFIG['SystemURL']);
	}

	if (substr($server, -1) != '/') {
		$server = $server . '/';
	}
	$server .= 'modules/';
	
	$userid = (isset($vars['clientsdetails']['userid'])) ? $vars['clientsdetails']['userid'] : '';
	$name = (!empty($vars['clientsdetails']['lastname'])) ? $vars['clientsdetails']['firstname'] . ' ' . $vars['clientsdetails']['lastname'] : $vars['clientsdetails']['firstname'];
	$email = (isset($vars['clientsdetails']['email'])) ? $vars['clientsdetails']['email'] : '';
	$locale = (isset($_SESSION['Language'])) ? $_SESSION['Language'] : $CONFIG['Language'];
	
	switch ($locale) {
		case 'czech':
			$locale = 'cs';
			break;
		case 'danish':
			$locale = 'da';
			break;
		case 'dutch':
			$locale = 'nl';
			break;
		case 'french':
			$locale = 'fr';
			break;
		case 'german':
			$locale = 'de';
			break;
		case 'italian':
			$locale = 'it';
			break;
		case 'norwegian':
			$locale = 'no';
			break;
		case 'portuguese-br':
			$locale = 'pt';
			break;
		case 'portuguese-pt':
			$locale = 'pt';
			break;
		case 'spanish':
			$locale = 'es';
			break;
		case 'swedish':
			$locale = 'sv';
			break;
		case 'turkish':
			$locale = 'tr';
			break;
		default:
			$locale = 'en';
			break;
	}

	$code = <<<END
<!-- stardevelop.com Live Help International Copyright - All Rights Reserved //-->
<!--  BEGIN stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
<a href="#" class="LiveHelpButton default"><img src="{$server}livehelp/include/status.php" id="LiveHelpStatusDefault" name="LiveHelpStatusDefault" border="0" alt="Live Help" class="LiveHelpStatus"/></a>
<!--  END stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
END;
    $smarty->assign('livehelp', $code);

	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	$server = str_replace(array('http://', 'https://'), '', $server);
	
	$jscode = <<<END
<!-- stardevelop.com Live Help International Copyright - All Rights Reserved //-->
<!--  BEGIN stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
<script type="text/javascript">
<!--
	var LiveHelpSettings = {};
	LiveHelpSettings.server = '{$server}';
	LiveHelpSettings.embedded = true;
	LiveHelpSettings.locale = '{$locale}';
	LiveHelpSettings.plugin = 'WHMCS';
	LiveHelpSettings.name = '{$name}';
	LiveHelpSettings.custom = '{$userid}';
	LiveHelpSettings.email = '{$email}';
	(function(d, $, undefined) { 
		$(window).ready(function() {
			LiveHelpSettings.server = LiveHelpSettings.server.replace(/[a-z][a-z0-9+\-.]*:\/\/|\/livehelp\/*(\/|[a-z0-9\-._~%!$&'()*+,;=:@\/]*(?![a-z0-9\-._~%!$&'()*+,;=:@]))|\/*$/g, '');
			var LiveHelp = document.createElement('script'); LiveHelp.type = 'text/javascript'; LiveHelp.async = true;
			LiveHelp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + LiveHelpSettings.server + '/livehelp/scripts/jquery.livehelp.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(LiveHelp, s);
		});
	})(document, jQuery);
-->
</script>
<!--  END stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
END;
    $smarty->assign('livehelpjs', $jscode);
	
}

add_hook('ClientAreaPage', 1 , 'hook_livehelpclientarea');

?>