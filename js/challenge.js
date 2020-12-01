let number = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let pause = document.getElementById("pause")

let timer = number.addEventListener("DOMContentLoaded", setInterval(upNumber, 1000));


function upNumber(){
  number.textContent = parseInt(number.textContent) + 1
}

function downNumber(){
  number.textContent = parseInt(number.textContent) - 1
}

plus.addEventListener("click", upNumber);
minus.addEventListener("click", downNumber);
pause.addEventListener("click", function(){
  clearTimeout(number);
})