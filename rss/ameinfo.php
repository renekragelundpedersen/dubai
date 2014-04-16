<?php

include("/home/innovate/public_html/connect.php");

function wcVarDebug($var, $echo = true) {

	$var = "<div style=\"border:1px solid #f00;font-family:arial;font-size:12px;font-weight:normal;background:#f0f0f0;text-align:left;padding:3px;\"><pre>".print_r($var, true)."<br/></pre></div>";

	if($echo) {

		echo $var;

	} else {

		return $var;

	}

}



$source = 'http://www.ameinfo.com/rssfeeds/2362.xml';

// load as string

$xmlstr = file_get_contents($source);

$sitemap = new SimpleXMLElement($xmlstr);

// load as file

$sitemap = new SimpleXMLElement($source,null,true);

if(is_object($sitemap)){

	foreach($sitemap->channel->item as $url) {



		$title = addslashes($url->title);
		
		$slug = slug($title,'news_master');

		$time = strtotime($url->pubDate);



		$description = addslashes($url->description);

		$link = $url->link;



		$newsDate =  date("Y-m-d",$time);

		$now = date("Y-m-d h:i:s");



		$checkQry =  mysql_query("SELECT * FROM news_master WHERE news_title = '".$title."'");

		$num = mysql_num_rows($checkQry);

		//echo "SELECT * FROM news_master WHERE news_title = '".$title."'";

		

		if($num == 0){



			mysql_query("INSERT INTO news_master SET slug='$slug', news_title = '$title', news_content = '$description', news_date = '$newsDate', news_link = '$link', added_on = '$now', last_modified = '$now'");



		}

	}

}

?>