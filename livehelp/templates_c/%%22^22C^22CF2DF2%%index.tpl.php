<?php /* Smarty version 2.6.27, created on 2013-10-08 03:44:14
         compiled from default/index.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'html_options', 'default/index.tpl', 43, false),)), $this); ?>
<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => ($this->_tpl_vars['template'])."/header.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

	<div id="LiveHelpLogin" align="center" style="position:relative; top:10px; min-height:365px<?php if ($this->_tpl_vars['connected']): ?>; display:none<?php endif; ?>">
	<?php echo $this->_tpl_vars['LOCALE']['welcome']; ?>
<br/>
	<?php echo $this->_tpl_vars['LOCALE']['enterguestdetails']; ?>

	
	<!--
	<?php if ($this->_tpl_vars['SETTINGS']['OFFLINEEMAILREDIRECT']): ?>
	<?php echo $this->_tpl_vars['LOCALE']['elsesendmessage']; ?>
 <a href="<?php echo $this->_tpl_vars['SETTINGS']['OFFLINEEMAILREDIRECT']; ?>
" target="_blank"><?php echo $this->_tpl_vars['LOCALE']['offlinemessage']; ?>
</a>
	<?php elseif ($this->_tpl_vars['SETTINGS']['OFFLINEEMAIL']): ?>
	<?php echo $this->_tpl_vars['LOCALE']['elsesendmessage']; ?>
 <a href="offline.php?LANGUAGE=<?php echo $this->_tpl_vars['language']; ?>
"><?php echo $this->_tpl_vars['LOCALE']['offlinemessage']; ?>
</a>
	<?php endif; ?>
	-->
	<?php if ($this->_tpl_vars['error']): ?><br/><strong><?php echo $this->_tpl_vars['error']; ?>
</strong><?php endif; ?>
	<div id="LiveHelpLoginForm" class="LiveHelpLoginContent drop-shadow curved curved-hz-1" style="width:400px; color:#777">
		<table border="0" cellspacing="2" cellpadding="2">
			<tr>
				<td><div class="Label" align="right"><?php echo $this->_tpl_vars['LOCALE']['name']; ?>
</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="NAME" id="NAME" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="<?php echo $this->_tpl_vars['username']; ?>
" maxlength="20"/>
				<div id="LiveHelpNameError" title="Name Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
<?php if ($this->_tpl_vars['SETTINGS']['LOGINEMAIL']): ?>
			<tr>
				<td><div class="Label" align="right"><?php echo $this->_tpl_vars['LOCALE']['email']; ?>
</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="EMAIL" id="EMAIL" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="<?php echo $this->_tpl_vars['email']; ?>
">
				<div id="LiveHelpEmailError" title="Email Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
<?php endif; ?>
<?php if ($this->_tpl_vars['SETTINGS']['LOGINTELEPHONE']): ?>
			<tr>
				<td><div class="Label" align="right"><?php echo $this->_tpl_vars['LOCALE']['telephone']; ?>
</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="TELEPHONE" id="TELEPHONE" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="<?php echo $this->_tpl_vars['telephone']; ?>
">
				<div id="LiveHelpTelephoneError" title="Telephone Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
<?php endif; ?>

<?php if ($this->_tpl_vars['departments']): ?>
			<tr>
				<td><div class="Label" align="right"><?php echo $this->_tpl_vars['LOCALE']['department']; ?>
</div></td>
				<td style="text-align:left;">
			<div class="LiveHelpDepartment">
				<select name="DEPARTMENT" id="DEPARTMENT" style="width:250px;">
					<?php echo smarty_function_html_options(array('values' => $this->_tpl_vars['departments'],'output' => $this->_tpl_vars['departments'],'selected' => $this->_tpl_vars['selected']), $this);?>

				</select>
				<div id="LiveHelpDepartmentError" title="Department Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></td>
			</div>
		</tr>
<?php else: ?>
			<input name="DEPARTMENT" id="DEPARTMENT" type="hidden" value="<?php echo $this->_tpl_vars['department']; ?>
"/>
<?php endif; ?>
<?php if ($this->_tpl_vars['SETTINGS']['LOGINQUESTION']): ?>
			<tr>
				<td valign="top"><div class="Label" align="right"><?php echo $this->_tpl_vars['LOCALE']['question']; ?>
</div></td>
				<td valign="top" style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:80px; padding:3px"><textarea name="QUESTION" id="QUESTION" rows="3" cols="25" style="width:225px; height:80px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; resize:none"><?php echo $this->_tpl_vars['question']; ?>
</textarea>
				<div id="LiveHelpQuestionError" title="Question Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
<?php endif; ?>
		</table>
		<input name="LANGUAGE" id="LANGUAGE" type="hidden" value="<?php echo $this->_tpl_vars['language']; ?>
"/>
		<div id="LiveHelpConnectButton" class="sprite ConnectButton"></div>
	</div>
	</div>

	<div id="LiveHelpChat"<?php if (! $this->_tpl_vars['connected']): ?> style="display:none"<?php endif; ?>>
	<div id="LiveHelpToolbar" style="position:absolute; <?php if ($this->_tpl_vars['SETTINGS']['CAMPAIGNIMAGE']): ?>right:140px;<?php else: ?>right:15px;<?php endif; ?> top:35px; width:78px; height:20px">
		<div id="LiveHelpEmailChatToolbarButton" title="<?php echo $this->_tpl_vars['LOCALE']['emailchat']; ?>
" class="sprite Email" style="display:none; position:absolute; top:0px; left:0px; opacity:0.5"></div>
		<div id="LiveHelpSoundToolbarButton" title="<?php echo $this->_tpl_vars['LOCALE']['togglesound']; ?>
" class="sprite SoundOn" style="position:absolute; top:0px; left:20px; opacity:0.5"></div>
		<div id="LiveHelpFeedbackToolbarButton" title="<?php echo $this->_tpl_vars['LOCALE']['feedback']; ?>
" class="sprite Feedback" style="position:absolute; top:0px; left:40px; opacity:0.5"></div>
		<div id="LiveHelpDisconnectToolbarButton" title="<?php echo $this->_tpl_vars['LOCALE']['disconnect']; ?>
" class="sprite Disconnect" style="position:absolute; top:0px; left:60px; opacity:0.5"></div>
	</div>
	<div id="LiveHelpScrollBorder" style="position:relative; height:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWHEIGHT']-185; ?>
px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-150; ?>
px; margin:0 0 20px 5px; border-radius:3px; -moz-border-radius:3px; webkit-border-radius:3px; border: 1px solid #d0d0bf; background-color:#fff">
		<div id="LiveHelpScroll" style="position:absolute; overflow:auto; text-align:left; left:10px">
		<div id="LiveHelpWaiting" class="box"><?php echo $this->_tpl_vars['LOCALE']['thankyoupatience']; ?>
</div>
<?php if ($this->_tpl_vars['SETTINGS']['OFFLINEEMAILREDIRECT']): ?>
	<div id="LiveHelpContinue" class="box" style="border:none; background:none; text-align:right; display:none;"><?php echo $this->_tpl_vars['LOCALE']['continuewaiting']; ?>
 <a href="<?php echo $this->_tpl_vars['SETTINGS']['OFFLINEEMAILREDIRECT']; ?>
" target="_blank"><?php echo $this->_tpl_vars['LOCALE']['offlineemail']; ?>
</a> ?</div>
<?php elseif ($this->_tpl_vars['SETTINGS']['OFFLINEEMAIL']): ?>
	<div id="LiveHelpContinue" class="box" style="border:none; background:none; text-align:right; display:none;"><?php echo $this->_tpl_vars['LOCALE']['continuewaiting']; ?>
 <a href="offline.php" target="_top"><?php echo $this->_tpl_vars['LOCALE']['offlineemail']; ?>
</a> ?</div>
<?php endif; ?>
		<div id="LiveHelpMessages" style="margin-left:5px"></div>
		<div id="LiveHelpMessagesEnd"></div>
		</div>
	</div>
<?php if ($this->_tpl_vars['SETTINGS']['CAMPAIGNIMAGE']): ?>
	<div id="LiveHelpCampaign" style="position:absolute; right:5px; top:80px; width:125px;">
		<?php if ($this->_tpl_vars['SETTINGS']['CAMPAIGNLINK']): ?><a href="<?php echo $this->_tpl_vars['SETTINGS']['CAMPAIGNLINK']; ?>
" target="_blank"><?php endif; ?><img src="<?php echo $this->_tpl_vars['SETTINGS']['CAMPAIGNIMAGE']; ?>
" border="0" alt="Live Help - Welcome, how can I be of assistance?" style="position:relative; top:-20px"/><?php if ($this->_tpl_vars['SETTINGS']['CAMPAIGNLINK']): ?></a><?php endif; ?>
	</div>
<?php endif; ?>
	<div id="LiveHelpTypingPopup"><div class="sprite Typing"></div><span></span></div>
<?php if ($this->_tpl_vars['SETTINGS']['SMILIES']): ?>
	<div id="LiveHelpSmiliesButton" style="width:24px; height:24px; position:absolute; bottom:65px; right:105px; top:auto; left:auto">
		<img class="trigger" src="images/Smile.png" id="download" title="Smilies" alt="Smilies"/>
		<div id="SmiliesTooltip" style="display:none;"><div><span title="Laugh" class="sprite Laugh"></span><span title="Smile" class="sprite Smile"></span><span title="Sad" class="sprite Sad"></span><span title="Money" class="sprite Money"></span><span title="Impish" class="sprite Impish"></span><span title="Sweat" class="sprite Sweat"></span><span title="Cool" class="sprite Cool"></span><br/><span title="Frown" class="sprite Frown"></span><span title="Wink" class="sprite Wink"></span><span title="Surprise" class="sprite Surprise"></span><span title="Woo" class="sprite Woo"></span><span title="Tired" class="sprite Tired"></span><span title="Shock" class="sprite Shock"></span><span title="Hysterical" class="sprite Hysterical"></span><br/><span title="Kissed" class="sprite Kissed"></span><span title="Dizzy" class="sprite Dizzy"></span><span title="Celebrate" class="sprite Celebrate"></span><span title="Angry" class="sprite Angry"></span><span title="Adore" class="sprite Adore"></span><span title="Sleep" class="sprite Sleep"></span><span title="Quiet" class="sprite Stop"></span></div></div>
	</div>
<?php endif; ?>
	<div style="position:absolute; bottom:90px; left:5px; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-140; ?>
px">
		<textarea id="LiveHelpMessageTextarea" placeholder="<?php echo $this->_tpl_vars['LOCALE']['enteryourmessage']; ?>
" style="top:auto; left:0; width:<?php echo $this->_tpl_vars['SETTINGS']['CHATWINDOWWIDTH']-160; ?>
px; height:45px; padding:2px; margin-left:10px; font-family:<?php echo $this->_tpl_vars['SETTINGS']['CHATFONT']; ?>
; font-size:<?php echo $this->_tpl_vars['SETTINGS']['CHATFONTSIZE']; ?>
; resize:none" rows="2" cols="250"></textarea>
	</div>
	<div id="LiveHelpSendButton" style="position:absolute; bottom:48px; right:45px; cursor:pointer" class="sprite SendButton">
		<div id="LiveHelpSendButtonText" title="<?php echo $this->_tpl_vars['LOCALE']['sendmsg']; ?>
" style="position:relative; text-align:center; width:54px; line-height:42px; color:#fff; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:12px; cursor:pointer"><?php echo $this->_tpl_vars['LOCALE']['send']; ?>
</div>
	</div>
	<iframe id="FileDownload" name="FileDownload" frameborder="0" height="0" width="0" style="visibility:hidden; display:none; border:none"></iframe>
	<div id="LiveHelpDisconnect" style="display:none; margin:20px 20px 75px 20px">
		<div style="font-family:'Open Sans', sans-serif; text-shadow:0 0 2px #ccc; letter-spacing:-1px; font-size:25px; font-weight:700; line-height:28px; color:#999"><?php echo $this->_tpl_vars['LOCALE']['disconnecttitle']; ?>
</div><br/>
		<span><?php echo $this->_tpl_vars['LOCALE']['disconnectdescription']; ?>
</span>
		<div id="LiveHelpDisconnectButton" class="sprite DisconnectButton" style="position:absolute; bottom:10px; right:111px">
			<div style="position:absolute; line-height:39px; width:119px; text-align:center; color:#fff; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer">Disconnect</div>
		</div>
		<div id="LiveHelpCancelButton" class="sprite CancelButton" style="position:absolute; bottom:10px; right:10px">
			<div style="position:absolute; line-height:39px; width:91px; text-align:center; color:#999; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer"><?php echo $this->_tpl_vars['LOCALE']['cancel']; ?>
</div>
		</div>
	</div>
	</div>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => ($this->_tpl_vars['template'])."/footer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>