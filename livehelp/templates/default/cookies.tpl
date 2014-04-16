{include file="$template/header.tpl"}

  <div>{$LOCALE.welcome}<br/>
    {$LOCALE.alsosendmessage}.</div>
  <table width="400" align="center" border="0" cellpadding="5">
    <tr>
      <td width="32"><img src="images/note.gif" alt="{$LOCALE.cookieserror}" width="53" height="57" border="0"/></td>
      <td><div>
          <p><span class="heading"><em>{$LOCALE.cookieserror}</em></span><em><strong><br/>
            </strong>{$LOCALE.cookiesenable}</em></p>
          <p><em>{$LOCALE.cookieselse}</em></p>
        </div></td>
    </tr>
  </table>
{include file="$template/footer.tpl"}