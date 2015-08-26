//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Init Google Maps
$(document).ready(function(){
  map = new GMaps({
    div: '#bamboo-map',
    lat: -12.043333,
    lng: -77.028333,
    enableNewStyle: true
  });
  map.addMarker({
    lat: -12.043333,
    lng: -77.028333,
    title: 'Location'
  });
});

//Init Shuffle Plugin
$(document).ready(function() {
  /* initialize shuffle plugin */
  var $grid = $('#grid');
  $grid.shuffle({
    itemSelector: '.portfolio-item', // the selector for the items in the grid
    speed: 500 // Transition/animation speed (milliseconds)
  });
  /* reshuffle when user clicks a filter item */
  $('.nav-pills li').click(function (e) {
    e.preventDefault();
    // set active class
    $('.nav-pills li').removeClass('active');
    $(this).addClass('active');
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
  });
});

// Init Slippry for Testimonials
$(document).ready(function(){
  $('#bamboo-testimonials').slippry()
});

//Init Portfolio Gallery
$(document).ready(function() {
  $("#grid").lightGallery(); 
});