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

$crawler = false;

$spiders[0] = 'Googlebot';
$spiders[1] = 'Slurp';
$spiders[2] = 'Scooter';
$spiders[3] = 'Openbot';
$spiders[4] = 'Mercator';
$spiders[5] = 'AltaVista';
$spiders[6] = 'AnzwersCrawl';
$spiders[7] = 'FAST-WebCrawler';
$spiders[8] = 'Gulliver';
$spiders[9] = 'WISEnut';
$spiders[10] = 'InfoSeek';
$spiders[11] = 'Lycos_Spider';
$spiders[12] = 'HenrytheMiragoRobot';
$spiders[13] = 'IncyWincy';
$spiders[14] = 'MantraAgent';
$spiders[15] = 'MegaSheep';
$spiders[16] = 'Robozilla';
$spiders[17] = 'Scrubby';
$spiders[18] = 'Speedy_Spider';
$spiders[19] = 'Sqworm';
$spiders[20] = 'teoma';
$spiders[21] = 'Ultraseek';
$spiders[22] = 'whatUseek';
$spiders[23] = 'Jeeves';
$spiders[24] = 'AllTheWeb';
$spiders[25] = 'ia_archiver';
$spiders[26] = 'grub-client';
$spiders[27] = 'ZyBorg';
$spiders[28] = 'Atomz';
$spiders[29] = 'ArchitextSpider';
$spiders[30] = 'Arachnoidea';
$spiders[31] = 'UltraSeek';
$spiders[32] = 'MSNBOT';
$spiders[33] = 'YahooSeeker';

foreach($spiders as $key => $spider) {
	if (isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], $spider) !== false) {
		$crawler = true;
		break;
	}
}


if ($crawler == true) {
	header('HTTP/1.0 404 Not Found'); 
	exit();
}
?>