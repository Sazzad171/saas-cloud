(function ($) {
"use strict";

$('.owl-theme').owlCarousel({
	items: 3,
	loop:true,
	margin:20,
	autoPlay: 3000,
	margin:10,
	nav:true,
	navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>"],
	dots: true,
	paginationSpeed: 300,
	rewindSpeed: 400,
	responsiveClass:true,
	responsive:{
		0:{
			items:1
		},
		490:{
			items:2
		},
		770:{
			items:3
		},
		1200:{
			items:3
		},
		1500:{
			items:3
		}
	}
});

// slick slider for company logo
$('.responsive').slick({
	dots: false,
	infinite: true,
	speed: 1500,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1000,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 667,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});

})(jQuery);	