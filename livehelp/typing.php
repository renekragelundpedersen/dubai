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
include('include/config.php');

ignore_user_abort(true);

$id = $_REQUEST['ID'];
$status = $_REQUEST['STATUS'];

if (is_numeric($id)) {

	$query = sprintf("SELECT `typing` FROM " . $table_prefix . "chats WHERE `id` = '%s' LIMIT 1", $id);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$typing = $row['typing'];
		
		if (isset($_COOKIE['LiveHelpOperator'])) {
			if ($status) { // Currently Typing
				switch($typing) {
				case 0: // None
					$result = 2;
					break;
				case 1: // Guest Only
					$result = 3;
					break;
				case 2: // Operator Only
					$result = 2;
					break;
				case 3: // Both
					$result = 3;
					break;
				}
			}
			else { // Not Currently Typing
				switch($typing) {
				case 0: // None
					$result = 0;
					break;
				case 1: // Guest Only
					$result = 1;
					break;
				case 2: // Operator Only
					$result = 0;
					break;
				case 3: // Both
					$result = 1;
					break;	
				}	
			}
		} else {
			if ($status) { // Currently Typing
				switch($typing) {
				case 0: // None
					$result = 1;
					break;
				case 1: // Guest Only
					$result = 1;
					break;
				case 2: // Operator Only
					$result = 3;
					break;
				case 3: // Both
					$result = 3;
					break;
				}
			}
			else { // Not Currently Typing
				switch($typing) {
				case 0: // None
					$result = 0;
					break;
				case 1: // Guest Only
					$result = 0;
					break;
				case 2: // Operator Only
					$result = 2;
					break;
				case 3: // Both
					$result = 2;
					break;	
				}	
			}
		}
					
		// Update the typing status of the specified login id
		$query = sprintf("UPDATE " . $table_prefix . "chats SET `typing` = '%d' WHERE `id` = '%s'", $result, $id);
		$SQL->updatequery($query);
		
	}
}

header('Location: ./include/Offline.gif');
?>