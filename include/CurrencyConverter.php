<!--diggslashdotredditnetscapefurldeliciousstumbleupontechnoratisquidooswikyahoomywebgooglebookmarkswindowsliverss
Web Design & SEO Optimisation Services

Web Design UK, London, Kent & The South East

02083006531
Free Consultation
PHP Currency Conversion - Exchange Rates XML

With this script you can freely convert between 36 different currencies from around the world. The script uses exchange rates downloaded from the European Central Bank via an xml file located at www.ecb.int/stats/eurofxref/eurofxref-daily.xml. The rates are then stored in your own MySQL database for use and then updated daily.

Example: £2.50 = $4.03

If you find this script useful then please consider making a donation to the developer
The code
-->
<?php
 
/*
* File: CurrencyConverter.php
* Author: Simon Jarvis
* Copyright: 2005 Simon Jarvis
* Date: 10/12/05
* Link: http://www.white-hat-web-design.co.uk/articles/php-currency-conversion.php
* 
* This program is free software; you can redistribute it and/or 
* modify it under the terms of the GNU General Public License 
* as published by the Free Software Foundation; either version 2 
* of the License, or (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful, 
* but WITHOUT ANY WARRANTY; without even the implied warranty of 
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
* GNU General Public License for more details: 
* http://www.gnu.org/licenses/gpl.html
*
*/
 
class CurrencyConverter {
   
   var $xml_file = "www.ecb.int/stats/eurofxref/eurofxref-daily.xml";
   var $mysql_host, $mysql_user, $mysql_pass, $mysql_db, $mysql_table;
   var $exchange_rates = array();
 
   //Load Currency Rates
   function CurrencyConverter($host='',$user='',$pass='',$db='',$tb='') {
      $this->mysql_host = "localhost";
      $this->mysql_user = "root";
      $this->mysql_pass = "";
      $this->mysql_db = "appello";
      $this->mysql_table = "online_currency";
 
      $this->checkLastUpdated();
 
      $conn = mysql_connect($this->mysql_host,$this->mysql_user,$this->mysql_pass);
 
      $rs = mysql_select_db($this->mysql_db,$conn);
 
      $sql = "SELECT * FROM ".$this->mysql_table;
 
      $rs =  mysql_query($sql,$conn);
   
      while($row = mysql_fetch_array($rs)) {
         $this->exchange_rates[$row['currency']] = $row['rate'];         
      }
   }
 
   /* Perform the actual conversion, defaults to £1.00 GBP to USD */
   function convert($amount=1,$from="GBP",$to="USD",$decimals=2) {
      return(number_format(($amount/$this->exchange_rates[$from])*$this->exchange_rates[$to],$decimals));
   }
 
   /* Check to see how long since the data was last updated */
   function checkLastUpdated() {
      $conn = mysql_connect($this->mysql_host,$this->mysql_user,$this->mysql_pass);
 
      $rs = mysql_select_db($this->mysql_db,$conn);
 
      $sql = "SHOW TABLE STATUS FROM ".$this->mysql_db." LIKE '".$this->mysql_table."'";
 
      $rs =  mysql_query($sql,$conn);
 
      if(mysql_num_rows($rs) == 0 ) {
         $this->createTable();
      } else {
         $row = mysql_fetch_array($rs);
         if(time() > (strtotime($row["Update_time"])+(12*60*60)) ) {
            $this->downloadExchangeRates();         
         }
      }
   }
 
   /* Download xml file, extract exchange rates and store values in database */
   function downloadExchangeRates() {
      $currency_domain = substr($this->xml_file,0,strpos($this->xml_file,"/"));
      $currency_file = substr($this->xml_file,strpos($this->xml_file,"/"));
      $fp = @fsockopen($currency_domain, 80, $errno, $errstr, 10);
      if($fp) {
         $out = "GET ".$currency_file." HTTP/1.1\r\n";
         $out .= "Host: ".$currency_domain."\r\n";
         $out .= "User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8) Gecko/20051111 Firefox/1.5\r\n";
         $out .= "Connection: Close\r\n\r\n";
         fwrite($fp, $out);
         while (!feof($fp)) {
            $buffer .= fgets($fp, 128);
         }
         fclose($fp);
 
         $pattern = "{<Cube\s*currency='(\w*)'\s*rate='([\d\.]*)'/>}is";
         preg_match_all($pattern,$buffer,$xml_rates);
         array_shift($xml_rates);
 
         for($i=0;$i<count($xml_rates[0]);$i++) {
            $exchange_rate[$xml_rates[0][$i]] = $xml_rates[1][$i];
         }
 
         $conn = mysql_connect($this->mysql_host,$this->mysql_user,$this->mysql_pass);
 
         $rs = mysql_select_db($this->mysql_db,$conn);
            
         foreach($exchange_rate as $currency=>$rate) {
            if((is_numeric($rate)) && ($rate != 0)) {
               $sql = "SELECT * FROM ".$this->mysql_table." WHERE currency='".$currency."'";
               $rs =  mysql_query($sql,$conn) or die(mysql_error());
               if(mysql_num_rows($rs) > 0) {
                  $sql = "UPDATE ".$this->mysql_table." SET rate=".$rate." WHERE currency='".$currency."'";
               } else {
                  $sql = "INSERT INTO ".$this->mysql_table." VALUES('".$currency."',".$rate.")";
               }
               $rs =  mysql_query($sql,$conn) or die(mysql_error());
            }
         }   
      }
   }
 
   /* Create the currency exchange table */
   function createTable() {
      $conn = mysql_connect($this->mysql_host,$this->mysql_user,$this->mysql_pass);
 
      $rs = mysql_select_db($this->mysql_db,$conn);
 
      $sql = "CREATE TABLE ".$this->mysql_table." ( currency char(3) NOT NULL default '', rate float NOT NULL default '0', PRIMARY KEY(currency) ) ENGINE=MyISAM";
      
      $rs =  mysql_query($sql,$conn) or die(mysql_error());
 
      $sql = "INSERT INTO ".$this->mysql_table." VALUES('EUR',1)";
 
      $rs =  mysql_query($sql,$conn) or die(mysql_error());
      
      $this->downloadExchangeRates();   
   }
 
}
 
?>

<!--Usage

Copy the above code into a new file and save it as CurrencyConverter.php. Whenever you need to make a conversion just include the class file and call the 'convert' function. You will need to enter your own mysql database variables such as the login details. The example below will convert £2.50 GBP into US Dollars ($).
-->
<?php
   //include('CurrencyConverter.php');
   //$x = new CurrencyConverter('your_host','your_username','your_password','your_database_name','your_table_name');
   //echo $x->convert(2.50,'GBP','USD');
?>

<!--If the table doesn't already exist then it will be created by the script.

If you have any problems using this script please email us.
Currency Codes

British Pounds = GBP, US Dollars = USD, Euros = EUR, Australian Dollars = AUD, Bulgarian Leva = BGN, Canadian Dollars = CAD, Swiss Francs = CHF, Chinese Yuan Renminbi = CNY, Cyprian Pounds = CYP, Czech Koruny = CZK, Danish Kroner = DKK, Estonian Krooni = EEK, Hong Kong, Dollars = HKD, Croatian Kuna = HRK, Hungarian Forint = HUF, Indonesian Rupiahs = IDR, Icelandic Kronur = ISK, Japanese Yen = JPY, South Korean Won = KRW, Lithuanian Litai = LTL, Latvian Lati = LVL, Malta Liri = MTL, Malaysian Ringgits = MYR, Norwegian Krone = NOK, New Zealand Dollars = NZD, Philippine Pesos = PHP, Polish Zlotych = PLN, Romanian New Lei = RON, Russian Rubles = RUB, Swedish Kronor = SEK, Singapore Dollars = SGD, Slovenian Tolars = SIT, Slovakian Koruny = SKK, Thai Baht = THB, Turkish New Lira = TRY, South African Rand = ZAR

    * » Web Design
    * » SEO
    * » E-Commerce
    * » Content Writing
    * » PPC Management
    * » Directory Submission

    * » Home
    * » About Us
    * » Contact Us
    * » Graphics
    * » Photography
    * » Get A Quote
    * » SEO Calculator
    * » Compare Packages
    * » Portfolio
    * » SEO Results
    * » Websites For Sale
    * » Jobs
    * » Articles
    * » Search Engines
    * » Scripts
    * » SEO Tools

XHTML
CSS
PHP
MySQL
Twitter

Select your font size
Decrease Font SizeIncrease Font Size

disclaimer | terms | privacy | areas covered | link exchange | sitemap | contact

© 2005-2008 White Hat Web Design - a Sidcup Kent / London UK based web design and search engine optimisation company offering services worldwide
-->