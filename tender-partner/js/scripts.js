//hamburger menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('#nav_items').slideToggle('slow');
});
