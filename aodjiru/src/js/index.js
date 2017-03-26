// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}
  $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // spaceBetween: 100,
      grabCursor: true,
      slidesPerView: 3,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
      //,
      //  breakpoints: {
      //           420: {
      //               slidesPerGroup: 1,
      //               slidesPerView: 1,
      //               spaceBetween: 10
      //           },
      //           640: {
      //               slidesPerGroup: 2,
      //               slidesPerView: 2,
      //               spaceBetween: 20
      //           }
      //       }
    })        
  });
