<?php
//session_start();
@include_once("connect.php"); 
$mail=isset($_REQUEST['q'])?$_REQUEST['q']:"";
$name=isset($_REQUEST['name'])?$_REQUEST['name']:"";
/*$sqlSel1="SELECT * FROM  newsletter_subscription_master WHERE newsletter_sub_email ='$mail'";
$resSel=$obj->select($sqlSel1);
$num=mysql_num_rows($sqlSel1);
$resSel=$obj->select($sqlSel);*/
$sqlSel1=mysql_query("SELECT * FROM  newsletter_subscription_master WHERE newsletter_sub_email ='$mail'");
$res=mysql_fetch_array($sqlSel1);
$num=mysql_num_rows($sqlSel1);
$resSel=$obj->select($sqlSel);
if($num>0)
{

echo "Email Allready Exists";
}
else
{
$sql_enq="insert into  newsletter_subscription_master(newsletter_sub_name,newsletter_sub_email,newsletter_sub_added_on )values('$name','$mail',NOW())";
$res_enq=$obj->insert($sql_enq);
if($res_enq)
{
$sql_admin="select * from admin where admin_uid='admin'";
$res_admin=$obj->select($sql_admin);
$email = $res_admin[0]['admin_email'];
$to = $mail;
$sub 	= "Newsletter Confirmation Mail";
$message ='<body style="border:solid 0px #669; width:604px;color:#09C;"><table style="margin:0 auto; padding:0px;
				border:none; font-family:\'Trebuchet MS\', Arial, Helvetica, sans-serif; font-size:13px; 
				color:#09C; line-height:25px; border:1px solid #6ca690;" width="600" >
				  <tr>
					<td width="592">
					<img src="'.$siteURL.'images/logo.png" /></td>
				  </tr>
				  <tr><td style="border:solid 0px #CCCCCC; width:576px;height:auto; float:left; padding:10px;
				  font-size:14px; font-weight:normal;">
				 <b>Thank you for subscribing our Newsletter!</b>
				<br/>
				Thank you for visiting our website and asking us a question. One of our experienced advisors will review your question and contact you with suitable 
				answer to your question.Rest assured that your question will answer to the best of knowledge that our consultants have and accurately. 
				<br/>
				 Thank you for signing up. 
				<br/>
				Sincerely, <br/>
				Innovate Real Estate
				 </td>
				  </tr>
				<tr align="center" style="background-color:#E9E9E9;">
						<td style="width:592px; height:29px; float:left">'.$copyright.'</td>
					  </tr>
				</table></body>';
				
$headers 	= "From:  $email\r\n";
//$headers 	.= "Cc: $to\r\n";
$headers   .= 'MIME-Version: 1.0' . "\r\n";
$headers   .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	if(mail($to,$sub,$message,$headers))
	{
	$err = "mail sent";
	}else
	{
	$err = "<br/>Mail can't be sent";	
	}

echo "Submitted Successfully";
}
}
?>