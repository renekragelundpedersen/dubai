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
                <option value="<?php echo $rowTyp['typeid']; ?>"><?php echo $rowTyp['typename']; ?></option>
                <?php
								 }
								 ?>
              </select>
            </li>
            <li>
              <select name="community"  style="width:133px;">
                <option value="">Community</option>
                <?php
								 $sqlCom = "SELECT * FROM property_developments WHERE is_active = 'Y' ORDER BY name";
								 $resCom = $obj->select($sqlCom);
								 foreach($resCom as $rowCom)
								 {
								 ?>
                <option value="<?php echo $rowCom['id']; ?>"><?php echo $rowCom['name']; ?></option>
                <?php
								 }
								 ?>
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
                    <input type="text" id="amount" name="priceRent" style="width:80px;"  />
                    <span style="color:#fff;">k+ (AED)</span> </p>
                  <div id="slider-range"></div>
                </div>
              </div>
            </li>
            <li>
              <label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Bedrooms</label>
              <div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount01" name="bedRent" style="width:120px;"  />
                    <span  style="color:#fff;">+</span> </p>
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
                <option value="<?php echo $rowTyp['typeid']; ?>"><?php echo $rowTyp['typename']; ?></option>
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
                <option value="<?php echo $rowCom['id']; ?>"><?php echo $rowCom['name']; ?></option>
                <?php
								 }
								 ?>
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
                    <input type="text" id="amount02" name="priceSale" style="width:80px;"  />
                    <span  style="color:#fff;">m+ (AED)</span> </p>
                  <div id="slider-range02"></div>
                </div>
              </div>
            </li>
            <li>
              <label style="width:66%;  padding-bottom: 0px; position:absolute; top:-3px; left:0px;">Bedrooms</label>
              <div class="price_range_pro">
                <div class="demo">
                  <p>
                    <input type="text" id="amount03" name="bedSale" style="width:120px;" />
                    <span  style="color:#fff;">+</span> </p>
                  <div id="slider-range03"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</div>
