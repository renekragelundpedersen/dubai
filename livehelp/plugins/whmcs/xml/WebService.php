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
include('../../../include/database.php');
include('../../../include/class.mysql.php');
include('../../../include/config.php');
include('../../../include/version.php');
include('../../../include/functions.php');

set_time_limit(0);
ignore_user_abort(true);

// Database Connection
if (DB_HOST == '' || DB_NAME == '' || DB_USER == '' || DB_PASS == '') {
	// HTTP Service Unavailable
	if (strpos(php_sapi_name(), 'cgi') === false ) { header('HTTP/1.0 503 Service Unavailable'); } else { header('Status: 503 Service Unavailable'); }
	exit();
}

if (!isset($_REQUEST['Username'])){ $_REQUEST['Username'] = ''; }
if (!isset($_REQUEST['Password'])){ $_REQUEST['Password'] = ''; }
$_OPERATOR = array();

if (IsAuthorized() == true) {

	$_REQUEST = array_map('addslashes', $_REQUEST);

	switch ($_SERVER['QUERY_STRING']) {
		case 'Client':
			Client();
			break;
		case 'Tickets':
			Tickets();
			break;
		case 'Replies':
			Ticket();
			break;
		default:
			if (strpos(php_sapi_name(), 'cgi') === false ) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
			break;
	}
	
} else {

	if (strpos(php_sapi_name(), 'cgi') === false ) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
	break;
}

exit();


function IsAuthorized() {

	global $_OPERATOR;
	global $SQL;
	global $table_prefix;

	$query = sprintf("SELECT `id`, `username`, `password`, `firstname`, `lastname`, `department`, `datetime`, `privilege`, `status` FROM `" . $table_prefix . "users` WHERE `username` LIKE BINARY '%s' AND `disabled` = 0", $SQL->escape($_REQUEST['Username']));
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$length = strlen($row['password']);
		if ($row['password'] == $_REQUEST['Password']) {
			return true;
		} else {
			switch ($length) {
				case 40: // SHA1
					$version = '2.0';
					break;
				case 128: // SHA512
					$version = '3.0';
					break;
				default: // MD5
					$version = '1.0';
					break;
			}
			header('X-Authentication: ' . $version);
		}
	}
	return false;
}

function Client() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }

	$query = sprintf("SELECT * FROM `tblclients` WHERE `id` = %d LIMIT 1", $_REQUEST['ID']);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
	
		$id = $row['id'];
		$name = $row['firstname'] . ' ' . $row['lastname'];
		$email = $row['email'];
		$telephone = $row['phonenumber'];
	
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Client ID="<?php echo($id); ?>">
	<Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
	<Email><?php echo(xmlelementinvalidchars($email)); ?></Email>
	<Telephone><?php echo(xmlelementinvalidchars($telephone)); ?></Telephone>
</Client>
<?php
	} else {
?>
<Client/>
<?php
	}
}

function Tickets() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }
	if (!isset($_REQUEST['Status'])){ $_REQUEST['Status'] = ''; }

	$query = sprintf("SELECT `id`, `tid`, `date`, `title`, `message` FROM `tbltickets` WHERE `status` NOT LIKE 'Closed' AND `userid` = %d ORDER BY `date` DESC", $_REQUEST['ID']);
	$rows = $SQL->selectall($query);
	
	if (is_array($rows)) {
	
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Tickets>
<?php
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				
				$id = $row['id'];
				$tid = $row['tid'];
				$date = $row['date'];
				$title = $row['title'];
				$message = $row['message'];
				
				$message = str_replace('<br />', '', $message);
				
?>
	<Ticket ID="<?php echo($id); ?>">
		<Date><?php echo(xmlelementinvalidchars($date)); ?></Date>
		<Title><?php echo(xmlelementinvalidchars($title)); ?></Title>
		<Message><?php echo(xmlelementinvalidchars($message)); ?></Message>
<?php

				$query = sprintf("SELECT `id`, `tid`, `userid`, `name`, `email`, `date`, `message`, `admin`, `attachment`, `rating` FROM `tblticketreplies` WHERE `tid` = %d ORDER BY `date` ASC", $id);
				$replies = $SQL->selectall($query);

				if (is_array($replies)) {
?>
		<Replies>
<?php
					foreach ($replies as $key => $reply) {
						if (is_array($reply)) {
							
							$id = $reply['id'];
							$tid = $reply['tid'];
							$userid = $reply['userid'];
							$date = $reply['date'];
							$name = $reply['admin'];
							$message = $reply['message'];
							$rating = $reply['rating'];
							
							if ($userid > 0) {
								$query = sprintf('SELECT `id`, `firstname`, `lastname` FROM `tblclients` WHERE `id` = %d LIMIT 1', $userid);
								$client = $SQL->selectquery($query);
								if (is_array($client)) {
									$name = $client['firstname'] . ' ' . $client['lastname'];
								} else {
									$name = '';
								}
							}
							
							$message = str_replace('<br />', '', $message);
							
?>
			<Reply ID="<?php echo(xmlattribinvalidchars($id)); ?>" User="<?php echo(xmlattribinvalidchars($userid)); ?>">
				<Date><?php echo(xmlelementinvalidchars($date)); ?></Date>
				<Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
				<Message><?php echo(xmlelementinvalidchars($message)); ?></Message>
				<Rating><?php echo(xmlelementinvalidchars($message)); ?></Rating>
			</Reply>
<?php
						}
					}
?>
		</Replies>
<?php
				}
?>
	</Ticket>
<?php
			}
		}
?>
</Tickets>
<?php
	} else {
?>
<Tickets/>
<?php
	}

}

function Replies() {

	global $_OPERATOR;
	global $_SETTINGS;
	global $SQL;
	
	if (!isset($_REQUEST['ID'])){ $_REQUEST['ID'] = ''; }

	$query = sprintf('SELECT `id`, `tid`, `userid`, `name`, `email`, `date`, `message`, `admin`, `attachment`, `rating` FROM `tblticketreplies` WHERE `tid` = %d ORDER BY `date` ASC', $_REQUEST['ID']);
	$rows = $SQL->selectall($query);
	
	if (is_array($rows)) {
	
		header('Content-type: text/xml; charset=utf-8');
		echo('<?xml version="1.0" encoding="utf-8"?>' . "\n");
?>
<Replies ID="<?php echo($tid); ?>">
<?php
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				
				$id = $row['id'];
				$tid = $row['tid'];
				$userid = $row['userid'];
				$date = $row['date'];
				$name = $row['admin'];
				$message = $row['message'];
				$rating = $row['rating'];
				
				if ($userid > 0) {
					$query = sprintf('SELECT `id`, `firstname`, `lastname` FROM `tblclients` WHERE `id` = %d LIMIT 1', $userid);
					$row = $SQL->selectquery($query);
					$name = $row['firstname'] . ' ' . $row['lastname'];
				}
				
				$message = str_replace('<br />', '', $message);
				
?>
	<Reply ID="<?php echo(xmlattribinvalidchars($id)); ?>">
		<Date><?php echo(xmlelementinvalidchars($date)); ?></Date>
		<Name><?php echo(xmlelementinvalidchars($name)); ?></Name>
		<Message><?php echo(xmlelementinvalidchars($message)); ?></Message>
		<Rating><?php echo(xmlelementinvalidchars($message)); ?></Rating>
	</Reply>
<?php
			}
		}
?>
</Replies>
<?php
	} else {
?>
<Replies/>
<?php
	}

}

?>