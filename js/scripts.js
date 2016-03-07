//hide menu
$('a#header-menu').click(function () {
    $('#menu').fadeIn('slow');
});
//show menu
$('#menu a').click(function () {
    $('#menu').fadeOut('slow');
});
 //slow transition 
//    $("#pointer-down").on("click","a", function (event) { 
    $('#pointer-down').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    }); $('#btns').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
