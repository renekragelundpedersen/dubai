/***
 * Contains basic SlickGrid formatters.
 * @module Formatters
 * @namespace Slick
 */

(function ($) {

	$.extend(true, window, {
		"Slick": {
			"Formatters": {
			"Hostname": HostnameFormatter,
			"Browser": BrowserFormatter,
			"Status": StatusFormatter,
			"Location": LocationFormatter,
			"Pages": PagesFormatter,
			"Referrer": ReferrerFormatter,
			"Seconds": SecondsFormatter,
			"Date": DateFormatter
			}
		}
	});

	function HostnameFormatter(row, cell, value, columnDef, dataContext) {
		return convertHostname(dataContext);
	}

	function BrowserFormatter(row, cell, value, columnDef, dataContext) {
		var file = '';
		file = convertBrowserIcon(value, true);
		image = "<div class='" + file + "'></div>";
		return image;
	}
	
	function StatusFormatter(row, cell, value, columnDef, dataContext) {
		if (value < 0) {
			return 'Chat Ended';
		} else if (value > 0) {
			return 'Chatting';
		} else {
			return 'Browsing';
		}
	}
	
	function LocationFormatter(row, cell, value, columnDef, dataContext) {
		var location = convertCountry(dataContext),
			image = convertCountryIcon(value);
		
		if (location !== undefined) {
			image = "<span class='" + image + "' style='margin-right:3px; display:inline-block'></span>" + location;
		}
			
		return image;
	}
	
	function PagesFormatter(row, cell, value, columnDef, dataContext) {
		return value.split(';').length;
	}
	
	function ReferrerFormatter(row, cell, value, columnDef, dataContext) {
		return convertReferrer(value);
	}
	
	function zeroFill(number, width) {
		width -= number.toString().length;
		if (width > 0) {
			return new Array(width + (/\./.test(number) ? 2 : 1) ).join('0') + number;
		}
		return number;
	}
	
	function SecondsFormatter(row, cell, value, columnDef, dataContext) {
		var hours = 0,
			minutes = 0,
			seconds = 0;
		
		seconds = parseInt(value, 10);
		minutes = seconds / 60;
		hours = parseInt(minutes / 60, 10);
		seconds = parseInt(seconds % 60, 10);
		minutes = parseInt(minutes % 60, 10);
		
		return zeroFill(hours, 2) + ':' + zeroFill(minutes, 2) + ':' + zeroFill(seconds, 2);
	}
	
	function DateFormatter(row, cell, value, columnDef, dataContext) {
		var date = new Date.parse(value);
		
		return date.toString('dddd MMM dd yyyy') + '<br/>' + date.toString('h:mm:ss tt');
	}
	
})(jQuery);