<?php

 /* include("include/config.inc.php");

  include("include/functions.php");

  include("include/inc_send_phpmail.php");  

  @include_once("include/clearcache.php");

  include_once("admin/fckeditor/fckeditor.php") ;

  

  $fldpagename = basename($_SERVER['PHP_SELF']);



  $ADMIN_MAIL	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"admin_email",$db));

  if($ADMIN_MAIL == "")

  		$ADMIN_MAIL = "azim.ansari@gmail.com";*/

	//require_once "system/config/configure.php";

	//require_once CLASS_PATH.'admin_common.php';




require_once "system/config/configure.php";



define('ADMIN_URL','admin/');

define('ADMIN_PATH','admin/');

define('FUNCTION_PATH','system/function/');

define('CLASS_PATH','system/class/');

define('CONFIG_PATH','system/config/');

define('JAVASCRIPT_PATH','js/');

define("ADMIN_IMAGES_PATH", ADMIN_PATH.'images/');

define("UPLOAD_PATH",ADMIN_IMAGES_PATH."upload/");

define("UPLOAD_URL",ADMIN_URL."images/upload/");



#####################################

#  Database Settings 			    #

#####################################

include_once CLASS_PATH.'dbclass.php';

$dbobj = new dbclass;





#####################################

#  Include File Settings			#

#####################################

include_once FUNCTION_PATH.'general.php';

include_once CLASS_PATH.'pagerar.php';



#####################################

#  CMS Files   			            #

#####################################

include("include/functions.php");

//include(SERVER_PATH."include/inc_send_phpmail.php");  

@include_once("include/clearcache.php");

include("include/validate_functions.php");

include("include/db_functions.php");

include("include/pagination_functions.php");

include_once("editors/fckeditor/fckeditor.php") ;

include_once("editors/kmscripts/inc_htmleditor_functions.php") ;



require_once CLASS_PATH.'admin_common.php';



	$obj = new admin_common;





	$support_Admin	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"admin_email",$db));

  	if($support_Admin == "")
	{
  		$support_Admin = "azim@webchannel.ae";
	}
		
	$rec_page	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"record_paging",$db));
	$phone	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"admin_phone",$db));
	$listCount	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"record_paging",$db));


$facebook	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"facebook",$db));
$twitter	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"twitter",$db));
$linkedin	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"linkedin",$db));
$youtube	= stripslashes(FindOtherValue("admin","admin_uid",'admin',"youtube",$db));
$TITLE		= stripslashes(FindOtherValue("admin","admin_uid",'admin',"meta_title",$db));
$DESC		= stripslashes(FindOtherValue("admin","admin_uid",'admin',"meta_desc",$db));
$KEY		= stripslashes(FindOtherValue("admin","admin_uid",'admin',"meta_key",$db));

?>