let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", setInterval(function(){
  number.textContent = parseInt(number.textContent) + 1, 10000}
  ))
