let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  
setInterval(function(){number.innerText = "2" }, 1000);
})