<?php
session_start();
include("connect.php");
$err =isset($_REQUEST['err'])?$_REQUEST['err']:"";
if($_POST)
{
	  $txttitle = $_POST['txttitle'];
	  $fullname = strip_tags($_POST['txtName'],"");
	  $email = $_POST['txtMail'];
	  $mobile = $_POST['txtMob'];
	  $telephone = strip_tags($_POST['txtPhone'],"");
	  $subject = strip_tags($_POST['txtSub'],"");
	  $txtMsg = strip_tags($_POST['txtMsg'] ,"");
	  $refno=$_REQUEST['ref'];
	  $agent=$_REQUEST['agent'];
		$fldagent_mobile= FindOtherValue("agents_master","id",$agent,"phone",$db);
		$fldagent_name	= FindOtherValue("agents_master","id",$agent,"name",$db);
		$fldagent_email	= FindOtherValue("agents_master","id",$agent,"email",$db);
	  $fldproperty_price1=$_REQUEST['txtOfferPrice'];
	  $country=$_POST['txtCountry'];
	  $timecall=$_POST['txtTimePrefer'];
	   $date=date("Y-m-d h:i:s");
	  if( $_SESSION['security_number'] == $_POST['txtCode'] && !empty($_SESSION['security_number'] ) ) 
 	 {
  	$sql_enq="insert into enquiry_master(property_id,name,email,mobile,phone,agent_id,status,country,message)values('$refno','$fullname','$email','$mobile','$telephone','$fldagent_name','O','$country','$txtMsg')";
	$res_enq=$obj->insert($sql_enq);
	$sql_admin="select * from admin where admin_uid='admin'";
    $res_admin=$obj->select($sql_admin);
	//$row_admin=mysql_fetch_array($res_admin);
	//$email1="vishnu@webchannel.ae";
	//$to = $res_admin[0]['admin_email'];
	if($fldagent_email)
	{
	$to = $fldagent_email;
	}
	else
	{
	$to = $res_admin[0]['admin_email'];
	}
	$sub 	= "Offer for Property : #".$_REQUEST['ref'];
	$headers 	= "From:  $email"."\r\n";
	//$headers 	.= "CC:  $email1"."\r\n";
	$headers   .= 'MIME-Version: 1.0' . "\r\n";
	$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$message ='<body style="border:solid 0px #4a4a4a; width:592px;color:#000;"><table style="margin:0 auto; padding:0px;
				border:none; font-family:\'Trebuchet MS\', Arial, Helvetica, sans-serif; font-size:13px; 
				color:#000; line-height:25px; border:1px solid #000;" width="592" >
				  <tr>
					<td width="592">
					<img src="'.$siteURL.'images/bg.gif" /></td>
				  </tr>
				  <tr><td style="border:solid 0px #4a4a4a; width:576px;height:auto; float:left; padding:10px;
				  font-size:14px; font-weight:normal;">
				 <b>Name  :</b>'.$txttitle.'.'.$fullname.'
				 <br/><b>Property Ref. No.: :</b>'.$refno.'
				 <br/><b>Country :</b>'.$country.'
				<br/><b>Offer Price :</b>'.$fldproperty_price1.' AED
				<br/><b>Best time to call?:</b>'.$timecall.'
				<br/><b>Email :</b>'.$email.'
				<br/><b>Mobile :</b>'.$mobile.'
				<br/><b>Telephone :</b>'.$telephone.'<br/>
				</td>
				  </tr>
				  <tr style="background-color:#ccc;"><td style="width:592px; height:29px; float:left" >&copy; Copyright '.date('Y').' Innovate Real Estate Properties. All rights reserved.
				  </td>
				  </tr>
				</table></body>';
	if(mail($to,$sub,$message,$headers))
	{
	$err = "<br/>Mail sent ..We will contact you soon";
	$msg=1;
	}
	else
	{
	$err = "<br/>Mail can't be sent";	
	}
  }
  else
  {
	$err =  '<br/>Invalid security code. Try again';
  }
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Innovate Real Estate</title>
<link rel="stylesheet" href="<?php echo $siteURL ?>css/email.css?<?php echo date('His'); ?>" type="text/css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js?<?php echo date('His'); ?>"></script>
<script src="<?php echo $siteURL ?>js/jquery.validate.js?<?php echo date('His'); ?>"></script>
<script language="javascript">
		$(document).ready(function() {
			$("#frmEnquiry").validate();
		});
		
	/* this is just a simple reload; you can safely remove it; remember to remove it from the image too */
	function reloadCaptcha()
	{
		document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();
	}
</script>
</head>

<body class="fraim">
<?php
if($msg==1)
						{
						?>
                        <span><font color="#FF0000" size="2">Mail has been sent successfully</span>
                        
                        <?php
						}
						?>
                        <?php
						if($msg!=1)
						{
						?>
	<form method="post" action="" id="frmEnquiry" name="frmEnquiry">
    
    <span style="color:#FF0000;width:193px">
                            <?php
							if($err) { echo $err;} else { }
							?>
                            </span>    
    <div class="crew_top" style="margin-top:10px; width:600px;">
                	   	<h2>Make an offer</h2>
                        <div style="width:579px; float:left; padding:10px; margin-top:15px; font-size:12px; border:1px dashed #93e095;">
    <label>Ref No.</strong> : <?php echo $_REQUEST['ref']?> <br/>
      Would you like to make an offer on this property ? The listing price for this property is AED <?php echo $_REQUEST['price']?> <br/>
      <br/>
    </label>
    <dl style="width:48%; padding-left:48px;">
    	<dt>
        	<label>Type your offer price here: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
       <input type="text"  class="required number field1"  name="txtOfferPrice"/>
        </dt>
    </dl>
    
    
   
    <br />
  </div>
                        <dl style="width:290px;">
                        	<dt>
                            	<label>Your  Name: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtName" id="Name" type="text" value="<?php echo @$_POST['txtName']; ?>" class="required field1" />
                            </dt>
                            <dt>
                            	<label>Your Email Id: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtMail" id="Middle" type="text" value="<?php echo @$_POST['txtMail']; ?>" class="required email field1" />
                                 <input type="hidden" name="price" value="<?php echo $_REQUEST['price']; ?>" />
                            </dt>                          
                            <dt>
                            	<label>Mobile No: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtMob" id="First" type="text" value="<?php echo @$_POST['txtMob']; ?>" class="required number field1" />
                            </dt>
                            <dt>
                            	<label>Verification Code(Calculate the below code): <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                                <img src="<?php echo $siteURL ?>captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="width:69px;height:28px; float:left; margin-right:10px;" id="captcha" onclick="javascript:reloadCaptcha()"/>
                  				<input class="required field2" type="text" name="txtCode" id="txtCode" value=""/>                                    
                            	<input type="image"  src="images/submit.gif" id="butSer" name="butSer" class="save_but">  
                            </dt>             
                            
                       </dl>
                       <dl style="width:290px; padding-left:10px;">
                             <dt>
                            	<label>Landline No: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtPhone" id="First" type="text" value="<?php echo @$_POST['txtPhone']; ?>" class="required number field1" />
                            </dt>
                            <dt>
        <label>Country of Residence
        <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
        <select name="txtCountry" id="cmb_area_type" class="required" style="height:28px;">
          <option value="">Select Type</option>
          <?php echo FillListBox2("countrylist","country_name",$txtCountry,"country_name"," WHERE is_active='Y' ORDER BY country_name",$db);?>
        </select>
       </dt>
                            
                            <dt>
        <label for="name">Best time to call?<img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
             <select name="txtTimePrefer" style="height:28px;">
          <option value="Any Time">Any Time</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
      </dt>
                            </dl>
                            <!--<dt>
                            	<label>Message: <img src="<?php //echo $siteURL ?>images/mandatory.png" alt="Mandatory" title="Mandatory"> </label>
                            <textarea id="msg" name="txtMsg" class="required" rows="2" cols="22" ><?php //echo @$_POST['txtMsg']; ?></textarea>
                            </dt>-->
                            
                           
                            
                                   
                       
                   
    
    
    
    
      </div>
      </form>
      <?php
	  }
	  ?>
</body>
</html>
