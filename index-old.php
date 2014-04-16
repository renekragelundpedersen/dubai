<?php
require_once('connect.php');
$currentFile = $_SERVER["PHP_SELF"];
$parts = Explode('/', $currentFile);
$pag = $parts[count($parts) - 1];
$tab = isset($_REQUEST['tab'])?$_REQUEST['tab']:1;
$indextoppad =' style="top:255px;"';
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<title><?php echo $TITLE; ?></title>
<meta name="desription" content="<?php echo $DESC; ?>"/>
<meta name="keywords" content="<?php echo $KEY; ?>"/>
<link rel="shortcut icon" type="image/x-icon" href="<?php echo $siteURL; ?>images/favicon.ico">
<?php
require_once('inc.css.php');
require_once('inc.js.php');
?>
</head>
<body>
<div id="wrapper">
  <!--section header-->
  <?php  require_once('inc.header.php'); ?>
  <!--section header -->
  <!--section banner -->
  <section id="banner">
    <div class="banner">
      <div id="container" class="clearfix">
        <div id="slideshow" class="clearfix">
          <div id="slider" class="clearfix">
            <?php
                $sqlBanner = "SELECT * FROM index_large_banners WHERE is_active = 'Y'";
                $resBanner = $obj->select($sqlBanner);
                foreach($resBanner as $rowBanner)
                {
                $srcBan = SERVER_URL."timthumb/scripts/timthumb.php?src=".$FRONT_BANNER_LARGE_IMGPATH.$rowBanner['banner_large_photo']."&w=980&h=434&zc=1";
                ?>
            <a href="#" rel="bookmark" > <img src="<?php echo $srcBan; ?>" alt="<?php echo $TITLE; ?>"  /> </a>
            <?php
				}
				?>
          </div>
        </div>
      </div>
    </div>
    <div class="top-banner">
      <p>New exclusive projects in Burj<br>
        Khalifa area and Palm Jumeirah</p>
      <a href="register.php?TB_iframe=true&height=595&width=307" rel="sexylightbox"><img src="images/register-now.png" alt=""></a> </div>
    <?php require_once('inc.search.php'); ?>
  </section>
  <!--section banner -->
  <!--section news -->
  <?php require_once('inc.news.php'); ?>
  <!--section news -->
  <!--featurd_list -->
  <div class="featurd_list">
    <ul>
      <li><a href="<?php echo $siteURL; ?>sell-property.php"><img src="images/listur.jpg">
        <p>List your property with us</p>
        </a></li>
      <li><a href="<?php echo $siteURL; ?>sell-valuation.php"><img src="images/property.jpg">
        <p>property valuation services</p>
        </a></li>
      <li><a href="<?php echo $siteURL; ?>content.php?content=open-house-calendar"><img src="images/open.jpg">
        <p>open house calendar</p>
        </a></li>
    </ul>
  </div>
  <!--featurd_list -->
  <!--section slider-->
  <section id="slider{">
    <div class="tab-wrap2">
      <h2>Featured Properties</h2>
      <ul class="tab-nav2">
        <li class="active"> <a href="#tab3">property for rent</a></li>
        <li><a href="#tab4">property for sale</a></li>
      </ul>
      <div class="tab-container2">
        <div  id="tab3" class="tab-content2">
          <div class="sliding">
            <ul id="mycarousel" class="jcarousel-skin-tango">
              <?php
								$sqlRen = "SELECT * FROM property_master WHERE is_active = 'Y' AND is_hot = 'Y' AND is_rejected = 'N' AND is_sold = 'N' AND prop_for_id = 'rent' ";
								$resRen = $obj->select($sqlRen);
								$i=1;
								foreach($resRen as $rowRen)
								{
								$propid = $rowRen['prop_id'];
								$loc = $rowRen['development'];
								
								$sqlImg2 = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
								$rowImg2 = $obj->select($sqlImg2);
								$count=count($rowImg2);
								if($count>0)
								{
								$sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
								$rowImg = $obj->select($sqlImg);
								}
								else
								{
								$sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' LIMIT 0,1";
								$rowImg = $obj->select($sqlImg);
								 }
								
								
								if($rowRen['prop_for_id']=='sales')
								{
								$priceRen = $rowRen['prop_price'];
								}
								else
								{
								$priceRen = $rowRen['annual_rent'];
								}
								$sqlLoc = "SELECT * FROM property_developments WHERE is_active = 'Y' AND id = '$loc'";
								$rowLoc = $obj->select($sqlLoc);
								?>
              <li> <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowRen['slug']; ?>">
                <?php
										if($rowImg[0]['image_name']!="")
										{
										$srcRen =$rowImg[0]['image_name'];
										}
										else
										{
										$srcRen =$siteURL."timthumb/scripts/timthumb.php?src=images/noimage.jpg&w=304&h=268&zc=1";
										}
										?>
                <img src="<?php echo $srcRen; ?>" alt="" width="304" height="268" /> </a> <span>
                <h2>AED <?php echo number_format($priceRen,0,'',','); ?>
                  <?php if($rowRen['prop_for_id']=='rent') { echo " / ".$rowRen['period']; } ?>
                </h2>
                <p><?php echo stripslashes($rowRen['prop_name']); ?></p>
                </span> </li>
              <?php
							}
							?>
            </ul>
          </div>
        </div>
        <div  id="tab4" class="tab-content2">
          <div class="sliding">
            <ul id="mycarousel2" class="jcarousel-skin-tango">
              <?php
								$sqlSal = "SELECT * FROM property_master WHERE is_active = 'Y' AND is_hot = 'Y' AND is_rejected = 'N' AND is_sold = 'N' AND prop_for_id = 'sales' ";
								$resSal = $obj->select($sqlSal);
								$i=1;
								foreach($resSal as $rowSal)
								{
								$propid = $rowSal['prop_id'];
								$loc = $rowSal['development'];
								$sqlImg2 = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
								$rowImg2 = $obj->select($sqlImg2);
								
								if($count>0)
								{
								$sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
								$rowImg = $obj->select($sqlImg);
								}
								else
								{
								$sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' LIMIT 0,1";
								$rowImg = $obj->select($sqlImg);
								 }
								if($rowSal['prop_for_id']=='sales')
								{
								$priceSal = $rowSal['prop_price'];
								}
								else
								{
								$priceSal = $rowSal['annual_rent'];
								}
								$sqlLoc = "SELECT * FROM property_developments WHERE is_active = 'Y' AND id = '$loc'";
								$rowLoc = $obj->select($sqlLoc);
								?>
              <li> <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowSal['slug']; ?>">
                <?php
										if($rowImg[0]['image_name']!="")
										{
										$srcSal =$rowImg[0]['image_name'];
										}
										else
										{
										$srcSal =$siteURL."timthumb/scripts/timthumb.php?src=images/noimage.jpg&w=304&h=268&zc=1";
										}
										?>
                <img src="<?php echo $srcSal; ?>" alt="" width="304" height="268" /> </a> <span>
                <h2>AED <?php echo number_format($priceSal,0,'',','); ?>
                  <?php if($rowSal['prop_for_id']=='rent') { echo " / ".$rowSal['period']; } ?>
                </h2>
                <p><?php echo stripslashes($rowSal['prop_name']); ?></p>
                </span> </li>
              <?php
							}
							?>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--section slider-->
  <div class="about">
    <h2>Your <span> Preferred</span> Real Estate Agent</h2>
    <?php
		$sqlAbt = "SELECT * FROM content WHERE is_active = 'Y' AND slug = 'about-us'";
		$rowAbt = $obj->select($sqlAbt);
        echo '<p>'.wordLimiter(stripslashes(strip_tags($rowAbt[0]['page_desc'])),117).'</p>';
		?>
    <a href="<?php echo $siteURL; ?>content.php?content=<?php echo $rowAbt[0]['slug']; ?>">Read more</a> </div>
  <!--section footer-->
  <?php
	 require_once('inc.footer.php');
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