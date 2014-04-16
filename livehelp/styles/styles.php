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

$installed = false;
$database = include('../include/database.php');
if ($database) {
	include('../include/spiders.php');
	include('../include/class.mysql.php');
	include('../include/class.aes.php');
	include('../include/class.cookie.php');
	$installed = include('../include/config.php');
} else {
	$installed = false;
}

if ($installed == false) {
	header('Location: ./default.php');
}

header('Content-type: text/css');

if (file_exists('../locale/' . LANGUAGE . '/guest.php')) {
	include('../locale/' . LANGUAGE . '/guest.php');
}
else {
	include('../locale/en/guest.php');
}

if (!isset($_SETTINGS['DIRECTION'])) { $_SETTINGS['DIRECTION'] = 'ltr'; }
?>

div, p, td {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: <?php echo($_SETTINGS['FONTSIZE']); ?>;
	color: <?php echo($_SETTINGS['FONTCOLOR']); ?>;
	direction: <?php echo($_SETTINGS['DIRECTION']); ?>;
}
body {
	background-color: <?php echo($_SETTINGS['BACKGROUNDCOLOR']); ?>;
	color: <?php echo($_SETTINGS['FONTCOLOR']); ?>;
}
input, textarea {
	font-family:<?php echo($_SETTINGS['CHATFONT']); ?>; 
    font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
}
a.normlink:link, a.normlink:visited, a.normlink:active {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: #CCCCCC;
}
a.normlink:hover {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
}
.heading {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 16px;
}
.small {
	font-size: 10px;
}
.headingusers {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 18px;
}
.smallusers {
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 10px;
	color: #CBCBCB;
}
.message {
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
}
a.message:link, a.message:visited, a.message:active {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: #CCCCCC;
}
a.message:hover {
	color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
	text-decoration: none;
	font-family: <?php echo($_SETTINGS['CHATFONT']); ?>;
	font-size: <?php echo($_SETTINGS['CHATFONTSIZE']); ?>;
	border-bottom-width: 0.05em;
	border-bottom-style: solid;
	border-bottom-color: <?php echo($_SETTINGS['LINKCOLOR']); ?>;
}
a.tooltip {
	position: relative;
	font-family: <?php echo($_SETTINGS['FONT']); ?>;
	font-size: 10px;
	z-index: 100;
	color: #000000;
	text-decoration: none;
	border-bottom-width: 0.05em;
	border-bottom-style: dashed;
	border-bottom-color: #CCCCCC;
}
a.tooltip:hover {
	z-index: 150;
	background-color: #FFFFFF;
}
a.tooltip span {
	display: none
}
a.tooltip:hover span {
    display: block;
    position: absolute;
    top: 15px;
	left: -100px;
	width: 175px;
	padding: 5px;
	margin: 10px;
    border: 1px dashed #339;
    background-color: #E8EAFC;
	color: #000000;
    text-align: center
}
.box {
	border-style: solid;
	border-width: 1px;
	border-color: #FFFF77;
	background-color: #FFFFCC;
	margin-top: 10px;
}

/* BubbleTip CSS */

.bubbletip {
	position: absolute;
	z-index: 90000000;
	width: auto;
	border-collapse: collapse;
	margin: 0;
	border: none;
	-webkit-border-radius: 0; -moz-border-radius: 0; border-radius: 0;
}
.bubbletip td, .bubbletip th, .bubbletip table, .bubbletip table td, .bubbletip table th {
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	line-height: normal;
}
.bubbletip td.bt-topleft {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll 0px 0px;
	height: 33px;
	width: 33px;
}
.bubbletip td.bt-top {
	background: transparent url(../images/bubbletip/bubbletip-T-B.png) repeat-x scroll 0px 0px;
	height: 33px;
}
.bubbletip td.bt-topright {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll -73px 0px;
	height: 33px;
	width: 33px;
}
.bubbletip td.bt-left-tail div.bt-left, .bubbletip td.bt-left {
	background: transparent url(../images/bubbletip/bubbletip-L-R.png) repeat-y scroll 0px 0px;
	width: 33px;
}
.bubbletip td.bt-left-tail div.bt-left-tail {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll 0px -33px;
	width: 33px;
	height: 40px;
}
.bubbletip td.bt-right-tail div.bt-right, .bubbletip td.bt-right {
	background: transparent url(../images/bubbletip/bubbletip-L-R.png) repeat-y scroll -33px 0px;
	width: 33px;
}
.bubbletip td.bt-right-tail div.bt-right-tail {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll -73px -33px;
	width: 33px;
	height: 40px;
}
.bubbletip td.bt-bottomleft {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll 0px -73px;
	height: 33px;
	width: 33px;
}
.bubbletip td.bt-bottom {
	background: transparent url(../images/bubbletip/bubbletip-T-B.png) repeat-x scroll 0px -33px;
	height: 33px;
}
.bubbletip td.bt-bottomright {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll -73px -73px;
	height: 33px;
	width: 33px;
}
.bubbletip table.bt-top, .bubbletip table.bt-bottom {
	width: 100%;
}
.bubbletip table.bt-top th {
	width: 50%;
	background: transparent url(../images/bubbletip/bubbletip-T-B.png) repeat-x scroll 0px 0px;
}
.bubbletip table.bt-bottom th {
	width: 50%;
	background: transparent url(../images/bubbletip/bubbletip-T-B.png) repeat-x scroll 0px -33px;
}
.bubbletip table.bt-top td div {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll -33px 0px;
	width: 40px;
	height: 33px;
}
.bubbletip table.bt-bottom td div {
	background: transparent url(../images/bubbletip/bubbletip.png) no-repeat scroll -33px -73px;
	width: 40px;
	height: 33px;
}
.bubbletip td.bt-content {
	background-color: #fff;
	vertical-align: middle;
}

#SmiliesTooltip span, .Smilie { display:inline-block; margin: 1px }

.sprite { background: url('../images/Sprite.png') no-repeat top left;  } 
.sprite.Adore { background-position: 0px 0px; width: 24px; height: 24px;  } 
.sprite.Angry { background-position: 0px -34px; width: 24px; height: 24px;  } 
.sprite.blank { background-position: 0px -68px; width: 1px; height: 1px;  } 
.sprite.CancelButton { background-position: 0px -79px; width: 91px; height: 39px;  } 
.sprite.CancelButtonHover { background-position: 0px -128px; width: 91px; height: 39px;  } 
.sprite.Celebrate { background-position: 0px -177px; width: 24px; height: 24px;  } 
.sprite.ChatActionText { background-position: 0px -211px; width: 124px; height: 64px;  } 
.sprite.ChatBackground { background-position: 0px -285px; width: 2px; height: 13px;  } 
.sprite.CloseButton { background-position: 0px -308px; width: 11px; height: 11px;  } 
.sprite.Collapse { background-position: 0px -329px; width: 9px; height: 16px;  } 
.sprite.ConnectButton { background-position: 0px -355px; width: 116px; height: 42px;  } 
.sprite.ConnectButtonHover { background-position: 0px -407px; width: 116px; height: 42px;  } 
.sprite.Cool { background-position: 0px -459px; width: 24px; height: 24px;  } 
.sprite.Cross { background-position: 0px -493px; width: 24px; height: 24px;  } 
.sprite.CrossSmall { background-position: 0px -527px; width: 16px; height: 16px;  } 
.sprite.Cry { background-position: 0px -553px; width: 24px; height: 24px;  } 
.sprite.Disconnect { background-position: 0px -587px; width: 16px; height: 16px;  } 
.sprite.DisconnectButton { background-position: 0px -613px; width: 119px; height: 39px;  } 
.sprite.DisconnectButtonHover { background-position: 0px -662px; width: 119px; height: 39px;  } 
.sprite.Dizzy { background-position: 0px -711px; width: 24px; height: 24px;  } 
.sprite.Email { background-position: 0px -745px; width: 16px; height: 16px;  } 
.sprite.Expand { background-position: 0px -771px; width: 9px; height: 16px;  } 
.sprite.Facebook { background-position: 0px -797px; width: 202px; height: 26px;  } 
.sprite.Feedback { background-position: 0px -833px; width: 16px; height: 16px;  } 
.sprite.FileTransferActionText { background-position: 0px -859px; width: 550px; height: 112px;  } 
.sprite.FileTransferDocument { background-position: 0px -981px; width: 167px; height: 198px;  } 
.sprite.FileTransferDocumentText { background-position: 0px -1189px; width: 76px; height: 51px;  } 
.sprite.Frown { background-position: 0px -1250px; width: 24px; height: 24px;  } 
.sprite.Hysterical { background-position: 0px -1284px; width: 24px; height: 24px;  } 
.sprite.Impish { background-position: 0px -1318px; width: 24px; height: 24px;  } 
.sprite.Kissed { background-position: 0px -1352px; width: 24px; height: 24px;  } 
.sprite.Laugh { background-position: 0px -1386px; width: 24px; height: 24px;  } 
.sprite.LiveChatIcon { background-position: 0px -1420px; width: 54px; height: 55px;  } 
.sprite.Magnify { background-position: 0px -1485px; width: 74px; height: 74px;  } 
.sprite.Money { background-position: 0px -1569px; width: 24px; height: 24px;  } 
.sprite.Notification { background-position: 0px -1603px; width: 22px; height: 22px;  } 
.sprite.OfflineBackgroundSent { background-position: 0px -1635px; width: 890px; height: 530px;  } 
.sprite.OfflineButton { background-position: 0px -2175px; width: 140px; height: 39px;  } 
.sprite.OfflineButtonHover { background-position: 0px -2224px; width: 140px; height: 39px;  } 
.sprite.OfflineStamp { background-position: 0px -2273px; width: 149px; height: 93px;  } 
.sprite.OfflineSuggestions { background-position: 0px -2376px; width: 344px; height: 27px;  } 
.sprite.Online { background-position: 0px -2413px; width: 64px; height: 18px;  } 
.sprite.OperatorForeground { background-position: 0px -2441px; width: 61px; height: 50px;  } 
.sprite.Play { background-position: 0px -2501px; width: 64px; height: 64px;  } 
.sprite.Popup { background-position: 0px -2575px; width: 16px; height: 16px;  } 
.sprite.PoweredByLiveHelp { background-position: 0px -2601px; width: 169px; height: 33px;  } 
.sprite.Refresh { background-position: 0px -2644px; width: 16px; height: 16px;  } 
.sprite.Sad { background-position: 0px -2670px; width: 24px; height: 24px;  } 
.sprite.SendButton { background-position: 0px -2704px; width: 54px; height: 42px;  } 
.sprite.SendButtonHover { background-position: 0px -2756px; width: 54px; height: 42px;  } 
.sprite.SendFile { background-position: 0px -2808px; width: 16px; height: 16px;  } 
.sprite.Shock { background-position: 0px -2834px; width: 24px; height: 24px;  } 
.sprite.Sleep { background-position: 0px -2868px; width: 24px; height: 24px;  } 
.sprite.Smile { background-position: 0px -2902px; width: 24px; height: 24px;  } 
.sprite.SmilieButton { background-position: 0px -2936px; width: 16px; height: 16px;  } 
.sprite.SoundOff { background-position: 0px -2962px; width: 16px; height: 16px;  } 
.sprite.SoundOn { background-position: 0px -2988px; width: 16px; height: 16px;  } 
.sprite.Stop { background-position: 0px -3014px; width: 24px; height: 24px;  } 
.sprite.Study { background-position: 0px -3048px; width: 24px; height: 24px;  } 
.sprite.Surprise { background-position: 0px -3082px; width: 24px; height: 24px;  } 
.sprite.Sweat { background-position: 0px -3116px; width: 24px; height: 24px;  } 
.sprite.TabBackground { background-position: 0px -3150px; width: 2px; height: 36px;  } 
.sprite.TickSmall { background-position: 0px -3196px; width: 16px; height: 16px;  } 
.sprite.Tired { background-position: 0px -3222px; width: 24px; height: 24px;  } 
.sprite.Twitter { background-position: 0px -3256px; width: 202px; height: 26px;  } 
.sprite.Typing { background-position: 0px -3292px; width: 13px; height: 10px;  } 
.sprite.Wink { background-position: 0px -3312px; width: 24px; height: 24px;  } 
.sprite.Woo { background-position: 0px -3346px; width: 24px; height: 24px;  } 
.sprite.AdoreSmall { background-position: 0px -3380px; width: 16px; height: 16px;  } 
.sprite.AngrySmall { background-position: 0px -3406px; width: 16px; height: 16px;  } 
.sprite.CelebrateSmall { background-position: 0px -3432px; width: 16px; height: 16px;  } 
.sprite.CoolSmall { background-position: 0px -3458px; width: 16px; height: 16px;  } 
.sprite.CrySmall { background-position: 0px -3484px; width: 16px; height: 16px;  } 
.sprite.DizzySmall { background-position: 0px -3510px; width: 16px; height: 16px;  } 
.sprite.FrownSmall { background-position: 0px -3536px; width: 16px; height: 16px;  } 
.sprite.HystericalSmall { background-position: 0px -3562px; width: 16px; height: 16px;  } 
.sprite.ImpishSmall { background-position: 0px -3588px; width: 16px; height: 16px;  } 
.sprite.KissedSmall { background-position: 0px -3614px; width: 16px; height: 16px;  } 
.sprite.LaughSmall { background-position: 0px -3640px; width: 16px; height: 16px;  } 
.sprite.MoneySmall { background-position: 0px -3666px; width: 16px; height: 16px;  } 
.sprite.SadSmall { background-position: 0px -3692px; width: 16px; height: 16px;  } 
.sprite.ShockSmall { background-position: 0px -3718px; width: 16px; height: 16px;  } 
.sprite.SleepSmall { background-position: 0px -3744px; width: 16px; height: 16px;  } 
.sprite.SmileSmall { background-position: 0px -3770px; width: 16px; height: 16px;  } 
.sprite.StopSmall { background-position: 0px -3796px; width: 16px; height: 16px;  } 
.sprite.StudySmall { background-position: 0px -3822px; width: 16px; height: 16px;  } 
.sprite.SurpriseSmall { background-position: 0px -3848px; width: 16px; height: 16px;  } 
.sprite.SweatSmall { background-position: 0px -3874px; width: 16px; height: 16px;  } 
.sprite.TiredSmall { background-position: 0px -3900px; width: 16px; height: 16px;  } 
.sprite.WinkSmall { background-position: 0px -3926px; width: 16px; height: 16px;  } 
.sprite.WooSmall { background-position: 0px -3952px; width: 16px; height: 16px;  }