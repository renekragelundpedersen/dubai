<?
session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
include("connect.php");

$city = get_param("city");
$oldloc = get_param("oldloc");
$fldPart = get_param("part");
?>

 <select name="txtlocation" id="txtlocation"  class="add-edit" onChange="checkLocOption(this);">
    <option value="">-- Select Location --</option>
   <? 
   		$sql = "SELECT * FROM property_location WHERE is_active = 'Y' AND parent_id = '$city'";
		
		$result = mysql_query($sql);
		if($result)
		{
			while($row=mysql_fetch_array($result)) { 
			if($row['locid'] == $oldloc)
				$selected  ="selected";
			else
				$selected  ="";
			
   ?>
    <option value ="<?=$row['locid']?>" <?=$selected?>><?=$row['location_name']?></option>
    <? } }?>
    
   <? $selected = ($fldPart != 0 && $oldloc == 0)? " selected": ""; ?>
    <option value="0" <?=$selected?> >Others</option>
 </select>
 <span class="error">* </span>