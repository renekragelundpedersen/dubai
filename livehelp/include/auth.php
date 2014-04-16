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

if (!isset($_REQUEST['USERNAME'])){ $_REQUEST['USERNAME'] = ''; }
if (!isset($_REQUEST['PASSWORD'])){ $_REQUEST['PASSWORD'] = ''; }

if (isset($_COOKIE['LiveHelpOperator'])) {
	$cookie = new Cookie();
	$session = $cookie->decode($_COOKIE['LiveHelpOperator']);
	
	if (!isset($session['OPERATORID'])){ $session['OPERATORID'] = 0; }
	if (!isset($session['AUTHENTICATION'])){ $session['AUTHENTICATION'] = ''; }
	if (!isset($session['MESSAGE'])){ $session['MESSAGE'] = 0; }
	if (!isset($session['TIMEOUT'])){ $session['TIMEOUT'] = 0; }
	if (!isset($session['LANGUAGE'])){ $session['LANGUAGE'] = 'en'; }
	
	$operator_login_id = $session['OPERATORID'];
	$operator_authentication = $session['AUTHENTICATION'];
	$guest_message = $session['MESSAGE'];
	$timeout = $session['TIMEOUT'];
	$language = $session['LANGUAGE'];
	
	$current_user_id = $operator_login_id;
	$password = $operator_authentication;
	
	if (!empty($current_user_id) && !empty($password))  {
		$query = sprintf("SELECT `username`, `department`, `privilege`, `datetime` FROM " . $table_prefix . "users WHERE `id` = '%d' AND `password` = '%s'", $SQL->escape($current_user_id), $SQL->escape($password));
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			$current_username = $row['username'];
			$current_department = $row['department'];
			$current_privilege = $row['privilege'];
			$current_login_datetime = $row['datetime'];
		}
		else {
?>
<script language="JavaScript" type="text/JavaScript">
<!--
// Session Authentication Error Occurred Redirect to Login Page
top.location.href = '../admin/index.php?STATUS=authentication';
//-->
</script>
<?php
			exit;
		}
	}
	else {
?>
<script language="JavaScript" type="text/JavaScript">
<!--
// Session Authentication Error Occurred Redirect to Login Page
top.location.href = '../admin/index.php?STATUS=authentication';
//-->
</script>
<?php
		exit;
	}

}
// If loading the script with HTTP $_REQUEST Authentication
elseif (!empty($_REQUEST['USERNAME']) && !empty($_REQUEST['PASSWORD'])) {

	$username = $_REQUEST['USERNAME'];
	$password = $_REQUEST['PASSWORD'];
	
	$query = sprintf("SELECT `id`, `username`, `department`, `privilege` FROM " . $table_prefix . "users WHERE `username` LIKE BINARY '%s' AND `password` = '%s'", $SQL->escape($username), $SQL->escape($password));
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
		$operator_login_id = $row['id'];
		$current_username = $row['username'];
		$current_department = $row['department'];
		$current_privilege = $row['privilege'];
		
		$session = array();
		$session['AUTHENTICATION'] = $password;
		$session['LANGUAGE'] = $language;
		$session['MESSAGE'] = 0;
		$session['OPERATORID'] = $operator_login_id;
		$session['TIMEOUT'] = 0;
		
		// Cookie
		$cookie = new Cookie();
		$data = $cookie->encode($session);
		
		setcookie('LiveHelpOperator', $data, false, '/', $cookie_domain, 0);
	}
	else {
		if (strpos(php_sapi_name(), 'cgi') === false ) { header('HTTP/1.0 403 Forbidden'); } else { header('Status: 403 Forbidden'); }
		exit;
	}

}
else {
?>
<script language="JavaScript" type="text/JavaScript">
<!--
// Session Authentication Error Occurred Redirect to Login Page
top.location.href = '../admin/index.php?STATUS=authentication';
//-->
</script>
<?php
	exit;
}

$_REQUEST = array_map('addslashes', $_REQUEST);

?>