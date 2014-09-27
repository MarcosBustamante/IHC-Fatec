$(document).on("pagecreate","#pageone",function(){
  $("body").on("swipeleft",function(){
    alert("You swiped left!");
  });

  $("body").on("swiperight",function(){
  alert("You swiped right!");
  });                       
});

