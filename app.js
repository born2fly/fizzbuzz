$(document).ready(function() {
  console.log(' doc ready');

for (var i = 1; i<=100; i++) {


if (i%5===0 && i%3===0) {
  $('#results').append('fizzbuzz<br>'); 
  
} else if (i%5===0) {
  $('#results').append('buzz<br>');

} else if (i%3===0) {
  $('#results').append('fizz<br>');

} else {
$('#results').append(i + '<br>');
}
}

  // ----- the concept ------
  //var fizz = i/3 = true; "fizz"
  // 
  //var buzz = i/5 = true; "buzz"
  // 
  //  else i



});