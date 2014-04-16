<?php
	require_once('connect.php');
    $currentFile = $_SERVER["PHP_SELF"];
    $parts = Explode('/', $currentFile);
    $pag = $parts[count($parts) - 1];
$dev_page = 1;

$pageid   = 49;

$flddev_id 		= get_param("dev_id");

$fldname 		= "";

$flddev_date 		= "";

$flddetails 	= "";

$flddetails 	= "";

$flddev_photo	 	= "";

$fldimg_path		= "";





$dev_query = "SELECT * FROM property_developments WHERE is_active = 'Y' AND id = '$flddev_id'";

$dev_result = mysql_query($dev_query) or die($dev_query.mysql_error());



if($dev_result)

	$dev_num_rows = mysql_num_rows($dev_result);

else

	$dev_num_rows = 0;

	

 if($dev_num_rows >0)

 {

	while($dev_row = mysql_fetch_object($dev_result))

	{

		

		$flddev_id 		= $dev_row->id;

		$fldname 		= stripslashes($dev_row->name);


		$flddetails 	= (stripslashes($dev_row->details));

		


	}

 }

    ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
<title><?php echo $SITE_TITLE; ?> - Developments</title>
<meta name="desription" content= "<?php echo $SITE_TITLE; ?> - Developments"/>
<meta name="keywords" content="<?php echo $SITE_TITLE; ?> - Developments"/>
<?php require_once('inc.css.php'); ?>
<?php require_once('inc.js.php'); ?>
<script language="javascript" type="text/javascript" src="js/jquery.innerfade.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery.ui.slider.js"></script>
<script type="text/javascript" src="<?php echo $siteURL; ?>stepcarousel.js"></script>

<script language="javascript" type="text/javascript">
	$(document).ready(function() {
		$("#frmEnquiry").validate();
	});
	function reloadCaptcha()
	{
		document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();
	}
</script>
<style type="text/css">

.stepcarousel{
position: relative; /*leave this value alone*/
overflow: scroll; /*leave this value alone*/
width: 292px;
height: 230px;
margin:0 0 0 0;
padding:0 0 0 0; /*Height should enough to fit largest content's height*/
}
#mygallery
{
	background-color:#888787;
	width:284px;
	margin:0 0 0 0;
	padding:0 0 0 0;
	height:258px;
}

.stepcarousel .belt{
position: absolute; /*leave this value alone*/
left: 0;
top: 0;
}

.stepcarousel .panel{
float: left; /*leave this value alone*/
overflow: hidden; /*clip content that go outside dimensions of holding panel DIV*/
margin:3px; /*margin around each panel*/
width: 278px;
height:252px;
/*Width of each panel holding each content. If removed, widths should be individually defined on each content DIV then. */
}
.stepcarousel .panel a{
float: left;
border:none;
margin:0 0 0 0;
padding:0 0 0 0;
}
.stepcarousel .panel a img{
float: left;
border:none;
margin:0 0 0 0;
padding:0 0 0 0;
}

</style>
</head>

<body>
<div id="wrapper">
	<?php require_once('inc.header.php'); ?>
    <div id="inner_wrapper">
    	<div class="inc_left">
        <div class="inner_banner">
        <img src="<?php if($rowContent[0]['page_photo3']!="") {echo $srcBan;} else { ?>images/banner.jpg<?php } ?>"></div>
        <div class="breadcrumbs">
            	<ul>
                	<li><a href="<?php echo $siteURL; ?>index.php">Home</a></li>
                	<li><a class="bread_active" href="<?php echo $siteURL; ?>developments.php">Developments</a></li>
                    <li><a class="bread_active"><?=$fldname?></a></li>
                </ul>
                <div class="bread_mail">
                	<a href="email.php?TB_iframe=true&height=550&width=307"rel="sexylightbox" class="br_mail">Email</a>
                    <!--<a onClick="PrintContent('<?php echo $pi; ?>');" class="br_print">print</a>-->
                </div>
            </div>
            <div class="inner_content">
            	<h1><?=$fldname?></h1>
<table border="0" cellpadding="0" cellspacing="0" class="developer_details" style="border-top: solid 1px ">

  <tr>

	<td valign="top" width="100%"><table border="0" cellpadding="1" cellspacing="0" width="100%">
      <tr>
        <td class="title"><!--<h3><?=$fldname?></h3>--></td>
        </tr>
      <!--<tr>
        <td class="city"><b>City:</b> Dubai</td>
        </tr>-->
      <tr>
        <td class="detail_page_description">
      
      <?
	  $FRONT_DEV_IMGPATH = "admincp/images/upload/";
		#===================================
		#Images
		#===================================
	$img_query = "SELECT image_name FROM image_master WHERE dev_id = '$flddev_id' ORDER BY  image_is_default ASC  "; 
		
		$img_result = mysql_query($img_query) or die($img_query.mysql_error());
		if($img_result)
		$img_num_rows = mysql_num_rows($img_result);
		else
		$img_num_rows = 0;
		
		$src 		= SERVER_URL."timthumb/scripts/timthumb.php?src=".SERVER_URL."images/img-not-found.gif"."&w=252&h=278&zc=1";
		
		if($img_num_rows > 0)
		{
		?>
      
       <div class="image_holder">
            <div id="mygallery" class="stepcarousel">
                <div class="belt">
<?                
  while($row_image = mysql_fetch_object($img_result))
{
	
	$src = "";
	$fldimage_name = $row_image->image_name;
	$fldimg_path = $FRONT_DEV_IMGPATH.$fldimage_name;
	if(file_exists($fldimg_path) && $fldimage_name !="")
	{
		$src = SERVER_URL."timthumb/scripts/timthumb.php?src=".SERVER_URL.$fldimg_path."&w=252&h=278&zc=1";
		$src_small = SERVER_URL."timthumb/scripts/timthumb.php?src=".SERVER_URL.$fldimg_path."&w=75&h=47&zc=1";
		
		/*resizeDaImage2($fldimg_path,$FRONT_DEV_IMGPATH."Thumb_Dev_Large".$fldimage_name,252,278);	
		$src		= SERVER_URL.$FRONT_DEV_IMGPATH."Thumb_Dev_Large".$fldimage_name;
		
		resizeDaImage2($fldimg_path,$FRONT_DEV_IMGPATH."Thumb_Small".$fldimage_name,75,47);	
		$src_small		= SERVER_URL.$FRONT_DEV_IMGPATH."Thumb_Small".$fldimage_name;*/
	}
	else
	{
		$src = SERVER_URL."timthumb/scripts/timthumb.php?src=".SERVER_URL."images/img-not-found.gif"."&w=252&h=278&zc=1";
		$src_small = SERVER_URL."timthumb/scripts/timthumb.php?src=".SERVER_URL."images/img-not-found.gif"."&w=75&h=47&zc=1";
	}
	?>
              
                        <div class="panel">
                        <a href="<?=$src?>" rel="sexylightbox[group1]"><img src="<?=$src?>" /></a>
                        </div>
<?
}
?>
                       
                </div>
            </div>
	</div>
		
      <?

		}
	 ?>
        <p><?=$flddetails?>
</p>

		
            
</td>
      </tr>
      <tr>
        <td class="detail_page_description">
<a href="<?php echo $siteURL; ?>search_result.php?cmb_dev=<?=$flddev_id?>" class="view"><img src="<?php echo $siteURL; ?>images/view_all.jpg" /></a>         
</td>
      </tr>
            
    </table>    </td>
  </tr>
</table>                
                
                  
                  
            </div>
        </div>
        <?php require_once('inc.right.php'); ?>
     </div>
    <?php require_once('inc.footer.php'); ?>
<div style="clear:both"></div>
</div>
</body>
</html>