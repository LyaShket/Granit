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