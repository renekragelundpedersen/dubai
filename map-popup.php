<?php
$fldproperty_latitude = $_REQUEST['latitude'];
$fldproperty_longitude = $_REQUEST['longitude'];
$msg2 = $_REQUEST['msg'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script src="http://maps.google.com/maps?file=api&v=2&sensor=true&key=AIzaSyAIDTZgRG-hYjVq86JYbsuhPAzHYZXmgOg" 
type="text/javascript">
</script>
<script type="text/javascript">

function initialize(lat,lng,details) {
	if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
		var point = new GLatLng(lat,lng);
        map.setCenter(point, 15);
        map.setUIToDefault();
		map.setMapType(G_NORMAL_MAP);
		var marker = new GMarker(point);
 		map.addOverlay(marker);
		GEvent.addListener(marker, "click", function() {marker.openInfoWindowHtml(details);});

	}
}
window.onload = initialize;
window.onunload = GUnload;
    </script>

</head>

<body onLoad="initialize('<?php echo $fldproperty_latitude; ?>','<?php echo $fldproperty_longitude; ?>','<?php echo $msg2; ?>')">
                  <div id="map_canvas" style="width: 600px; height: 400px;float:left; margin:0px; padding:0px;"></div>

        <?php //$loc_details = "$msg2";
			//$h = "400px";
			//$w= "600px";?>
                        <?php
						//require_once('map.php');
						?>    

</body>
</html>