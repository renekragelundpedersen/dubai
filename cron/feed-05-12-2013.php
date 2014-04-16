<?php
ini_set('memory_limit', '512M');

require_once("/home/innovate/public_html/connect.php");
$xml = simplexml_load_file('http://www.propspace.com/feed/xml.php?cl=1087&pid=8245&acc=8807');

foreach($xml as $data)
{
	if($data->Ad_Type == "Sale")
	{
		$type = strtolower($data->Ad_Type.'s');
	}
	else
	{
		$type = strtolower($data->Ad_Type);
	}
	
	$subType = $data->Unit_Type;
	$sqlType = "select typeid,typename from property_type_master where typename = '$subType'";
	$resType = mysql_query($sqlType);
	$rowType = mysql_fetch_array($resType);
	$subType = $rowType['typeid'];
	$totalArea = $data->Unit_Builtup_Area;
	$bathroom = $data->No_of_Bathroom;
	
	$sqlBath = "select bath_id,bath_val from bathrooms where bath_val = '$bathroom'";
	$resBath = mysql_query($sqlBath);
	$rowBath = mysql_fetch_array($resBath);
	$bathroom = $rowBath['bath_id'];
	$title = addslashes($data->Property_Title);
	$slug = slug($title,'property_master');
	$desc = addslashes($data->Web_Remarks);
	
	
	$city = $data->Emirate;
	$sqlCity = "select city_name,city_id from city where city_name = '$city'";
	$resCity = mysql_query($sqlCity);
	$rowCity = mysql_fetch_array($resCity);

	$city = $rowCity['city_id'];

	$community = $data->Community;
	if($community=='JBR')
	{
	$community = 'Jumeirah Beach Residence';
	}
	$sqlLoc = "select id,name from property_developments where name = '$community'";
	$resLoc = mysql_query($sqlLoc);
	$count = mysql_num_rows($resLoc);
	if($count > 0)
	{
	$rowLoc = mysql_fetch_array($resLoc);
	$location = $rowLoc['id'];
	}
	else
	{
	$sqlLo = "insert into property_developments(name) values('$community')";
	$resLo = mysql_query($sqlLo);
	$sqlLoc = "select id,name from property_developments where name = '$community'";
	$resLoc = mysql_query($sqlLoc);
	$rowLoc = mysql_fetch_array($resLoc);
	$location = $rowLoc['id'];
	}
	$project = $data->Property_Name;
	if($project!="")
	{
	$sqlpro = "select * from property_project where location_name = '$project'";
	$respro = mysql_query($sqlpro);
	$rowpro = mysql_fetch_array($respro);
	if(mysql_num_rows($respro) > 0)
	{
	$projid = $rowpro['locid'];
	}
	else
	{
	$sqlin = "insert into property_project(location_name) values('$project')";
	$resin = mysql_query($sqlin);
	$sqlpro = "select * from property_project where location_name = '$project'";
	$respro = mysql_query($sqlpro);
	$rowpro = mysql_fetch_array($respro);
	$projid = $rowpro['locid'];
	}
	}

	$ref = $data->Property_Ref_No;
	$arr = $arr.','."'".$ref."'";
	$arr3 = trim($arr,',');
	//$arr2 = explode(',',$arr3);
	$agent = $data->Listing_Agent;
	$phone = $data->Listing_Agent_Phone;
	$added = explode(' ',$data->Listing_Date);
	$time = explode(":",$added[1]);
	if($added[2] == 'pm')
	{
		$time[0] = $time[0] + 12;
	}
	$addedOn = $added[0].' '.$time[0].":".$time[1].":".$time[2];
	$updated = explode(' ',$data->Last_Updated);
	$time2 = explode(":",$updated[1]);
	if($updated[2] == 'pm')
	{
		$time2[0] = $time2[0] + 12;
	}
	$updatedOn = $updated[0].' '.$time2[0].":".$time2[1].":".$time2[2];
	$bed = $data->Bedrooms;
	if($bed=="")
	{
	$bed=0;
	}
	
	$sqlBed = "select bed_val,bed_id from bedrooms where bed_val = '$bed'";
	$resBed = mysql_query($sqlBed);
	$rowBed = mysql_fetch_array($resBed);
	$bed = $rowBed['bed_id'];

	$email = $data->Listing_Agent_Email;
	if($data->Ad_Type == "Sale")
	{
		$price1 = $data->Price;
	}
	else
	{
		$price2 = $data->Price;
		$freq = $data->Frequency;
	}
	$latitude = $data->Latitude;
	$longitude = $data->Longitude;
	$measure = $data->unit_measure;
	$feature = $data->Featured;
	if($feature == 0)
	{
		$feature = 'N';
	}
	else
	{
		$feature = 'Y';
	}
	
	$fac = "";
	$facilities = $data->Facilities;
		
	if(($facilities)){
		foreach($facilities[0] as $facility)
		{
			$fac .= "<>".addslashes($facility);
		}
		$fac = $fac;
	}
	
	$images = $data->Images;
	$sqlChe = "select * from agents_master where email = '$email' and phone = '$phone' and name = '$agent'";
	$resChe = mysql_query($sqlChe);
	if(mysql_num_rows($resChe) > 0)
	{
//		$sqlAgent = "update agents_master set name = '$agent', phone = '$phone' where email = '$email'";
//		$resAgent = mysql_query($sqlAgent);
		$rowChe = mysql_fetch_array($resChe);
		$agentId = $rowChe['id'];
	}
	else
	{
		$sqlAgent = "insert into agents_master (name, phone, email, is_active) values('$agent', '$phone', '$email', 'Y')";
		$resAgent = mysql_query($sqlAgent);
		$agentId = mysql_insert_id();
	}
	$sqlCh = "select * from property_master where prop_ref_no = '$ref'";
	$resCh = mysql_query($sqlCh);
	$fetchData = mysql_fetch_object($resCh);
	if(mysql_num_rows($resCh) > 0)
	{
	$sqlIns = "update property_master set prop_for_id = '$type', type_ref_id = '$subType', total_area = '$totalArea', no_bathrooms = '$bathroom', prop_name = '$title', prop_desc = '$desc', city = '$city', location = '$location', prop_ref_no = '$ref', no_beds = '$bed', prop_price = '$price1', annual_rent = '$price2', period = '$freq', latitude = '$latitude', longitude = '$longitude', prop_facilities = '$fac', is_active = 'Y', is_pending = 'N', is_rejected = 'N', is_sold = 'N', development='$location', prop_agent_id = '$agentId', country ='1', project = '$projid', modified_on = '$updatedOn' where prop_ref_no = '$ref'";
		$propId = $fetchData->prop_id;
		$last_updated = $fetchData->modified_on;
		$resIns = mysql_query($sqlIns);
	}
	else
	{
$sqlIns = "insert into property_master(prop_for_id, type_ref_id, total_area, no_bathrooms, prop_name, prop_desc, city, location, development, prop_ref_no, no_beds, prop_price, annual_rent, period, latitude, longitude, is_featured, prop_facilities, is_active, is_pending, is_rejected, is_sold, prop_agent_id, slug, country, added_on, modified_on, project) values ('$type','$subType', '$totalArea', '$bathroom', '$title', '$desc', '$city', '$location', '$location', '$ref', '$bed', '$price1', '$price2', '$freq', '$latitude', '$longitude', '$feature', '$fac', 'Y', 'N', 'N', 'N', '$agentId', '$slug', '1', '$addedOn', '$updatedOn','$projid')";
		$resIns = mysql_query($sqlIns);
		$propId = mysql_insert_id();
		$last_updated = $updatedOn;
	}
	//echo '<pre>';print_r($images[0]);//&&  != $updatedOn
	if($images[0])
	{
		if($last_updated !=$updatedOn )
		mysql_query("DELETE from property_image_master where prop_ref_id ='$propId' ");
		$i=1;
		foreach($images[0] as $image)
		{
		$ext = explode(".",$image);
		if($ext[3]!="pdf")
		{
			$sqlPh = "select * from property_image_master where image_name = '$image' AND prop_ref_id ='$propId' ";
			$resPh = mysql_query($sqlPh);
			if(mysql_num_rows($resPh) ==0)
			{
				$sqlImg = "insert into property_image_master (prop_ref_id, image_name, image_for, added_on,display_order) values('$propId', '$image', '$type', NOW(),'$i')";
				$resImg = mysql_query($sqlImg);
			}
			}
			$i++;
		}
	}
}
//print_r($arr3);
$sqlDe = "DELETE FROM property_master WHERE prop_ref_no NOT IN ($arr3)";
mysql_query($sqlDe);
if($resIns)
{
echo "Successfully Exported";
mail( "rakeshkavil@gmail.com", "Innovate Cron",'Cron Executed - Successfully Exported', "From: rakesh@webchannel.ae" );
}
?>