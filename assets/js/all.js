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
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


})(jQuery);	