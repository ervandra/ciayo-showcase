jQvan = jQuery.noConflict();

jQvan(document).ready(function($){
$(document).foundation();
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 100
  }
});
$(".showcase-item, .showcase-content, img").each(function() {
  var $section = this;
  new ScrollMagic.Scene({
    triggerElement: $section,
    duration: 200,
    offset: 150,
    triggerHook: 1
  })
    .on("enter", function() {
      $($section).addClass("active");
    })
    .addTo(controller);
});
})
