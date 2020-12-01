let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  
setInterval(function(){number.innerText = parseInt(number.innerText) + 1 }, 1000);
})