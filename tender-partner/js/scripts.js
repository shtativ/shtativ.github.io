//hamburger menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('#nav_items').slideToggle('slow');
});

//show menu
    $('#feedback_popup_listener').click(function () {
    $('#feedback_popup').fadeIn('slow');
});

// //hide menu
//     $('#feedback_popup_listener ').click(function () {
//     $('#feedback_popup').fadeOut('slow');
// });
