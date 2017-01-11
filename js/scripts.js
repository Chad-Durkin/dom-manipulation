$(document).ready(function() {
  $("#dog").click(function() {
    $("ul.dogsays").prepend("<li>Bark! Hey you!</li>");
    $("ul.catsays").prepend("<li>Meow! What!</li>");
  });

  $("button#cat").click(function() {
    $("ul.catsays").prepend("<li>Meow! Get out of here!</li>");
    $("ul.dogsays").prepend("<li>Bark! Make me!</li>");
  });

  $("button#favCat").click(function() {
    $("ol.catsFav").prepend("<li class=myFav>cats</li>");
  });

  $("button#favDog").click(function() {
    $("ol.dogsFav").prepend("<li class=myFav>dogs</li>");
  });

  $("button#clear").click(function() {
    $("li").remove();
  });

  $("button#clear").click(function() {
    $("p").remove();
  });
});
