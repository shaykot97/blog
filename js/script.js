$(document).ready(function(){

	//Social icon toggle
	
	$('.toggle_social_link').click(function(){
		$('.toggle_item').toggle();
	});
	
	$('.toggle').click(function(){
		$('.off_canvas_menu').toggleClass('show');
	});
	
	//Change menu class on scrolling

	
	$(window).scroll(function(){
		
		if($(document).scrollTop() > 1){
			$("header").addClass("sticky");
		}else{
			$("header").removeClass("sticky");
		}
		
	});
 
}); 