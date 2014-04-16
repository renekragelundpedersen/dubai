<!--Using Yahoo! Finance Currency Conversion Data in a PHP Script
-->
<!--A very simple PHP script is all that it takes to obtain the conversion rate, one that will format the url and then read the stream of data returned from the Yahoo! web site:
-->
<?

function show_currency_conversion ($currency_from, $currency_to) {
$url = "http://quote.yahoo.com/d/quotes.csv?s="
. $currency_from . $currency_to . "=X"
. "&f=l1&e=.csv";
$open = fopen($url, "r");
$exchange_rate = fread($open, 2000);
fclose($open);
echo $exchange_rate;
}
?>
<!--If this function is saved into a PHP library (for example yahoo_finance.php) then it can be called from any PHP web page:
-->
<?php
//include ("yahoo_finance.php");


$currency_from=$_REQUEST['currency_from'];
$currency_to=$_REQUEST['currency_to'];
show_currency_conversion ('AED', 'EUR');
?>

<!--And if this script is saved as yahoo_currency.php then it may be tested by calling it via a web browser, for example:
http://<my server>/yahoo_currency.php?currency_from=USD&currency_to=GBP

Read more at Suite101: Currency Conversion with Yahoo! Finance: How General Users and Programmers can Convert Currencies On-line | Suite101.com http://ajax-programming.suite101.com/article.cfm/currency_conversion_with_yahoo_finance#ixzz0aOmlCEI1
-->