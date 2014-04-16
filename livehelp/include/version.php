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

$web_application_version = '4.0';
$web_application_revision = 'Rev. 8';

$windows_application_version = '2.95';

/*
   PLEASE READ: You are NOT permitted to modify the following copyright text including the hyperlink.
   If you wish to remove the copyright line please contact stardevelop.com
   
*/
if (!isset($_LOCALE['stardevelopcopyright'])) {
	$_LOCALE['stardevelopcopyright'] = 'International Copyright &copy; 2003 - ' . date('Y') . ' <a href="http://livehelp.stardevelop.com" target="_blank" class="normlink">Live Help Messenger</a> All Rights Reserved';
}
$_LOCALE['stardeveloplivehelpversion'] = 'Live Help Server Version: ' . $web_application_version . ' ' . $web_application_revision;

?>