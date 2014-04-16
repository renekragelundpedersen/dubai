{include file="$template/header.tpl"}

	<form action="call.php" method="post" id="CallMessageForm">
		<table border="0" align="center" cellpadding="2" cellspacing="2" style="position:relative">
		<tr>
			<td>&nbsp;</td>
			<td colspan="2" valign="bottom"><div align="center">{$LOCALE.enterdetailscallback}</div></td>
		</tr>
{if $error}
		<tr>
			<td>&nbsp;</td>
			<td colspan="2" valign="bottom"><div align="center"><strong>{$error}</strong></div></td>
		</tr>
{/if}
		<tr>
			<td>&nbsp;</td>
			<td valign="middle"><div align="right">{$LOCALE.name}:</div></td>
			<td><div style="position:relative; text-align:left; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><input id="NAME" type="text" value="{$name}" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}/>
				<div id="NameError" title="Name Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td valign="middle"><div align="right">{$LOCALE.email}:</div></td>
			<td><div style="position:relative; text-align:left; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><input id="EMAIL" type="text" value="{$email}" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px;; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}/>
				<div id="EmailError" title="Email Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td valign="middle"><div align="right">{$LOCALE.telephone}:</div></td>
			<td style="text-align:left;">
				<div style="position:relative; width:200px">
					<select id="COUNTRY" style="float:left; width:175px; font-family:{$SETTINGS.CHATFONT}; font-size:{$SETTINGS.CHATFONTSIZE}; color:#555; outline:none; padding:3px; margin:2px 0 5px 0; font-size:16px; background:#FBFBFB;">
						<option value="&nbsp;">&nbsp;</option>
						{html_options values=$countries output=$countries selected=$selected}
					</select>
					<div id="CountryError" title="Country Required" class="sprite" style="display:none; position:absolute; right:5px; top:8px"></div>
				</div>
				<div style="position:relative; text-align:left; float:left; margin:2px 0 2px 30px; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:195px">
					<input id="TELEPHONE" type="text" value="{$telephone}" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:170px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}/>
					<div id="TelephoneError" title="Telephone Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div>
				</div>
			</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td valign="top"><div align="right">{$LOCALE.message}:</div></td>
			<td align="right" valign="top"><div align="left">
				<div style="position:relative; text-align:left; background:#FBFBFB; border:1px solid #E5E5E5; height:80px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><textarea id="MESSAGE" cols="30" rows="6" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px; height:80px; vertical-align:middle; font-family:{$SETTINGS.CHATFONT}; resize:none; overflow:auto; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}>{$message}</textarea>
				<div id="MessageError" title="Message Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
		</tr>
{if $security}
		<tr>
			<td>&nbsp;</td>
			<td align="right" valign="middle">{$LOCALE.securitycode}:</td>
			<td align="left" valign="middle"><span style="height:30px; vertical-align:middle">
			<div style="position:relative; text-align:left; background:#FBFBFB; border:1px solid #E5E5E5; width:125px; height:20px; padding:3px">
				<input id="CAPTCHA" type="text" value="" size="6" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0px; padding:0px; font-size:16px; width:100px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" maxlength="5" {if $disabled}disabled="disabled"{/if}/>
				<div id="SecurityError" title="Security Code Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div>
				<img id="LiveHelpCallSecurity" src="{$url}security.php?{$time}{if $captcha}&SECURITY={$captcha}{/if}{if $embed}&EMBED{/if}" style="position:absolute; left:135px; top:0; width:80px; height:30px; vertical-align:middle" alt="Security Code"/><div id="LiveHelpCallSecurityRefresh" class="sprite Refresh" style="position:absolute; left:210px; top:0; cursor:pointer"></div>
			</div>
			</span></td>
		</tr>
{/if}
		<tr>
			<td>&nbsp;</td>
			<td colspan="2" valign="top">
				<input id="TIMEZONE" type="hidden" value=""/>
				<input id="COMPLETE" type="hidden" value="1"/>
				<input id="COOKIE" type="hidden" value="{$cookie}"/>
				<input id="LANGUAGE" type="hidden" value="{$language}"/>
				<div id="LiveHelpCallButton" class="sprite OfflineButton" style="position:relative; margin:5px auto">
					<div style="position:absolute; line-height:39px; width:140px; text-align:center; color:#fff; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer">{$LOCALE.continue}</div>
				</div>
			</td>
		</tr>
		</table>
	</form>
	<div id="CallDialog" style="display:none; width:350px; margin:10px">
		<div id="CallStatusHeading" style="font-family:'Open Sans', sans-serif; letter-spacing:-1px; text-shadow:0 0 1px #ccc; font-size:32px; font-weight:100; line-height:35px; color:#999">{$LOCALE.pleasewait}</div>
		<img src="images/Microphone.png" width="83" height="123" style="margin:10px"/>
		<div id="CallStatusDescription">{$LOCALE.telephonecallshortly}<br/>{$LOCALE.telephonethankyoupatience}</div>
		<div id="CallCancelButton" class="sprite CancelButton" style="position:relative; top:10px; margin:0 auto">
			<div style="position:absolute; line-height:39px; width:91px; text-align:center; color:#999; font-family:Helvetica, Verdana, Arial, sans-serif; font-size:14px; cursor:pointer">{$LOCALE.cancel}</div>
		</div>
	</div>
	
{include file="$template/footer.tpl"}