function SimpleAJAXCallback(in_text, obj) {
	document.getElementById(obj).innerHTML = in_text;
	setStatus ("","showimg");
	setStatus ("","showimg2");
}

function checkAll(checkname, exby) {
var bgcolor = 'ffffff';
  for (i = 0; i < checkname.length; i++) {
  checkname[i].checked = exby.checked? true:false
  var cell = document.getElementById('row' + i);
	if (bgcolor == 'eeeeee') {
		var bgcolor = 'ffffff';
	} else {
		var bgcolor = 'eeeeee';
	}
	if (checkname[i].checked) {
		cell.style.background = '#cccccc';
	} else {
		cell.style.background = '#' + bgcolor;
	}
  }
}

function checktoggle(box,theId,color) {
if(document.getElementById) {
var cell = document.getElementById(theId);
var box = document.getElementById(box);
if(box.checked) {
cell.style.background = '#cccccc';
} else {
cell.style.background = '#' + color;
}
}
}

function checktoggle_over(box,theId,color) {
if(document.getElementById) {
var cell = document.getElementById(theId);
var box = document.getElementById(box);
cell.style.background = '#' + color;
}
}


function findPosX(obj){
	var curleft = 0;
	if (obj.offsetParent){
		while (obj.offsetParent){
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	} else if (obj.x){
		curleft += obj.x;
	}
	return curleft;
}

function findPosY(obj){
	var curtop = 0;
	if (obj.offsetParent){
		while (obj.offsetParent){
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	} else if (obj.y){
		curtop += obj.y;
	}
	return curtop;
}

//Function to set a loading status.
function setStatus (theStatus, theObj){
	obj = document.getElementById(theObj);

	if (obj) {
	
	if (theStatus == 1){
		obj.innerHTML = "<div align=right>" + "<img src=\"/i/images/loading.gif\" alt=\"Loading\" vspace=2 hspace=2>" + "</div>";
	} else {
		obj.innerHTML = "<div align=right>" + "" + "</div>";
	}

	}
}
	

function doneloading(theframe,thefile){
	var theloc = ""
	theframe.processajax ("showimg",theloc);
}


function popup(mylink, windowname, windowwidth, windowheight){
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=' + windowwidth + ',height=' + windowheight + ',scrollbars=yes,resizable=yes');
return false;
}	


var qsParm = new Array();

function qs(serverPage) {

	var query = serverPage;
	var parms = query.split('&');

	for (var i=0; i<parms.length; i++) {

		var pos = parms[i].indexOf('=');

		if (pos > 0) {

			var key = parms[i].substring(0,pos);
			var val = parms[i].substring(pos+1);
			qsParm[key] = val;

		}	
	}
}








