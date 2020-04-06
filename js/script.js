"use strict";

// burger
$(window).on("load resize", function(){
	if ($(window).width() < 768){
		if (document.querySelector(".menu-burg__button.active"))
			$('.menu-burg__box,.menu-burg__button').addClass('active');
			$('body').add('lock');
	} else {
		if (document.querySelector(".menu-burg__button.active"))
			$('.menu-burg__box,.menu-burg__button').removeClass('active');
			$('body').removeClass('lock');
  }

});
$(document).ready(function(){
	$('.menu-burg__button').click(function(event) {
		$('.menu-burg__button,.menu-burg__box').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
  		let item = $(ibg[i]);
  		let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
});

//anchors
$(document).ready(function(){
    $(".nav-menu a[href^=#]").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 60}, 1500);
	});
	$(".menu-burg__box a[href^=#]").on("click", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('.menu-burg__box,.menu-burg__button').removeClass('active');
		$('body').removeClass('lock');
		$('body,html').animate({scrollTop: top - 80}, 1500);
	})
});

// lazy load the google map
let popular_top = $(".popular").offset().top;
$(window).bind("scroll", function(){
	let window_top = $(this).scrollTop();
	if (window_top > popular_top) {
		$('.contacts__google-map').attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4485.602906394397!2d37.97032521489928!3d55.796685453930074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414acc159d4b0b31%3A0x5ce4eca0b592f57f!2sKFC!5e0!3m2!1sru!2sua!4v1584976715538!5m2!1sru!2sua");
		$(window).unbind("scroll");
	}
});