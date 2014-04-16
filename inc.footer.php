<footer id="footer">
  <div id="footer_wrapper">
    <ul class="general" style="width:115px;">
      <h2>general </h2>
      <li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>
      <li><a href="<?php echo $siteURL; ?>content.php?content=about-us">About us</a></li>
      <li><a href="<?php echo $siteURL; ?>news.php">Real Estate News</a></li>
      <li><a href="<?php echo $siteURL; ?>content.php?content=careers">Careers</a></li>
    </ul>
    <ul class="general" style="width:110px">
      <h2>Residential</h2>
      <li><a href="<?php echo $siteURL; ?>listing.php?typecat=Residential&tab=2">Property for sale </a></li>
      <li><a href="<?php echo $siteURL; ?>listing.php?typecat=Residential&tab=1">Property for Rent</a></li>
    </ul>
    <ul class="general"  style="width:110px">
      <h2>Commercial</h2>
      <li><a href="<?php echo $siteURL; ?>listing.php?typecat=Commercial&tab=2">Property for sale </a></li>
      <li><a href="<?php echo $siteURL; ?>listing.php?typecat=Commercial&tab=1">Property for Rent</a></li>
    </ul>
    <ul class="general"  style="width:144px">
      <h2>List your property</h2>
      <li><a href="<?php echo $siteURL; ?>sell-property.php">List Your Property</a></li>
    </ul>
    <ul class="general"  style="width:101px">
      <h2>Services</h2>
      <li><a href="<?php echo $siteURL; ?>sell-valuation.php">Property Valuation</a></li>
      <li><a href="<?php echo $siteURL; ?>content.php?content=other-services">Other services</a></li>
    </ul>
    <ul class="general" style="border:none; width:281px;" >
      <li style="width:276px;background-color:#fff;height:101px;"><img src="<?php echo $siteURL ?>images/expo-logo-new.jpg" height="100" /></li>
    </ul>
  </div>
  <div class="social_wrap"> <a href="<?php echo $facebook; ?>" target="_blank"><img src="<?php echo $siteURL ?>images/fac.jpg"></a> <a href="<?php echo $twitter; ?>" target="_blank"><img src="images/twt.jpg"></a>
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
    <p> <?php echo $copyright; ?> </p>
    <ul class="foot-nav">
      <li><a href="<?php echo $siteURL; ?>content.php?content=terms-of-use">Terms Of Use </a></li>
      <li><a href="<?php echo $siteURL; ?>content.php?content=privacy-policy">Privacy Policy</a></li>
    </ul>
    <div class="design">
      <p>Designed &amp; Developed by :</p>
      <a href="http://www.webchannel.ae/" target="_blank"><img src="<?php echo $siteURL ?>images/webchannel.png"></a> </div>
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
</script>