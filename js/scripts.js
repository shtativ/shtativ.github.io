//hide menu
$('a#header-menu').click(function () {
    $('#menu').fadeIn('slow');
});
//show menu
$('#menu a').click(function () {
    $('#menu').fadeOut('slow');
});
 
    $("#pointer-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
