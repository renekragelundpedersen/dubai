<div class="tab-wrap" <?php echo $indextoppad ?>>
  <ul class="tab-nav">
    <li class="active"> <a href="#tab1" id="ta1">for rent</a></li>
    <li><a href="#tab2" id="ta2">for sale</a></li>
  </ul>
  <div class="tab-container">
    <form method="post" name="frmSer" id="frmSer" action="listing.php">
      <input type="hidden" name="tab" value="1" />
      <div  id="tab1" class="tab-content">
        <div class="left_search">
          <input name="txtKey" id="txtKey" type="text" value="<?php if($key!="") { echo $key; } else { ?>Your Keyword here<?php } ?>" class="required" onFocus="if(this.value=='Your Keyword here') { this.value='' }" onBlur="if(this.value=='') { this.value='Your Keyword here' }" />
          <span>Enter location (city, community or tower)</span></div>
        <div class="right_search">
          <ul>
            <li>
              <select name="type" style="width:133px;" >
                <option value="">Property Type</option>
                <?php
				 $sqlTyp = "SELECT * FROM property_type_master WHERE status = 'Y' ORDER BY typename";
				 $resTyp = $obj->select($sqlTyp);
				 foreach($resTyp as $rowTyp)
				 {
				 ?>
                <option value="<?php echo $rowTyp['typeid']; ?>" <?php echo ($rowTyp['typeid'] == $type)?'selected="selected"' :'';?>><?php echo $rowTyp['typename']; ?></option>
                <?php
				 }
				 ?>
              </select>
            </li>
            <li>
              <select name="community2"  style="width:133px;">
                <option value="">Community</option>
                <?php
				 $sqlCom = "SELECT * FROM property_developments WHERE is_active = 'Y' ORDER BY name";
				 $resCom = $obj->select($sqlCom);
				 foreach($resCom as $rowCom)
				 {
				 ?>
                <option value="<?php echo $rowCom['id']; ?>" <?php echo ($rowCom['id']==$community )?'selected="selected"' :'';?>><?php echo $rowCom['name']; ?></option>
                <?php
				 }
				 ?>
              </select>
            </li>
            <li style="float:right; width:80px;">
              <input  style="margin-top:0px;" type="image"  onmouseout="this.src = 'images/search_btn.jpg';" onMouseOver="this.src = 'images/search_btn_hvr.jpg';" src="images/search_btn.jpg" class="searchbtn" id="butSub" name="butSub">
            </li>
          </ul>
            
          <ul>
            <li style="margin-right:2px;width:97px; ">
              
              <select name="priceMin1" id="" style="width:97px;"  > 
                                                     <option value="">Min Price</option>                              
                                                        <option value="15000" <?php echo ($minrentPrice=='15000')?'selected':''?>>15,000 AED</option>
                                                        <option value="30000" <?php echo ($minrentPrice=='30000')?'selected':''?>>30,000 AED</option>
                                                        <option value="50000" <?php echo ($minrentPrice=='50000')?'selected':''?>>50,000 AED</option>
                                                        <option value="75000" <?php echo ($minrentPrice=='75000')?'selected':''?>>75,000 AED</option>
                                                        <option value="100000" <?php echo ($minrentPrice=='100000')?'selected':''?>>100,000 AED</option>
                                                        <option value="200000" <?php echo ($minrentPrice=='200000')?'selected':''?>>200,000 AED</option>
                                                        <option value="300000" <?php echo ($minrentPrice=='300000')?'selected':''?>>300,000 AED</option>
                                                        <option value="400000" <?php echo ($minrentPrice=='400000')?'selected':''?>>400,000 AED</option>
                                                        <option value="500000" <?php echo ($minrentPrice=='500000')?'selected':''?>>500,000 AED</option>
                                                        <option value="600000" <?php echo ($minrentPrice=='600000')?'selected':''?>>600,000 AED</option>
                                                        <option value="700000" <?php echo ($minrentPrice=='700000')?'selected':''?>>700,000 AED</option>
              </select> 
            </li>
                                                   <li style="width:97px;">
                                                    <select name="priceMax1" id="" style="width:97px;"  >  
                                                     <option value="">Max Price</option>                             
                                                        <option value="30000" <?php echo ($maxrentPrice=='30000')?'selected':''?>>30,000 AED</option>
                                                        <option value="50000" <?php echo ($maxrentPrice=='50000')?'selected':''?>>50,000 AED</option>
                                                        <option value="75000" <?php echo ($maxrentPrice=='75000')?'selected':''?>>75,000 AED</option>
                                                        <option value="100000" <?php echo ($maxrentPrice=='100000')?'selected':''?>>100,000 AED</option>
                                                        <option value="200000" <?php echo ($maxrentPrice=='200000')?'selected':''?>>200,000 AED</option>
                                                        <option value="300000" <?php echo ($maxrentPrice=='300000')?'selected':''?>>300,000 AED</option>
                                                        <option value="400000" <?php echo ($maxrentPrice=='400000')?'selected':''?>>400,000 AED</option>
                                                        <option value="500000" <?php echo ($maxrentPrice=='500000')?'selected':''?>>500,000 AED</option>
                                                        <option value="600000" <?php echo ($maxrentPrice=='600000')?'selected':''?>>600,000 AED</option>
                                                        <option value="700000" <?php echo ($maxrentPrice=='700000')?'selected':''?>>700,000 AED</option>
                                                        <option value="800000" <?php echo ($maxrentPrice=='800000')?'selected':''?>> > 800,000 AED</option>
                                                   </select> 
              <!--<div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount" name="priceRent" style="width:80px;" value=""  />
                    <span style="color:#fff;">k+ (AED)</span> </p>
                  <div id="slider-range"></div>
                </div>
              </div>-->
            </li>
            <li style="width:67px;">
              
<select name="cmb_bed_min1" id="" style="width:67px;"  >
                                                    <option value="">Min Beds </option>
                                                    <?php
													$sqlBed = "SELECT * FROM bedrooms WHERE is_active='Y' ORDER BY bed_order";
													$resBed = $obj->select($sqlBed);
													foreach($resBed as $rowBed)
													{
													?>           
                                                    <option value="<?php echo $rowBed['bed_id']; ?>" <?php echo ($minbed1==$rowBed['bed_id'])?'selected':''?>><?php echo $rowBed['bed_val']; ?></option>
                                                    <?php
													}
													?>               
              </select>
            </li>
                                                   <li style="width:67px;">
                                                     <select name="cmb_bed_max1" id="cmb_bed_max" style="width:67px;"  >
                                                       <option value="">Max Beds </option>
                                                       <?php
													$sqlBed = "SELECT * FROM bedrooms WHERE is_active='Y' ORDER BY bed_order";
													$resBed = $obj->select($sqlBed);
													foreach($resBed as $rowBed)
													{
													?>
                                                       <option value="<?php echo $rowBed['bed_id']; ?>" <?php echo ($maxbed1==$rowBed['bed_id'])?'selected':''?>><?php echo $rowBed['bed_val']; ?></option>
                                                       <?php
													}
													?>
                                                     </select>
                                                     <!--<div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount01" name="bedRent" style="width:120px;"  />
                    <span  style="color:#fff;">+</span> </p>
                  <div id="slider-range01"></div>
                </div>
              </div>-->
            </li>
          </ul>
        </div>
      </div>
    </form>
    <form method="post" name="frmSe" id="frmSe" action="listing.php">
      <input type="hidden" name="tab" value="2" />
      <div  id="tab2" class="tab-content">
        <div class="left_search">
          <input name="txtKey" id="txtKey" type="text" value="<?php if($key!="") { echo $key; } else { ?>Your Keyword here<?php } ?>" class="required" onFocus="if(this.value=='Your Keyword here') { this.value='' }" onBlur="if(this.value=='') { this.value='Your Keyword here' }" />
          <span>Enter location (city, community or tower)</span> </div>
        <div class="right_search">
          <ul>
            <li>
              <select name="type" style="width:133px;" >
                <option value="">Property Type</option>
                <?php
				 $sqlTyp = "SELECT * FROM property_type_master WHERE status = 'Y' ORDER BY typename";
				 $resTyp = $obj->select($sqlTyp);
				 foreach($resTyp as $rowTyp)
				 {
				 ?>
                <option value="<?php echo $rowTyp['typeid']; ?>" <?php if($rowTyp['typeid'] == $type) echo "selected='selected'";?>><?php echo $rowTyp['typename']; ?></option>
                <?php
				 }
				 ?>
              </select>
            </li>
            <li>
              <select name="community" style="width:133px;" >
                <option value="">Community</option>
                <?php
				 $sqlCom = "SELECT * FROM property_developments WHERE is_active = 'Y' ORDER BY name";
				 $resCom = $obj->select($sqlCom);
				 foreach($resCom as $rowCom)
				 {
				 ?>
                <option value="<?php echo $rowCom['id']; ?>"  <?php  if($rowCom['id']==$community ) echo "selected='selected'";?>><?php echo $rowCom['name']; ?></option>
                <?php
				 }
				 ?>
              </select>
            </li>
            <li style="float:right;width:80px;">
              <input style="margin-top:0px;" type="image"  onmouseout="this.src = 'images/search_btn.jpg';" onMouseOver="this.src = 'images/search_btn_hvr.jpg';" src="images/search_btn.jpg" class="searchbtn" id="butSub" name="butSub">
            </li>
          </ul>
          <ul>
            <li style="margin-right:2px; width:97px;">
                                                                  <select name="priceMin" id="" style="width:97px;"  >  
                                                     <option value="">Min Price</option>                             
                                                        <option value="250000" <?php echo ($minsalePrice=='250000')?'selected':''?>>250,000 AED</option>
                                                        <option value="500000" <?php echo ($minsalePrice=='500000')?'selected':''?>>500,000 AED</option>
                                                        <option value="1500000" <?php echo ($minsalePrice=='1500000')?'selected':''?>>1,500,000 AED</option>
                                                        <option value="2000000" <?php echo ($minsalePrice=='2000000')?'selected':''?>>2,000,000 AED</option>
                                                        <option value="2500000" <?php echo ($minsalePrice=='2500000')?'selected':''?>>2,500,000 AED</option>
                                                        <option value="3000000" <?php echo ($minsalePrice=='3000000')?'selected':''?>>3,000,000 AED</option>
                                                        <option value="3500000" <?php echo ($minsalePrice=='3500000')?'selected':''?>>3,500,000 AED</option>
                                                        <option value="4000000" <?php echo ($minsalePrice=='4000000')?'selected':''?>>4,000,000 AED</option>
                                                        <option value="4500000" <?php echo ($minsalePrice=='4500000')?'selected':''?>>4,500,000 AED</option>
                                                        <option value="5000000" <?php echo ($minsalePrice=='5000000')?'selected':''?>>5,000,000 AED</option>
                                                        <option value="10000000" <?php echo ($minsalePrice=='10000000')?'selected':''?>>10,000,000 AED</option>
                                                        <option value="15000000" <?php echo ($minsalePrice=='15000000')?'selected':''?>>15,000,000 AED</option>
                                                        <option value="20000000" <?php echo ($minsalePrice=='20000000')?'selected':''?>>20,000,000 AED</option>
                                                        <option value="25000000" <?php echo ($minsalePrice=='25000000')?'selected':''?>>25,000,000 AED</option>
                                                   </select> 
            </li>
                                                   <li style="width:87px;">
												   <select name="priceMax" id="" style="width:97px;"  > 
                                                     <option value="">Max Price</option>                         
                                                        <option value="500000" <?php echo ($maxsalePrice=='500000')?'selected':''?>>500,000 AED</option>
                                                        <option value="1500000" <?php echo ($maxsalePrice=='1500000')?'selected':''?>>1,500,000 AED</option>
                                                        <option value="2000000" <?php echo ($maxsalePrice=='2000000')?'selected':''?>>2,000,000 AED</option>
                                                        <option value="2500000" <?php echo ($maxsalePrice=='2500000')?'selected':''?>>2,500,000 AED</option>
                                                        <option value="3000000" <?php echo ($maxsalePrice=='3000000')?'selected':''?>>3,000,000 AED</option>
                                                        <option value="3500000" <?php echo ($maxsalePrice=='3500000')?'selected':''?>>3,500,000 AED</option>
                                                        <option value="4000000" <?php echo ($maxsalePrice=='4000000')?'selected':''?>>4,000,000 AED</option>
                                                        <option value="4500000" <?php echo ($maxsalePrice=='4500000')?'selected':''?>>4,500,000 AED</option>
                                                        <option value="5000000" <?php echo ($maxsalePrice=='5000000')?'selected':''?>>5,000,000 AED</option>
                                                        <option value="10000000" <?php echo ($maxsalePrice=='10000000')?'selected':''?>>10,000,000 AED</option>
                                                        <option value="15000000" <?php echo ($maxsalePrice=='15000000')?'selected':''?>>15,000,000 AED</option>
                                                        <option value="20000000" <?php echo ($maxsalePrice=='20000000')?'selected':''?>>20,000,000 AED</option>
                                                        <option value="25000000" <?php echo ($maxsalePrice=='25000000')?'selected':''?>>25,000,000 AED</option>
                                                        <option value="30000000" <?php echo ($maxsalePrice=='30000000')?'selected':''?>> > 30,000,000 AED</option>
                                                   </select>
              <!--<div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount02" name="priceSale" style="width:80px;"  />
                    <span  style="color:#fff;">m+ (AED)</span> </p>
                  <div id="slider-range02"></div>
                </div>
              </div>-->
            </li>
              <li style="width:67px; margin-left:25px;">
                <select name="cmb_bed_min" id="cmb_bed_min" style="width:67px;"  >
                  <option value="">Min Beds </option>
                  <?php
													$sqlBed = "SELECT * FROM bedrooms WHERE is_active='Y' ORDER BY bed_order";
													$resBed = $obj->select($sqlBed);
													foreach($resBed as $rowBed)
													{
													?>
                  <option value="<?php echo $rowBed['bed_id']; ?>" <?php echo ($minbed==$rowBed['bed_id'])?'selected':''?>><?php echo $rowBed['bed_val']; ?></option>
                  <?php
													}
													?>
                </select>
              </li>
            <li style="width:67px;">
              <select name="cmb_bed_max" id="" style="width:67px;"  >  
                                                    <option value="">Max Beds </option>                          
                                                     <?php
													$sqlBed = "SELECT * FROM bedrooms WHERE is_active='Y' ORDER BY bed_order";
													$resBed = $obj->select($sqlBed);
													foreach($resBed as $rowBed)
													{
													?>           
                                                    <option value="<?php echo $rowBed['bed_id']; ?>" <?php echo ($maxbed==$rowBed['bed_id'])?'selected':''?>><?php echo $rowBed['bed_val']; ?></option>
                                                    <?php
													}
													?>                   
                                                   </select> 
              <!--<div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount03" name="bedSale" style="width:120px;" />
                    <span  style="color:#fff;">+</span> </p>
                  <div id="slider-range03"></div>
                </div>
              </div>-->
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</div>
