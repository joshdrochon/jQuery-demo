$(function(){

  $(".clickable").click(function(){
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });

  $(".expand").click(function(){
    $(".expanded-text").fadeToggle();
  });

  //add button functionality

  $(function(){
    $("button#green").click(function(){

      $("body").removeClass();
      $("body").addClass("green-background");

    })
  })

  $(function(){
    $("button#yellow").click(function(){
      $("body").removeClass();
      $("body").addClass("yellow-background");
    })
  })

  $(function(){
    $("button#red").click(function(){
      $("body").removeClass();
      $("body").addClass("red-background");
    })
  })

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
