<? 
session_start();
#======================================================================================================================
# Includes
#======================================================================================================================	
include_once("connect.php");
#======================================================================================================================
# Variables
#======================================================================================================================
$errMsg	= "";
$fldproperty_price_val = "0.00";
$fldproperty_id					= strip(get_param("prop_id"));
$fldproperty_price				= $_REQUEST['propprice'];

$cmb_curr				= $CURR_SYMBOL;
$cmb_curr_val			= $CURR_VAL;
$cmb_curr				= get_param("cmb_curr");


if(isset($_POST['Curr_Conv_Submit']))
{
	//print_r($_POST);
	$fldproperty_price			= strip(get_param("prop_price"));
	$cmb_curr      				= strip(get_param("cmb_curr"));
#======================================================================================================================
# Validation
#======================================================================================================================
	$rules[] 	=  "required,prop_price,* Please enter price";
	$rules[] 	=  "required,cmb_curr,* Please select currency";
	
	
	$errors = validateFields($_POST, $rules);
	foreach ($errors as $error)
		$errMsg .= $error."<br>";
		
	
	if($errMsg == "")
	{
		
		$cmb_curr_val 	= FindOtherValue("currency","id",$cmb_curr,"value",$db);
		$cmb_curr_symb 	= FindOtherValue("currency","id",$cmb_curr,"symbol",$db);
		$CURR_SYMBOL	= $cmb_curr_symb;
		$fldproperty_price_val			= $CURR_SYMBOL." ".currency_format(($fldproperty_price)*$cmb_curr_val);
	}
		
		
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Currency Convertor</title>
<meta name="description" content="Momentum Green" />
<meta name="keywords" content="" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="author" content="Momentum Green" />
<meta name="generator" content="" />
<meta name="copyright" content="" />
<meta name="robots" content="All" />
<link rel="Shortcut Icon" href="favicon.ico" type="image/x-icon" />
<link rel="stylesheet" type="text/css" media="all" href="<?php echo SERVER_URL?>css/email.css" />
</head>
<style>
dt{	width:287px!important;}
label{width:272px!important;}

</style>



<body style="background:#fff">
<div class="crew_top" style="width:282px; position:relative;"> 
<h2 style="color:#1F3157;">Currency Converter</h2>

<form action="#" name="Frm_Curr_Conv" id="Frm_Curr_Conv" method="post" >
<dl>
<?
if($errMsg!="")
{
?>
<p style=" color:#1F3157;font:normal 12px Arial, Helvetica, sans-serif; margin:0; padding:0; color:#c00; position:absolute; top:34px; float:none; left:0px;">
<?php echo $errMsg ?>
</p> 
   
    
<?
}
?>
	<dt style="padding:0 0 0px;font:normal 12px Arial, Helvetica, sans-serif;color:#1F3157;"><label for="name" style="color:#1F3157;"><strong>Price</strong></label>
    <input class="field1" type="text" id="prop_price" value="<?php echo $fldproperty_price?>" name="prop_price" style="color:#1F3157;"/>AED</dt>
	<dt style="padding:0 0 0px;">
    	<label style="color:#1F3157;" for="yeid"><strong>Convert</strong></label>
    	<select class="field1" style="color:#1F3157;width: 255px; height: 33px; padding: 6px;" name="cmb_curr" id="cmb_curr">
        <option value="">Select Currency</option>
        <?php echo FillListBox2("currency","id",$cmb_curr,"symbol"," WHERE 1 AND id !=1 ORDER BY symbol",$db);?>
        </select>
    </dt>
   
    <dt style="background:none; padding:0 0 0px;">
    <label for="fd">&nbsp;</label>
    <input type="hidden" value="Curr_Conv_Submit" name="Curr_Conv_Submit" id="Curr_Conv_Submit" />
    <input type="image" src="<?php echo SERVER_URL?>images/submit.gif" class="btn-submit swap" alt="Submit" title="Submit" /></dt>
    <dt style="background:none;padding:0 0 0px;">
    <label><strong>Value</strong></label>
    <p style="float:left;width:100px; margin:0; padding:0; color:#1F3157;"><strong><?php echo $fldproperty_price_val?></strong></p>
    </dt>
</dl>
    <small style="color:#1F3157;">“These rates are solely for indication purpose. Innovate Properties accepts no liability for these indicative rates, or for the consequences of any actions taken on the basis of the information provided, unless that information is subsequently confirmed in writing” </small>
</form>
</div>
</body>
</html>