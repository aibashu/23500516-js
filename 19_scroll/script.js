$(function(){
  // jQueryを記述
$(window).scroll(function(){
  $("p").html("Scroll:" + $(this).scrollTop() + "px")
  .css("color","#ff0000")
});
});