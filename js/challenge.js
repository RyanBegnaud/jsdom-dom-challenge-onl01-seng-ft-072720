let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  setInterval(upNumber, 1000)
  })

function upNumber(){
  number.textContent = parseInt(number.textContent) + 1
}