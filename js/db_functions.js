
function getXMLHTTP() 
{ //fuction to return the xml http object
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
}

function getCity(strURL)
{         
	 var req = getXMLHTTP(); // fuction to get xmlhttp object
	 if (req)
	 {
		  req.onreadystatechange = function()
		 {
			  if (req.readyState == 4) 
			  { //data is retrieved from server
				   if (req.status == 200) 
				   { // which reprents ok status                    
					 document.getElementById('citydiv').innerHTML=req.responseText;
				   }
				  else
				  { 
					 alert("There was a problem while using XMLHTTP:\n");
				  }
			  }            
		  }        
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	 }
}

function getDev(strURL)
{         
	 var req = getXMLHTTP(); // fuction to get xmlhttp object
	 if (req)
	 {
		  req.onreadystatechange = function()
		 {
			  if (req.readyState == 4) 
			  { //data is retrieved from server
				   if (req.status == 200) 
				   { // which reprents ok status                    
					 document.getElementById('devdiv').innerHTML=req.responseText;
				   }
				  else
				  { 
					 alert("There was a problem while using XMLHTTP:\n");
				  }
			  }            
		  }        
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	 }
}
function getProject(strURL)
{         
	 var req = getXMLHTTP(); // fuction to get xmlhttp object
	 if (req)
	 {
		  req.onreadystatechange = function()
		 {
			  if (req.readyState == 4) 
			  { //data is retrieved from server
				   if (req.status == 200) 
				   { // which reprents ok status                    
					 document.getElementById('projectdiv').innerHTML=req.responseText;
				   }
				  else
				  { 
					 alert("There was a problem while using XMLHTTP:\n");
				  }
			  }            
		  }        
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	 }
}


function getLong(strURL)
{         
	 var req = getXMLHTTP(); // fuction to get xmlhttp object
	 if (req)
	 {
		  req.onreadystatechange = function()
		 {
			  if (req.readyState == 4) 
			  { //data is retrieved from server
				   if (req.status == 200) 
				   { // which reprents ok status                    
					 document.getElementById('Longdiv').innerHTML=req.responseText;
				   }
				  else
				  { 
					 alert("There was a problem while using XMLHTTP:\n");
				  }
			  }            
		  }        
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	 }
}

function getLocation(strURL)
{         
	 var req = getXMLHTTP(); // fuction to get xmlhttp object
	 if (req)
	 {
		  req.onreadystatechange = function()
		 {
			  if (req.readyState == 4) 
			  { //data is retrieved from server
				   if (req.status == 200) 
				   { // which reprents ok status                    
					 document.getElementById('locationdiv').innerHTML=req.responseText;
				   }
				  else
				  { 
					 alert("There was a problem while using XMLHTTP:\n");
				  }
			  }            
		  }        
		req.open("GET", strURL, true); //open url using get method
		req.send(null);
	 }
}
