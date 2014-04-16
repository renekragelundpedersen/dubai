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
include('include/database.php');
include('include/class.mysql.php');
include('include/class.aes.php');
include('include/class.cookie.php');
include('include/phpmailer/class.phpmailer.php');
include('include/functions.php');
include('include/config.php');

ignore_user_abort(true);

if (!isset($_REQUEST['RATING'])){ $_REQUEST['RATING'] = ''; }

header('Content-type: text/html; charset=utf-8');

if (file_exists('./locale/' . LANGUAGE . '/guest.php')) {
	include('./locale/' . LANGUAGE . '/guest.php');
}
else {
	include('./locale/en/guest.php');
}

// Override Session
$request = 0;
$chat = 0;
if (isset($_REQUEST['SESSION'])) {
	$cookie = rawurldecode($_REQUEST['SESSION']);

	$aes = new AES256($_SETTINGS['AUTHKEY']);

	$size = strlen($aes->iv);
	$iv = substr($cookie, 0, $size);
	$verify = substr($cookie, $size, 40);
	$ciphertext = substr($cookie, 40 + $size);

	$decrypted = $aes->decrypt($ciphertext, $iv);

	if (sha1($decrypted) == $verify) {
		$cookie = json_decode($decrypted, true);
		$request = $cookie['visitor'];
		$chat = $cookie['chat'];
	}
}

$query = sprintf("SELECT `id`, `username`, `active` FROM `" . $table_prefix . "chats` WHERE `id` = '%d' LIMIT 1", $chat);
$row = $SQL->selectquery($query);
if (is_array($row)) {

	// Update Rating
	$rating = intval($_REQUEST['RATING']);
	if (!empty($rating) && $rating > 0 && $rating < 6) {
		$query = sprintf("UPDATE " . $table_prefix . "chats SET `rating` = '%d' WHERE `id` = '%d' LIMIT 1", $rating, $chat);
		$SQL->updatequery($query);
		
		if ($_SETTINGS['TRANSCRIPTVISITORALERTS'] == true) {
			$id = $row['id'];
			$username = $row['username'];
			$active = $row['active'];
					
			if ($active > 0) {
				$message = sprintf($_LOCALE['ratedchat'], $username, $rating);
				$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('%d', '%s', NOW(), '%s', '2', '-3')", $id, $SQL->escape($username), $SQL->escape($message));
				$SQL->insertquery($query);
			}
		}
		
		exit();
	}
	else {
		
		$query = sprintf("SELECT `username`, `chats`.`request`, `active`, `custom`, UNIX_TIMESTAMP(`datetime`) AS `datetime` FROM " . $table_prefix . "chats AS chats, " . $table_prefix . "custom AS custom WHERE `chats`.`request` = `custom`.`request` AND `chats`.`id` = '%d' AND `reference` = 'WHMCS' LIMIT 1", $chat);
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$username = $row['username'];
			$active = $row['active'];
			$request = $row['request'];
			$datetime = $row['datetime'];
			$custom = (int)$row['custom'];
			
			if ($active > 0 && $custom > 0) {
				$query = sprintf("UPDATE " . $table_prefix . "chats SET `active` = '-1' WHERE `id` = '%d' LIMIT 1", $chat);
				$SQL->updatequery($query);
				
				$query = sprintf("UPDATE " . $table_prefix . "requests SET `initiate` = '0' WHERE `id` = '%d'", $request);
				$SQL->updatequery($query);
				
				if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
					// Insert Closed Chat Activity
					$message = 'closed the Live Help chat';
					
					$query = sprintf("INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `duration`, `type`, `status`) VALUES ('%d', '%s', NOW(), '%s', UNIX_TIMESTAMP(NOW()) - %d, 9, 0)", $chat, $SQL->escape($username), $SQL->escape($message), $datetime);
					$SQL->insertquery($query);
				}
				
				// WHMCS Plugin
				if (isset($_PLUGINS) && $_PLUGINS['WHMCS'] == true) {
					
					include('plugins/whmcs/functions.php');

					// WHMCS ID
					$query = sprintf("SELECT `custom` FROM `" . $table_prefix . "custom` AS custom, `" . $table_prefix . "chats` As chats WHERE custom.request = chats.request AND chats.id = '%d' ORDER BY custom.id LIMIT 1", $chat);
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$session = $row['custom'];

						// Log Chat Ticket
						$seeds = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
						$c = null;
						$seeds_count = strlen($seeds) - 1;
						for ($i = 0; 8 > $i; $i++) {
							$c .= $seeds[rand(0, $seeds_count)];
						}
						
						// Department
						$query = 'SELECT `id` FROM `tblticketdepartments` WHERE `hidden` = "" ORDER BY `order` ASC LIMIT 1';
						$row = $SQL->selectquery($query);
						if (is_array($row)) {
							$department = $row['id'];
								
							// Chat Transcript
							$query = sprintf("SELECT `username`, `message`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '%d' AND `status` <= '3' ORDER BY `datetime`", $chat);
							$row = $SQL->selectquery($query);
							$transcript = '';
							
							$transcript .= '[div="chat"]';
							while ($row) {
								if (is_array($row)) {
									$username = $row['username'];
									$message = $row['message'];
									$status = $row['status'];
									
									// Operator
									if ($status) {
										$transcript .= '[div="operator"][div="name"]' . $username . ' ' . $_LOCALE['says'] . ':[/div][div="message"]' . $message . '[/div][/div]'; 
									}
									// Guest
									if (!$status) {
									
										// Replace HTML Code
										$message = str_replace('<', '&lt;', $message);
										$message = str_replace('>', '&gt;', $message);
									
										$transcript .= '[div="visitor"][div="name"]' . $username . ' ' . $_LOCALE['says'] . ':[/div][div="message"]' . $message . '[/div][/div]'; 
									}
									$row = $SQL->selectnext();
								}
							}
							$transcript .= '[/div]';
							$transcript = preg_replace("/(\r\n|\r|\n)/", '<br/>', $transcript);
							
							// Insert Live Help Chat
							$query = sprintf("INSERT INTO `tbltickets` (`did`, `userid`, `c`, `date`, `title`, `message`, `status`, `urgency`, `lastreply`) VALUES ('%s', '%d', '%s', NOW(), 'Chat Log " . date('d/m/Y H:i') . "', '%s', 'Closed', 'Medium', NOW())", $SQL->escape($department), $session, $c, $SQL->escape($transcript));
							$id = $SQL->insertquery($query);

							// WHMCS Ticket Masking
							$mask = genTicketMask($id);

							// Update Mask Ticket ID
							$query = sprintf("UPDATE `tbltickets` SET `tid` = '%s' WHERE `id` = '%d'", $SQL->escape($mask), $id);
							$SQL->updatequery($query);

						}
					}
				}
				
			}
		} else {
			$query = sprintf("SELECT `username`, `request`, `active`, UNIX_TIMESTAMP(`datetime`) AS `datetime` FROM " . $table_prefix . "chats AS chats WHERE `id` = '%d' LIMIT 1", $chat);
			$row = $SQL->selectquery($query);
			if (is_array($row)) {
				$username = $row['username'];
				$request = $row['request'];
				$active = $row['active'];
				$datetime = $row['datetime'];

				if ($active > 0) {
					$query = sprintf("UPDATE " . $table_prefix . "chats SET `active` = '-1' WHERE `id` = '%d' LIMIT 1", $chat);
					$SQL->updatequery($query);
					
					$query = sprintf("UPDATE " . $table_prefix . "requests SET `initiate` = '0' WHERE `id` = '%d'", $request);
					$SQL->updatequery($query);
					
					if ($_SETTINGS['SERVERVERSION'] >= 3.90) {
						// Insert Closed Chat Activity
						$message = 'closed the Live Help chat';
						
						$query = sprintf("INSERT INTO " . $table_prefix . "activity(`user`, `username`, `datetime`, `activity`, `duration`, `type`, `status`) VALUES ('%d', '%s', NOW(), '%s', UNIX_TIMESTAMP(NOW()) - %d, 9, 0)", $chat, $SQL->escape($username), $SQL->escape($message), $datetime);
						$SQL->insertquery($query);
					}
				}
			}
		}
		
		// Send Chat Transcript
		if (isset($_SETTINGS['AUTOEMAILTRANSCRIPT']) && $_SETTINGS['AUTOEMAILTRANSCRIPT'] != '') {

			$query = sprintf("SELECT `username`, `message`, `status` FROM " . $table_prefix . "messages WHERE `chat` = '%d' AND `status` <= '3' ORDER BY `datetime`", $chat);
			$row = $SQL->selectquery($query);
			$htmlmessages = '';
			while ($row) {
				if (is_array($row)) {
					$username = $row['username'];
					$message = $row['message'];
					$status = $row['status'];
					
					switch ($status) {
						case -3: // Chat Rating
							
							break;
						case -2: // Visitor Alert
							// Issue: Outlook 2007 / 2010 doesn't support CSS Float and Position use align attribute instead 
							$htmlmessages .= '<img src="' . $_SETTINGS['URL'] . '/livehelp/images/16px/Visitor.png" style="margin-right:5px" align="left" width="16" height="16" /><div style="margin-left:15px; color:#666666;">' . $message . '</div>' . $eol; 
							break;
						case 2: // Hyperlink
							list($description, $link) = explode("\n", $message);
							$message = '<a href="' . trim($link) . '" alt="' . trim($description) . '">' . trim($link) . '</a>';
							$htmlmessages .= '<div style="margin-left:15px">' . trim($description) . ' - ' . $message . '</div>' . $eol;
							break;
						case 3: // Image
							list($description, $image) = explode("\n", $message);
							$message = '<img src="' . trim($image) . '" alt="Received Image">';
							$htmlmessages .= '<div style="margin-left:15px">' . $message . '</div>' . $eol;
							break;
						default:
							// Remove HTML code
							$message = str_replace('<', '&lt;', $message);
							$message = str_replace('>', '&gt;', $message);
							$message = preg_replace("/(\r\n|\r|\n)/", '<br />', $message);
							
							// Emoticons
							$message = htmlSmilies($message, $_SETTINGS['URL'] . '/livehelp/images/16px/', $eol);
							
							// Operator
							if ($status) {
								$htmlmessages .= '<div style="color:#666666">' . $username . ' ' . $_LOCALE['says'] . ':</div><div style="margin-left:15px; color:#666666;">' . $message . '</div>' . $eol; 
							}
							// Guest
							if (!$status) {
								$htmlmessages .= '<div>' . $username . ' ' . $_LOCALE['says'] . ':</div><div style="margin-left: 15px;">' . $message . '</div>' . $eol; 
							}
							
							break;
					}
							
					$row = $SQL->selectnext();
				}
			}
			
			$query = sprintf("SELECT `requests`.*, `chats`.email FROM " . $table_prefix . "requests AS `requests`, " . $table_prefix . "chats AS `chats`  WHERE `chats`.`request` = `requests`.`id` AND `chats`.`id` = '%d' LIMIT 1", $chat);
			$row = $SQL->selectquery($query);
			if (is_array($row)) {

				// Visitor
				$email = $row['email'];
				$hostname = $row['ipaddress'];
				$useragent = $row['useragent'];
				$resolution = $row['resolution'];
				$country = $row['country'];
				$referrer = $row['referrer'];
				$current = $row['url'];
				$path = $row['path'];

				// Email
				$email = $row['email'];
				if (empty($email)) { $email = 'Unavailable'; }

				// Browser Icon
				if (strpos($useragent, 'Chrome') !== false) {
					$browser = 'Chrome.png';
				} else if (strpos($useragent, 'Safari') !== false) {
					$browser = 'Safari.png';
				} else if (strpos($useragent, 'Opera') !== false) {
					$browser = 'Opera.png';
				} else if (strpos($useragent, 'Netscape') !== false) {
					$browser = 'Netscape.png';
				} else if (strpos($useragent, 'Firefox') !== false) {
					$browser = 'Firefox.png';
				} else if (strpos($useragent, 'MSIE') !== false) {
					$browser = 'InternetExplorer7.png';
				} else {
					$browser = '';
				}
					
			}

			// Disabled within Email Transcript
			//$htmlmessages = preg_replace("/(\r\n|\r|\n)/", '<br/>', $htmlmessages);
			
			$html = <<<END
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<!--

div, p {
	font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #000000;
}
#visitor {
	position: relative;
	margin-top: 25px;
	height: 180px;
}
.label {
	position: absolute;
	width: 80px;
	text-align: right;
	color: #666666;
}
.label-desc {
	position: absolute;
	left: 85px;
}

//-->
</style>
</head>

<body>
<div><img src="{$_SETTINGS['URL']}/livehelp/locale/{$_SETTINGS['LOCALE']}/images/ChatTranscript.gif" width="531" height="79" alt="{$_LOCALE['chattranscript']}" /></div>
<div><strong>{$_LOCALE['chattranscript']}:</strong></div>
<div>$htmlmessages</div>
<div id="visitor" class="visitor">
<!--// Removed Due to Outlook 2007 / 2010 Issues
  <img src="{$_SETTINGS['URL']}/livehelp/images/$browser" alt="Firefox" />
  <div style="position:absolute; left:130px; top:0px; width:100%">
//-->
	<div><span class="label">Hostname / IP Address:</span> <span id="email" class="label-desc">$hostname</span></div>
    <div><span class="label">Email:</span> <span id="email" class="label-desc">$email</span></div>
	<div><span class="label">Web Browser:</span> <span id="useragent" class="label-desc">$useragent</span></div>
    <div><span class="label">Resolution:</span> <span id="resolution" class="label-desc">$resolution</span></div>
    <div><span class="label">Country:</span> <span id="country" class="label-desc">$country</span></div>
    <div><span class="label">Referer:</span> <span id="referer" class="label-desc">$referrer</span></div>
    <div><span class="label">Current Page:</span> <span id="page" class="label-desc">$current</span>
    <div><span class="label">Page History:</span> <span id="history" class="label-desc">$path</span></div>
<!--// Removed Due to Outlook 2007 / 2010 Issues
  </div>
//-->
</div>
<div style="position:relative; margin-top:25px"><img src="{$_SETTINGS['URL']}/livehelp/locale/{$_SETTINGS['LOCALE']}/images/LogoSmall.png" width="217" height="52" alt="stardevelop.com" /></div>
</body>
</html>
END;
			
			if ($_SETTINGS['AUTOEMAILTRANSCRIPT'] != '' && !empty($htmlmessages)) {
				$mail = new PHPMailer(true);
				try {
					$mail->CharSet = 'UTF-8';
					$mail->AddReplyTo($_SETTINGS['EMAIL'], $_SETTINGS['NAME']);
					$mail->AddAddress($_SETTINGS['AUTOEMAILTRANSCRIPT']);
					$mail->SetFrom($_SETTINGS['EMAIL']);
					$mail->Subject = $_SETTINGS['NAME'] . ' ' . $_LOCALE['chattranscript'] . ' (' . $_LOCALE['autogenerated'] . ')';
					$mail->MsgHTML($html);
					$mail->Send();
					$result = true;
				} catch (phpmailerException $e) {
					trigger_error('Email Error: ' . $e->errorMessage(), E_USER_ERROR); 
					$result = false;
				} catch (Exception $e) {
					trigger_error('Email Error: ' . $e->getMessage(), E_USER_ERROR); 
					$result = false;
				}
			}
		}
	}
}
?>