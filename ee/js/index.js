$(document).ready(function(){$("#nav-button").click(function(){$("#nav-items").addClass("nav-items-active")}),$("#nav-items a").click(function(){$("#nav-items").removeClass("nav-items-active")})}),lightbox.option({resizeDuration:50,adeDuration:100,imageFadeDuration:100,positionFromTop:30,wrapAround:!0}),$(document).ready(function(){$("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["firstPage","secondPage","3thPage","4thPage"],navigation:!0,navigationPosition:"right",showActiveTooltip:!1,slidesNavigation:!0,css3:!0,scrollingSpeed:444,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,scrollOverflow:!1,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,continuousVertical:!0,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,sectionsColor:["#ccc","#fff"],paddingTop:"1em",paddingBottom:"5px",fixedElements:"#header",responsiveWidth:768,responsiveHeight:0,responsiveSlides:!1,sectionSelector:".section",lazyLoading:!0,onLeave:function(o,e,n){},afterLoad:function(o,e){},afterRender:function(){},afterResize:function(){},afterResponsive:function(o){},afterSlideLoad:function(o,e,n,i){},onSlideLeave:function(o,e,n,i,t){}})});