$(function(){
  $(".clickable").click(function(){
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });

  $(".expand").click(function(){
    $(".expanded-text").fadeToggle();
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
