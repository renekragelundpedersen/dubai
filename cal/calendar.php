<?PHP
/**
Copyright (C) 2008 ionix Limited
http://www.ionix.ltd.uk/

This script was written by ionix Limited, and was distributed
via the OpenCrypt.com Blog.

AJAX Calendar with PHP and mySQL
http://www.OpenCrypt.com/blog.php?a=29

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License as
published by the Free Software Foundation; either version 2 of
the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

GNU GPL License
http://www.opensource.org/licenses/gpl-license.php
*/

$global = "";
$field = "";
$input = "";
$text = "";

$global['dbhost'] = "localhost";
$global['dbname'] = "webchaco_dls";
$global['dbuser'] = "webchaco_dlsuser";
$global['dbpass'] = "dls123";

$global['timezone'] = ""; # See http://www.php.net/manual/en/timezones.php
$global['envself'] = $_SERVER['PHP_SELF'];

ini_set('error_reporting', E_ALL | E_STRICT);
ini_set('display_errors', 'On');
#ini_set('log_errors', 'On');
#ini_set('error_log', 'errors.log');

if (isset($_GET['ajax'])) {
	$input['ajax'] = mysql_escape_string(htmlentities(strip_tags($_GET['ajax'])));
} else {
	$input['ajax'] = "";
}
if ($input['ajax']=="1") {

	if (isset($global['dbname'])) {
	} else {
		if ($global['dbname']=="") {
			exit;
		}
	}

	$field['ajax_calendar_username'] = mysql_escape_string(htmlentities(strip_tags($_GET['u'])));
	$field['ajax_calendar_date'] = mysql_escape_string(htmlentities(strip_tags($_GET['d'])));

	if ($field['ajax_calendar_date']!="") {

		$field['ajax_calendar_status'] = mysql_escape_string(htmlentities(strip_tags($_GET['s'])));

		if ($field['ajax_calendar_status']=="1") {
			$query = "INSERT INTO oc_calendar (start_date, end_date, username) VALUES ('$field[ajax_calendar_date] 00:01', '$field[ajax_calendar_date] 23:59', '$field[ajax_calendar_username]');";
			$response = "Event added.";
		} else {
			$query = "DELETE FROM oc_calendar WHERE start_date LIKE '$field[ajax_calendar_date]%' AND username = '$field[ajax_calendar_username]';";
			$response = "Event removed.";
		}

		database($query);

	}

	print "<span class=\"text\">".$response."</span>";
	exit;

}

function calendar($year = "", $month = "", $username = "0", $small = "0", $calendar_owner = "0") {

global $global;
global $field;
global $input;
global $text;

if (isset($global['timezone'])) {
} else {
	$global['timezone'] = "";
}
if ($global['timezone']=="") {
	$global['timezone'] = "America/Los_Angeles";
}

if (function_exists('date_default_timezone_set')) {
	date_default_timezone_set($global['timezone']);
}

if ("$month"=="") {
	$month = date("n");
}
if ("$year"=="") {
	$year = date("Y");
}

if (isset($_GET['m'])) {
	$month = mysql_escape_string(htmlentities(strip_tags($_GET['m'])));
}
if (isset($_GET['y'])) {
	$year = mysql_escape_string(htmlentities(strip_tags($_GET['y'])));
}



$last_year = $year;
$last_month = $month;
$last_month--;
if ("$last_month"=="0") {
$last_year--;
$last_month = "12";
}

$next_year = $year;
$next_month = $month;
$next_month++;
if ("$next_month"=="13") {
$next_year++;
$next_month = "1";
}

$timestamp = mktime (0, 0, 0, $month, 1, $year);

$time = date("H:i:s");

$monthname = date("F", $timestamp);

if ($calendar_owner=="1") {
	print<<<END
<script type="text/javascript" src="functions.js"></script>
<script type="text/javascript" src="ajax_queue.js"></script>
<script type="text/javascript">

var calendar_status = new Array();

function calendar_date(id,status,username,default_color) {

	var dateid = document.getElementById(id);

	if (calendar_status[id]) {
	} else {
		calendar_status[id] = status;
	}
	if (calendar_status[id]=="0") {
		calendar_status[id] = "1";
	} else {
		calendar_status[id] = "0";
	}

	SimpleAJAXCall('calendar.php?ajax=1&u=' + username + '&d=' + id + '&s=' + calendar_status[id],SimpleAJAXCallback, '', 'response');

	if (calendar_status[id]=="0") {
		dateid.style.background = "#" + default_color;
	} else {
		dateid.style.background = "#0067C9";
	}
}

</script>
END;
}

if ("$small"=="1") {
	$width = "18";
	$small = "_small";
} else {
	$width = "22";
	$small = "";
}

#<table cellpadding=1 cellspacing=0 border=0 class="rounded">
#<tr>
#	<td bgcolor="#000080">
#<table cellpadding=5 cellspacing=0 border=0 class="rounded">
#<tr>
#	<td bgcolor="#e7e7e7">

$output = <<<END
	<table border="0" cellpadding="3" cellspacing="2" class="rounded5">
		<tr>
		<td width=$width>
END;
if ($small=="") {
$output .= <<<END
		<span class="calendar_navigation$small"><a href="$global[envself]?u=$username&y=$last_year&m=$last_month" class="calendar_navigation$small"><b>&lt;&lt;</b></a></span>
END;
}
$output .= <<<END
		</td>

		<td colspan="5" align="center">
			<span class="calendar_date$small"><b>$monthname $year</span>
		</td>
		<td width=$width align=right>
END;
if ($small=="") {
$output .= <<<END
		<span class="calendar_navigation$small"><a href="$global[envself]?u=$username&y=$next_year&m=$next_month" class="calendar_navigation$small"><b>&gt;&gt;</b></a></span>
END;
}
$output .= <<<END
		</td>
		</tr>
		<tr>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>Su</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>M</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>Tu</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>W</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>Th</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>F</b></span>
		</td>
		<td width=$width align=center bgcolor="#d7d7d7">
			<span class="calendar_day$small"><b>Sa</b></span>
		</td>
		</tr>
	</table>
	<table border="0" cellpadding="3" cellspacing="2" class="rounded5">
END;

			$monthstart = date("w", $timestamp);
			//if ($monthstart == 0){
				//$monthstart = 7;
			//}
			$lastday = date("d", mktime (0, 0, 0, $month + 1, 0, $year));
			$startdate = -$monthstart;

			//Figure out how many rows we need.
			$numrows = ceil (((date("t",mktime (0, 0, 0, $month + 1, 0, $year)) + $monthstart) / 7));

			//Let's make an appropriate number of rows...


			for ($k = 1; $k <= $numrows; $k++){
				$output .= "<tr>";
				//Use 7 columns (for 7 days)...
				for ($i = 0; $i < 7; $i++){
					$startdate++;
					if (($startdate <= 0) || ($startdate > $lastday)){
						//If we have a blank day in the calendar.
						$output .= "<td><span class=\"calendar_date_number$small\">&nbsp;</span></td>";
					} else {

						if (strlen($month) == "1") {
							$fmonth = "0".$month;
						} else {
							$fmonth = $month;
						}
						if (strlen($startdate) == "1") {
							$fstartdate = "0".$startdate;
						} else {
							$fstartdate = $startdate;
						}


						$lookup_date = "$year"."-"."$fmonth"."-"."$fstartdate";
						$date_status = "";

						if (($username!="") && ($global['dbuser']!="")) {
							$date_status = date_status($lookup_date, $username);
						}

						$status_color = "0067C9";
						$js_status = "1";

						if ($startdate == date("j") && $month == date("n") && $year == date("Y")){

							if ($date_status!="1") {
								$status_color = "CAD7F9";
								$js_status = "0";
							}

							$output .= "<td id=\"$year"."-"."$fmonth"."-"."$fstartdate\" width=$width valign=top align=center onclick=\"calendar_date('$year"."-"."$fmonth"."-"."$fstartdate','$js_status','$username','CAD7F9');\" bgcolor=\"#$status_color\">

							<table width=\"100%\" cellpadding=2 cellspacing=0 border=0><tr><td align=center>

							<span class=\"calendar_date_number$small\">$startdate</span>

							</td></tr></table></td>";

						} else {

							if ($date_status!="1") {
								$status_color = "e7e7e7";
								$js_status = "0";
							}

							$output .= "<td id=\"$year"."-"."$fmonth"."-"."$fstartdate\" width=$width valign=top align=center onclick=\"calendar_date('$year"."-"."$fmonth"."-"."$fstartdate','$js_status','$username','e7e7e7');\" bgcolor=\"#$status_color\">

							<table width=\"100%\" cellpadding=2 cellspacing=0 border=0><tr><td align=center>

							<span class=\"calendar_date_number$small\">$startdate</span>

							</td></tr></table></td>";
						}
					}
				}
				$output .= "</tr>";
			}
	$output .= "</table>"; # </td></tr></table></td></tr></table>

	if ("$calendar_owner"=="1") {

		$output = "<div id=\"response\"></div>".$output;

	}

return $output;

}

function database($querydb) {

global $global;
global $field;

if (isset($global['queries'])) {
	$global['queries']++;
} else {
	$global['queries'] = "1";
}
$field['queries'] = $global['queries'];
if (isset($global['query_log'])) {
	$global['query_log'] .= "\n<br>$querydb";
} else {
	$global['query_log'] = "$querydb";
}

mysql_connect($global['dbhost'], $global['dbuser'], $global['dbpass']) or return_error("Unable to connect to host $global[dbhost]");
mysql_select_db($global['dbname']) or return_error("Unable to select database $global[dbname]");
$global['dbresult'] = mysql_query($querydb) or return_error("Query Error: $querydb");

if ((substr($querydb,0,6)!="INSERT") && (substr($querydb,0,6)!="UPDATE") && (substr($querydb,0,6)!="DELETE")) {

	$global['dbnumber'] = mysql_numrows($global['dbresult']);

}

return;

}

function return_error($error) {
print $error;
exit;
}

function date_status($date, $username) {

global $global;
global $field;
global $input;
global $text;

$status = "0";

if ($username!="") {

	$query = "SELECT id, start_date, end_date FROM oc_calendar WHERE username = '$username' AND (date_format(start_date,'%Y-%m-%d') <= date_format('$date','%Y-%m-%d') AND date_format(end_date,'%Y-%m-%d') >= date_format('$date','%Y-%m-%d'))";

	database($query);

	for ($i = 0; $i < $global['dbnumber']; $i++) {

		$status = "1";

		$event_id = mysql_result($global['dbresult'],$i,"id");
		$event_start_date = mysql_result($global['dbresult'],$i,"start_date");
		$event_end_date = mysql_result($global['dbresult'],$i,"end_date");

	}
}

return $status;

}

?>