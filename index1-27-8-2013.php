<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<title>Innovate Real Estate</title>
<meta name="desription" content="Innovate Real Estate"/>
<meta name="keywords" content="Innovate Real Estate"/>
<link rel="shortcut icon" type="image/x-icon" href="http://www.innovatedubai.com/images/favicon.ico">
<link rel="stylesheet" type="text/css" href="fonts/stylesheet.css?t=092702">
<link rel="stylesheet" type="text/css" href="css/style.css?t=092702">
<link rel="stylesheet" href="css/droupdown.css?t=092702"  type="text/css" >
<link rel='stylesheet' id='slideshow_custom-css' href='css/custom-nivo-sliderb493.css?ver=1.4.8' type='text/css' media='all' />
<link rel="stylesheet" type="text/css" href="css/dd.css?t=092702" />
<link rel="stylesheet" href="css/demos.css?t=092702" type="text/css">
<link rel="stylesheet" href="css/skin.css?t=092702" type="text/css" />
<link rel="stylesheet" href="css/sexylightbox.css?t=092702" type="text/css" media="all" />
<link rel="stylesheet" type="text/css" href="css/jquery.ad-gallery.css?t=092702">

<!-- stardevelop.com Live Help International Copyright - All Rights Reserved //-->
<!--  BEGIN stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
<script type="text/JavaScript" src="http://innovatedubai.com/livehelp/scripts/jquery-latest.js"></script>
<script type="text/javascript">
<!--
	var LiveHelpSettings = {};
	LiveHelpSettings.server = 'innovatedubai.com';
	LiveHelpSettings.embedded = true;

	(function(d, $, undefined) { 
		$(window).ready(function() {
			var LiveHelp = d.createElement('script'); LiveHelp.type = 'text/javascript'; LiveHelp.async = true;
			LiveHelp.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + LiveHelpSettings.server + '/livehelp/scripts/jquery.livehelp.js';
			var s = d.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(LiveHelp, s);
		});
	})(document, jQuery);
-->
</script>
<!--  END stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
<!--[if lt IE 9]><script src="js/html5shiv.js"></script><![endif]-->
	<script type="text/javascript" src="js/jquery.js?t=092702"></script>
	<script type="text/javascript" src="js/jquery.validate.js?t=092702"></script>
<!--menu-->
    <script type='text/javascript' src='js/droupdown_menu.js?t=092702'></script>
<!--menu-->
<!--select-->
	<script src="js/jquery.dd.min.js?t=092702" type="text/javascript"></script>
<!--select-->
<!--banner-->
<script type='text/javascript' src='js/jquery.nivo.slider.pack7793.js?ver=2.4'></script>
<script type="text/javascript">
        jQuery(window).load(function() {
          jQuery('#slider').nivoSlider({		
           effect:'fade',
           slices:12,			
           pauseTime: 5000, 
           captionOpacity:1,
           manualAdvance:false 
		});
		$("#slider").find("img").css("float","right");
	});
</script>
<!--banner-->
<!--tab-->
	<script type="text/javascript">
    $(document).ready(function() {  
	        $(".tab-content").hide(); 
		$("ul.tab-nav li:last").removeClass("active");        
		$("ul.tab-nav li:first").addClass("active").show(); 
        $(".tab-content:first").show(); 
		        $("ul.tab-nav li").click(function() {
            $("ul.tab-nav li").removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            var activeTab = $(this).find("a").attr("href");
            $(activeTab).fadeIn(); 
            return false;
        });
            $(".tab-content2").hide();
        $("ul.tab-nav2 li:first").addClass("active").show(); 
        $(".tab-content2:first").show(); 
        $("ul.tab-nav2 li").click(function() {
            $("ul.tab-nav2 li").removeClass("active"); 
            $(this).addClass("active"); 
            $(".tab-content2").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn();
            return false;
        });
    });</script>
<!--tab-->

<!--price range-->
	<script src="js/jquery.ui.widget.js?t=092702"></script>
	<script src="js/jquery.ui.mouse.js?t=092702"></script>
	<script src="js/jquery.ui.slider.js?t=092702"></script>
	<script>
	$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 8000,
			values: [ 0, 8000 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ]);
			}
		});
		$( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
			" - " + $( "#slider-range" ).slider( "values", 1 ));
	});
	
	$(function() {
		$( "#slider-range01" ).slider({
			range: true,
			min: 0,
			max: 10,
			values: [ 0, 10 ],
			slide: function( event, ui ) {
				$( "#amount01" ).val( + ui.values[ 0 ] + " - " + ui.values[ 1 ]);
			}
		});
		$( "#amount01" ).val( + $( "#slider-range01" ).slider( "values", 0 ) +
			" - " + $( "#slider-range01" ).slider( "values", 1 ));
	});
	
	
	$(function() {
		$( "#slider-range02" ).slider({
			range: true,
			min: 0,
			max: 50,
			values: [ 0, 50 ],
			slide: function( event, ui ) {
				$( "#amount02" ).val( + ui.values[ 0 ] + " - " + ui.values[ 1 ]);
			}
		});
		$( "#amount02" ).val( + $( "#slider-range02" ).slider( "values", 0 ) +
			" - " + $( "#slider-range02" ).slider( "values", 1 ));
	});
	
	
	$(function() {
		$( "#slider-range03" ).slider({
			range: true,
			min: 0,
			max: 10,
			values: [ 0, 10 ],
			slide: function( event, ui ) {
				$( "#amount03" ).val( + ui.values[ 0 ] + " - " + ui.values[ 1 ]);
			}
		});
		$( "#amount03" ).val( + $( "#slider-range03" ).slider( "values", 0 ) +
			" - " + $( "#slider-range03" ).slider( "values", 1 ));
	});
	</script>
<!--price range-->
<!--slider-->
	<script type="text/javascript" src="js/jquery.jcarousel.js?t=092702"></script>
    <script type="text/javascript">
		jQuery(document).ready(function() {
			jQuery('#mycarousel').jcarousel({
				visible: 3,
				auto:false
			});
			jQuery('#mycarousel2').jcarousel({
				visible: 3,
				auto:false
			});
		});
	</script>
  <!--slider-->
  <!--gallery-->
<script type="text/javascript" src="js/jquery.ad-gallery.js"></script>
  <script type="text/javascript">
  $(function() {
    $('img.image1').data('ad-desc', '');
    $('img.image1').data('ad-title', '');
    $('img.image4').data('ad-desc', '');
    $('img.image5').data('ad-desc', '');
    var galleries = $('.ad-gallery').adGallery();
    $('#switch-effect').change(
      function() {
        galleries[0].settings.effect = $(this).val();
        return false;
      }
    );
    $('#toggle-slideshow').click(
      function() {
        galleries[0].slideshow.toggle();
        return false;
      }
    );
    $('#toggle-description').click(
      function() {
        if(!galleries[0].settings.description_wrapper) {
          galleries[0].settings.description_wrapper = $('#descriptions');
        } else {
          galleries[0].settings.description_wrapper = false;
        }
        return false;
      }
    );
  });
  </script>

<!--gallery-->

<!--ticker-->
	<script src="js/jquery.ticker.js?t=092702" type="text/javascript"></script>
	<script src="js/site.js?t=092702" type="text/javascript"></script>
<!--ticker-->
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/sexylightbox.v2.3.jquery.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function(){
      SexyLightbox.initialize({color:'white', dir: 'sexyimages'});
  });
  </script>

</head>

<body>
<div id="wrapper">
<!--section header-->
	<header id="header">
    	<div class="head_wrap">
        	<h1><a href="http://www.innovatedubai.com/index.php"><img src="images/logo.png"></a></h1>
            <div class="head_right">
            	<div class="top_nav">
                <a style="border:none;" href="http://www.innovatedubai.com/content.php?content=about-us">About Us</a>
                 <a href="http://www.innovatedubai.com/content.php?content=careers">Careers</a>
                 <span>+971 4 421 6770</span>
                </div>
                <nav id="navigation">
                	<ul class="menu" id="menu"><li ><a class='active' href="index.php"  class="menulink" id="menulink" target="_self">Home</a> </li><li ><a  href="#"  class="menulink" id="menulink" target="_self">Residential</a><ul style="left:0px;">
					  <li class="droupmenu_top">
					  <a href="listing.php?tab=2&typecat=Residential" style="" target="_self">Property for sale</a></li>
					  <li class="droupmenu_bottom" style="border:none;">
					  <a href="listing.php?tab=1&typecat=Residential" style="" target="_self">Property for rent</a></li></ul> </li><li ><a  href="javascript:void()"  class="menulink" id="menulink" target="_self">Commercial</a><ul style="left:0px;">
					  <li class="droupmenu_top">
					  <a href="listing.php?tab=2&typecat=Commercial" style="" target="_self">Property for sale</a></li>
					  <li class="droupmenu_bottom" style="border:none;">
					  <a href="listing.php?tab=1&typecat=Commercial" style="" target="_self">Property for rent</a></li></ul> </li><li ><a  href="sell-property.php"  class="menulink" id="menulink" target="_self">List your property</a> </li><li ><a  href="#"  class="menulink" id="menulink" target="_self">Services</a><ul style="left:0px;">
					  <li class="droupmenu_top" style="border:none;">
					  <a href="content.php?content=other-services" style="" target="_self">Other Services</a></li></ul> </li><li ><a  href="contactus.php?content=contact-us"  class="menulink" id="menulink" target="_self">Contact Us</a> </li> </ul>                    <script type="text/javascript">var menu=new menu.dd("menu");menu.init("menu","menuhover");</script>
                </nav>
            </div>
        </div>
    </header>    <!--section header -->
    <!--section banner -->
    <section id="banner">
  		<div class="banner">
    	<div id="container" class="clearfix">
            <div id="slideshow" class="clearfix">	
                <div id="slider" class="clearfix">		
				                       <a href="#" rel="bookmark" >
                           <img src="http://webchannel.co/projects/innovate/www/timthumb/scripts/timthumb.php?src=bannerLarge/Banner_Large1371878198_regular.jpg&w=980&h=434&zc=1" alt="Innovate Real Estate"  /> </a>
                                       <a href="#" rel="bookmark" >
                           <img src="http://webchannel.co/projects/innovate/www/timthumb/scripts/timthumb.php?src=bannerLarge/Banner_Large1371878137_regular.jpg&w=980&h=434&zc=1" alt="Innovate Real Estate"  /> </a>
                                       <a href="#" rel="bookmark" >
                           <img src="http://webchannel.co/projects/innovate/www/timthumb/scripts/timthumb.php?src=bannerLarge/Banner_Large1371878171_regular.jpg&w=980&h=434&zc=1" alt="Innovate Real Estate"  /> </a>
                                   </div>
               </div>
           </div>
    	</div>
        <div class="top-banner">
         <p>New exclusive projects in Burj<br> Khalifa area and Palm Jumeirah</p>
         <a href="#"><img src="images/register-now.png" alt=""></a>
        </div>
    	<div class="tab-wrap" style="top:255px;">
                  <ul class="tab-nav">
                    <li class="active">
                    <a href="#tab1" id="ta1">for rent</a></li>
                    <li><a href="#tab2" id="ta2">for sale</a></li>
                  </ul>
             <div class="tab-container">
					<form method="post" name="frmSer" id="frmSer" action="listing.php">
                    <input type="hidden" name="tab" value="1" />
                    <div  id="tab1" class="tab-content">
                    <div class="left_search">                   
                    <input name="txtKey" id="txtKey" type="text" value="Your Keyword here" class="required" onFocus="if(this.value=='Your Keyword here') { this.value='' }" onBlur="if(this.value=='') { this.value='Your Keyword here' }" />  
                    <span>Enter location (city, community or tower)</span></div>
            		 <div class="right_search">
                     	<ul>
                         	 <li>
                            	 <select name="type" style="width:133px;" >
                                 <option value="">Property Type</option>   
                                          
                                 <option value="33">Apartment</option>
                                          
                                 <option value="25">Building</option>
                                          
                                 <option value="39">Commercial Full Building</option>
                                          
                                 <option value="30">Duplex</option>
                                          
                                 <option value="16">Floor</option>
                                          
                                 <option value="41">Hotel</option>
                                          
                                 <option value="29">Hotel Apartment</option>
                                          
                                 <option value="3">Land</option>
                                          
                                 <option value="35">Land Commercial</option>
                                          
                                 <option value="42">Land Mixed Use</option>
                                          
                                 <option value="38">Land Residential</option>
                                          
                                 <option value="40">Loft apartment</option>
                                          
                                 <option value="37">Multiple Sale Units</option>
                                          
                                 <option value="13">Office</option>
                                          
                                 <option value="28">Penthouse</option>
                                          
                                 <option value="36">Residential Building</option>
                                          
                                 <option value="32">Residential Plot</option>
                                          
                                 <option value="34">Retail</option>
                                          
                                 <option value="10">Shop</option>
                                          
                                 <option value="27">Townhouse</option>
                                          
                                 <option value="2">Villa</option>
                                          
                                 <option value="31">Warehouse</option>
                                               
                                </select> 
                            </li>
                            <li>
                            	 <select name="community"  style="width:133px;">     
                                 <option value="">Community</option>  
                                          
                                 <option value="2">Arabian Ranches</option>
                                          
                                 <option value="10">Business Bay</option>
                                          
                                 <option value="3">DIFC</option>
                                          
                                 <option value="4">Downtown Burj Dubai</option>
                                          
                                 <option value="5">Dubai Marina</option>
                                          
                                 <option value="14">Dubailand</option>
                                          
                                 <option value="8">Emirates Hills</option>
                                          
                                 <option value="11">Greens</option>
                                          
                                 <option value="6">Jumeirah Beach Residence</option>
                                          
                                 <option value="7">Jumeirah Lake Towers</option>
                                          
                                 <option value="13">Jumeirah Village</option>
                                          
                                 <option value="9">Lakes</option>
                                          
                                 <option value="12">Old Town</option>
                                          
                                 <option value="1">Palm Jumeirah</option>
                                          
                                 <option value="16">Reem</option>
                                          
                                 <option value="15">Sports City</option>
                                               
                                </select> 
                            </li>
                             <li style="float:right; width:80px;">
                            	<input  style="margin-top:0px;" type="image"  onmouseout="this.src = 'images/search_btn.jpg';" onMouseOver="this.src = 'images/search_btn_hvr.jpg';" src="images/search_btn.jpg" class="searchbtn" id="butSub" name="butSub">
                            </li>
                            <li style="margin-right:2px;">
                     	<label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Price</label>
                        <div class="price_range_pro">
                        	<div class="demo">
                                <p>
                                    <input type="text" id="amount" name="priceRent" style="width:80px;"  /><span style="color:#fff;">k+ (AED)</span>
                                </p>
							<div id="slider-range"></div>
							</div>
                        </div>
                     </li>
                     <li>
                   	   <label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Bedrooms</label>
                       <div class="price_range_pro">
                        	<div class="demo">
                                <p>
                                    <input type="text" id="amount01" name="bedRent" style="width:120px;"  /><span  style="color:#fff;">+</span>
                                </p>
							<div id="slider-range01"></div>
							</div>
                        </div>
                     </li> 
                        </ul>
                     </div>	
               </div>
               </form>
               <form method="post" name="frmSe" id="frmSe" action="listing.php">
               <input type="hidden" name="tab" value="2" />
               <div  id="tab2" class="tab-content">
                      <div class="left_search">
                    <input name="txtKey" id="txtKey" type="text" value="Your Keyword here" class="required" onFocus="if(this.value=='Your Keyword here') { this.value='' }" onBlur="if(this.value=='') { this.value='Your Keyword here' }" />  
                    <span>Enter location (city, community or tower)</span>            		
                    </div>
            		 <div class="right_search">
                     	<ul> 
                        	<li>
                            	 <select name="type" style="width:133px;" >
                                 <option value="">Property Type</option>   
                                          
                                 <option value="33">Apartment</option>
                                          
                                 <option value="25">Building</option>
                                          
                                 <option value="39">Commercial Full Building</option>
                                          
                                 <option value="30">Duplex</option>
                                          
                                 <option value="16">Floor</option>
                                          
                                 <option value="41">Hotel</option>
                                          
                                 <option value="29">Hotel Apartment</option>
                                          
                                 <option value="3">Land</option>
                                          
                                 <option value="35">Land Commercial</option>
                                          
                                 <option value="42">Land Mixed Use</option>
                                          
                                 <option value="38">Land Residential</option>
                                          
                                 <option value="40">Loft apartment</option>
                                          
                                 <option value="37">Multiple Sale Units</option>
                                          
                                 <option value="13">Office</option>
                                          
                                 <option value="28">Penthouse</option>
                                          
                                 <option value="36">Residential Building</option>
                                          
                                 <option value="32">Residential Plot</option>
                                          
                                 <option value="34">Retail</option>
                                          
                                 <option value="10">Shop</option>
                                          
                                 <option value="27">Townhouse</option>
                                          
                                 <option value="2">Villa</option>
                                          
                                 <option value="31">Warehouse</option>
                                               
                                </select> 
                            </li>
                            <li>
                            	 <select name="community" style="width:133px;" >     
                                 <option value="">Community</option>  
                                          
                                 <option value="2">Arabian Ranches</option>
                                          
                                 <option value="10">Business Bay</option>
                                          
                                 <option value="3">DIFC</option>
                                          
                                 <option value="4">Downtown Burj Dubai</option>
                                          
                                 <option value="5">Dubai Marina</option>
                                          
                                 <option value="14">Dubailand</option>
                                          
                                 <option value="8">Emirates Hills</option>
                                          
                                 <option value="11">Greens</option>
                                          
                                 <option value="6">Jumeirah Beach Residence</option>
                                          
                                 <option value="7">Jumeirah Lake Towers</option>
                                          
                                 <option value="13">Jumeirah Village</option>
                                          
                                 <option value="9">Lakes</option>
                                          
                                 <option value="12">Old Town</option>
                                          
                                 <option value="1">Palm Jumeirah</option>
                                          
                                 <option value="16">Reem</option>
                                          
                                 <option value="15">Sports City</option>
                                               
                                </select> 
                            </li>
                            <li style="float:right;width:80px;">
                            	<input style="margin-top:0px;" type="image"  onmouseout="this.src = 'images/search_btn.jpg';" onMouseOver="this.src = 'images/search_btn_hvr.jpg';" src="images/search_btn.jpg" class="searchbtn" id="butSub" name="butSub">
                            </li>
                            <li style="margin-right:2px;">
                     	<label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Price</label>
                        <div class="price_range_pro">
                        	<div class="demo">
                                <p>
                                    <input type="text" id="amount02" name="priceSale" style="width:80px;"  /><span  style="color:#fff;">m+ (AED)</span>
                                </p>
							<div id="slider-range02"></div>
							</div>
                        </div>
                     </li>
                     <li>
                   	   <label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Bedrooms</label>
                       <div class="price_range_pro">
                        	<div class="demo">
                                <p>
                                    <input type="text" id="amount03" name="bedSale" style="width:120px;" /><span  style="color:#fff;">+</span>
                                </p>
							<div id="slider-range03"></div>
							</div>
                        </div>
                     </li>
                        </ul>
                     </div>	
               </div>
        </form>               
                </div>
        </div>    </section>
    <!--section banner -->
    <!--section news -->
    <section id="news">
    	<div class="news_scroll">
           <span class="news_head">Real Estate News</span>
           		<div id="ticker-wrapper" class="no-js">
                    <ul id="js-news" class="js-hidden">
										                        <li class="news-item"><a class="red" href="http://www.innovatedubai.com/news-details.php?nid=saudi-arabia-recruited-33-more-foreign-construction-workers-in-2012">26th August 2013 : </a><a class="red" href="http://www.innovatedubai.com/news-details.php?nid=saudi-arabia-recruited-33-more-foreign-construction-workers-in-2012">Saudi Arabia recruited 33% more foreign construction workers in 2012</a></li>
                                            <li class="news-item"><a class="red" href="http://www.innovatedubai.com/news-details.php?nid=nakheel-repaid-lenders-dhs197m">26th August 2013 : </a><a class="red" href="http://www.innovatedubai.com/news-details.php?nid=nakheel-repaid-lenders-dhs197m">Nakheel repaid lenders Dhs197m</a></li>
                                           
                    </ul>
                </div>
           </div>
    </section>    <!--section news -->
    <!--featurd_list -->
    <div class="featurd_list">
    	<ul>
        	<li><a href="http://www.innovatedubai.com/sell-property.php"><img src="images/listur.jpg"><p>List your property with us</p></a></li>
            <li><a href="http://www.innovatedubai.com/sell-valuation.php"><img src="images/property.jpg"><p>property valuation services</p></a></li>
            <li><a href="http://www.innovatedubai.com/content.php?content=open-house-calendar"><img src="images/open.jpg"><p>open house calendar</p></a></li>
        </ul>
    </div>
     <!--featurd_list -->
     <!--section slider-->
     <section id="slider{">
     	<div class="tab-wrap2">
        <h2>Featured Properties</h2>
    		<ul class="tab-nav2">
                    <li class="active">
                    <a href="#tab3">property for rent</a></li>
                    <li><a href="#tab4">property for sale</a></li>
            </ul>
             <div class="tab-container2">
                    <div  id="tab3" class="tab-content2">                    
                        <div class="sliding">        	
                          <ul id="mycarousel" class="jcarousel-skin-tango">
								                          
                              	<li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=fully-furnished-studio-apartment-located-in-al-alka-building-at-the-greens">
                                                                            <img src="http://crm.propspace.com/watermark?id=13723367113949596&image=01_08_2013-11_36_23-1087-10862829-the-greens-dubai.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 105,000 / per year </h2>
                                        <p>Fully furnished Studio apartment  located in Al- Alka  building at the Greens</p>
                                    </span>
                           	</li>
                                                      
                              	<li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=vacant-1-bedroom-apartment-with-full-marina-views-located-in-al-sahab-tower-at-dubai-marina">
                                                                            <img src="http://crm.propspace.com/watermark?id=13726621127488363&image=01_07_2013-11_07_50-1087-sahab-%282%29.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 95,000 / per year </h2>
                                        <p>Vacant 1 bedroom apartment with full Marina views located in Al Sahab Tower at Dubai Marina</p>
                                    </span>
                           	</li>
                                                      
                              	<li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=vacant-3-bedroom-fully-furnished-apartment-with-golf-course-views-located-in-links-east-tower-at-the-greens">
                                                                            <img src="http://crm.propspace.com/watermark?id=13726814664816490&image=01_08_2013-11_00_34-1087-id626874.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 185,000 / per year </h2>
                                        <p>Vacant 3 bedroom fully furnished apartment with golf course    views located in Links East Tower  at The Greens</p>
                                    </span>
                           	</li>
                                                      
                              	<li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=1-bedroom-apartment-fully-furnished-and-serviced-with-marina-and-sea-views-located-in-the-marina-address-hotel-at-dubai-marina">
                                                                            <img src="http://crm.propspace.com/watermark?id=13728441320116772&image=01_08_2013-10_37_33-1087-At-The-Address-Dubai-Marina.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 155,000 / per year </h2>
                                        <p>1 bedroom apartment fully furnished and serviced with Marina and Sea  views located in The Marina Address Hotel at Dubai Marina</p>
                                    </span>
                           	</li>
                                                           
                          </ul>
                    	</div>
                      </div>
                      
                     <div  id="tab4" class="tab-content2">
                    <div class="sliding">        	
                           <ul id="mycarousel2" class="jcarousel-skin-tango">
								                 
                                <li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=2-bedroom-with-full-marina-views-located-in-shams-building-at-the-jumeirah-beach-residences-jbr-">
                                                                            <img src="http://crm.propspace.com/watermark?id=13695740943344759&image=26_05_2013-17_25_23-1087-Picture5.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 2,195,000 </h2>
                                        <p>2 bedroom with full Marina views located in Shams building at the Jumeirah Beach Residences    (JBR)</p>
                                    </span>
                           	</li>
                                             
                                <li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=amazing-studio-apartment-with-full-marina-view-in-the-address-hotel-at-dubai-marina5704">
                                                                            <img src="http://crm.propspace.com/watermark?id=13716226755748799&image=19_06_2013-10_21_37-1087-1_Page_6.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 1,575,000 </h2>
                                        <p>Amazing Studio apartment with full Marina view in The Address Hotel at Dubai Marina</p>
                                    </span>
                           	</li>
                                             
                                <li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=3-bedroom-maid-s-room-townhouse-with-private-garden-located-in-ghadeer-townhouses-at-the-lakes">
                                                                            <img src="http://crm.propspace.com/watermark?id=13719820079934139&image=01_08_2013-11_55_49-1087-Stunning-3-Beds-in-Lakes-Ghadeer-Dubai-UAE.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 5,500,000 </h2>
                                        <p>3 bedroom +   Maid's room Townhouse with private Garden located in Ghadeer Townhouses at The Lakes</p>
                                    </span>
                           	</li>
                                             
                                <li>
                                  	<a href="http://www.innovatedubai.com/details.php?pid=2-bedroom-maid-s-room-apartment-located-in-oceana-residence-southern-at-the-palm-jumeirah">
                                                                            <img src="http://crm.propspace.com/watermark?id=13726832479579735&image=01_08_2013-10_52_17-1087-hotel-palm-jumeirah-oceana-souther-tower.jpg" alt="" width="304" height="268" />
                                    </a>
                                 	<span>
                                    	<h2>AED 3,500,000 </h2>
                                        <p>2 bedroom + Maid's room apartment located in Oceana Residence Southern at The Palm Jumeirah</p>
                                    </span>
                           	</li>
                              
                          </ul>
                    	</div>
                    </div>
    		</div>
           </div>
     </section>
     <!--section slider-->
     <div class="about">
     	<h2>Your <span> Preferred</span> Real Estate Agent</h2>
        <p>

	Coming Soon
                                                                                                                    </p>        <a href="http://www.innovatedubai.com/content.php?content=about-us">Read more</a>
     </div>
     <!--section footer-->
     <footer id="footer">
     	<div id="footer_wrapper">
        	<ul class="general" style="width:115px;">
            	<h2>general </h2>
            	<li><a href="http://www.innovatedubai.com/index.php">Home</a></li>
                <li><a href="http://www.innovatedubai.com/content.php?content=about-us">About us</a></li>
                <li><a href="http://www.innovatedubai.com/news.php">Real Estate News</a></li>
                <li><a href="http://www.innovatedubai.com/content.php?content=careers">Careers</a></li>
            </ul>
            <ul class="general" style="width:110px">
            	<h2>Residential</h2>
            	<li><a href="http://www.innovatedubai.com/listing.php?typecat=Residential&tab=2">Property for sale </a></li>
                <li><a href="http://www.innovatedubai.com/listing.php?typecat=Residential&tab=1">Property for Rent</a></li>
            </ul>
            <ul class="general"  style="width:110px">
            	<h2>Commercial</h2>
            	<li><a href="http://www.innovatedubai.com/listing.php?typecat=Commercial&tab=2">Property for sale </a></li>
                <li><a href="http://www.innovatedubai.com/listing.php?typecat=Commercial&tab=1">Property for Rent</a></li>
            </ul>
            <ul class="general"  style="width:144px">
            	<h2>List your property</h2>
            	<li><a href="http://www.innovatedubai.com/sell-property.php">List Your Property</a></li>
            </ul>
            <ul class="general"  style="width:101px">
            	<h2>Services</h2>
            	<li><a href="http://www.innovatedubai.com/sell-valuation.php">Property Valuation</a></li>
                <li><a href="http://www.innovatedubai.com/content.php?content=other-services">Other services</a></li>
            </ul>
             <ul class="general" style="border:none; width:281px;" >
            	<li style="width:276px;background-color:#fff;height:101px;"><img src="images/expo-logo-new.jpg" height="100" /></li>
            </ul>
        </div>
        <div class="social_wrap">
        	<a href="http://www.facebook.com/" target="_blank"><img src="images/fac.jpg"></a>
            <a href="https://twitter.com/" target="_blank"><img src="images/twt.jpg"></a>
            <h2>Subscribe Newsletter</h2>
     <script language="javascript" type="text/javascript">
$(document).ready(function(){
	$("#butSub2").click(function() {
	var email = $("#subscribe").val();
	var name = $("#txtName").val();
	if(email =='Enter your Email ID')
	{
	document.getElementById('subscribe').value = "";	
	}
	if(name =='Enter your name')
	{
	document.getElementById('txtName').value = "";	
	}
	  if($("#frm_news").valid()==true)
	  {
	  showHint($("#subscribe").val(),$("#txtName").val());
	  }
	  return false;
	  });
	
	$('#subscribe').focus(function() {
	  if($(this).val()=='Enter your Email ID')
	  {
	  $('#subscribe').val('');
	  }
	});	
	$('#subscribe').blur(function() {
	  if($(this).val()=='')
	  {
	  $('#subscribe').val('Enter your Email ID');
	  }
	});	
	$('#txtName').focus(function() {
	  if($(this).val()=='Enter your name')
	  {
	  $('#txtName').val('');
	  }
	});	
	$('#txtName').blur(function() {
	  if($(this).val()=='')
	  {
	  $('#txtName').val('Enter your name');
	  }
	});	
});
</script>
<script language="javascript">
function showHint(mail,name)
{
var xmlhttp;
if (mail.length==0)
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
 
xmlhttp.open("GET","subscribe_newsletter.php?q="+mail+"&name="+name,true);
xmlhttp.send();
}
</script>
            <form id="frm_news" name="frm_news" method="post">
			<input type="text" value="Enter your name" name="txtName" id="txtName" class="news required">
            <input style="margin-right:0px;" type="text" value="Enter your Email ID" name="subscribe" id="subscribe" class="news required email">
            <input type="image" name="butSub2" id="butSub2" value="" class="news_button">
            </form>
            <div id="txtHint"></div>
        </div>
        <div class="fot_wrap">
        <p> Innovate Real Estate 2013 All Rights Reserved </p>
        <ul class="foot-nav">
            <li><a href="http://www.innovatedubai.com/content.php?content=terms-of-use">Terms Of Use </a></li>
            <li><a href="http://www.innovatedubai.com/content.php?content=privacy-policy">Privacy Policy</a></li>
        </ul>
        <div class="design">
            <p>Designed &amp; Developed by :</p>
            <a href="http://www.webchannel.ae/" target="_blank"><img src="images/webchannel.png"></a>
          </div>
        </div>
<!-- stardevelop.com Live Help International Copyright - All Rights Reserved //-->
<!--  BEGIN stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
<a href="#" class="LiveHelpButton default"><img src="http://innovatedubai.com/livehelp/include/status.php" id="LiveHelpStatusDefault" name="LiveHelpStatusDefault" border="0" alt="Live Help" class="LiveHelpStatus"/></a>
<!--  END stardevelop.com Live Help Messenger Code - Copyright - NOT PERMITTED TO MODIFY COPYRIGHT LINE / LINK //-->
     </footer>
     <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-1944092-10', 'innovatedubai.com');
  ga('send', 'pageview');

</script>     <!--section footer-->
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