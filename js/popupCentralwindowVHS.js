/*
 mycenteralpopwinVHS(fname,width,height) //Checks if the String is Blank
*/

function mycenteralpopwinVHS(fname,width,height)
{
	
	
	var file
	var sWidth	= 200
	var sHeight = 200
	
	if(width.length > 0){
	sWidth = width;
	}
	else{
	width =100;
	}
	
	if(height.length > 0){
	sHeight = height;
	}
	else{
	height =100;
	}
	
	file = fname
	file =file
	
	
	var wintop  =window.screen.availHeight;
	var winleft =window.screen.availWidth;
	wintop  =(wintop/2) -(height/2)
	winleft =(winleft/2) -(width/2)
	//wintop  = 0
	//winleft = 0
	
	//alert("wintop=" +wintop)
	//alert("winleft=" +winleft)
	
	//sHeight = parseInt(sHeight) * 1.5;
	
	//sWidth = parseInt(sWidth) * 1.1;
	if ( sWidth > window.screen.availWidth )
		{ sWidth = window.screen.availWidth; }
	if (sHeight > window.screen.availHeight )
		{ sHeight = window.screen.availHeight; }
	if ( parseInt(sWidth) < width )
		{ sWidth = width; }
	if ( parseInt(sHeight) < height )
		{ sHeight = height; }
	
	if ( navigator.appName == "Microsoft Internet Explorer" )
		{ window.open(file, "_blank", "status=no, scrollbars=yes, toolbar=no, resizable=yes, location=no, menubar=no, top=" + wintop + ", left= "+ winleft +", height=" + sHeight + ", width=" + sWidth); 
		}
	if ( navigator.appName == "Netscape" ) 
		{ window.open(file,"_blank","alwaysRaised,dependant,innerheight=" + sHeight + ",innerwidth=" + sWidth); 
		  //window.open(file,"_blank","alwaysRaised,innerheight=" + sHeight + ",innerwidth=" + sWidth);
		}
 
 
}