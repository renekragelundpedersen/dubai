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
include('../include/spiders.php');
include('../include/database.php');
include('../include/class.mysql.php');
include('../include/class.aes.php');
include('../include/class.cookie.php');
include('../include/config.php');

header('Content-type: text/javascript; charset=utf-8');

if (file_exists('../locale/' . LANGUAGE . '/admin.php')) {
	include('../locale/' . LANGUAGE . '/admin.php');
}
else {
	include('../locale/en/admin.php');
}

?>
<!--

$(function(){
	
	// Smilies
	$('#LiveHelpSmiliesButton').click(function () {
		$(this).bubbletip($('#SmiliesTooltip'), { calculateOnShow: true, deltaDirection: 'left' }).open();
	});
	
	$('#MESSAGE').focus(function () {
		$('#LiveHelpSmiliesButton').close();
	});
	
	$('#SmiliesTooltip span').click(function () {
		var smilie = $(this).attr('class').replace('sprite ', ''),
			val = $('#MESSAGE').val(),
			text = '';
		
		switch (smilie) {
		case 'Laugh':
			text = ':D';
			break;
		case 'Smile':
			text = ':)';
			break;
		case 'Sad':
			text = ':(';
			break;
		case 'Money':
			text = '$)';
			break;
		case 'Impish':
			text = ':P';
			break;
		case 'Sweat':
			text = ':\\';
			break;
		case 'Cool':
			text = '8)';
			break;
		case 'Frown':
			text = '>:L';
			break;
		case 'Wink':
			text = ';)';
			break;
		case 'Surprise':
			text = ':O';
			break;
		case 'Woo':
			text = '8-)';
			break;
		case 'Tired':
			text = 'X-(';
			break;
		case 'Shock':
			text = '8-O';
			break;
		case 'Hysterical':
			text = 'xD';
			break;
		case 'Kissed':
			text = ':-*';
			break;
		case 'Dizzy':
			text = ':S';
			break;
		case 'Celebrate':
			text = '+O)';
			break;
		case 'Angry':
			text = '>:O';
			break;
		case 'Adore':
			text = '<3';
			break;
		case 'Sleep':
			text = 'zzZ';
			break;
		case 'Stop':
			text = ':X';
			break;
		}
		$('#MESSAGE').val(val + text);
	});

	if (jQuery.browser.msie) {  
		// fix css background pngs in all ie versions
		$(".popup td").each(function(){
			var bgIMG = jQuery(this).css('background-image');
			if(bgIMG.indexOf(".png")!=-1){
				var iebg = bgIMG.split('url("')[1].split('")')[0];
				jQuery(this).css('background-image', 'none');
				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
			}
		});
	}

});

//-->