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

if (!isset($_SERVER['DOCUMENT_ROOT'])){ $_SERVER['DOCUMENT_ROOT'] = ''; }
if (!isset($_REQUEST['DEPARTMENT'])){ $_REQUEST['DEPARTMENT'] = ''; }
if (!isset($_REQUEST['SERVER'])){ $_REQUEST['SERVER'] = ''; }
if (!isset($_REQUEST['TRACKER'])){ $_REQUEST['TRACKER'] = ''; }
if (!isset($_REQUEST['STATUS'])){ $_REQUEST['STATUS'] = ''; }
if (!isset($_REQUEST['TITLE'])){ $_REQUEST['TITLE'] = ''; }

$installed = false;
$database = include('./database.php');
if ($database) {
	include('./spiders.php');
	include('./functions.php');
	include('./class.mysql.php');
	include('./class.aes.php');
	include('./class.cookie.php');
	$installed = include('./config.php');
	include('./version.php');
} else {
	$installed = false;
}

// HTTP/1.1
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

// HTTP/1.0
header('Pragma: no-cache');
header('Content-type: text/javascript; charset=utf-8');

if ($installed == false) {
	include('./default.php');
?>
<!--
// stardevelop.com Live Help International Copyright 2003
// JavaScript Check Status Functions

var statusImagesLiveHelp = new Array();

//-->
<?php
	exit();
}

if ($installed == true) {

$department = $_REQUEST['DEPARTMENT'];
$tracker = $_REQUEST['TRACKER'];
$title = substr($_REQUEST['TITLE'], 0, 150);
$url = $_SERVER['HTTP_REFERER'];

// Visitor Session Cookie
if (isset($_COOKIE['LiveHelpSession'])) {
	$cookie = new Cookie;
	$GUEST = $cookie->decode($_COOKIE['LiveHelpSession']);

	if (isset($GUEST['CHAT']) && !is_numeric($GUEST['CHAT'])) { $GUEST['CHAT'] = 0; }
	if (isset($GUEST['VISITOR']) && !is_numeric($GUEST['VISITOR'])) { $GUEST['VISITOR'] = 0; }

} else {

	// Initalise Guest Cookie
	$GUEST = array();
	$GUEST['VISITOR'] = 0;
	$GUEST['CHAT'] = 0;
}

// Overide Language
if (isset($_REQUEST['LANGUAGE']) && strlen($_REQUEST['LANGUAGE']) == 2) {
	$_SETTINGS['LOCALE'] = $_REQUEST['LANGUAGE'];
}

$tracker = (empty($tracker)) ? true : false;
$totalpages = 0;

if ($GUEST['VISITOR'] > 0) {

	$query = sprintf("SELECT `path` FROM " . $table_prefix . "requests WHERE `id` = '%d' LIMIT 1", $GUEST['VISITOR']);
	$row = $SQL->selectquery($query);
	if (is_array($row)) {
	
		// Get the current page from the referer (the page the JavaScript was called from)
		$page = $_SERVER['HTTP_REFERER'];
		for ($i = 0; $i < 3; $i++) {
			$pos = strpos($page, '/');
			if ($pos === false) {
				$page = '';
				break;
			}
			if ($i < 2) {
				$page = substr($page, $pos + 1);
			}
			elseif ($i >= 2) {
				$page = substr($page, $pos);
			}
		}
		
		$page = urldecode(trim(addslashes($page)));
		$path = addslashes($row['path']);
		$previouspath = explode('; ', $path);
		
		if ($page != trim(end($previouspath))) {
			$query = sprintf("UPDATE " . $table_prefix . "requests SET `request` = NOW(), `url` = '%s', `path` = '%s; %s', `status` = '0' WHERE `id` = '%d'", $SQL->escape($url), $SQL->escape($path), $SQL->escape($page), $GUEST['VISITOR']);
			$SQL->updatequery($query);
			$totalpages = count($previouspath) + 1;
			
			if ($_SETTINGS['TRANSCRIPTVISITORALERTS'] == true) {
				if ($GUEST['CHAT'] > 0) {
					$query = sprintf("SELECT `id`, `username`, `active` FROM " . $table_prefix . "chats WHERE `id` = '%d' LIMIT 1", $GUEST['CHAT']);
					$row = $SQL->selectquery($query);
					if (is_array($row)) {
						$id = $row['id'];
						$username = $row['username'];
						$active = $row['active'];
						if ($active > 0) {
							$message = "$username has just visited $url";
							
							$query = sprintf("INSERT INTO " . $table_prefix . "messages (`chat`, `username`, `datetime`, `message`, `align`, `status`) VALUES ('%d', '', NOW(), '%s', '2', '-2')", $id, $message);
							$SQL->insertquery($query);
						}
					}
				}
			}
			
		}
		else {
			$query = sprintf("UPDATE " . $table_prefix . "requests SET `request` = NOW(), `url` = '%s', `status` = '0' WHERE `id` = '%d'", $SQL->escape($url), $GUEST['VISITOR']);
			$SQL->updatequery($query);
			$totalpages = count($previouspath);
		}
	}
	
}
?>
<!--
// <?php echo($_LOCALE['stardeveloplivehelpversion'] . "\n"); ?>
// Database Version: <?php echo($_SETTINGS['SERVERVERSION'] . "\n"); ?>
// stardevelop.com Live Help International Copyright 2003

var LiveHelp = function() {

var server = '<?php echo($server); ?>';
var domain = '<?php echo($cookie_domain); ?>';
var pages = '<?php echo($totalpages); ?>';

var LiveHelpXMLHTTP = null;
var statusImagesLiveHelp = new Array();
var currentStatus = '';

var posLeft = (screen.width - <?php echo($_SETTINGS['CHATWINDOWWIDTH']); ?>) / 2;
var posTop = (screen.height - <?php echo($_SETTINGS['CHATWINDOWHEIGHT']); ?>) / 2;
var size = 'height=<?php echo($_SETTINGS['CHATWINDOWHEIGHT']); ?>,width=<?php echo($_SETTINGS['CHATWINDOWWIDTH']); ?>,top=' + posTop + ',left=' + posLeft + ',resizable=1,toolbar=0,menubar=0';

<?php
if ($tracker == true && $_SETTINGS['VISITORTRACKING'] == true) {
?>
var ns6 = (!document.all && document.getElementById); 
var ie4 = (document.all);
var ns4 = (document.layers);

function currentTime() {
	var date = new Date();
	return date.getTime();
}

var initiateOpen = 0;
var initiateLoaded = 0;
var initiateAuto = 0;
var countTracker = 0;
var idleTimeout = 90 * 60 * 1000;
var timeStart = currentTime();
var timeElapsed;

var trackingInitalized = 0;
var topMargin = 10;
var leftMargin = 10;
var hAlign = "<?php echo(strtolower($_SETTINGS['INITIATECHATHORIZONTAL'])); ?>";
var vAlign = "<?php echo(strtolower($_SETTINGS['INITIATECHATVERTICAL'])); ?>";
var layerHeight = 229;
var layerWidth = 323;

var browserWidth = 0;
var browserHeight = 0;

var trackerStatus = new Image;
var time = currentTime();
var title = encodeURI(escape(<?php if (!empty($title)) { echo("'" . $title . "'"); } else { echo('document.title.substring(0, 150)'); } ?>));
var localtime = getTimezone();

var TrackingTimer; var InitiateChatTimer;
var referrer = encodeURI(escape(document.referrer));
var url = encodeURI(escape(document.location.href));

var resetTracking = 0;

function getTimezone() {
	var datetime = new Date();
	if (datetime) {
		return datetime.getTimezoneOffset();
	} else {
		return '';
	}
}

function checkXMLHTTP() {
	obj = null;
	if (window.XMLHttpRequest) {
		obj = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		obj = new ActiveXObject("Microsoft.XMLHTTP")
		if (!obj) {
			try {
				obj = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					obj = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					obj = null;
				}
			}
		}
    }
	return obj;
}

function LoadXMLTracking(initiateResult) {

	var time = currentTime();
	LiveHelpXMLHTTP = checkXMLHTTP();
	
	// Run the XML query
	if (LiveHelpXMLHTTP.readyState != 0) {
		LiveHelpXMLHTTP.abort();
	}
	
	if (typeof initiateResult == 'undefined') { initiateResult = '' }
	
	var RequestData = 'JS=1&DEPARTMENT=<?php echo($_REQUEST['DEPARTMENT']); ?>&INITIATE=' + initiateResult;
	if (trackingInitalized == 0) {
		RequestData = 'JS=1&TITLE=' + title + '&URL=' + url + '&REFERRER=' + referrer + '&WIDTH=' + screen.width + '&HEIGHT=' + screen.height + '&DEPARTMENT=<?php echo($_REQUEST['DEPARTMENT']); ?>&INITIATE=' + initiateResult + '&TIME=' +time;
		trackingInitalized = 1;
	}

	try {
		LiveHelpXMLHTTP.open('POST', '<?php echo($server); ?>/livehelp/include/status.php', true);
	} catch(e) {
		CancelXMLTracking(initiateResult);
		return false;
	}
	
	if (LiveHelpXMLHTTP.withCredentials !== undefined) {
		LiveHelpXMLHTTP.withCredentials = 'true';
	}
	LiveHelpXMLHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//LiveHelpXMLHTTP.setRequestHeader("Content-length", RequestData.length);
	//LiveHelpXMLHTTP.setRequestHeader("Connection", "close");
		
	LiveHelpXMLHTTP.onreadystatechange = function() {
		if (LiveHelpXMLHTTP.readyState == 4) {
			// Process response as JavaScript
			if (LiveHelpXMLHTTP.status == 200) {
				eval(LiveHelpXMLHTTP.responseText);
			}
		}
	};

	try {
		LiveHelpXMLHTTP.send(RequestData);
	} catch(e) {
		CancelXMLTracking(initiateResult);
		return false;
	}

	timeElapsed = time - timeStart;
	if (timeElapsed < idleTimeout) {
		window.clearTimeout(TrackingTimer);
		TrackingTimer = window.setTimeout(function(){ 
			LoadXMLTracking();
		}, <?php echo($visitor_refresh * 1000); ?>);
	}

}

function CancelXMLTracking(initiateResult) {
	LiveHelpXMLHTTP.abort();
	LiveHelpXMLHTTP = null;

	if (resetTracking == 0) {
		trackingInitalized = 0;
		resetTracking = 1;
	}
	
	OnlineTracker(initiateResult);
}

function findObj(n, d) {
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
		if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function swapImage() {
	var i,j=0,x,a=swapImage.arguments; document.sr=new Array; for(i=0;i<(a.length-2);i+=3)
		if ((x=findObj(a[i]))!=null){document.sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// stardevelop.com Live Help International Copyright 2003
// JavaScript Initiate Chat Layer Functions

function toggleInitiateChat(object) {
  if (document.getElementById) {
    if (document.getElementById(object).style.visibility == 'visible')
      document.getElementById(object).style.visibility = 'hidden';
    else
      document.getElementById(object).style.visibility = 'visible';
  }
  else if (document.layers && document.layers[object] != null) {
    if (document.layers[object].visibility == 'visible' || document.layers[object].visibility == 'show' )
      document.layers[object].visibility = 'hidden';
    else
      document.layers[object].visibility = 'visible';
  }
  else if (document.all) {
    if (document.all[object].style.visibility == 'visible')
      document.all[object].style.visibility = 'hidden';
    else
      document.all[object].style.visibility = 'visible';
  }
  return false;
}

function floatRefresh() {
	window.clearTimeout(InitiateChatTimer);
	window.clearTimeout(TrackingTimer);
	if (countTracker == <?php echo($visitor_refresh * 1000); ?>) {
		if (LiveHelpXMLHTTP != null) {
			LoadXMLTracking();
		} else {
			OnlineTracker();
		}
		countTracker = 0;
	}
	else {
		countTracker = countTracker + 10;
	}
	InitiateChatTimer = window.setTimeout(function() {
		mainPositions("floatLayer");
		floatRefresh();
	}, 10);
}

function mainPositions(layer) { 

	if (document.getElementById) {
		this.currentY = parseInt(document.getElementById(layer).style.top);
		this.currentX = parseInt(document.getElementById(layer).style.left); 
	} else if (document.all) {
		this.currentY = parseInt(document.all[layer].style.pixelTop);
		this.currentX = parseInt(document.all[layer].style.pixelLeft);
	} else if (document.layers && document.layers[object] != null) {
		this.currentY = parseInt(document.layers[layer].top);
		this.currentX = parseInt(document.layers[layer].left); 
	}

	if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
		this.scrollTop = document.documentElement.scrollTop;
		this.scrollLeft = document.documentElement.scrollLeft;
	} else {
		this.scrollTop = document.body.scrollTop;
		this.scrollLeft = document.body.scrollLeft;
	}
	
	var newTargetY = this.scrollTop + topMargin;
	var newTargetX = this.scrollLeft + leftMargin;
	if ( this.currentY != newTargetY || this.currentX != newTargetX) { 
		if (this.targetY != newTargetY || this.targetX != newTargetX) { 
			this.targetY = newTargetY; this.targetX = newTargetX;
			floatStart();
		}
		animate(layer); 
	}
} 

function floatStart() { 
	var now = new Date();
	this.Y = this.targetY - this.currentY; this.X = this.targetX - this.currentX;
	
	this.C = Math.PI / 2400; 
	this.D = now.getTime();
	if (Math.abs(this.Y) > this.browserHeight) { 
		this.E = this.Y > 0 ? this.targetY - this.browserHeight : this.targetY + this.browserHeight;
		this.Y = this.Y > 0 ? this.browserHeight : -this.browserHeight;
	} else { 
		this.E = this.currentY;
	} 
	if (Math.abs(this.X) > this.browserWidth) { 
		this.F = this.X > 0 ? this.targetX - this.browserWidth : this.targetX + this.browserWidth;
		this.X = this.X > 0 ? this.browserWidth : -this.browserWidth;
	} else { 
		this.F = this.currentX;
	} 
} 

function animate(layer) { 
	var now = new Date();
	var newY = this.Y * Math.sin( this.C * ( now.getTime() - this.D ) ) + this.E;
	var newX = this.X * Math.sin( this.C * ( now.getTime() - this.D ) ) + this.F;
	newY = Math.round(newY);
	newX = Math.round(newX);

	if ((this.Y > 0 && newY > this.currentY) || (this.Y < 0 && newY < this.currentY)) { 
		if (document.getElementById) { document.getElementById(layer).style.top = newY + 'px'; }
		else if (document.all) { document.all[layer].style.pixelTop = newY + 'px'; }
		else if (document.layers && document.layers[object] != null) { document.layers[layer].top = newY + 'px'; }
	}
	if ((this.X > 0 && newX > this.currentX) || (this.X < 0 && newX < this.currentX)) { 
		if (document.getElementById) { document.getElementById(layer).style.left = newX + 'px'; }
		else if (document.all) { document.all[layer].style.pixelLeft = newX + 'px'; }
		else if (document.layers && document.layers[object] != null) { document.layers[layer].left = newX + 'px'; }
	}
}

function resetLayerLocation() {

	var width = 0; var height = 0;

	if(typeof(window.innerWidth) == 'number') {
		width = window.innerWidth;
		height = window.innerHeight;
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}

	leftMargin = 10; topMargin = 10;
	browserWidth = width; browserHeight = height;
	
	if (hAlign == 'right') { leftMargin = width - leftMargin - layerWidth - 20; }
	else if (hAlign == 'middle') { leftMargin = Math.round((width - 20) / 2) - Math.round(layerWidth / 2); }

	if (vAlign == 'bottom') { topMargin = height - topMargin - layerHeight - 45; }
	else if (vAlign == 'center') { topMargin = Math.round((height - 20) / 2) - Math.round(layerHeight / 2); }

}

function stopLayer() {
	window.clearTimeout(InitiateChatTimer);	

	if (initiateOpen == 1) {
		toggleInitiateChat('floatLayer');
	}
	initiateLoaded = 0;
}

function resizeEvent(e) {
	if (!e) e = window.event;
	resetLayerLocation();
	return true;
}

window.onresize = resizeEvent;

<?php
	}

$available = 0;
$hidden = 0;
$online = 0;
$away = 0;
$brb = 0;

// Counts the total number of support users within each Online/Offline/BRB/Away status mode
$query = "SELECT `username`, `status`, `department`, `device` FROM " . $table_prefix . "users WHERE `refresh` > DATE_SUB(NOW(), INTERVAL $connection_timeout SECOND)";
$rows = $SQL->selectall($query);
if (is_array($rows)) {
	foreach ($rows as $key => $row) {
		if (is_array($row)) {
			if (!empty($row['device']) && $row['status'] == 1) {
				$online++;
			} else {
				if ($department != '' && $_SETTINGS['DEPARTMENTS']) {
					// Department Array
					$departments = array_map('trim', explode(';', $row['department']));
					if (array_search($department, $departments) !== false) {
						switch ($row['status']) {
							case 0: // Offline - Hidden
								$hidden++;
								break;
							case 1: // Online
								$online++;
								break;
							case 2: // Be Right Back
								$brb++;
								break;
							case 3: // Away
								$away++;
								break;
						}
					}
				}
				else {
					switch ($row['status']) {
						case 0: // Offline - Hidden
							$hidden++;
							break;
						case 1: // Online
							$online++;
							break;
						case 2: // Be Right Back
							$brb++;
							break;
						case 3: // Away
							$away++;
							break;
					}
				}
			}
		}
	}
}

$available = $online + $away + $brb + $hidden;

if ($tracker == true && $_SETTINGS['VISITORTRACKING'] == true) {

	if ($GUEST['VISITOR'] > 0) {
		$query = sprintf("SELECT `initiate` FROM " . $table_prefix . "requests WHERE `id` = '%d'", $GUEST['VISITOR']);
		$row = $SQL->selectquery($query);
		if (is_array($row)) {
			if ($row['initiate'] > 0 || $row['initiate'] == -1) {
?>

initiateLoaded = 1;

<?php
			}
			if (isset($_SETTINGS['INITIATECHATAUTO']) && $_SETTINGS['INITIATECHATAUTO'] > 0) {
				if (($row['initiate'] == 0 || $row['initiate'] == -1) && $online > 0 && $totalpages >= $_SETTINGS['INITIATECHATAUTO']) {
?>

initiateAuto = 1;

<?php
				}
			}
		}
	}
?>

function checkInitiate(e) {
	// Check if site visitor has an Initiate Chat Request Pending for display...
	if (!e) var e = window.event;
	var imageWidth = this.width; var imageHeight = this.height;
	
	if (imageHeight == 2 || initiateAuto == 1) {
		displayInitiateChat();
	}
    
    if (imageWidth == 1) { // Hidden
    	changeStatus('Hidden')
    } else if (imageWidth == 2) { // Online
    	changeStatus('Online');
    } else if (imageWidth == 3) { // Be Right Back
    	changeStatus('BRB');
    } else if (imageWidth == 4) { // Away
    	changeStatus('Away');
    }
	return true;
}

function writeLayer(layer, sText) {
	if (layer != false) {
		if (layer.innerHTML == null) {
			layer.open();
			layer.write(sText);
			layer.close();
			return true;
		} else {
			layer.innerHTML = sText;
			return true;
		}
	}
	return false;
}

function acceptInitiateChat() {
	if (LiveHelpXMLHTTP != null) {
		LoadXMLTracking('Accepted');
	} else {
		OnlineTracker('Accepted');
	}
	stopLayer();
}

function declineInitiateChat() {
	if (LiveHelpXMLHTTP != null) {
		LoadXMLTracking('Declined');
	} else {
		OnlineTracker('Declined');
	}
	stopLayer();
}

function displayInitiateChat() {

	if (initiateOpen == 0 || initiateLoaded == 1) {
	
		resetLayerLocation();
		
		var obj;
		if (document.getElementById) {
			obj = document.getElementById('floatLayer');
			if (obj != null) { obj.style.top = topMargin + 'px'; obj.style.left = leftMargin + 'px'; }
		} else if (document.all) {
			obj = document.all['floatLayer'];
			if (obj != null) { obj.style.pixelTop = topMargin + 'px'; obj.style.pixelLeft = leftMargin + 'px'; }
		} else if (document.layers) {
			obj = document.layers['floatLayer'];
			if (obj != null) { obj.top = topMargin + 'px'; obj.left = leftMargin + 'px'; }
		}
		
		if (obj != null) {

			var openingTrackerStatus = new Image;
			openingTrackerStatus.src = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened';
		
			if (document.getElementById) { document.getElementById('floatLayer').location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }
			else if (document.layers) { document.layers['floatLayer'].location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }
			else if (document.all) { document.all['floatLayer'].location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }

			floatRefresh();
	
			toggleInitiateChat('floatLayer');
			initiateOpen = 1; initiateLoaded = 0; initiateAuto = 0;
		}
	}
}


<?php
}

if ($tracker == true && $_SETTINGS['VISITORTRACKING'] == true) {
?>
function OnlineTracker(initiateResult) {
	var time = currentTime();
	trackerStatus = new Image;
<?php
// If the Online Tracker is Enabled and there is Admin Users Online/Hidden/BRB then... start JavaScript timer
if ($available > 0) {
?>

	if (typeof initiateResult == 'undefined') { initiateResult = '' }
	
	if (trackingInitalized == 0) {
		trackerStatus.src = '<?php echo($server); ?>/livehelp/include/status.php?TRACKER=1&TITLE=' + title + '&URL=' + url + '&REFERRER=' + referrer + '&WIDTH=' + screen.width + '&HEIGHT=' + screen.height + '&TIME=' + time;
		trackingInitalized = 1;
	} else {
		if (initiateOpen == 0) { trackerStatus.onload = checkInitiate; }
		if (initiateResult != '') {
			trackerStatus.src = '<?php echo($server); ?>/livehelp/include/status.php?TRACKER=1&INITIATE=' + initiateResult + '&TIME=' + time;
		} else {
			trackerStatus.src = '<?php echo($server); ?>/livehelp/include/status.php?TRACKER=1&TIME=' + time;
		}
	}

	timeElapsed = time - timeStart;
	if (timeElapsed < idleTimeout) {
		window.clearTimeout(TrackingTimer);
		TrackingTimer = window.setTimeout(function() {
			OnlineTracker();
		}, <?php echo($visitor_refresh * 1000); ?>);
	}
<?php
}
else {
?>
	trackerStatus.src = '<?php echo($server); ?>/livehelp/include/status.php?TRACKER=1&TITLE=' + title + '&URL=' + url + '&REFERRER=' + referrer + '&WIDTH=' + screen.width + '&HEIGHT=' + screen.height + '&TIME=' + time;
<?php
}
?>
}

LiveHelpXMLHTTP = checkXMLHTTP();

if (LiveHelpXMLHTTP != null) {
	LoadXMLTracking();
}
else {
	OnlineTracker();
}

<?php
}
?>

function strTrim(str) {
	if (!str || str == '') { return ''; }
	return str.replace(/^\s+|\s+$/g, '');
}

var LiveHelpWindow = '';
<?php
if ($_SETTINGS['OFFLINEEMAILREDIRECT'] != '') {
	if (preg_match('/^[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&\'*+\\\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&\'*+\\\\.\/0-9=?A-Z\^_`a-z{|}~]+$/', $_SETTINGS['OFFLINEEMAILREDIRECT'])) {
		$_SETTINGS['OFFLINEEMAILREDIRECT'] = 'mailto:' . $_SETTINGS['OFFLINEEMAILREDIRECT'];	
	}
?>
var OfflineEmail = 0;
<?php
} else {
?>
var OfflineEmail = <?php echo($_SETTINGS['OFFLINEEMAIL']); ?>;
<?php
}

// Online
if ($online > 0) {
?>
currentStatus = 'Online';
<?php
}
?>

<?php
if ($tracker == true && $_SETTINGS['VISITORTRACKING'] == true) {
?>
function getTxQry(name, value) {
	if (value == '') { str = '' }
	value = strTrim(value); if (value != '') { var str = '&' + name + '=' + strTrim(value)}
	return str;
}

var transCompleted = 0;

function setLiveHelpTrans() {
	if (transCompleted == 0) {
		var obj;
		if (document.getElementById) { obj = document.getElementById('utmtrans');
		} else if (document.utmform && document.utmform.utmtrans) { obj = document.utmform.utmtrans; } else { return; }
		
        if (obj != null) {
            obj = strTrim(obj.value); d = obj.split('UTM:');
            var str = '';
            
            for (var i=0; i < d.length; i++) {
                d[i] = strTrim(d[i]); type = d[i].charAt(0);
                if (type != 'T' && type != 'I') { continue; }
                if (type == 'T') {
                    t = d[i].split('|');
                    if (strTrim(t[1]) != '') {
                        str = '?txid=' + strTrim(t[1]); 
                        params = new Array('affil', 'total', 'tax', 'ship', 'city', 'state', 'country');
                        for (var ii = 0; ii < t.length-2; ii++) {
                            str += getTxQry(params[ii], t[ii+2]);
                        }
                    }
                } else if (type == 'I') {
                    im = d[i].split('|');
                    if (strTrim(im[1]) != '') {
                        id = 'im[' + (i-1) + ']'; str += '&' + id + '[txid]=' + strTrim(im[1]); 
                        params = new Array(id + '[sku]', id + '[name]', id + '[category]', id + '[price]', id + '[qty]');
                        for (var ii = 0; ii < im.length-2; ii++) {
                            id = ii+2; 
                            str += getTxQry(params[ii], im[id]);
                        }
                    }	
                }
            }
            
            image = new Image;
            image.src = '/livehelp/include/conversion.php' + str + '&time=' + currentTime();
		}
        
		transCompleted = 1;
	}
}

function setupImages() {
	statusImagesLiveHelp[statusImagesLiveHelp.length] = findObj('LiveHelpStatus');
	statusImagesLiveHelp[statusImagesLiveHelp.length] = findObj('LiveHelpCallback');
}

function initaliseLiveHelp() {
	setLiveHelpTrans();
	setupImages();
}

if(typeof window.addEventListener != 'undefined') {
	// Safari, Gecko, Konqueror etc.
	window.addEventListener('load', initaliseLiveHelp, false);
} else if(typeof document.addEventListener != 'undefined') {
	// Opera 7
	document.addEventListener('load', initaliseLiveHelp, false);
} else if(typeof window.attachEvent != 'undefined') {
	// Inernet Explorer
	window.attachEvent('onload', initaliseLiveHelp);
}
<?php
}
?>

return {

	LiveHelpWindow: LiveHelpWindow,
	OfflineEmail: OfflineEmail,
	currentStatus: currentStatus,
	size: size,
<?php
if ($tracker == true && $_SETTINGS['VISITORTRACKING'] == true) {
?>
	initiateOpen: initiateOpen,
	initiateLoaded: initiateLoaded,
	initiateAuto: initiateAuto,
	trackingInitalized: trackingInitalized,
	TrackingTimer: TrackingTimer,
	topMargin: topMargin,
	leftMargin: leftMargin,
<?php
}
?>
	statusImagesLiveHelp: statusImagesLiveHelp,
	acceptInitiateChat: function () {
		acceptInitiateChat();
	},
	declineInitiateChat: function () {
		declineInitiateChat();
	},
	currentTime: function () {
		currentTime();
	},
	resetLayerLocation: function() {
		resetLayerLocation();
	},
	floatRefresh: function() {
		floatRefresh();
	},
	toggleInitiateChat: function() {
		toggleInitiateChat('floatLayer');
	},
	swapImage: function(a, b, c, d) {
		swapImage(a, b, c, d);
	}

};

}();


function openLiveHelp(department, location, template) {

<?php
if ($department != '') {
?>
	if (LiveHelp.OfflineEmail == 0 && LiveHelp.currentStatus != 'Online') {
<?php
	if ($_SETTINGS['OFFLINEEMAILREDIRECT'] != '') {
?>
		document.location = '<?php echo($_SETTINGS['OFFLINEEMAILREDIRECT']); ?>';
<?php
	}
?>
		return false;
	} else {
		if (typeof template != 'undefined' && template != '') {
			LiveHelp.LiveHelpWindow = window.open('<?php echo($server); ?>/livehelp/index.php?DEPARTMENT=<?php echo($department); ?>&LANGUAGE=<?php echo($_SETTINGS['LOCALE']); ?>&TEMPLATE=' + template, 'SUPPORTER', LiveHelp.size);
		} else {
			LiveHelp.LiveHelpWindow = window.open('<?php echo($server); ?>/livehelp/index.php?DEPARTMENT=<?php echo($department); ?>&LANGUAGE=<?php echo($_SETTINGS['LOCALE']); ?>', 'SUPPORTER', size);
		}
	}
<?php
}
else {
?>
	if (LiveHelp.OfflineEmail == 0 && LiveHelp.currentStatus != 'Online') {
<?php
	if ($_SETTINGS['OFFLINEEMAILREDIRECT'] != '') {
?>
		document.location = '<?php echo($_SETTINGS['OFFLINEEMAILREDIRECT']); ?>';
<?php
	}
	$window = preg_replace('/[^a-z]/i', '', $cookie_domain);
?>
		return false;
	} else {
	
		if (typeof location == 'undefined' || location == '') { var location = 'index.php'; }
		if (typeof department == 'undefined' || department == '') { var department = ''; } else { department = '&DEPARTMENT=' + department; }
		if (typeof template == 'undefined' || template == '') { var template = ''; } else { template = '&TEMPLATE=' + template; }
	
		// TODO: Remove All # invalid characters
		LiveHelp.LiveHelpWindow = window.open('<?php echo($server); ?>/livehelp/' + location + '?LANGUAGE=<?php echo($_SETTINGS['LOCALE']); ?>' + department + template, 'LiveHelp<?php echo($window); ?>', LiveHelp.size);
		
	}
<?php
}
?>
	if (LiveHelp.LiveHelpWindow) { LiveHelp.LiveHelpWindow.opener = self; }
}

function displayInitiateChat() {

	if (LiveHelp.initiateOpen == 0 || LiveHelp.initiateLoaded == 1) {
	
		LiveHelp.resetLayerLocation();
		
		var obj;
		if (document.getElementById) {
			obj = document.getElementById('floatLayer');
			if (obj != null) { obj.style.top = LiveHelp.topMargin + 'px'; obj.style.left = LiveHelp.leftMargin + 'px'; }
		} else if (document.all) {
			obj = document.all['floatLayer'];
			if (obj != null) { obj.style.pixelTop = LiveHelp.topMargin + 'px'; obj.style.pixelLeft = LiveHelp.leftMargin + 'px'; }
		} else if (document.layers) {
			obj = document.layers['floatLayer'];
			if (obj != null) { obj.top = LiveHelp.topMargin + 'px'; obj.left = LiveHelp.leftMargin + 'px'; }
		}
		
		if (obj != null) {

			var openingTrackerStatus = new Image;
			openingTrackerStatus.src = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened';
		
			if (document.getElementById) { document.getElementById('floatLayer').location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }
			else if (document.layers) { document.layers['floatLayer'].location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }
			else if (document.all) { document.all['floatLayer'].location = '<?php echo($server); ?>/livehelp/include/tracker.php?INITIATE=Opened'; }

			LiveHelp.floatRefresh();
	
			LiveHelp.toggleInitiateChat();
			LiveHelp.initiateOpen = 1; LiveHelp.initiateLoaded = 0; LiveHelp.initiateAuto = 0;
		}
	}
}

function acceptInitiateChat() {
	LiveHelp.acceptInitiateChat();
}

function declineInitiateChat() {
	LiveHelp.declineInitiateChat();
}

function changeStatus(status) {

	var statusImage = new Image;
	var statusImageFile;
	switch (status) {
		case 'Online':
			statusImageFile = '<?php echo($_SETTINGS['ONLINELOGO']); ?>';
			break;
		case 'BRB':
			statusImageFile = '<?php echo($_SETTINGS['BERIGHTBACKLOGO']); ?>';
			break;
		case 'Away':
			statusImageFile = '<?php echo($_SETTINGS['AWAYLOGO']); ?>';
			break;
		default:
<?php
if ($_SETTINGS['OFFLINEEMAIL'] == false) {
?>
			statusImageFile = '<?php echo($_SETTINGS['OFFLINEEMAILLOGO']); ?>';
			break;
<?php
}
else {
?>
			statusImageFile = '<?php echo($_SETTINGS['OFFLINELOGO']); ?>';
			break;
<?php
}
?>
	}
	
	var time = LiveHelp.currentTime();
	if (LiveHelp.currentStatus != '' && LiveHelp.currentStatus != status) {
	
		for (i = 0; i < LiveHelp.statusImagesLiveHelp.length; i++) {
			if (LiveHelp.statusImagesLiveHelp[i] != null) {
				// Determine if there is an alternate image path find IMAGES= variable within statusImagesLiveHelp[i].src
				var getImageLocation = LiveHelp.statusImagesLiveHelp[i].src.indexOf('IMAGES=');
				var getDepartment = LiveHelp.statusImagesLiveHelp[i].src.indexOf('DEPARTMENT=');
				var getCallback = LiveHelp.statusImagesLiveHelp[i].src.indexOf('CALLBACK=');
				
				statusImage.src = statusImageFile;
				if (getImageLocation != -1) {
					// Load the IMAGES path into a variable
					var statusImageDirectory = LiveHelp.statusImagesLiveHelp[i].src.substring(getImageLocation + 7);
					if (getDepartment == -1) {
						var filenamePos = statusImageFile.lastIndexOf('/');
						if (filenamePos != -1) {
							statusImage.src = statusImageDirectory + statusImageFile.substring(filenamePos + 1) + '?IMAGES=' + statusImageDirectory + '&TIME=' + time;
						}
					}
				}
			
				if (getDepartment != -1) {
					// Load the DEPARTMENT path into a variable
					var department = LiveHelp.statusImagesLiveHelp[i].src.substring(getDepartment + 11);
					var endRequestPos = department.lastIndexOf('&');
					if (endRequestPos != -1) {
						statusImage.src = '<?php echo($server); ?>/livehelp/include/status.php?DEPARTMENT=' + department.substring(0, endRequestPos) + '&IMAGES=' + statusImageDirectory + '&TIME=' + time;
					}
				}
			
				if (getCallback != -1) {
					// Load the CALLBACK path into a variable
					statusImage.src = '<?php echo($server); ?>/livehelp/include/status.php?CALLBACK=1&TIME=' + time;
				}
			
				LiveHelp.statusImagesLiveHelp[i].onload = null;
				LiveHelp.swapImage(LiveHelp.statusImagesLiveHelp[i].id, '', statusImage.src, 1);
			}
		}
	}

	LiveHelp.currentStatus = status;
	
	if (status == 'Offline' && LiveHelp.trackingInitalized == 0) {
			window.clearTimeout(LiveHelp.TrackingTimer);
	}
}

//-->
<?php
}
?>