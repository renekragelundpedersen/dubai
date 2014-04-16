{if not $embed}
{include file="$template/header.tpl"}
{/if}

{if $embed}
<div style="background:url({$url}images/OfflineBackgroundTop.png) repeat-x; height:4px; margin:0 4px; position:relative; z-index:20; width:875px"></div>
{/if}
<div id="LiveHelpOffline" align="center" style="margin-top:10px;{if $embed}min-height:365px{/if}">
{if $embed}
<div style="margin-top:35px">
<div class="LiveHelpOfflineForm" style="position:absolute; right:20px; top:20px; background:url(images/OfflineStamp.png) no-repeat; width:149px; height:93px;"></div>
{/if}
<div id="LiveHelpOfflineHeading" style="{if not $embed}display:none; {/if}font-family:'RobotoLight', sans-serif; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:32px; line-height:35px; color:#999; margin:20px">{$LOCALE.sorryofflineemail}</div>
<div id="LiveHelpOfflineCloseButton" class="LiveHelpOfflineSent button" style="display:none; position:relative; margin-top:20px">{$LOCALE.closemessage}</div>
<div id="LiveHelpOfflineError" class="LiveHelpOfflineForm" style="display:none; background:#FFB0B0; border-radius:15px; -moz-border-radius:15px; -webkit-border-radius:15px; border:1px solid #9E1111; height:30px; margin:40px auto 0; padding:15px 0 0 15px; width:300px">
	<span class="sprite Cross" style="padding:5px 0 5px 30px">Error:  Please contact technical support via. email at <em>support at stardevelop dot com</em>.</span>
</div>
  <form action="offline.php" method="post" id="OfflineMessageForm" class="LiveHelpOfflineForm" style="padding:0px; margin:0px;">
    <table border="0" align="center" cellpadding="2" cellspacing="2">
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div id="LiveHelpOfflineDescription" align="center">{$LOCALE.unfortunatelyoffline}<br/>{$LOCALE.filldetailsbelow}:</div></td>
      </tr>
	  {if $error}
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div align="center"><strong>{$error}</strong></div></td>
      </tr>
	  {elseif $disabled}
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" valign="bottom"><div align="center"><strong>{$LOCALE.featuredisabled}</strong></div></td>
      </tr>
      {/if}
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="NAME">{$LOCALE.name}</label></td>
        <td><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><input name="NAME" type="text" id="NAME" value="{$name}" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}/>
          <div id="NameError" title="Name Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="EMAIL">{$LOCALE.email}</label></td>
        <td><div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:20px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><input name="EMAIL" type="text" id="EMAIL" value="{$email}" size="40" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px;; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}/>
          <div id="EmailError" title="Email Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="top"><label style="display:inline" for="MESSAGE">{$LOCALE.message}</label></td>
        <td align="right" valign="top"><div align="left">
            <div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; height:{$SETTINGS.CHATWINDOWHEIGHT-340}px; padding:3px; width:{$SETTINGS.CHATWINDOWWIDTH-225}px"><textarea name="MESSAGE" cols="30" rows="6" id="MESSAGE" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0; padding:0; font-size:16px; width:{$SETTINGS.CHATWINDOWWIDTH-250}px; height:{$SETTINGS.CHATWINDOWHEIGHT-340}px; vertical-align:middle; font-family:{$SETTINGS.CHATFONT}; resize:none; overflow:auto; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" {if $disabled}disabled="disabled"{/if}>{$message}</textarea>
            <div id="MessageError" title="Message Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div></div></td>
      </tr>
	  {if $security}
      <tr>
        <td>&nbsp;</td>
        <td align="right" valign="middle"><label style="display:inline" for="CAPTCHA">{$LOCALE.securitycode}</label></td>
        <td align="left" valign="middle"><span style="height:30px; vertical-align:middle">
		<div style="position:relative; background:#FBFBFB; border:1px solid #E5E5E5; width:125px; height:20px; padding:3px">
			<input name="CAPTCHA" type="text" id="CAPTCHA" value="" size="6" style="background:#FBFBFB; color:#555; border:none; outline:none; margin:0px; padding:0px; font-size:16px; width:100px; -webkit-box-shadow:none; -moz-box-shadow:none; -box-shadow:none" maxlength="5" {if $disabled}disabled="disabled"{/if}/>
			<div id="SecurityError" title="Security Code Required" class="sprite" style="display:none; position:absolute; right:5px; top:5px"></div>
			<img id="LiveHelpOfflineSecurity" src="{$url}security.php?{$time}{if $captcha}&SECURITY={$captcha}{/if}{if $embed}&EMBED{/if}" style="position:absolute; left:135px; top:0; width:80px; height:30px; vertical-align:middle" alt="Security Code"/><div id="LiveHelpOfflineSecurityRefresh" class="sprite Refresh" style="position:absolute; left:210px; top:0; cursor:pointer"></div>
		</div>
        </span></td>
      </tr>
	  {/if}
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" align="right" valign="top">
			<div align="center"><input name="BCC" id="BCC" type="checkbox" value="1" {if $disabled}disabled="disabled"{/if}/><label style="display:inline; padding-left:3px" for="BCC">{$LOCALE.sendcopy}</label></div>
		</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" align="right" valign="top"><div align="center">
            <input name="COOKIE" type="hidden" id="COOKIE" value="{$cookie}"/>
			      <input name="LANGUAGE" type="hidden" id="LANGUAGE" value="{$language}"/>
      <div align="center">
				<div id="LiveHelpOfflineButton" class="button" style="position:relative; margin-top:5px">{$LOCALE.sendmsg}</div>
			</div>
{if $embed}
			<div class="LiveHelpOfflineForm" style="margin: auto 0; margin:25px 0; background: url(images/OfflineSuggestions.png); width:344px; height:27px"></div>
{/if}
		</td>
      </tr>
    </table>
  </form>
  <div id="LiveHelpOfflineSent" style="display:none; position:relative; padding-top:80px; text-align:center">
	<div style="font-family:'RobotoLight', sans-serif; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:32px; line-height:35px; color:#999; margin:20px">{$LOCALE.thankyoumessagesent}</div>
	<div style="margin-bottom:20px">{$LOCALE.thankyouenquiry}<br/>{$LOCALE.contactedsoon}</div>
  <div style="text-align:center">
	  <div id="LiveHelpOfflineCloseButton" class="button" style="position:relative; margin:0 auto">{$LOCALE.closemessage}</div>
  </div>
  </div>
</div>
{if not $embed}
{include file="$template/footer.tpl"}
{else}
</div>
{if $LOCALE.stardevelopcopyright}
<a href="http://livehelp.stardevelop.com/" target="_blank" title="Powered by Live Chat Software"><div class="LiveHelpOfflinePoweredBy sprite PoweredByLiveHelp" style="position:absolute; right:20px; bottom:10px"></div></a>
{/if}
<div style="background:url({$url}images/OfflineBackgroundBottom.png) repeat-x; height:4px; position:relative; left:0; right:0; bottom:0; margin:0 3px; z-index:20"></div>
{/if}