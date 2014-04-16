<?php 
require_once('connect.php');
session_start();
$err ="";
if($_POST)
{
	$name = get_param('name');
	$address = get_param('address');
	$email = get_param('email');
	$phoneno = get_param('phoneno');
	$mobile = get_param('mobile');
	$msg = get_param('msg');
	$text_code = get_param('txt_code');
	if( $_SESSION['security_number'] == $text_code && !empty($_SESSION['security_number'])) 
	{
		$createdOn = date('Y-m-d h:i:s');
		$InsertQry ="INSERT INTO registration SET 
					 name = '$name', 
					 email = '$email', 
					 address = '$address', 
					 phone = '$phoneno',
					 mobile = '$mobile',
					 message = '$msg',
					 date = '$createdOn'";
		$obj->insert($InsertQry);
		$to = $support_Admin;
		$sub = 'Innovate Real Estate Project Registration Details';
		$message ='<table style="margin:0 auto; padding:0px; font-family: SegoeUINormal ,Arial ,Helvetica ,sans-serif; font-size:13px; color:#000; line-height:25px; border:solid 1px #ccc;" width="594">
		  <tr>
			<td width="592" colspan="2" style="border-bottom:1px solid #ccc; background:#ccc;"><img src="'.$siteURL.'images/logo.png" border="0" /></td>
		  </tr>
		  <tr>
			<td align="left">Name</td>
			<td align="left">&nbsp;'.$name.'&nbsp;</td>
		  </tr>';
		  if($address){
		  $message .='
		  <tr>
			<td align="left">Address</td>
			<td align="left">&nbsp;'.$address.'&nbsp;</td>
		  </tr>';
		  }
		  $message .='
		  <tr>
			<td align="left">Email</td>
			<td align="left">&nbsp;'.$email.'&nbsp;</td>
		  </tr>';
		  if($phoneno){
		  $message .='<tr>
			<td align="left">Phone No.</td>
			<td align="left">&nbsp;'.$phoneno.'&nbsp;</td>
		  </tr>';
		  }
		  $message .='<tr>
			<td align="left">Mobile No.</td>
			<td align="left">&nbsp;'.$mobile.'&nbsp;</td>
		  </tr>
		  <tr>
			<td align="left" colspan="2">'.$msg.' </td>
		  </tr>
		  <tr style=" background-color:#6A91A1" valign="middle">
			<td style="width:594px; height:29px; float:left; color:#fff;" colspan="2">'.$copyright.'</td>
		  </tr>
		</table>';
		$headers 	= "From:  $email\r\n";
		$headers   .= 'MIME-Version: 1.0' . "\r\n";
		$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		ini_set("SMTP","mail.webchannel.ae");
		ini_set("sendmail_from","info@webchannel.ae");	
		if(mail($to,$sub,$message,$headers)){
		$sucMsg = "<br/><br/>Thank you <br/>for Registering with us.<br/> We will get back to you soon.";
		}else
		$sucMsg = "<br/>Mail can't be sent";	
  	}
	else
	$err =  '<br/>Invalid security code. Try again';
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Innovate Real Estate Registration</title>
<link rel="stylesheet" href="css/email.css" type="text/css" />
<script src="js/jquery.js?<?php echo date('His'); ?>" type="text/javascript"></script>
<script src="js/jquery.validate.js?<?php echo date('His'); ?>" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
/* this is just a simple reload; you can safely remove it; remember to remove it from the image too */
function reloadCaptcha()
{
	document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();
}
$(document).ready(function()
{						   
	$("#register_form").validate()
});
</script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/sexylightbox.v2.3.jquery.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
      SexyLightbox.initialize({color:'white', dir: 'sexyimages'});
  });
</script>
<link rel="stylesheet" href="css/sexylightbox.css?t=072835" type="text/css" media="all" />
<style type="text/css">
.crew_top input.field1{ height:20px; width:220px;}
.crew_top textarea{ width:220px;}
.crew_top dt{ width:240px;}
</style>
</head>
<body class="fraim" style="padding-left:5px;">
<form method="post" action="" id="register_form" name="register_form" style="margin:0">
  <div class="crew_top" style="width:480px; padding:0px;">
    <h2> <span>Registration </span></h2>
	<?php if($sucMsg!="") { ?>
    <h3 align="center" style="color:#FFF;margin-top:60px"><?php if($sucMsg) { echo $sucMsg."<br/>";}  ?></h3>
    <?php } else { ?>
    <span style="color:#FF0;" class="error" id="error"><?php  if($err) { echo $err."<br/>";} ?></span>
    <dl style="margin-bottom:0px;">
      <dt>
        <label>Full Name: <img src="images/mandatory.png" alt="mandatory" /></label>
        <input name="name" id="name" type="text" value="<?php echo $name?>" class="required field1" />
      </dt>      
      <dt>
        <label>Email Id: <img src="images/mandatory.png" alt="mandatory" /></label>
        <input name="email" id="email" type="text" value="<?php echo $email?>" class="required email field1" />
      </dt>
      <dt>
        <label>Address: </label>
        <textarea id="address" name="address" class="" style="height:20px;"><?php echo $address?></textarea>
      </dt>
      <dt>
        <label>Phone No.: </label>
        <input name="phoneno" id="phoneno" type="text" value="<?php echo $phoneno?>" class="field1 number" />
      </dt>      
      <dt>
        <label>Message: <img src="images/mandatory.png" alt="mandatory" /> </label>
        <textarea id="msg" name="msg" class="required" style="height:85px;"><?php echo $msg?></textarea>
      </dt>
      <dt>
        <label>Mobile No.: <img src="images/mandatory.png" alt="mandatory" /></label>
        <input name="mobile" id="mobile" type="text" value="<?php echo $mobile?>"  class="required number field1" />
      </dt>
      <dt>
        <label>Security Code <b style="font-size:xx-small">(Type the result): </b><img src="images/mandatory.png" alt="mandatory" /></label>
        <img src="captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="float: left; margin-right: 9px; margin-top: 3px; width:65px;" id="captcha" onclick="javascript:reloadCaptcha()"/>
        <input name="txt_code" id="txt_code" type="text" value="" class="required field2" style="width:60px;" />
        <input type="image"  onmouseout="this.src = 'images/submit.gif';" onmouseover="this.src = 'images/submit.gif';" src="images/submit.gif" id="butSer" name="butSer" class="save_but">
      </dt>
    </dl>
    <?php } ?>
  </div>
</form>
</body>
</html>