<?php
require_once('connect.php');

$currentFile = $_SERVER["PHP_SELF"];
$parts = Explode('/', $currentFile);
$pag = $parts[count($parts) - 1];

$tab = isset($_REQUEST['tab'])?$_REQUEST['tab']:1;	
$key = $_REQUEST['txtKey'];
$type = $_REQUEST['type'];
$community = $_REQUEST['community'];
	$page2 = $_REQUEST['page2'];
	$range = $_REQUEST['range'];
	$typecat = $_REQUEST['typecat'];

if($tab==1)
{
$priceRent = $_REQUEST['priceRent'];
$cmb_price1 = explode('-',$_REQUEST['priceRent']);
$cmb_bedrent = ($_REQUEST['bedroom']!="")?$_REQUEST['bedroom']:$_REQUEST['bedRent'];

$cmb_bed = explode('-',($_REQUEST['bedroom']!="")?$_REQUEST['bedroom']:$_REQUEST['bedRent']);

$minbed = $cmb_bed[0];
$maxbed = $cmb_bed[1];
$minrentPrice = $cmb_price1[0]*1000;
$maxrentPrice = $cmb_price1[1]*1000;
}
if($tab==2)
{
$priceSale = $_REQUEST['priceSale'];
$cmb_price2 = explode("-",$_REQUEST['priceSale']);
$cmb_bedsale = ($_REQUEST['bedroom']!="")?$_REQUEST['bedroom']:$_REQUEST['bedSale'];

$cmb_bed = explode('-',($_REQUEST['bedroom']!="")?$_REQUEST['bedroom']:$_REQUEST['bedSale']);
$minbed = $cmb_bed[0];
$maxbed = $cmb_bed[1];
$minsalePrice = $cmb_price2[0]*1000000;
$maxsalePrice = $cmb_price2[1]*1000000;
}

$sqlQry = "SELECT p.* FROM property_master p LEFT JOIN property_type_master t ON p.type_ref_id=t.typeid LEFT JOIN bedrooms b ON b.bed_id=p.no_beds LEFT JOIN city c ON p.city=c.city_id LEFT JOIN property_developments d ON p.development=d.id WHERE p.is_active = 'Y' AND p.is_sold = 'N' AND p.is_rejected = 'N' AND ";
$qstr = "&tab=$tab";

if($type!="")
{
$sqlQry .= "p.type_ref_id = '$type' AND ";
$qstr = "&type = $type";
}

if($typecat!="")
{
$sqlQry .= "t.propcat = '$typecat' AND ";
$qstr = "&typecat=$typecat";
}


if($community!="")
{
$sqlQry .= "p.development = '$community' AND ";
$qstr = "&community = $community";
}

if($key!="Your Keyword here")
{
$sqlQry .= "(c.city_name LIKE '%$key%' OR d.name LIKE '%$key%') AND ";
$qstr .= "&txtKey=$key";
}

if($tab==1)
{
$sqlQry .= "p.prop_for_id = 'rent' AND ";
$qstr .= "&tab=$tab";
}
if($tab==2)
{
$sqlQry .= "p.prop_for_id = 'sales' AND ";
$qstr .= "&tab=$tab";
}


if($tab==1 and $typecat=="")
{
$sqlQry .= "p.annual_rent > $minrentPrice AND p.annual_rent < $maxrentPrice AND ";
$qstr .= "&priceRent=$priceRent";

$sqlQry .= "b.bed_val >= $minbed AND b.bed_val <= $maxbed AND ";
$qstr .= "&bedRent=$cmb_bedrent";

}
if($tab==1 and $typecat!="")
{
if($minbed!="")
{
$sqlQry .= "b.bed_val >= $minbed AND b.bed_val <= $maxbed AND ";
$qstr .= "&bedRent=$cmb_bedrent";
}
}


if($tab==2 and $typecat=="")
{
$sqlQry .= "p.prop_price > $minsalePrice AND p.prop_price < $maxsalePrice AND ";
$qstr .= "&priceSale=$priceSale";

$sqlQry .= "b.bed_val >= $minbed AND b.bed_val <= $maxbed AND ";
$qstr .= "&bedSale=$cmb_bedsale";
}

if($tab==2 and $typecat!="")
{
if($minbed!="")
{
$sqlQry .= "b.bed_val >= $minbed AND b.bed_val <= $maxbed AND ";
$qstr .= "&bedSale=$cmb_bedsale";
}
}


	if($page2!="")
	{
	$qstr .= "&page2=$page2";
	}


$sqlQry .= "1";

	if($range!="")
	{
	if($range==1 and $tab==2)
	{
	$sqlQry .= " ORDER BY prop_price DESC";
	}
	if($range==2 and $tab==2)
	{
	$sqlQry .= " ORDER BY prop_price ASC";
	}
	if($range==1 and $tab==1)
	{
	$sqlQry .= " ORDER BY annual_rent DESC";
	}
	if($range==2 and $tab==1)
	{
	$sqlQry .= " ORDER BY annual_rent ASC";
	}
	$qstr .= "&range=$range";
	}


//echo $sqlQry;


$limit = ($page2!="")?$page2:$rec_page;
//$limit=1;
$page = $_REQUEST['page'];
if(empty($page)) $page = 1;
$slno=($page-1)*$limit+1; 
$tips = $obj->select($sqlQry);
$total = count($tips);
$pager  = Pagery::getPagerData($total, $limit, $page);
$offset =  ($pager->offset >0 ) ? $pager->offset : 0; 
$limit  = ($pager->limit) ? $pager->limit : 1; 
$page   = $pager->page;  
$resQry  = $obj->select($sqlQry . " LIMIT $offset, $limit" );
$pagetotal = ceil($total/$limit);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Property Listing - <?php echo $TITLE; ?></title>
<meta name="desription" content= "Property Listing - <?php echo $DESC; ?>"/>
<meta name="keywords" content="Property Listing - <?php echo $KEY; ?>"/>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<?php
require_once('inc.css.php');
require_once('inc.js.php');
?>
</head>

<body>
<div id="wrapper">
<!--section header-->
	<?php require_once('inc.header.php'); ?>
    <!--section header -->
    <!--section banner -->
  	<section id="inside">
    	<img src="images/listing.jpg">
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
        	<h1>Found <?php echo $total; ?> properties for <?php if($tab==1) { echo "Rent"; } else { echo "Sale"; } ?></h1>
            <div class="breadcrumbs">
            	<ul>
                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>
                    <li><a class="bread_active">Properties for <?php if($tab==1) { echo "Rent"; } else { echo "Sale"; } ?></a></li>
                </ul>
                <div class="bread_mail">
                	<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307" rel="sexylightbox">Email</a>
                    <!--<a class="br_print" href="#">print</a>-->
                </div>
            </div>
            <div class="refine">
              <form name="refine" id="refile" method="post" action="listing.php?<?php echo $qstr; ?>">
            	<ul class="ref">
                	<li class="reference">Refine search</li>
                    <li>
                    	<label>By Price Range</label>
                                        <select name="range" id="sell" onChange="document.refine.submit();" style=" background:#fff;">
                                        <option value=""> By Price Range</option>
                                        <option value="1" <?php if($range==1) { ?> selected<?php } ?>>Highest price first</option>
                                        <option value="2" <?php if($range==2) { ?> selected<?php } ?>>Lowest price first</option>
                                        </select>
                   </li>
                   <li>
                    	<label>Bedrooms</label>
                        <select id="bedroom" name="bedroom" style=" background:#fff;" onChange="document.refine.submit();">
                          <option value="">Please Select</option>
                          <option value="0-4" <?php if($_REQUEST['bedroom']=='0-4') { ?> selected<?php } ?>>0-4</option>
                          <option value="4-8" <?php if($_REQUEST['bedroom']=='4-8') { ?> selected<?php } ?>>4-8</option>
                          <option value="8-10" <?php if($_REQUEST['bedroom']=='8-10') { ?> selected<?php } ?>>8-10</option>
                        </select>
                   </li>
                   <li>
                    	<label>Properties Per Page</label>
                                        <select name="page2" id="page2" onChange="document.refine.submit();" style=" background:#fff;">
                                        <option value="">Page</option>
                                        <option value="10" <?php if($page2==10) { ?> selected<?php } ?>>10</option>
                                        <option value="15" <?php if($page2==15) { ?> selected<?php } ?>>15</option>
                                        <option value="25" <?php if($page2==25) { ?> selected<?php } ?>>25</option>
                                        <option value="30" <?php if($page2==30) { ?> selected<?php } ?>>30</option>
                                        </select>
                   </li>
                </ul>
            </form>
            </div>
            <div class="listing">
            <ul>
                   <?php
				   if($total > 0)
				   {
				   foreach($resQry as $rowQry)
				   {
				   				$propid = $rowQry['prop_id'];
								$loc = $rowQry['development'];
								$bedid = $rowQry['no_beds'];
								$sqlBed = "SELECT * FROM bedrooms WHERE is_active = 'Y' AND bed_id = '$bedid'";
								$rowBed = $obj->select($sqlBed);
								$bathid = $rowQry['no_bathrooms'];
								$sqlBath = "SELECT * FROM bathrooms WHERE is_active = 'Y' AND bath_id = '$bathid'";
								$rowBath = $obj->select($sqlBath);
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
								if($rowQry['prop_for_id']=='sales')
								{
								$price = $rowQry['prop_price'];
								}
								else
								{
								$price = $rowQry['annual_rent'];
								}
								$sqlLoc = "SELECT * FROM property_developments WHERE is_active = 'Y' AND id = '$loc'";
								$rowLoc = $obj->select($sqlLoc);
				   ?>
            	<li>
                	<div class="listing_images">
                            <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowQry['slug']; ?>&tab=<?php echo $tab; ?>">
                                        <?php
										if($rowImg[0]['image_name']!="")
										{
										$srcImg = $rowImg[0]['image_name'];
										}
										else
										{
										$srcImg =$siteURL."timthumb/scripts/timthumb.php?src=images/noimage.jpg&w=225&h=152&zc=1";
										}
										?>
                            <img src="<?php echo $srcImg; ?>" width="225" height="152">
                            </a>
                        <span>AED <?php echo number_format($price,0,'',','); ?></span>
                    </div>
                    <div class="listing_test">
                    	<a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowQry['slug']; ?>&tab=<?php echo $tab; ?>"><h3><?php echo stripslashes($rowQry['prop_name']); ?></h3></a>
                                <?php 
								if($rowLoc[0]['name']!="")
								{
								?>
                        <p><label>Location:</label> <span><?php echo stripslashes($rowLoc[0]['name']); ?></span></p>
                                  <?php
								  }
								  ?>
                                  <?php
								  if($rowQry['total_area']!="")
								  {
								  ?>
                        <p><label>Approx. Size:</label> <span><?php echo $rowQry['total_area']; ?> sq.ft</span></p>
								<?php
                                }
                                ?>
                                  <?php
								  if($rowQry['view']!="")
								  {
								  ?>
                        <p><label>View:		</label> <span><?php echo $rowQry['view']; ?></span></p>
								<?php
                                }
                                ?>
                        <p><label>Unit ref. no.:	</label> <span><?php echo $rowQry['prop_ref_no'] ?></span></p>
                        <p>
						<?php if($rowBed[0]['bed_val']!="") { ?>                        
                        <a href="" class="bedroom"><?php echo $rowBed[0]['bed_val']; ?> Bedroom</a>
                        <?php } ?>
                                  <?php
								  if($rowBath[0]['bath_val']!="")
								  {
								  ?>
                        <a href="" class="bathroom"><?php echo $rowBath[0]['bath_val']; ?> Bathroom</a>
                                  <?php
								  }
								  ?>
                                  <?php
								  if($rowQry['parking']!=0)
								  {
								  ?>
                        <a href="" class="parking"><?php echo $rowQry['parking']; ?> Parking</a>
                        		<?php
								}
								?>
                                </p>
                        <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowQry['slug']; ?>&tab=<?php echo $tab; ?>" class="vew">
                        <img src="images/view_details.png" onMouseOver="this.src='images/view_details_hvr.png'" onMouseOut="this.src='images/view_details.png'">                        </a>
                        <!--<a rel="sexylightbox" href="<?php echo $siteURL; ?>make-offer.php?ref=<?php echo $rowQry['prop_ref_no']; ?>&agent=<?php echo $rowQry['prop_agent_id']; ?>&price=<?php echo $price; ?>&TB_iframe=true&height=550&width=670" class="vew"><img src="images/make_n_offer.png" onMouseOver="this.src='images/make_n_offer_hvr.png'" onMouseOut="this.src='images/make_n_offer.png'"></a>--><!--<a class="vew"><img src="images/links.png"></a>-->
                    </div>
                </li>
                        <?php
						}
						}
						else
						{
						?>
                        <li>No data found</li>
                        <?php
						}
						?>
                
                
            </ul> 
             		<div class="pagination">
                    <?php if($total > $limit ) echo paginationNew(ceil($total/$limit), $page, $qstr); ?>
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