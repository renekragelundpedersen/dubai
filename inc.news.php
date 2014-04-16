<section id="news">
  <div class="news_scroll"> <span class="news_head">Real Estate News</span>
    <div id="ticker-wrapper" class="no-js">
      <ul id="js-news" class="js-hidden">
        <?php
                    $sqlNew = "SELECT * FROM news_master WHERE is_active = 'Y' ORDER BY added_on DESC LIMIT 2";
                    $resNew = $obj->select($sqlNew);
                    ?>
        <?php
                    foreach($resNew as $rowNew)
                    {
                    ?>
        <li class="news-item"><a class="red" href="<?php echo $siteURL; ?>news-details.php?nid=<?php echo $rowNew['slug'] ?>"><?php echo date('dS F Y', strtotime($rowNew['added_on'])); ?> : </a><a class="red" href="<?php echo $siteURL; ?>news-details.php?nid=<?php echo $rowNew['slug'] ?>"><?php echo stripslashes($rowNew['news_title']); ?></a></li>
        <?php
					}
					?>
      </ul>
    </div>
  </div>
</section>
