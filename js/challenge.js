let number = document.getElementById("counter")
let plus = document.getElementById("plus")

number.addEventListener("DOMContentLoaded", setInterval(upNumber, 1000));
plus.addEventListener("click", upNumber);

function upNumber(){
  number.textContent = parseInt(number.textContent) + 1
}

