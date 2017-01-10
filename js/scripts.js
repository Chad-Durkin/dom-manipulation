$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul.dogsays").prepend("<li>Bark!</li>");
    $("ul.catsays").prepend("<li>Meow!</li>");
  });

  $("button#cat").click(function() {
    $("ul.catsays").prepend("<li>Meow!</li>");
    $("ul.dogsays").prepend("<li>Bark!</li>");
  });

  $("button#clear").click(function() {
    $("ul.catsays").remove();
    $("ul.dogsays").remove();
  });
});
