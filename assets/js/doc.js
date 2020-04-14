$(function(){
  $('.iconfont.icon-caret-right').on('click', function(){
    $(this).toggleClass('icon-caret-right').toggleClass('icon-sort-down');
    $('#aa').collapse('toggle');
  });
  $('.iconfont.icon-sort-down').on('click', function(){
    $(this).toggleClass('icon-caret-right').toggleClass('icon-sort-down');
    $('#aa').collapse('toggle');
  });
});