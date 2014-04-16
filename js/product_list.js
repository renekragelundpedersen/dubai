$(document).ready(function(){

	$("#listhead_1").click(function(){
		$("#list_1").slideToggle("down");
		$("#list_2").hide();
		
		$("#list_3").hide();
		
		$("#list_4").hide();
	
		$(this).fadeIn();
		
		$("#listhead_1").find("a").addClass("list_1active");
		$("#listhead_2").find("a").removeClass("list_2active");
		$("#listhead_3").find("a").removeClass("list_3active");
		$("#listhead_4").find("a").removeClass("list_4active");
		return false;
	});
	
	 
});

$(document).ready(function(){

	$("#listhead_2").click(function(){
		$("#list_2").slideToggle("down");
		$("#list_1").hide();
		
		$("#list_3").hide();
		
		$("#list_4").hide();
	
		$(this).fadeIn();
		
		$("#listhead_2").find("a").addClass("list_2active");
		$("#listhead_1").find("a").removeClass("list_1active");
		$("#listhead_3").find("a").removeClass("list_3active");
		$("#listhead_4").find("a").removeClass("list_4active");
		return false;
	});
	
	 
});

$(document).ready(function(){

	$("#listhead_3").click(function(){
		$("#list_3").slideToggle("down");
		$("#list_1").hide();
		
		$("#list_2").hide();
		
		$("#list_4").hide();
	
		$(this).fadeIn();
		
		$("#listhead_3").find("a").addClass("list_3active");
		$("#listhead_2").find("a").removeClass("list_2active");
		$("#listhead_1").find("a").removeClass("list_1active");
		$("#listhead_4").find("a").removeClass("list_4active");
		return false;
	});
	
	 
});

$(document).ready(function(){

	$("#listhead_4").click(function(){
		$("#list_4").slideToggle("down");
		$("#list_1").hide();
		
		$("#list_2").hide();
		
		$("#list_3").hide();
	
		$(this).fadeIn();
		
		$("#listhead_4").find("a").addClass("list_4active");
		$("#listhead_2").find("a").removeClass("list_2active");
		$("#listhead_3").find("a").removeClass("list_3active");
		$("#listhead_1").find("a").removeClass("list_1active");
		return false;
	});
	
	 
});