<?php 
session_start();
require_once("connect.php"); 
$err =isset($_REQUEST['err'])?$_REQUEST['err']:"";
$pageid = $_REQUEST['pid'];
//$sql_content = "select * from content where slug='$pageid'";
//$row_content = mysql_fetch_array(mysql_query($sql_content));

$sqlCon= "SELECT * FROM content WHERE slug='$pageid'";
$rowCon = $obj->select($sqlCon);
$pagename = $rowCon[0]['pagename'];
$desc=	$rowCon[0]['page_desc'];
$parId = $rowCon[0]['parentid'];
$imag = $rowCon[0]['page_photo3'];
$fldimg_path = "images/content/";
if($rowCon[0]['parentid']!=0)
{
$sqlPar = "SELECT * FROM content WHERE pageid='$parId'";
$rowPar = $obj->select($sqlPar);
$parentSlug = $rowPar[0]['slug'];
$parentName = $rowPar[0]['pagename'];
}
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
		$fldagent_mobile	= FindOtherValue("agents_master","id",$agent,"phone",$db);
		$fldagent_name	= FindOtherValue("agents_master","id",$agent,"name",$db);
		$fldagent_email	= FindOtherValue("agents_master","id",$agent,"email",$db);
	 // $fldproperty_price1=$_REQUEST['txtOfferPrice'];
	  $country=$_POST['txtCountry'];
	  $beds=$_POST['txtBeds'];
	  $timecall=$_POST['txtProperty'];
	   $date=date("Y-m-d h:i:s");
	  if( $_SESSION['security_number'] == $_POST['txtCode'] && !empty($_SESSION['security_number'] ) ) 
 	 {
  	$sql_enq="insert into enquiry_master(property_id,name,email,mobile,phone,agent_id,status, 	prop_bed,message,location)values('$refno','$fullname','$email','$mobile','$telephone','$fldagent_name','F','$beds','$txtMsg','$country')";
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
	
	$sub 	= "Property Valuation";
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
				  <br/><b>Location :</b>'.$country.'
				  <br/><b>Bedrooms :</b>'.$beds.'
				<br/><b>Property:</b>'.$timecall.'
				<br/><b>Email :</b>'.$email.'
				<br/><b>Mobile :</b>'.$mobile.'
				<br/><b>Telephone :</b>'.$telephone.'<br/>
				</td>
				  </tr>
				  <tr style="background-color:#ccc;"><td style="width:592px; height:29px; float:left" >&copy; Copyright '.date('Y').' Metropole Properties. All rights reserved.
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

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<title>Property Valuation - <?php echo $TITLE; ?></title>

<meta name="desription" content= "Property Valuation - <?php echo $DESC; ?>"/>

<meta name="keywords" content="Property Valuation - <?php echo $KEY; ?>"/>

<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">

<?php

require_once('inc.css.php');

require_once('inc.js.php');

?>

<link rel="stylesheet" href="<?php echo $siteURL ?>css/email.css?<?php echo date('His'); ?>" type="text/css" />
<script language="javascript" type="text/javascript">
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

        	<h1><?php echo $pageTitle; ?></h1>

            <div class="breadcrumbs">

            	<ul>

                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>

                    <li><a class="bread_active">Property Valuation</a></li>

                </ul>

                <div class="bread_mail">

                	<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox">Email</a>

                   <!-- <a class="br_print" href="#" onClick="PrintContent('<?php echo $pi; ?>');">print</a>-->

                </div>

            </div>

            <div class="page">

               <?php
			
						if($msg==1)
						{
						?>
                        <span><font color="#FF0000" size="2">Mail has been sent successfully</font></span>
                        
                        <?php
						}
						
						if($msg!=1)
						{
						?>
	<form method="post" action="" id="frmEnquiry" name="frmEnquiry">
    
    <span style="color:#FF0000;width:193px">
                            <?php
							if($err) { echo $err;} else { }
							?>
                            </span>    
    <div class="crew_top1" style="margin-top:10px; width:700px;">
                	   	
                                          <dl style="width:330px;">
                        	<dt>
                            	<label>Your  Name: <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
                         		 <input name="txtName" id="Name" type="text" value="<?php echo @$_POST['txtName']; ?>" class="required field1" />
                            </dt>
                            <dt>
                            	<label>Your Email Id: <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
                         		 <input name="txtMail" id="Middle" type="text" value="<?php echo @$_POST['txtMail']; ?>" class="required email field1" />
                                 <input type="hidden" name="price" value="<?php echo $_REQUEST['price']; ?>" />
                            </dt>                          
                            <dt>
                            	<label>Mobile No: <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
                         		 <input name="txtMob" id="First" type="text" value="<?php echo @$_POST['txtMob']; ?>" class="required number field1" />
                            </dt>
                           
                            <dt>
        <label>Bedrooms
        <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
        <select name="txtBeds" id="cmb_area_type " class="required" style="height:32px;">
          <option value="">Select Type</option>
          <?php echo FillListBox2("bedrooms","bed_val",$txtBeds,"bed_val"," WHERE is_active='Y' ORDER BY bed_val",$db);?>
        </select>
       </dt>                 
                            <dt class="flast">
                            	<label>Verification Code (Calculate the below code): <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
                                <img src="<?php echo $siteURL ?>captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="width:69px;height:28px; float:left; margin-right:10px;" id="captcha" onClick="javascript:reloadCaptcha()"/>
                  <input class="required field2" type="text" name="txtCode" id="txtCode" value=""/>                                    
                           
                            	<input type="image" src="images/submit.gif" id="butSer" name="butSer" class="save_but">  
                            </dt>             
                            
                       </dl>
                       <dl style="width:290px; padding-left:10px;">
                             <dt>
                            	<label>Landline No: <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
                         		 <input name="txtPhone" id="Firsts" type="text" value="<?php echo @$_POST['txtPhone']; ?>" class="required number field1" />
                            </dt>
                           
                        <dt>
                            	<label>Comments: <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="Mandatory" title="Mandatory"> </label>
                            <textarea id="msg" name="txtMsg" class="required" rows="2" cols="22" ><?php echo @$_POST['txtMsg']; ?></textarea>
                            </dt>
                              
                           
                        <dt>
        <label>Location
        <img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
        <select name="txtCountry" id="samp" class="required" style="height:32px;">
          <option value="">Select Type</option>
          <?php echo FillListBox2("property_location","location_name",$txtCountry,"location_name"," WHERE is_active='Y' ORDER BY location_name",$db);?>
        </select>
       </dt>                         
                            
                            
             <dt>
        <label for="name">Property<img src="<?php echo $siteURL ?>images/mandatory.gif" alt="mandatory" /></label>
             <select id="samp" name="txtProperty" style="height:32px;" class="required">
          <option value="Rented">Rented</option>
          <option value="Vacant">Vacant</option>
        </select>
      </dt>               
                                   
                        </dl>
                   
    
    
    
    
      </div>
      </form>
      <?php
	  }
	  ?>

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

