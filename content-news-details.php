<?php

require_once("connect.php");

    $currentFile = $_SERVER["PHP_SELF"];

    $parts = Explode('/', $currentFile);

    $pag = $parts[count($parts) - 1];



$fldimg_path="images/news/thumb/";

$pid = $_REQUEST['nid'];

$news = $obj->select("SELECT * FROM content WHERE slug ='$pid'");

$date	= date('d M Y', strtotime($news[0]['added_on']));

?>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">

<title><?php echo $news[0]['pagename']; ?> - <?php echo $TITLE; ?></title>

<meta name="desription" content= "<?php echo $news[0]['pagename']; ?> - <?php echo $DESC; ?>"/>

<meta name="keywords" content="<?php echo $news[0]['pagename']; ?> - <?php echo $KEY; ?>"/>

<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">

<?php

require_once('inc.css.php');

require_once('inc.js.php');

?>

<script language="javascript" type="text/javascript">

function PrintContent(pass) 

{

    var DocumentContainer = document.getElementById('print');

    var WindowObject = window.open('<?php echo $siteURL; ?>print5.php?'+pass+'=<?php echo $pid?>', 'PrintWindow', 'width=720,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes');

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

                	<li><a class="bread_active" href="<?php echo $siteURL; ?>content-news.php">News</a></li>

                    <li><a class="bread_active"><?=stripslashes($news['0']['pagename'])?></a></li>

                </ul>

                <div class="bread_mail">

                	<a class="br_mail" href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox">Email</a>

                    <!--<a class="br_print" href="#" onClick="PrintContent('<?php //echo $pi; ?>');">print</a>-->

                </div>

            </div>

            <div class="page">

<ul class="newsdetails">

          <li style="background:none;">

            <h2><?=stripslashes($news['0']['pagename'])?></h2><span><?php echo $date; ?></span>

            <?php if($news[0]['page_photo']) 

			{ 

					$srcNews =$siteURL."timthumb/scripts/timthumb.php?src=".$FRONT_CONTENT_IMGPATH.$news[0]['page_photo']."&w=350&h=225&zc=1";

			?>

            <span class="im" style="float:left;"><img src="<?php echo $srcNews; ?>" border="0" >

            </span><?php } ?>

            <a style="width:100%; padding-top:15px; float:left;" href="javascript:history.back();"><img src="images/back.jpg"></a> 

            <p><?=stripslashes($news['0']['page_desc'])?></p>

            </li>

        </ul>

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

