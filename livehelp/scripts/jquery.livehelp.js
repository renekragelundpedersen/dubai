/*! Third Party jQuery Plugins Licensed under MIT or LGPL - Licenses: /livehelp/scripts/LICENSES.TXT */

/*
 * jQuery JSON Plugin
 * version: 2.3 (2011-09-17)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is
 * copyrighted 2005 by Bob Ippolito.
 */

(function ($) {

	var	escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
		meta = {
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		};

	/*
	 * jQuery.toJSON
	 * Converts the given argument into a JSON respresentation.
	 *
	 * @param o {Mixed} The json-serializble *thing* to be converted
	 *
	 * If an object has a toJSON prototype, that will be used to get the representation.
	 * Non-integer/string keys are skipped in the object, as are keys that point to a
	 * function.
	 *
	 */
	$.toJSON = typeof JSON === 'object' && JSON.stringify
		? JSON.stringify
		: function( o ) {

		if ( o === null ) {
			return 'null';
		}

		var type = typeof o;

		if ( type === 'undefined' ) {
			return undefined;
		}
		if ( type === 'number' || type === 'boolean' ) {
			return '' + o;
		}
		if ( type === 'string') {
			return $.quoteString( o );
		}
		if ( type === 'object' ) {
			if ( typeof o.toJSON === 'function' ) {
				return $.toJSON( o.toJSON() );
			}
			if ( o.constructor === Date ) {
				var	month = o.getUTCMonth() + 1,
					day = o.getUTCDate(),
					year = o.getUTCFullYear(),
					hours = o.getUTCHours(),
					minutes = o.getUTCMinutes(),
					seconds = o.getUTCSeconds(),
					milli = o.getUTCMilliseconds();

				if ( month < 10 ) {
					month = '0' + month;
				}
				if ( day < 10 ) {
					day = '0' + day;
				}
				if ( hours < 10 ) {
					hours = '0' + hours;
				}
				if ( minutes < 10 ) {
					minutes = '0' + minutes;
				}
				if ( seconds < 10 ) {
					seconds = '0' + seconds;
				}
				if ( milli < 100 ) {
					milli = '0' + milli;
				}
				if ( milli < 10 ) {
					milli = '0' + milli;
				}
				return '"' + year + '-' + month + '-' + day + 'T' +
					hours + ':' + minutes + ':' + seconds +
					'.' + milli + 'Z"';
			}
			if ( o.constructor === Array ) {
				var ret = [];
				for ( var i = 0; i < o.length; i++ ) {
					ret.push( $.toJSON( o[i] ) || 'null' );
				}
				return '[' + ret.join(',') + ']';
			}
			var	name,
				val,
				pairs = [];
			for ( var k in o ) {
				type = typeof k;
				if ( type === 'number' ) {
					name = '"' + k + '"';
				} else if (type === 'string') {
					name = $.quoteString(k);
				} else {
					// Keys must be numerical or string. Skip others
					continue;
				}
				type = typeof o[k];

				if ( type === 'function' || type === 'undefined' ) {
					// Invalid values like these return undefined
					// from toJSON, however those object members
					// shouldn't be included in the JSON string at all.
					continue;
				}
				val = $.toJSON( o[k] );
				pairs.push( name + ':' + val );
			}
			return '{' + pairs.join( ',' ) + '}';
		}
	};

	/*
	 * jQuery.evalJSON
	 * Evaluates a given piece of json source.
	 *
	 * @param src {String}
	 */
	$.evalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {
		return (new Function('return ' + src))();
	};

	/*
	 * jQuery.secureEvalJSON
	 * Evals JSON in a way that is *more* secure.
	 *
	 * @param src {String}
	 */
	$.secureEvalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {

		var filtered = 
			src
			.replace( /\\["\\\/bfnrtu]/g, '@' )
			.replace( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
			.replace( /(?:^|:|,)(?:\s*\[)+/g, '');

		if ( /^[\],:{}\s]*$/.test( filtered ) ) {
			return (new Function('return ' + src))();
		} else {
			throw new SyntaxError( 'Error parsing JSON, source is not valid.' );
		}
	};

	/*
	 * jQuery.quoteString
	 * Returns a string-repr of a string, escaping quotes intelligently.
	 * Mostly a support function for toJSON.
	 * Examples:
	 * >>> jQuery.quoteString('apple')
	 * "apple"
	 *
	 * >>> jQuery.quoteString('"Where are we going?", she asked.')
	 * "\"Where are we going?\", she asked."
	 */
	$.quoteString = function( string ) {
		if ( string.match( escapeable ) ) {
			return '"' + string.replace( escapeable, function( a ) {
				var c = meta[a];
				if ( typeof c === 'string' ) {
					return c;
				}
				c = a.charCodeAt();
				return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
			}) + '"';
		}
		return '"' + string + '"';
	};

})( jQuery );

/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ ) {

	// ###################### UTILITIES ##

	// Noop
	function noop() {
	}

	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}

	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}

	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_INSERT_BEFORE = "insertBefore",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ON_CLICK = STR_ON + "click",
		STR_ON_ERROR = STR_ON + STR_ERROR,
		STR_ON_LOAD = STR_ON + "load",
		STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
		STR_READY_STATE = "readyState",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",

		// Window
		win = window,
		// Deferred
		Deferred = $.Deferred,
		// Head element
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,

		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,
			url: location.href
		},

		// opera demands sniffing :/
		opera = win.opera,

		// IE < 10
		oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {

		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );

		// References to xOptions members (for better minification)
		var successCallback = xOptions.success,
			errorCallback = xOptions.error,
			completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,

			// Abort/done flag
			done = 0,

			// Life-cycle functions
			cleanUp = noop,

			// Support vars
			supportOnload,
			supportOnreadystatechange,

			// Request execution vars
			firstChild,
			script,
			scriptAfter,
			timeoutTimer;

		// If we have Deferreds:
		// - substitute callbacks
		// - promote xOptions to a promise
		Deferred && Deferred(function( defer ) {
			defer.done( successCallback ).fail( errorCallback );
			successCallback = defer.resolve;
			errorCallback = defer.reject;
		}).promise( xOptions );

		// Create the abort method
		xOptions.abort = function() {
			!( done++ ) && cleanUp();
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
			return xOptions;
		}

		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;

		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

		// Add anticache parameter if needed
		!cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

		// Success notifier
		function notifySuccess( json ) {

			if ( !( done++ ) ) {

				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

			}
		}

		// Error notifier
		function notifyError( type ) {

			if ( !( done++ ) ) {

				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

			}
		}

		// Check page cache
		if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

			pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

		} else {

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( STR_SCRIPT_TAG )[ 0 ];
			script.id = STR_JQUERY_JSONP + count++;

			// Set charset if provided
			if ( charset ) {
				script[ STR_CHARSET ] = charset;
			}

			opera && opera.version() < 11.60 ?
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
			:
				// onerror is supported: set the script as async to avoid requests blocking each others
				( script[ STR_ASYNC ] = STR_ASYNC )

			;

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = STR_ON_CLICK;
			}

			// Attached event handlers
			script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

				// Test readyState if it exists
				if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

					try {

						script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

					} catch( _ ) {}

					result = lastValue;
					lastValue = 0;
					result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

				}
			};

			// Set source
			script.src = url;

			// Re-declare cleanUp function
			cleanUp = function( i ) {
				timeoutTimer && clearTimeout( timeoutTimer );
				script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
				head[ STR_REMOVE_CHILD ]( script );
				scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
			};

			// Append main script
			head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( STR_TIMEOUT );
			} , timeout );

		}

		return xOptions;
	}

	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;

} )( jQuery );

/*
 * Crypto-JS v2.5.3
 * http://code.google.com/p/crypto-js/
 * (c) 2009-2012 by Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(typeof Crypto=="undefined"||!Crypto.util)&&function(){var e=window.Crypto={},k=e.util={rotl:function(b,c){return b<<c|b>>>32-c},rotr:function(b,c){return b<<32-c|b>>>c},endian:function(b){if(b.constructor==Number)return k.rotl(b,8)&16711935|k.rotl(b,24)&4278255360;for(var c=0;c<b.length;c++)b[c]=k.endian(b[c]);return b},randomBytes:function(b){for(var c=[];b>0;b--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(b){for(var c=[],a=0,i=0;a<b.length;a++,i+=8)c[i>>>5]|=(b[a]&255)<<
24-i%32;return c},wordsToBytes:function(b){for(var c=[],a=0;a<b.length*32;a+=8)c.push(b[a>>>5]>>>24-a%32&255);return c},bytesToHex:function(b){for(var c=[],a=0;a<b.length;a++)c.push((b[a]>>>4).toString(16)),c.push((b[a]&15).toString(16));return c.join("")},hexToBytes:function(b){for(var c=[],a=0;a<b.length;a+=2)c.push(parseInt(b.substr(a,2),16));return c},bytesToBase64:function(b){if(typeof btoa=="function")return btoa(d.bytesToString(b));for(var c=[],a=0;a<b.length;a+=3)for(var i=b[a]<<16|b[a+1]<<
8|b[a+2],l=0;l<4;l++)a*8+l*6<=b.length*8?c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>>6*(3-l)&63)):c.push("=");return c.join("")},base64ToBytes:function(b){if(typeof atob=="function")return d.stringToBytes(atob(b));for(var b=b.replace(/[^A-Z0-9+\/]/ig,""),c=[],a=0,i=0;a<b.length;i=++a%4)i!=0&&c.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(a-1))&Math.pow(2,-2*i+8)-1)<<i*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b.charAt(a))>>>
6-i*2);return c}},e=e.charenc={};e.UTF8={stringToBytes:function(b){return d.stringToBytes(unescape(encodeURIComponent(b)))},bytesToString:function(b){return decodeURIComponent(escape(d.bytesToString(b)))}};var d=e.Binary={stringToBytes:function(b){for(var c=[],a=0;a<b.length;a++)c.push(b.charCodeAt(a)&255);return c},bytesToString:function(b){for(var c=[],a=0;a<b.length;a++)c.push(String.fromCharCode(b[a]));return c.join("")}}}();
(function(){var e=Crypto,k=e.util,d=e.charenc,b=d.UTF8,c=d.Binary,a=e.SHA1=function(b,l){var f=k.wordsToBytes(a._sha1(b));return l&&l.asBytes?f:l&&l.asString?c.bytesToString(f):k.bytesToHex(f)};a._sha1=function(a){a.constructor==String&&(a=b.stringToBytes(a));var c=k.bytesToWords(a),f=a.length*8,a=[],e=1732584193,g=-271733879,d=-1732584194,j=271733878,m=-1009589776;c[f>>5]|=128<<24-f%32;c[(f+64>>>9<<4)+15]=f;for(f=0;f<c.length;f+=16){for(var p=e,q=g,r=d,s=j,t=m,h=0;h<80;h++){if(h<16)a[h]=c[f+h];else{var n=
a[h-3]^a[h-8]^a[h-14]^a[h-16];a[h]=n<<1|n>>>31}n=(e<<5|e>>>27)+m+(a[h]>>>0)+(h<20?(g&d|~g&j)+1518500249:h<40?(g^d^j)+1859775393:h<60?(g&d|g&j|d&j)-1894007588:(g^d^j)-899497514);m=j;j=d;d=g<<30|g>>>2;g=e;e=n}e+=p;g+=q;d+=r;j+=s;m+=t}return[e,g,d,j,m]};a._blocksize=16;a._digestsize=20})();
(function(){var e=Crypto,k=e.util,d=e.charenc,b=d.UTF8,c=d.Binary;e.HMAC=function(a,e,d,f){e.constructor==String&&(e=b.stringToBytes(e));d.constructor==String&&(d=b.stringToBytes(d));d.length>a._blocksize*4&&(d=a(d,{asBytes:!0}));for(var o=d.slice(0),d=d.slice(0),g=0;g<a._blocksize*4;g++)o[g]^=92,d[g]^=54;a=a(o.concat(a(d.concat(e),{asBytes:!0})),{asBytes:!0});return f&&f.asBytes?a:f&&f.asString?c.bytesToString(a):k.bytesToHex(a)}})();

/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * $.jStorage
 *
 * USAGE:
 *
 * jStorage requires Prototype, MooTools or jQuery! If jQuery is used, then
 * jQuery-JSON (http://code.google.com/p/jquery-json/) is also needed.
 * (jQuery-JSON needs to be loaded BEFORE jStorage!)
 *
 * Methods:
 *
 * -set(key, value)
 * $.jStorage.set(key, value) -> saves a value
 *
 * -get(key[, default])
 * value = $.jStorage.get(key [, default]) ->
 *    retrieves value if key exists, or default if it doesn't
 *
 * -deleteKey(key)
 * $.jStorage.deleteKey(key) -> removes a key from the storage
 *
 * -flush()
 * $.jStorage.flush() -> clears the cache
 *
 * -storageObj()
 * $.jStorage.storageObj() -> returns a read-ony copy of the actual storage
 *
 * -storageSize()
 * $.jStorage.storageSize() -> returns the size of the storage in bytes
 *
 * -index()
 * $.jStorage.index() -> returns the used keys as an array
 *
 * -storageAvailable()
 * $.jStorage.storageAvailable() -> returns true if storage is available
 *
 * -reInit()
 * $.jStorage.reInit() -> reloads the data from browser storage
 *
 * <value> can be any JSON-able value, including objects and arrays.
 *
 */

(function($){
    if(!$ || !($.toJSON || Object.toJSON || window.JSON)){
        throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    }

    var
        /* This is the object, that holds the cached values */
        _storage = {},

        /* Actual browser storage (localStorage or globalStorage['domain']) */
        _storage_service = {jStorage:"{}"},

        /* DOM element for older IE versions, holds userData behavior */
        _storage_elm = null,

        /* How much space does the storage take */
        _storage_size = 0,

        /* function to encode objects to JSON strings */
        json_encode = $.toJSON || Object.toJSON || (window.JSON && (JSON.encode || JSON.stringify)),

        /* function to decode objects from JSON strings */
        json_decode = $.evalJSON || (window.JSON && (JSON.decode || JSON.parse)) || function(str){
            return String(str).evalJSON();
        },

        /* which backend is currently used */
        _backend = false,

        /* Next check for TTL */
        _ttl_timeout,

        /**
         * XML encoding and decoding as XML nodes can't be JSON'ized
         * XML nodes are encoded and decoded if the node is the value to be saved
         * but not if it's as a property of another object
         * Eg. -
         *   $.jStorage.set("key", xmlNode);        // IS OK
         *   $.jStorage.set("key", {xml: xmlNode}); // NOT OK
         */
        _XMLService = {

            /**
             * Validates a XML node to be XML
             * based on jQuery.isXML function
             */
            isXML: function(elm){
                var documentElement = (elm ? elm.ownerDocument || elm : 0).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            },

            /**
             * Encodes a XML node to string
             * based on http://www.mercurytide.co.uk/news/article/issues-when-working-ajax/
             */
            encode: function(xmlNode) {
                if(!this.isXML(xmlNode)){
                    return false;
                }
                try{ // Mozilla, Webkit, Opera
                    return new XMLSerializer().serializeToString(xmlNode);
                }catch(E1) {
                    try {  // IE
                        return xmlNode.xml;
                    }catch(E2){}
                }
                return false;
            },

            /**
             * Decodes a XML node from string
             * loosely based on http://outwestmedia.com/jquery-plugins/xmldom/
             */
            decode: function(xmlString){
                var dom_parser = ("DOMParser" in window && (new DOMParser()).parseFromString) ||
                        (window.ActiveXObject && function(_xmlString) {
                    var xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                    xml_doc.async = 'false';
                    xml_doc.loadXML(_xmlString);
                    return xml_doc;
                }),
                resultXML;
                if(!dom_parser){
                    return false;
                }
                resultXML = dom_parser.call("DOMParser" in window && (new DOMParser()) || window, xmlString, 'text/xml');
                return this.isXML(resultXML)?resultXML:false;
            }
        };

    ////////////////////////// PRIVATE METHODS ////////////////////////

    /**
     * Initialization function. Detects if the browser supports DOM Storage
     * or userData behavior and behaves accordingly.
     * @returns undefined
     */
    function _init(){
        /* Check if browser supports localStorage */
        var localStorageReallyWorks = false;
        if("localStorage" in window){
            try {
                window.localStorage.setItem('_tmptest', 'tmpval');
                localStorageReallyWorks = true;
                window.localStorage.removeItem('_tmptest');
            } catch(BogusQuotaExceededErrorOnIos5) {
                // Thanks be to iOS5 Private Browsing mode which throws
                // QUOTA_EXCEEDED_ERRROR DOM Exception 22.
            }
        }
        if(localStorageReallyWorks){
            try {
                if(window.localStorage) {
                    _storage_service = window.localStorage;
                    _backend = "localStorage";
                }
            } catch(E3) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports globalStorage */
        else if("globalStorage" in window){
            try {
                if(window.globalStorage) {
                    _storage_service = window.globalStorage[window.location.hostname];
                    _backend = "globalStorage";
                }
            } catch(E4) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports userData behavior */
        else {
            _storage_elm = document.createElement('link');
            if(_storage_elm.addBehavior){

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                var data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }else{
                _storage_elm = null;
                return;
            }
        }

        _load_storage();

        // remove dead keys
        _handleTTL();
    }

    /**
     * Loads the data from the storage based on the supported mechanism
     * @returns undefined
     */
    function _load_storage(){
        /* if jStorage string is retrieved, then decode it */
        if(_storage_service.jStorage){
            try{
                _storage = json_decode(String(_storage_service.jStorage));
            }catch(E6){_storage_service.jStorage = "{}";}
        }else{
            _storage_service.jStorage = "{}";
        }
        _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
    }

    /**
     * This functions provides the "save" mechanism to store the jStorage object
     * @returns undefined
     */
    function _save(){
        try{
            _storage_service.jStorage = json_encode(_storage);
            // If userData is used as the storage engine, additional
            if(_storage_elm) {
                _storage_elm.setAttribute("jStorage",_storage_service.jStorage);
                _storage_elm.save("jStorage");
            }
            _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
        }catch(E7){/* probably cache is full, nothing is saved this way*/}
    }

    /**
     * Function checks if a key is set and is string or numberic
     */
    function _checkKey(key){
        if(!key || (typeof key != "string" && typeof key != "number")){
            throw new TypeError('Key name must be string or numeric');
        }
        if(key == "__jstorage_meta"){
            throw new TypeError('Reserved key name');
        }
        return true;
    }

    /**
     * Removes expired keys
     */
    function _handleTTL(){
        var curtime, i, TTL, nextExpire = Infinity, changed = false;

        clearTimeout(_ttl_timeout);

        if(!_storage.__jstorage_meta || typeof _storage.__jstorage_meta.TTL != "object"){
            // nothing to do here
            return;
        }

        curtime = +new Date();
        TTL = _storage.__jstorage_meta.TTL;
        for(i in TTL){
            if(TTL.hasOwnProperty(i)){
                if(TTL[i] <= curtime){
                    delete TTL[i];
                    delete _storage[i];
                    changed = true;
                }else if(TTL[i] < nextExpire){
                    nextExpire = TTL[i];
                }
            }
        }

        // set next check
        if(nextExpire != Infinity){
            _ttl_timeout = setTimeout(_handleTTL, nextExpire - curtime);
        }

        // save changes
        if(changed){
            _save();
        }
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    $.jStorage = {
        /* Version number */
        version: "0.1.6.1",

        /**
         * Sets a key's value.
         *
         * @param {String} key - Key to set. If this value is not set or not
         *              a string an exception is raised.
         * @param value - Value to set. This can be any value that is JSON
         *              compatible (Numbers, Strings, Objects etc.).
         * @returns the used value
         */
        set: function(key, value){
            _checkKey(key);
            if(_XMLService.isXML(value)){
                value = {_is_xml:true,xml:_XMLService.encode(value)};
            }else if(typeof value == "function"){
                value = null; // functions can't be saved!
            }else if(value && typeof value == "object"){
                // clone the object before saving to _storage tree
                value = json_decode(json_encode(value));
            }
            _storage[key] = value;
            _save();
            return value;
        },

        /**
         * Looks up a key in cache
         *
         * @param {String} key - Key to look up.
         * @param {mixed} def - Default value to return, if key didn't exist.
         * @returns the key value, default value or <null>
         */
        get: function(key, def){
            _checkKey(key);
            if(key in _storage){
                if(_storage[key] && typeof _storage[key] == "object" &&
                        _storage[key]._is_xml &&
                            _storage[key]._is_xml){
                    return _XMLService.decode(_storage[key].xml);
                }else{
                    return _storage[key];
                }
            }
            return typeof(def) == 'undefined' ? null : def;
        },

        /**
         * Deletes a key from cache.
         *
         * @param {String} key - Key to delete.
         * @returns true if key existed or false if it didn't
         */
        deleteKey: function(key){
            _checkKey(key);
            if(key in _storage){
                delete _storage[key];
                // remove from TTL list
                if(_storage.__jstorage_meta &&
                  typeof _storage.__jstorage_meta.TTL == "object" &&
                  key in _storage.__jstorage_meta.TTL){
                    delete _storage.__jstorage_meta.TTL[key];
                }
                _save();
                return true;
            }
            return false;
        },

        /**
         * Sets a TTL for a key, or remove it if ttl value is 0 or below
         *
         * @param {String} key - key to set the TTL for
         * @param {Number} ttl - TTL timeout in milliseconds
         * @returns true if key existed or false if it didn't
         */
        setTTL: function(key, ttl){
            var curtime = +new Date();
            _checkKey(key);
            ttl = Number(ttl) || 0;
            if(key in _storage){

                if(!_storage.__jstorage_meta){
                    _storage.__jstorage_meta = {};
                }
                if(!_storage.__jstorage_meta.TTL){
                    _storage.__jstorage_meta.TTL = {};
                }

                // Set TTL value for the key
                if(ttl>0){
                    _storage.__jstorage_meta.TTL[key] = curtime + ttl;
                }else{
                    delete _storage.__jstorage_meta.TTL[key];
                }

                _save();

                _handleTTL();
                return true;
            }
            return false;
        },

        /**
         * Deletes everything in cache.
         *
         * @return true
         */
        flush: function(){
            _storage = {};
            _save();
            return true;
        },

        /**
         * Returns a read-only copy of _storage
         *
         * @returns Object
        */
        storageObj: function(){
            function F() {}
            F.prototype = _storage;
            return new F();
        },

        /**
         * Returns an index of all used keys as an array
         * ['key1', 'key2',..'keyN']
         *
         * @returns Array
        */
        index: function(){
            var index = [], i;
            for(i in _storage){
                if(_storage.hasOwnProperty(i) && i != "__jstorage_meta"){
                    index.push(i);
                }
            }
            return index;
        },

        /**
         * How much space in bytes does the storage take?
         *
         * @returns Number
         */
        storageSize: function(){
            return _storage_size;
        },

        /**
         * Which backend is currently in use?
         *
         * @returns String
         */
        currentBackend: function(){
            return _backend;
        },

        /**
         * Test if storage is available
         *
         * @returns Boolean
         */
        storageAvailable: function(){
            return !!_backend;
        },

        /**
         * Reloads the data from browser storage
         *
         * @returns undefined
         */
        reInit: function(){
            var new_storage_elm, data;
            if(_storage_elm && _storage_elm.addBehavior){
                new_storage_elm = document.createElement('link');

                _storage_elm.parentNode.replaceChild(new_storage_elm, _storage_elm);
                _storage_elm = new_storage_elm;

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }

            _load_storage();
        }
    };

    // Initialize jStorage
    _init();

})(window.jQuery || window.$);

/*
 * Pulse plugin for jQuery 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.1
 * @updated 16-DEC-09
 * ---
 * Note: In order to animate color properties, you need
 * the color plugin from here: http://plugins.jquery.com/project/color
 * ---
 * @info http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/
 */
jQuery.fn.pulse = function( prop, speed, times, easing, callback ) {
    
    if ( isNaN(times) ) {
        callback = easing;
        easing = times;
        times = 1;
    }
    
    var optall = jQuery.speed(speed, easing, callback),
        queue = optall.queue !== false,
        largest = 0;
        
    for (var p in prop) {
        largest = Math.max(prop[p].length, largest);
    }
    
    optall.times = optall.times || times;
    
    return this[queue?'queue':'each'](function(){
        
        var counts = {},
            opt = jQuery.extend({}, optall),
            self = jQuery(this);
            
        pulse();
        
        function pulse() {
            
            var propsSingle = {},
                doAnimate = false;
            
            for (var p in prop) {
                
                // Make sure counter is setup for current prop
                counts[p] = counts[p] || {runs:0,cur:-1};
                
                // Set "cur" to reflect new position in pulse array
                if ( counts[p].cur < prop[p].length - 1 ) {
                    ++counts[p].cur;
                } else {
                    // Reset to beginning of pulse array
                    counts[p].cur = 0;
                    ++counts[p].runs;
                }
                
                if ( prop[p].length === largest ) {
                    doAnimate = opt.times > counts[p].runs;
                }
                
                propsSingle[p] = prop[p][counts[p].cur];
                
            }
            
            opt.complete = pulse;
            opt.queue = false;
            
            if (doAnimate) {
                self.animate(propsSingle, opt);
            } else {
                optall.complete.call(self[0]);
            }
            
        }
            
    });
    
};

/*
 * jQuery UI Effects 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($, undefined) {

$.effects = {};



/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/

// override the animation for color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor',
	'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'],
function(i, attr) {
	$.fx.step[attr] = function(fx) {
		if (!fx.colorInit) {
			fx.start = getColor(fx.elem, attr);
			fx.end = getRGB(fx.end);
			fx.colorInit = true;
		}

		fx.elem.style[attr] = 'rgb(' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
	};
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		// Otherwise, we're most likely dealing with a named color
		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				// Keep going until we find an element that has color, or we hit the body
				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/

var classAnimationActions = ['add', 'remove', 'toggle'],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

function getElementStyles() {
	var style = document.defaultView
			? document.defaultView.getComputedStyle(this, null)
			: this.currentStyle,
		newStyle = {},
		key,
		camelCase;

	// webkit enumerates style porperties
	if (style && style.length && style[0] && style[style[0]]) {
		var len = style.length;
		while (len--) {
			key = style[len];
			if (typeof style[key] == 'string') {
				camelCase = key.replace(/\-(\w)/g, function(all, letter){
					return letter.toUpperCase();
				});
				newStyle[camelCase] = style[key];
			}
		}
	} else {
		for (key in style) {
			if (typeof style[key] === 'string') {
				newStyle[key] = style[key];
			}
		}
	}
	
	return newStyle;
}

function filterStyles(styles) {
	var name, value;
	for (name in styles) {
		value = styles[name];
		if (
			// ignore null and undefined values
			value == null ||
			// ignore functions (when does this occur?)
			$.isFunction(value) ||
			// shorthand styles that need to be expanded
			name in shorthandStyles ||
			// ignore scrollbars (break in IE)
			(/scrollbar/).test(name) ||

			// only colors or values that can be converted to numbers
			(!(/color/i).test(name) && isNaN(parseFloat(value)))
		) {
			delete styles[name];
		}
	}
	
	return styles;
}

function styleDifference(oldStyle, newStyle) {
	var diff = { _: 0 }, // http://dev.jquery.com/ticket/5459
		name;

	for (name in newStyle) {
		if (oldStyle[name] != newStyle[name]) {
			diff[name] = newStyle[name];
		}
	}

	return diff;
}

$.effects.animateClass = function(value, duration, easing, callback) {
	if ($.isFunction(easing)) {
		callback = easing;
		easing = null;
	}

	return this.queue(function() {
		var that = $(this),
			originalStyleAttr = that.attr('style') || ' ',
			originalStyle = filterStyles(getElementStyles.call(this)),
			newStyle,
			className = that.attr('class');

		$.each(classAnimationActions, function(i, action) {
			if (value[action]) {
				that[action + 'Class'](value[action]);
			}
		});
		newStyle = filterStyles(getElementStyles.call(this));
		that.attr('class', className);

		that.animate(styleDifference(originalStyle, newStyle), {
			queue: false,
			duration: duration,
			easing: easing,
			complete: function() {
				$.each(classAnimationActions, function(i, action) {
					if (value[action]) { that[action + 'Class'](value[action]); }
				});
				// work around bug in IE by clearing the cssText before setting it
				if (typeof that.attr('style') == 'object') {
					that.attr('style').cssText = '';
					that.attr('style').cssText = originalStyleAttr;
				} else {
					that.attr('style', originalStyleAttr);
				}
				if (callback) { callback.apply(this, arguments); }
				$.dequeue( this );
			}
		});
	});
};

$.fn.extend({
	_addClass: $.fn.addClass,
	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},

	_removeClass: $.fn.removeClass,
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},

	_toggleClass: $.fn.toggleClass,
	toggleClass: function(classNames, force, speed, easing, callback) {
		if ( typeof force == "boolean" || force === undefined ) {
			if ( !speed ) {
				// without speed parameter;
				return this._toggleClass(classNames, force);
			} else {
				return $.effects.animateClass.apply(this, [(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
			}
		} else {
			// without switch parameter;
			return $.effects.animateClass.apply(this, [{ toggle: classNames },force,speed,easing]);
		}
	},

	switchClass: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	}
});



/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

$.extend($.effects, {
	version: "1.8.17",

	// Saves a set of properties in a data storage
	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function(element) {

		// if the element is already wrapped, return it
		if (element.parent().is('.ui-effects-wrapper')) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				'float': element.css('float')
			},
			wrapper = $('<div></div>')
				.addClass('ui-effects-wrapper')
				.css({
					fontSize: '100%',
					background: 'transparent',
					border: 'none',
					margin: 0,
					padding: 0
				}),
			active = document.activeElement;

		element.wrap(wrapper);

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}
		
		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative' });
		} else {
			$.extend(props, {
				position: element.css('position'),
				zIndex: element.css('z-index')
			});
			$.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
				props[pos] = element.css(pos);
				if (isNaN(parseInt(props[pos], 10))) {
					props[pos] = 'auto';
				}
			});
			element.css({position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' });
		}

		return wrapper.css(props).show();
	},

	removeWrapper: function(element) {
		var parent,
			active = document.activeElement;
		
		if (element.parent().is('.ui-effects-wrapper')) {
			parent = element.parent().replaceWith(element);
			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
			return parent;
		}
			
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	}
});


function _normalizeArguments(effect, options, speed, callback) {
	// shift params for method overloading
	if (typeof effect == 'object') {
		callback = options;
		speed = null;
		options = effect;
		effect = options.effect;
	}
	if ($.isFunction(options)) {
		callback = options;
		speed = null;
		options = {};
	}
        if (typeof options == 'number' || $.fx.speeds[options]) {
		callback = speed;
		speed = options;
		options = {};
	}
	if ($.isFunction(speed)) {
		callback = speed;
		speed = null;
	}

	options = options || {};

	speed = speed || options.duration;
	speed = $.fx.off ? 0 : typeof speed == 'number'
		? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;

	callback = callback || options.complete;

	return [effect, options, speed, callback];
}

function standardSpeed( speed ) {
	// valid standard speeds
	if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
		return true;
	}
	
	// invalid strings - treat as "normal" speed
	if ( typeof speed === "string" && !$.effects[ speed ] ) {
		return true;
	}
	
	return false;
}

$.fn.extend({
	effect: function(effect, options, speed, callback) {
		var args = _normalizeArguments.apply(this, arguments),
			// TODO: make effects take actual parameters instead of a hash
			args2 = {
				options: args[1],
				duration: args[2],
				callback: args[3]
			},
			mode = args2.options.mode,
			effectMethod = $.effects[effect];
		
		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args2.duration, args2.callback );
			} else {
				return this.each(function() {
					if ( args2.callback ) {
						args2.callback.call( this );
					}
				});
			}
		}
		
		return effectMethod.call(this, args2);
	},

	_show: $.fn.show,
	show: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._show.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'show';
			return this.effect.apply(this, args);
		}
	},

	_hide: $.fn.hide,
	hide: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._hide.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'hide';
			return this.effect.apply(this, args);
		}
	},

	// jQuery core overloads toggle and creates _toggle
	__toggle: $.fn.toggle,
	toggle: function(speed) {
		if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
			return this.__toggle.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'toggle';
			return this.effect.apply(this, args);
		}
	},

	// helper functions
	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});



/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert($.easing.default);
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);
/*
 * jQuery UI Effects Bounce 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.bounce = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'effect'); // Set Mode
		var direction = o.options.direction || 'up'; // Default direction
		var distance = o.options.distance || 20; // Default distance
		var times = o.options.times || 5; // Default # of times
		var speed = o.duration || 250; // Default speed per bounce
		if (/show|hide/.test(mode)) props.push('opacity'); // Avoid touching opacity to prevent clearType and PNG issues in IE

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		$.effects.createWrapper(el); // Create Wrapper
		var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
		var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
		var distance = o.options.distance || (ref == 'top' ? el.outerHeight({margin:true}) / 3 : el.outerWidth({margin:true}) / 3);
		if (mode == 'show') el.css('opacity', 0).css(ref, motion == 'pos' ? -distance : distance); // Shift
		if (mode == 'hide') distance = distance / (times * 2);
		if (mode != 'hide') times--;

		// Animate
		if (mode == 'show') { // Show Bounce
			var animation = {opacity: 1};
			animation[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation, speed / 2, o.options.easing);
			distance = distance / 2;
			times--;
		};
		for (var i = 0; i < times; i++) { // Bounces
			var animation1 = {}, animation2 = {};
			animation1[ref] = (motion == 'pos' ? '-=' : '+=') + distance;
			animation2[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing);
			distance = (mode == 'hide') ? distance * 2 : distance / 2;
		};
		if (mode == 'hide') { // Last Bounce
			var animation = {opacity: 0};
			animation[ref] = (motion == 'pos' ? '-=' : '+=')  + distance;
			el.animate(animation, speed / 2, o.options.easing, function(){
				el.hide(); // Hide
				$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
				if(o.callback) o.callback.apply(this, arguments); // Callback
			});
		} else {
			var animation1 = {}, animation2 = {};
			animation1[ref] = (motion == 'pos' ? '-=' : '+=') + distance;
			animation2[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing, function(){
				$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
				if(o.callback) o.callback.apply(this, arguments); // Callback
			});
		};
		el.queue('fx', function() { el.dequeue(); });
		el.dequeue();
	});

};

})(jQuery);
/*
 * jQuery UI Effects Pulsate 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.pulsate = function(o) {
	return this.queue(function() {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.options.mode || 'show');
			times = ((o.options.times || 5) * 2) - 1;
			duration = o.duration ? o.duration / 2 : $.fx.speeds._default / 2,
			isVisible = elem.is(':visible'),
			animateTo = 0;

		if (!isVisible) {
			elem.css('opacity', 0).show();
			animateTo = 1;
		}

		if ((mode == 'hide' && isVisible) || (mode == 'show' && !isVisible)) {
			times--;
		}

		for (var i = 0; i < times; i++) {
			elem.animate({ opacity: animateTo }, duration, o.options.easing);
			animateTo = (animateTo + 1) % 2;
		}

		elem.animate({ opacity: animateTo }, duration, o.options.easing, function() {
			if (animateTo == 0) {
				elem.hide();
			}
			(o.callback && o.callback.apply(this, arguments));
		});

		elem
			.queue('fx', function() { elem.dequeue(); })
			.dequeue();
	});
};

})(jQuery);

/*
 * jQuery.ScrollTo
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Tested with jQuery 1.2.6. On FF 2/3, IE 6/7, Opera 9.2/5 and Safari 3. on Windows.
 *
 * @author Ariel Flesler
 * @version 1.4
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'y',
		duration:1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window).scrollable();
	};

	// Hack, hack, hack... stay away!
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn.scrollable = function(){
		return this.map(function(){
			// Just store it, we might need it
			var win = this.parentWindow || this.defaultView,
				// If it's a document, get its iframe or the window if it's THE document
				elem = this.nodeName == '#document' ? win.frameElement || win : this,
				// Get the corresponding document
				doc = elem.contentDocument || (elem.contentWindow || elem).document,
				isWin = elem.setInterval;

			return elem.nodeName == 'IFRAME' || isWin && $.browser.safari ? doc.body
				: isWin ? doc.documentElement
				: this;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(px)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					Dim = axis == 'x' ? 'Width' : 'Height',
					dim = Dim.toLowerCase();

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[dim]() * settings.over[pos];
				}else
					attr[key] = targ[pos];

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});			
			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};
			function max( Dim ){
				var attr ='scroll'+Dim,
					doc = elem.ownerDocument;
				
				return win
						? Math.max( doc.documentElement[attr], doc.body[attr]  )
						: elem[attr];
			};
		}).end();
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );

// ----------------------------------------------------------------------------
// Buzz, a Javascript HTML5 Audio library
// v 1.0.5 beta
// Licensed under the MIT license.
// http://buzz.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files ( the "Software" ), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------

var buzz = {
    defaults: {
        autoplay: false,
        duration: 5000,
        formats: [],
        loop: false,
        placeholder: '--',
        preload: 'metadata',
        volume: 80
    },
    types: {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    },
    sounds: [],
    el: document.createElement( 'audio' ),

    sound: function( src, options ) {
        options = options || {};

        var pid = 0,
            events = [],
            eventsOnce = {},
            supported = buzz.isSupported();

        // publics
        this.load = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.load();
            return this;
        };

        this.play = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.play();
            return this;
        };

        this.togglePlay = function() {
            if ( !supported ) {
              return this;
            }

            if ( this.sound.paused ) {
                this.sound.play();
            } else {
                this.sound.pause();
            }
            return this;
        };

        this.pause = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.pause();
            return this;
        };

        this.isPaused = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.paused;
        };

        this.stop = function() {
            if ( !supported  ) {
              return this;
            }

            this.setTime( this.getDuration() );
            this.sound.pause();
            return this;
        };

        this.isEnded = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.ended;
        };

        this.loop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.loop = 'loop';
            this.bind( 'ended.buzzloop', function() {
                this.currentTime = 0;
                this.play();
            });
            return this;
        };

        this.unloop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.removeAttribute( 'loop' );
            this.unbind( 'ended.buzzloop' );
            return this;
        };

        this.mute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = true;
            return this;
        };

        this.unmute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = false;
            return this;
        };

        this.toggleMute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = !this.sound.muted;
            return this;
        };

        this.isMuted = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.muted;
        };

        this.setVolume = function( volume ) {
            if ( !supported ) {
              return this;
            }

            if ( volume < 0 ) {
              volume = 0;
            }
            if ( volume > 100 ) {
              volume = 100;
            }
          
            this.volume = volume;
            this.sound.volume = volume / 100;
            return this;
        };
      
        this.getVolume = function() {
            if ( !supported ) {
              return this;
            }

            return this.volume;
        };

        this.increaseVolume = function( value ) {
            return this.setVolume( this.volume + ( value || 1 ) );
        };

        this.decreaseVolume = function( value ) {
            return this.setVolume( this.volume - ( value || 1 ) );
        };

        this.setTime = function( time ) {
            if ( !supported ) {
              return this;
            }

            this.whenReady( function() {
                this.sound.currentTime = time;
            });
            return this;
        };

        this.getTime = function() {
            if ( !supported ) {
              return null;
            }

            var time = Math.round( this.sound.currentTime * 100 ) / 100;
            return isNaN( time ) ? buzz.defaults.placeholder : time;
        };

        this.setPercent = function( percent ) {
            if ( !supported ) {
              return this;
            }

            return this.setTime( buzz.fromPercent( percent, this.sound.duration ) );
        };

        this.getPercent = function() {
            if ( !supported ) {
              return null;
            }

			var percent = Math.round( buzz.toPercent( this.sound.currentTime, this.sound.duration ) );
            return isNaN( percent ) ? buzz.defaults.placeholder : percent;
        };

        this.setSpeed = function( duration ) {
			if ( !supported ) {
              return this;
            }

            this.sound.playbackRate = duration;
        };

        this.getSpeed = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.playbackRate;
        };

        this.getDuration = function() {
            if ( !supported ) {
              return null;
            }

            var duration = Math.round( this.sound.duration * 100 ) / 100;
            return isNaN( duration ) ? buzz.defaults.placeholder : duration;
        };

        this.getPlayed = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.played );
        };

        this.getBuffered = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.buffered );
        };

        this.getSeekable = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.seekable );
        };

        this.getErrorCode = function() {
            if ( supported && this.sound.error ) {
                return this.sound.error.code;
            }
            return 0;
        };

        this.getErrorMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getErrorCode() ) {
                case 1:
                    return 'MEDIA_ERR_ABORTED';
                case 2:
                    return 'MEDIA_ERR_NETWORK';
                case 3:
                    return 'MEDIA_ERR_DECODE';
                case 4:
                    return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
                default:
                    return null;
            }
        };

        this.getStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.readyState;
        };

        this.getStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getStateCode() ) {
                case 0:
                    return 'HAVE_NOTHING';
                case 1:
                    return 'HAVE_METADATA';
                case 2:
                    return 'HAVE_CURRENT_DATA';
                case 3:
                    return 'HAVE_FUTURE_DATA';
                case 4:
                    return 'HAVE_ENOUGH_DATA';
                default:
                    return null;
            }
        };

        this.getNetworkStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.networkState;
        };

        this.getNetworkStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getNetworkStateCode() ) {
                case 0:
                    return 'NETWORK_EMPTY';
                case 1:
                    return 'NETWORK_IDLE';
                case 2:
                    return 'NETWORK_LOADING';
                case 3:
                    return 'NETWORK_NO_SOURCE';
                default:
                    return null;
            }
        };

        this.set = function( key, value ) {
            if ( !supported ) {
              return this;
            }

            this.sound[ key ] = value;
            return this;
        };

        this.get = function( key ) {
            if ( !supported ) {
              return null;
            }

            return key ? this.sound[ key ] : this.sound;
        };

        this.bind = function( types, func ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            var that = this,
				efunc = function( e ) { func.call( that, e ); };

            for( var t = 0; t < types.length; t++ ) {
                var type = types[ t ],
                    idx = type;
                    type = idx.split( '.' )[ 0 ];

                    events.push( { idx: idx, func: efunc } );
                    this.sound.addEventListener( type, efunc, true );
            }
            return this;
        };

        this.unbind = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ],
                    type = idx.split( '.' )[ 0 ];

                for( var i = 0; i < events.length; i++ ) {
                    var namespace = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( namespace[ 1 ] && namespace[ 1 ] == idx.replace( '.', '' ) ) ) {
                        this.sound.removeEventListener( type, events[ i ].func, true );
                        delete events[ i ];
                    }
                }
            }
            return this;
        };

        this.bindOnce = function( type, func ) {
            if ( !supported ) {
              return this;
            }

            var that = this;

            eventsOnce[ pid++ ] = false;
            this.bind( pid + type, function() {
               if ( !eventsOnce[ pid ] ) {
                   eventsOnce[ pid ] = true;
                   func.call( that );
               }
               that.unbind( pid + type );
            });
        };

        this.trigger = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ];

                for( var i = 0; i < events.length; i++ ) {
                    var eventType = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( eventType[ 0 ] && eventType[ 0 ] == idx.replace( '.', '' ) ) ) {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent( eventType[ 0 ], false, true );
                        this.sound.dispatchEvent( evt );
                    }
                }
            }
            return this;
        };

        this.fadeTo = function( to, duration, callback ) {
			if ( !supported ) {
              return this;
            }

            if ( duration instanceof Function ) {
                callback = duration;
                duration = buzz.defaults.duration;
            } else {
                duration = duration || buzz.defaults.duration;
            }

            var from = this.volume,
				delay = duration / Math.abs( from - to ),
                that = this;
            this.play();

            function doFade() {
                setTimeout( function() {
                    if ( from < to && that.volume < to ) {
                        that.setVolume( that.volume += 1 );
                        doFade();
                    } else if ( from > to && that.volume > to ) {
                        that.setVolume( that.volume -= 1 );
                        doFade();
                    } else if ( callback instanceof Function ) {
                        callback.apply( that );
                    }
                }, delay );
            }
            this.whenReady( function() {
                doFade();
            });

            return this;
        };

        this.fadeIn = function( duration, callback ) {
            if ( !supported ) {
              return this;
            }

            return this.setVolume(0).fadeTo( 100, duration, callback );
        };

        this.fadeOut = function( duration, callback ) {
			if ( !supported ) {
              return this;
            }

            return this.fadeTo( 0, duration, callback );
        };

        this.fadeWith = function( sound, duration ) {
            if ( !supported ) {
              return this;
            }

            this.fadeOut( duration, function() {
                this.stop();
            });

            sound.play().fadeIn( duration );

            return this;
        };

        this.whenReady = function( func ) {
            if ( !supported ) {
              return null;
            }

            var that = this;
            if ( this.sound.readyState === 0 ) {
                this.bind( 'canplay.buzzwhenready', function() {
                    func.call( that );
                });
            } else {
                func.call( that );
            }
        };

        // privates
        function timerangeToArray( timeRange ) {
            var array = [],
                length = timeRange.length - 1;

            for( var i = 0; i <= length; i++ ) {
                array.push({
                    start: timeRange.start( length ),
                    end: timeRange.end( length )
                });
            }
            return array;
        }

        function getExt( filename ) {
            return filename.split('.').pop();
        }
        
        function addSource( sound, src ) {
            var source = document.createElement( 'source' );
            source.src = src;
            if ( buzz.types[ getExt( src ) ] ) {
                source.type = buzz.types[ getExt( src ) ];
            }
            sound.appendChild( source );
        }

        // init
        if ( supported ) {
          
            for(var i in buzz.defaults ) {
              if(buzz.defaults.hasOwnProperty(i)) {
                options[ i ] = options[ i ] || buzz.defaults[ i ];
              }
            }

            this.sound = document.createElement( 'audio' );

            if ( src instanceof Array ) {
                for( var j in src ) {
                  if(src.hasOwnProperty(j)) {
                    addSource( this.sound, src[ j ] );
                  }
                }
            } else if ( options.formats.length ) {
                for( var k in options.formats ) {
                  if(options.formats.hasOwnProperty(k)) {
                    addSource( this.sound, src + '.' + options.formats[ k ] );
                  }
                }
            } else {
                addSource( this.sound, src );
            }

            if ( options.loop ) {
                this.loop();
            }

            if ( options.autoplay ) {
                this.sound.autoplay = 'autoplay';
            }

            if ( options.preload === true ) {
                this.sound.preload = 'auto';
            } else if ( options.preload === false ) {
                this.sound.preload = 'none';
            } else {
                this.sound.preload = options.preload;
            }

            this.setVolume( options.volume );

            buzz.sounds.push( this );
        }
    },

    group: function( sounds ) {
        sounds = argsToArray( sounds, arguments );

        // publics
        this.getSounds = function() {
            return sounds;
        };

        this.add = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                sounds.push( soundArray[ a ] );
            }
        };

        this.remove = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                for( var i = 0; i < sounds.length; i++ ) {
                    if ( sounds[ i ] == soundArray[ a ] ) {
                        delete sounds[ i ];
                        break;
                    }
                }
            }
        };

        this.load = function() {
            fn( 'load' );
            return this;
        };

        this.play = function() {
            fn( 'play' );
            return this;
        };

        this.togglePlay = function( ) {
            fn( 'togglePlay' );
            return this;
        };

        this.pause = function( time ) {
            fn( 'pause', time );
            return this;
        };

        this.stop = function() {
            fn( 'stop' );
            return this;
        };

        this.mute = function() {
            fn( 'mute' );
            return this;
        };

        this.unmute = function() {
            fn( 'unmute' );
            return this;
        };

        this.toggleMute = function() {
            fn( 'toggleMute' );
            return this;
        };

        this.setVolume = function( volume ) {
            fn( 'setVolume', volume );
            return this;
        };

        this.increaseVolume = function( value ) {
            fn( 'increaseVolume', value );
            return this;
        };

        this.decreaseVolume = function( value ) {
            fn( 'decreaseVolume', value );
            return this;
        };

        this.loop = function() {
            fn( 'loop' );
            return this;
        };

        this.unloop = function() {
            fn( 'unloop' );
            return this;
        };

        this.setTime = function( time ) {
            fn( 'setTime', time );
            return this;
        };

        this.setduration = function( duration ) {
            fn( 'setduration', duration );
            return this;
        };

        this.set = function( key, value ) {
            fn( 'set', key, value );
            return this;
        };

        this.bind = function( type, func ) {
            fn( 'bind', type, func );
            return this;
        };

        this.unbind = function( type ) {
            fn( 'unbind', type );
            return this;
        };

        this.bindOnce = function( type, func ) {
            fn( 'bindOnce', type, func );
            return this;
        };

        this.trigger = function( type ) {
            fn( 'trigger', type );
            return this;
        };

        this.fade = function( from, to, duration, callback ) {
            fn( 'fade', from, to, duration, callback );
            return this;
        };

        this.fadeIn = function( duration, callback ) {
            fn( 'fadeIn', duration, callback );
            return this;
        };

        this.fadeOut = function( duration, callback ) {
            fn( 'fadeOut', duration, callback );
            return this;
        };

        // privates
        function fn() {
            var args = argsToArray( null, arguments ),
                func = args.shift();

            for( var i = 0; i < sounds.length; i++ ) {
                sounds[ i ][ func ].apply( sounds[ i ], args );
            }
        }

        function argsToArray( array, args ) {
            return ( array instanceof Array ) ? array : Array.prototype.slice.call( args );
        }
    },

    all: function() {
      return new buzz.group( buzz.sounds );
    },

    isSupported: function() {
        return !!buzz.el.canPlayType;
    },

    isOGGSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/ogg; codecs="vorbis"' );
    },

    isWAVSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/wav; codecs="1"' );
    },

    isMP3Supported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/mpeg;' );
    },

    isAACSupported: function() {
        return !!buzz.el.canPlayType && ( buzz.el.canPlayType( 'audio/x-m4a;' ) || buzz.el.canPlayType( 'audio/aac;' ) );
    },

    toTimer: function( time, withHours ) {
        var h, m, s;
        h = Math.floor( time / 3600 );
        h = isNaN( h ) ? '--' : ( h >= 10 ) ? h : '0' + h;
        m = withHours ? Math.floor( time / 60 % 60 ) : Math.floor( time / 60 );
        m = isNaN( m ) ? '--' : ( m >= 10 ) ? m : '0' + m;
        s = Math.floor( time % 60 );
        s = isNaN( s ) ? '--' : ( s >= 10 ) ? s : '0' + s;
        return withHours ? h + ':' + m + ':' + s : m + ':' + s;
    },

    fromTimer: function( time ) {
        var splits = time.toString().split( ':' );
        if ( splits && splits.length == 3 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 3600 ) + ( parseInt(splits[ 1 ], 10 ) * 60 ) + parseInt( splits[ 2 ], 10 );
        }
        if ( splits && splits.length == 2 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 60 ) + parseInt( splits[ 1 ], 10 );
        }
        return time;
    },

    toPercent: function( value, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

		return Math.round( ( ( value * 100 ) / total ) * r ) / r;
    },

    fromPercent: function( percent, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

        return  Math.round( ( ( total / 100 ) * percent ) * r ) / r;
    }
};

/*
 * bubbletip
 *
 *	Copyright (c) 2009-2010, UhLeeKa.
 *	Version: 1.0.6
 *	Licensed under the GNU Lesser General Public License:
 *		http://www.gnu.org/licenses/lgpl-3.0.html
 *	Author Website: 
 *		http://www.uhleeka.com
 *	Project Hosting on Google Code: 
 *		http://code.google.com/p/bubbletip/
 */

(function ($) {
	var bindIndex = 0;
	$.fn.extend({
		open: function () {
			$(this).trigger('open.bubbletip');
		},
		close: function () {
			$(this).trigger('close.bubbletip');
		},
		bubbletip: function (tip, options) {
			$(this).data('tip', $(tip).get(0).id);
			
			// check to see if the tip is a descendant of 
			// a table.bubbletip element and therefore
			// has already been instantiated as a bubbletip
			if ($('table.bubbletip #' + $(tip).get(0).id).length > 0) {
				return this;
			}
			var _this, _tip, _options, _calc, _timeoutAnimate, _timeoutRefresh, _isActive, _isHiding, _wrapper, _bindIndex;
			// hack for IE6,IE7
			var _windowWidth, _windowHeight;

			_this = $(this);
			_tip = $(tip);
			_bindIndex = bindIndex++;  // for window.resize namespace binding
			_options = {
				id: '',
				position: 'absolute', // absolute | fixed
				fixedHorizontal: 'right', // left | right
				fixedVertical: 'bottom', // top | bottom
				positionAt: 'element', // element | body | mouse
				positionAtElement: _this,
				offsetTop: 0,
				offsetLeft: 0,
				deltaPosition: 30,
				deltaDirection: 'up', // direction: up | down | left | right
				animationDuration: 250,
				animationEasing: 'swing', // linear | swing
				delayShow: 0,
				delayHide: 500,
				calculateOnShow: false
			};
			if (options) {
				_options = $.extend(_options, options);
			}
			// calculated values
			_calc = {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				delta: 0,
				mouseTop: 0,
				mouseLeft: 0,
				tipHeight: 0
			};
			_timeoutAnimate = null;
			_timeoutRefresh = null;
			_isActive = false;
			_isHiding = false;

			// store the tip id for removeBubbletip
			if (!_this.data('bubbletip_tips')) {
				_this.data('bubbletip_tips', [[_tip.get(0).id, _bindIndex]]);
			} else {
				_this.data('bubbletip_tips', $.merge(_this.data('bubbletip_tips'), [[_tip.get(0).id, _bindIndex]]));
			}


			// validate _options
			if (!_options.fixedVertical.match(/^top|bottom$/i)) {
				_options.positionAt = 'top';
			}
			if (!_options.fixedHorizontal.match(/^left|right$/i)) {
				_options.positionAt = 'left';
			}
			if (!_options.positionAt.match(/^element|body|mouse$/i)) {
				_options.positionAt = 'element';
			}
			if (!_options.deltaDirection.match(/^up|down|left|right$/i)) {
				_options.deltaDirection = 'up';
			}
			if (_options.id.length > 0) {
				_options.id = ' id="' + _options.id + '"';
			}

			// create the wrapper table element
			if (_options.deltaDirection.match(/^up$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td><table class="bt-bottom" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^down$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td><table class="bt-top" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^left$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right-tail"><div class="bt-right"></div><div class="bt-right-tail"></div><div class="bt-right"></div></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^right$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left-tail"><div class="bt-left"></div><div class="bt-left-tail"></div><div class="bt-left"></div></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			}

			// append the wrapper to the document body
			_wrapper.appendTo('body');

			// apply IE filters to _wrapper elements
			if ((/msie/.test(navigator.userAgent.toLowerCase())) && (!/opera/.test(navigator.userAgent.toLowerCase()))) {
				$('*', _wrapper).each(function () {
					var image = $(this).css('background-image');
					if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
						image = RegExp.$1;
						$(this).css({
							'backgroundImage': 'none',
							'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=' + ($(this).css('backgroundRepeat') == 'no-repeat' ? 'crop' : 'scale') + ', src=\'' + image + '\')'
						}).each(function () {
							var position = $(this).css('position');
							if (position != 'absolute' && position != 'relative')
								$(this).css('position', 'relative');
						});
					}
				});
			}
			// move the tip element into the content section of the wrapper
			$('.bt-content', _wrapper).append(_tip);
			// show the tip (in case it is hidden) so that we can calculate its dimensions
			_tip.show();
			// handle left|right delta
			if (_options.deltaDirection.match(/^left|right$/i)) {
				// tail is 40px, so divide height by two and subtract 20px;
				_calc.tipHeight = parseInt(_tip.height() / 2, 10);
				// handle odd integer height
				if ((_tip.height() % 2) == 1) {
					_calc.tipHeight++;
				}
				_calc.tipHeight = (_calc.tipHeight < 20) ? 1 : _calc.tipHeight - 20;
				if (_options.deltaDirection.match(/^left$/i)) {
					$('div.bt-right', _wrapper).css('height', _calc.tipHeight + 'px');
				} else {
					$('div.bt-left', _wrapper).css('height', _calc.tipHeight + 'px');
				}
			}
			// set the opacity of the wrapper to 0
			_wrapper.css('opacity', 0);
			// hack for FF 3.6
			_wrapper.css({ 'width': _wrapper.width(), 'height': _wrapper.height() });
			// execute initial calculations
			_Calculate();
			_wrapper.hide();

			// handle window.resize
			$(window).bind('resize.bubbletip' + _bindIndex, function () {
				var w = $(window).width();
				var h = $(window).height();

				if (_options.position.match(/^fixed$/i) || ((w === _windowWidth) && (h === _windowHeight))) {
					return;
				}
				_windowWidth = w;
				_windowHeight = h;

				if (_timeoutRefresh) {
					clearTimeout(_timeoutRefresh);
				}
				_timeoutRefresh = setTimeout(function () {
					_Calculate();
				}, 250);
			});
			$([_wrapper.get(0), this.get(0)]).bind('open.bubbletip', function () {
				_isActive = false;
				if (_timeoutAnimate) {
					clearTimeout(_timeoutAnimate);
				}
				if (_options.delayShow === 0) {
					_Show();
				} else {
					_timeoutAnimate = setTimeout(function () {
						_Show();
					}, _options.delayShow);
				}
				return false;
			});
			
			$([_wrapper.get(0), this.get(0)]).bind('close.bubbletip', function () {
				if (_timeoutAnimate) {
					clearTimeout(_timeoutAnimate);
				}
				if (_options.delayHide === 0) {
					_Hide();
				} else {
					_timeoutAnimate = setTimeout(function () {
						_Hide();
					}, _options.delayHide);
				}
				return false;
			});
			
			
			function _Show() {
				var animation;

				if (_isActive) { // the tip is currently showing; do nothing
					return;
				}
				_isActive = true;
				if (_isHiding) { // the tip is currently hiding; interrupt and start showing again
					_wrapper.stop(true, false);
				}

				if (_options.calculateOnShow) {
					_Calculate();
				}
				if (_options.position.match(/^fixed$/i)) {
					animation = {};
					if (_options.deltaDirection.match(/^up|down$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							if (!_isHiding) {
								_wrapper.css('top', parseInt(_calc.top - _calc.delta, 10) + 'px');
							}
							animation.top = parseInt(_calc.top, 10) + 'px';
						} else {
							if (!_isHiding) {
								_wrapper.css('bottom', parseInt(_calc.bottom + _calc.delta, 10) + 'px');
							}
							animation.bottom = parseInt(_calc.bottom, 10) + 'px';
						}
					} else {
						if (_options.fixedHorizontal.match(/^right$/i)) {
							if (!_isHiding) {
								if (_options.fixedVertical.match(/^top$/i)) {
									_wrapper.css({ 'top': parseInt(_calc.top, 10) + 'px', 'right': parseInt(_calc.right - _calc.delta, 10) + 'px' });
								} else {
									_wrapper.css({ 'bottom': parseInt(_calc.bottom, 10) + 'px', 'right': parseInt(_calc.right - _calc.delta, 10) + 'px' });
								}
							}
							animation.right = parseInt(_calc.right, 10) + 'px';
						} else {
							if (!_isHiding) {
								if (_options.fixedVertical.match(/^top$/i)) {
									_wrapper.css({ 'top': parseInt(_calc.top, 10) + 'px', 'left': parseInt(_calc.left + _calc.delta, 10) + 'px' });
								} else {
									_wrapper.css({ 'bottom': parseInt(_calc.bottom, 10) + 'px', 'left': parseInt(_calc.left + _calc.delta, 10) + 'px' });
								}
							}
							animation.left = parseInt(_calc.left, 10) + 'px';
						}
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							if (!_isHiding) {
								_wrapper.css('top', parseInt(_calc.top - _calc.delta, 10) + 'px');
							}
							animation = { 'top': _calc.top + 'px' };
						} else {
							if (!_isHiding) {
								_wrapper.css('left', parseInt(_calc.left - _calc.delta, 10) + 'px');
							}
							animation = { 'left': _calc.left + 'px' };
						}
					} else {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							if (!_isHiding) {
								_calc.mouseTop = e.pageY + _calc.top;
								_wrapper.css({ 'top': parseInt(_calc.mouseTop + _calc.delta, 10) + 'px', 'left': parseInt(e.pageX - (_wrapper.width() / 2), 10) + 'px' });
							}
							animation = { 'top': _calc.mouseTop + 'px' };
						} else {
							if (!_isHiding) {
								_calc.mouseLeft = e.pageX + _calc.left;
								_wrapper.css({ 'left': parseInt(_calc.mouseLeft + _calc.delta, 10) + 'px', 'top': parseInt(e.pageY - (_wrapper.height() / 2), 10) + 'px' });
							}
							animation = { 'left': _calc.left + 'px' };
						}
					}
				}
				_isHiding = false;
				_wrapper.show();
				animation = $.extend(animation, { 'opacity': 1 });
				_wrapper.animate(animation, _options.animationDuration, _options.animationEasing, function () {
					if (_options.position.match(/^fixed$/i)) {
						_wrapper.css({
							'opacity': '',
							'position': 'fixed',
							'top': _calc.top,
							'left': _calc.left
						});
					} else {
						_wrapper.css('opacity', '');
					}
					_isActive = true;
				});
			}
			function _Hide() {
				var animation;

				_isActive = false;
				_isHiding = true;
				if (_options.position.match(/^fixed$/i)) {
					animation = {};
					if (_options.deltaDirection.match(/^up|down$/i))  {
						if (_calc.bottom !== '') { animation.bottom = parseInt(_calc.bottom + _calc.delta, 10) + 'px'; }
						if (_calc.top !== '') { animation.top = parseInt(_calc.top - _calc.delta, 10) + 'px'; }
					} else {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							if (_calc.right !== '') { animation.right = parseInt(_calc.right + _calc.delta, 10) + 'px'; }
							if (_calc.left !== '') { animation.left = parseInt(_calc.left + _calc.delta, 10) + 'px'; }
						} else {
							if (_calc.right !== '') { animation.right = parseInt(_calc.right - _calc.delta, 10) + 'px'; }
							if (_calc.left !== '') { animation.left = parseInt(_calc.left - _calc.delta, 10) + 'px'; }
						}
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							animation = { 'top': parseInt(_calc.top - _calc.delta, 10) + 'px' };
						} else {
							animation = { 'left': parseInt(_calc.left - _calc.delta, 10) + 'px' };
						}
					} else {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							animation = { 'top': parseInt(_calc.mouseTop - _calc.delta, 10) + 'px' };
						} else {
							animation = { 'left': parseInt(_calc.mouseLeft - _calc.delta, 10) + 'px' };
						}
					}
				}
				animation = $.extend(animation, {
					'opacity': 0
				});
				_wrapper.animate(animation, _options.animationDuration, _options.animationEasing, function () {
					_wrapper.hide();
					_isHiding = false;
				});
			}
			function _Calculate() {
				var offset;
				// calculate values
				if (_options.position.match(/^fixed$/i)) {
					offset = _options.positionAtElement.offset();
					if (_options.fixedHorizontal.match(/^left$/i)) {
						_calc.left = offset.left + (_options.positionAtElement.outerWidth() / 2);
					} else {
						_calc.left = '';
					}
					if (_options.fixedHorizontal.match(/^right$/i)) {
						_calc.right = ($(window).width() - offset.left) - ((_options.positionAtElement.outerWidth() + _wrapper.outerWidth()) / 2);
					} else {
						_calc.right = '';
					}
					if (_options.fixedVertical.match(/^top$/i)) {
						_calc.top = offset.top - $(window).scrollTop() - _wrapper.outerHeight();
					} else {
						_calc.top = '';
					}
					if (_options.fixedVertical.match(/^bottom$/i)) {
						_calc.bottom = $(window).scrollTop() + $(window).height() - offset.top + _options.offsetTop;
					} else {
						_calc.bottom = '';
					}
					if (_options.deltaDirection.match(/^left|right$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							_calc.top = _calc.top + (_wrapper.outerHeight() / 2) + (_options.positionAtElement.outerHeight() / 2);
						} else {
							_calc.bottom = _calc.bottom - (_wrapper.outerHeight() / 2) - (_options.positionAtElement.outerHeight() / 2);
						}
					}
					if (_options.deltaDirection.match(/^left$/i)) {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - _wrapper.outerWidth();
						} else {
							_calc.right = _calc.right + (_wrapper.outerWidth() / 2);
						}
					} else if (_options.deltaDirection.match(/^right$/i)) {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left;
						} else {
							_calc.right = _calc.right - (_wrapper.outerWidth() / 2);
						}
					} else if (_options.deltaDirection.match(/^down$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							_calc.top = _calc.top + _wrapper.outerHeight() + _options.positionAtElement.outerHeight();
						} else {
							_calc.bottom = _calc.bottom - _wrapper.outerHeight() - _options.positionAtElement.outerHeight();
						}
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - (_wrapper.outerWidth() / 2);
						}
					} else {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - (_wrapper.outerWidth() / 2);
						}
					}
					if (_options.deltaDirection.match(/^up|right$/i) && _options.fixedHorizontal.match(/^left|right$/i)) {
						_calc.delta = _options.deltaPosition;
					} else {
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^element$/i)) {
					offset = _options.positionAtElement.offset();
					if (_options.deltaDirection.match(/^up$/i)) {
						_calc.top = offset.top + _options.offsetTop - _wrapper.outerHeight();
						_calc.left = offset.left + _options.offsetLeft + ((_options.positionAtElement.outerWidth() - _wrapper.outerWidth()) / 2);
						_calc.delta = _options.deltaPosition;
					} else if (_options.deltaDirection.match(/^down$/i)) {
						_calc.top = offset.top + _options.positionAtElement.outerHeight() + _options.offsetTop;
						_calc.left = offset.left + _options.offsetLeft + ((_options.positionAtElement.outerWidth() - _wrapper.outerWidth()) / 2);
						_calc.delta = -_options.deltaPosition;
					} else if (_options.deltaDirection.match(/^left$/i)) {
						_calc.top = offset.top + _options.offsetTop + ((_options.positionAtElement.outerHeight() - _wrapper.outerHeight()) / 2);
						_calc.left = offset.left + _options.offsetLeft - _wrapper.outerWidth();
						_calc.delta = _options.deltaPosition;
					} else if (_options.deltaDirection.match(/^right$/i)) {
						_calc.top = offset.top + _options.offsetTop + ((_options.positionAtElement.outerHeight() - _wrapper.outerHeight()) / 2);
						_calc.left = offset.left + _options.positionAtElement.outerWidth() + _options.offsetLeft;
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^body$/i)) {
					if (_options.deltaDirection.match(/^up|left$/i)) {
						_calc.top = _options.offsetTop;
						_calc.left = _options.offsetLeft;
						// up or left
						_calc.delta = _options.deltaPosition;
					} else {
						if (_options.deltaDirection.match(/^down$/i)) {
							_calc.top = parseInt(_options.offsetTop + _wrapper.outerHeight(), 10);
							_calc.left = _options.offsetLeft;
						} else {
							_calc.top = _options.offsetTop;
							_calc.left = parseInt(_options.offsetLeft + _wrapper.outerWidth(), 10);
						}
						// down or right
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^mouse$/i)) {
					if (_options.deltaDirection.match(/^up|left$/i)) {
						if (_options.deltaDirection.match(/^up$/i)) {
							_calc.top = -(_options.offsetTop + _wrapper.outerHeight());
							_calc.left = _options.offsetLeft;
						} else if (_options.deltaDirection.match(/^left$/i)) {
							_calc.top = _options.offsetTop;
							_calc.left = -(_options.offsetLeft + _wrapper.outerWidth());
						}
						// up or left
						_calc.delta = _options.deltaPosition;
					} else {
						_calc.top = _options.offsetTop;
						_calc.left = _options.offsetLeft;
						// down or right
						_calc.delta = -_options.deltaPosition;
					}
				}

				// handle the wrapper (element|body) positioning
				if (_options.position.match(/^fixed$/i)) {
					if (_options.positionAt.match(/^element|body$/i)) {
						_wrapper.css({
							'position': 'fixed',
							'left': _calc.left,
							'top': _calc.top,
							'right': _calc.right + 'px',
							'bottom': _calc.bottom + 'px'
						});
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						_wrapper.css({
							'position': 'absolute',
							'top': _calc.top + 'px',
							'left': _calc.left + 'px'
						});
					}
				}
			}
			return this;
		},
		removeBubbletip: function (tips) {
			var tipsActive;
			var tipsToRemove = [];
			var tipsActiveAdjusted = [];
			var arr, i, ix;
			var elem;

			tipsActive = $.makeArray($(this).data('bubbletip_tips'));

			// convert the parameter array of tip id's or elements to id's
			arr = $.makeArray(tips);
			for (i = 0; i < arr.length; i++) {
				tipsToRemove.push($(arr[i]).get(0).id);
			}

			for (i = 0; i < tipsActive.length; i++) {
				ix = null;
				if ((tipsToRemove.length === 0) || ((ix = $.inArray(tipsActive[i][0], tipsToRemove)) >= 0)) {
					// remove all tips if there are none specified
					// otherwise, remove only specified tips

					// find the surrounding table.bubbletip
					elem = $('#' + tipsActive[i][0]).get(0).parentNode;
					while (elem.tagName.toLowerCase() != 'table') {
						elem = elem.parentNode;
					}
					// attach the tip element to body and hide
					$('#' + tipsActive[i][0]).appendTo('body').hide();
					// remove the surrounding table.bubbletip
					$(elem).remove();

					// unbind show/hide events
					$(this).unbind('.bubbletip' + tipsActive[i][1]);

					// unbind window.resize event
					$(window).unbind('.bubbletip' + tipsActive[i][1]);
				} else {
					// tip is not being removed, so add it to the adjusted array
					tipsActiveAdjusted.push(tipsActive[i]);
				}
			}
			$(this).data('bubbletip_tips', tipsActiveAdjusted);

			return this;
		}
	});
})(jQuery);

/*
 * fancyBox - jQuery Plugin
 * version: 2.0.5 (19/03/2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function (window, document, undefined) {
	"use strict";

	var $ = window.jQuery,
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		didResize = false,
		resizeTimer = null,
		isMobile = document.createTouch !== undefined,
		isString = function(str) {
			return $.type(str) === "string";
		},
		isPercentage = function($str) {
			return $str.toString().indexOf('%') > -1;
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.0.5',

		defaults: {
			padding: 15,
			margin: 20,

			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,

			autoSize: true,
			autoResize: !isMobile,
			autoCenter : !isMobile,
			fitToView: true,
			aspectRatio: false,
			topRatio: 0.5,

			fixed: !($.browser.msie && $.browser.version <= 6) && !isMobile,
			scrolling: 'auto', // 'auto', 'yes' or 'no'
			wrapCSS: 'fancybox-default',

			arrows: true,
			closeBtn: true,
			closeClick: false,
			nextClick : false,
			mouseWheel: true,
			autoPlay: false,
			playSpeed: 3000,
			preload : 3,

			modal: false,
			loop: true,
			ajax: { dataType: 'html' },
			keys: {
				next: [13, 32, 34, 39, 40], // enter, space, page down, right arrow, down arrow
				prev: [8, 33, 37, 38], // backspace, page up, left arrow, up arrow
				close: [27] // escape key
			},

			// Override some properties
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,

			// HTML templates
			tpl: {
				wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
				swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
				next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect: 'fade', // 'elastic', 'fade' or 'none'
			openSpeed: 250,
			openEasing: 'swing',
			openOpacity: true,
			openMethod: 'zoomIn',

			// Closing fancyBox
			closeEffect: 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed: 250,
			closeEasing: 'swing',
			closeOpacity: true,
			closeMethod: 'zoomOut',

			// Changing next gallery item
			nextEffect: 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed: 300,
			nextEasing: 'swing',
			nextMethod: 'changeIn',

			// Changing previous gallery item
			prevEffect: 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed: 300,
			prevEasing: 'swing',
			prevMethod: 'changeOut',

			// Enabled helpers
			helpers: {
				overlay: {
					speedIn: 0,
					speedOut: 300,
					opacity: 0.8,
					css: {
						cursor: 'pointer'
					},
					closeClick: true
				},
				title: {
					type: 'float' // 'float', 'inside', 'outside' or 'over'
				}
			},

			// Callbacks
			onCancel: $.noop, // If canceling
			beforeLoad: $.noop, // Before loading
			afterLoad: $.noop, // After loading
			beforeShow: $.noop, // Before changing in current item
			afterShow: $.noop, // After opening
			beforeClose: $.noop, // Before closing
			afterClose: $.noop // After closing
		},

		//Current state
		group: {}, // Selected group
		opts: {}, // Group options
		coming: null, // Element being loaded
		current: null, // Currently loaded element
		isOpen: false, // Is currently open
		isOpened: false, // Have been fully opened at least once
		wrap: null,
		outer: null,
		inner: null,

		player: {
			timer: null,
			isActive: false
		},

		// Loaders
		ajaxLoad: null,
		imgPreload: null,

		// Some collections
		transitions: {},
		helpers: {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			//Kill existing instances
			F.close(true);

			//Normalize group
			if (group && !$.isArray(group)) {
				group = group instanceof $ ? $(group).get() : [group];
			}

			F.isActive = true;

			//Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			//All options are merged recursive except keys
			if ($.isPlainObject(opts) && opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			F._start(F.opts.index || 0);
		},

		cancel: function () {
			if (F.coming && false === F.trigger('onCancel')) {
				return;
			}

			F.coming = null;

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onabort = F.imgPreload.onerror = null;
			}
		},

		close: function (a) {
			F.cancel();

			if (!F.current || false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			//If forced or is still opening then remove immediately
			if (!F.isOpen || (a && a[0] === true)) {
				$(".fancybox-wrap").stop().trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;

				$(".fancybox-item, .fancybox-nav").remove();

				F.wrap.stop(true).removeClass('fancybox-opened');
				F.inner.css('overflow', 'hidden');

				F.transitions[F.current.closeMethod]();
			}
		},

		// Start/stop slideshow
		play: function (a) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					$('body').unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						$('body').bind({
							'afterShow.player onUpdate.player': set,
							'onCancel.player beforeClose.player': stop,
							'beforeLoad.player': clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (F.player.isActive || (a && a[0] === false)) {
				stop();
			} else {
				start();
			}
		},

		next: function () {
			if (F.current) {
				F.jumpto(F.current.index + 1);
			}
		},

		prev: function () {
			if (F.current) {
				F.jumpto(F.current.index - 1);
			}
		},

		jumpto: function (index) {
			if (!F.current) {
				return;
			}

			index = parseInt(index, 10);

			if (F.group.length > 1 && F.current.loop) {
				if (index >= F.group.length) {
					index = 0;

				} else if (index < 0) {
					index = F.group.length - 1;
				}
			}

			if (F.group[index] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		reposition: function (a, b) {
			if (F.isOpen) {
				if (b && b.type === 'scroll') {
					F.wrap.stop().animate(F._getPosition(a), 200);
				} else {
					F.wrap.css(F._getPosition(a));
				}
			}
		},

		update: function (e) {
			if (F.isOpen) {
				// It's a very bad idea to attach handlers to the window scroll event, run this code after a delay
				if (!didResize) {
					resizeTimer = setTimeout(function () {
						var current = F.current;

						if (didResize) {
							didResize = false;

							if (current) {
								if (!e || (e && (e.type === 'orientationchange' || (current.autoResize && e.type === 'resize')))) {
									if (current.autoSize) {
										F.inner.height('auto');
										current.height = F.inner.height();
									}

									F._setDimension();

									if (current.canGrow) {
										F.inner.height('auto');
									}
								}

								if (current.autoCenter) {
									F.reposition(null, e);
								}

								F.trigger('onUpdate');
							}
						}
					}, 100);
				}

				didResize = true;
			}
		},

		toggle: function () {
			if (F.isOpen) {
				F.current.fitToView = !F.current.fitToView;

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('keypress.fb');

			$("#fancybox-loading").remove();
		},

		showLoading: function () {
			F.hideLoading();

			//If user will press the escape-button, the request will be canceled
			D.bind('keypress.fb', function(e) {
				if (e.keyCode == 27) {
					e.preventDefault();
					F.cancel();
				}
			});

			$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
		},

		getViewport: function () {
			return {
				x: W.scrollLeft(),
				y: W.scrollTop(),
				w: W.width(),
				h: W.height()
			};
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys = current.keys;

			if (!current) {
				return;
			}

			W.bind('resize.fb, orientationchange.fb', F.update);

			if (!current.fixed && current.autoCenter) {
				W.bind("scroll.fb", F.update);
			}

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code;

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && $.inArray(e.target.tagName.toLowerCase(), ['input', 'textarea', 'select', 'button']) < 0 && !$(e.target).is('[contenteditable]')) {
						code = e.keyCode;

						if ($.inArray(code, keys.close) > -1) {
							F.close();
							e.preventDefault();

						} else if ($.inArray(code, keys.next) > -1) {
							F.next();
							e.preventDefault();

						} else if ($.inArray(code, keys.prev) > -1) {
							F.prev();
							e.preventDefault();
						}
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel && F.group.length > 1) {
				F.wrap.bind('mousewheel.fb', function (e, delta) {
					var target = e.target || null;

					if (delta !== 0 && (!target || target.clientHeight === 0 || (target.scrollHeight === target.clientHeight && target.scrollWidth === target.clientWidth))) {
						e.preventDefault();

						F[delta > 0 ? 'prev' : 'next']();
					}
				});
			}
		},

		trigger: function (event) {
			var ret, obj = F[ $.inArray(event, ['onCancel', 'beforeLoad', 'afterLoad']) > -1 ? 'coming' : 'current' ];

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && $.isPlainObject(F.helpers[helper]) && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event](opts, obj);
					}
				});
			}

			$.event.trigger(event + '.fb');
		},

		isImage: function (str) {
			return str && str.toString().match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i);
		},

		isSWF: function (str) {
			return str && str.toString().match(/\.(swf)(.*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				element = F.group[index] || null,
				isDom,
				href,
				type,
				rez,
				hrefParts;

			if (element && (element.nodeType || element instanceof $)) {
				isDom = true;

				if ($.metadata) {
					coming = $(element).metadata();
				}
			}

			coming = $.extend(true, {}, F.opts, {index : index, element : element}, ($.isPlainObject(element) ? element : coming));

			// Re-check overridable options
			$.each(['href', 'title', 'content', 'type'], function(i,v) {
				coming[v] = F.opts[ v ] || (isDom && $(element).attr( v )) || coming[ v ] || null;
			});

			// Convert margin property to array - top, right, bottom, left
			if (typeof coming.margin === 'number') {
				coming.margin = [coming.margin, coming.margin, coming.margin, coming.margin];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn : false,
					closeClick: false,
					nextClick : false,
					arrows : false,
					mouseWheel : false,
					keys : null,
					helpers: {
						overlay : {
							css: {
								cursor : 'auto'
							},
							closeClick : false
						}
					}
				});
			}

			//Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;
				return;
			}

			type = coming.type;
			href = coming.href || element;

			///Check if content type is set, if not, try to get
			if (!type) {
				if (isDom) {
					rez = $(element).data('fancybox-type');

					if (!rez && element.className) {
						rez = element.className.match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (!type && isString(href)) {
					if (F.isImage(href)) {
						type = 'image';

					} else if (F.isSWF(href)) {
						type = 'swf';

					} else if (href.match(/^#/)) {
						type = 'inline';
					}
				}

				// ...if not - display element itself
				if (!type) {
					type = isDom ? 'inline' : 'html';
				}

				coming.type = type;
			}

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content) {
					if (type === 'inline') {
						coming.content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

					} else {
						coming.content = element;
					}
				}

				if (!coming.content || !coming.content.length) {
					type = null;
				}

			} else if (!href) {
				type = null;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 * 	this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			if (type === 'ajax' && isString(href)) {
				hrefParts = href.split(/\s+/, 2);

				href = hrefParts.shift();
				coming.selector = hrefParts.shift();
			}

			coming.href = href;
			coming.group = F.group;
			coming.isDom = isDom;

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type) {
				F._afterLoad();

			} else {
				F._error( 'type' );
			}
		},

		_error: function ( type ) {
			F.hideLoading();

			$.extend(F.coming, {
				type : 'html',
				autoSize : true,
				minHeight : 0,
				hasError : type,
				content : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			F.imgPreload = new Image();

			F.imgPreload.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width = this.width;
				F.coming.height = this.height;

				F._afterLoad();
			};

			F.imgPreload.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			F.imgPreload.src = F.coming.href;

			if (!F.imgPreload.width) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, F.coming.ajax, {
				url: F.coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						F.coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_preloadImages: function() {
			var group = F.group,
				current = F.current,
				len = group.length,
				item,
				href,
				i,
				cnt = Math.min(current.preload, len - 1);

			if (!current.preload || group.length < 2) {
				return;
			}

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];
				href = $( item ).attr('href') || item;

				if (item.type === 'image' || F.isImage(href)) {
					new Image().src = href;
				}
			}
		},

		_afterLoad: function () {
			F.hideLoading();

			if (!F.coming || false === F.trigger('afterLoad', F.current)) {
				F.coming = false;

				return;
			}

			if (F.isOpened) {
				$(".fancybox-item").remove();

				F.wrap.stop(true).removeClass('fancybox-opened');
				F.inner.css('overflow', 'hidden');

				F.transitions[F.current.prevMethod]();

			} else {
				$(".fancybox-wrap").stop().trigger('onReset').remove();

				F.trigger('afterClose');
			}

			F.unbindEvents();

			F.isOpen = false;
			F.current = F.coming;

			//Build the neccessary markup
			F.wrap = $(F.current.tpl.wrap).addClass('fancybox-' + (isMobile ? 'mobile' : 'desktop') + ' fancybox-tmp ' + F.current.wrapCSS).appendTo('body');
			F.outer = $('.fancybox-outer', F.wrap).css('padding', F.current.padding + 'px');
			F.inner = $('.fancybox-inner', F.wrap);

			F._setContent();
		},

		_setContent: function () {
			var current = F.current,
				content = current.content,
				type = current.type,
				loadingBay,
				maxWidth = current.maxWidth,
				maxHeight = current.maxHeight;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (content instanceof $) {
						if (content.parent().hasClass('fancybox-inner')) {
							content.parents('.fancybox-wrap').unbind('onReset');
						}

						content = content.show().detach();

						$(F.wrap).bind('onReset', function () {
							content.appendTo('body').hide();
						});
					}

					if (current.autoSize) {
						loadingBay = $('<div class="fancybox-wrap ' + F.current.wrapCSS + ' fancybox-tmp"></div>')
							.appendTo('body')
							.css('maxWidth', isPercentage(maxWidth) ? maxWidth : maxWidth + 'px')
							.css('maxHeight', isPercentage(maxHeight) ? maxHeight : maxHeight + 'px')
							.append(content);

						current.width = loadingBay.width();
						current.height = loadingBay.height();

						// Re-check to fix 1px bug in some browsers
						loadingBay.width( F.current.width );

						if (loadingBay.height() > current.height) {
							loadingBay.width(current.width + 1);

							current.width = loadingBay.width();
							current.height = loadingBay.height();
						}

						content = loadingBay.contents().detach();

						loadingBay.remove();
					}

					break;

				case 'image':
					content = current.tpl.image.replace('{href}', current.href);

					current.aspectRatio = true;
					break;

				case 'swf':
					content = current.tpl.swf.replace(/\{width\}/g, current.width).replace(/\{height\}/g, current.height).replace(/\{href\}/g, current.href);
					break;
			}

			if (type === 'iframe') {
				content = $(current.tpl.iframe.replace('{rnd}', new Date().getTime()) ).attr('scrolling', current.scrolling);

				current.scrolling = 'auto';

				// Set auto height for iframes
				if (current.autoSize) {
					content.width( current.width );

					F.showLoading();

					content.data('ready', false).appendTo(F.inner).bind({
						onCancel : function() {
							$(this).unbind();

							F._afterZoomOut();
						},
						load : function() {
							var iframe = $(this), height;

							try {
								if (this.contentWindow.document.location) {
									height = iframe.contents().find('body').height() + 12;

									iframe.height( height );
								}

							} catch (e) {
								current.autoSize = false;

							}

							if (iframe.data('ready') === false) {
								F.hideLoading();

								if (height) {
									F.current.height = height;
								}

								F._beforeShow();

								iframe.data('ready', true);

							} else if (height) {
								F.update();
							}
						}

					}).attr('src', current.href);

					return;
				}

				content.attr('src', current.href);

			} else if (type === 'image' || type === 'swf') {
				current.autoSize = false;
				current.scrolling = 'visible';
			}

			F.inner.append(content);

			F._beforeShow();
		},

		_beforeShow : function() {
			F.coming = null;

			//Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			//Set initial dimensions and hide
			F._setDimension();

			F.wrap.hide().removeClass('fancybox-tmp');

			F.bindEvents();
			F._preloadImages();

			F.transitions[ F.isOpened ? F.current.nextMethod : F.current.openMethod ]();
		},

		_setDimension: function () {
			var wrap = F.wrap,
				outer = F.outer,
				inner = F.inner,
				current = F.current,
				viewport = F.getViewport(),
				margin = current.margin,
				padding2 = current.padding * 2,
				width = current.width,
				height = current.height,
				maxWidth = current.maxWidth,
				maxHeight = current.maxHeight,
				minWidth = current.minWidth,
				minHeight = current.minHeight,
				ratio,
				height_,
				space;

			viewport.w -= (margin[1] + margin[3]);
			viewport.h -= (margin[0] + margin[2]);

			if (isPercentage(width)) {
				width = (((viewport.w - padding2) * parseFloat(width)) / 100);
			}

			if (isPercentage(height)) {
				height = (((viewport.h - padding2) * parseFloat(height)) / 100);
			}

			ratio = width / height;

			width += padding2;
			height += padding2;

			if (current.fitToView) {
				maxWidth = Math.min(viewport.w, maxWidth);
				maxHeight = Math.min(viewport.h, maxHeight);
			} else {
				maxWidth += padding2;
				maxHeight += padding2;
			}

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width = maxWidth;
					height = ((width - padding2) / ratio) + padding2;
				}

				if (height > maxHeight) {
					height = maxHeight;
					width = ((height - padding2) * ratio) + padding2;
				}

				if (width < minWidth) {
					width = minWidth;
					height = ((width - padding2) / ratio) + padding2;
				}

				if (height < minHeight) {
					height = minHeight;
					width = ((height - padding2) * ratio) + padding2;
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));
				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			width = Math.round(width);
			height = Math.round(height);

			//Reset dimensions
			$(wrap.add(outer).add(inner)).width('auto').height('auto');

			inner.width(width - padding2).height(height - padding2);
			wrap.width(width);

			height_ = wrap.height(); // Real wrap height

			//Fit wrapper inside
			if (width > maxWidth || height_ > maxHeight) {
				while ((width > maxWidth || height_ > maxHeight) && width > minWidth && height_ > minHeight) {
					height = height - 10;

					if (current.aspectRatio) {
						width = Math.round(((height - padding2) * ratio) + padding2);

						if (width < minWidth) {
							width = minWidth;
							height = ((width - padding2) / ratio) + padding2;
						}

					} else {
						width = width - 10;
					}

					inner.width(width - padding2).height(height - padding2);
					wrap.width(width);

					height_ = wrap.height();
				}
			}

			current.dim = {
				width: width,
				height: height_
			};

			current.canGrow = current.autoSize && height > minHeight && height < maxHeight;
			current.canShrink = false;
			current.canExpand = false;

			if ((width - padding2) < current.width || (height - padding2) < current.height) {
				current.canExpand = true;

			} else if ((width > viewport.w || height_ > viewport.h) && width > minWidth && height > minHeight) {
				current.canShrink = true;
			}

			space = height_ - padding2;


			F.innerSpace = space - inner.height();
			F.outerSpace = space - outer.height();
		},

		_getPosition: function (a) {
			var current = F.current,
				viewport = F.getViewport(),
				margin = current.margin,
				width = F.wrap.width() + margin[1] + margin[3],
				height = F.wrap.height() + margin[0] + margin[2],
				rez = {
					position: 'absolute',
					top: margin[0] + viewport.y,
					left: margin[3] + viewport.x
				};

			if (current.autoCenter && current.fixed && (!a || a[0] === false) && height <= viewport.h && width <= viewport.w) {
				rez = {
					position: 'fixed',
					top: margin[0],
					left: margin[3]
				};
			}

			rez.top = Math.ceil(Math.max(rez.top, rez.top + ((viewport.h - height) * current.topRatio))) + 'px';
			rez.left = Math.ceil(Math.max(rez.left, rez.left + ((viewport.w - width) * 0.5))) + 'px';

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current, scrolling = current ? current.scrolling : 'no';

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.addClass('fancybox-opened').css('overflow', 'visible');

			F.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			//Assign a click event
			if (current.closeClick || current.nextClick) {
				//This is not the perfect solution but arrows have to be next to content so their height will match
				// and I do not want another wrapper around content
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			//Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.outer).bind('click.fb', F.close);
			}

			//Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.inner).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.inner).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			F.update();

			if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function () {
			F.trigger('afterClose');

			F.wrap.trigger('onReset').remove();

			$.extend(F, {
				group: {},
				opts: {},
				current: null,
				isActive: false,
				isOpened: false,
				isOpen: false,
				wrap: null,
				outer: null,
				inner: null
			});
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current = F.current,
				element = current.element,
				padding = current.padding,
				orig = $(current.orig),
				pos = {},
				width = 50,
				height = 50,
				viewport;

			if (!orig.length && current.isDom && $(element).is(':visible')) {
				orig = $(element).find('img:first');

				if (!orig.length) {
					orig = $(element);
				}
			}

			if (orig.length) {
				pos = orig.offset();

				if (orig.is('img')) {
					width = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				viewport = F.getViewport();

				pos.top = viewport.y + (viewport.h - height) * 0.5;
				pos.left = viewport.x + (viewport.w - width) * 0.5;
			}

			pos = {
				top: Math.ceil(pos.top - padding) + 'px',
				left: Math.ceil(pos.left - padding) + 'px',
				width: Math.ceil(width + padding * 2) + 'px',
				height: Math.ceil(height + padding * 2) + 'px'
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio, innerValue, outerValue;

			if (fx.prop === 'width' || fx.prop === 'height') {
				innerValue = outerValue = Math.ceil(now - (F.current.padding * 2));

				if (fx.prop === 'height') {
					ratio = (now - fx.start) / (fx.end - fx.start);

					if (fx.start > fx.end) {
						ratio = 1 - ratio;
					}

					innerValue -= F.innerSpace * ratio;
					outerValue -= F.outerSpace * ratio;
				}

				F.inner[fx.prop](innerValue);
				F.outer[fx.prop](outerValue);
			}
		},

		zoomIn: function () {
			var wrap = F.wrap,
				current = F.current,
				startPos,
				endPos,
				dim = current.dim;

			if (current.openEffect === 'elastic') {
				endPos = $.extend({}, dim, F._getPosition(true));

				//Remove "position" property
				delete endPos.position;

				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0;
					endPos.opacity = 1;
				}

				F.outer.add(F.inner).width('auto').height('auto');

				wrap.css(startPos).show();

				wrap.animate(endPos, {
					duration: current.openSpeed,
					easing: current.openEasing,
					step: this.step,
					complete: F._afterZoomIn
				});

			} else {
				wrap.css($.extend({}, dim, F._getPosition()));

				if (current.openEffect === 'fade') {
					wrap.fadeIn(current.openSpeed, F._afterZoomIn);

				} else {
					wrap.show();
					F._afterZoomIn();
				}
			}
		},

		zoomOut: function () {
			var wrap = F.wrap,
				current = F.current,
				endPos;

			if (current.closeEffect === 'elastic') {
				if (wrap.css('position') === 'fixed') {
					wrap.css(F._getPosition(true));
				}

				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0;
				}

				wrap.animate(endPos, {
					duration: current.closeSpeed,
					easing: current.closeEasing,
					step: this.step,
					complete: F._afterZoomOut
				});

			} else {
				wrap.fadeOut(current.closeEffect === 'fade' ? current.closeSpeed : 0, F._afterZoomOut);
			}
		},

		changeIn: function () {
			var wrap = F.wrap,
				current = F.current,
				startPos;

			if (current.nextEffect === 'elastic') {
				startPos = F._getPosition(true);
				startPos.opacity = 0;
				startPos.top = (parseInt(startPos.top, 10) - 200) + 'px';

				wrap.css(startPos).show().animate({
					opacity: 1,
					top: '+=200px'
				}, {
					duration: current.nextSpeed,
					easing: current.nextEasing,
					complete: F._afterZoomIn
				});

			} else {
				wrap.css(F._getPosition());

				if (current.nextEffect === 'fade') {
					wrap.hide().fadeIn(current.nextSpeed, F._afterZoomIn);

				} else {
					wrap.show();
					F._afterZoomIn();
				}
			}
		},

		changeOut: function () {
			var wrap = F.wrap,
				current = F.current,
				cleanUp = function () {
					$(this).trigger('onReset').remove();
				};

			wrap.removeClass('fancybox-opened');

			if (current.prevEffect === 'elastic') {
				wrap.animate({
					'opacity': 0,
					top: '+=200px'
				}, {
					duration: current.prevSpeed,
					easing: current.prevEasing,
					complete: cleanUp
				});

			} else {
				wrap.fadeOut(current.prevEffect === 'fade' ? current.prevSpeed : 0, cleanUp);
			}
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		overlay: null,

		update: function () {
			var width, scrollWidth, offsetWidth;

			//Reset width/height so it will not mess
			this.overlay.width(0).height(0);

			if ($.browser.msie) {
				scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				width = scrollWidth < offsetWidth ? W.width() : scrollWidth;

			} else {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		beforeShow: function (opts) {
			if (this.overlay) {
				return;
			}

			opts = $.extend(true, {
				speedIn : 'fast',
				closeClick : true,
				opacity : 1,
				css : {
					background: 'black'
				}
			}, opts);

			this.overlay = $('<div id="fancybox-overlay"></div>').css(opts.css).appendTo('body');

			this.update();

			if (opts.closeClick) {
				this.overlay.bind('click.fb', F.close);
			}

			W.bind("resize.fb", $.proxy(this.update, this));

			this.overlay.fadeTo(opts.speedIn, opts.opacity);
		},

		onUpdate: function () {
			//Update as content may change document dimensions
			this.update();
		},

		afterClose: function (opts) {
			if (this.overlay) {
				this.overlay.fadeOut(opts.speedOut || 0, function () {
					$(this).remove();
				});
			}

			this.overlay = null;
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		beforeShow: function (opts) {
			var title, text = F.current.title;

			if (text) {
				title = $('<div class="fancybox-title fancybox-title-' + opts.type + '-wrap">' + text + '</div>').appendTo('body');

				if (opts.type === 'float') {
					//This helps for some browsers
					title.width(title.width());

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs(parseInt(title.css('margin-bottom'), 10));
				}

				title.appendTo(opts.type === 'over' ? F.inner : (opts.type === 'outside' ? F.wrap : F.outer));
			}
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var that = $(this),
			selector = this.selector || '',
			index,
			run = function(e) {
				var what = this, idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)) {
					e.preventDefault();

					relType = options.groupAttr || 'data-fancybox-group';
					relVal = $(what).attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal = what[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx = what.index(this);
					}

					options.index = idx;

					F.open(what, options);
				}
			};

		options = options || {};
		index = options.index || 0;

		if (selector) {
			D.undelegate(selector, 'click.fb-start').delegate(selector, 'click.fb-start', run);

		} else {
			that.unbind('click.fb-start').bind('click.fb-start', run);
		}

		return this;
	};

}(window, document));

/*
 * jQuery Cookies - https://github.com/panzi/jQuery-Cookies
 * License - Public Domain
 */
(function ($, undefined) {
	function get(name) {
		var cookies = {};
		if (document.cookie) {
			var values = document.cookie.split(/; */g);
			for (var i = 0; i < values.length; ++ i) {
				var value = values[i];
				var pos = value.search('=');
				var key;

				if (pos < 0) {
					key = decodeURIComponent(value);
					value = undefined;
				}
				else {
					key = decodeURIComponent(value.slice(0, pos));
					value = decodeURIComponent(value.slice(pos + 1));
				}

				cookies[key] = value;
			}
		}

		if (name === undefined) {
			return cookies;
		}
		else {
			return cookies[name];
		}
	}

	function set(name, value, expires, path, domain, secure) {
		switch (arguments.length) {
		case 1:
			for (var key in name) {
				set(key, name[key]);
			}
			return;
		case 2:
			if (value && typeof(value) === 'object') {
				expires = value.expires;
				path = value.path;
				domain = value.domain;
				secure = value.secure;
				value = value.value;
			}
		}

		if (value === null || value === undefined) {
			expires = -1;
		}

		var buf = [encodeURIComponent(name) + '=' + encodeURIComponent(value)];
		switch (typeof(expires)) {
		case 'string':
			expires = new Date(expires);
		case 'object':
			buf.push('expires=' + expires.toUTCString());
			break;
		case 'boolean':
			if (expires) {
				break;
			}
			expires = 365 * 2000;
		case 'number':
			var date = new Date();
			date.setTime(date.getTime() + (1000 * 60 * 60 * 24 * expires));
			buf.push('expires=' + date.toUTCString());
			break;
		}

		if (path === true) {
			buf.push('path=' + document.location.pathname);
		}
		else if (path !== undefined && path !== false) {
			buf.push('path=' + path.replace(/[;\s]/g, encodeURIComponent));
		}

		if (domain === true) {
			//buf.push('domain=' + document.location.host);
			buf.push('domain=' + document.location.host);
		}
		else if (domain !== undefined && domain !== false) {
			buf.push('domain=' + domain.replace(/[;\s]/g, encodeURIComponent));
		}

		if (secure) {
			buf.push('secure');
		}

		document.cookie = buf.join('; ');
	}

	$.cookie = function () {
		switch (arguments.length) {
		case 0:
			return get();
		case 1:
			if (typeof(arguments[0]) !== 'object') {
				return get(arguments[0]);
			}
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			set.apply(this, arguments);
			return this;
		default:
			throw new Error('Illegal number of arguments');
		}
	};
})(jQuery);

// stardevelop.com Live Help International Copyright 2003-2012
// Live Help JavaScript v4.0 - Requires: jQuery 1.50.0 or above

var LiveHelp = (function (window, document, $, undefined) {
	'use strict';
	/*global LiveHelpSettings:true, currentUser:true, buzz:true, Crypto:true */

	var prefix = 'LiveHelp',
		protocol = ('https:' === document.location.protocol ? 'https://' : 'http://'),
		server = (typeof LiveHelpSettings !== 'undefined') ? LiveHelpSettings.server : document.location.host + document.location.pathname.substring(0, document.location.pathname.indexOf('/livehelp')),
		selector = '#' + prefix,
		opts = {
			protocol: protocol,
			server: protocol + server + '/livehelp/',
			domain: document.location.host.replace('www.', ''),
			department: '',
			template: '',
			locale: 'en',
			embedded: false,
			inviteTab: false,
			css: true,
			fonts: true,
			session: '',
			security: '',
			popup: false,
			visitorTracking: null,
			plugin: '',
			name: '',
			custom: '',
			email: '',
			connected: false
		},
		notifyTimer,
		message = 0,
		messageSound,
		newMessages = 0,
		currentlyTyping = 0,
		title = '',
		titleTimer,
		operator = '',
		popup,
		popupPosition = {left: 0, top: 0},
		size = '',
		initiateTimer,
		initiateStatus = '',
		initiateMargin = {left: 10, top: 10},
		initiateSize = {width: 323, height: 229},
		targetX,
		targetY,
		browserSize = {width: 0, height: 0},
		visitorTimer,
		visitorTimeout = false,
		visitorInit = 0,
		visitorRefresh = 15 * 1000,
		loadTime = $.now(),
		pageTime,
		cookies = {session: $.cookie(prefix + 'Session')},
		settings = {user: 'Guest', visitorTracking: true},
		storage = {tabOpen: false, operatorDetailsOpen: false, soundEnabled: true, notificationEnabled: true, chatEnded: false, department: '', messages: 0, lastMessage: 0},
		callTimer = '',
		callConnectedTimer,
		callStatus;

	// Button Events
	$('.' + prefix + 'Button').live('click', function () {
		openLiveHelp($(this));
		return false;
	});
	
	$('.' + prefix + 'CallButton').live('click', function () {
		openLiveHelp($(this), '', 'call.php');
		return false;
	});
	
	$('.' + prefix + 'OfflineButton').live('click', function () {
		openEmbeddedOffline();
		return false;
	});

	$.preloadImages = function () {
		for (var i = 0; i < arguments.length; i++) {
			$('<img>').attr('src', arguments[i]);
		}
	};

	function overrideSettings() {
		// Update Settings
		if (typeof LiveHelpSettings !== 'undefined') {
			opts = $.extend(opts, LiveHelpSettings);
		}
		
		// Override Server
		opts.server = opts.protocol + server + '/livehelp/';
	}
	
	// Override Settings
	overrideSettings();

	function updateSettings(success) {
		var data = { JSON: '' },
			session = cookies.session;
		
		// Cookies
		if (session !== undefined && session.length > 0) {
			data.SESSION = session;
		}
		
		// Override Language
		if (LiveHelpSettings !== undefined && LiveHelpSettings.locale !== undefined) {
			data.LANGUAGE = LiveHelpSettings.locale;
		}
		
		$.ajax({
			url: opts.server + 'include/settings.php',
			data: $.param(data),
			success: function (data, textStatus, jqXHR) {
				
				// Update Server Settings
				settings = data;
				
				// Update Session
				if (settings.session.length > 0) {
					cookies.session = settings.session;
				} else if (opts.popup && opts.session.length > 0) {
					cookies.session = opts.session;
				}
				
				// Override Visitor Tracking
				opts.visitorTracking = (opts.visitorTracking != null && opts.visitorTracking === false) ? false : settings.visitorTracking;
					
				// Offline Email Redirection
				if (settings.offlineRedirect !== '') {
					if (/^(?:^[\-!#$%&'*+\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&'*+\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&'*+\\.\/0-9=?A-Z\^_`a-z{|}~]+$)$/i.test(settings.offlineRedirect)) {
						settings.offlineRedirect = 'mailto:' + settings.offlineRedirect;
					}
					settings.offlineEmail = 0;
				}
				
				// Settings Updated
				$(document).trigger('LiveHelp.SettingsUpdated');
				
				// Initiate Chat
				if (settings.initiate) {
					displayInitiateChat();
				}

				// Smilies
				if (settings.smilies) {
					$(selector + 'SmiliesButton').show();
				} else {
					$(selector + 'SmiliesButton').hide();
				}

				// Update Window Size
				updateChatWindowSize();
					
				// Departments
				updateDepartments();
				
				// Callback
				if (success) {
					success();
				}
				
				// Login Details
				if (settings.user.length > 0) {
					$(selector + 'NameInput').val(settings.user);
				}
				if (settings.email.length > 0) {
					$(selector + 'EmailInput').val(settings.email);
				}
				if (settings.department.length > 0) {
					$(selector + 'DepartmentInput').val(settings.department);
				}
				
			},
			dataType: 'jsonp',
			cache: false,
			xhrFields: { withCredentials: true }
		});
	}

	function updateDepartments() {
		var field = 'DepartmentInput',
			options = '',
			department = $(selector + field),
			departments = settings.departments;
		
		if (departments.length > 0) {
			if (!department.find('option[value=""]').length) {
				options += '<option value=""></option>';
			}
			$.each(departments, function (index, value) {
				if (!department.find('option[value="' + departments[index] + '"]').length) {
					options += '<option value="' + departments[index] + '">' + departments[index] + '</option>';
				}
			});
			department.append(options);
			if (opts.department.length === 0) {
				$(selector + 'DepartmentLabel').show();
			}
		} else {
			$(selector + 'DepartmentLabel').hide();
		}
	}

	function ignoreDrag(e) {
		if (e.preventDefault) {
			e.preventDefault();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		if (e.dataTransfer !== undefined) {
			e.dataTransfer.dropEffect = 'copy';
		}
		return false;
	}

	function acceptDrop(e) {
		ignoreDrag(e.originalEvent);
		var dt = e.originalEvent.dataTransfer,
			files = dt.files;

		if (dt.files.length > 0) {
			var file = dt.files[0];
		}
	}

	// Update Window Size
	function updateChatWindowSize() {
		popupPosition.left = (window.screen.width - settings.popupSize.width) / 2;
		popupPosition.top = (window.screen.height - settings.popupSize.height) / 2;
		size = 'height=' + settings.popupSize.height + ',width=' + settings.popupSize.width + ',top=' + popupPosition.top + ',left=' + popupPosition.left + ',resizable=1,toolbar=0,menubar=0';
	}

	// Initiate Chat
	var targetY = 0, targetX = 0, Y = 0, X = 0, C = 0, D = 0, E = 0, F = 0;
	
	function updatePosition(selector) { 

		var obj = $(selector),
			offset = obj.offset(),
			currentY = offset.top,
			currentX = offset.left,
			now = new Date(),
			newTargetY = $(window).scrollTop() + initiateMargin.top,
			newTargetX = $(window).scrollLeft() + initiateMargin.left;
		
		if (currentY != newTargetY || currentX != newTargetX) { 
			if (targetY != newTargetY || targetX != newTargetX) { 
			
				targetY = newTargetY; targetX = newTargetX;
				
				now = new Date();
				Y = targetY - currentY; X = targetX - currentX;
				
				C = Math.PI / 2400; 
				D = now.getTime();
				if (Math.abs(Y) > browserSize.height) { 
					E = Y > 0 ? targetY - browserSize.height : targetY + browserSize.height;
					Y = Y > 0 ? browserSize.height : -browserSize.height;
				} else { 
					E = currentY;
				} 
				if (Math.abs(X) > browserSize.width) { 
					F = X > 0 ? targetX - browserSize.width : targetX + browserSize.width;
					X = X > 0 ? browserSize.width : -browserSize.width;
				} else { 
					F = currentX;
				}
				
			}
			
			// Update Positions
			now = new Date();
			var newY = Math.round(Y * Math.sin(C * (now.getTime() - D)) + E);
			var newX = Math.round(X * Math.sin(C * (now.getTime() - D)) + F);
			
			// Update Position
			if ((Y > 0 && newY > currentY) || (Y < 0 && newY < currentY)) {
				$(selector).css('top', newY + 'px');
			}
			if ((X > 0 && newX > currentX) || (X < 0 && newX < currentX)) {
				$(selector).css('left', newX + 'px');
			}
		}
	}

	function resetPosition() {

		var width = 0, height = 0,
			d = document.documentElement;
		
		width = window.innerWidth || (d && d.clientWidth) || d.body.clientWidth;
		height = window.innerHeight || (d && d.clientHeight) || d.body.clientHeight;
		browserSize.width = width;
		browserSize.height = height;
		
		if (settings !== undefined && settings.initiateAlign !== undefined) {
			if (settings.initiateAlign.x === 'right') {
				initiateMargin.left = width - initiateSize.width - 30;
			} else if (settings.initiateAlign.x == 'middle') {
				initiateMargin.left = Math.round((width - 20) / 2) - Math.round(initiateSize.width / 2);
			}
			if (settings.initiateAlign.y === 'bottom') {
				initiateMargin.top = height - initiateSize.height - 85;
			} else if (settings.initiateAlign.y == 'center') {
				initiateMargin.top = Math.round((height - 20) / 2) - Math.round(initiateSize.height / 2);
			}
		}

	}

	function bounceNotification() {
		var notify = $(selector + 'Notification');
		if (newMessages > 0 && !$.data(notify, 'bouncing') && parseInt($(selector + 'Embedded').css('bottom'), 10) < -1) {
			$.data(notify, 'bouncing', true);
			notify.effect('bounce', { times: 10, distance: 20 }, 300, function () {
				$.data(notify, 'bouncing', false);
			});
		}
	}

	function showNotification() {
		if (storage.notificationEnabled) {
			if (newMessages > 0) {
				var text = (newMessages > 99) ? '...' : newMessages;
				$(selector + 'Notification span').text(text);
			}
			if (notifyTimer === null) {
				notifyTimer = window.setInterval(function () {
					bounceNotification();
				}, 5000);
			}
			bounceNotification();
			if (messageSound !== undefined && storage.soundEnabled && storage.notificationEnabled) {
				messageSound.play();
			}
		}
	}

	function updateStorage() {
		$.jStorage.set(prefix, storage);
	}

	function hideNotification() {
		storage.lastMessage = message;
		if (newMessages > 0) {
			newMessages = 0;
		}
		updateStorage();
		$(selector + 'Notification').fadeOut(250);
	}

	var opening = false;

	function openTab() {
	
		// Check Blocked Chat
		if (settings.blocked !== 0) {
			blockChat();
		}

		var embed = $(selector + 'Embedded');
		if (parseInt(embed.css('bottom'), 10) != -1 && !embed.data('closing') && !embed.data('opening') && opts.embedded === true) {

			// Load Sprites
			$('<img />').attr('src', opts.server + 'images/Sprite.png').load(function () {
				// Add CSS
				$('<link href="' + opts.server + 'styles/sprite.css" rel="stylesheet" type="text/css"/>').appendTo('head');
			});

			// Setup Sounds
			if (messageSound === undefined) {
				messageSound = new buzz.sound(opts.server + 'sounds/Pending Chat', {
					formats: ['ogg', 'mp3', 'wav'],
					volume: 100
				});
			}

			newMessages = 0;
			window.clearTimeout(notifyTimer);
			notifyTimer = null;
			hideNotification();
			embed.data('opening', true);
			embed.animate({ bottom: -1 }, 1000, 'easeInOutQuad', function () {
				initDepartments();
				$(this).data('opening', false)
			});
			$(selector + 'CloseButton').fadeIn(250);
		}
	}

	function closeTab(complete) {
		$(selector + 'Embedded').data('closing', true);
		$(selector + 'SmiliesButton').close();
		$(selector + 'Embedded').animate({ bottom: -466 }, 1000, 'easeInOutQuad', function () {
			if (settings.currentStatus == 'Online') {
				$(selector + 'CallAction').fadeIn(250);
			}
			if (complete) {
				complete.call();
			}
			$(this).data('closing', false);
		});
		
		$(selector + 'CloseButton').fadeOut(250);
	}

	function hideOperatorDetails() {
		var body = $(selector + 'Body'),
			top = parseInt(body.css('top'), 10);
		
		if (top == 86) {
			var height = $(selector + 'Scroll').height();
			body.animate({ top: 36 }, 500, 'easeInOutQuad', function () {
				$(selector + 'CollapseButton').removeClass('Collapse').addClass('Expand').attr('title', settings.language.expand);
			});
			$(selector + 'Scroll').animate({ height: height + 50 }, 500, 'easeInOutQuad');
		}
	}

	function showOperatorDetails(id, name) {
		var scroll = $(selector + 'Scroll');
		if (id !== undefined && name !== undefined) {
			$(selector + 'OperatorImage').css('background', 'url(' + opts.server + 'image.php?ID=' + id + '&SIZE=40) #333 no-repeat');
			$(selector + 'OperatorName').text(name);
			$(selector + 'Typing span').text(name + ' is typing');
			$(selector + 'OperatorDepartment').text(storage.department);
		}
		
		if (storage.operatorDetailsOpen && $(selector + 'OperatorName').text().length > 0) {
			var top = parseInt($(selector + 'Body').css('top'), 10);
			if (top == 36) {
				var height = scroll.height();
				$(selector + 'Body').animate({ top: 86 }, 500, 'easeInOutQuad', function () {
					$(selector + 'CollapseButton').removeClass('Expand').addClass('Collapse').attr('title', settings.language.collapse);
				});
				scroll.animate({height: height - 50}, 500, 'easeInOutQuad');
			}
		}
		
	}

	function toggleSound() {
		var css = (storage.soundEnabled) ? 'SoundOn' : 'SoundOff',
			button = $(selector + 'SoundToolbarButton');
			
		if (button.length > 0) {
			button.removeClass('SoundOn SoundOff').addClass(css);
		}
	}

	function loadStorage() {
		var store = $.jStorage.get(prefix);
		if (store !== null) {
			storage = store;
			if (storage.tabOpen !== undefined && storage.tabOpen === true) {
				openTab();
			} else {
				closeTab();
			}
			if (storage.soundEnabled !== undefined) {
				toggleSound();
			} else {
				storage.soundEnabled = true;
			}
			if (settings.autoload) {
				if (storage.operatorDetailsOpen !== undefined && storage.operatorDetailsOpen) {
					showOperatorDetails();
				} else {
					hideOperatorDetails();
				}
			}
		}
	}

	var clickImage = function (id) {
		return function (eventObject) {
			$('#msg' + id + ' .fancybox').click();
		};
	};

	function scrollBottom() {
		var scroll = $(selector + 'Scroll');
		if (scroll) {
			scroll.scrollTo($(selector + 'MessagesEnd'));
		}
	}

	var displayImage = function (id) {
		return function (eventObject) {
			var output = '',
				width = $(selector + 'Messages').width(),
				displayWidth = width - 50,
				margin = [25, 25, 25, 25];
				
			if (this.width > displayWidth) {
				var aspect = displayWidth / this.width,
					displayHeight = this.height * aspect;
				output = '<div class="' + prefix + 'Image" style="position:relative; max-width:' + this.width + 'px; max-height:' + this.height + 'px; height:' + displayHeight + 'px; margin:5px"><div class="' + prefix + 'ImageZoom" style="position:absolute; opacity:0.5; top:0px; z-index:150; background:url(' + opts.server + 'images/Magnify.png) center center no-repeat; max-width:' + this.width + 'px; max-height:' + this.height + 'px; width:' + displayWidth + 'px; height:' + displayHeight + 'px"></div><div class="' + prefix + 'ImageHover" style="position:absolute; top:0px; z-index:100; background:#fff; opacity:0.25; max-width:' + this.width + 'px; max-height:' + this.height + 'px; width:' + displayWidth + 'px; height:' + displayHeight + 'px"></div><div style="position:absolute; top:0px;"><a href="' + this.src + '" class="fancybox"><img src="' + this.src + '" alt="Received Image" style="width:' + displayWidth + 'px; max-width:' + this.width + 'px; max-height:' + this.height + 'px"></a></div>';
			} else {
				output = '<img src="' + this.src + '" alt="Received Image" style="max-width:' + this.width + 'px; margin:5px">';
			}
			$('#msg' + id).append(output);
			output = '';
			scrollBottom();
			if (!opts.popup) {
				margin = [25, 405, 25, 25];
			}
			$('#msg' + id + ' .fancybox').fancybox({ openEffect: 'elastic', openEasing: 'easeOutBack', closeEffect: 'elastic', closeEasing: 'easeInBack', margin: margin });
			$('.' + prefix + 'ImageZoom').hover(function () {
				$('.' + prefix + 'ImageHover').fadeTo(250, 0);
				$(this).fadeTo(250, 1.0);
			}, function () {
				$('.' + prefix + 'ImageHover').fadeTo(250, 0.25);
				$(this).fadeTo(250, 0.75);
			});
			$('.' + prefix + 'ImageZoom').click(clickImage(id));
			if (messageSound !== undefined && storage.soundEnabled && storage.notificationEnabled) {
				messageSound.play();
			}
			window.focus();
		};
	};

	function htmlSmilies(message) {
		if (settings.smilies) {
			var smilies = [
					{ regex: /:D/g, css: 'Laugh' },
					{ regex: /:\)/g, css: 'Smile' },
					{ regex: /:\(/g, css: 'Sad' },
					{ regex: /\$\)/g, css: 'Money' },
					{ regex: /&gt;:O/g, css: 'Angry' },
					{ regex: /:P/g, css: 'Impish' },
					{ regex: /:\\/g, css: 'Sweat' },
					{ regex: /8\)/g, css: 'Cool' },
					{ regex: /&gt;:L/g, css: 'Frown' },
					{ regex: /;\)/g, css: 'Wink' },
					{ regex: /:O/g, css: 'Surprise' },
					{ regex: /8-\)/g, css: 'Woo' },
					{ regex: /8-O/g, css: 'Shock' },
					{ regex: /xD/g, css: 'Hysterical' },
					{ regex: /:-\*/g, css: 'Kissed' },
					{ regex: /:S/g, css: 'Dizzy' },
					{ regex: /\+O\)/g, css: 'Celebrate' },
					{ regex: /&lt;3/g, css: 'Adore' },
					{ regex: /zzZ/g, css: 'Sleep' },
					{ regex: /:X/g, css: 'Stop' },
					{ regex: /X-\(/g, css: 'Tired' }
				];
			
			for (var i = 0; i < smilies.length; i++) {
				var smilie = smilies[i];
				message = message.replace(smilie.regex, '<span title="' + smilie.css + '" class="sprite ' + smilie.css + 'Small Smilie"></span>');
			}
		}
		return message;
	}

	function openPUSH(message) {
		var parent = window.opener;
		if (parent) {
			parent.location.href = message;
			parent.focus();
		}
	}

	function display(id, username, message, align, status) {
		var output = '',
			messages = $(selector + 'Messages');
		
		if (messages && message !== null && !storage.chatEnded && $('#msg' + id).length === 0) {
			var alignment = 'left',
				color = '#000';
			
			if (id == -2) {
				$(selector + 'Waiting').fadeOut(250);
			}
			if (align == '2') {
				alignment = 'center';
			} else if (align == '3') {
				alignment = 'right';
			}
			if (status == '0') {
				color = '#666';
			}
			if ($(selector + 'Toolbar').is(':hidden') && !storage.chatEnded) {
				$(selector + 'Toolbar, ' + selector + 'CollapseButton').fadeIn(250);
			}

			output += '<div id="msg' + id + '" style="color:' + color + '">';
			if (status == '0' || status == '1' || status == '2' || status == '7') { // Operator, Link, Mobile Device Messages
				if (!$.isEmptyObject(username)) {
					output += username + ' ' + settings.language.says + ':<br/>';
					if (status > 0) {
						operator = username;
					}
				}
				message = message.replace(/([a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9][\.][a-z0-9]{2,4})/g, '<div style="margin-top:5px"><a href="mailto:$1" class="message">$1</a></div>');
				var regEx = /^.*((youtu.be\/)|(v\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/i,
					match = regEx.exec(message),
					width = messages.width();
				if (match !== null && match.length > 6) {
					var videoid = match[6];
					alignment = 'left';
					if (status == 2) {
						var size = {width: 260, height: 195},
							css = 'message-video fancybox.iframe',
							path = 'embed/',
							target = 'self';
						if (opts.popup) {
							size = {width: 480, height: 360};
							css = 'message-video-popup';
							path = 'watch?v=';
							target = 'blank';
						}
						message = '<a href="http://www.youtube.com/' + path + videoid + '" target="_' + target + '" class="' + css + '"><div style="position:relative; height:' + size.height + 'px; margin:5px; color: ' + color + '"><div class="' + prefix + 'VideoZoom noresize" style="position:absolute; opacity:0.5; top:0px; z-index:150; background:url(' + opts.server + 'images/Play.png) center center no-repeat; max-width:' + size.width + 'px; width:' + size.width + 'px; height:' + size.height + 'px"></div><div class="' + prefix + 'VideoHover noresize" style="position:absolute; top:0px; z-index:100; background:#fff; opacity:0.25; max-width:' + size.width + 'px; width:' + size.width + 'px; height:' + size.height + 'px"></div><div style="position:absolute; top:0px;"><img src="http://img.youtube.com/vi/' + videoid + '/0.jpg" alt="YouTube Video" class="noresize" style="width:' + size.width + 'px; max-width:' + width + 'px"></div></div></a>';
					} else {
						message = message.replace(/((?:(?:http(?:s?))|(?:ftp)):\/\/[^\s|<|>|'|\"]*)/g, '<a href="$1" target="_blank" class="message-link fancybox.iframe">$1</a>');
						message = htmlSmilies(message);
						message = '<div style="text-align:' + alignment + '; margin-left:15px; color: ' + color + '">' + message + '</div>';
					}
					output += message;
				} else {
					message = message.replace(/((?:(?:http(?:s?))|(?:ftp)):\/\/[^\s|<|>|'|\"]*)/g, '<a href="$1" target="_blank" class="message">$1</a>');
					message = htmlSmilies(message);
					output += '<div style="text-align:' + alignment + '; margin-left:15px; color: ' + color + '">' + message + '</div>';
				}
			} else if (status == '3') { // Image
				message = message.replace(/((?:(?:http(?:s?))):\/\/[^\s|<|>|'|\"]*)/g, '<img src="$1" alt="Received Image">');
				var result = message.match(/((?:(?:http(?:s?))):\/\/[^\s|<|>|'|"]*)/g);
				if (result !== null) {
					if (username !== '') {
						output += username + ' ' + settings.language.says + ':<br/>';
					}
					$('<img />').attr('src', result).load(displayImage(id));
				} else {
					output += message;
				}
			} else if (status == '4') { // PUSH
				openPUSH(message);
				output += '<div style="margin-top:5px">' + settings.language.pushedurl + ', <a href="' + message + '" target="_blank" class="message">' + message + '</a> ' + settings.language.opennewwindow + '</div>';
			} else if (status == '5') { // JavaScript
				(new Function(message))();
			} else if (status == '6') { // File Transfer
				output += settings.language.sentfile + ' <a href="' + message + '" target="' + prefix + 'FileDownload">' + settings.language.startdownloading + '</a> ' + settings.language.rightclicksave;
			}
			output += '</div>';
			
			$(selector + 'Waiting').fadeOut(250);
			/* TODO Continue Waiting Timer
			if (settings.offlineEmail && $(selector + 'Continue').length > 0) {
				$(selector + 'Continue').fadeOut(250);
				clearTimeout(continueTimer);
			}
			*/
		}
		return output;
	}

	function showTitleNotification() {
		var state = false;
		
		function updateTitle() {
			var newTitle = state ? title : operator + ' messaged you';
			$(document).attr('title', newTitle);
			state = !state;
		}
		
		if (titleTimer === null) {
			titleTimer = window.setInterval(updateTitle, 2000);
		}
	}

	function hideTitleNotification() {
		window.clearInterval(titleTimer);
		titleTimer = null;
		$(document).attr('title', title);
	}

	function updateTyping(data) {
		var typing = (data.typing !== undefined) ? data.typing : false,
			obj = $(selector + 'Typing');
		if (typing) {
			obj.show();
		} else {
			obj.hide();
		}
	}

	(function loadMessages() {
		
		if (storage.chatEnded) {
			window.setTimeout(loadMessages, 1500);
			return;
		}
		
		if (opts.connected && settings.language !== undefined) {
			var data = { TIME: $.now(), LANGUAGE: settings.locale, MESSAGE: message },
				session = cookies.session;
				
			if (currentlyTyping == 1) {
				data.TYPING = currentlyTyping;
			}

			// Cookies
			if (session !== undefined && session.length > 0) {
				data = $.extend(data, { SESSION: session });
			}
			
			$.jsonp({url: opts.server + 'refresher.php?callback=?',
				data: $.param(data),
				success: function (data) {
					var lastID = 0,
						margin = [25, 25, 25, 25];
					if (data !== null && data !== '') {
						if (data.messages !== undefined && data.messages.length > 0) {
						
							// Output Messages
							var html = '';
							$.each(data.messages, function (index, msg) {
								html += display(msg.id, msg.username, msg.content, msg.align, msg.status);
								lastID = msg.id;
								if (msg.status > 0) {
									newMessages++;
								}
							});
							
							if (html.length > 0) {
								if (!storage.chatEnded) {
									$(selector + 'CollapseButton').fadeIn(250);
								}
								$(selector + 'Messages').append(html);
								if (!opts.popup) {
									margin = [25, 405, 25, 25];
								}
								$('.message-link, .message-video').fancybox({ openEffect: 'elastic', openEasing: 'easeOutBack', closeEffect: 'elastic', closeEasing: 'easeInBack', margin: margin });
								$('.' + prefix + 'VideoZoom').hover(function () {
									$('.' + prefix + 'VideoHover').fadeTo(250, 0);
									$(this).fadeTo(250, 1.0);
								}, function () {
									$('.' + prefix + 'VideoHover').fadeTo(250, 0.25);
									$(this).fadeTo(250, 0.75);
								});
								scrollBottom();
								if (!window.isActive && message > 0) {
									showTitleNotification();
								}
								var bottom = parseInt($(selector + 'Embedded').css('bottom'), 10);
								if (!storage.chatEnded && bottom == -466) {
									if (newMessages > 0) {
										showNotification();
									}
								} else {
									newMessages = 0;
									if (messageSound !== undefined && !storage.chatEnded && storage.soundEnabled && (opts.popup || storage.notificationEnabled)) {
										messageSound.play();
									}
								}
							
							}
							
						}
						updateTyping(data);
					} else {
						updateTyping(false);
					}
					
					if (lastID > 0) {
						message = lastID;
					}
					
					window.setTimeout(loadMessages, 1500);
				},
				error: function () {
					//$.ajax({ url: opts.server + 'include/error.php', data: { source: 'jQuery', text: 'loadMessages() Error Event', file:'guest.js.php', error:textStatus }, dataType: 'jsonp', cache: false, xhrFields: { withCredentials: true } });
					window.setTimeout(loadMessages, 1500);
				}
			});
		} else {
			window.setTimeout(loadMessages, 1500);
		}

	})();

	function showChat() {
		if (!storage.chatEnded) {
			var embed = $(selector + 'Embedded'),
				inputs = $(selector + 'Login #Inputs'),
				connecting = $(selector + 'Login #Connecting');
		
			// Connecting
			if ($(selector + 'SignIn').is(':visible')) {
				inputs.hide();
				connecting.show();

				// Load Sprites
				$('<img />').attr('src', opts.server + 'images/Sprite.png').load(function () {
					// Add CSS
					$('<link href="' + opts.server + 'styles/sprite.min.css" rel="stylesheet" type="text/css"/>').appendTo('head');

					$(selector + 'SignIn').hide();
					$(selector + 'SignedIn, ' + selector + 'Waiting').show();
					$(selector + 'Body, ' + selector + 'Background').css('background-color', '#fff');
					$(selector + 'Input').animate({ bottom: 0 }, 500, 'easeInOutQuad');
				
					if (embed.is(':hidden')) {
						$(selector + 'Waiting').hide();
						embed.fadeIn(50, function () {
							$(selector + 'CallAction').fadeIn(50);
						});
						loadStorage();
					}
				});
			}
		}
	}

	function showRating() {
		var id = 'Rating',
			element = '#' + prefix + id;
		
		if ($(element).length === 0) {
			var ratingHtml = '<div id="' + prefix + 'Feedback' + id + '">' + settings.language.rateyourexperience + ':<br/> \
		<div id="' + prefix + id + '"> \
			<div class="' + id + ' VeryPoor" title="Very Poor"></div> \
			<div class="' + id + ' Poor" title="Poor"></div> \
			<div class="' + id + ' Good" title="Good"></div> \
			<div class="' + id + ' VeryGood" title="Very Good"></div> \
			<div class="' + id + ' Excellent" title="Excellent"></div> \
		</div> \
	</div>';
		
			$(selector + 'Messages').append(ratingHtml);
		
			// Rating Events
			var rating = $(element);
			rating.find('.' + id).hover(function () {
				var i = $(this).index();
				rating.find(':lt(' + i + 1 + ')').css('background-position', '0 -32px').parent().find(':gt(' + i + ')').css('background-position', '0 0');
			}, function () {
				var i = $(this).index() + 1;
				rating.find(':lt(' + i + ')').css('background-position', '0 0');
				rating.find('div').each(function () {
					if ($.data(this, 'selected')) {
						$(this).css('background-position', '0 -16px');
					}
				});
			}).click(function () {
				var i = $(this).index(),
					data = { RATING: i + 1 };
					
				if (cookies.session !== undefined && cookies.session.length > 0) {
					data = $.extend(data, { SESSION: cookies.session });
				}
				rating.find(':lt(' + i + 1 + ')').data('selected', true).css('background-position', '0 -16px');
				rating.find(':gt(' + i + ')').data('selected', false).css('background-position', '0 0');
				$.ajax({ url: opts.server + 'logout.php', data: $.param(data), dataType: 'jsonp', cache: false, xhrFields: { withCredentials: true } });
			});
			
			scrollBottom();
		} else {
			$(selector + 'Scroll').scrollTo($(selector + 'FeedbackRating'));
		}
	}

	function updateImageTitle() {
		$('.' + prefix + 'Status').each(function () {
		
			// Title / Alt Attributes
			var status = settings.currentStatus;
			if (status == 'BRB') {
				status = 'Be Right Back';
			}
			$(this).attr('title', 'Live Help - ' + status).attr('alt', 'Live Help - ' + status);
		});
	}

	// Change Status Image
	function changeStatus(status) {
		var embed = $(selector + 'Embedded'),
			action = $(selector + 'CallAction'),
			invite = $('.' + prefix + 'Invite');
		
		$('.LiveHelpTextStatus').each(function (index, value) {
			$(this).text(status);
		});
		
		if (settings.departments.length > 0 && opts.department.length > 0 && $.inArray(opts.department, settings.departments) < 0) {
			status = 'Offline';
		}
		
		if (status == 'Online') {
			updateSettings(function (data, textStatus, jqXHR) {
					invite.show();
					if (opts.embedded === true && embed.length > 0) {
						embed.fadeIn(50, function () {
							if (settings.autoload) {
								showChat();
								opts.connected = true;
							}
							action.fadeIn(50);
						});
					}
				}
			);
		} else {
			if (!settings.autoload) {
				invite.hide();
				if (embed.length > 0) {
					embed.fadeOut(50);
					action.fadeOut(50);
				}
			}
		}
		
		if (settings.currentStatus !== '' && settings.currentStatus != status) {

			// jQuery Status Mode Trigger
			$(document).trigger('LiveHelp.StatusModeChanged', [status]);
			
			// Update Status
			settings.currentStatus = status;
		
			$('.' + prefix + 'Status').each(function () {
				var statusURL = $(this).attr('src'),
					regEx = /^[^?#]+\?([^#]+)/i,
					match = regEx.exec(statusURL),
					query = '?_=' + $.now();
				if (match !== null) {
					query = '?' + match[1] + '&_=' + $.now();
				}
				
				// Update Status Image
				$(this).attr('src', opts.server + 'include/status.php' + query);
				
				// Title / Alt Attributes
				updateImageTitle();
				
			});
			
		}
	}

	function getTimezone() {
		var datetime = new Date();
		if (datetime) {
			return datetime.getTimezoneOffset();
		} else {
			return '';
		}
	}

	function updateInitiateStatus(status) {
		// Update Initiate Chat Status
		initiateStatus = status;
		visitorTimeout = false;
		if (status == 'Accepted' || status == 'Declined') {
			$(selector + 'InitiateChat').fadeOut(250);
		}
		clearTimeout(visitorTimer);
		trackVisit();
	}

	function displayInitiateChat() {
		var id = selector + 'InitiateChat',
			initiate = $(id);
		
		if (initiate.length === 0) {
			// Initiate Chat
			var initiateChatHtml = '<div id="' + prefix + 'InitiateChat" align="left"> \
  <map name="' + prefix + 'InitiateChatMap" id="' + prefix + 'InitiateChatMap"> \
    <area shape="rect" coords="50,210,212,223" href="http://livehelp.stardevelop.com" target="_blank" alt="stardevelop.com Live Help"/> \
    <area shape="rect" coords="113,183,197,206" href="#" id="AcceptInitiateChat" alt="Accept" title="Accept"/> \
    <area shape="rect" coords="206,183,285,206" href="#" id="DeclineInitiateChat" alt="Decline" title="Decline"/> \
    <area shape="rect" coords="263,86,301,104" href="#" id="CloseInitiateChat" alt="Close" title="Close"/> \
  </map> \
  <div id="' + prefix + 'InitiateText" align="center">' + settings.language.initiatechatquestion + '</div> \
  <img src="' + opts.server + 'locale/' + settings.locale + '/images/InitateChat.gif" alt="stardevelop.com Live Help" width="323" height="229" border="0" usemap="' + selector + 'InitiateChatMap"/></div>';
				
			$(initiateChatHtml).appendTo(document.body).ready(function () {
				$('#AcceptInitiateChat').click(function () {
					openLiveHelp();
					updateInitiateStatus('Accepted');
					return false;
				});
				$('#DeclineInitiateChat, #CloseInitiateChat').click(function () {
					updateInitiateStatus('Declined');
					return false;
				});
			});
		}
		
		visitorTimeout = false;
		if (initiate.length > 0 && opts.visitorTracking && !$.data(initiate, 'opened') && initiateStatus == '') {
			resetPosition();
			initiateTimer = window.setInterval(function () {
				updatePosition(id);
			}, 10);
			initiate.fadeIn(250);
			updateInitiateStatus('Opened');
			$.data(initiate, 'opened', true);
		}
	}

	function trackVisit() {

		clearTimeout(visitorTimer);

		if (opts.visitorTracking && !visitorTimeout) {
			var title = $('head title').text().substring(0, 150),
				timezone = getTimezone(),
				site = document.location.protocol + '//' + document.location.host,
				referrer,
				url = opts.server + 'include/status.php?callback=?',
				data = { JSON: '', INITIATE: initiateStatus },
				session = cookies.session;
	
			if (document.referrer.substring(0, site.length) === site.location) {
				referrer = '';
			} else {
				referrer = document.referrer;
			}
			
			// Track Visitor
			if (visitorInit === 0) {
				data = $.extend(data, { TITLE: title, URL: document.location.href, REFERRER: referrer, WIDTH: window.screen.width, HEIGHT: window.screen.height, TIME: + $.now() });
				
				// Plugin / Integration
				var plugin = opts.plugin;
				if (plugin.length > 0) {
					var id = opts.custom,
						name = opts.name;
					
					switch (plugin) {
					case 'Zendesk':
						if (typeof currentUser !== 'undefined' && currentUser.isEndUser === true && currentUser.id !== null) {
							id = currentUser.id;
							name = currentUser.name;
						}
						break;
					case 'WHMCS':
						if (id === undefined || id.length === 0) {
							id = $.cookie('WHMCSUID');
						}
						break;
					}
					
					if (id !== undefined && id.length > 0) {
						data = $.extend(data, { PLUGIN: plugin, CUSTOM: id });
					}
					if (name !== undefined && name.length > 0) {
						data = $.extend(data, { NAME: name });
					}
				}
				
				visitorInit = 1;
			}
			
			// Cookies
			if (session !== undefined) {
				data = $.extend(data, { SESSION: session });
			}

			// Visitor Tracking
			$.jsonp({
				url: url,
				data: $.param(data),
				success: function (data) {
					if (data !== null && data !== '') {
						if (data.session !== undefined && data.session.length > 0) {
							cookies.session = data.session;
							$.cookie(prefix + 'Session', cookies.session, true, '/', '.' + opts.domain);
						}
						if (data.status !== undefined && data.status.length > 0) {
							changeStatus(data.status);
						}
						if (data.initiate !== undefined && data.initiate) {
							displayInitiateChat();
						}
					}
					if (visitorInit === 0) {
						visitorInit = 1;
					}
					
					pageTime = $.now() - loadTime;
					if (pageTime < 90 * 60 * 1000) {
						visitorTimer = window.setTimeout(trackVisit, visitorRefresh);
					} else {
						visitorTimeout = true;
					}
				},
				error: function () {
					visitorTimer = window.setTimeout(trackVisit, visitorRefresh);
				}
			});
		
		} else {
			visitorTimer = window.setTimeout(trackVisit, 1);
		}

	}

	// Get URL Parameter
	function getParameterByName(url, name) {
		name = name.replace(/(\[|\])/g, '\\$1');
		var ex = '[\\?&]' + name + '=([^&#]*)',
			regex = new RegExp(ex),
			results = regex.exec(url);
		
		if (results === null) {
			return '';
		} else {
			return decodeURIComponent(results[1].replace(/\+/g, ' '));
		}
	}

	function offlineComplete() {
		var id = 'Offline';
		$('.' + prefix + id + 'Form').fadeOut(250, function () {
			$('.' + prefix + id + 'Sent').fadeIn(250);
		});
		if (opts.embedded) {
			$('.' + prefix + id + 'PoweredBy').css('right', '150px');
		}
		$(selector + id + 'Heading').html(settings.language.thankyoumessagesent).fadeIn(250);
	}

	function offlineSend() {
		var id = 'Offline',
			offline = '#' + prefix + id,
			form = $('#' + id + 'MessageForm'),
			data = form.serialize();
		
		if (opts.security.length > 0) {
			data += '&SECURITY=' + encodeURIComponent(opts.security);
		}
		if (cookies.session !== undefined && cookies.session.length > 0) {
			data += '&SESSION=' + encodeURIComponent(cookies.session);
		}
		data += '&JSON';
		
		$.ajax({url: opts.server + 'offline.php',
			data: data,
			success: function (data) {
			// Process JSON Errors / Result
				if (data.result !== undefined && data.result === true) {
					offlineComplete();
				} else {
					if (data.type !== undefined) {
						if (data.type == 'EMAIL') {
							$('#EmailError').removeClass('TickSmall').addClass('CrossSmall').fadeIn(250);
						}
						if (data.type == 'CAPTCHA') {
							$('#SecurityError').removeClass('TickSmall').addClass('CrossSmall').fadeIn(250);
						}
					}
					if (data.error !== undefined && data.error.length > 0) {
						$(offline + 'Description').hide();
						$(offline + 'Error span').html('Error: ' + data.error).parent().fadeIn(250);
					} else {
						$(offline + 'Error').fadeIn(250);
					}
				}
			},
			dataType: 'jsonp',
			cache: false,
			xhrFields: { withCredentials: true }
		});
	}

	function validateField(obj, id) {
		var value = (obj instanceof $) ? obj.val() : $(obj).val();
		if ($.trim(value) === '') {
			$(id).removeClass('TickSmall').addClass('CrossSmall').fadeIn(250);
			return false;
		} else {
			$(id).removeClass('CrossSmall').addClass('TickSmall').fadeIn(250);
			return true;
		}
	}
	
	function validateTelephone(obj, id) {
		var value = (obj instanceof $) ? obj.val() : $(obj).val();
		if ($.trim(value).length > 0 && /^[\d| |-|.]{3,}$/.test(value)) {
			$(id).removeClass('CrossSmall').addClass('TickSmall').fadeIn(250);
			return true;
		} else {
			$(id).removeClass('TickSmall').addClass('CrossSmall').fadeIn(250);
			return false;
		}
	}

	function validateEmail(obj, id) {
		var value = (obj instanceof $) ? obj.val() : $(obj).val();
		if (/^[\-!#$%&'*+\\.\/0-9=?A-Z\^_`a-z{|}~]+@[\-!#$%&'*+\\\/0-9=?A-Z\^_`a-z{|}~]+\.[\-!#$%&'*+\\.\/0-9=?A-Z\^_`a-z{|}~]+$/i.test(value)) {
			$(id).removeClass('CrossSmall').addClass('TickSmall').fadeIn(250);
			return true;
		} else {
			$(id).removeClass('TickSmall').addClass('CrossSmall').fadeIn(250);
			return false;
		}
	}

	function validateSecurity(obj, id, complete) {
		var field = (obj instanceof $) ? obj : $(obj),
		errorClass = 'CrossSmall',
		successClass = 'TickSmall',
		value = field.val(),
		data = { SECURITY: opts.security, CODE: value, JSON: '', EMBED: '' },
		validate = opts.security.substring(16, 56);
		
		function ajaxValidation() {
			$.ajax({ url: opts.server + 'security.php',
				data: $.param(data),
				success: function (data) {
					var error = '';
					if (data.result !== undefined) {
						// Process JSON Errors / Result
						if (data.result === true) {
							$(id).removeClass(errorClass).addClass(successClass).fadeIn(250);
							if (complete) {
								complete();
							}
						} else {
							error = 'CAPTCHA';
						}
						
					} else {
						error = 'CAPTCHA';
					}
					
					// Error Handling
					if (error.length > 0) {
						$(id).removeClass(successClass).addClass(errorClass).fadeIn(250);
						if (complete) {
							var field = $('#OfflineMessageForm').find(':input[id=' + error + '], textarea[id=' + error + ']');
							field.add(field.parent()).css('background-color', '#feeeee').css('border-color', '#fccece');
						}
					}
				},
				dataType: 'jsonp',
				cache: false,
				xhrFields: { withCredentials: true }
			});
		}
		
		if (field.length > 0) {
			if (value.length != 5) {
				if (value.length > 5) {
					field.val(value.substring(0, 5));
				}
				$(id).removeClass(successClass).addClass(errorClass).fadeIn(250);
				return false;
			} else {
				
				if (validate.length === 40) {
					// Validate Security Code
					if (validate === Crypto.SHA1(value.toUpperCase())) {
						$(id).removeClass(errorClass).addClass(successClass).fadeIn(250);
						if (complete) {
							complete();
						}
						return true;
					} else {
						return false;
					}
				} else {
					ajaxValidation(complete);
				}
			}
		} else {
			if (complete) {
				complete();
			}
			return true;
		}
	}

	function validateForm(form, callback) {
		var country = form.find('select[id=COUNTRY]'),
			telephone = form.find(':input[id=TELEPHONE]');
		
		if (!validateField(form.find(':input[id=NAME]'), '#NameError')) {
			return;
		} else if (!validateEmail(form.find(':input[id=EMAIL]'), '#EmailError')) {
			return;
		} else if (!validateField(form.find('textarea[id=MESSAGE]'), '#MessageError')) {
			return;
		}
		if (telephone.length > 0 && !validateField(telephone, '#TelephoneError')) {
			return;
		}
		validateSecurity(form.find(':input[id=CAPTCHA]'), '#SecurityError', function () {
			callback.call();
		});
	}

	function validateOfflineForm() {
		var form = $('#OfflineMessageForm');
		validateForm(form, offlineSend);
	}

	function resetSecurityCode(selector, form) {
		if (cookies.session !== null) {
			$.cookie(prefix + 'Session', cookies.session, true, '/', '.' + opts.domain);
		}
		form.find(':input[id=CAPTCHA]').val('');
		
		$.ajax({ url: opts.server + 'security.php',
			data: { RESET: '', JSON: '' },
			success: function (json) {
				if (json.captcha !== undefined) {
					opts.security = json.captcha;
					var data = '';
					if (opts.security.length > 0) {
						data = '&' + $.param($.extend(data, { SECURITY: encodeURIComponent(opts.security), RESET: '', EMBED: '' }));
					}
					$(selector + 'Security').attr('src', opts.server + 'security.php?' + $.now() + data);
				}
			},
			dataType: 'jsonp',
			cache: false,
			xhrFields: { withCredentials: true }
		});
		$('#SecurityError').fadeOut(250);
	}

	function initInputEvents(id, selector, form) {
	
		$(selector + 'Button, ' + selector + 'CloseButton').hover(function () {
			$(this).toggleClass(id + 'Button ' + id + 'ButtonHover');
		}, function () {
			$(this).toggleClass(id + 'Button ' + id + 'ButtonHover');
		});
		
		form.find(':input, textarea').focus(function () {
			$(this).add($(this).parent()).css('background-color', '#f2fbfe').css('border-color', '#d0e8f8');
		}).blur(function () {
			$(this).add($(this).parent()).css('background-color', '#fbfbfb').css('border-color', '#e5e5e5');
		});
		
		$(selector + 'SecurityRefresh').click(function () {
			resetSecurityCode(selector, form);
		});
		
		$(selector + 'Button').click(function () {
			validateOfflineForm();
		});
		
		$(selector + 'CloseButton').click(function () {
			if (opts.embedded) {
				$.fancybox.close();
			} else if (opts.popup) {
				window.close();
			}
		});

		$(selector + 'CloseBlockedButton').click(function () {
			if (opts.embedded) {
				storage.tabOpen = false;
				closeTab();
				updateStorage();
			} else if (opts.popup) {
				window.close();
			}
		});
		
		form.find(':input[id=NAME]').bind('keydown blur', function () {
			validateField(this, '#NameError');
		});
		
		form.find(':input[id=EMAIL]').bind('keydown blur', function () {
			validateEmail(this, '#EmailError');
		});
		
		form.find('textarea[id=MESSAGE]').bind('keydown blur', function () {
			validateField(this, '#MessageError');
		});
		
		form.find('select[id=COUNTRY]').bind('keydown blur', function () {
			validateField(this, '#CountryError');
		});
		
		form.find(':input[id=TELEPHONE]').bind('keydown blur', function () {
			validateTelephone(this, '#TelephoneError');
		});
		
		form.find(':input[id=CAPTCHA]').bind('keydown', function () {
			if ($(this).val().length > 5) {
				$(this).val($(this).val().substring(0, 5));
			}
		}).bind('keyup', function () {
			validateSecurity(this, '#SecurityError');
		});
	}

	function initOfflineEvents() {
		var id = 'Offline',
			selector = '#' + prefix + id,
			form = $('#' + id + 'MessageForm');
		
		initInputEvents(id, selector, form);
		$('<link href="' + opts.server + 'styles/sprite.min.css" rel="stylesheet" type="text/css"/>').appendTo('head');
	}

	(function checkCallStatus() {

		if (callTimer.length > 0) {
			var data = { SESSION: callTimer },
				timeout = 2000;
			$.ajax({
				url: opts.server + 'call.php?JSON',
				data: $.param(data),
				success: function (data, textStatus, jqXHR) {
					var status = -1;
					if (data.status !== undefined) {
						status = parseInt(data.status, 10);
					}
					updateCallStatus(status);
					if (status > 3) {
						timeout = 15000;
					}
					window.setTimeout(checkCallStatus, timeout);
				},
				error: function () {
					updateCallStatus(-1);
					window.setTimeout(checkCallStatus, 2000);
				},
				cache: false,
				xhrFields: { withCredentials: true }
			});
		} else {
			window.setTimeout(checkCallStatus, 2000);
		}

	})();

    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

	function startCallConnectedTimer() {
		resetCallConnectedTimer();
		var i = 0;
		var target = $('#CallStatusHeading');
		var timer = function updateTime() {
			i++;
			var minutes = (i > 59) ? parseInt(i / 60) : 0;
			var seconds = (i > 59) ? i % 60 : i;
			var output = pad(minutes, 2) + ':' + pad(seconds, 2);
			target.text('Connected - ' + output + 's');
		}
		callConnectedTimer = setInterval(timer, 1000);
	}
	
	function resetCallConnectedTimer() {
		clearInterval(callConnectedTimer);
	}

	function updateCallStatus(status) {
		var id = '#Call',
			selector = id + 'Status',
			heading = '',
			description = '',
			form = id + 'MessageForm ',
			country = $(form + 'select[id=COUNTRY]').val(),
			prefix = country.substring(country.indexOf('+')),
			telephone = prefix + ' ' + $(form + ':input[id=TELEPHONE]').val(),
			button = settings.language.cancel;
			
		switch(status) {
			case 0:
				heading = settings.language.pleasewait;
				description = settings.language.telephonecallshortly + '<br/>' + settings.language.telephonethankyoupatience;
				break;
			case 1:
				heading = 'Initalising';
				description = settings.language.telephonecallshortly + '<br/>' + settings.language.telephonethankyoupatience;
				break;
			case 2:
				heading = 'Initalised';
				description = settings.language.telephonecallshortly + '<br/>' + settings.language.telephonethankyoupatience;
				break;
			case 3:
				heading = 'Incoming Call';
				description = 'We are now calling you on ' + telephone + '.<br/>Please answer your telephone to chat with us.';
				break;
			case 4:
				heading = 'Connected';
				description = 'Call connected to ' + telephone + '.<br/>' + settings.language.telephonethankyoupatience;
				break;
			case 5:
				heading = 'Thank you';
				description = 'Your call has completed.<br/>Thank you for contacting us.';
				button = 'Close';
				break;
			case 6:
				heading = 'Line Busy';
				description = 'Service is temporarily busy.<br/>Please try again later.';
				break;
			default:
				heading = 'Unavailable';
				description = 'Service is temporarily unavailable.<br/>Please try again later.';
				break;
		}
		
		$(selector + 'Heading').text(heading);
		$(selector + 'Description').html(description);
		$(id + 'CancelButton div').text(button);
		
		if (status != callStatus) {
			if (status == 4) {
				startCallConnectedTimer();
			} else {
				resetCallConnectedTimer();
			}
			callStatus = status;
		}
		
	}

	function startCall() {

		var selector = '#CallMessageForm ',
			name = $(selector + ':input[id=NAME]').val(),
			email = $(selector + ':input[id=EMAIL]').val(),
			country = $(selector + 'select[id=COUNTRY]').val(),
			timezone = getTimezone(),
			prefix = country.substring(country.indexOf('+')),
			telephone = $(selector + ':input[id=TELEPHONE]').val(),
			message = $(selector + ':input[id=MESSAGE]').val(),
			captcha = $(selector + ':input[id=CAPTCHA]').val(),
			data = { NAME: name, EMAIL: email, COUNTRY: country, TIMEZONE: timezone, DIAL: prefix, TELEPHONE: telephone, MESSAGE: message, CAPTCHA: captcha, SECURITY: opts.security };
		
		$.fancybox.showLoading();
		$.ajax({
			url: opts.server + 'call.php',
			data: $.param(data),
			success: function (data, textStatus, jqXHR) {
				if (data !== undefined && data.length > 0) {
					$.fancybox({ href: '#CallDialog', type: 'inline', closeClick: false, nextClick: false, arrows: false, mouseWheel: false, keys: null, helpers: { overlay: { closeClick: false }, title: null } });
					callTimer = data;
				}
			},
			error: function () {
				updateStatus(-1);
			},
			cache: false,
			xhrFields: { withCredentials: true }
		});
	}

	function validateCallForm() {
		var form = $('#CallMessageForm');
		validateForm(form, startCall);
	}

	function initCallEvents () {
		var id = 'Call',
			selector = '#' + prefix + id,
			form = $('#' + id + 'MessageForm');
	
		initInputEvents(id, selector, form);
		
		$(selector + 'Button').click(function () {
			validateCallForm();
		});
		
		// Button Hover Events
		$('#' + id + 'CancelButton').hover(function () {
			var css = $(this).attr('id').replace('#' + id, '');
			$(this).toggleClass('#' + css + ' #' + css + 'Hover');
		}, function () {
			var css = $(this).attr('id').replace('#' + id, '');
			$(this).toggleClass('#' + css + ' #' + css + 'Hover');
		}).click(function () {
			// Cancel or Close Call
			if (callStatus == 5) {
				window.close();
			} else {
				// Cancel AJAX and Close Window
				var data = { SESSION: callTimer, STATUS: 5 };
				$.ajax({
					url: opts.server + 'call.php?JSON',
					data: $.param(data),
					success: function (data, textStatus, jqXHR) {
						window.close();
					},
					cache: false,
					xhrFields: { withCredentials: true }
				});
			}
		});
		
	}

	function openEmbeddedOffline(data) {
	
		if (cookies.session !== undefined && cookies.session.length > 0) {
			data = $.extend(data, { SESSION: cookies.session });
		} else {
			return;
		}

		// Language
		data = $.extend(data, { LANGUAGE: settings.locale });
	
		$.fancybox.showLoading();
		
		data = $.extend(data, { SERVER: opts.server, JSON: '', RESET: '', EMBED: '' });
		$.jsonp({url: opts.server + 'offline.php?callback=?&' + $.param(data),
			data: $.param(data),
			success: function (data) {
				if (data.captcha !== undefined) {
					opts.security = data.captcha;
				}
				if (data.html !== undefined) {
					$.fancybox.open({content: data.html, type: 'html', fitToView: false, closeClick: false, nextClick: false, arrows: false, mouseWheel: false, keys: null, helpers: { overlay: { css: { cursor: 'auto' }, closeClick: false }, title: null }, padding: 0, minWidth: 875, beforeShow: updateSettings, afterShow: initOfflineEvents});
				}
			}
		});
	}

	// Live Help Popup Window
	function openLiveHelp(obj, department, location, data) {
		var template = '',
			callback = false,
			status = settings.currentStatus;
		
		if (cookies.session !== undefined && cookies.session.length > 0) {
			data = $.extend(data, { SESSION: cookies.session });
		} else {
			return;
		}
		
		if (obj !== undefined && settings.templates.length > 0) {
			var css = obj.attr('class');
			template = css.split(' ')[1];
			if (template === undefined || $.inArray(template, settings.templates) < 0) {
				template = '';
			}
			
			var src = obj.children('img.' + prefix + 'Status').attr('src');
			department = getParameterByName(src, 'DEPARTMENT');
		}

		// Language
		data = $.extend(data, { LANGUAGE: settings.locale, TIME: $.now() });
		
		// Callback
		if (obj !== undefined && obj.attr('class') !== undefined && obj.attr('class').indexOf('LiveHelpCallButton') != -1) {
			callback = true;
		}

		if (opts.embedded && !callback) {
		
			// Department
			if (opts.department.length > 0) {
				department = opts.department;
			}
		
			if (status == 'Online') {
				var embed = $(selector + 'Embedded');
				if (parseInt(embed.css('bottom'), 10) != -1) {
					if (!$(selector + 'Embedded').data('closing')) {
						storage.tabOpen = true;
					}
					openTab();
				}
				updateStorage();
			} else {
				
				if (settings.offlineEmail === 0) {
					if (settings.offlineRedirect !== '') {
						document.location = settings.offlineRedirect;
					}
				} else {
					openEmbeddedOffline(data);
				}
				
			}
			return false;
		}
		
		// Department / Template
		if (department !== undefined && department !== '') {
			if ($.inArray(department, settings.departments) === -1) {
				status = 'Offline';
			}
			data = $.extend(data, { DEPARTMENT: department });
		}
		if (template !== undefined && template !== '') {
			data = $.extend(data, { TEMPLATE: template });
		}
		
		// Location
		if (location === undefined || location === '') {
			location = 'index.php';
		}
		
		if (status == 'Online') {
			
			// Name
			if (opts.name !== '') {
				data = $.extend(data, { NAME: settings.name });
			}
			// Email
			if (opts.email !== '') {
				data = $.extend(data, { EMAIL: settings.email });
			}

		} else {
		
			if (settings.offlineEmail === 0) {
				if (settings.offlineRedirect !== '') {
					document.location = settings.offlineRedirect;
				}
				return false;
			}
		}
		
		// Open Popup Window
		popup = window.open(opts.server + location + '?' + $.param(data), prefix, size);

		if (popup) {
			popup.opener = window;
		}
	}

	function startChat() {
		var session = cookies.session,
			form = selector + 'LoginForm',
			name = $(selector + 'NameInput, ' + form + ' :input[id=NAME]'),
			department = $(selector + 'DepartmentInput, ' + form + ' select[id=DEPARTMENT], ' + form + ' input[id=DEPARTMENT]'),
			email = $(selector + 'EmailInput, ' + form + ' :input[id=EMAIL]'),
			question = $(selector + 'QuestionInput, ' + form + ' textarea[id=QUESTION]'),
			inputs = $(selector + 'Login #Inputs'),
			connecting = $(selector + 'Login #Connecting'),
			progress = connecting.find('div').first();

		// Connecting
		inputs.hide();
		if (progress.find('img').length === 0) {
			progress.prepend('<img src="' + opts.server + 'images/ProgressRing.gif" style="opacity: 0.5"/>');
		}
		connecting.show();
			
		// Department
		if (opts.department.length > 0) {
			department.val(opts.department);
		}
		if (department.length > 0 && department.val() !== null) {
			storage.department = department.val();
			updateStorage();
		}
		
		if (settings.requireGuestDetails) {
			var errors = {name: true, email: true, department: true};

			errors.name = validateField(name, selector + 'NameError');
			if (settings.loginEmail) {
				errors.email = validateEmail(email, selector + 'EmailError');
			}
			
			if (settings.departments.length > 0) {
				var collapsed = department.data('collapsed');

				errors.department = validateField(department, selector + 'DepartmentError');
				if (!collapsed) {
					department.data('collapsed', true);
					department.animate({ width: department.width() - 35 }, 250);
				}
			}

			if (!errors.name || !errors.email || !errors.department) {
				connecting.hide();
				inputs.show();
				return;
			}
		}

		// Name
		if (name.val().length > 0) {
			settings.user = name.val();
		}
		
		// Input
		name = (name.length > 0) ? name.val() : '';
		department = (department.length > 0 && department.val() !== null) ? department.val() : '';
		email = (email.length > 0) ? email.val() : '';
		question = (question.length > 0) ? question.val() : '';
		
		var data = { NAME: name, EMAIL: email, DEPARTMENT: department, QUESTION: question, SERVER: document.location.host, JSON: '' };
		if (session !== null) {
			data = $.extend(data, { SESSION: session });
		}
		
		$.ajax({ url: opts.server + 'frames.php',
			data: $.param(data),
			success: function (data) {
				// Process JSON Errors / Chat ID
				if (data.error === undefined) {
					if (data.session !== undefined && data.session.length > 0) {
						$(selector + 'MessageTextarea').removeAttr('disabled');
						storage.chatEnded = false;
						updateStorage();
						showChat();
						if (settings.user.length > 0) {
							settings.user = data.user;
						}
						if (cookies.session !== null) {
							cookies.session = data.session;
							$.cookie(prefix + 'Session', cookies.session, true, '/', '.' + opts.domain);
						}
						if (opts.popup) {
							$(selector + 'Login').hide();
							$(selector + 'Chat').fadeIn(250);
							resizePopup();
						}
						opts.connected = true;
					}
					if (data.status !== undefined && data.status == 'Offline') {
						closeTab();
						$(selector + 'Embedded').fadeOut(250);
						$(selector + 'CallAction').fadeOut(250);
					}
				} else {
					opts.connected = false;
				}
			},
			dataType: 'jsonp',
			cache: false,
			xhrFields: { withCredentials: true }
		});

	}

	function disconnectChat() {
		var type = 'jsonp';
		opts.connected = false;
		storage.chatEnded = true;
		storage.department = '';
		storage.lastMessage = 0;
		updateStorage();
		message = 0;
		closeTab(function () {
			hideOperatorDetails();
			$(selector + 'Messages').html('');
			$(selector + 'SignedIn, ' + selector + 'Toolbar, ' + selector + 'CollapseButton').hide();
			$(selector + 'Body, ' + selector + 'Background').css('background-color', '#f9f6f6');
			$(selector + 'Input').animate({ bottom: -70 }, 500, 'easeInOutQuad');
			$(selector + 'SignIn, ' + selector + 'Waiting').show();
			$(selector + 'Login #Inputs').show();
			$(selector + 'Login #Connecting').hide();
		});
		if (opts.popup) {
			type = 'json';
		}
		$.ajax({ url: opts.server + 'logout.php',
			data: { SESSION: encodeURIComponent(cookies.session) },
			dataType: type,
			cache: false,
			xhrFields: { withCredentials: true },
			success: function (data) {
				if (opts.popup) {
					window.close();
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log(textStatus);
			}
		});
		$.fancybox.close();
	}

	function typing(status) {
		if (status === true) {
			status = 1;
		} else {
			status = 0;
		}
		currentlyTyping = status;
	}

	function removeHTML(msg) {
		msg = msg.replace(/</g, '&lt;');
		msg = msg.replace(/>/g, '&gt;');
		msg = msg.replace(/\r\n|\r|\n/g, '<br />');
		return msg;
	}

	var displaySentMessage = function (msg) {
		return function (data, textStatus, XMLHttpRequest) {
			if (data !== null && data !== '') {
				if (data.id !== undefined && $('#msg' + data.id).length === 0) {
					var html = '<div id="msg' + data.id + '" align="left" style="color:#666">',
						username = (settings.user.length > 0) ? settings.user : 'Guest';
						
					html += username + ' ' + settings.language.says + ':<br/>';
					var message = removeHTML(msg);
					message = message.replace(/([a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.\-]{0,}[a-z0-9][\.][a-z0-9]{2,4})/g, '<a href="mailto:$1" class="message">$1</a>');
					message = message.replace(/((?:(?:http(?:s?))|(?:ftp)):\/\/[^\s|<|>|'|\"]*)/g, '<a href="$1" target="_blank" class="message">$1</a>');
					if (settings.smilies) {
						message = htmlSmilies(message);
					}
					html += '<div style="margin:0 0 0 15px; color: #666">' + message + '</div></div>';
					$(selector + 'Messages').append(html);
					scrollBottom();
				}
			}
		};
	};

	function processForm() {
		var id = 'MessageTextarea',
			obj = $(selector + id),
			message = obj.val();
			
		if (message !== '') {
			var data = { MESSAGE: message },
				url = opts.server + 'send.php';
			
			if (cookies.session !== undefined && cookies.session.length > 0) {
				data = $.extend(data, { SESSION: cookies.session});
				if (message === 0) {
					$.ajax({ url: url, data: $.param(data), dataType: 'jsonp', cache: false, xhrFields: { withCredentials: true } });
				} else {
					data.JSON = '';
					$.ajax({ url: url, data: $.param(data), success: displaySentMessage(message), dataType: 'jsonp', cache: false, xhrFields: { withCredentials: true } });
					typing(false);
				}
				obj.val('');
			}
		}
		return false;
	}

	// Embedded Events
	function initEmbeddedEvents() {
		if ($(selector + 'Embedded').length > 0) {
		
			$(selector + 'Tab, ' + selector + 'StatusText, .LiveChatIcon').click(function () {
				opts.embedded = true;
				if (!$(selector + 'Embedded').data('closing')) {
					storage.tabOpen = true;
				}
				if (parseInt($(selector + 'Embedded').css('bottom'), 10) != -1) {
					storage.tabOpen = true;
					if (!storage.notificationEnabled) {
						storage.notificationEnabled = true;
					}
					openTab();
				} else {
					storage.tabOpen = false;
					closeTab();
				}
				updateStorage();
			});
			
			$(selector + 'CloseButton').click(function () {
				storage.tabOpen = false;
				closeTab();
				updateStorage();
			});

			$(selector + 'CloseBlockedButton').click(function () {
				storage.tabOpen = false;
				closeTab();
				updateStorage();
			});
			
			$(selector + 'CollapseButton').click(function () {
				var top = parseInt($(selector + 'Body').css('top'), 10);
				if (top == 86) {
					storage.operatorDetailsOpen = false;
					hideOperatorDetails();
				} else {
					storage.operatorDetailsOpen = true;
					showOperatorDetails();
				}
				updateStorage();
			});
			
		}
	}

	// Invite Tab Events
	function initInviteTabEvents() {
		var invite = $('.' + prefix + 'Invite'),
			open = 'InviteTimeoutOpen',
			close = 'InviteTimeoutClose';
		if (invite.length > 0) {
			invite.hover(function () {
				window.clearTimeout($.data(invite, close));
				var timer = window.setTimeout(function () {
					invite.animate({ width: 283 }, { duration: 1000, easing: 'easeInOutQuad' });
				}, 250);
				$.data(invite, open, timer);
			}, function () {
				window.clearTimeout($.data(invite, open));
				var timer = window.setTimeout(function () {
					invite.animate({ width: 32 }, { duration: 1000, easing: 'easeInOutQuad' });
				}, 3000);
				$.data(invite, close, timer);
			});
			
			invite.click(function () {
				openLiveHelp($(this));
				return false;
			});
			
			$('.' + prefix + 'InviteClose').click(function () {
				window.clearTimeout($.data(invite, close));	
				invite.animate({ width: 32 }, { duration: 1000, easing: 'easeInOutQuad' });
				return false;
			});
		}
	}

	function blockChat() {
		// Block Chat
		opts.connected = false;
		storage.chatEnded = true;
		storage.department = '';
		storage.lastMessage = 0;
		updateStorage();
		message = 0;

		$(selector + 'SignedIn, ' + selector + 'Login #Inputs, ' + selector + 'CollapseButton, ' + selector + 'Toolbar, ' + selector + 'SignInDetails, ' + selector + 'Login #Connecting').fadeOut();
		$(selector + 'SignIn, ' + selector + 'BlockedChatDetails').fadeIn();
		$(selector + 'MessageTextarea').attr('disabled', 'disabled');

		var blocked = $(selector + 'Login #BlockedChat');
		blocked.fadeIn();
		if (blocked.find('img').length === 0) {
			blocked.prepend('<img src="' + opts.server + 'images/Block.png"/>');
		}
	}

	function initChatEvents() {
		var maxWidth = 800;

		// Connected / Disconnect
		$(document).bind('LiveHelp.Connected', function (event, id, name) {
			showOperatorDetails(id, name);
		}).bind('LiveHelp.Disconnect', function () {
			opts.connected = false;
			storage.chatEnded = true;
			storage.department = '';
			storage.lastMessage = 0;
			updateStorage();
			$(selector + 'MessageTextarea').attr('disabled', 'disabled');
			if ($(selector + 'SignedIn').is(':visible') || opts.popup) {
				showRating();
			}
			$.ajax({ url: opts.server + 'logout.php',
				data: { SESSION: encodeURIComponent(cookies.session) },
				dataType: 'jsonp',
				cache: false,
				xhrFields: { withCredentials: true }
			});
		}).bind('LiveHelp.BlockChat', function () {
			blockChat();
		});
	
		// Toolbar
		$(selector + 'Toolbar div').hover(function () {
			$(this).fadeTo(200, 1.0);
		}, function () {
			$(this).fadeTo(200, 0.5);
		});
		
		// Sound Button
		$(selector + 'SoundToolbarButton').click(function () {
			if (storage.soundEnabled) {
				storage.soundEnabled = false;
			} else {
				storage.soundEnabled = true;
			}
			updateStorage();
			toggleSound();
		});
		
		if (opts.popup) {
			maxWidth = 675;
		}
		
		// Disconnect Button
		$(selector + 'DisconnectToolbarButton').fancybox({ href: selector + 'Disconnect', maxWidth: maxWidth, helpers: { overlay: { css: { cursor: 'auto' } }, title: null }, openEffect: 'elastic', openEasing: 'easeOutBack', closeEffect: 'elastic', closeEasing: 'easeInBack', beforeShow: function () {
			$(selector + 'Embedded').css('z-index', 900);
			$('.bubbletip').css('z-index', 950);
		}, afterClose: function () {
			$(selector + 'Embedded').css('z-index', 10000000);
			$('.bubbletip').css('z-index', 90000000);
		} });
		
		// Feedback Button
		$(selector + 'FeedbackToolbarButton').click(function () {
			showRating();
		});
		
		// Connect Button
		$(selector + 'ConnectButton').click(function () {
			startChat();
		});
		
		// Send Button
		$(selector + 'SendButton').click(function () {
			processForm();
		});
		
		// Button Hover Events
		$(selector + 'DisconnectButton, ' + selector + 'CancelButton, ' + selector + 'ConnectButton, ' + selector + 'SendButton').hover(function () {
			var id = $(this).attr('id').replace(prefix, '');
			$(this).toggleClass(id + ' ' + id + 'Hover');
		}, function () {
			var id = $(this).attr('id').replace(prefix, '');
			$(this).toggleClass(id + ' ' + id + 'Hover');
		});
		$(selector + 'CancelButton').click(function () {
			$.fancybox.close();
		});
		$(selector + 'DisconnectButton').click(function () {
			disconnectChat();
		});
		
		$(selector + 'SmiliesButton').click(function () {
			$(this).bubbletip($('#SmiliesTooltip'), { calculateOnShow: true }).open();
		});
		
		$(selector + 'MessageTextarea').keypress(function (event) {
			var characterCode;
			if ($(selector + 'MessageTextarea').val() === '') {
				typing(false);
			} else {
				typing(true);
			}
			if (event.keyCode == 13 || event.charCode == 13) {
				processForm();
				return false;
			} else {
				return true;
			}
		}).blur(function () {
			typing(false);
		}).focus(function () {
			$(selector + 'SmiliesButton').close();
			hideNotification();
			hideTitleNotification();
		});
		
		$('#SmiliesTooltip span').click(function () {
			var smilie = $(this).attr('class').replace('sprite ', ''),
				val = $(selector + 'MessageTextarea').val(),
				text = '';
			
			switch (smilie) {
			case 'Laugh':
				text = ':D';
				break;
			case 'Smile':
				text = ':)';
				break;
			case 'Sad':
				text = ':(';
				break;
			case 'Money':
				text = '$)';
				break;
			case 'Impish':
				text = ':P';
				break;
			case 'Sweat':
				text = ':\\';
				break;
			case 'Cool':
				text = '8)';
				break;
			case 'Frown':
				text = '>:L';
				break;
			case 'Wink':
				text = ';)';
				break;
			case 'Surprise':
				text = ':O';
				break;
			case 'Woo':
				text = '8-)';
				break;
			case 'Tired':
				text = 'X-(';
				break;
			case 'Shock':
				text = '8-O';
				break;
			case 'Hysterical':
				text = 'xD';
				break;
			case 'Kissed':
				text = ':-*';
				break;
			case 'Dizzy':
				text = ':S';
				break;
			case 'Celebrate':
				text = '+O)';
				break;
			case 'Angry':
				text = '>:O';
				break;
			case 'Adore':
				text = '<3';
				break;
			case 'Sleep':
				text = 'zzZ';
				break;
			case 'Stop':
				text = ':X';
				break;
			}
			$(selector + 'MessageTextarea').val(val + text);
		});
	}

	function initDepartments() {
		$(selector + 'DepartmentInput, ' + selector + 'LoginForm select[id=DEPARTMENT]').each(function () {
			var attribute = 'collapsed';
			if ($(this).data(attribute) === undefined) {
				$(this).data(attribute, false);
			}
		});
	}

	function initSignInEvents() {
		var form = selector + 'LoginForm';

		// Sign In Events
		if (settings.requireGuestDetails) {
			
			$(selector + 'NameInput, ' + form + ' input[id=NAME]').bind('keydown blur', function () {
				validateField(this, selector + 'NameError');
			});
			
			if (settings.loginEmail) {
				$(selector + 'EmailInput, ' + form + ' input[id=EMAIL]').bind('keydown blur', function () {
					validateEmail(this, selector + 'EmailError');
				});
			}
			
			if (settings.departments.length > 0) {
				$(selector + 'DepartmentInput, ' + form + ' select[id=DEPARTMENT]').bind('keydown keyup blur change', function () {
					var obj = $(this),
						collapsed = obj.data('collapsed');
						
					validateField(obj, selector + 'DepartmentError');
					if (!collapsed) {
						obj.animate({ width: obj.width() - 35 }, 250);
						obj.data('collapsed', true);
					}
				});
			}
		}
		
		if (!settings.loginEmail) {
			$(selector + 'EmailInput, ' + form + ' input[id=EMAIL]').hide();
			$('.' + prefix + 'Login .EmailLabel').hide();
		}
		
		if (!settings.loginQuestion) {
			$(selector + 'QuestionInput, ' + form + ' input[id=QUESTION]').hide();
			$('.' + prefix + 'Login .QuestionLabel').hide();
		}

	}

	function resizePopup() {
		var height = $(window).height(),
			width = $(window).width(),
			campaign = ($(selector + 'Campaign').length > 0 && !$(selector + 'Campaign').is(':hidden')) ? $(selector + 'Campaign').width() : 0,
			scrollBorder = $(selector + 'ScrollBorder'),
			scroll = $(selector + 'ScrollBorder'),
			messages = $(selector + 'Messages'),
			textarea = $(selector + 'MessageTextarea');

		if (scrollBorder.length > 0 && scroll.length > 0) {
			if (scrollBorder.css('width').indexOf('%') == -1) {
				$(selector + 'Scroll, ' + selector + 'ScrollBorder').css('width', 'auto');
				scroll.css('width', width - campaign - 40 + 'px');
				messages.css('width', width - campaign - 48 + 'px');
				scrollBorder.css('width', width - campaign - 20 + 'px');
			}

			// TODO Test Resizing with WHMCS Template
			$(selector + 'Scroll, ' + selector + 'ScrollBorder').css('height', 'auto').css('height', height - 175 - 10 + 'px');
			$('.body').css({'width': width + 'px', 'min-width': '625px'});

			if (textarea.css('width').indexOf('%') == -1) {
				textarea.css('width', width - 160 + 'px');
			}
			
			width = scrollBorder.css('width');
			var displayWidth = parseInt(width, 10);
			var unitMeasurement = width.slice(-2);
			$(selector + 'Messages img, .' + prefix + 'Image, .' + prefix + 'VideoZoom, .' + prefix + 'VideoHover, .' + prefix + 'ImageZoom, .' + prefix + 'ImageHover').not('.noresize').each(function () {
				var maxWidth = parseInt($(this).css('max-width'), 10),
					maxHeight = parseInt($(this).css('max-height'), 10),
					newWidth = displayWidth - 50,
					aspect = maxHeight / maxWidth,
					newHeight = newWidth * aspect;
					
				if (newWidth <= maxWidth) {
					$(this).css('width', newWidth + unitMeasurement);
				}
				if (newHeight <= maxHeight || $(this).is('.' + prefix + 'Image')) {
					$(this).css('height', newHeight + unitMeasurement);
				}
			});
			scrollBottom();
		}
	}

	function initPopupEvents() {
		$(window).resize(function () {
			resizePopup();
		});
		
		$(document).ready(function () {
			initDepartments();
			if (opts.connected) {
				$(selector + 'Login').hide();
				$(selector + 'Chat').fadeIn(250);
				resizePopup();
				startChat();
			}
		});
		
		initSignInEvents();
		initOfflineEvents();
		initCallEvents();
		
		// Setup Sounds
		if (messageSound === undefined) {
			messageSound = new buzz.sound(opts.server + 'sounds/Pending Chat', {
				formats: ['ogg', 'mp3', 'wav'],
				volume: 100
			});
		}
		
		var id = 'Offline',
			selector = '#' + prefix + id,
			form = $('#' + id + 'MessageForm');
		resetSecurityCode(selector, form);
	}

	// Title Notification Events
	window.isActive = true;

	$(window).focus(function () {
		this.isActive = true;
		hideTitleNotification();
	});

	$(window).blur(function () {
		this.isActive = false;
	});

	// Update Settings
	updateSettings();

	function setupChat() {
	
			// Image Title
			updateImageTitle();
			
			// Popup Events
			if (opts.popup) {
				initChatEvents();
				initPopupEvents();
			}
					
			// jQuery Status Mode Trigger
			$(document).trigger('LiveHelp.StatusModeChanged', settings.currentStatus);
			
			// Live Chat Tab
			if ($('.' + prefix + 'Invite').length === 0 && opts.inviteTab === true) {
				var inviteTabHtml = '<div class="' + prefix + 'Invite"> \
<img src="' + opts.server + 'locale/' + settings.locale + '/images/SliderBackground.png" border="0" alt="Live Chat Online - Chat Now!" title="Live Chat Online - Chat Now!"/> \
<div class="' + prefix + 'InviteTab ' + prefix + 'Button" style="background:url(\'' + opts.server + 'locale/' + settings.locale + '/images/SliderButton.png\') top right no-repeat"></div> \
<div class="' + prefix + 'InviteClose" style="background:url(\'' + opts.server + 'locale/' + settings.locale + '/images/SliderClose.png\') top right no-repeat"></div></div> \
<div class="' + prefix + 'InviteText" style="background:url(\'' + opts.server + 'locale/' + settings.locale + '/images/SliderText.png\') no-repeat"></div>';

				$(inviteTabHtml).appendTo(document.body);
				initInviteTabEvents();
			}
			
			// Embedded Chat
			if ($(selector + 'Embedded').length === 0 && opts.embedded === true) {
				var style = (settings.language.copyright.length > 0) ? 'block' : 'none',
				embeddedHtml = '<div id="' + prefix + 'CallAction" class="background ChatActionText"></div> \
<div id="' + prefix + 'Embedded" style="display:none"> \
	<div class="background LiveChatIcon"></div> \
	<div id="' + prefix + 'StatusText">Online</div> \
	<div id="' + prefix + 'CloseButton" title="Close" class="sprite CloseButton"></div> \
	<div id="' + prefix + 'Notification" class="sprite Notification"><span></span></div> \
	<div id="' + prefix + 'Tab" class="background TabBackground"></div> \
	<div class="background OperatorBackground"> \
		<div id="' + prefix + 'OperatorImage"></div> \
		<div class="sprite OperatorForeground"></div> \
		<div id="' + prefix + 'OperatorNameBackground"> \
			<div id="' + prefix + 'OperatorName"></div> \
			<div id="' + prefix + 'OperatorDepartment"></div> \
		</div> \
	</div> \
	<div id="' + prefix + 'Body"> \
		<div id="' + prefix + 'Background" class="background ChatBackground"></div> \
		<div id="' + prefix + 'Toolbar"> \
			<div id="' + prefix + 'EmailChatToolbarButton" title="' + settings.language.emailchat + '" class="sprite Email"></div> \
			<div id="' + prefix + 'SoundToolbarButton" title="' + settings.language.togglesound + '" class="sprite SoundOn"></div> \
			<div id="' + prefix + 'SwitchPopupToolbarButton" title="' + settings.language.switchpopupwindow + '" class="sprite Popup"></div> \
			<div id="' + prefix + 'FeedbackToolbarButton" title="' + settings.language.feedback + '" class="sprite Feedback"></div> \
			<div id="' + prefix + 'DisconnectToolbarButton" title="' + settings.language.disconnect + '" class="sprite Disconnect"></div> \
		</div> \
		<div id="' + prefix + 'CollapseButton" title="Expand" class="sprite Expand"></div> \
		<div id="' + prefix + 'SignedIn"> \
			<div id="' + prefix + 'Scroll"> \
				<div id="' + prefix + 'Waiting">' + settings.language.thankyoupatience + '</div> \
				<div id="' + prefix + 'Messages"></div> \
				<div id="' + prefix + 'MessagesEnd"></div> \
			</div> \
		</div> \
		<div id="' + prefix + 'SignIn"> \
			<div id="' + prefix + 'SignInDetails">' + settings.language.welcome + '<br/>' + settings.language.enterguestdetails + '</div> \
			<div id="' + prefix + 'BlockedChatDetails" style="display:none">' + settings.language.chatsessionblocked + '</div> \
			<div id="' + prefix + 'Error"> \
				<div id="' + prefix + 'ErrorIcon" class="sprite Cross"></div> \
				<div id="' + prefix + 'ErrorText">' + settings.language.invalidemail + '</div> \
			</div> \
			<div id="' + prefix + 'Login" class="' + prefix + 'Login drop-shadow curved curved-hz-1"> \
				<div id="Inputs"> \
					<label class="NameLabel">' + settings.language.name + '<br/> \
						<div class="' + prefix + 'Input"> \
							<input id="' + prefix + 'NameInput" type="text"/> \
							<div id="' + prefix + 'NameError" title="Name Required" class="sprite InputError"></div> \
						</div> \
					</label> \
					<label class="EmailLabel">' + settings.language.email + '<br/> \
						<div class="' + prefix + 'Input"> \
							<input id="' + prefix + 'EmailInput" type="text"/> \
							<div id="' + prefix + 'EmailError" title="Email Required" class="sprite InputError"></div> \
						</div> \
					</label> \
					<label id="' + prefix + 'DepartmentLabel">' + settings.language.department + '<br/> \
						<div class="' + prefix + 'Department"> \
							<select id="' + prefix + 'DepartmentInput"></select> \
							<div id="' + prefix + 'DepartmentError" title="Department Required" class="sprite InputError"></div> \
						</div> \
					</label> \
					<label class="QuestionLabel">' + settings.language.question + '<br/> \
						<div class="' + prefix + 'Input"> \
							<textarea id="' + prefix + 'QuestionInput"></textarea> \
							<div id="QuestionError" title="Question Required" class="sprite InputError"></div> \
						</div> \
					</label> \
					<div style="text-align: center; margin-top: 10px"> \
						<div id="' + prefix + 'ConnectButton" class="button">' + settings.language.connect + '</div> \
					</div> \
				</div> \
				<div id="Connecting" style="height: 125px; display:none; text-align:center"> \
					<div style="margin-top:50px; left:15px"> \
						<div style="font-family:RobotoLight, sans-serif; padding-top:30px; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:22px; line-height:normal; color:#999">' + settings.language.connecting + '</div> \
					</div> \
				</div> \
				<div id="BlockedChat" style="display:none; text-align:center"> \
					<div style="margin-top:5px; left:15px"> \
						<div style="font-family:RobotoLight, sans-serif; padding:5px 0; text-shadow:0 0 1px #ccc; letter-spacing:-1px; font-size:22px; line-height:normal; color:#999">' + settings.language.accessdenied + '<br/>' + settings.language.blockedchatsession + '</div> \
						<div style="text-align: center; margin: 10px 0"> \
							<div id="' + prefix + 'CloseBlockedButton" class="button">' + settings.language.closechat + '</div> \
						</div> \
					</div> \
				</div> \
			</div> \
			<div id="' + prefix + 'SocialLogin"> \
				<div>or</div> \
				<div id="' + prefix + 'TwitterButton" class="sprite Twitter"></div><br/><div id="' + prefix + 'FacebookButton" class="sprite Facebook"></div> \
			</div> \
			<div id="' + prefix + 'Copyright" style="display: ' + style + '">Copyright &copy; 2012 <a href="http://livehelp.stardevelop.com" target="_blank">Live Chat Software</a> All Rights Reserved</div> \
		</div> \
	</div> \
	<div id="' + prefix + 'Input" class="background MessageBackground"> \
		<div id="' + prefix + 'Typing"> \
			<div class="sprite Typing"></div> \
			<span></span> \
		</div> \
		<textarea id="' + prefix + 'MessageTextarea" placeholder="' + settings.language.enteryourmessage + '"></textarea> \
		<div id="' + prefix + 'SmiliesButton" title="Smilies" class="sprite SmilieButton"></div> \
		<div id="' + prefix + 'SendFileButton" class="sprite SmilieButton"></div> \
		<div id="' + prefix + 'SendButton" class="sprite SendButton"> \
			<div>' + settings.language.send + '</div> \
		</div> \
	</div> \
	<div id="SmiliesTooltip"><div><span title="Laugh" class="sprite Laugh"></span><span title="Smile" class="sprite Smile"></span><span title="Sad" class="sprite Sad"></span><span title="Money" class="sprite Money"></span><span title="Impish" class="sprite Impish"></span><span title="Sweat" class="sprite Sweat"></span><span title="Cool" class="sprite Cool"></span><br/></span><span title="Frown" class="sprite Frown"></span><span title="Wink" class="sprite Wink"></span><span title="Surprise" class="sprite Surprise"></span><span title="Woo" class="sprite Woo"></span><span title="Tired" class="sprite Tired"></span><span title="Shock" class="sprite Shock"></span><span title="Hysterical" class="sprite Hysterical"></span><br/></span><span title="Kissed" class="sprite Kissed"></span><span title="Dizzy" class="sprite Dizzy"></span><span title="Celebrate" class="sprite Celebrate"></span><span title="Angry" class="sprite Angry"></span><span title="Adore" class="sprite Adore"></span><span title="Sleep" class="sprite Sleep"></span><span title="Quiet" class="sprite Stop"></span></div></div> \
	<iframe id="' + prefix + 'FileDownload" name="FileDownload" frameborder="0" height="0" width="0"></iframe> \
	<div id="' + prefix + 'FileTransfer"><div id="FileTransferActionText" class="sprite FileTransferActionText"></div><div class="FileTransferDropTarget"><div id="FileTransferText"></div></div></div> \
	<div id="' + prefix + 'Disconnect"> \
		<div id="' + prefix + 'DisconnectTitle">' + settings.language.disconnecttitle + '</div><br/> \
		<span>' + settings.language.disconnectdescription + '</span> \
		<div id="' + prefix + 'DisconnectButton" class="sprite DisconnectButton"> \
			<div>Disconnect</div> \
		</div> \
		<div id="' + prefix + 'CancelButton" class="sprite CancelButton"> \
			<div>' + settings.language.cancel + '</div> \
		</div> \
	</div> \
</div>';
				$(embeddedHtml).appendTo(document.body);
				
				// Events
				initEmbeddedEvents();
				initSignInEvents();
				initChatEvents();
				
				// File Transfer Button
				$(selector + 'SendFileButton').fancybox({ href: selector + 'FileTransfer', closeClick: false, nextClick: false, arrows: false, mouseWheel: false, keys: null, helpers: { overlay: { css: { cursor: 'auto' }, closeClick: false }, title: null }, openEffect: 'elastic', openEasing: 'easeOutBack', closeEffect: 'elastic', closeEasing: 'easeInBack', margin: [25, 405, 25, 25] });
				
				// Hover File Transfer
				$(selector + 'FileTransfer').hover(function () {
					$('#FileTransferText').fadeIn(250);
				}, function () {
					$('#FileTransferText').fadeOut(250);
				});
				
				// Popup Windows Button
				$(selector + 'SwitchPopupToolbarButton').click(function () {
					opts.embedded = false;
					closeTab(function () {
						storage.notificationEnabled = false;
						updateStorage();
					});
					openLiveHelp($(this));
				});

				// HTML5 Drag Drop Events
				$('.FileTransferDropTarget').bind('dragover', function (event) {
					ignoreDrag(event);
				}).bind('dragleave', function (event) {
					$(this).css('border-color', '#7c7b7b');
					$(this).css('background-color', '#fff');
					$(this).stop();
					$('#FileTransferText').fadeOut(250);
					ignoreDrag(event);
				}).bind('dragenter', function (event) {
					$(this).css('border-color', '#a2d7e5');
					$(this).css('background-color', '#d3f3fa');
					$(this).pulse({backgroundColor: ['#d3f3fa', '#e9f9fc']}, 500, 5);
					$('#FileTransferText').fadeIn(250);
					ignoreDrag(event);
				}).bind('drop', acceptDrop);
				
				// Load Storage
				loadStorage();
				
				// Departments
				updateDepartments();
				
				// Online
				if (settings.currentStatus == 'Online' && cookies.session !== undefined && cookies.session.length > 0) {
					if (settings.autoload !== 0) {
						openTab();
					} else {
						var embed = $(selector + 'Embedded');
						if (embed.is(':hidden')) {
							$(selector + 'Waiting').hide();
							embed.fadeIn(50, function () {
								$(selector + 'CallAction').fadeIn(50);
							});
							loadStorage();
						}
					}
				}
				
				// Login Details
				var form = selector + 'LoginForm',
					name = $(selector + 'NameInput, ' + form + ' :input[id=NAME]'),
					email = $(selector + 'EmailInput, ' + form + ' :input[id=EMAIL]'),
					inputs = $(selector + 'SignIn').find('input, textarea');
				if (opts.name !== undefined && opts.name.length > 0) {
					name.val(opts.name);
					if (settings.requireGuestDetails) {
						validateField(name, selector + 'NameError');
					}
				}
				if (opts.email !== undefined && opts.email.length > 0) {
					email.val(opts.email);
					if (settings.requireGuestDetails) {
						validateEmail(email, selector + 'EmailError');
					}
				}
				if (!settings.requireGuestDetails) {
					inputs.css('width', '100%');
				}
				
				// Auto Load / Connected
				if (settings.autoload) {
					showChat();
					opts.connected = true;
				}
			
				// Update Settings
				overrideSettings();
			
			}
	}

	$(document).bind('LiveHelp.SettingsUpdated', function () {
		setupChat();
	});

	// Document Ready
	$(document).ready(function () {
	
		// Visitor Tracking
		trackVisit();
	
		// Title
		title = $('head title').text();
		
		// Insert CSS / Web Fonts
		var css = '';
		if (opts.fonts === true) {
			css = '<link href="' + opts.protocol + 'fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" type="text/css"/>';
		}
		if (opts.css === true) {
			css += '<link href="' + opts.server + 'styles/styles.min.css" rel="stylesheet" type="text/css"/>';
		}
		if (css.length > 0) {
			$(css).appendTo('head');
		}
		
		// Title Notification Event
		$(this).click(function () {
			hideTitleNotification();
		});
		
		if (settings !== undefined && settings.currentStatus !== undefined) {
			setupChat();
		}
		
		// Override Settings
		overrideSettings();
		
		// Resize Popup
		if (opts.popup) {
			resizePopup();
		}
		
		// Setup Initiate Chat / Animation
		$(window).bind('resize', resetPosition);

		// Events
		initInviteTabEvents();
		
		// Embedded Chat / Local Storage
		$(window).bind('storage', function (e) {
			loadStorage();
		});
	
	});

	// Window Load Event
	$(window).load(function () {
		
		// Setup Sounds
		/*
		messageSound = new buzz.sound(opts.server + 'sounds/Pending Chat', {
			formats: ['ogg', 'mp3', 'wav'],
			volume: 100
		});
		*/
		
	});

	//return {};

})(this, document, jQuery);