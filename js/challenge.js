let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  let num = parseInt(number.innerHTML)
  setInterval(function(){number.innerHTML += 1 }, 1000);
})