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

function htmlSmilies($message, $path, $eol = '') {

	$smilie[0] = ':D';
	$smilieImage[0] = 'Laugh.png';
	$smilie[1] = ':)';
	$smilieImage[1] = 'Smile.png';
	$smilie[2] = ':(';
	$smilieImage[2] = 'Sad.png';
	$smilie[3] = '$)';
	$smilieImage[3] = 'Money.png';
	$smilie[4] = '&gt;:O';
	$smilieImage[4] = 'Angry.png';
	$smilie[5] = ':P';
	$smilieImage[5] = 'Impish.png';
	$smilie[6] = ':\\';
	$smilieImage[6] = 'Sweat.png';
	$smilie[7] = '8)';
	$smilieImage[7] = 'Cool.png';
	$smilie[8] = '&gt;:L';
	$smilieImage[8] = 'Frown.png';
	$smilie[9] = ';)';
	$smilieImage[9] = 'Wink.png';
	$smilie[10] = ':O';
	$smilieImage[10] = 'Surprise.png';
	$smilie[11] = '8-)';
	$smilieImage[11] = 'Woo.png';
	$smilie[12] = '8-O';
	$smilieImage[12] = 'Shock.png';
	$smilie[13] = 'xD';
	$smilieImage[13] = 'Hysterical.png';
	$smilie[14] = ':-*';
	$smilieImage[14] = 'Kissed.png';
	$smilie[15] = ':S';
	$smilieImage[15] = 'Dizzy.png';
	$smilie[16] = '+O)';
	$smilieImage[16] = 'Celebrate.png';
	$smilie[17] = '&lt;3';
	$smilieImage[17] = 'Adore.png';
	$smilie[18] = 'zzZ';
	$smilieImage[18] = 'Sleep.png';
	$smilie[19] = ':X';
	$smilieImage[19] = 'Stop.png';
	$smilie[20] = 'X-(';
	$smilieImage[20] = 'Worn-out.png';

	for($i=0; $i < count($smilie); $i++) {
		$message = str_replace($smilie[$i], '<img src="' . $path . $smilieImage[$i] . '" alt="Smilie" />' . $eol, $message);
	}
	return $message;
}

function time_layout($unixtime) {

	global $_LOCALE;

	$minutes = (int)($unixtime / 60);
	if ($minutes > 60) {
		$hours = (int)(($unixtime / 60) / 60);
	  	$minutes = (int)(($unixtime / 60) - ($hours * 60));
		
		if ($minutes < 10) {
	  		$minutes = '0' . (int)(($unixtime / 60) - ($hours * 60));
		}
	  
		$seconds = ($unixtime % 60);
		
		if ($seconds < 10) {
	  		$seconds = '0' . ($unixtime % 60);
		}
		return $hours . ':' . $minutes . ':' . $seconds . ' ' . $_LOCALE['hours'];
	}
	else {
		if ($minutes < 10) {
			$minutes = '0' . (int)($unixtime / 60);
		}
		
		$seconds = ($unixtime % 60);
		
		if ($seconds < 10) {
			$seconds = '0' . ($unixtime % 60);
		}
		return $minutes . ':' . $seconds . ' ' . $_LOCALE['minutes'];
	}
}

function pendingUsersPopup($timeout){

	global $table_prefix;
	global $_SETTINGS;
	global $current_department;
	global $SQL;
	
	// PENDING USERS QUERY displays pending users not logged in on users users table depending on department settings
	if ($_SETTINGS['DEPARTMENTS'] == true) {
		$departments_sql = departmentsSQL($current_department);
		$query = "SELECT DISTINCT (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`datetime`)) AS `display` FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $timeout SECOND) AND active = '0' AND $departments_sql";
	}
	else {
		$query = "SELECT DISTINCT (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`datetime`)) AS `display` FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $timeout SECOND) AND active = '0'";
	}
	$rows = $SQL->selectall($query);
	
	// Initalise user status to false
	$user_status = 'false';
	
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$display_flag = $row['display'];
				if ($display_flag < $timeout) {
					$user_status = 'true';
				}
			}
		}
	}

	return $user_status;
}

function browsingUsersPopup($timeout){

	global $table_prefix;
	global $SQL;

	// BROWSING USERS QUERY displays browsing users
	$query = "SELECT DISTINCT (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`)) AS `display` FROM " . $table_prefix . "requests WHERE (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`request`)) < '$timeout' AND status = '0'";
	$rows = $SQL->selectall($query);

	// Initalise user status to false
	$user_status = 'false';
	
	$count = 0;
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$display_flag = $row['display'];
			
				if ($display_flag < $timeout) {
					$user_status = 'true';
				}
			}
		}
	}

	return $user_status;
}


function transferredUsersPopup($timeout){

	global $table_prefix;
	global $operator_login_id;
	global $SQL;

	// TRANSFERRED USERS QUERY displays transferred users not loged in on users users table
	$query = "SELECT DISTINCT (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`datetime`)) AS display FROM " . $table_prefix . "chats WHERE (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`refresh`)) < '$timeout' AND active = '-2' AND `transfer` = '$operator_login_id'";
	$rows = $SQL->selectall($query);

	// Initalise user status to false
	$user_status = 'false';
	
	if (is_array($rows)) {
		foreach ($rows as $key => $row) {
			if (is_array($row)) {
				$display_flag = $row['display'];
			
				if ($display_flag < $timeout) {
					$user_status = 'true';
				}
			}
		}
	}

	return $user_status;
}

function totalPendingUsers(){

	global $table_prefix;
	global $connection_timeout;
	global $SQL;

	// PENDING USERS QUERY displays pending site visitors
	$query = "SELECT count(`id`) FROM " . $table_prefix . "chats WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND) AND `active` = '0'";
	$row = $SQL->selectquery($query);

	// Initalise user status to false
	$total_users = '0';
	if (is_array($row)) {
		$total_users = $row['count(login_id)'];
	}

	return $total_users;
}

function totalBrowsingUsers(){

	global $table_prefix;
	global $connection_timeout;
	global $SQL;

	// BROWSING USERS QUERY displays browsing users
	$query = "SELECT count(`id`) FROM " . $table_prefix . "requests WHERE (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(`refresh`)) < '$connection_timeout'";
	$row = $SQL->selectquery($query);

	// Initalise user status to false
	$total_users = '0';
	if (is_array($row)) {
		$total_users = $row['count(`id`)'];
	}

	return $total_users;
}

function departmentsSQL($department) {

	$multi_departments = explode(';', $department);
	$sql = '';
	
	if (is_array($multi_departments)) {
		$i = 0;
		$length = count($multi_departments);
		if ($length > 1) {
			while ($i < $length):
				$department = trim(addslashes($multi_departments[$i]));
				if ($i == 0) {
					$sql = "( `department` = '$department'";
				}
				elseif ($i > 0 && $i < $length - 1) {
					$sql .= " OR `department` = '$department'";
				}
				elseif ($i == $length - 1) {
					$sql .= " OR `department` = '$department' OR `department` = '' )";
				}
				$i++;
			endwhile;
		}
		else {
			$department = trim(addslashes($department));
			$sql = "( `department` = '$department' OR `department` = '' )";
		}
	}
	else {
		$department = trim(addslashes($department));
		$sql = "( `department` = '$department' OR `department` = '' )";
	}
	return $sql;
}


function stripinvalidxml($value) {
	$ret = ''; $current = '';
	$length = strlen($value);
	for ($i=0; $i < $length; $i++) {
		$current = ord($value{$i});
		if (($current == 0x9) || ($current == 0xA) || ($current == 0xD) || (($current >= 0x20) && ($current <= 0xD7FF)) || (($current >= 0xE000) && ($current <= 0xFFFD)) || (($current >= 0x10000) && ($current <= 0x10FFFF))) {
			$ret .= chr($current);
		} else {
			$ret .= '';
		}
	}
	return $ret;
}

function xmlelementinvalidchars($string) {
	$string = str_replace(array('>', '<', '&'), array('&gt;', '&lt;', '&amp;'), $string);
	return stripinvalidxml($string);
}

function xmlattribinvalidchars($string) {
	$string = str_replace(array('>', '<', '"', '&', '\''), array('&gt;', '&lt;', '&quot;', '&amp;', '&apos;'), $string);
	return stripinvalidxml($string);
}

function unixtimestamp($datetime){

	$datetime = explode(" ", $datetime);
	$date = explode("-", $datetime[0]); 
	$time = explode(":", $datetime[1]); 
	unset($datetime);
	
	list($year, $month, $day) = $date;
	list($hour, $minute, $second) = $time;
	
	return mktime(intval($hour), intval($minute), intval($second), intval($month), intval($day), intval($year));
	
}

function ip_public($ip, $array) {
	$result = true;
	foreach ($array as $subnet) {
		list($network, $mask) = explode('/', $subnet);

		$network = str_pad(decbin(ip2long($network)), 32, '0', STR_PAD_LEFT);
		$address = str_pad(decbin(ip2long($ip)), 32, '0', STR_PAD_LEFT);

		if (strcmp(substr($network, 0, $mask), substr($address, 0, $mask)) == 0) {
			$result = false;
			break;
		}
	}
	return $result;
}

function ip_valid($ip) {
	if (($longip = ip2long($ip)) !== false) { 
		if ($ip == long2ip($longip)) { 
			return true;
		}
	}
	return false;
}

function ip_address() {

	$private_networks = array('10.0.0.0/8', '127.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16');

	$address = $_SERVER['REMOTE_ADDR'];
	if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && preg_match('/\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}/i', $_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$address = $_SERVER['HTTP_X_FORWARDED_FOR'];
	}
	elseif (isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && preg_match('/\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}/i', $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
		$address = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
	}

	$result = preg_match_all('/\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}/i', $address, $ip_array);
	if ($result == true) {
		if (is_array($ip_array[0])) {

			$ip_array = $ip_array[0];
			array_push($ip_array, $_SERVER['REMOTE_ADDR']);

			foreach($ip_array as $ip) {
				if ($ip != '' && ip_valid($ip) && ip_public($ip, $private_networks)) {
					return $ip;
					break;
				}
			}
		}
	}
	
	return $address;

}

if (!function_exists('json_encode')) {

	function json_encode($a = false) {
		if (is_null($a)) return 'null';
		if ($a === false) return 'false';
		if ($a === true) return 'true';
		
		if (is_scalar($a)) {
			if (is_float($a)) {
				// Always use "." for floats.
				return floatval(str_replace(",", ".", strval($a)));
			}

			if (is_string($a)) {
				static $jsonReplaces = array(array("\\", "/", "\n", "\t", "\r", "\b", "\f", '"'), array('\\\\', '\\/', '\\n', '\\t', '\\r', '\\b', '\\f', '\"'));
				return '"' . str_replace($jsonReplaces[0], $jsonReplaces[1], $a) . '"';
			}
			else {
				return $a;
			}
		}
		
		$isList = true;
		for ($i = 0, reset($a); $i < count($a); $i++, next($a)) {
			if (key($a) !== $i) {
				$isList = false;
				break;
			}
		}
		$result = array();
		if ($isList) {
			foreach ($a as $v) $result[] = json_encode($v);
			return '[' . join(',', $result) . ']';
		} else {
			foreach ($a as $k => $v) $result[] = json_encode($k).':' . json_encode($v);
			return '{' . join(',', $result) . '}';
		}
  }
}

if (!function_exists('json_decode')) {
    function json_decode($content, $assoc=false) {
        require_once(dirname(__FILE__) . '/json.php');
        if ($assoc) {
            $json = new Services_JSON(SERVICES_JSON_LOOSE_TYPE);
        }
        else {
            $json = new Services_JSON;
        }
        return $json->decode($content);
    }
}

/*
if (!function_exists('json_encode')) {
    function json_encode($content) {
        require_once(dirname(__FILE__) . '/json.php');
        $json = new Services_JSON;
        return $json->encode($content);
    }
}
*/

function is_valid_callback($callback) {
	
	$reserved = array('break', 'do', 'instanceof', 'typeof', 'case',
				'else', 'new', 'var', 'catch', 'finally', 'return', 'void',
				'continue', 'for', 'switch', 'while', 'debugger', 'function',
				'this', 'with',  'default', 'if', 'throw', 'delete', 'in', 'try',
				'class', 'enum', 'extends', 'super', 'const', 'export', 'import',
				'implements', 'let', 'private', 'public', 'yield', 'interface',
				'package', 'protected', 'static', 'null', 'true', 'false');

	foreach(explode('.', $callback) as $identifier) {
		if (!preg_match('/^[a-zA-Z_$][0-9a-zA-Z_$]*(?:\[(?:".+"|\'.+\'|\d+)\])*?$/', $identifier)) {
			return false;
		}
		if (in_array(strtolower($identifier), $reserved)) {
			return false;
		}
	}

	//return preg_match('/^[$_\p{L}][$_\p{L}\p{Mn}\p{Mc}\p{Nd}\p{Pc}\x{200C}\x{200D}]*+$/u', $identifier) && !in_array(mb_strtolower($identifier, 'UTF-8'), $reserved);
	return true;
}

function gethostbyaddr_timeout($ip, $dns, $timeout=1000) {
	// Timeout Microseconds
	$timeout *= 1000;

	// Random Transaction Number
	$data = rand(0, 99);

	// Trim to 2 bytes
	$data = substr($data, 0, 2);

	// Request Header
	$data .= "\1\0\0\1\0\0\0\0\0\0";

	// Split IP Address
	$bits = explode('.', $ip);

	// Error Checking
	if (count($bits) != 4) {
		return $ip;
	}
	
	for ($x = 3; $x >= 0; $x--) {
		// Byte to indicate the length of each segment of the request
		switch (strlen($bits[$x])) {
			case 1: // 1 byte Segment
				$data .= "\1";
				break;
			case 2: // 2 byte Segment
				$data .= "\2";
				break;
			case 3: // 3 byte Segment
				$data .= "\3";
				break;
			default: // Invalid IP
				return $ip;
		}
		// Segment
		$data .= $bits[$x];
	}
	// Final Request Bit
	$data .= "\7in-addr\4arpa\0\0\x0C\0\1";

	// UDP socket
	$handle = @fsockopen("udp://$dns", 53);

	// Send Request
	$requestsize = @fwrite($handle, $data);
	@socket_set_timeout($handle, floor($timeout / 1000000), $timeout % 1000000);

	// Response
	$response = @fread($handle, 1000);
	@fclose($handle);
	if (empty($response)) {
		return $ip;
	}

	// Response Type
	$type = @unpack("s", substr($response, $requestsize + 2));
	if ($type[1] == 0x0C00) {
		$host = '';
		$len = 0;
		$position = $requestsize + 12;

		// Reconstruct Hostname
		do {
			// Segment Size
			$len = unpack("c", substr($response, $position));
			if ($len[1] == 0) {
				return substr($host, 0, strlen($host) - 1);
			}
			// Add Segment to Host
			$host .= substr($response, $position + 1, $len[1]) . '.';

			// Next Segment
			$position += $len[1] + 1;
		}
		while ($len != 0);

		// Error
		return $ip;
	}
	return $ip;
}

?>