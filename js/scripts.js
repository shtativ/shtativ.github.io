
//show menu
    $('a#header_menu').click(function () {
    $('#menu').fadeIn('slow');
		$('html, body').on('touchstart touchmove', function(e){ 
     //prevent native touch activity like scrolling
     e.preventDefault(); 
});
});
//hide menu
    $('#menu a').click(function () {
    $('#menu').fadeOut('slow');
				$('html, body').off();
});
 //slow transition 
//    $("#pointer-down").on("click","a", function (event) { 
    $('#pointer_down').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    }); 
    $('#btns').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
//owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        autoplay:true,
        smartSpeed: 1050,  
        nav:true,
        navContainer:'#testimonials nav',
        navText:['','']
    
});
//target the entire page, and listen for touch events

/* $('#menu a').click(function () {
    $('#menu').fadeOut('slow');
		$('html, body').off('touchstart touchmove', function(e){ 
     //prevent native touch activity like scrolling
     e.preventDefault(); 
});
});**/
