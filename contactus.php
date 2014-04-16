<?php require_once('connect.php'); ?>
<?php session_start();?>
	<?php
    $currentFile = $_SERVER["PHP_SELF"];
    $parts = Explode('/', $currentFile);
    $pag = $parts[count($parts) - 1];
    ?>
<?php
$err ="";
$link ="";
if($link=="") {$link = $_SERVER['HTTP_REFERER'];}
if($_POST)
{
  
	  $name = $_POST['txtNam'];
	  $email = strip_tags($_POST['txtMail'],"");
	  $phoneno = strip_tags($_POST['txtPh'],"");
	  $country = strip_tags($_POST['country'],"");
	  $sub = strip_tags($_POST['txtSub'],"");
	  $msg = strip_tags($_POST['txtMsg'],"");
	  $text_code = $_POST['txtCode'];
	  $link = $_POST['link'];
	  
//function get_page_title($url){
//
//	if( !($data = file_get_contents($url)) ) return false;
//
//	if( preg_match("#<title>(.+)<\/title>#iU", $data, $t))  {
//		return trim($t[1]);
//	} else {
//		return false;
//	}
//}	  
//
//$title=get_page_title($link);

	  
	if( $_SESSION['security_number'] == $text_code && !empty($_SESSION['security_number'])) 
 	 {
	 
	  $createdOn = date('Y-m-d h:i:s');
	  
	  $ip = $_SERVER['REMOTE_ADDR'];
	  
	  
	 $obj->insert("INSERT INTO enquiry_master SET name = '$name', emailid = '$email', phone = '$phoneno', subject = '$sub',country = '$country',comments = '$msg',added_on = '$createdOn',status='C'");

	//$to = "info@cygnustelecom.com";
	$to = $support_Admin;
	
	$message ='<table style="margin:0 auto; padding:0px; font-family: SegoeUINormal ,Arial ,Helvetica ,sans-serif; font-size:13px; color:#000; line-height:25px; border:solid 1px #ccc;" width="594">
				  <tr style=" background-color:#fff;">
					<td width="592" style="border-bottom:1px solid #ccc; background-color:#ccc;" >
					<img src="'.$siteURL.'images/logo.png" border="0" /></td>
				  </tr>
				  <tr>
					<td>
					</td>
				  </tr>
				  <tr>
					<td>
					Subject	: '.$sub.'<br>
					Name 	: '.$name.'<br>
					Email 	: '.$email.'<br>
					Country	: '.$country.'<br>
					Phone	: '.$phoneno.'<br>
					Message	: '.$msg.'<br>
					</td>
				  </tr>
				  <tr>
					<td>
					</td>
				  </tr>
				  <tr style=" background-color:#107894">
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
	$sucMsg = "Mail sent success fully. We will get back you soon.";
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
	$pid = isset($_REQUEST['content'])?$_REQUEST['content']:$_REQUEST['other'];
	
	if($_REQUEST['content'])
	{
	$pi='content';
	$sqlContent = "SELECT * FROM content WHERE is_active = 'Y' AND slug = '$pid'";
	}
	else
	{
	$sqlContent = "SELECT * FROM content_other WHERE is_active = 'Y' AND slug = '$pid'";
	}
	
	$rowContent = $obj->select($sqlContent);
	
	$pageTitle = stripslashes($rowContent[0]['pagename']);
	$desc = stripslashes($rowContent[0]['page_desc']);
	$author = stripslashes($rowContent[0]['author']);
	$pageid = $rowContent[0]['pageid'];
	
	$msg2 = str_replace(array("\n","\r\n","'","\r"), array('<br>','<br>','',''), strip_tags($desc));
	
	$metaTitle = stripslashes($rowContent[0]['page_meta_title']);
	$metaDesc = stripslashes($rowContent[0]['page_meta_desc']);
	$metaKey = stripslashes($rowContent[0]['page_meta_keywords']);
	
	$cord = explode(',',stripslashes($rowContent[0]['cord']));
	$fldproperty_latitude = $cord[0];
	$fldproperty_longitude = $cord[1];
	$srcBan=$siteURL."timthumb/scripts/timthumb.php?src=".$FRONT_CONTENT_IMGPATH.$rowContent[0]['page_photo3']."&w=980&h=230&zc=1";
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<title><?php echo $metaTitle; ?> - <?php echo $TITLE; ?></title>
<meta name="desription" content= "<?php echo $metaDesc; ?> - <?php echo $DESC; ?>"/>
<meta name="keywords" content="<?php echo $metaKey; ?> - <?php echo $KEY; ?>"/>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<?php
require_once('inc.css.php');
require_once('inc.js.php');
?>
<script language="javascript" type="text/javascript">
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

<body>
<div id="wrapper">
<!--section header-->
	<?php require_once('inc.header.php'); ?>
    <!--section header -->
    <!--section banner -->
  	<section id="inside">
        <img src="<?php if($rowContent[0]['page_photo3']!="") {echo $srcBan;} else { ?>images/inner_banner.jpg<?php } ?>">
    	<?php
		require_once('inc.search.php');
		?>
    </section>
    <!--section banner -->
    <!--section news -->
    <?php require_once('inc.news.php'); ?>
    <!--section news -->
     <!--section inner content-->
     <section id="inner_content">
     	<div class="inc_left">
        	<h1>Contact us</h1>
            <div class="breadcrumbs">
            	<ul>
                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>
                    <li><a class="bread_active"><?php echo $pageTitle; ?></a></li>
                </ul>
                <div class="bread_mail">
                	<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox">Email</a>
                    <!--<a class="br_print" href="#">print</a>-->
                </div>
            </div>
            <div class="contact_wrap">
                     <div class="contact_left">
                          <h3>Make an Enquiry</h3>
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
              <form method="post" name="frmEnquiry" id="frmEnquiry">
              	
                <ul>
               	  <li><label>Your Name <img style="width:auto; float:none;" src="images/mandatory.gif" alt="" />                   		
                    	</label>
                	<input type="text" id="txtNam" name="txtNam" class="required" value="<?php echo $name; ?>">
               	  </li>
                	
                    <li class="half"><label>Email<img style="width:auto; float:none;" src="images/mandatory.gif" alt="" />        
                    		
                    	</label>
                    	<input type="text" id="txtMail" name="txtMail" class="required email" value="<?php echo $email; ?>">
                    </li>
                    <li style="float:right;" class="half">
                    <label>Telephone<img style="width:auto; float:none;" src="images/mandatory.gif" alt="" />                    	</label>
                    	<input type="text" id="txtPh" name="txtPh" class="required number" value="<?php echo $phoneno; ?>">
                    </li>
                     <li>
                         <label>country</label>
                                     <select name="country" id="country" style="width:309px;">    
                                     <option value="">Country</option>   
                                     <?php
									 $sqlCou = "SELECT * FROM countrylist WHERE is_active = 'Y' ORDER BY country_name";
									 $resCou = $obj->select($sqlCou);
									 foreach($resCou as $rowCou)
									 {
									 ?>      
                                     <option value="<?php echo $rowCou['country_name']; ?>" <?php if($rowCou['country_name']==$country) { ?> selected="selected"<?php }
                                     ?>><?php echo $rowCou['country_name']; ?></option>    
                                     <?php
									 }
									 ?>         
                                    </select> 
                                </li>
                    
                    <li><label>Subject<img style="width:auto; float:none;" src="images/mandatory.gif" alt="" />      
                    		
                    	</label>
                	<input type="text" id="txtSub" name="txtSub" class="required" value="<?php echo $sub; ?>">
               	  </li>
                  <li id="area"><label>Message<img style="width:auto; float:none;" src="images/mandatory.gif" alt="" />     
                    		
                    	</label>
                    <textarea id="txtMsg" rows="" cols="" name="txtMsg" class="required"><?php echo $msg; ?></textarea>
                  </li>
                  <li class="last">
                    <label>Security code (Calculate the below code)                     </label>
                  	 <img src="captcha/image.php" alt="Click to reload image" title="Click to reload image"  style="float: left; margin-right: 9px; margin-top: 3px;" id="captcha" onClick="javascript:reloadCaptcha()"/> 
                     <!--<img src="CaptchaSecurityImages.php?width=69&height=23&characters=4" style="float: left; margin-right: 9px; margin-top: 3px;" id="captcha" />-->
                     <input type="text" id="txtCode" name="txtCode" style="margin-left:0px;">
                     <input type="image"  src="images/submit.gif" class="searchbtn" id="butSub" name="butSub" style="padding:0px; width:72px; height:25px; ">
                  </li>
                </ul>
                </form>
            <?php
			}
			?>
   			  </div>
                        <div class="contact_right">
                            <h3>Contact information</h3>
			<?php
			echo $desc;
			?>
            <?php
			if(	$fldproperty_latitude != "" and $fldproperty_longitude != "")
			{

			?>
            <h2>   
            <span>location map</span>
        </h2>
<div style="float:left; width:100%;">
<a href="map-popup.php?latitude=<?php echo $fldproperty_latitude; ?>&longitude=<?php echo $fldproperty_longitude; ?>&msg=<?php echo $msg2; ?>&TB_iframe=true&height=420&width=625"rel="sexylightbox"><img src="images/map.jpg"></a>
        <!--<div id="map_canvas" style="width:328px; height:249px; float:left;"></div> -->
                        </div>  
                        <?php
						}
						?>                          
                            </div>
              		  </div>
        </div>
        <?php require_once('inc.right.php'); ?>
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