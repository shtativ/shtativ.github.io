$(function(){
  $(".owl-carousel").owlCarousel({
	items:1,
	margin:10,
	loop:true,
	nav:true,
	autoplay:true,
	mouseDrag:false,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
  });
	//scroll
//   $('a[href*=#]').bind("click", function(e){
//      var anchor = $(this);
//      $('html, body').stop().animate({
//         scrollTop: $(anchor.attr('href')).offset().top
//      }, 1000);
//      e.preventDefault();
//   });
//   return false;
//});
	$('a[href^="#"]').click(function () { 
 elementClick = $(this).attr("href");
 destination = $(elementClick).offset().top;
 if($.browser.safari){
 $('body').animate( { scrollTop: destination }, 1000 );
 } else {
  $('html').animate( { scrollTop: destination }, 1000 );
 }
 return false;
});
});

