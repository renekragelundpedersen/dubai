<?php 

require_once('connect.php');

session_start();

$err ="";

$link ="";

if($link=="") {$link = $_SERVER['HTTP_REFERER'];}

if($_POST)

{

	  $name = $_POST['name'];

	  $email = strip_tags($_POST['emailid'],"");

	  $fname= strip_tags($_POST['fname'],"");

	  $femailid=strip_tags($_POST['femailid'],"");

	  $msg = strip_tags($_POST['msg'],"");

	  $text_code = $_POST['txt_code'];

	  $link = $_POST['link'];
	  
	  

function get_page_title2($url){



	if( !($data = file_get_contents($url)) ) return false;



	if( preg_match("#<title>(.+)<\/title>#iU", $data, $t))  {

		return trim($t[1]);

	} else {

		return false;

	}

}	  

$title=get_page_title2($link);



$subject = "Your friend ".$name." Suggested you ";

	  //$text_code = $_POST['txtCode'];

	//if( $_SESSION['security_number'] == $_POST['txt_code'] && !empty($_SESSION['security_number'] ) ) 	 {

	if( $_SESSION['security_number'] == $text_code && !empty($_SESSION['security_number'])) 

 	 {

	 

	  $createdOn = date('Y-m-d h:i:s');

	  

	  $ip = $_SERVER['REMOTE_ADDR'];

	 

	 $obj->insert("INSERT INTO emailtofriend SET sendername = '$name', senderemail = '$email', receivername = '$fname', receiveremail='$femailid',message = '$msg',url='$link', date = '$createdOn'");



	//$to = "info@cygnustelecom.com";

	$to = $femailid;

	$sub = $subject;

	$message ='<table style="margin:0 auto; padding:0px; font-family: SegoeUINormal ,Arial ,Helvetica ,sans-serif; font-size:13px; color:#000; line-height:25px; border:solid 1px #ccc;" width="594">

				  <tr>

					<td width="592" style="border-bottom:1px solid #ccc; background:#ccc;">

					<img src="'.$siteURL.'images/logo.png" border="0" /></td>

				  </tr>

				  <tr>

					<td>

					<span style="color:#000;"> <b>Hi &nbsp;'.$fname.'&nbsp;,</b></span>

					</td>

				  </tr>

				  <tr>

					<td>

					<span style="color:#000;">Your friend '.$name.' has suggested you to visit the following link</span>

					</td>

				  </tr>

				  <tr>

					<td>

					<b> <span style="color:#000;"><a href="'.$link.'">'.$title.'</a></span></b>

					</td>

				  </tr>

				  <tr>

					<td>

					<span style="color:#000;">You have a personal message also from '.$name.'<br/>'.$msg.'</span>

					</td>

				  </tr>

				  <tr style=" background-color:#6A91A1" valign="middle">

					<td style="width:594px; height:29px; float:left; color:#fff;" >

					'.$copyright.'

					</td>

				  </tr>

				</table>';

				

$headers 	= "From:  $email\r\n";

$headers   .= 'MIME-Version: 1.0' . "\r\n";

$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	if(mail($to,$sub,$message,$headers))

	{

	$sucMsg = "Mail sent successfully.";

	/*echo "<script language='javascript'>window.parent.location.reload(true);</script>";*/

	}else

	{

	$sucMsg = "<br/>Mail can't be sent";	

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

<link rel="stylesheet" href="css/email.css" type="text/css" />

<script src="js/jquery.js?<?php echo date('His'); ?>" type="text/javascript"></script>

<script src="js/jquery.validate.js?<?php echo date('His'); ?>" type="text/javascript"></script>

<script language="javascript" type="text/javascript">

	/* this is just a simple reload; you can safely remove it; remember to remove it from the image too */

	function reloadCaptcha()

	{

		document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();

	}

</script>

<script language="javascript">

		$(document).ready(function()

		{						   

		$("#frmEnquiry").validate()

		});

		</script>

</head>

<body class="fraim">

<?php if($sucMsg!="") { ?>

<span  style="padding-bottom:20px; color:#060;" >

<?php

			  if($sucMsg) { echo $sucMsg."<br/>";}

			  ?>

</span>

<?php } else { ?>

<span style="padding-bottom:20px; color:#D74535;" class="error" id="error">

<?php

			  if($err) { echo $err."<br/>";}

			  ?>

</span>

<form method="post" action="" id="frmEnquiry" name="frmEnquiry">

  <input type="hidden" value="<?php echo $link;?>" name="link" id="link"  />

  <div class="crew_top" style="margin-top:10px;">

    <h2> <span>Email</span>

      <p>to Friend</p>

    </h2>

    <dl>

      <dt>

        <label>Your  Name: <img src="images/mandatory.png" alt="mandatory" /></label>

        <input name="name" id="name" type="text" value="<?php echo $_POST['name']?>" class="required field1" />

      </dt>

      <dt>

        <label>Your Email Id: <img src="images/mandatory.png" alt="mandatory" /></label>

        <input name="emailid" id="emailid" type="text" value="<?php echo $_POST['emailid']?>" class="required email field1" />

      </dt>

      <dt>

        <label>Friend's  Name: <img src="images/mandatory.png" alt="mandatory" /></label>

        <input name="fname" id="fname" type="text" value="<?php echo $_POST['fname']?>" class="required field1" />

      </dt>

      <dt>

        <label>Friend's  Email Id: <img src="images/mandatory.png" alt="mandatory" /></label>

        <input name="femailid" id="femailid" type="text" value="<?php echo $_POST['femailid']?>"  class="required email field1" />

      </dt>

      <dt>

        <label>Message: <img src="images/mandatory.png" alt="mandatory" /> </label>

        <textarea id="msg" name="msg" class="required" rows="2" cols="22" ><?php echo $_POST['msg']?></textarea>

      </dt>

      <dt>

        <label>Verification Code (Calculate the below code): <img src="images/mandatory.png" alt="mandatory" /></label>

         <img src="captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="float: left; margin-right: 9px; margin-top: 3px; width:65px;" id="captcha" onclick="javascript:reloadCaptcha()"/> <input name="txt_code" id="txt_code" type="text" value="" class="required field2" />

        <!--<img src="CaptchaSecurityImages.php?width=69&height=23&characters=4" style="float: left; margin-right: 9px; margin-top: 3px;" id="captcha" />-->

        <!--<input type="text" id="txtCode" name="txtCode" value="" class="required field2" >-->

        <input type="image"  onmouseout="this.src = 'images/submit.gif';" onmouseover="this.src = 'images/submit.gif';" src="images/submit.gif" id="butSer" name="butSer" class="save_but">

      </dt>

    </dl>

    <?php } ?>

  </div>

</form>

</body>

</html>

