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
<script type="text/javascript" src="<?php echo $siteURL ?>js/jquery.js?t=<?php echo date('his'); ?>"></script>
<script type="text/javascript" src="<?php echo $siteURL ?>js/jquery.validate.js?t=<?php echo date('his'); ?>"></script>
<!--menu-->
<script type='text/javascript' src='<?php echo $siteURL ?>js/droupdown_menu.js?t=<?php echo date('his'); ?>'></script>
<!--menu-->
<!--select-->
<script src="<?php echo $siteURL ?>js/jquery.dd.min.js?t=<?php echo date('his'); ?>" type="text/javascript"></script>
<!--select-->
<!--banner-->
<script type='text/javascript' src='<?php echo $siteURL ?>js/jquery.nivo.slider.pack7793.js?ver=2.4'></script>
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
	<?php
	if($tab==1)
	{
	?>
        $(".tab-content").hide(); 
		$("ul.tab-nav li:last").removeClass("active");        
		$("ul.tab-nav li:first").addClass("active").show(); 
        $(".tab-content:first").show(); 
		<?php
		}
		else
		{
		?>
        $(".tab-content").hide(); 
		$("ul.tab-nav li:first").removeClass("active")
        $("ul.tab-nav li:last").addClass("active").show(); 
        $(".tab-content:last").show(); 
		<?php
		}
		?>
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
<script src="<?php echo $siteURL ?>js/jquery.ui.widget.js?t=<?php echo date('his'); ?>"></script>
<script src="<?php echo $siteURL ?>js/jquery.ui.mouse.js?t=<?php echo date('his'); ?>"></script>
<script src="<?php echo $siteURL ?>js/jquery.ui.slider.js?t=<?php echo date('his'); ?>"></script>
<script>
	$(function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 8000,
			values: [ <?=($cmb_price1[0])?$cmb_price1[0]:0 ?>, <?=($cmb_price1[1])?$cmb_price1[1]:8000 ?> ],
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
			values: [ <?=($cmb_bed[0])?$cmb_bed[0]:0 ?>, <?=($cmb_bed[1])?$cmb_bed[1]:10 ?> ],
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
			values: [ <?=($cmb_price2[0])?$cmb_price2[0]:0 ?>, <?=($cmb_price2[1])?$cmb_price2[1]:50 ?> ],
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
			values: [ <?=($cmb_bed[0])?$cmb_bed[0]:0 ?>, <?=($cmb_bed[1])?$cmb_bed[1]:10 ?> ],
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
<script type="text/javascript" src="<?php echo $siteURL ?>js/jquery.jcarousel.js?t=<?php echo date('his'); ?>"></script>
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
<script type="text/javascript" src="<?php echo $siteURL ?>js/jquery.ad-gallery.js"></script>
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
<script src="<?php echo $siteURL ?>js/jquery.ticker.js?t=<?php echo date('his'); ?>" type="text/javascript"></script>
<script src="<?php echo $siteURL ?>js/site.js?t=<?php echo date('his'); ?>" type="text/javascript"></script>
<!--ticker-->
<script type="text/javascript" src="<?php echo $siteURL ?>js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="<?php echo $siteURL ?>js/sexylightbox.v2.3.jquery.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
      SexyLightbox.initialize({color:'white', dir: 'sexyimages'});
  });
  </script>
  