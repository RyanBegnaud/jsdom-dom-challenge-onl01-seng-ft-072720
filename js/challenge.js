let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  
  setInterval(function(){parseInt(number.innerText) += 1 }, 1000);
})