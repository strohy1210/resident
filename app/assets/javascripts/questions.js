$(function(){
  
  $('#demoModal').modal('show');

  $('input[name=ans]').change(function(){
     $('form').submit();
   });
  
  $('.answers').on('click', ".answer",function(){

    $(this).find('input').get(0).checked=true;
    $(this).submit();
  });

})