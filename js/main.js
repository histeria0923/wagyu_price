$(function() {
  $('#page-top a').click(function(e) {
    e-preventDefauli();
    var position = 0;
    var speed =500;
    $('html, body').animate({
      scrolltop: position,
    }, speed, 'swing');
    return false;
 });
});