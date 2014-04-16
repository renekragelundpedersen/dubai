<?PHP

// CSS/Stylesheets

print<<<END
<style type="text/css">
.calendar_date					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 14px; color : #222222; }
a.calendar_date					{ color: #0000aa; text-decoration: none; }
a.calendar_date:hover			{ color: #000080; text-decoration: underline; }

.calendar_navigation			{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 14px; color : #222222; }
a.calendar_navigation			{ color: #0000aa; text-decoration: none; }
a.calendar_navigation:hover		{ color: #000080; text-decoration: underline; }

.calendar_day					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 11px; color : #222222; }
a.calendar_day					{ color: #0000aa; text-decoration: none; }
a.calendar_day:hover			{ color: #000080; text-decoration: underline; }

.calendar_date_number			{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 10px; color : #222222; }
a.calendar_date_number			{ color: #0000aa; text-decoration: none; }
a.calendar_date_number:hover	{ color: #000080; text-decoration: underline; }

.calendar_date_small					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 12px; color : #222222; }
a.calendar_date_small					{ color: #0000aa; text-decoration: none; }
a.calendar_date_small:hover			{ color: #000080; text-decoration: underline; }

.calendar_navigation_small			{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 12px; color : #222222; }
a.calendar_navigation_small			{ color: #0000aa; text-decoration: none; }
a.calendar_navigation_small:hover		{ color: #000080; text-decoration: underline; }

.calendar_day_small					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 10px; color : #222222; }
a.calendar_day_small					{ color: #0000aa; text-decoration: none; }
a.calendar_day_small:hover			{ color: #000080; text-decoration: underline; }

.calendar_date_number_small			{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 9px; color : #222222; }
a.calendar_date_number_small			{ color: #0000aa; text-decoration: none; }
a.calendar_date_number_small:hover	{ color: #000080; text-decoration: underline; }

table.rounded td 		{ -moz-border-radius: 10px 10px 10px 10px; }
table.rounded5 td 		{ -moz-border-radius: 5px 5px 5px 5px; }
table.notrounded td 		{ -moz-border-radius: 0px 0px 0px 0px; }

.text					{ font-family : Verdana, Arial, Helvetica, sans-serif; font-size : 13px; color : #222222; }
a.text					{ color: #0000aa; text-decoration: none; }
a.text:hover			{ color: #222222; text-decoration: underline; }

</style>
END;


// Load Calendar for 'testuser' with AJAX day status selection

require "calendar.php";
print calendar("", "", "testuser", 0, 1);


?>