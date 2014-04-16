<?php

require_once('connect.php');

    $currentFile = $_SERVER["PHP_SELF"];

    $parts = Explode('/', $currentFile);

    $pag = $parts[count($parts) - 1];


$sqlNews = "SELECT * FROM content WHERE parentid = 80 AND is_active = 'Y' ORDER BY added_on DESC";

//$resSub = $obj->select($sqlSub);

$limit = $rec_page;

//$limit=2;

$page = $_REQUEST['page'];

if(empty($page)) $page = 1;

$slno=($page-1)*$limit+1; 

$tips = $obj->select($sqlNews);

$total = count($tips);

$pager  = Pagery::getPagerData($total, $limit, $page);

$offset =  ($pager->offset >0 ) ? $pager->offset : 0; 

$limit  = ($pager->limit) ? $pager->limit : 1; 

$page = $pager->page;  

$resNews  = $obj->select($sqlNews . " LIMIT $offset, $limit" );

?>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<title>News - <?php echo $TITLE; ?> </title>

<meta name="desription" content= "News - <?php echo $DESC; ?> "/>

<meta name="keywords" content="News - <?php echo $KEY; ?> "/>

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

        <img src="<?php if($rowContent[0]['page_photo3']!="") {echo $srcBan;} else { ?>images/inner_banner.jpg<?php } ?>">

  	    <?php require_once('inc.search.php'); ?>

    </section>

    <!--section banner -->

    <!--section news -->

    <?php require_once('inc.news.php'); ?>

    <!--section news -->

     <!--section inner content-->

     <section id="inner_content">

     	<div class="inc_left">

        	<h1>News</h1>

            <div class="breadcrumbs">

            	<ul>

                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>

                    <li><a class="bread_active">News</a></li>

                </ul>

                <div class="bread_mail">

                	<a href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox" class="br_mail">Email</a>

                    <!--<a class="br_print" href="#">print</a>-->

                </div>

            </div>

            <div class="news">

                <ul>

				  <?php  if(!empty($tips)) 

                  { 

                    foreach ($resNews as $newsItem) 

                    {

                        $fldnews_photo = stripslashes($newsItem['page_photo']);

                  ?>

                	<li>

                    	<div class="list_images">

						   <?php if($fldnews_photo) 

                           { 

                                    $srcNews =$siteURL."timthumb/scripts/timthumb.php?src=".$FRONT_CONTENT_IMGPATH.$fldnews_photo."&w=226&h=154&zc=1";

                           ?> 

                

                           <a href="<?php echo SERVER_URL.'content-news-details.php?nid='.$newsItem['slug']?>"><img src="<?php echo $srcNews; ?>" border="0" ></a>

                           <?php } else 

                           { 

                                    $srcNews =$siteURL."timthumb/scripts/timthumb.php?src=images/noimage.jpg&w=226&h=154&zc=1";

                           ?>

                           <a href="<?php echo SERVER_URL.'content-news-details.php?nid='.$newsItem['slug']?>"><img src="<?php echo $srcNews; ?>" border="0" ></a>

                           <?php

                           }

                           ?>

                        </div>

                        <div class="list_content">

                        	<h4><a style="background:none; padding:0px;" href="<?php echo SERVER_URL.'content-news-details.php?nid='.$newsItem['slug']?>"><?php echo stripcslashes($newsItem['pagename'])?></a></h4>

                            <p><?php echo wordLimiter(stripslashes(strip_tags($newsItem['page_desc'])),50);?></p>

             				<a href="<?php echo SERVER_URL.'content-news-details.php?nid='.$newsItem['slug']?>">Read more</a>

                        </div>

                    </li>

                    <?php

					}

					}
					else
					{

					?>
                    <li>No Data Found</li>
                    <?php
					}
					?>

                 

                </ul>

        <div class="pagination">

        <?php if($total > $limit ) echo paginationNew(ceil($total/$limit), $page, ''); ?>

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

