let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", setInterval(function(){
  number.textContent += 1, 1000
}))
