$(function () {
  // jQueryを記述
  $("a").hover(function () {
    $(this).css("color", "#00FF00");
  }, function () {
    $(this).css("color", "#ff0000");
    $(this).css("fontsize", "24px")
  });
});



 