<?
session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
include("connect.php");

$dev = get_param("dev");
$oldproject = get_param("oldproject");
$fldPart = get_param("part");



?>
<script src="js/thickbox.js" type="text/javascript" language="javascript"></script>
<script src="js/functions.js" type="text/javascript" language="javascript"></script>
<script src="js/db_functions.js"></script>
<link rel="stylesheet" href="../css/thickbox.css" type="text/css">

<select name="txtproject" id="txtproject" onchange="getMap(this);"  class="add-edit" >
  <option value="">-- Select Project --</option>
  <? 
   		$sql = "SELECT * FROM property_project WHERE is_active = 'Y' AND parent_id = '$dev'";
		
		$result = mysql_query($sql);
		if($result)
		{
			while($row=mysql_fetch_array($result)) { 
			if($row['locid'] == $oldproject)
				$selected  ="selected";
			else
				$selected  ="";
			
   ?>
  <option value ="<?=$row['locid']?>" <?=$selected?> o>
  <?=$row['location_name']?>
  </option>
  <? } }?>
  <? $selected = ($fldPart != 0 && $oldproject == 0)? " selected": ""; ?>
  <option value="Y"  <?=$selected?> >Others</option>
</select>
