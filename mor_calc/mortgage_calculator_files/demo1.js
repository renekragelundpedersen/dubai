window.addEvent('domready', function(){
	// First Example
	var el = $('myElement'),
		font = $('fontSize'),
		e2 = $('myElement2'),
		font2 = $('fontSize2'),
		e3 = $('LOAN'),
		dp = $('DP');
	var yr = $('yr'); 
	var prate = $('prate'); 
	var computedM = $('computedM'); 

		//var yr = document.getElementById('yr');
		//var prate = document.getElementById('prate');
		
	var pointblank=new Array('0','05','1','15','2','25','3','35','4','45','5','55','6','65','7','75','8','85','9','95','0','05','1','15','2','25','3','35','4','45','5','55','6','65','7','75','8','85','9','95','0','05','1','15','2','25','3','35','4','45','5','55','6','65','7','75','8','85','9','95','0','05','1','15','2','25','3','35','4','45','5','55','6','65','7','75','8','85','9','95','0','05','1','15','2','25','3','35','4','45','5','55','6','65','7','75','8','85','9','95','0');
	
	var getYR = function(vv){
		// Sets the color of the output text and its text to the current color
		yr.set('value', vv);
	};
	
	var floor=function (number)
	{
	  return Math.floor(number*Math.pow(10,2))/Math.pow(10,2);
	}

	var addCommas2 = function (vnumber){
		//alert (vnumber);
		var vnumber= String(vnumber);
		vnumber=vnumber.replace(/,/g ,"");
		vnumber=vnumber.replace(/\s/g , "");

		x = vnumber.split(".");
		x1 = x[0];
		x2 = x.length > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1" + "," + "$2");
        }
	result= x1+x2;
        return "AED "+result;
	}
	
	var dosum2 = function (IR,YR,LA,DP,AT,AI)
	{
	IR=IR.replace(/,/g,"");
	IR=IR.replace(/\s/g,"");
	LA=LA.replace(/,/g,"");
	LA=LA.replace(/\s/g,"");
	DP=DP.replace(/,/g,"");
	DP=DP.replace(/\s/g,"");
	  var mi = IR / 1200;
	  var base = 1;
	  var mbase = 1 + mi;
	  for (i=0; i<YR * 12; i++)
	  {
	    base = base * mbase
	  }
	  LA=parseFloat(LA)-parseFloat(DP);
	  var dasum = LA * mi / ( 1 - (1/base)) + AT / 12 + AI / 12;
	  var result= floor(dasum);
	  //alert(result);
	  
	  var resulted=addCommas2(result);
	  computedM.set('text', resulted);
	}
	
	
	// Create the new slider instance
	var yrs = new Slider(el, el.getElement('.knob'), {
		steps: 31,	// There are 35 steps
		range: [1],	// Minimum value is 8
		onChange: function(value){
			// Everytime the value changes, we change the font of an element
			//font.setStyle('font-size', value);
			font.set('text', value);
			getYR(value);
			dosum2(prate.get('value'),yr.get('value'), e3.get('value'),dp.get('value'),0,0);
		}
	}).set(font.getStyle('font-size').toInt());
	yrs.set(1);
	
	var getPRATE = function(vv){
		// Sets the color of the output text and its text to the current color
		prate.set('value', vv);
	};
	var irate = new Slider(e2, e2.getElement('.knob'), {
		steps: 102,	// There are 35 steps
		range: [1],	// Minimum value is 8
		onChange: function(value){
			// Everytime the value changes, we change the font of an element
			value=parseInt(value);
			//value=parseFloat(this.step)+0.05;
			if (value>=1 && value<=20){
				var valuenow='5.'+pointblank[value-1];
				font2.set('text', valuenow);
			}else if (value>=21 && value<=40){
				var valuenow='6.'+pointblank[value-1];
				font2.set('text', valuenow);
			}else if (value>=41 && value<=60){
				var valuenow='7.'+pointblank[value-1];
				font2.set('text', valuenow);
			}else if (value>=61 && value<=80){
				var valuenow='8.'+pointblank[value-1];
				font2.set('text', valuenow);
			}else if (value>=81 && value<=100){
				var valuenow='9.'+pointblank[value-1];
				font2.set('text', valuenow);
			}else if (value==101){
				var valuenow='10';
				font2.set('text', valuenow);
			}
			getPRATE(valuenow);
			dosum2(prate.get('value'),yr.get('value'), e3.get('value'),dp.get('value'),0,0);
		}
	}).set(font2.getStyle('font-size').toInt());
	
	irate.set(1);
});
