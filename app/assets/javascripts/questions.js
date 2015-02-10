$(function(){
  
  $('#demoModal').modal('show');
  $('.answers').on('click', ".answer",function(){

    $(this).find('input').get(0).checked=true;
    $(this).submit();
  });

})