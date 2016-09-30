// animation green buttons

$('#red_button').click(
       function() {
           $('#green_btns').toggleClass('animated fadeInDownBig');
           $("#green_btns").css('display', 'flex');
      }
   );
