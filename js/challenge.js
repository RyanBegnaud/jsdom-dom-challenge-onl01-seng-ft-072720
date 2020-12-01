let number = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

number.addEventListener("DOMContentLoaded", setInterval(upNumber, 1000));
plus.addEventListener("click", upNumber);
minus.addEventListener


function upNumber(){
  number.textContent = parseInt(number.textContent) + 1
}

function downNumber(){
  number.textContent = parseInt(number.textContent) - 1
}