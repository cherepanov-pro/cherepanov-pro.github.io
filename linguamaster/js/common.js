$(document).ready(function() {

	$(function() {
		$(window).scroll(function() {
			if ($(this).width() > 1300 && $(this).scrollTop() > 280) {
				$(".second-header").css("display", "block").animate({
					height: "90"
				}, 500);
			} else {
				$(".second-header").css("display", "none");
			}
		});
	});

	$(".main-mnu li").click(function() {
		$(".main-mnu li").removeClass("active");
		$(this).addClass("active");
		return false;
	});	

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").toggleClass("on");
		return false;
	});

	$('.trust-us .card h3').equalHeight();
	$('.about .about-item h4').equalHeight();

	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				margin: 40,
				nav: false
			},
			560: {
				items: 2,
				nav: false
			},
			770: {
				margin: 50,
				center: false,
				nav: false
			},
			1000: {
				nav: true,
				navText: [],
				items: 3
			},
			1280: {
				nav: true,
				navText: [],
				items: 4,
				center: false,
				margin: -8
			}
		},
		nav: true,
		navText: [],
		autoplay : true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		loop: true,
		center: true,
		autoWidth: true
		
	});

	$(".customers-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				margin: 80
			},
			700: {
				items: 3,
				margin: 80
			},
			1200: {
				margin: 110
			},
			1280: {
				margin: 250
			}
		},
		autoplay : true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		loop: true,
		autoWidth: true,
		center: true
	});

	$('.customers .owl-item:nth-child(2)').css('opacity', '1');
	$("#map .balloon").click(function() {
		$(this).toggleClass('opa');
	});


	$("h2").animated("flipInY");

	$(".trust-us .card img").animated("bounceInDown");
	$(".trust-us .card h3").animated("bounceIn");
	$(".trust-us .card p").animated("bounceInUp");

	$(".customers .comment").animated("bounceIn");

	$(".payment-item").animated("bounceIn");

	$(".about .about-item img").animated("bounceIn");
	$(".about .about-item h4").animated("bounceInLeft");
	$(".about .about-item p").animated("bounceInRight");

	$(".project .project-item").animated("flipInX");

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

	/*$(".homesect .section-bottom .buttons").click(function() {
		$("#callback h4").html($(this).text());
		$("#callback input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});*/

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

	//Яндекс карта
	ymaps.ready(init);

	function init () {
	    var myMap = new ymaps.Map("map", {
	            center: [55.765, 37.63],
	            zoom: 15,
	            controls: []
	        }, {
	            searchControlProvider: 'yandex#search'
	        });
	    
	// Создание метки с собственным значком.
		var myPlacemark = new ymaps.Placemark([55.761781, 37.63385], {
		}, {
	        iconLayout: 'default#image',
	        iconImageHref: 'img/pin.svg',
	        iconImageSize: [40, 55],
	        iconImageOffset: [-10, -80]
	      });
	    myMap.geoObjects.add(myPlacemark);
	    myMap.behaviors.disable('scrollZoom');
	    if ($(window).width() < 992) {
	    	myMap.behaviors.disable('drag');
	    }
	}

});
/*var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if(mobile){
   // Создаем ссылку на CSS
   var cssLink = document.createElement("link");
   cssLink.setAttribute("type", "text/css");
   cssLink.setAttribute("rel", "stylesheet");
   cssLink.setAttribute("href", "css/mobile.css");
   document.head.appendChild(cssLink);
}*/

