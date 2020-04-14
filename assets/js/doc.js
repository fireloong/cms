$(function(){
  $('.iconfont.icon-caret-right').on('click', function(){
    $(this).removeClass('icon-caret-right').addClass('icon-sort-down');
    $('#aa').collapse('show');
  });
});