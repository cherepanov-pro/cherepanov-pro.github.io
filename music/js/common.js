$(document).ready(function() {

	$('.main-header .main-mnu li').click(function() {
		$('.main-header .main-mnu li').removeClass('active');
		$(this).addClass('active');
	});

	$('.mobile-mnu').click(function(event) {
		$('.mobile-mnu').toggleClass('shift-icon');
		$('.main-mnu').toggleClass('shift-mnu');
	});


	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
				}
			}
		});
	});

	$('#slider').owlCarousel({
		responsive: {
			750: {
				nav: true
			}
		},
		items: 1,
		nav: false,
		navText: ['<span>&rsaquo;</span>', '<span>&lsaquo;</span>'],
		dots: true,
		autoplay : true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		loop: true,
		center: true
	});

	$('#history-slider').owlCarousel({
		center: true,
		autoWidth: true,
		margin: 150,
		loop: true,
		items: 5,
		autoplay : true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
	});

	$('#new-tracks .post h3').equalHeight();

	$('#to-top').hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop()>200) {
				$('#to-top').fadeIn();
				$('#to-top').addClass('to-top-in');
				return false;
			} else {
				$('#to-top').fadeOut();
				return false;
			}
		});
	});

	$("#to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
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
