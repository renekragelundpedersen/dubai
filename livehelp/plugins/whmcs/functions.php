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

function genTicketMask($id) {
	global $SQL;
	$lowercase = 'abcdefghijklmnopqrstuvwxyz';
	$uppercase = 'ABCDEFGHIJKLMNOPQRSTUVYWXYZ';
	$ticketmaskstr = '';

	$query = "SELECT `value` FROM `tblconfiguration` WHERE `setting` = 'TicketMask'";
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$ticketmask = trim($row['value']);
	}
	if (!$ticketmask) {
		$ticketmask = '%n%n%n%n%n%n';
	}
	$masklen = strlen($ticketmask);
	for ($i = 0; $i < $masklen; $i++) {
		$maskval = $ticketmask[$i];
		if ($maskval == "%") {
			$i++;
			$maskval .= $ticketmask[$i];
			if ($maskval == "%A") {
				$ticketmaskstr .= $uppercase[rand(0,25)];
			} elseif ($maskval == "%a") {
				$ticketmaskstr .= $lowercase[rand(0,25)];
			} elseif ($maskval == "%n") {
				$ticketmaskstr .= (strlen($ticketmaskstr)) ? rand(0,9) : rand(1,9);
			} elseif ($maskval == "%y") {
				$ticketmaskstr .= date('Y');
			} elseif ($maskval == "%m") {
				$ticketmaskstr .= date('m');
			} elseif ($maskval == "%d") {
				$ticketmaskstr .= date('d');
			} elseif ($maskval == "%i") {
				$ticketmaskstr .= $id;
			} else {
				$ticketmaskstr .= $maskval;
			}
		} else {
			$ticketmaskstr .= $maskval;
		}
	}

	$query = sprintf("SELECT `id` FROM `tbltickets` WHERE `tid` = '%s'", $SQL->escape($ticketmaskstr));
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$tid = $row['id'];
		if ($tid) {
			$ticketmaskstr = genTicketMask($id);
		}
	}
	return $ticketmaskstr;
}
?>