$(document).ready(function(){
    $('.aniview').AniView();
});

var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
}
$('.aniview').AniView(options);

$('.aniview').addClass('animated bounceOutLeft');

$('.aniview').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
// /////

$(function() {

  $('#da-slider').cslider({
    autoplay	: true,
    bgincrement	: 450
  });

});
