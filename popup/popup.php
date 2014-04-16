<?php
require_once('../connect.php');
$pid = $_REQUEST['pid'];
?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<meta content="charset=utf-8">
	<title>FlexSlider 2</title>
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
	

  <!-- Demo CSS -->
	<link rel="stylesheet" href="popup/css/demo.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="popup/css/flexslider_new.css" type="text/css" media="screen" />
	
	<!-- Modernizr -->
  <script src="js/modernizr.js"></script>
  
</head>
<body class="loading" style="background:#000;">
<a class="close" href="#"></a>
  <div id="container" class="cf">
    <div id="main" role="main">
      <section class="slider">
        <div id="slider" class="flexslider">
        <?php
        $sqlImg = "SELECT * FROM property_image_master WHERE prop_ref_id = '$pid' ORDER BY display_order";
        $resImg = $obj->select($sqlImg);
        $couimg = $obj->affected($sqlImg);
        if($couimg > 0)
        {
		?>
          <ul class="slides">
           <?php
        foreach($resImg as $rowImg)
        {
        	$srcImg = $siteURL."timthumb/scripts/timthumb.php?src=".$FRONT_PROP_IMGPATH.$rowImg['image_name']."&w=952&h=500&zc=1";
		?> 
            <li>
            
  	    	    <img src="<?php echo $srcImg; ?>" />
  	    		</li>
  	    		
  	    <?php
        }
  	    ?>		
  	    		
  	    		<!--<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>
            <li>
  	    	    <img src="popup/images/kitchen_adventurer_cheesecake_brownie.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>
            <li>
  	    	    <img src="popup/images/kitchen_adventurer_cheesecake_brownie.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>-->
  	    		</ul>
  	    	<?php
        }
  	    	?>	
  	    		
          
        </div>
        <div id="carousel" class="flexslider">
          <ul class="slides">
           <?php
        foreach($resImg as $rowImgs)
        {
        	$srcImgsa = $siteURL."timthumb/scripts/timthumb.php?src=".$FRONT_PROP_IMGPATH.$rowImgs['image_name']."&w=255&h=255&zc=1";
		?> 
            <li>
  	    	    <img src="<?php echo $srcImgsa;?>" />
  	    		</li>
  	    		<?php
        }
  	    		?>
  	    		
  	    		<!--<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>
            <li>
  	    	    <img src="popup/images/kitchen_adventurer_cheesecake_brownie.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>
            <li>
  	    	    <img src="popup/images/kitchen_adventurer_cheesecake_brownie.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_lemon.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_donut.jpg" />
  	    		</li>
  	    		<li>
  	    	    <img src="popup/images/kitchen_adventurer_caramel.jpg" />
  	    		</li>-->
          </ul>
        </div>
      </section>
    </div>
  
  </div>
  
  <!-- jQuery -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.min.js">\x3C/script>')</script>
  
  <!-- FlexSlider -->
  <script defer src="popup/js/jquery.flexslider.js"></script>
  
  <script type="text/javascript">
  jQuery(document).ready(function($) {
// Code using $ as usual goes here.

   
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 100,
        itemMargin: 5,
        asNavFor: '#slider'
      });
      
      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    
	
	
	$(".close").click(function () { 
		$('body').removeClass('no-scroll');						
        $(".photo-pop").hide();
    });
	
	
	
	
	});
  </script>



  
  <!-- Optional FlexSlider Additions -->
  <script src="popup/js/jquery.easing.js"></script>
  <script src="popup/js/jquery.mousewheel.js"></script>

  
</body>
</html>