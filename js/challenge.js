let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  setInterval(){ number.textContent = parseInt(number.textContent) + 1, 10000}
  })
