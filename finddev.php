<?
session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
include("connect.php");

$country = get_param("country");
$olddev = get_param("olddev");
$fldPart = get_param("part"); 
?>
 <select name="txtdev" id="txtdev" onChange="getProject('../findproject.php?dev='+this.value);">
    <option value="">-- Select Development --</option>
   <? 
   		$sql = "SELECT * FROM developments WHERE is_active = 'Y' ";
		
		$result = mysql_query($sql);
		if($result)
		{
			while($row=mysql_fetch_array($result)) { 
			if($row['id'] == $olddev)
				$selected  ="selected";
			else
				$selected  ="";
			
   ?>
    <option value ="<?=$row['id']?>" <?=$selected?>><?=$row['name']?></option>
    <? } }?>
    
   <? $selected = ($fldPart != 0 && $olddev == 0)? " selected": ""; ?>
 </select>