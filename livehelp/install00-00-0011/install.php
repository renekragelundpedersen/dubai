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

include('../include/functions.php');

if (get_magic_quotes_runtime()) {
    ini_set('magic_quotes_runtime', 0);
}

$protocol = ($_SERVER['SERVER_PORT'] == '443') ? 'https://' : $protocol = 'http://';
$directory = substr($_SERVER['SCRIPT_NAME'], 0, strpos($_SERVER['SCRIPT_NAME'], '/livehelp/'));
$address = $protocol . $_SERVER['SERVER_NAME'] . $directory;

error_reporting(E_ERROR | E_PARSE);
set_time_limit(0);

// Detect WHMCS Installation
$plugin = '';
if (file_exists('../../../configuration.php')) {

	// WHMCS Database Configuration
	include('../../../configuration.php');
	if (isset($db_host) && isset($db_name) && isset($db_username) && isset($db_password)) {
		$plugin = 'WHMCS';
	}
}

if (!isset($_REQUEST['DATABASEHOSTNAME'])){ $_REQUEST['DATABASEHOSTNAME'] = ''; }
if (!isset($_REQUEST['DATABASENAME'])){ $_REQUEST['DATABASENAME'] = ''; }
if (!isset($_REQUEST['DATABASEUSERNAME'])){ $_REQUEST['DATABASEUSERNAME'] = ''; }
if (!isset($_REQUEST['DATABASEPASSWORD'])){ $_REQUEST['DATABASEPASSWORD'] = ''; }
if (!isset($_REQUEST['DATABASEPREFIX'])){ $_REQUEST['DATABASEPREFIX'] = ''; }
if (!isset($_REQUEST['OFFLINEEMAIL'])){ $_REQUEST['OFFLINEEMAIL'] = ''; }
if (!isset($_REQUEST['USERNAME'])){ $_REQUEST['USERNAME'] = ''; }
if (!isset($_REQUEST['FIRSTNAME'])){ $_REQUEST['FIRSTNAME'] = ''; }
if (!isset($_REQUEST['LASTNAME'])){ $_REQUEST['LASTNAME'] = ''; }
if (!isset($_REQUEST['EMAIL'])){ $_REQUEST['EMAIL'] = ''; }
if (!isset($_REQUEST['PASSWORD'])){ $_REQUEST['PASSWORD'] = ''; }
if (!isset($_REQUEST['PASSWORDCONFIRM'])){ $_REQUEST['PASSWORDCONFIRM'] = ''; }

if (!get_magic_quotes_gpc()) {
	foreach ($_REQUEST as $key => $value) {
		$_REQUEST[$key] = addslashes($value);
	}
}

if (!empty($plugin) || (!empty($_REQUEST['DATABASEHOSTNAME']) && !empty($_REQUEST['DATABASENAME']) && !empty($_REQUEST['DATABASEUSERNAME']) && !empty($_REQUEST['DATABASEPASSWORD']) && !empty($_REQUEST['OFFLINEEMAIL']) && !empty($_REQUEST['USERNAME']) && !empty($_REQUEST['FIRSTNAME']) && !empty($_REQUEST['LASTNAME']) && !empty($_REQUEST['EMAIL']) && !empty($_REQUEST['PASSWORD']) && !empty($_REQUEST['PASSWORDCONFIRM']) && $_REQUEST['PASSWORD'] == $_REQUEST['PASSWORDCONFIRM'])) {
	
	$offlineemail = $_REQUEST['OFFLINEEMAIL'];
	$username = $_REQUEST['USERNAME'];
	$firstname = $_REQUEST['FIRSTNAME'];
	$lastname = $_REQUEST['LASTNAME'];
	$email = $_REQUEST['EMAIL'];
	$password = $_REQUEST['PASSWORD'];
	
	if (empty($plugin)) {
	
		define('DB_HOST', $_REQUEST['DATABASEHOSTNAME']);
		define('DB_NAME', $_REQUEST['DATABASENAME']);
		define('DB_USER', $_REQUEST['DATABASEUSERNAME']);
		define('DB_PASS', $_REQUEST['DATABASEPASSWORD']);
		
		$prefix = $_REQUEST['DATABASEPREFIX'];
	
	} else {
	
		// WHMCS Module Installation
		define('DB_HOST', $db_host);
		define('DB_NAME', $db_name);
		define('DB_USER', $db_username);
		define('DB_PASS', $db_password);
		
		$prefix = 'modlivehelp_';
	}

	// MySQL Library
	include('../include/class.mysql.php');

	// Open MySQL Connection
	$SQL = new MySQL;
	$SQL->connect();

	if ($SQL->connected) {

		// Installation Requirements - MySQL Version
		$version = '';
		$query = 'SELECT VERSION()';
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$version = $row['VERSION()'];
			if (!empty($version)) {
				// Check MySQL Minimum Requirement
				$minimum_mysql_version = '4.0.18';
				$mysql_version = (strpos($version, '-')) ? substr($version, 0, strpos($version, '-')) : $version;
				if (strnatcmp($mysql_version, $minimum_mysql_version) < 0) {
					$error = 'Please update your MySQL server to the latest MySQL.  Live Help requires MySQL ' . $minimum_mysql_version;
				}
			}
		}
	
		if (empty($error)) {
		
			// WHMCS Department Email
			if ($plugin == 'WHMCS') {
				$query = "SELECT `email` FROM `tblticketdepartments` WHERE `clientsonly` = '' AND `piperepliesonly` = '' AND `hidden` = '' ORDER BY `order` ASC";
				$row = $SQL->selectquery($query);
				if (is_array($row)) {
					$email = $row['email'];
					$offlineemail = $row['email'];
				} else {
					$query = "SELECT * FROM `tblconfiguration` WHERE `setting` = 'Email'";
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$email = $data['value'];
						$offlineemail = $data['value'];
					}
				}
			}
		
			$schema = file('mysql.schema.txt');
			$dump = '';
			foreach ($schema as $key => $line) {
				if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
					$line = str_replace('prefix_', $prefix, $line);
					$dump .= trim($line);
				}
			}
		
			$dump = trim($dump, ';');
			$tables = explode(';', $dump);
			
			foreach ($tables as $key => $sql) {
				$result = $SQL->miscquery($sql);
				if ($result == false) {
					$error = 'Unable to create the MySQL database schema.  Please contact technical support.';
					break;
				}
			}
			unset($dump);
			unset($tables);

			if (empty($error)) {
			
				// Truncate settings
				$query = 'TRUNCATE ' . $prefix . 'settings';
				$SQL->miscquery($query);

				// Remove .www. if at the start of string
				$domain = $_SERVER['SERVER_NAME'];
				if (substr($domain, 0, 4) == 'www.') {
					$domain = substr($domain, 4);
				}
			
				// Insert / Update Settings
				$dump = '';
				$settings = file('mysql.data.settings.txt');
				foreach ($settings as $key => $line) {
					if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
						$line = str_replace('prefix_', $prefix, $line);
						$line = str_replace('enquiry@stardevelop.com', $offlineemail, $line);
						$line = str_replace("'Domain', 'stardevelop.com'", "'Domain', '$domain'", $line);
						$line = str_replace('http://livehelp.stardevelop.com', $address, $line);
						
						// TODO Remove IP2Country Setting / MaxMind GeoLite
						$line = str_replace("'IP2Country', '0'", "'IP2Country', '0'", $line);
						$line = str_replace('/livehelp/locale/en/images/Online.png', $address . '/livehelp/locale/en/images/Online.png', $line);
						$line = str_replace('/livehelp/locale/en/images/Offline.png', $address . '/livehelp/locale/en/images/Offline.png', $line);
						$line = str_replace('/livehelp/locale/en/images/BeRightBack.png', $address . '/livehelp/locale/en/images/BeRightBack.png', $line);
						$line = str_replace('/livehelp/locale/en/images/Away.png', $address . '/livehelp/locale/en/images/Away.png', $line);
						
						// AuthKey Setting
						$key = '';
						$chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}\|:\'",<.>/?';
						for ($index = 0; $index < 255; $index++) {
							$number = rand(1, strlen($chars));
							$key .= substr($chars, $number - 1, 1);
						}
						$line = str_replace('D\YLu+,R0\Ze%7"B/BZ\'vZ/%P9,y\g0HB5}hZdPag_@^mYZp~_&$MT4OKt}vHRY-}>Wh:x*Eqh]^9h\R~a9qBX&_`oT?5bM4?[ZU\'YMmml(\'xVrH|_uo&XM7~Gqv+B!A2d-5CjG;M"TKmGHM)Kh$q_p>C1!;EVeVn}BIr$}ry&$&tf*CVQ\'uUk%!6jW1OJN2.vClarQC6VT}%PwI?+Yr;U\`(|\iF5qqIT1*n"sgf>9wycF4s`9sU3sP+W}.Y1r', $SQL->escape($key), $line);
						
						// WHMCS Settings
						// TODO Remove WHMCS Portal Template
						/*
						if ($plugin == 'WHMCS') {
							$line = str_replace("'Template', 'default'", "'Template', 'whmcs-portal'", $line);
						}
						*/
						$dump .= trim($line);
					}
				}
				unset($settings);
			
				$dump = trim($dump, ';');
				$tables = explode(';', $dump);
				
				foreach ($tables as $key => $sql) {
					$result = $SQL->miscquery($sql);
					if ($result == false) {
						$error = 'Unable to insert the Live Help settings.  Please contact technical support.';
						break;
					}
				}
				unset($dump);
				unset($tables);
				
				if (empty($error)) {
				
					// Countries / Telephone Codes
					$dump = '';
					$countries = file('mysql.data.countries.txt');
					foreach ($countries as $key => $line) {
						if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
							$line = str_replace('prefix_', $prefix, $line);
							$dump .= trim($line);
						}
					}
					unset($countries);
					
					$dump = trim($dump, ';');
					$tables = explode(';', $dump);
					
					foreach ($tables as $key => $sql) {
						$result = $SQL->miscquery($sql);
						if ($result == false) {
							$error = 'Unable to insert the Live Help country data.  Please contact technical support.';
							break;
						}
					}
					unset($dump);
					unset($tables);
					
					if (empty($error)) {
					
						// Operator Password
						$algo = 'sha512';
						if (function_exists('hash') && in_array($algo, hash_algos())) {
							$password = hash($algo, $password);
						} else if (function_exists('mhash') && mhash_get_hash_name(MHASH_SHA512) != false) {
							$password = bin2hex(mhash(MHASH_SHA512, $password));
						} else {
							$password = sha1($password);
						}
						
						// Insert Operator Account
						if (!empty($username)) {
							$query = "INSERT INTO " . $prefix . "users (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `department`, `device`, `image`, `privilege`, `status`) VALUES ('1', '$username', '$password', '$firstname', '$lastname', '$email', 'Sales / Technical Support', '', '', '-1', '-1')";
							$id = $SQL->insertquery($query);
							if (empty($id)) {
								$error = 'Unable to create Live Help operator account, username may already exist.';
							}
						}
						
						if (empty($error)) {
						
							// Save Database Configuration
							$writable = true;
							$configuration = '../include/database.php';
							if (empty($error)) {
								if (file_exists($configuration)) {
									if (is_writable($configuration)) {
									
										// WHMCS Configuration
										if (empty($plugin)) {
										
											$content = "<?php\n";
											$content .= "\n";
											$content .= 'define(\'DB_HOST\', \'' . DB_HOST . '\');' . "\n";
											$content .= 'define(\'DB_NAME\', \'' . DB_NAME . '\');' . "\n";
											$content .= 'define(\'DB_USER\', \'' . DB_USER . '\');' . "\n";
											$content .= 'define(\'DB_PASS\', \'' . DB_PASS . '\');' . "\n";
											$content .= "\n";
											$content .= '$table_prefix =  \'' . $prefix . '\';' . "\n";
											$content .= "\n";
											$content .= 'return true;' . "\n";
											$content .= "\n";
											$content .= "?>";
											
										} else {
										
											$content = "<?php\n";
											$content .= "\n";
											$content .= 'if (isset($templates_compiledir)) $templates_compiledir2 = $templates_compiledir;' . "\n";
											$content .= 'ob_start();' . "\n";
											$content .= "require(dirname(__FILE__) . '/../../../configuration.php');\n";
											$content .= 'ob_end_clean();' . "\n";
											$content .= 'if (isset($templates_compiledir2)) $templates_compiledir = $templates_compiledir2;' . "\n";
											$content .= "\n";
											$content .= 'define(\'DB_HOST\', $db_host);' . "\n";
											$content .= 'define(\'DB_NAME\', $db_name);' . "\n";
											$content .= 'define(\'DB_USER\', $db_username);' . "\n";
											$content .= 'define(\'DB_PASS\', $db_password);' . "\n";
											$content .= "\n";
											$content .= '$table_prefix =  \'' . $prefix . '\';' . "\n";
											$content .= "\n";
											$content .= "// Enable Plugins\n";
											$content .= '$_PLUGINS = array();' . "\n";
											$content .= '$_PLUGINS[\'WHMCS\'] = true;' . "\n";
											$content .= "\n";
											$content .= '$cookie_domain = \'\';' . "\n";
											$content .= "\n";
											$content .= 'return true;' . "\n";
											$content .= "\n";
											$content .= "?>";
											
										}
							
										if (!$handle = fopen($configuration, 'w')) {
											$writable = false;
										} else {
											if (!fwrite($handle, $content)) {
												$writable = false;
											} else {
												$writable = true;
												fclose($handle);
											}
										}
									} else {
										$writable = false;
									}
								} else {
									$writable = false;
								}
							}
						}
					}
				}
			}
		}
	} else {
		// Unexpected Error
		$error = 'MySQL Connection Error.  Please contact technical support.';
	}

}


$json = array();
$json['result'] = (empty($error) && isset($writable) && $writable) ? true : false;
if (!empty($error)) {
	$json['error'] = $error;
}

// Plugin
if (!empty($plugin)) {
	$json['plugin'] = $plugin;
}

// Output JSON
$json = json_encode($json);
if (!isset($_GET['callback'])) {
	header('Content-Type: application/json; charset=utf-8');
	exit($json);
} else {
	if (is_valid_callback($_GET['callback'])) {
		header('Content-Type: text/javascript; charset=utf-8');
		exit($_GET['callback'] . '(' . $json . ')');
	} else {
		header('Status: 400 Bad Request');
		exit();
	}
}

?>