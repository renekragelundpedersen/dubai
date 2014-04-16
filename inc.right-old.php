<div class="inc_right">
  <div class="register_ad"><a href="register.php?TB_iframe=true&height=595&width=307" rel="sexylightbox"><img src="<?php echo $siteURL ?>images/register-now-inner.png" alt=""></a></div>
  <div class="property_add"> <a href="<?php echo $siteURL; ?>sell-property.php"> <img src="<?php echo $siteURL ?>images/click_here.jpg" onMouseOver="this.src='images/click_here_hvr.jpg'" onMouseOut="this.src='images/click_here.jpg'"></a> </div>
  <?php
			$sqlFea = "SELECT * FROM property_master WHERE is_active = 'Y' AND is_hot = 'Y' ORDER BY modified_on DESC LIMIT 0,5";
			$resFea = $obj->select($sqlFea);
			if(count($resFea) > 0)
			{
			?>
  <div class="property_listing">
    <h2>featured Properties</h2>
    <ul>
      <?php
                    foreach($resFea as $rowFea)
                    {
					$propid = $rowFea['prop_id'];
					if($rowFea['prop_for_id'] == 'sales')
					{
					$price3 = $rowFea['prop_price'];
					$tab=2;
					}
					else
					{
					$price3 = $rowFea['annual_rent'];
					$tab=1;
					}
					$sqlIm1 = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
					$rowIm1 = $obj->select($sqlIm1);
					$coun=count($rowIm1);
					if($coun>0)
					{
					$sqlIm = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid' and image_is_default='Y'";
					$rowIm = $obj->select($sqlIm);
					}
					else
					{
					$sqlIm = "SELECT * FROM property_image_master WHERE prop_ref_id = '$propid'";
					$rowIm = $obj->select($sqlIm);
					}
                    ?>
      <li> <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowFea['slug']; ?>"><img src="<?php echo $rowIm[0]['image_name']; ?>" width="76" height="56"></a> <a href="<?php echo $siteURL; ?>details.php?pid=<?php echo $rowFea['slug']; ?>">
        <h3>AED <?php echo number_format($price3,0,'',','); ?></h3>
        </a>
        <p><?php echo stripslashes($rowFea['prop_name']); ?></p>
      </li>
      <?php
					}
					?>
    </ul>
  </div>
  <?php
			}
			?>
  <?php /*?><div class="open_house"> <a href="<?php echo $siteURL; ?>content.php?content=open-house-calendar"> <img src="images/click_open.jpg" onMouseOver="this.src='images/click_open_hvr.jpg'" onMouseOut="this.src='images/click_open.jpg'"></a> </div><?php */?>
</div>
