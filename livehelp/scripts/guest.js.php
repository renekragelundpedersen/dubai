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
include('../include/functions.php');

$name = 'Operator';
$session = $_REQUEST['SESSION'];

header('Content-type: text/javascript; charset=utf-8');

if (file_exists('../locale/' . LANGUAGE . '/guest.php')) {
	include('../locale/' . LANGUAGE . '/guest.php');
}
else {
	include('../locale/en/guest.php');
}
?>
<!--
// stardevelop.com Live Help International Copyright 2003 - 2011
// JavaScript Check Status Functions

var LiveHelp = {};
var loggingOut = false;
var chatEnded = false;
var currentlyTyping = 0;
var messageHTML = '';
var messageTimer;
var newMessages = 0;
var messageSound;
var message = 0;

// Local Storage / Cookies
var storage = {};
storage.tabOpen = false;
storage.operatorDetailsOpen = false;
storage.messages = 0;
storage.soundEnabled = true;
storage.chatEnded = false;
storage.department = '';

function currentTime() {
	var date = new Date();
	return date.getTime();
}

/*
function windowLogout() {
	if (loggingOut == false && chatEnded == false) {
		var time = currentTime();
		$.get('logout.php?time=' + time);
		var html = display('', '', '<?php echo(addslashes($_LOCALE['endedchat'])); ?><br/><input type="button" style="width:95px; height:25px; margin-top:5px;" value="<?php echo(addslashes($_LOCALE['restartchat'])); ?>" onclick="location = \'index.php\'"/>', 2, 1);
		$('#Messages').append(html); 
		loggingOut = true; chatEnded = true;
		return '';
	}
}

function setBeforeUnload(){
    window.onbeforeunload = windowLogout;
}

setBeforeUnload(true);
*/

<?php
if ($_SETTINGS['OFFLINEEMAIL'] == true) {
?>
var continueTimer = setTimeout('windowOffline()', <?php echo($guest_timeout * 1000); ?>);

function windowOffline() {
	if ($('#ContinueLayer')) { $('#ContinueLayer').fadeIn(250); }
}
<?php
}
?>

jQuery.preloadImages = function() {
	for(var i = 0; i<arguments.length; i++) {
		jQuery('<img>').attr('src', arguments[i]);
	}
}

var SentMessage = 0; var LastGuestMessage = 0;

var displayImage = function(id) {
	return function (eventObject) {
		var output = '';
		var width = $('#LiveHelpScrollBorder').css('width');
		var displayWidth = parseInt(width) - 50;
		var unitMeasurement = width.slice(-2);
		if (this.width > displayWidth) {
			output = '<img src="' + this.src + '" alt="Received Image" style="width:' + displayWidth + unitMeasurement + '; max-width:' + this.width + 'px">';
		} else {
			output = '<img src="' + this.src + '" alt="Received Image" style="max-width:' + this.width + 'px">'
		}
		$('#msg' + id).append(output); output = ''; scrollBottom(); 
		if (storage.soundEnabled) { messageSound.play(); }
		window.focus();
	};
};

function display(id, username, message, align, status) {
	var output = '';
	if ($('#Messages') && message != null && chatEnded == false && $('#msg' + id).length == 0) {
		var alignment;
		
		if (align == '1') { alignment = 'left'; } else if (align == '2') { alignment = 'center'; } else if (align == '3') { alignment = 'right'; }
		if (status == '0') { color = '<?php echo($_SETTINGS['SENTFONTCOLOR']); ?>'; } else { color = '<?php echo($_SETTINGS['RECEIVEDFONTCOLOR']); ?>'; }

		output += '<div id="msg' + id + '" align="' + alignment + '" style="color:'+ color + '; margin:4px">';
		if (status == '0' || status == '1' || status == '2' || status == '7') { // Operator, Link, Mobile Device Messages
			if (username != '') { output += username + ' <?php echo($_LOCALE['says']); ?>:<br/>'; }
			message = message.replace(/([a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4})/g, '<a href="mailto:$1" class="message">$1</a>');
			message = message.replace(/((?:(?:http(?:s?))|(?:ftp)):\/\/[^\s|<|>|'|\"]*)/g, '<a href="$1" target="_blank" class="message">$1</a>');
			if (status != '0') { error = false; }
<?php
if ($_SETTINGS['SMILIES'] == true) {
?>
			message = htmlSmilies(message);
<?php
}
?>
			output += '<div style="margin:0 0 0 15px; color: ' + color + '">' + message + '</div>';
		} else if (status == '3') { // Image
			message = message.replace(/((?:(?:http(?:s?))):\/\/[^\s|<|>|'|\"]*)/g, '<img src="$1" alt="Received Image">');
			result = message.match(/((?:(?:http(?:s?))):\/\/[^\s|<|>|'|"]*)/g);
			if (result != null) {
				$('<img />').attr('src', result).load(displayImage(id));
			} else {
				output += message;
			}
		} else if (status == '4') { // PUSH
			eval('if (window.opener) { window.opener.location.href = "' + message + '"; window.opener.focus(); }');
			output += '<?php echo(addslashes($_LOCALE['pushedurl'])); ?>, <a href="#" onclick="window.opener.focus(); return false;" class="message"><?php echo(addslashes($_LOCALE['clickhere'])); ?></a> <?php echo(addslashes($_LOCALE['or'])); ?> <a href="' + message + '" target="_blank" class="message">' + message + '</a> <?php echo(addslashes($_LOCALE['opennewwindow'])); ?>';
		} else if (status == '5') { // JavaScript
			eval(message);
		} else if (status == '6') { // File Transfer
			output += '<?php echo(addslashes($_LOCALE['sentfile'])); ?> <a href="' + message + '" target="FileDownload"><?php echo(addslashes($_LOCALE['startdownloading'])); ?></a> <?php echo(addslashes($_LOCALE['rightclicksave'])); ?>';
		}
		output += '</div>';
		
		$('#WaitingLayer').fadeOut(250);
<?php
if ($_SETTINGS['OFFLINEEMAIL'] == true) {
?>
		$('#ContinueLayer').fadeOut(250);
		clearTimeout(continueTimer);
<?php
}
?>
		if (id != '') {
			var selector = '#msg' + id;
			if (status > 0 && $(selector).length == 0 && output != '') { // Operator
				newMessages++;
				LastGuestMessage = 0;
			}
		} else {
			newMessages++;
		}

	}
	return output;
}

var error = false;
function connectionError() {
	if (error == false && chatEnded == false) {
		output = '<div style="margin:0 0 0 15px; text-align: center; color: <?php echo($_SETTINGS['RECEIVEDFONTCOLOR']); ?>"><?php echo(addslashes($_LOCALE['connectionerror'])); ?></div>';
		$('#Messages').append(output);
		error = true;
	}
}

var focussed = false;
function focusChat() {
	if ($('#Message')) {
		if ($('#Message').attr('disabled') == false && focussed == false) {
			$('#Message').focus();
			var prevText = $('#Message').val();
			$('#Message').val(prevText);
		}
	}
}

function setTyping() {
	$('#LiveHelpTypingPopup span').text('<?php echo($name); ?> is typing');
	$('#LiveHelpTypingPopup').fadeIn(250);
}

function setWaiting() {
	$('#LiveHelpTypingPopup').fadeOut(250);
}

function scrollBottom() {
	if ($('#LiveHelpScroll')) { $('#LiveHelpScroll').scrollTo($('#scrollPlaceholder')); }
}

function LoadMessages() {
	var data = { TIME: $.now(), SESSION: encodeURIComponent('<?php echo($session); ?>'), LANGUAGE: '<?php echo(LANGUAGE); ?>', MESSAGE: message };
	if (currentlyTyping == 1) { data.TYPING = currentlyTyping; }
	
	$.ajax({url: 'refresher.php',
		data: data,
		dataType: 'json',
		success: function(data, textStatus, XMLHttpRequest) {
			
			if (data != null && data != '') {
			
				if (typeof data.messages != 'undefined' && data.messages.length > 0) {
				
					var html = '';
				
					// Output Messages
					$.each(data.messages, function(index, msg) {
						html += self.display(msg.id, msg.username, msg.content, msg.align, msg.status);
						message = msg.id;
					});
					
					if (html.length > 0) {
						$('#Messages').append(html);
						scrollBottom();
						if (storage.soundEnabled) { messageSound.play(); }
						window.focus();
						newMessages = 0;
					}
					
				}
				
				if (typeof data.typing != 'undefined' && data.typing) { self.setTyping(); } else { self.setWaiting(); }
	
			}
			
			messageTimer = window.setTimeout('LoadMessages();', 1500);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//$.post('include/error.php', { source: 'jQuery', text: 'LoadMessages() Error Event', file:'guest.js.php', error:textStatus } );
			messageTimer = window.setTimeout('LoadMessages();', 1500);
		}
	});

}

function typing(status) {
	if (status == true) { status = 1; } else { status = 0; } currentlyTyping = status;
}

function htmlSmilies(msg) {
	var style = 'style="max-width:16px" class="noresize"';
	msg = msg.replace(/:D/g, '<image src="./images/16px/Laugh.png" alt="Laugh" title="Laugh" ' + style + '>');
	msg = msg.replace(/:\)/g, '<image src="./images/16px/Smile.png" alt="Smile" title="Smile" ' + style + '>');
	msg = msg.replace(/:\(/g, '<image src="./images/16px/Sad.png" alt="Sad" title="Sad" ' + style + '>');
	msg = msg.replace(/\$\)/g, '<image src="./images/16px/Money.png" alt="Money" title="Money" ' + style + '>');
	msg = msg.replace(/&gt;:O/g, '<image src="./images/16px/Angry.png" alt="Angry" title="Angry" ' + style + '>');
	msg = msg.replace(/:P/g, '<image src="./images/16px/Impish.png" alt="Impish" title="Impish" ' + style + '>');
	msg = msg.replace(/:\\/g, '<image src="./images/16px/Sweat.png" alt="Sweat" title="Sweat" ' + style + '>');
	msg = msg.replace(/8\)/g, '<image src="./images/16px/Cool.png" alt="Cool" title="Cool" ' + style + '>');
	msg = msg.replace(/&gt;:L/g, '<image src="./images/16px/Frown.png" alt="Frown" title="Frown" ' + style + '>');
	msg = msg.replace(/;\)/g, '<image src="./images/16px/Wink.png" alt="Wink" title="Wink" ' + style + '>');
	msg = msg.replace(/:O/g, '<image src="./images/16px/Surprise.png" alt="Surprise" title="Surprise" ' + style + '>');
	msg = msg.replace(/8-\)/g, '<image src="./images/16px/Woo.png" alt="Woo" title="Woo" ' + style + '>');
	msg = msg.replace(/8-O/g, '<image src="./images/16px/Shock.png" alt="Shock" title="Shock" ' + style + '>');
	msg = msg.replace(/xD/g, '<image src="./images/16px/Hysterical.png" alt="Hysterical" title="Hysterical" ' + style + '>');
	msg = msg.replace(/:-\*/g, '<image src="./images/16px/Kissed.png" alt="Kissed" title="Kissed" ' + style + '>');
	msg = msg.replace(/:S/g, '<image src="./images/16px/Dizzy.png" alt="Dizzy" title="Dizzy" ' + style + '>');
	msg = msg.replace(/\+O\)/g, '<image src="./images/16px/Celebrate.png" alt="Celebrate" title="Celebrate" ' + style + '>');
	msg = msg.replace(/&lt;3/g, '<image src="./images/16px/Adore.png" alt="Adore" title="Adore" ' + style + '>');
	msg = msg.replace(/zzZ/g, '<image src="./images/16px/Sleep.png" alt="Sleep" title="Sleep" ' + style + '>');
	msg = msg.replace(/:X/g, '<image src="./images/16px/Stop.png" alt="Quiet" title="Quiet" ' + style + '>');
	msg = msg.replace(/X-\(/g, '<image src="./images/16px/Worn-out.png" alt="Tired" title="Tired" ' + style + '>');
	return msg;
}

function removeHTML(msg) {
	msg = msg.replace(/</g, '&lt;'); msg = msg.replace(/>/g, '&gt;'); msg = msg.replace(/\r\n|\r|\n/g, '<br />');
	return msg;
}

var displaySentMessage = function(msg) {
	return function (data, textStatus, XMLHttpRequest) {
		if (data != null && data != '') {
			if (typeof data.id != 'undefined') {
				html = '<div id="msg' + data.id + '" align="left" style="color:#666; margin:4px">';
				html += LiveHelp.user + ' says:<br/>';
				var message = removeHTML(msg);
				message = message.replace(/([a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4})/g, '<a href="mailto:$1" class="message">$1</a>');
				message = message.replace(/((?:(?:http(?:s?))|(?:ftp)):\/\/[^\s|<|>|'|\"]*)/g, '<a href="$1" target="_blank" class="message">$1</a>');
				if (LiveHelp.smilies) { message = htmlSmilies(message); }
				html += '<div style="margin:0 0 0 15px; color: #666">' + message + '</div></div>';
				$('#Messages').append(html);
				scrollBottom();
			}
		}
	};
};

function processForm() {
	var obj = $('#Message');
	if (obj.val() != '') {
		var data = { MESSAGE: obj.val(), SESSION: encodeURIComponent('<?php echo($session); ?>')};
		if (message == 0) {
			$.post('send.php', data );
		} else {
			data.JSON = true;
			$.post('send.php', data, displaySentMessage(obj.val()), 'json');
			typing(false);
		}
		obj.val('');
	}
  	return false;
}

function appendText(text) {
	if (!$('#Message').attr('disabled')) {
		var current = $('#Message').val();
		$('#Message').val(current + text);
	}
}

function checkEnter(e) {
	var characterCode; if ($('#Message').val() == '') { typing(false); } else { typing(true); }
	if (e.keyCode == 13 || e.charCode == 13) { processForm(); return false; } else { return true; }
}

function resizeEvent() {
	
	var height = $(window).height();
	var width = $(window).width();

	if ($('#LiveHelpScrollBorder').css('width').indexOf('%') == -1) {
	
		$('#LiveHelpScroll, #LiveHelpScrollBorder').css('width', 'auto');

<?php
	if (!empty($_SETTINGS['CAMPAIGNIMAGE'])) { $margin = 150; $width = 475; } else { $margin = 80; $width = 555; }
?>
		if (width > 625) { $('#LiveHelpScroll, #LiveHelpScrollBorder').css('width', width - <?php echo($margin); ?> + 'px'); } else { $('#LiveHelpScroll, #LiveHelpScrollBorder').css('width', '<?php echo($width); ?>px'); }
	}

<?php
	if ($_SETTINGS['TEMPLATE'] == 'whmcs-portal') { $margin = 0; } else { $margin = 10; }
?>	
	$('#LiveHelpScroll, #LiveHelpScrollBorder').css('height', 'auto');
	if (height > 435) { $('#LiveHelpScroll, #LiveHelpScrollBorder').css('height', height - 175 - <?php echo($margin); ?> + 'px'); } else { $('#LiveHelpScroll, #LiveHelpScrollBorder').css('height', 245 + <?php echo($margin); ?> + 'px'); }

	$('.body').css('width', width + 'px');
	$('.body').css('min-width', '625px');

	if ($('#Message').css('width').indexOf('%') == -1) { $('#Message').css('width', width - 160 + 'px'); }
	if (width - 277 > 348) { $('#BannerCenter').css('width', width - 277 + 'px'); } else { $('#BannerCenter').css('width', '348px'); }
	
	width = $('#LiveHelpScrollBorder').css('width');
	var displayWidth = parseInt(width);
	var unitMeasurement = width.slice(-2);
	$('#Messages img').not('.noresize').each(function () {
		var maxWidth = parseInt($(this).css('max-width'));
		var newWidth = displayWidth - 50;
		if (newWidth <= maxWidth) {
			$(this).css('width', newWidth + unitMeasurement);
		}
	});
	scrollBottom();
}

function toggleSound() {
	var css = (storage.soundEnabled) ? 'SoundOn' : 'SoundOff'
	if ($('#LiveHelpSoundToolbarButton').length > 0) {
		$('#LiveHelpSoundToolbarButton').removeClass('SoundOn SoundOff').addClass(css);
	}
}

function updateStorage() {
	$.jStorage.set('LiveHelp', storage);
}

function loadStorage() {
	var store = $.jStorage.get('LiveHelp');
	if (store != null) {
		storage = store;
		if (typeof(storage.soundEnabled) != 'undefined') {
			toggleSound();
		} else {
			storage.soundEnabled = true;
		}
	}
}

$(document).ready(function(){

	var session = '<?php echo($session); ?>';

	// Setup Sounds
	messageSound = new buzz.sound('sounds/Pending Chat', {
		formats: ['ogg', 'mp3', 'wav']
	});
	
	if (session.length > 0) {
		$('#WaitingLayer').hide();
	}
	
	$.ajax({
		url: 'include/settings.php',
		dataType: 'script',
		error: function() {
			// AJAX Error
		},
		success: function() { }
	});

	// Unload Events
	/*
	$(window).unload(function () {
		windowLogout();
	}).keydown(function () {
		focusChat();
	});
	*/
	
	LoadMessages();

	$.preloadImages('./locale/<?php echo(LANGUAGE); ?>/images/send_hover.gif');
	
	// Emoticons Fade and Hover Events
	$('.popup-contents img').fadeTo('fast', 0.6);
	$('.popup-contents img').hover(
      function () {
        $(this).fadeTo('fast', 1);
      }, 
      function () {
        $(this).fadeTo('fast', 0.6);
      }
    );
	
	$(window).resize(function() {
		resizeEvent();
	});
	
	// Resize
	resizeEvent();
	
	// Local Storage / Cookies
	loadStorage();
	
	// Send Button
	$('#LiveHelpSendButton, #LiveHelpSendButtonText').click(function () {
		processForm();
	});
	
	// Button Hover
	$('#LiveHelpDisconnectButton, #LiveHelpCancelButton, #LiveHelpSendButton').hover(function() {
		var id = $(this).attr('id').replace('LiveHelp', '');
		$(this).toggleClass(id + ' ' + id + 'Hover');
	}, function() {
		var id = $(this).attr('id').replace('LiveHelp', '');
		$(this).toggleClass(id + ' ' + id + 'Hover');
	});
	
	// Toolbar
	$('#LiveHelpToolbar div').hover(function () {
		$(this).fadeTo(200, 1.0);
	}, function () {
		$(this).fadeTo(200, 0.5);
	});
	
	// Sound Button
	$('#LiveHelpSoundToolbarButton').click(function () {
		if (storage.soundEnabled) {
			storage.soundEnabled = false;
		} else {
			storage.soundEnabled = true;
		}
		updateStorage();
		toggleSound();
	});
	
	// Feedback Button
	$('#LiveHelpFeedbackToolbarButton').click(function () {
		showRating()
	});
	
	$('#LiveHelpDisconnectToolbarButton').fancybox({href:'#LiveHelpDisconnect', margin:[50,50,50,50], helpers: { overlay:{ css:{ cursor:'auto' } }, title:{ type:'none' } }, openEffect:'elastic', openEasing:'easeOutBack', closeEffect:'elastic', closeEasing:'easeInBack'});
	
	// Disconnect Button
	$('#LiveHelpDisconnectButton').click(function () {
		disconnectChat();
	});
	$('#LiveHelpCancelButton').click(function () {
		$.fancybox.close();
	});
	
	// Smilies
	$('#SmiliesButton').bubbletip($('#SmiliesTooltip'), { id:'SmiliesBubble', calculateOnShow: true, deltaDirection:'up', 'offsetLeft': -128 });
	$('#SmiliesButton').click(function () {
		$(this).open();
	});
	$('#Message').focus(function () {
		$('#SmiliesButton').close();
	});
	$('#SmiliesTooltip span').click(function () {
		var smilie = $(this).attr('class').replace('sprite ', '');
		var text = ''
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
		var val = $('#Message').val();
		$('#Message').val(val + text);
	});

	if (jQuery.browser.msie) {  
		// Fix CSS background PNG images in all IE versions
		$('.popup td').each(function(){
			var bgIMG = jQuery(this).css('background-image');
			if(bgIMG.indexOf('.png') != -1){
				var iebg = bgIMG.split('url("')[1].split('")')[0];
				jQuery(this).css('background-image', 'none');
				jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "', sizingMethod='scale')";
			}
		});
	}

});

function showRating() {
	if ($('#LiveHelpRating').length == 0) {
		var ratingHtml = '<div id="LiveHelpFeedbackRating" style="text-align:center; margin-top:10px"><?php echo(addslashes($_LOCALE['rateyourexperience'])); ?>:<br/> \
	<div id="LiveHelpRating" style="position:relative; height:20px; width:90px; margin:0 auto"> \
		<div class="Rating VeryPoor" title="Very Poor" style="background:url(/livehelp/images/star.png) no-repeat 0 0; height:16px; width:16px; position:absolute; top:0; left:0; margin:1px; cursor:pointer"></div> \
		<div class="Rating Poor" title="Poor" style="background:url(/livehelp/images/star.png) no-repeat 0 0; height:16px; width:16px; position:absolute; top:0; left:16px; margin:1px; cursor:pointer"></div> \
		<div class="Rating Good" title="Good" style="background:url(/livehelp/images/star.png) no-repeat 0 0; height:16px; width:16px; position:absolute; top:0; left:32px; margin:1px; cursor:pointer"></div> \
		<div class="Rating VeryGood" title="Very Good" style="background:url(/livehelp/images/star.png) no-repeat 0 0; height:16px; width:16px; position:absolute; top:0; left:48px; margin:1px; cursor:pointer"></div> \
		<div class="Rating Excellent" title="Excellent" style="background:url(/livehelp/images/star.png) no-repeat 0 0; height:16px; width:16px; position:absolute; top:0; left:64px; margin:1px; cursor:pointer"></div> \
	</div> \
</div>';
	
		$('#Messages').append(ratingHtml);
	
		// Rating Events
		$('#LiveHelpRating .Rating').hover(function () {
			var i = $(this).index();
			$('#LiveHelpRating').find(':lt(' + i + 1 + ')').css('background-position', '0 -32px').parent().find(':gt(' + i + ')').css('background-position', '0 0');
		}, function() {
			var i = $(this).index() + 1;
			$('#LiveHelpRating').find(':lt(' + i + ')').css('background-position', '0 0');
			$('#LiveHelpRating div').each(function () {
				if ($(this).data('selected')) {
					$(this).css('background-position', '0 -16px');
				}
			});
		});
		
		$('#LiveHelpRating .Rating').click(function() {
			var i = $(this).index();
			$('#LiveHelpRating').find(':lt(' + i + 1 + ')').data('selected', true).css('background-position', '0 -16px');
			$('#LiveHelpRating').find(':gt(' + i + ')').data('selected', false).css('background-position', '0 0');
			$.post('logout.php', { RATING: i + 1, SESSION: encodeURIComponent('<?php echo($session); ?>') } );
		});
		
		scrollBottom();
	} else {
		$('#LiveHelpScroll').scrollTo($('#LiveHelpFeedbackRating'));
	}
}

function disconnectChat() {
	storage.chatEnded = true;
	storage.department = '';
	storage.lastMessage = 0;
	updateStorage();
	message = 0;
	$.get('logout.php', { SESSION: encodeURIComponent('<?php echo($session); ?>') });
	$.fancybox.close();
}

//-->