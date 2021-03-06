$(document).ready(function() {

	
	var isMobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
	if(isMobile === true) {
		$('.main-mnu').css({
			position: 'fixed',
			top: '50%',
			transform: 'translateY(-50%)'
		});
		$('.main-mnu li:first-child').css('display', 'block');
		$('.main-mnu ul li').css('background-color', '#f39c12');
		$('.main-mnu ul li a').css('color', '#fff');
	} else {
		$('#scene').css('display', 'block');
		$('#scene').parallax();

		/*Scroll animation*/
		$("#about h2").animated("flipInY");
		$("#about .about-photo").animated("bounceIn");
		$("#about .about-aside p").animated("slideInRight");
		$("#about .about-aside .skills-item-wrap").animated("flipInX");





		$('#gallery .filter').css('opacity', '0').waypoint(function() {
			$('#gallery .filter').each(function(index, element) {
				setTimeout(function() {
					$(element).addClass('animated zoomInLeft').css('opacity', '1');
				}, 200*index);
			});
		}, {
			offset: '90%'
		});


		$('#contact h2').css('opacity', '0').waypoint(function() {
			$('#contact h2').addClass('animated flipInY').css('opacity', '1');
		}, {
			offset: '0'
		});

		$('#contact p').css('opacity', '0').waypoint(function() {
			$('#contact p').addClass('animated bounceInUp').css('opacity', '1');
		}, {
			offset: '0'
		});




		$('#contact form div:nth-child(1)').css('opacity', '0').waypoint(function() {
			$('#contact form div:nth-child(1)').addClass('animated bounceInLeft').css('opacity', '1');
		}, {
			offset: '0'
		});

		$('#contact form div:nth-child(2)').css('opacity', '0').waypoint(function() {
			$('#contact form div:nth-child(2)').addClass('animated bounceInRight').css('opacity', '1');
		}, {
			offset: '0'
		});

		$('#contact form div:nth-child(3)').css('opacity', '0').waypoint(function() {
			$('#contact form div:nth-child(3)').addClass('animated zoomInUp').css('opacity', '1');
		}, {
			offset: '0'
		});




		$('.follow h2').css('opacity', '0').waypoint(function() {
			$('.follow h2').addClass('animated flipInY').css('opacity', '1');
		}, {
			offset: '0'
		});


		$('.follow .social-wrap a').css('opacity', '0').waypoint(function() {
			$('.follow .social-wrap a').each(function(index, element) {
				setTimeout(function() {
					$(element).addClass('animated zoomInUp').css('opacity', '1');
				}, 200*index);
			});
		}, {
			offset: '0'
		});

	};


	function heightDetect() {
		$("#scene").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	setTimeout(function() {
		function mnu () {
			$('.main-mnu li').each(function(index, element) {
				setTimeout(function() {
					$(element).toggleClass('active');
				}, 200*index);
			});
			setTimeout(function() {
				$('.main-mnu li').toggleClass('active');
			}, 3500)
		};
		mnu();
	}, 2000);


	$('.to-top').hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop()>800) {
				$('.to-top').fadeIn();
			} else {
				$('.to-top').fadeOut();
			}
		});
	});


	$(".to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$("#portfolio").mixItUp();

	$(".filter span").click(function() {
		$(".filter span").removeClass("active");
		$(this).addClass("active");
		return false;
	});



	$(".contact p").waypoint(function() {
		$(".contact form").fadeIn();
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

	


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize(),
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				$("#form").trigger("reset");
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
$(document).ready(function() {
	$(".cssload-circle").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

