$(document).ready(function(){
    $(".icon").click(function(){
      $(this).toggleClass("is-x");
      $(".icon-container").toggleClass("fullscreen");
      $(".nav-container").toggleClass("aberto");
    });
  });