// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
$(function(){

  $(".faq-text-container").hide();

  $(".faq-title-container").click(function(){
     $(this).find(".faq-text-container").slideToggle();
  });

  $(".faq-title-container").mouseleave(function(){
     $(this).find(".faq-text-container").slideUp();
  });

  $(".more").hide();

  $(".section").click(function(){
     $(this).find(".more").slideToggle();
  })

  $(".section").mouseleave(function(){
    $(this).find(".more").slideUp();
  })


})