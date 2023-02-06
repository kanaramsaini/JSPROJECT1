var count = 0;
var x=100;

function changeCount(num) {
 
  count += num;

  document.getElementById("count").innerHTML = count;

}