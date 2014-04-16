<?php
session_start();
require_once('connect.php');
    $currentFile = $_SERVER["PHP_SELF"];
    $parts = Explode('/', $currentFile);
    $pag = $parts[count($parts) - 1];
	$tab = $_REQUEST['tab'];
	
	$pid = $_REQUEST['pid'];
	
	$sqlQry = "SELECT * FROM property_master WHERE is_active = 'Y' AND is_sold = 'N' AND is_rejected = 'N' AND slug = '$pid'";
	$rowQry = $obj->select($sqlQry);
	
	$hit = $rowQry[0]['hitcount'];
	
	$hit++;
	
	$sqlUp = "UPDATE property_master SET hitcount = '$hit' WHERE slug = '$pid'";
	mysql_query($sqlUp);
	
								$loc = $rowQry[0]['development'];
								$propid = $rowQry[0]['prop_id'];
								$bedid = $rowQry[0]['no_beds'];
								$sqlBed = "SELECT * FROM bedrooms WHERE is_active = 'Y' AND bed_id = '$bedid'";
								$rowBed = $obj->select($sqlBed);
								$bathid = $rowQry[0]['no_bathrooms'];
								$sqlBath = "SELECT * FROM bathrooms WHERE is_active = 'Y' AND bath_id = '$bathid'";
								$rowBath = $obj->select($sqlBath);
								$sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' ORDER BY display_order";
								$resImg = $obj->select($sqlImg);
								$imgcou = $obj->affected($sqlImg);
								if($rowQry[0]['prop_for_id']=='sales')
								{
								$price = $rowQry[0]['prop_price'];
								}
								else
								{
								$price = $rowQry[0]['annual_rent'];
								}
								$sqlLoc = "SELECT * FROM property_developments WHERE is_active = 'Y' AND id = '$loc'";
								$rowLoc = $obj->select($sqlLoc);
								
								$type = $rowQry[0]['type_ref_id'];
								$comunity = $rowQry[0]['development'];
								$city = $rowQry[0]['city'];
								
								$sqlTyp = "SELECT * FROM property_type_master WHERE status = 'Y' AND typeid = '$type'";
								$rowTyp = $obj->select($sqlTyp);
								
								$sqlCom = "SELECT * FROM developments WHERE is_active = 'Y' AND id = '$comunity'";
								$rowCom = $obj->select($sqlCom);
								
								$sqlCit = "SELECT * FROM city WHERE is_active = 'Y' AND city_id = '$city'";
								$rowCit = $obj->select($sqlCit);
								
								$msg2 = $rowQry[0]['prop_name']."<br>".$rowLoc[0]['location_name']."<br>".$rowCit[0]['city_name'];
								
				   $agentid = $rowQry[0]['prop_agent_id'];
				   $sqlAgent = "SELECT * FROM agents_master WHERE is_active = 'Y' AND id = '$agentid'";
				   $rowAgent = $obj->select($sqlAgent);
				   $facilities = explode('<>',$rowQry[0]['prop_facilities']);
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<title><?php echo $TITLE; ?> - <?php echo $rowQry[0]['prop_name']; ?></title>
<meta name="desription" content= "<?php echo $DESC; ?> - <?php echo $rowQry[0]['metadesc']; ?>"/>
<meta name="keywords" content="<?php echo $KEY; ?> - <?php echo $rowQry[0]['metakeywords']; ?>"/>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">

<?php
require_once('inc.css.php');
require_once('inc.js.php');
?>
<script language="javascript" type="text/javascript">
function PrintContent(pass) 
{
    var DocumentContainer = document.getElementById('print');
    var WindowObject = window.open('<?php echo $siteURL; ?>print2.php?pid='+pass, 'PrintWindow', 'width=720,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes');
}
</script>

</head>

<body>
<div id="wrapper" style="width:723px;">
    <div class="header" style="background:#0b1e3e;">

    <img src="images/logo.png">

    </div>

<!--section header-->
	<?php //require_once('inc.header.php'); ?>
    <!--section header -->
    <!--section banner -->
  	<!--<section id="inside">
    	<img src="images/inner_banner.jpg">-->
    	<?php //require_once('inc.search.php'); ?>
    <!--</section>-->
    <!--section banner -->
    <!--section news -->
    <?php //require_once('inc.news.php'); ?>
    <!--section news -->
     <!--section inner content-->
     <section id="inner_content" style="width:723px;">
     	<div class="inc_left">
        	<h1><?php echo stripslashes($rowQry[0]['prop_name']); ?></h1>
            <div class="breadcrumbs">
<!--            	<ul>
                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>
                    <li><a class="bread_active">Properties for <?php echo $rowQry[0]['prop_for_id']; ?></a></li>
                    <li><a class="bread_active"><?php echo stripslashes($rowQry[0]['prop_name']); ?></a></li>
                </ul>
-->                <div class="bread_mail">
                	<!--<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307" rel="sexylightbox">Email</a>-->
                    <a class="br_print" onClick="window.print();">print</a>
                </div>
            </div>
            <div class="details">
            <h2>AED <?php echo number_format($price,','); ?> <?php if($rowQry[0]['prop_for_id']=='rent') { echo " / ".$rowQry[0]['period']; } ?>  <!--<img src="images/details_links.png">--> </h2>
                <?php
				if($imgcou > 0)
				{
				?>
            <div id="details_main">
                  <div id="thumbnails">
                     <div class="mango_jeq">
                     <div id="gallery" class="ad-gallery">
                       <div class="ad-image-wrapper"> </div>
                         <div class="ad-nav">
                           <div class="ad-thumbs">
                             <ul class="ad-thumb-list">
                               <?php
								foreach($resImg as $rowImg)
								{
								$srcImg =$rowImg['image_name'];
								$srcThu =$rowImg['image_name'];
								?>
                               <li>
                                  <a href="<?php echo $srcImg; ?>">
                                  <img src="<?php echo $srcThu; ?>" class="image0" width="90" height="60"> </a> </li>
                                  <?php
								  }
								  ?>
                                </ul>
                              </div>
                            </div>
                          </div>  
                        </div>
                     </div>
                </div>
                <?php
				}
				?>
              <!--<div class="details_lightbox">
                  <ul>
                     <li><a class="mortgage" href="#loc">google location map</a></li>
                     <li><a class="area" rel="sexylightbox" href="<?php echo $siteURL; ?>currency_convertor.php?propprice=<?php echo $price; ?>&amp;?TB_iframe=true&amp;height=350&amp;width=310">Currency Converter</a></li>
                     <li><a class="currency" rel="sexylightbox" href="<?php echo $siteURL; ?>mor_calc/mortgage_calculator.htm?TB_iframe=true&amp;height=390&amp;width=650">Mortgage Calculator</a></li>
                     <li><a class="google" href="<?php echo $siteURL; ?>area_convertor.php?area=<?php echo $rowQry[0]['total_area']; ?>&amp;keepThis=true&amp;TB_iframe=true&amp;height=270&amp;width=310" rel="sexylightbox">Area Converter</a></li>
                  </ul>
             </div>-->
             <div class="property_details">
             	<ul>
                	<h3>property details</h3>
                                <?php
								if($rowCom[0]['name']!="")
								{
								?>
                	<li><label>Location:</label> <span><?php echo $rowCom[0]['name']; ?></span></li>
                                  <?php
								  }
								  ?>
                                <?php
								if($rowQry[0]['total_area']!="")
								{
								?>
                    <li><label>Approx. Size:</label> <span><?php echo $rowQry[0]['total_area']; ?> sq.ft</span></li>
                                <?php
								}
								?>
                                <?php
								if($rowQry[0]['view']!="")
								{
								?>
                    <li><label>View:		</label> <span><?php echo $rowQry[0]['view']; ?></span></li>
                                <?php
								}
								?>
                    <li><label>Unit ref. no.:	</label> <span><?php echo $rowQry[0]['prop_ref_no']; ?></span></li>
                    <li>
                                <?php
								if($rowBed[0]['bed_val']!="")
								{
								?>
                    	<a href="" class="bedroom"><?php echo $rowBed[0]['bed_val']; ?> Bedroom</a>
                                <?php
								}
								?>
                                  <?php
								  if($rowBath[0]['bath_val']!="")
								  {
								  ?>
                        <a href="" class="bathroom"><?php echo $rowBath[0]['bath_val']; ?> Bathroom</a>
                                <?php
								}
								?>
                                <?php
								if($rowQry[0]['parking']!=0)
								{
								?>
                        <a href="" class="parking"><?php echo $rowQry[0]['parking']; ?> Parking</a>
                                <?php
								}
								?>
                    </li>    
                </ul>
                   <?php
				   if($rowQry[0]['prop_agent_id']!=0)
				   {
				   ?>
                <ul style="width:304px; margin-left:20px;">
                	<h3>Contact Details</h3>
                	<li><label style="width:54px;">Agent:</label> <span><?php echo $rowAgent[0]['name']; ?></span></li>
                    <li><label style="width:54px;">Mobile:</label> <span><?php echo $rowAgent[0]['phone']; ?></span></li>
                    <li><label style="width:54px;">Email:</label>
                    <a href="mailto:<?php echo $rowAgent[0]['email']; ?>" style="text-decoration:underline;"><?php echo $rowAgent[0]['email']; ?></a></li>
                </ul>
                   <?php
				   }
				   else
				   {
				   ?>
                <ul style="width:304px; margin-left:20px;">
                	<h3>Administrator</h3>
                    <li><label style="width:54px;">Phone:</label> <span><?php echo $phone; ?></span></li>
                    <li><label style="width:54px;">Email:</label>
                    <a href="mailto:<?php echo $support_Admin; ?>" style="text-decoration:underline;"><?php echo $support_Admin; ?></a></li>
                </ul>
                <?php
				}
				?>
                <p><a rel="sexylightbox" href="<?php echo $siteURL; ?>make-offer.php?ref=<?php echo $rowQry[0]['prop_ref_no']; ?>&agent=<?php echo $rowQry[0]['prop_agent_id']; ?>&price=<?php echo $price; ?>&TB_iframe=true&height=500&width=650"><img src="images/make_an_offer.jpg" 
                    onMouseOver="this.src='images/make_an_offer_hvr.jpg'" 
                    onMouseOut="this.src='images/make_an_offer.jpg'"></a>
                    <a rel="sexylightbox" href="<?php echo $siteURL; ?>make-enquiry.php?ref=<?php echo $rowQry[0]['prop_ref_no']; ?>&TB_iframe=true&height=390&width=585">				<img src="images/enguiry.jpg" onMouseOver="this.src='images/enguiry_hvr.jpg'"
                    onMouseOut="this.src='images/enguiry.jpg'"></a>
                    </p>
             </div> 
             <h3>property description</h3>
                  <?php
				  $a1=array('nbsp;','&','&amp;','amp;');
				  $a2=array('','','','');
				  echo str_replace($a1,$a2,stripslashes($rowQry[0]['prop_desc']));
				  ?> 
                  <?php
				  if(count($facilities)>1)
				  {
				  ?>
            <h3>Facilities</h3>
            	<div class="facilities">
                  <ul>
                  <?php
				  $i=1;
				  foreach($facilities as $facility)
				  {
				  if($i!=1)
				  {
				  ?>
                   <li>Balcony </li>
                  <?php
				  }
				  $i++;
				  }
				  ?>
                  </ul>
                  </div>
                  <?php
				  }
				   $fldproperty_latitude = $rowQry[0]['latitude'];
				   $fldproperty_longitude = $rowQry[0]['longitude'];
				   if($fldproperty_latitude != "" and $fldproperty_longitude != "")
				   {
				  ?>
                              
                        <?php
						}
						?>
            
            
          </div>   
        </div>
        <?php
		//require_once('inc.right.php');
		?>
     </section>
     <!--section inner content-->
     <!--section footer-->
     	<div class="footer" style=" border-top: 2px solid #999999;
    float: left;
    padding: 10px;
    width: 100%;">

		<?php echo $copyright; ?>
        
        </div>

     <?php
	 //require_once('inc.footer.php');
	 ?>
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
