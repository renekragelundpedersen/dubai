<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>{$SETTINGS.NAME}</title>
<link href="styles/styles.php" rel="stylesheet" type="text/css"/>
<link href="styles/styles.css" rel="stylesheet" type="text/css"/>
{if $chat}
<link href="styles/guest.php" rel="stylesheet" type="text/css"/>
{else}
<link href="styles/guest.css" rel="stylesheet" type="text/css"/>
{/if}
<script language="JavaScript" type="text/JavaScript" src="scripts/jquery-latest.js"></script>
{literal}
<script type="text/javascript">
<!--
	var LiveHelpSettings = {};
	LiveHelpSettings.server = document.location.host + document.location.pathname.substring(0, document.location.pathname.indexOf('/livehelp'));
	LiveHelpSettings.visitorTracking = false;
	LiveHelpSettings.popup = true;
	LiveHelpSettings.department = {/literal}'{$department|escape:quotes}'{literal};
	LiveHelpSettings.session = {/literal}'{$session|escape:quotes}'{literal};
	LiveHelpSettings.security = {/literal}'{$captcha|escape:quotes}'{literal};
{/literal}{if $connected}{literal}	LiveHelpSettings.connected = {/literal}{$connected}{literal};{/literal}{/if}{literal}
	
	(function($) { 
		$(function() {
			$(window).ready(function() {
				// JavaScript
				LiveHelpSettings.server = LiveHelpSettings.server.replace(/[a-z][a-z0-9+\-.]*:\/\/|\/livehelp\/*(\/|[a-z0-9\-._~%!$&'()*+,;=:@\/]*(?![a-z0-9\-._~%!$&'()*+,;=:@]))|\/*$/g, '');
				var LiveHelp = document.createElement('script'); LiveHelp.type = 'text/javascript'; LiveHelp.async = true;
				LiveHelp.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + LiveHelpSettings.server + '/livehelp/scripts/jquery.livehelp.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(LiveHelp, s);
			});
		});
	})(jQuery);
-->
</script>
{/literal}
{if $SETTINGS.ANALYTICS}
{literal}
<script type="text/javascript">

	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', '{/literal}{$SETTINGS.ANALYTICS}{literal}']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

</script>
{/literal}
{/if}
</head>
<body style="background:url(./images/ChatBackgroundTop.png) {$SETTINGS.BACKGROUNDCOLOR} repeat-x;">
<div id="LiveHelpContent">
{if $SETTINGS.LOGO}
	<div id="Logo">
		<img id="LogoImage" src="{$SETTINGS.LOGO}" alt="{$SETTINGS.NAME}" border="0"/>
	</div>
{/if}