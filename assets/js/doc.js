$(function(){
  $('.iconfont.icon-caret-right').on('click', function(){
    $(this).toggleClass('icon-caret-right').toggleClass('icon-sort-down');
    $(this).nextAll('.collapse').collapse('toggle');
  });
  $('.iconfont.icon-sort-down').on('click', function(){
    $(this).toggleClass('icon-caret-right').toggleClass('icon-sort-down');
    $(this).nextAll('.collapse').collapse('toggle');
  });
});