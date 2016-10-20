$(document).ready(function(){
  var age = parseInt(prompt("Please Enter Your Age."));

  if (age >= 17) {
    $("#vote").show();
  } else {
$("#under-17").show();
}





});
