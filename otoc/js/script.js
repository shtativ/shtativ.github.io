$(function () {
	//carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		nav: true,
		autoplay: true,
		mouseDrag: false,
		navText:['',''],
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp'
	});

	//slow scroll
	$('a[href*="#"]').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top }, 555);
		if ($.browser.safari) {
			$('body').animate({scrollTop: top }, 555);
		} else {
			$('body, html').animate({scrollTop: top }, 555);
		}
		return false;
	});
});