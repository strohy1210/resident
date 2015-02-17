$(function(){

  $(".faq-text-container").hide();

  $(".faq-title-container").click(function(){
     $(this).find(".faq-text-container").slideToggle();
  });

  $(".faq-title-container").mouseleave(function(){
     $(this).find(".faq-text-container").slideUp();
  });
  $(".faq-title-container").mouseenter(function(){
     $(this).find(".faq-text-container").slideDown();
  });

  $(".more").hide();

  $(".section").click(function(){
     $(this).find(".more").slideToggle();
  })

  $(".section").mouseleave(function(){
    $(this).find(".more").slideUp();
  })

})