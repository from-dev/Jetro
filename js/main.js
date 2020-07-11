$(function(){
	$('.slider').slick({
		arrows: false,
		asNavFor: '.thumbs'
	});

	$('.thumbs').slick({
		arrows: false,
		slidesToShow: 6,
		// slidesToScroll: 6,
		asNavFor: '.slider',
		focusOnSelect: true,

		responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 5,
				centerMode: true,
			}
		},
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 4,
				centerMode: true,
			}
		}
		]

	});

	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').slideToggle();
	});

});