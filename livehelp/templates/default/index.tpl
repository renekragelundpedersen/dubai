{include file="$template/header.tpl"}

	<div id="LiveHelpLogin" align="center" style="position:relative; top:10px; min-height:365px{if $connected}; display:none{/if}">
	{$LOCALE.welcome}<br/>
	{$LOCALE.enterguestdetails}
	
	<!--
	{if $SETTINGS.OFFLINEEMAILREDIRECT}
	{$LOCALE.elsesendmessage} <a href="{$SETTINGS.OFFLINEEMAILREDIRECT}" target="_blank">{$LOCALE.offlinemessage}</a>
	{elseif $SETTINGS.OFFLINEEMAIL}
	{$LOCALE.elsesendmessage} <a href="offline.php?LANGUAGE={$language}">{$LOCALE.offlinemessage}</a>
	{/if}
	-->
	{if $error}<br/><strong>{$error}</strong>{/if}
	<div id="LiveHelpLoginForm" class="LiveHelpLoginContent drop-shadow curved curved-hz-1" style="width:400px; color:#777">
		<table border="0" cellspacing="2" cellpadding="2">
			<tr>
				<td><div class="Label" align="right">{$LOCALE.name}</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="NAME" id="NAME" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="{$username}" maxlength="20"/>
				<div id="LiveHelpNameError" title="Name Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
{if $SETTINGS.LOGINEMAIL}
			<tr>
				<td><div class="Label" align="right">{$LOCALE.email}</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="EMAIL" id="EMAIL" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="{$email}">
				<div id="LiveHelpEmailError" title="Email Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
{/if}
{if $SETTINGS.LOGINTELEPHONE}
			<tr>
				<td><div class="Label" align="right">{$LOCALE.telephone}</div></td>
				<td style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:20px; padding:3px"><input type="text" name="TELEPHONE" id="TELEPHONE" style="width:225px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px;" value="{$telephone}">
				<div id="LiveHelpTelephoneError" title="Telephone Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
{/if}

{if $departments}
			<tr>
				<td><div class="Label" align="right">{$LOCALE.department}</div></td>
				<td style="text-align:left;">
			<div class="LiveHelpDepartment">
				<select name="DEPARTMENT" id="DEPARTMENT" style="width:250px;">
					{html_options values=$departments output=$departments selected=$selected}
				</select>
				<div id="LiveHelpDepartmentError" title="Department Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></td>
			</div>
		</tr>
{else if $department}
			<input name="DEPARTMENT" id="DEPARTMENT" type="hidden" value="{$department}"/>
{/if}
{if $SETTINGS.LOGINQUESTION}
			<tr>
				<td valign="top"><div class="Label" align="right">{$LOCALE.question}</div></td>
				<td valign="top" style="text-align:left;"><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:250px; height:80px; padding:3px"><textarea name="QUESTION" id="QUESTION" rows="3" cols="25" style="width:225px; height:80px; background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; resize:none">{$question}</textarea>
				<div id="LiveHelpQuestionError" title="Question Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
			</tr>
{/if}
		</table>
		<input name="LANGUAGE" id="LANGUAGE" type="hidden" value="{$language}"/>
		<div id="LiveHelpConnectButton" class="sprite ConnectButton"></div>
	</div>
	</div>

	<div id="LiveHelpChat"{if !$connected} style="display:none"{/if}>
	<div id="LiveHelpToolbar" style="position:absolute; {if $SETTINGS.CAMPAIGNIMAGE}right:140px;{else}right:15px;{/if} top:35px; width:78px; height:20px">
		<div id="LiveHelpEmailChatToolbarButton" title="{$LOCALE.emailchat}" class="sprite Email" style="display:none; position:absolute; top:0px; left:0px; opacity:0.5"></div>
		<div id="LiveHelpSoundToolbarButton" title="{$LOCALE.togglesound}" class="sprite SoundOn" style="position:absolute; top:0px; left:20px; opacity:0.5"></div>
		<div id="LiveHelpFeedbackToolbarButton" title="{$LOCALE.feedback}" class="sprite Feedback" style="position:absolute; top:0px; left:40px; opacity:0.5"></div>
		<div id="LiveHelpDisconnectToolbarButton" title="{$LOCALE.disconnect}" class="sprite Disconnect" style="position:absolute; top:0px; left:60px; opacity:0.5"></div>
	</div>
	<div id="LiveHelpScrollBorder" style="position:relative; height:{$SETTINGS.CHATWINDOWHEIGHT-185}px; width:{$SETTINGS.CHATWINDOWWIDTH-150}px; margin:0 0 20px 5px; border-radius:3px; -moz-border-radius:3px; webkit-border-radius:3px; border: 1px solid #d0d0bf; background-color:#fff">
		<div id="LiveHelpScroll" style="position:absolute; overflow:auto; text-align:left; left:10px">
		<div id="LiveHelpWaiting" class="box">{$LOCALE.thankyoupatience}</div>
{if $SETTINGS.OFFLINEEMAILREDIRECT}
	<div id="LiveHelpContinue" class="box" style="border:none; background:none; text-align:right; display:none;">{$LOCALE.continuewaiting} <a href="{$SETTINGS.OFFLINEEMAILREDIRECT}" target="_blank">{$LOCALE.offlineemail}</a> ?</div>
{elseif $SETTINGS.OFFLINEEMAIL}
	<div id="LiveHelpContinue" class="box" style="border:none; background:none; text-align:right; display:none;">{$LOCALE.continuewaiting} <a href="offline.php" target="_top">{$LOCALE.offlineemail}</a> ?</div>
{/if}
		<div id="LiveHelpMessages" style="margin-left:5px"></div>
		<div id="LiveHelpMessagesEnd"></div>
		</div>
	</div>
{if $SETTINGS.CAMPAIGNIMAGE}
	<div id="LiveHelpCampaign" style="position:absolute; right:5px; top:80px; width:125px;">
		{if $SETTINGS.CAMPAIGNLINK}<a href="{$SETTINGS.CAMPAIGNLINK}" target="_blank">{/if}<img src="{$SETTINGS.CAMPAIGNIMAGE}" border="0" alt="Live Help - Welcome, how can I be of assistance?" style="position:relative; top:-20px"/>{if $SETTINGS.CAMPAIGNLINK}</a>{/if}
	</div>
{/if}
	<div id="LiveHelpTypingPopup"><div class="sprite Typing"></div><span></span></div>
{if $SETTINGS.SMILIES}
	<div id="LiveHelpSmiliesButton" style="width:24px; height:24px; position:absolute; bottom:65px; right:105px; top:auto; left:auto">
		<img class="trigger" src="images/Smile.png" id="download" title="Smilies" alt="Smilies"/>
		<div id="SmiliesTooltip" style="display:none;"><div><span title="Laugh" class="sprite Laugh"></span><span title="Smile" class="sprite Smile"></span><span title="Sad" class="sprite Sad"></span><span title="Money" class="sprite Money"></span><span title="Impish" class="sprite Impish"></span><span title="Sweat" class="sprite Sweat"></span><span title="Cool" class="sprite Cool"></span><br/><span title="Frown" class="sprite Frown"></span><span title="Wink" class="sprite Wink"></span><span title="Surprise" class="sprite Surprise"></span><span title="Woo" class="sprite Woo"></span><span title="Tired" class="sprite Tired"></span><span title="Shock" class="sprite Shock"></span><span title="Hysterical" class="sprite Hysterical"></span><br/><span title="Kissed" class="sprite Kissed"></span><span title="Dizzy" class="sprite Dizzy"></span><span title="Celebrate" class="sprite Celebrate"></span><span title="Angry" class="sprite Angry"></span><span title="Adore" class="sprite Adore"></span><span title="Sleep" class="sprite Sleep"></span><span title="Quiet" class="sprite Stop"></span></div></div>
	</div>
{/if}
	<div style="position:absolute; bottom:90px; left:5px; width:{$SETTINGS.CHATWINDOWWIDTH-140}px">
		<textarea id="LiveHelpMessageTextarea" placeholder="{$LOCALE.enteryourmessage}" style="top:auto; left:0; width:{$SETTINGS.CHATWINDOWWIDTH-160}px; height:45px; padding:2px; margin-left:10px; font-family:{$SETTINGS.CHATFONT}; font-size:{$SETTINGS.CHATFONTSIZE}; resize:none" rows="2" cols="250"></textarea>
	</div>
	<div id="LiveHelpSendButton" style="position:absolute; bottom:48px; right:45px; cursor:pointer" class="sprite SendButton">
		<div id="LiveHelpSendButtonText" title="{$LOCALE.sendmsg}" style="position:relative; text-align:center; width:54px; line-height:42px; color:#fff; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:12px; cursor:pointer">{$LOCALE.send}</div>
	</div>
	<iframe id="FileDownload" name="FileDownload" frameborder="0" height="0" width="0" style="visibility:hidden; display:none; border:none"></iframe>
	<div id="LiveHelpDisconnect" style="display:none; margin:20px 20px 75px 20px">
		<div style="font-family:'Open Sans', sans-serif; text-shadow:0 0 2px #ccc; letter-spacing:-1px; font-size:25px; font-weight:700; line-height:28px; color:#999">{$LOCALE.disconnecttitle}</div><br/>
		<span>{$LOCALE.disconnectdescription}</span>
		<div id="LiveHelpDisconnectButton" class="sprite DisconnectButton" style="position:absolute; bottom:10px; right:111px">
			<div style="position:absolute; line-height:39px; width:119px; text-align:center; color:#fff; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer">Disconnect</div>
		</div>
		<div id="LiveHelpCancelButton" class="sprite CancelButton" style="position:absolute; bottom:10px; right:10px">
			<div style="position:absolute; line-height:39px; width:91px; text-align:center; color:#999; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer">{$LOCALE.cancel}</div>
		</div>
	</div>
	</div>

{include file="$template/footer.tpl"}