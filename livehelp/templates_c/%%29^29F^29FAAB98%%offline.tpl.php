<?php /* Smarty version 2.6.27, created on 2013-07-24 06:49:40
         compiled from default/offline.tpl */ ?>
<?php if (! $this->_tpl_vars['embed']): ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => ($this->_tpl_vars['template'])."/header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php endif; ?>

<?php if ($this->_tpl_vars['embed']): ?>
<div style="background:url(<?php echo $this->_tpl_vars['url']; ?>
images/OfflineBackgroundTop.png) repeat-x; height:4px; margin:0 4px; position:relative; z-index:20; width:875px"></div>
<?php endif; ?>
<div id="LiveHelpOffline" align="center" style="margin-top:10px;<?php if ($this->_tpl_vars['embed']): ?>min-height:365px<?php endif; ?>">
<?php if ($this->_tpl_vars['embed']): ?>
<div style="margin-top:35px">
<div class="LiveHelpOfflineForm" style="position:absolute; right:20px; top:20px; background:url(images/OfflineStamp.png) no-repeat; width:149px; height:93px;"></div>
<?php endif; ?>
<div id="LiveHelpOfflineHeading" style="<?php if (! $this->_tpl_vars['embed']): ?>display:none; <?php endif; ?>font-family:'RobotoLight', sans-serif; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:32px; line-height:35px; color:#999; margin:20px"><?php echo $this->_tpl_vars['LOCALE']['sorryofflineemail']; ?>
</div>
<div id="LiveHelpOfflineCloseButton" class="LiveHelpOfflineSent button" style="display:none; position:relative; margin-top:20px"><?php echo $this->_tpl_vars['LOCALE']['closemessage']; ?>
</div>
<div id="LiveHelpOfflineError" class="LiveHelpOfflineForm" style="display:none; background:#FFB0B0; border-radius:15px; -moz-border-radius:15px; -webkit-border-radius:15px; border:1px solid #9E1111; height:30px; margin:40px auto 0; padding:15px 0 0 15px; width:300px">
	<span class="sprite Cross" style="padding:5px 0 5px 30px">Error:  Please contact technical support via. email at <em>support at stardevelop dot com</em>.</span>
</div>
  <form action="offline.php" method="post" id="OfflineMessageForm" class="LiveHelpOfflineForm" style="padding:0px; margin:0px;">
    <table border="0" align="center" cellpadding="2" cellspacing="2">
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div id="LiveHelpOfflineDescription" align="center"><?php echo $this->_tpl_vars['LOCALE']['unfortunatelyoffline']; ?>
<br/><?php echo $this->_tpl_vars['LOCALE']['filldetailsbelow']; ?>
:</div></td>
      </tr>
	  <?php if ($this->_tpl_vars['error']): ?>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div align="center"><strong><?php echo $this->_tpl_vars['error']; ?>
</strong></div></td>
      </tr>
	  <?php elseif ($this->_tpl_vars['disabled']): ?>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div align="center"><strong><?php echo $this->_tpl_vars['LOCALE']['featuredisabled']; ?>
</strong></div></td>
      </tr>
      <?php endif; ?>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="NAME"><?php echo $this->_tpl_vars['LOCALE']['name']; ?>
</label></td>
        <td><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-225; ?>
px"><input name="NAME" type="text" id="NAME" value="<?php echo $this->_tpl_vars['name']; ?>
" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-250; ?>
px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" <?php if ($this->_tpl_vars['disabled']): ?>disabled="disabled"<?php endif; ?>/>
          <div id="NameError" title="Name Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="EMAIL"><?php echo $this->_tpl_vars['LOCALE']['email']; ?>
</label></td>
        <td><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-225; ?>
px"><input name="EMAIL" type="text" id="EMAIL" value="<?php echo $this->_tpl_vars['email']; ?>
" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-250; ?>
px;; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" <?php if ($this->_tpl_vars['disabled']): ?>disabled="disabled"<?php endif; ?>/>
          <div id="EmailError" title="Email Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="top"><label style="display:inline" for="MESSAGE"><?php echo $this->_tpl_vars['LOCALE']['message']; ?>
</label></td>
        <td align="right" valign="top"><div align="left">
            <div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWHEIGHT']-340; ?>
px; padding:3px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-225; ?>
px"><textarea name="MESSAGE" cols="30" rows="6" id="MESSAGE" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-250; ?>
px; height:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWHEIGHT']-340; ?>
px; vertical-align:middle; font-family:<?php echo $this->_tpl_vars['SETTINGS']['CHATFONT']; ?>
; resize:none; overflow:auto; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" <?php if ($this->_tpl_vars['disabled']): ?>disabled="disabled"<?php endif; ?>><?php echo $this->_tpl_vars['message']; ?>
</textarea>
            <div id="MessageError" title="Message Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
	  <?php if ($this->_tpl_vars['security']): ?>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="CAPTCHA"><?php echo $this->_tpl_vars['LOCALE']['securitycode']; ?>
</label></td>
        <td align="left" valign="middle"><span style="height:30px; vertical-align:middle">
		<div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:125px; height:20px; padding:3px">
			<input name="CAPTCHA" type="text" id="CAPTCHA" value="" size="6" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0px; padding:0px; font-size:16px; width:100px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" maxlength="5" <?php if ($this->_tpl_vars['disabled']): ?>disabled="disabled"<?php endif; ?>/>
			<div id="SecurityError" title="Security Code Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div>
			<img id="LiveHelpOfflineSecurity" src="<?php echo $this->_tpl_vars['url']; ?>
security.php?<?php echo $this->_tpl_vars['time']; ?>
<?php if ($this->_tpl_vars['captcha']): ?>&SECURITY=<?php echo $this->_tpl_vars['captcha']; ?>
<?php endif; ?><?php if ($this->_tpl_vars['embed']): ?>&EMBED<?php endif; ?>" style="position:absolute; left:135px; top:0; width:80px; height:30px; vertical-align:middle" alt="Security Code"/><div id="LiveHelpOfflineSecurityRefresh" class="sprite Refresh" style="position:absolute; left:210px; top:0; cursor:pointer"></div>
		</div>
        </span></td>
      </tr>
	  <?php endif; ?>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" align="right" valign="top">
			<div align="center"><input name="BCC" id="BCC" type="checkbox" value="1" <?php if ($this->_tpl_vars['disabled']): ?>disabled="disabled"<?php endif; ?>/><label style="display:inline; padding-left:3px" for="BCC"><?php echo $this->_tpl_vars['LOCALE']['sendcopy']; ?>
</label></div>
		</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" align="right" valign="top"><div align="center">
            <input name="COOKIE" type="hidden" id="COOKIE" value="<?php echo $this->_tpl_vars['cookie']; ?>
"/>
			      <input name="LANGUAGE" type="hidden" id="LANGUAGE" value="<?php echo $this->_tpl_vars['language']; ?>
"/>
      <div align="center">
				<div id="LiveHelpOfflineButton" class="button" style="position:relative; margin-top:5px"><?php echo $this->_tpl_vars['LOCALE']['sendmsg']; ?>
</div>
			</div>
<?php if ($this->_tpl_vars['embed']): ?>
			<div class="LiveHelpOfflineForm" style="margin: auto 0; margin:25px 0; background: url(images/OfflineSuggestions.png); width:344px; height:27px"></div>
<?php endif; ?>
		</td>
      </tr>
    </table>
  </form>
  <div id="LiveHelpOfflineSent" style="display:none; position:relative; padding-top:80px; text-align:center">
	<div style="font-family:'RobotoLight', sans-serif; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:32px; line-height:35px; color:#999; margin:20px"><?php echo $this->_tpl_vars['LOCALE']['thankyoumessagesent']; ?>
</div>
	<div style="margin-bottom:20px"><?php echo $this->_tpl_vars['LOCALE']['thankyouenquiry']; ?>
<br/><?php echo $this->_tpl_vars['LOCALE']['contactedsoon']; ?>
</div>
  <div style="text-align:center">
	  <div id="LiveHelpOfflineCloseButton" class="button" style="position:relative; margin:0 auto"><?php echo $this->_tpl_vars['LOCALE']['closemessage']; ?>
</div>
  </div>
  </div>
</div>
<?php if (! $this->_tpl_vars['embed']): ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => ($this->_tpl_vars['template'])."/footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<?php else: ?>
</div>
<?php if ($this->_tpl_vars['LOCALE']['stardevelopcopyright']): ?>
<a href="http://livehelp.stardevelop.com/" target="_blank" title="Powered by Live Chat Software"><div class="LiveHelpOfflinePoweredBy sprite PoweredByLiveHelp" style="position:absolute; right:20px; bottom:10px"></div></a>
<?php endif; ?>
<div style="background:url(<?php echo $this->_tpl_vars['url']; ?>
images/OfflineBackgroundBottom.png) repeat-x; height:4px; position:relative; left:0; right:0; bottom:0; margin:0 3px; z-index:20"></div>
<?php endif; ?>