function Is_Price(chk)
{
	var temp= chk.value;
	if (temp== "")
	{
		chk.value = "0.00";
		return;
	}
	var Chars = ".0123456789";
	for (var i = 0; i < temp.length; i++)
	{
		if (Chars.indexOf(temp.charAt(i)) == -1)
		{
			//alert("Invalid characters");
			chk.value = "0.00"; 
			chk.focus();
			chk.select();
			return false;
		}
	}
	return true;
}
//Remove the $ sign if you wish the parse number to NOT include it
var prefix=""
var wd
function parseelement(thisone)
{
	
	if (Is_Price(thisone))
	{
	
		if (thisone.value.charAt(0)=="$")
			return
		wd="w"
		var tempnum=thisone.value
		for (i=0;i<tempnum.length;i++)
		{
			if (tempnum.charAt(i)==".")
			{
				wd="d"
				break
			}
		}
		if (wd=="w")
			thisone.value=prefix+tempnum+".00"
		else
		{
			if (tempnum.charAt(tempnum.length-2)==".")
			{
				thisone.value=prefix+tempnum+"0"
			}
			else
			{
				tempnum=Math.round(tempnum*100)/100
				thisone.value=prefix+tempnum
			}
		}
	}
}
function validateCheckboxblank(fld,txt)
{
		imselflg=false;
		elem = document.getElementsByName(fld);
		for(imsel=0;imsel<elem.length;imsel++)
		{
			if(elem[imsel].checked)
			{
				imselflg=true;
				
			}
		}
		if(!imselflg)
		{
			alert(txt);
			return false;
		}
		return true;
}

function CallDelete(fld)
{	
	var objForm = document.forms[0];
	//alert(objForm.delflag.value);
	
		if(validateCheckboxblank(fld,"Please check an item to be deleted"))
		{
			if(confirm("All checked will be permanently deleted, action cannot be undone."))
			{
				objForm.delflag.value = 1;
				objForm.submit();
			}
		}
	
}
function CallSelect(fld)
{	
	var objForm = document.forms[0];
	//alert(objForm.delflag.value);
	
		if(validateCheckboxblank(fld,"Please check an item to be selecetd"))
		{
				objForm.selflag.value = 1;
				objForm.submit();
		}
	
}

function CallApprove(fld)
{	

	
	var objForm = document.forms[0];
	if(validateCheckboxblank(fld,"Please check an item to be Approved"))
	{
			
			objForm.approveflag.value = 1;
			//alert(objForm.approveflag.value);
			objForm.submit();
	}
	
}

function CallDisApprove(fld)
{	
	var objForm = document.forms[0];
	
	
		if(validateCheckboxblank(fld,"Please check an item to be DisApproved"))
		{
				
				objForm.disapproveflag.value = 1;
				objForm.submit();
		}
	
}


function CallDelete2(fld)
{	
	var objForm = document.forms[0];
	//<![CDATA[
	var reason = prompt("Please enter reason for deleting","Eg: Reason For Deletion");
	//]]>
	objForm.hd_reason.value = reason;
	if(reason == null)
		return false;
	else	
	{	
		if(validateCheckboxblank(fld,"Please check an item to be deleted"))
		{
			if(confirm("All checked will be permanently deleted, action cannot be undone."))
			{
				objForm.delflag.value = 1;
				objForm.submit();
			}
		}
	}
}
//without prompt
function _CallDelete(fld)
{	
	var objForm = document.forms[0];
	if(confirm("All checked will be permanently deleted, action cannot be undone."))
	{
		objForm.delflag.value = 1;
		objForm.submit();
	}
}

function CallDeletePrompt(fld)
{
				
	if(validateCheckboxblank(fld,"Please check an item to be deleted"))
	{	
		var id =1;
		var user = $('#userid'+id);
		var fname = user.find('.fname').text();
		
		
		var txt = 'Please Enter Reason for deleting?'+
		'<div class="field"><label for="editfname">Reason</label><input type="text" id="editfname" name="editfname" value="'+ fname +'" /></div>';
		
		$.prompt(txt,{ 
		buttons:{Ok:true, Cancel:false},
		submit: function(v,m,f){
		//this is simple pre submit validation, the submit function
		//return true to proceed to the callback, or false to take 
		//no further action, the prompt will stay open.
		var flag = true;
		if (v) {
		
		if ($.trim(f.editfname) == '') {
		m.find('#editfname').addClass('error');
		flag = false;
		}
		else m.find('#editfname').removeClass('error');
		
		
		
		}
		return flag;
		},
		callback: function(v,m,f){
		
		if(v){							
		//Here is where you would do an ajax post to edit the user
		//also you might want to print out true/false from your .php
		//file and verify it has been removed before removing from the 
		//html.  if false dont remove, $promt() the error.
		
		//$.post('edituser.php',{userfname:f.editfname,userlname:f.editlname}, callback:function(data){
		//	if(data == 'true'){
		
		user.find('.fname').text(f.editfname);
		var reason 	= f.editfname;
		var objForm = document.forms[0];
		objForm.hd_reason.value = reason;
		
		_CallDelete(fld);
		
		//	}else{ $.prompt('An Error Occured while editing this user'); }							
		//});
		}
		else{ return false;}
		
		}
		});
	}	
}

function CallActive(fld)
{	
	
	var objForm = document.forms[0];
	if(validateCheckboxblank(fld,"Please check an item to be activated"))
	{
		objForm.activeflag.value = 1;
		
		objForm.submit();
	}	
}
function CalldeActive(fld)
{	
	var objForm = document.forms[0];
	if(validateCheckboxblank(fld,"Please check an item to be deactivated"))
	{
		objForm.deactiveflag.value = 1;
		objForm.submit();
	}	
}
function CallSearch(page_name)
{ 
	var objForm = document.forms[0];
	objForm.quicksearch.value = 1;
	objForm.action=page_name;
	objForm.submit();
}
function CheckAll(myform,chb1,chb2)
{
	//alert('sdf');
	var e;
	var chkboxname=chb1;
	var chkboxname1=chb2;

	for (var i=0;i < eval(""+"document."+myform+".elements.length");i++)
	{
		 eval("e ="+""+"document."+myform+".elements[i]")
		if ((e.name == eval("'"+chkboxname+"'")) || (e.name == eval("'"+chkboxname1+"'"))&& (e.type=='checkbox'))
		eval("e.checked ="+""+"document."+myform+"."+chkboxname+".checked")
	}
}
function CallAdd(frm)
{	
	frm.addflag.value = 1;
	frm.submit();
}
function Calculate_Amount(qty,price)
{
		 var amt = parseFloat(qty)*parseFloat(price);
		//alert(amt.toFixed(2));
		document.forms[0].txt_item_amount.value = amt.toFixed(2);
		
}
function Calculate_Percentage(freight_ch,amount_total)
{
		var per = (parseFloat(amount_total)*freight_ch)/100;
		document.forms[0].txtfreight_ch_val.value = per.toFixed(2);
		Calculate_Gross_Total(per.toFixed(2),amount_total);
		//alert(per);
}
function Calculate_Gross_Total(freight_ch,amount_total)
{
		
		var gross_total = parseFloat(freight_ch)+parseFloat(amount_total);
		//gross_total = parseelement(gross_total);
		document.forms[0].txtgross_total.value = gross_total.toFixed(2);
}
/*function submitForm()
{
}
*/
/*
	Function Name= emptyValidation
	Desc = This function is used to validation for the empty field 
	Param fieldList = This arguments set as a string varialble. you just need to supply the textbox name
	if the textbox is multiple then supply with ~ separator for eg. tbl_fields_data_type~tbl_fields_title
*/

function emptyValidation(fieldList) {
		
		var field=new Array();
		field=fieldList.split("~");
		var counter=0;
		for(i=0;i<field.length;i++) {
			if(document.getElementById(field[i]).value=="") {
				document.getElementById(field[i]).style.border="1px solid red";
				counter++;
			} else {
				//document.getElementById(field[i]).style.backgroundColor="#FFFFFF";	
			}
		}
		if(counter>0) {
				alert("The Field mark as red could not left empty");
				return false;
				
		}  else {
			return true;
		}
		
}

