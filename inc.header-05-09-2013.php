<header id="header">
    	<div class="head_wrap">
        	<h1><a href="<?php echo $siteURL; ?>index.php"><img src="images/logo.png"></a></h1>
            <div class="head_right">
            	<div class="top_nav">
                <a style="border:none;" href="<?php echo $siteURL; ?>content.php?content=about-us">About Us</a>
                 <a href="<?php echo $siteURL; ?>content.php?content=careers">Careers</a>
                 <span><?php echo $phone; ?></span>
                </div>
                <nav id="navigation">
                	<?php echo menuNavigation('top',$lang,$pid,$parentSlug,$pag,$typecat,$_REQUEST['content']);?>
                    <script type="text/javascript">var menu=new menu.dd("menu");menu.init("menu","menuhover");</script>
                </nav>
            </div>
        </div>
    </header>