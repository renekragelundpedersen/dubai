<?php	//session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
	//include("connect.php");
	
$longi = $fldproperty_longitude;
$lati = $fldproperty_latitude;
	
?>

<style type="text/css">
body{
	font:normal 12px Arial, Helvetica, sans-serif;
	color:#333;
}
</style>


<script src="http://maps.google.com/maps?file=api&v=2&sensor=true&key=AIzaSyAIDTZgRG-hYjVq86JYbsuhPAzHYZXmgOg" 
type="text/javascript">
</script>
 
      
        <!-- fail nicely if the browser has no Javascript -->
<noscript>
<b>JavaScript must be enabled in order for you to use Google Maps.</b> <br/>
However, it seems JavaScript is either disabled or not supported by your browser. <br/>
To view Google Maps, enable JavaScript by changing your browser options, and then try again.
</noscript>
<div align="center">
  <div id="googlemap14_lg9dq_0" style="width:<?php echo $w?>;height:<?php echo $h?>"></div>
</div>
<script type='text/javascript'> 
//<![CDATA[
var tst14_lg9dq_0=document.getElementById('googlemap14_lg9dq_0');
			var tstint14_lg9dq_0;
			var map14_lg9dq_0;
			
DirectionMarkersubmit14_lg9dq_0 = function( formObj ){
						if(formObj.dir[1].checked ){
							tmp = formObj.daddr.value;
							formObj.daddr.value = formObj.saddr.value;
							formObj.saddr.value = tmp;
						}
						formObj.submit();
						if(formObj.dir[1].checked ){
							tmp = formObj.daddr.value;
							formObj.daddr.value = formObj.saddr.value;
							formObj.saddr.value = tmp;
						}
					}
function checkMap14_lg9dq_0() {
				if (tst14_lg9dq_0)
					if (tst14_lg9dq_0.offsetWidth != tst14_lg9dq_0.getAttribute("oldValue")) {
						tst14_lg9dq_0.setAttribute("oldValue",tst14_lg9dq_0.offsetWidth);
 
						if (tst14_lg9dq_0.getAttribute("refreshMap")==0)
							if (tst14_lg9dq_0.offsetWidth > 0) {
								clearInterval(tstint14_lg9dq_0);
								getMap14_lg9dq_0();
								tst14_lg9dq_0.setAttribute("refreshMap", 1);
							} 
					}
			}
			function getMap14_lg9dq_0(){
				if (tst14_lg9dq_0.offsetWidth > 0) {
					map14_lg9dq_0 = new GMap2(document.getElementById('googlemap14_lg9dq_0'));
					map14_lg9dq_0.addControl(new GSmallMapControl());
					map14_lg9dq_0.addControl(new GMapTypeControl());
					map14_lg9dq_0.setMapType(G_NORMAL_MAP);
					map14_lg9dq_0.setCenter(new GLatLng(<?php echo $lati?>,<?php echo $longi?>), 10);
					var point = new GPoint(<?php echo $longi?>,<?php echo $lati?>);
					var marker14_lg9dq_0 = new GMarker(point);
					map14_lg9dq_0.addOverlay(marker14_lg9dq_0);
					marker14_lg9dq_0.openInfoWindowHtml('<?php echo $loc_details?>');
					GEvent.addListener(marker14_lg9dq_0, 'click', function() {
					//marker14_lg9dq_0.openInfoWindowHtml('<strong>Prestige Real Estate</strong>,<br/>Unit no 408, 1-Lake Plaza,<br/>Jumeirah Lakes Towers,<br/> Dubai, UAE.');
									});
							}
		}
//]]>
</script>
<script type="text/javascript"> 
//<![CDATA[
	if (GBrowserIsCompatible()) {
		tst14_lg9dq_0.setAttribute("oldValue",0);
		tst14_lg9dq_0.setAttribute("refreshMap",0);
		tstint14_lg9dq_0=setInterval("checkMap14_lg9dq_0()",500);
	}
//]]>
</script>
