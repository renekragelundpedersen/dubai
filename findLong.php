<?
session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
include("connect.php");
 $projId = get_param("projId");

 $sqlLong = "SELECT * FROM property_project WHERE is_active = 'Y' AND locid = '$projId'";
	$result = mysql_query($sqlLong);
	$resLng = mysql_fetch_object($result);
	
	$fldLng		= stripslashes($resLng->proj_longitude);
	$fldLat		= stripslashes($resLng->proj_latitude);
	
	echo $val = $fldLng."/".$fldLat	;
	
	/*$googleMap['lat'] = $fldLat;
	$googleMap['long'] = $fldLng;
	echo json_encode($googleMap);*/
?>