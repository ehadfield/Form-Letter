$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#yourName").val();

  $(".yourName").text(yourNameInput);

  $("#formLetter").show();

  event.preventDefault();
  });
});
