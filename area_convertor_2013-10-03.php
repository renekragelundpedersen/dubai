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
$fldproperty_area				= strip(get_param("prop_total_area"));
$fldproperty_area = strip(get_param("area"));

$cmb_area_type			= $AREA_SYMBOL;
$cmb_area_type_val		= $AREA_VAL;
$cmb_area_type				= get_param("cmb_area_type");


if(isset($_POST['Curr_Conv_Submit']))
{
	//print_r($_POST);
	$fldproperty_area			= strip(get_param("prop_total_area"));
	$cmb_area_type				= get_param("cmb_area_type");
#======================================================================================================================
# Validation
#======================================================================================================================
	$rules[] 	=  "required,prop_total_area,* Please enter area";
	$rules[] 	=  "required,cmb_area_type,* Please select area type";
	
	
	$errors = validateFields($_POST, $rules);
	foreach ($errors as $error)
		$errMsg .= $error."<br>";
		
	
	if($errMsg == "")
	{
		
		$cmb_area_type_val = FindOtherValue("area_type_master","area_type_id",$cmb_area_type,"area_type_value",$db);
		$cmb_area_type_symb = FindOtherValue("area_type_master","area_type_id",$cmb_area_type,"area_type_title",$db);
		$AREA_SYMBOL	= $cmb_area_type_symb;
		
		
		$fldproperty_area_val			= (($fldproperty_area)*$cmb_area_type_val)." ".$AREA_SYMBOL;
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
<link rel="stylesheet" type="text/css" media="all" href="<?=SERVER_URL?>css/email.css" />
<style>
dt{	width:287px!important; padding:0 0 0px!important;}
label{width:272px!important;}
</style>
</head>
<body style="background:#fff">
<div class="crew_top" style="width:282px; position:relative;"> 
<h2 style="color:#1F3157;">Area Converter</h2>
<form action="#" name="Frm_Curr_Conv" id="Frm_Curr_Conv" method="post" >
<dl>
<?
if($errMsg!="")
{
?>
<p style="font:normal 12px Arial, Helvetica, sans-serif; margin:0; padding:0; color:#c00; position:absolute; top:34px; float:none; left:0px;">
<?=$errMsg ?>
</p>
<?
}
?>

	<dt  style="font:normal 12px Arial, Helvetica, sans-serif;color:#1F3157;"><label for="name" style="color:#1F3157;">Area</label>
    <input type="text" id="prop_total_area"  class="field1" value="<?=$fldproperty_area?>" name="prop_total_area" style="color:#1F3157;"/> Sq.ft</dt>
	<dt>
    	<label for="yeid" style="color:#1F3157;">Convert</label>
    	<select class="field1" style="color:#1F3157;width: 255px; height: 33px; padding: 6px;" name="cmb_area_type" id="cmb_area_type">
        <option value="">Select Type</option>
        <?=FillListBox2("area_type_master","area_type_id",$cmb_area_type,"area_type_title"," WHERE 1 ORDER BY area_type_title",$db);?>
        </select>
    </dt>
   
    <dt style="background:none;">
    <label for="fd">&nbsp;</label>
     <input type="hidden" value="Curr_Conv_Submit" name="Curr_Conv_Submit" id="Curr_Conv_Submit" />
    <input type="image" src="<?=SERVER_URL?>images/submit.gif" class="btn-submit swap" alt="Submit" title="Submit" /></dt>
    <dt style="background:none;font:normal 12px Arial, Helvetica, sans-serif;color:#1F3157;">
    <label style="color:#1F3157;">Value</label>
    <?=$fldproperty_area_val?>
    </dt>
</dl>
</form>
</div>
</body>
</html>