let number = document.getElementById("counter")
let plus = document.getElementById("plus")

number.addEventListener("DOMContentLoaded", setInterval(upNumber, 1000))

function upNumber(){
  number.textContent = parseInt(number.textContent) + 1
}

