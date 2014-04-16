<?
function get_country_name_by_id($id='')
{
	
	return get_name_by_id("countrylist","id","country_name",$id,"");
}

function get_city_name_by_id($id='')
{
	
	return get_name_by_id("city","city_id","city_name",$id,"");
}
function get_location_name_by_id($id='')
{
	
	return get_name_by_id("property_location","locid","location_name",$id,"");
}
function get_project_name_by_id($id='')
{
	
	//return get_name_by_id("project_master","project_id","project_name",$id,"");
	return get_name_by_id("property_project","locid","location_name",$id,"");
}
function get_type_ref_name_by_id($id='')
{
	//return get_name_by_id("project_master","project_id","project_name",$id,"");
	return get_name_by_id("property_type_master","typeid","typename",$id,"");
}

function get_dev_name_by_id($id='')
{
	/*echo "d";
	echo $id;
	die();*/
	return get_name_by_id("developments","id","name",$id,"");
}
function convert_str($str)
{
	if($str == "")
	$new_str = "-";
	else
	$new_str = str_replace(array(""," ","\"","&",",","*"),"-",$str);
	return $new_str;
}

function get_bed_by_id($id='')
{
	
	return get_name_by_id("bedrooms","bed_id","bed_val",$id,"");
}
function get_bath_by_id($id='')
{
	
	return get_name_by_id("bathrooms","bath_id","bath_val",$id,"");
}


?>