<?php
	require_once('connect.php');
    $currentFile = $_SERVER["PHP_SELF"];
    $parts = Explode('/', $currentFile);
    $pag = $parts[count($parts) - 1];
$pageid = $_REQUEST['pid'];
if($_POST) 
{
//exit();
$fldPart	   		= trim(strip(get_param("part")));
		$fldpropertyfor	 	= trim(strip(get_param("txtType")));
		$fldpropagentid		= 0;
		$fldprop_type		= trim(strip(get_param("txtproptype")));
		$fldrefno			= "";
		//$fldrefno 			= genRefNo ();
		$fldpropname		= trim(strip(get_param("txtpropname")));
		$fldslug			= slug($fldpropname,'property_master');
		$flddeveloper		= trim(strip(get_param("txtdeveloper")));
		$flddevelopment		= trim(strip(get_param("txtdevelopment")));
		$flddevelopment_other		= trim(strip(get_param("txtdevelopment_other")));
		$fldproject			= trim(strip(get_param("txtproject")));
		$fldcondition		= trim(strip(get_param("txtcondition")));
		$fldcity			= trim(strip(get_param("txtcity")));
		$fldlocation		= trim(strip(get_param("txtlocation")));
		$fldlocation_other	= trim(strip(get_param("txtlocation_other")));
		$fldbedrooms		= trim(strip(get_param("txtbedrooms")));
		$fldbathrooms		= trim(strip(get_param("txtbathrooms")));
		$fldkitchen			= trim(strip(get_param("txtkitchen")));
		$fldparking			= trim(strip(get_param("txtparking")));
		$fldfloor			= trim(strip(get_param("txtfloor")));
		$fldtotalarea		= trim(strip(get_param("txttotalarea")));
		$fldnetarea			= trim(strip(get_param("txtnetarea")));
		$fldview			= trim(strip(get_param("txtview")));
		$fldsellingprice	= trim(strip(get_param("txtsellingprice")));
		$fldsellingprice_sqft	= trim(strip(get_param("txtsellingpricesqft")));
		$fldpayment_schedule	= trim(strip(get_param("txtpaymentschedule")));
		$fldfacilities		= trim(strip(get_param("txtfacilities")));
		$flddesc 			= trim(get_param("txtdesc"));
		$fldprojectaddress 	= trim(get_param("txtprojectaddress"));
		
		$fldpropreadydate	= addslashes(get_param("txtreadydate"));
		if($fldpropreadydate)
		{
		$fldpropreadydate	= date("Y-m-j",strtotime($fldpropreadydate));
		}
		else
		{
		$fldpropreadydate	="";
		}
		$fldexpire_on		= addslashes(get_param("txtexpire_on"));
		$fldexpire_on		= date("Y-m-j",strtotime($fldexpire_on));
		$fldavailable_from	= addslashes(get_param("txtavailable_from"));
		$fldavailable_from	= date("Y-m-j",strtotime($fldavailable_from));
		
		$fldannualrent		= addslashes(get_param("txtannualrent"));
		$fldmonthlyrent		= addslashes(get_param("txtmonthlyrent"));
		$fldextrarent		= addslashes(get_param("txtextrarent"));
		$fldsecuritydeposit = addslashes(get_param("txtsecuritydeposit"));
		//echo $_POST['chkwater'].$_POST['chkelectricity'];
		if(isset($_POST['chkwater'])){ $fldwaterrent = "Y";} else {$fldwaterrent = "N";} 
		if(isset($_POST['chkelectricity'])){ $fldelectricityrent = "Y";} else {$fldelectricityrent = "N";} 
		//echo $fldwaterrent.$fldelectricityrent;
		
		$fldownername		= trim(strip(get_param("ownername")));
		$fldowneraddress	= trim(strip(get_param("owneraddress")));
		$fldownerphone		= trim(strip(get_param("ownerphone")));
		$fldownermobile		= trim(strip(get_param("ownermobile")));
		$fldownerfax		= trim(strip(get_param("ownerfax")));
		$fldownercomments	= trim(strip(get_param("ownercomments")));
		$fldowneremail		= trim(strip(get_param("owneremail")));
		$fldagreedprice		= trim(strip(get_param("agreedprice")));
		$fldoriginalprice	= trim(strip(get_param("originalprice")));
		$fldoriginalprice_sqft	= trim(strip(get_param("originalpricesqft")));
		$fldPrice				= (trim(strip(get_param("txtPrice"))));
		$fldoutamt				= (trim(strip(get_param("txtoutamt"))));
		
		$fldpropertyrented  =trim(strip(get_param("txtproprented")));
		
		$fldperiod  =trim(strip(get_param("txtperiod")));
		
		$fldpropertyaccess  =trim(strip(get_param("txtpropaccess")));
		
		$fldpropertykeys  =trim(strip(get_param("txtpropkeys")));
		
		$fldpropertykeysheld  =trim(strip(get_param("txtpropkeysheld")));
		
		$fldpropertyapp  =trim(strip(get_param("txtpropapp")));
		
		$fldbank	=trim(strip(get_param("txtBank")));
		
		$fldpropertysignboard  =trim(strip(get_param("txtpropsignboard")));

		$tmpDay			= strip(get_param("selDay"));
		$tmpMon			= strip(get_param("selMon"));
		$tmpYear		= strip(get_param("selYear"));

		$fldprop_ready_date	= $tmpYear ."-".$tmpMon."-".$tmpDay;
	if( $_SESSION['security_number'] == $_POST['txtCaptcha'] && !empty($_SESSION['security_number'] ) ) 
    {
//echo 1234;
		if(strlen($err) <= 0)
		{

			// get the facility and save
				/*if(isset($_POST["chkfacility"]))
				{
					//$fldfacilities   = $_POST["chkfacility"];
					
					if(isset($_POST["chkfacility"])) {$fldfacilities = $_POST["chkfacility"];} else {$fldfacilities=array();} 
					
					for ($i="0"; $i<count($fldfacilities); $i++) {
						if(empty($fldfacilities[$i])) {unset($fldfacilities[$i]);}
					} 
	
					$fldfacilities = implode ("<>", $fldfacilities);
					$fldfacilities = "<>".$fldfacilities."";
					
					
				}*/
				
				
				
			if($_FILES['txtdocs']['tmp_name']!= "" && $fldprop_file1!="")
			{
				
					$fldDelFilePath		= $FRONT_PROP_DOCPATH.$fldprop_file1;
					if(file_exists($fldDelFilePath))
					{
						unlink($fldDelFilePath);
						$fldprop_file1 = "";
					}
			}
			if($_FILES['txtdocs']['tmp_name']!= "")
			{
			
				$uniqueid 				= md5(uniqid(rand()));
				$fldprop_file1 			= "Doc_".$uniqueid.str_replace(".docx",".doc",str_replace(" ","_",basename(trim($_FILES['txtdocs']['name']))));
				$filepath 				= $FRONT_PROP_DOCPATH.$fldprop_file1;
				if (move_uploaded_file($_FILES['txtdocs']['tmp_name'], $filepath)) 
				{
					
				} else 
				{
					$err.="File Could Not be uploaded";
					exit(0);
				}

			}
			
			if($_FILES['txtfiles']['tmp_name']!= "" && $fldprop_file2!="")
			{
				
					$fldDelFilePath		= $FRONT_PROP_DOCPATH.$fldprop_file2;
					if(file_exists($fldDelFilePath))
					{
						unlink($fldDelFilePath);
						$fldprop_file2 = "";
					}
			}
			if($_FILES['txtfiles']['tmp_name']!= "")
			{
			
				$uniqueid 				= md5(uniqid(rand()));
				$fldprop_file2 			= "File_".$uniqueid.str_replace(".docx",".doc",str_replace(" ","_",basename(trim($_FILES['txtfiles']['name']))));
				$filepath2 				= $FRONT_PROP_DOCPATH.$fldprop_file2;
				if (move_uploaded_file($_FILES['txtfiles']['tmp_name'], $filepath2)) 
				{
					
				} 
				else 
				{
					$err.="File Could Not be uploaded";
					exit(0);
				}

			}
			
			
			$currDate		= date("Y-m-d H:i:s");
			$fldpropname	= addslashes($fldpropname);
			$fldfacilities	= addslashes($fldfacilities);
			$flddesc		= addslashes($flddesc);
			$fldpayment_schedule		= addslashes($fldpayment_schedule);

			if($fldPart == 0)
			{
				$sqlinsert = "INSERT INTO `property_master`(
				
						`prop_for_id`,
						`prop_agent_id`,
						`type_ref_id`,
						`prop_ref_no` , 
						`prop_name` , 
						`developer` , 
						`development` ,
						`development_other` , 
						`project` , 
						`prop_condition` , 
						`city`, 
						`location` ,
						`location_other` ,  
						`no_beds` , 
						`no_bathrooms` , 
						`no_kitchen` , 
						`parking` , 
						`floorno` , 
						`total_area` ,
						`net_area` ,
						`view` , 
						`selling_price` ,
						`selling_price_sqft` ,
						`payment_schedule` ,
						`prop_facilities` ,
						`prop_desc` ,
						`prop_ready_date` ,
						`expire_on` ,
						`available_from` ,
						
						`annual_rent`,
						`monthly_rent`,
						`extra_rent`,
						`security_deposit`,
						`water_rent`,
						`electericity_rent`,
						
						`is_active` ,
						`is_featured` ,
						`is_hot` ,
						`is_pending` , 
						`added_on` , 
						`modified_on` ,
						
						`owner_name`,
						`owner_phone`,
						`owner_mobile`,
						`owner_fax`,
						`owner_email`,
						`owner_comments`,
						`original_price`,
						`original_price_sqft`,
						`agreed_price`,
						`prop_price`,
						`prop_file1`,
						`slug`,
						`prop_file2`
						) VALUES (
						 
						 '$fldpropertyfor', 
						 '$fldpropagentid', 
						 '$fldprop_type', 
						 '$fldrefno', 
						 '$fldpropname', 
						 '$flddeveloper', 
						 '$flddevelopment',
						 '$flddevelopment_other', 
						 '$fldproject', 
						 '$fldcondition', 
						 '$fldcity', 
						 '$fldlocation',
						 '$fldlocation_other',
						 '$fldbedrooms', 
						 '$fldbathrooms', 
						 '$fldkitchen', 
						 '$fldparking', 
						 '$fldfloor', 
						 '$fldtotalarea', 
						 '$fldnetarea',
						 '$fldview',
						 '$fldsellingprice',
						 '$fldsellingprice_sqft',
						 '$fldpayment_schedule',
						 '$fldfacilities',
						 '$flddesc',
						 '$fldpropreadydate',
						 '$fldexpire_on',
						 '$fldavailable_from',
						 
						 '$fldannualrent',	
						 '$fldmonthlyrent',	
						 '$fldextrarent',	
						 '$fldsecuritydeposit', 
						 '$fldwaterrent', 		
						 '$fldelectricityrent',
						 
						 'N', 
						 'N',
						 'N',
						 'Y',
						 NOW(), 
						 NOW(), 
						 
						 '$fldownername', 
						 '$fldownerphone', 
						 '$fldownermobile', 
						 '$fldownerfax', 
						 '$fldowneremail',
						 '$fldownercomments',
						 '$fldoriginalprice',
						 '$fldoriginalprice_sqft',
						 '$fldagreedprice',
						  '$fldPrice',
						  '$fldprop_file1',
						  '$fldslug',
						  '$fldprop_file2'
						 )";

				//mysql_query($sqlinsert) or die($sqlinsert.mysql_error());
				//echo $sqlinsert; 
			}
			
			$fldpropertymortgaged=get_param("txtpropmor");
			#======================================================================================================================
# Send mail to admin 
#======================================================================================================================
  	$sql_admin="select * from admin where admin_uid='admin'";
    $res_admin=mysql_query($sql_admin);
	$row_admin=mysql_fetch_array($res_admin);
		$to			= $row_admin['admin_email'];
		//echo $to;
		$from 		= $fldowneremail; 
		$subject 	= "New Property Posted By: ".$fldownername;
		$headers 	= "From: $from\r\n";
		$headers   .= 'MIME-Version: 1.0' . "\r\n";
		$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$message    = '<table width="543" border="0" cellspacing="0" style="border:3px solid #6db48d;" cellpadding="0">
 
  <tr >   
    <td style="padding:10px 0px;" bgcolor="#ecf7f1" width="508" align="left" valign="top"><img src="'.$siteURL.'images/logo.png"  border="0"   /></td>
    <td bgcolor="#ecf7f1" width="16" rowspan="3" align="left" valign="top">&nbsp;</td>
  </tr>
  <tr>
    <td align="left" valign="top"><table width="500" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="50" style="font:bold 22px Arial, Helvetica, sans-serif;"><strong>Details</strong></td>
      </tr>
      <tr>
        <td><table width="500" style="height:" border="0" cellspacing="5" cellpadding="5">
          <tr>
            <td width="400" style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">Property for  :</td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertyfor.'</td>
            </tr>
          <tr>
            <td width="400" style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">Name  :</td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldownername.'</td>
            </tr>
			 <tr>
            <td width="400" style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">Address  :</td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldowneraddress.'</td>
            </tr>
          <tr>
            <td height="29" style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Email:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldowneremail.'</td>
            </tr>
			
			<tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Mobile:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldownermobile.'</td>
         </tr>
          <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Phone:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldownerphone.'</td>
         </tr>
		
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Project:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldproject.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Property Address:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldprojectaddress.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Built up Area:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldtotalarea.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Plot area (sqft):</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldnetarea.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>No of Bedrooms:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldbedrooms.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>No. of Bathrooms:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldbathrooms.'</td>
         </tr>
		 
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>No. of Parking:</strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldparking.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>View </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldview.'</td>
         </tr>';
		 if($fldpropreadydate)
		 {
		 $message .='		 
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Expected Completion  Date  if offplan: </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropreadydate.'</td>
         </tr>';
		 }
		  $message .='<tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Expected Net Selling Price (AED) </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldPrice.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Is the property Mortgaged? </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertymortgaged.'</td>
         </tr>
		 
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Which Bank? </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldbank.'</td>
         </tr>
		 
		   <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>Outstanding Amount (AED): </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldoutamt.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Is the property vacant or currently rented to tenants?      
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertyrented.'</td>
         </tr>
		 
		 <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Period of Tenancy Contract     
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldperiod.'</td>
         </tr>';
		 if($fldannualrent)
		 {
		 $message .='<tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Annual rent amount:    
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldannualrent.'</td>
         </tr>';
		
		 }
	
	 $message .='<tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Can access be made to the property for viewings?                       
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertyaccess.'</td>
         </tr>
		 
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Key can be collected and returned for viewings?                                              
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertykeys.'</td>
         </tr>
		 
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Key can be held with Exclusive Real Estate Brokers?                                                    
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertykeysheld.'</td>
         </tr>
		   <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Appointment only?                                                                                      
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertyapp.'</td>
         </tr>
		  <tr>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;"><strong>
Will you permit a Sign Board displayed at your property?                                                              
 </strong></td>
            <td style="font:normal 12PX Arial, Helvetica, sans-serif; font-weight:bold;color:#000;">'.$fldpropertysignboard.'</td>
         </tr>';
		 
		 if($filepath ) 
				{
					$message    .= '
					<tr>
						<td style="font : normal 12PX Arial, Helvetica, sans-serif;"><strong>View Files </strong></td>
						<td style="font : normal 12PX Arial, Helvetica, sans-serif;">  :  <a href="'.$siteURL.$filepath.'"  style="font : normal 12PX Arial, Helvetica, sans-serif; ">Download Purchase and Sales Agreement</a></td>
					</tr>';
				}
				if($filepath2 ) 
				{
					$message    .= '
					<tr>
						<td style="font : normal 12PX Arial, Helvetica, sans-serif;"><strong>View Other Files </strong></td>
						<td style="font : normal 12PX Arial, Helvetica, sans-serif;">  :  <a href="'.$siteURL.$filepath2.'"  style="font : normal 12PX Arial, Helvetica, sans-serif;">Download Passport Copy of Owner</a></td>
					</tr>';
				}
				
			
          $message    .= '</table></td>
      </tr>
      <tr>
        <td height="19"   style="border-bottom:1px solid #672B26; width:500px; font:normal 12px Arial, Helvetica, sans-serif; color:#000;">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr style="background-color:#E9E9E9;">
    <td align="left" height="20" valign="middle" style="font:normal 12px Arial, Helvetica, sans-serif; color:#000;">'.$copyright.'</td>
  </tr>
  <tr bgcolor="#ecf7f1">
    <td colspan="3" align="left" valign="top">&nbsp;</td>
  </tr>
</table>';
		//echo $message;
		//die;
		if(mail($to, $subject, $message, $headers))
			{
			$msg = "Your property details has been submitted sucessfully.You will be contacted shortly.";
			}
			//header("Location:sell_your_property.html.php?add=true");
			
		}
		}
		else
		{
			 $msg2 =  'Sorry, you have provided an invalid security code';
			
		}
}
    ?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<title>Sell Property - <?php echo $TITLE; ?></title>

<meta name="desription" content= "Sell Property - <?php echo $DESC; ?>"/>

<meta name="keywords" content="Sell Property - <?php echo $KEY; ?>"/>

<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">

<?php

require_once('inc.css.php');

require_once('inc.js.php');

?>

<link rel="stylesheet" href="<?php echo $siteURL ?>css/email.css?<?php echo date('His'); ?>" type="text/css" />
<script language="javascript">
		$(document).ready(function() {
			$("#frm_sell").validate();
		});
	function checkMortype(frmVal)
	{
		if(frmVal.value == "yes")
		{
			document.getElementById("bank").style.display = "block";	
		}
		else
		{
			document.getElementById("bank").style.display = "none";	
		}
	}
	function checkRentedtype(frmVal)
	{
		if(frmVal.value == "rented")
		{
			document.getElementById("rentprice").style.display = "block";	
		}
		else
		{
			document.getElementById("rentprice").style.display = "none";	
		}
	}
	function checkConditiontype(frmVal)
	{
		if(frmVal.value == "not_ready")
		{
			document.getElementById("txtreadydate").style.display = "block";	
		}
		else
		{
			document.getElementById("txtreadydate").style.display = "none";	
		}
	}
	
	
	function checkConditiontype1(frmVal)
	{
		if(frmVal.value == "Rent")
		{
		//alert(frmVal.value);
			document.getElementById("rentprice").style.display = "block";	
		}
		else
		{
			document.getElementById("rentprice").style.display = "none";	
		}
	}
	/* this is just a simple reload; you can safely remove it; remember to remove it from the image too */
	function reloadCaptcha()
	{
		document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();
	}
</script>
<style type="text/css">
.page ul li{
	background:none;}
</style>



</head>



<body>

<div id="wrapper">

<!--section header-->

	<?php require_once('inc.header.php'); ?>

    <!--section header -->

    <!--section banner -->

  	<section id="inside"><img src="<?php if($rowContent[0]['page_photo3']!="") {echo $srcBan;} else { ?>images/inner_banner.jpg<?php } ?>">

  	  <?php require_once('inc.search.php'); ?>

  </section>

    <!--section banner -->

    <!--section news -->

    <?php require_once('inc.news.php'); ?>

    <!--section news -->

     <!--section inner content-->

<section id="inner_content">

     	<div class="inc_left">

        	<h1>List your property</h1>

            <div class="breadcrumbs">

            	<ul>

                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>

                    <li><a class="bread_active">List your property</a></li>

                </ul>

                <div class="bread_mail">

                	<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox">Email</a>

                   <!-- <a class="br_print" href="#" onClick="PrintContent('<?php echo $pi; ?>');">print</a>-->

                </div>

            </div>

            <div class="page">
            <?php
			if($msg!="")
			{
			?>
            <span style="color:#FF0000"><?php echo $msg; ?></span>
            <?php
			}
			?>
            <?php
			if($msg2!="")
			{
			?>
            <span style="color:#FF0000"><?php echo $msg2; ?></span>
            <?php
			}
			?>

<form method="post" enctype="multipart/form-data" name="frm_sell" id="frm_sell" >
                    	<ul class="sell">
          <li>
            <div style="width:340px;" class="item-wrap big">
              <label style="width:246px;" for="txtfiles">Purchase and Sales Agreement/Title Deed: </label>
              <input size="50" type="file" style="width: 240px ! important;" id="txtfiles" name="txtfiles">
            </div>
            <div class="item-wrap big" style="width:320px;">
              <label style="width:246px;" for="txtdocs">Passport Copy of Owner: </label>
              <input size="50" type="file" style="width: 240px ! important;" id="txtdocs" name="txtdocs">
            </div>
          </li>
          <li class="no_bord">
            <div class="holding_h">
              <h6>Sellers Details</h6>
              
            </div>
          </li>
          <li>
            <div class="item-wrap" style="display:none;">
              <label>Title:</label>
               <select class="input" id="sel" name="title">
               <option selected="selected" value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
              </select>             
            </div>
            <div class="item-wrap">
              <label for="ownername">Your Full Name: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldownername?>" class="required" id="ownername" name="ownername">
            </div>
             <div class="item-wrap ">
              <label for="ownermobile">Address: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldowneraddress?>"class="required" id="owneraddress" name="owneraddress">
            </div>
            <div class="item-wrap last">
              <label for="owneremail">Email Address: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldowneremail?>" class="required email" id="owneremail" name="owneremail">
            </div>
          </li>
          <li>
           
            
             <div class="item-wrap">
              <label for="ownermobile">Mobile Number: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldownermobile?>" class="required number" id="ownermobile" name="ownermobile">
            </div>
            <div class="item-wrap">
              <label for="ownerphone">Home/Office Number: </label>
              <input type="text" value="<?php echo $fldownerphone?>" id="ownerphone" name="ownerphone">
            </div>
          </li>

          <li class="no_bord">
            <div class="holding_h">
              <h6>Property Details</h6>
            </div>
          </li>
          <li>
            <div class="item-wrap">
              <label for="txtproject">Sell/Rent: </label>
              <select class="input" id="sel" name="txtType" onChange="checkConditiontype1(this);">
             <option value="Sell" <?php if($fldpropertyfor=='Sell') echo "selected"; ?>>Sell</option>
              <option value="Rent" <?php if($fldpropertyfor=='Rent') echo "selected"; ?>>Rent</option>
              </select>
            </div>
            <div class="item-wrap">
              <label for="txtproject">Project/Building: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldproject?>" class="required" id="txtproject" name="txtproject">
            </div>
            </li>
          <li>
            <div class="item-wrap">
              <label for="txtproject">Address: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <textarea class="required" id="txtprojectaddress" name="txtprojectaddress"><?php echo $fldprojectaddress?></textarea>
            </div>
          </li>
          <li class="no_bord">
            <div class="holding_h">
              <h6>Unit Details</h6>
            </div>
          </li>
          <li>
            <div class="item-wrap">
              <label for="txttotalarea">Built up area(sqft): <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
              <input type="text" value="<?php echo $fldtotalarea?>"  size="20" class="text required number" id="txttotalarea" name="txttotalarea">              
              Sq.Ft </div>
            <div class="item-wrap">
              <label for="txtnetarea">Plot area (sqft): </label>
              <input type="text" value="<?php echo $fldnetarea?>" size="20" class="text" id="txtnetarea" name="txtnetarea">
              Sq.Ft </div>
              <div class="item-wrap last">
              <label for="nBedroom">No. of Bedrooms: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
               <select class="input required" id="sel" name="txtbedrooms">
             <option value="" selected="selected">None</option>
							<?php 
							FillListBox2('bedrooms', 'bed_val', $fld_srch_bedrooms, 'bed_val', " WHERE is_active = 'Y' ORDER BY bed_order", $db)
							?>             
              </select>
            </div>
          </li>
          <li>
            
            <div class="item-wrap">
              <label for="nbath"> No. of Bathrooms : </label>
              <select class="input" id="sel" name="txtbathrooms">
              <option value="" selected="selected">None</option>
                <?php 
							FillListBox2('bathrooms', 'bath_val', $fldbathrooms, 'bath_val', " WHERE is_active = 'Y' ORDER BY bath_id", $db)
							?>
              </select>
            </div>
             <div class="item-wrap">
              <label for="nbath"> No. of Parking : </label>
              <select class="input" id="sel" name="txtparking">
                <option selected="selected" value="">Select</option>
                <option value="0">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
             <div class="item-wrap last">
              <label for="txtview">View: </label>
              <input type="text" value="<?php echo $fldview?>" maxlength="255" size="35" class="text" id="txtview" name="txtview">
            </div>
          </li>        
          <li>
            <div class="item-wrap">
              <label for="txtpropfor">Condition: </label>
              <select id="sel" name="txtprop_condition" onChange="checkConditiontype(this);">
                <option selected="selected" value="not_ready">Under Construction</option>
                <option value="ready">Ready</option>
              </select>
              <div id="txtreadydate" class="item-wrap">
                <label for="txtreadydate">Ready Date: </label>
                <input type="text" id="txtreadydate" name="txtreadydate" onClick="if(self.gfPop)gfPop.fPopCalendar(document.Frm_Sell.txtreadydate);return false;" >
                 <a href="javascript:void(0)" onClick="if(self.gfPop)gfPop.fPopCalendar(document.Frm_Sell.txtreadydate);return false;" hidefocus=""><img class="PopcalTrigger" src="<?php echo $siteURL; ?>sell_property_files/calbtn.gif" alt="" height="15" border="0" width="16" align="absmiddle"></a>
             </div>
            </div>
            <div class="item-wrap">
              <label for="txtdeveloper">Expected Net Selling Price: <img border="0" title="" alt="" style="margin-left: 3px;" src="<?php echo $siteURL; ?>images/mandatory.gif"></label>
             <input type="text" value="<?php echo $fldPrice?>" maxlength="255" size="20" class="text required" name="txtPrice">
              AED </div>
              <div class="item-wrap last">
              <label for="txtpropmor">Is the property Mortgaged: </label>
               <select id="sel" name="txtpropmor" onChange="checkMortype(this);">
                 <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
              
            </div>
          </li>
          <li style="display:none" id="bank">
                <div class="item-wrap">
                  <label for="txtdeveloper">Which Bank: </label>
                  <input type="text" maxlength="255" size="20" class="text" name="txtBank">
                  AED </div>
                <div class="item-wrap">
                  <label for="txtdeveloper">Outstanding Amount: </label>
                  <input type="text" maxlength="255" size="20" class="text" name="txtoutamt">
                  AED </div>
              </li>
                   <li>
            <div class="item-wrap">
              <label for="txtproprented">Is the property vacant or currently rented to tenants?: </label>
               <select id="sel" name="txtproprented" onChange="checkRentedtype(this);">
                <option value="vacant" selected="selected">Vacant</option>
                <option value="rented">Rented</option>
              </select>
            </div>
              <div class="item-wrap">
              <label for="txtpropmor">Can access be made to the property for viewings? </label>
              <select id="sel" name="txtpropaccess">
                <option value="yes" selected="selected">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div class="item-wrap last">
              <label for="txtpropmor">Key can be collected and returned for viewings? </label>
                <select id="sel" name="txtpropkeys">
                <option value="yes" selected="selected">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </li>
          <li style="display:none;" id="rentprice">
            <div class="item-wrap">
              <label for="txtannualrent">Annual Rent: </label>
              <input type="text" maxlength="255" size="20" class="text" id="txtannualrent" name="txtannualrent">
              AED<span class="error"></span> </div>
            <div class="item-wrap">
                          
                    <label for="txtannualrent">Period of tenancy contract: </label>
                        <input type="text" id="txtperiod" name="txtperiod">
                
                        </div>
          </li>
 
          <li>
            <div class="item-wrap">
              <label for="txtpropmor">Key can be held with Innovate? </label>
            <select id="sel" name="txtpropkeysheld">
                <option value="yes" selected="selected">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
             <div class="item-wrap">
              <label style="height:30px;" for="txtpropmor">Appointment only? </label>
            <select id="sel" name="txtpropapp">
                <option value="yes" selected="selected">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
             <div class="item-wrap last">
              <label for="txtpropmor">Will you permit a signboard to be displayed at your property? </label>
            <select id="sel" name="txtpropsignboard">
                <option value="yes" selected="selected">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </li>
         
          
           <li>
            <div style="width:365px;" class="item-wrap">
              <label for="txtpropmor" style="width:100%;">Security Code (Calculate the below code): </label>
            <!--<img src="<?php //echo $siteURL ?>captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="width:70px;height:30px; margin-right: 10px; float:left;" id="captcha" onclick="javascript:reloadCaptcha()"/>
                  <input class="required" type="text" name="txtCode" id="txtCode" value="" style="width: 124px; height: 28px; padding: 0pt; margin: 0pt 0pt 0pt 5px; float: left;"/>-->   <img src="captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="float:left;" id="captcha" onClick="javascript:reloadCaptcha()" /> <span style="clear: inherit;float: left;font-size: 14px;font-weight: bold;margin-top: 6px;padding: 0 5px;"><strong>=</strong></span>
                    <input name="txtCaptcha" type="text" id="txtCaptcha" />
                    <input name="submit_contact" value="true" type="hidden" />
                    <input type="image" src="images/submit.gif" alt="Submit" id="button" title="Submit" class="submit" style="width: 60px; height: 28px; padding: 0pt; margin: 0pt 0pt 0pt 5px; float: left; border:none;"//>
             <!--  <img src="http://webchannel.co/projects/residence-dubai/www/CaptchaSecurityImages.php?width=70&amp;height=30&amp;characters=4">
            <input type="text" class="required" size="5" style="width: 124px; height: 28px; padding: 0pt; margin: 0pt 0pt 0pt 2px; float: left;" name="txtCaptcha" id="tele">-->
               
            </div>           
            
            
            
          </li>
          
          
        </ul>
                   </form>                  

          </div>

        </div>

        <?php

		require_once('inc.right.php');

		?>

  </section>

     <!--section inner content-->

     <!--section footer-->

<?php require_once('inc.footer.php'); ?>

     <!--section footer-->

<div style="clear:both;"></div>   	

</div>

<script>

function createByJson() {

	var jsonData = [					

					{description:'Choos your payment gateway', value:'', text:'Payment Gateway'},					

					{image:'images/msdropdown/icons/Amex-56.png', description:'My life. My card...', value:'amex', text:'Amex'},

					{image:'images/msdropdown/icons/Discover-56.png', description:'It pays to Discover...', value:'Discover', text:'Discover'},

					{image:'images/msdropdown/icons/Mastercard-56.png', title:'For everything else...', description:'For everything else...', value:'Mastercard', text:'Mastercard'},

					{image:'images/msdropdown/icons/Cash-56.png', description:'Sorry not available...', value:'cash', text:'Cash on devlivery', disabled:true},

					{image:'images/msdropdown/icons/Visa-56.png', description:'All you need...', value:'Visa', text:'Visa'},

					{image:'images/msdropdown/icons/Paypal-56.png', description:'Pay and get paid...', value:'Paypal', text:'Paypal'}

					];

	$("#byjson").msDropDown({byJson:{data:jsonData, name:'payments2'}}).data("dd");

}

$(document).ready(function(e) {		

	//no use

	try {

		var pages = $("#pages").msDropdown({on:{change:function(data, ui) {

												var val = data.value;

												if(val!="")

													window.location = val;

											}}}).data("dd");



		var pagename = document.location.pathname.toString();

		pagename = pagename.split("/");

		pages.setIndexByValue(pagename[pagename.length-1]);

		$("#ver").html(msBeautify.version.msDropdown);

	} catch(e) {

		//console.log(e);	

	}

	

	$("#ver").html(msBeautify.version.msDropdown);

		

	//convert

	$("select").msDropdown();

	createByJson();

	$("#tech").data("dd");

});

function showValue(h) {

	console.log(h.name, h.value);

}

$("#tech").change(function() {

	console.log("by jquery: ", this.value);

})

//

</script>



</body>

</html>

