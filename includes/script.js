function toggleTextOut(e,txtval) {
	if(e.value=="") e.value = txtval;
}
function toggleTextIn(e,txtval) {
	if(e.value==txtval) e.value="";
	else e.select();
}

var css_browser_selector = function() {var ua=navigator.userAgent.toLowerCase(),is=function(t){return ua.indexOf(t) != -1;},h=document.getElementsByTagName('html')[0],b=(!(/opera|webtv/i.test(ua))&&/msie (\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?'gecko ff2':is('firefox/3')?'gecko ff3':is('gecko/')?'gecko':is('opera/9')?'opera opera9':/opera (\d)/.test(ua)?'opera opera'+RegExp.$1:is('konqueror')?'konqueror':is('applewebkit/')?'webkit safari':is('mozilla/')?'gecko':'',os=(is('x11')||is('linux'))?' linux':is('mac')?' mac':is('win')?' win':'';var c=b+os+' js'; h.className += h.className?' '+c:c;}();

$(document).ready(function(){

$(".swap").hover(
	function(){
		if($(this).attr("src").indexOf("-on.") == -1) {
			var newSrc = $(this).attr("src");
			newSrc = (newSrc.replace(/.jpg|.gif|.png/, '-on' + newSrc.substr(newSrc.length - 4)));
			$(this).attr("src",newSrc);
		}},
		function(){
			if($(this).attr("src").indexOf("-on.") > 0) {
				var oldSrc = $(this).attr("src").replace('-on.', '.');
				$(this).attr("src",oldSrc);
			}
	});

	// for nav top
	$("#nav-top li").hover(function(){
		$(this).find('ul:first').show();													  
	},
	function(){
		$(this).find('ul:first').hide();	
	}
	);
	
	
	// For tab 
	
	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

	
});



