<?php /* Smarty version 2.6.27, created on 2013-08-04 03:53:51
         compiled from default/header.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'escape', 'default/header.tpl', 20, false),)), $this); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title><?php echo $this->_tpl_vars['SETTINGS']['NAME']; ?>
</title>
<link href="styles/styles.php" rel="stylesheet" type="text/css"/>
<link href="styles/styles.css" rel="stylesheet" type="text/css"/>
<?php if ($this->_tpl_vars['chat']): ?>
<link href="styles/guest.php" rel="stylesheet" type="text/css"/>
<?php else: ?>
<link href="styles/guest.css" rel="stylesheet" type="text/css"/>
<?php endif; ?>
<script language="JavaScript" type="text/JavaScript" src="scripts/jquery-latest.js"></script>
<?php echo '
<script type="text/javascript">
<!--
	var LiveHelpSettings = {};
	LiveHelpSettings.server = document.location.host + document.location.pathname.substring(0, document.location.pathname.indexOf(\'/livehelp\'));
	LiveHelpSettings.visitorTracking = false;
	LiveHelpSettings.popup = true;
	LiveHelpSettings.department = '; ?>
'<?php echo ((is_array($_tmp=$this->_tpl_vars['department'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'quotes') : smarty_modifier_escape($_tmp, 'quotes')); ?>
'<?php echo ';
	LiveHelpSettings.session = '; ?>
'<?php echo ((is_array($_tmp=$this->_tpl_vars['session'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'quotes') : smarty_modifier_escape($_tmp, 'quotes')); ?>
'<?php echo ';
	LiveHelpSettings.security = '; ?>
'<?php echo ((is_array($_tmp=$this->_tpl_vars['captcha'])) ? $this->_run_mod_handler('escape', true, $_tmp, 'quotes') : smarty_modifier_escape($_tmp, 'quotes')); ?>
'<?php echo ';
'; ?>
<?php if ($this->_tpl_vars['connected']): ?><?php echo '	LiveHelpSettings.connected = '; ?>
<?php echo $this->_tpl_vars['connected']; ?>
<?php echo ';'; ?>
<?php endif; ?><?php echo '
	
	(function($) { 
		$(function() {
			$(window).ready(function() {
				// JavaScript
				LiveHelpSettings.server = LiveHelpSettings.server.replace(/[a-z][a-z0-9+\\-.]*:\\/\\/|\\/livehelp\\/*(\\/|[a-z0-9\\-._~%!$&\'()*+,;=:@\\/]*(?![a-z0-9\\-._~%!$&\'()*+,;=:@]))|\\/*$/g, \'\');
				var LiveHelp = document.createElement(\'script\'); LiveHelp.type = \'text/javascript\'; LiveHelp.async = true;
				LiveHelp.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + LiveHelpSettings.server + \'/livehelp/scripts/jquery.livehelp.js\';
				var s = document.getElementsByTagName(\'script\')[0];
				s.parentNode.insertBefore(LiveHelp, s);
			});
		});
	})(jQuery);
-->
</script>
'; ?>

<?php if ($this->_tpl_vars['SETTINGS']['ANALYTICS']): ?>
<?php echo '
<script type="text/javascript">

	var _gaq = _gaq || [];
	_gaq.push([\'_setAccount\', \''; ?>
<?php echo $this->_tpl_vars['SETTINGS']['ANALYTICS']; ?>
<?php echo '\']);
	
	(function() {
		var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;
		ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';
		var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);
	})();

</script>
'; ?>

<?php endif; ?>
</head>
<body style="background:url(./images/ChatBackgroundTop.png) <?php echo $this->_tpl_vars['SETTINGS']['BACKGROUNDCOLOR']; ?>
 repeat-x;">
<div id="LiveHelpContent">
<?php if ($this->_tpl_vars['SETTINGS']['LOGO']): ?>
	<div id="Logo">
		<img id="LogoImage" src="<?php echo $this->_tpl_vars['SETTINGS']['LOGO']; ?>
" alt="<?php echo $this->_tpl_vars['SETTINGS']['NAME']; ?>
" border="0"/>
	</div>
<?php endif; ?>