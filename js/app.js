$( document ).ready(function() {
  $('.content').hide();
  $('#div1').show();
  $('.project__name').click(function(){
    $('.content').hide();
    $('#div'+$(this).attr('target')).show();
  });
});