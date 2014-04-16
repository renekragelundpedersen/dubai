<?php

#####################################

#  Session Setting					#

#####################################

//session_start(); 



define('DB_SERVER','localhost');

define('DB_USERNAME','x');

define('DB_PASSWORD','x');

define('DB_DATABASE','x');





#####################################

#  Database Configration			#

#####################################




$support_Admin = "localhost@webchannel.ae";

$db		= mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die("Could not connect to the database, please inform at $support_Admin  and try lator.");

mysql_select_db(DB_DATABASE, $db);

if($db != true)

	die("Could not select the database, please inform at $support_Admin  and try lator.");



#####################################

#  Site Configration				#

#####################################




$siteURL ='http://www.innovatedubai.com/';



define('SERVER_URL','http://www.innovatedubai.com/');



define('SERVER_PATH','/home/innovate/public_html');



define('HTTP_URL','http://www.innovatedubai.com/');



$fldpagename = basename($_SERVER['PHP_SELF']);

$ADMIN_PROP_IMGPATH = "../property_images/";

$FRONT_PROP_IMGPATH = "property_images/";

$ADMIN_AGENT_IMGPATH = "../agent_images/";

$FRONT_AGENT_IMGPATH = "agent_images/";

$ADMIN_NEWS_IMGPATH = "../images/news/";

$FRONT_NEWS_IMGPATH = "images/news/";

$ADMIN_CONTENT_IMGPATH = "../images/content/";

$FRONT_CONTENT_IMGPATH = "images/content/";

	//Mimimun deinesion for images



$AGENT_MIN_WIDTH = "460";

$AGENT_MIN_HEIGHT = "200";



$AGENT_THUMB_MIN_WIDTH = "150";

$AGENT_THUMB_MIN_HEIGHT = "110";



$ADMIN_PROP_DOCPATH = "../property_docs/";

$FRONT_PROP_DOCPATH = "property_docs/";



$ADMIN_BANNER_LARGE_IMGPATH 		= "../bannerLarge/";

$FRONT_BANNER_LARGE_IMGPATH 		= "bannerLarge/";



#####################################

#  Configure Paging Variables		#

#####################################

/*$record_limit=20; // for paging

$pg_limit=5;  // for paging  

define('PAGE_COMBO',$record_limit);*/



#####################################

#  Image Parameters					#

#####################################

define('IMAGE_HEIGHT','100');

define('IMAGE_WIDTH','100');



#####################################

#  File Settings					#

#####################################

define('INDEX_FILE','index.php?file=');



#####################################

#  General Setting					#

#####################################

//error_reporting(E_ALL ^ E_NOTICE & ~E_WARNING); // display all errors except notices

///error_reporting(E_ERROR);

@ini_set('register_globals', 'Off'); // make globals off runtime

define('EMAIL_SEPARATOR', '------------------------------------------------------');

define('CHARSET', 'iso-8859-1');

define('ITEM_PER_PAGE', '2');

$FRONT_ITEM_PER_PAGE =  '10';

$CURR_SYMBOL = 'AED';

$CURR_VAL = '1';

$AREA_SYMBOL = 'Sq.Ft';

$AREA_VAL = '1';

#####################################

#  Webchannel CMS Setting		    #

#####################################



$recordsPerPage =9;



$admintitle	= "Welcome to admin : Innovate Real Estate";

$SITE_TITLE	= "Innovate Real Estate";



$bgColor	= "#C7C7C7";

//$copyright	= "Innovate Real Estate ".date('Y')." All Rights Reserved";

$copyright	= "&copy; Innovate Real Estate ".date('Y').". All Rights Reserved";

/********************************************************************

Set SMTP

********************************************************************/

//error_reporting(0);

ini_set("memory_limit","64M");





ini_set("SMTP","mail.webchannel.ae");

ini_set("sendmail_from","info@webchannel.ae");

ini_set("upload_max_filesize","5M");



?>