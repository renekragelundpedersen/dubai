<?php
session_start();
include("connect.php");
$err =isset($_REQUEST['err'])?$_REQUEST['err']:"";
$propid = $_REQUEST['propid'];
$sqlQry = "SELECT * FROM property_master WHERE is_active = 'Y' AND is_sold = 'N' AND is_rejected = 'N' AND prop_id = '$propid'";
$rowQry = $obj->select($sqlQry);
$propfor = $rowQry[0]['prop_for_id'];
$type = $rowQry[0]['type_ref_id'];
$bed = $rowQry[0]['no_beds'];
if($_POST)
{
	  $txttitle = $_POST['txttitle'];
	  $email = $_POST['txtMail'];
	  $mobile = $_POST['txtMob'];
	  $refno = $_REQUEST['ref'];
	  $agent = $_REQUEST['agent'];
	  $name = $_POST['txtName'];
	  $fldagent_mobile  = FindOtherValue("agents_master","id",$agent,"phone",$db);
	  $fldagent_name	= FindOtherValue("agents_master","id",$agent,"name",$db);
	  $fldagent_email	= FindOtherValue("agents_master","id",$agent,"email",$db);
	  $telephone = strip_tags($_POST['txtPhone'],"");
	  $subject = strip_tags($_POST['txtSub'],"");
	  $txtMsg = strip_tags($_POST['txtMsg'] ,"");
	  $date = date("Y-m-d h:i:s");
	  if( $_SESSION['security_number'] == $_POST['txtCode'] && !empty($_SESSION['security_number'] ) ) 
 	 {
  	$sql_enq="insert into enquiry_master(property_id,name,email,mobile,phone,agent_id,status,country,message,prop_type_value,prop_bed)values('$propid','$name','$email','$mobile','$telephone','$agent','E','$country','$txtMsg','$type','$bed')";
	$res_enq=$obj->insert($sql_enq);
	$sql_admin="select * from admin where admin_uid='admin'";
    $res_admin=$obj->select($sql_admin);
	//$row_admin=mysql_fetch_array($res_admin);
	if($fldagent_email)
	{
	$to = $fldagent_email;
	}
	else
	{
	$to = $res_admin[0]['admin_email'];
	}
	$sub = "Enquired By: ".$name;;
	$headers 	= "From:  $email"."\r\n";
	$headers   .= 'MIME-Version: 1.0' . "\r\n";
	$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$message ='<body style="border:solid 0px #4a4a4a; width:592px;color:#000;"><table style="margin:0 auto; padding:0px;
				border:none; font-family:\'Trebuchet MS\', Arial, Helvetica, sans-serif; font-size:13px; 
				color:#000; line-height:25px; border:1px solid #000;" width="592" >
				  <tr>
					<td width="592" style="background:#ccc">
					<img src="'.$siteURL.'images/logo.png" /></td>
				  </tr>
				  <tr><td style="border:solid 0px #4a4a4a; width:576px;height:auto; float:left; padding:10px;
				  font-size:14px; font-weight:normal;">
				  <b>Property Ref. No. :</b>'.$refno.'
				 <br/><b>Name  :</b>'.$txttitle.'.'.$name.'
				<br/><b>Email :</b>'.$email.'
				<br/><b>Mobile :</b>'.$mobile.'
				<br/><b>Telephone :</b>'.$telephone.'
				<br/><b>Message:</b>'.$txtMsg.'<br/></td>
				  </tr>
				  <tr style="background-color:#ccc;"><td style="width:592px; height:29px; float:left; font-weight:bold; color:#8bb8a1;" >&nbsp;Innovate Real Estate 
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


 <script language="javascript" type="text/javascript">
$(document).ready(function(){
	$("#txtCode").keyup(function() {
 showHint($("#txtCode").val());
	
	});	
});
</script>
<script language="javascript">
function showHint(mail)
{
var xmlhttp;
if (mail.length==0)
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	if(xmlhttp.responseText==2)
	{
	document.getElementById("txtHint").innerHTML="<font color='red' size='2'>Wrong</font>";
	}
	else
	{
	document.getElementById("txtHint").innerHTML="<font color='#229907' size='2'>Correct</font>";
	}
     }
  }
 
xmlhttp.open("GET","vericheck.php?q="+mail,true);
xmlhttp.send();
}
</script>
</head>
<body class="fraim" <?php if($msg==1) { ?>style="text-align:center; margin-top:175px;"<?php } ?>>
<?php
if($msg==1)
						{
						?>
                        <span style="text-align:center;"><font size="2" style=" font-family: 'code_boldregular',Arial,Helvetica,sans-serif;
    font-size: 22px; color:#fff; font-weight:bold;">Mail has been sent successfully</font></span>
                        <?php
						}
						?>
                        <?php
						if($msg!=1)
						{
						?>
	<form method="post" action="" id="frmEnquiry" name="frmEnquiry">
    <span style="color:#FF0000;width:193px; font-family: 'code_boldregular',Arial,Helvetica,sans-serif;
    font-size: 15px;">
                            <?php
							if($err) { echo $err;} else { }
							?>
                            </span>    
<div class="crew_top" style="margin-top:10px; width:544px;">
                	   	<h2>Make an enquiry</h2>
                   <!-- #D7E7DF -->   
                         <dl style="width:265px;">
                        <dt style=" background:#000;height:11px;margin-bottom:10px;padding-left:15px;padding-top:15px;width:241px;">
                            	<label>Property Ref. No: <?php echo @$_REQUEST['ref']; ?></label>
                            </dt>
                        	<dt>
                            	<label>Your  Name: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtName" id="Name" type="text" value="<?php echo @$_POST['txtName']; ?>" class="required field1" />
                            </dt>
                            <dt>
                            	<label>Your Email Id: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtMail" id="Middle" type="text" value="<?php echo @$_POST['txtMail']; ?>" class="required email field1" />
                            </dt>
                            <dt>
                            	<label>Verification Code(Calculate the below code): <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                                <img src="<?php echo $siteURL ?>captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="width:69px;height:31px; margin-right:15px; float:left;" id="captcha" onclick="javascript:reloadCaptcha()"/>
                  <input class="required field2" type="text" name="txtCode" id="txtCode" value="" />&nbsp;<div id="txtHint" style="margin-left:5px;float:left;"></div>
                            </dt>
                            <dt>
                            	<input type="image"  src="images/submit.gif" id="butSer" name="butSer" class="save_but">  
                            </dt>            
                            </dl>
                             <dl style="width:265px; padding-left: 14px;">               
                            <dt>
                            	<label>Mobile No: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtMob" id="First" type="text" value="<?php echo @$_POST['txtMob']; ?>" class="required number field1" />
                            </dt>
                             <dt>
                            	<label>Landline No: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="mandatory" /></label>
                         		 <input name="txtPhone" id="First" type="text" value="<?php echo @$_POST['txtPhone']; ?>"class="required number field1" />
                            </dt>
                            <dt>
                            	<label>Message: <img src="<?php echo $siteURL ?>images/mandatory.png" alt="Mandatory" title="Mandatory"> </label>
                            <textarea id="msg" name="txtMsg" class="required" rows="2" cols="22" ><?php echo @$_POST['txtMsg']; ?></textarea>
                            </dt>          
                        </dl>                   
      </div>
      </form>
      <?php
	  }
	  ?>
</body>
</html>
