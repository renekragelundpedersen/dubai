<header id="header">
  <div class="head_wrap">
    <h1><a href="<?php echo $siteURL; ?>"><img src="<?php echo $siteURL ?>images/logo.png"></a></h1>
    <div class="head_right">
      <div class="top_nav">
        <div style="float:left; margin-top:-2px;"> 
        <a style="border:none;" href="<?php echo $siteURL; ?>content.php?content=about-us">About Us</a> 
        <a href="<?php echo $siteURL; ?>content-news.php">News</a>
        <a href="<?php echo $siteURL; ?>content.php?content=careers">Careers</a>
        </div>
        <div class="work">Sunday to Thursday: 9am to 6pm <br />
          Saturday: 10am to 2pm</div>
        <span><?php echo $phone; ?></span>
        <div class="email">Email: <a class="mail" href="mailto:info@innovatedubai.com">info@innovatedubai.com</a></div>
      </div>
      <nav id="navigation"> <?php echo menuNavigation('top',$lang,$pid,$parentSlug,$pag,$typecat,$_REQUEST['content']);?>
        <script type="text/javascript">var menu=new menu.dd("menu");menu.init("menu","menuhover");</script>
      </nav>
    </div>
  </div>
</header>
