//navbar
$(document).ready(function() {
    $("#nav-button").click(function() {
        $('#nav-items').addClass('nav-items-active');
    });
    $('#nav-items a').click(function() {
        $('#nav-items').removeClass('nav-items-active');
    });
});