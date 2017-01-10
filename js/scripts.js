$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul.dogsays").prepend("<li>Bark! Hey you!</li>");
    $("ul.catsays").append("<li>Meow! What!</li>");
  });

  $("button#cat").click(function() {
    $("ul.catsays").prepend("<li>Meow! Get out of here!</li>");
    $("ul.dogsays").prepend("<li>Bark! Make me!</li>");
  });

  $("button#favCat").click(function() {
    $("ul.favorites").before("<li>I love cats!</li>");
  });

  $("button#favDog").click(function() {
    $("ul.favorites").after("<li>I love dogs!</li>");
  });

  $("button#clear").click(function() {
    $("li").remove();
  });

});
