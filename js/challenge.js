let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  setInterval(function(){number.innerHTML += 1 }, 1000);
})