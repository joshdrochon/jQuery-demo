$(function(){
  $(".clickable").click(function(){
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".expand").click(function(){
    $(".expanded-text").fadeIn();
  });





});


/*

('.cat').hover(
  function () {
    $(this).show();
  },
  function () {
    $(this).hide();
  }
);

*/
