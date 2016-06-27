//hamburger menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('#nav_items').slideToggle('slow');
});

//hover fade menu
$('.myMenu ul li').hover(function() {
	$(this)('ul li').fadeToggle(300);
});
//
// $('.myMenu ul li.has-children > a').click(function() {
// 	$(this).parent().siblings().find('ul').slideUp(300);
// 	$(this).next('ul').stop(true, false, true).slideToggle(300);
// 	return false;
// });
