//navbar
$(document).ready(function() {
    $("#nav-button").click(function() {
        $('#nav-items').addClass('nav-items-active');
    });
    $('#nav-items a').click(function() {
        $('#nav-items').removeClass('nav-items-active');
    });
});

// lightbox plugin
lightbox.option({
    'resizeDuration': 50,
    'adeDuration': 100,
    'imageFadeDuration': 100,
    'positionFromTop': 30,
    'wrapAround': true
})  


//FullPage scroll
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', '3thPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 444,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        continuousVertical: true,
        //



        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true, //cмещение картинок
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '1em',
        paddingBottom: '5px',
        fixedElements: '#header',
        responsiveWidth: 768,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });
});
