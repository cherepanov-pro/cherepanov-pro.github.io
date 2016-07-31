$(document).ready(function() {

	$( "#slider" ).slider({
		value : 0,
		min : 0,
		max : 200,
		step : 1,
		animate : "slow",
        slide: function( event, ui ) {
			if (ui.value > -1 && ui.value < 40) {
				$('.ui-point').removeClass("active");
				$('#1').addClass('active');
			}else if (ui.value > 39 && ui.value < 100){
				$('.ui-point').removeClass("active");
				$('#2').addClass('active');
		
			}else if (ui.value > 99 && ui.value < 199) {
				$('.ui-point').removeClass("active");
				$('#3').addClass('active');
			}else {
				$('.ui-point').removeClass("active");
				$('#4').addClass('active');
			};								
		}
	});

	$('#1').click(function(){
		$( "#slider" ).slider({value : 0});
		$('.ui-point').removeClass('active');
		$(this).addClass('active');
	});
	$('#2').click(function(){
		$( "#slider" ).slider({value : 40});
		$('.ui-point').removeClass('active');
		$(this).addClass('active');
	});
	$('#3').click(function(){
		$( "#slider" ).slider({value : 99,animate : "slow"});
		$('.ui-point').removeClass('active');
		$(this).addClass('active');
	});
	$('#4').click(function(){
		$( "#slider" ).slider({value : 200});
		$('.ui-point').removeClass('active');
		$(this).addClass('active');
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
