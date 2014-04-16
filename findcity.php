<?

session_start();

#======================================================================================================================

# Includes

#======================================================================================================================	

include("connect.php");

$dev = get_param("dev");



?>

<option value="">Select Project</option>

 

  <? 

  if($dev !="")

{

   		$sql = "SELECT * FROM property_project WHERE is_active = 'Y' AND parent_id = '$dev' ORDER BY location_name";

		

		$result = mysql_query($sql);

		if($result)

		{

			while($row=mysql_fetch_array($result)) { 

			

			

   ?>

  <option value ="<?=$row['locid']?>" <?=checkType($row['locid'],$_SESSION['PropTyoe'])?>>

  <?=$row['location_name']?>

  </option>

  <? } } } ?>	