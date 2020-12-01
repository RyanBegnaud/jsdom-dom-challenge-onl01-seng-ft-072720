// let number = document.getElementById("counter")
// let plus = document.getElementById("plus")
// let minus = document.getElementById("minus")
// let pause = document.getElementById("pause")

// let timer = number.addEventListener("DOMContentLoaded", setInterval(upNumber, 1000));


// function upNumber(){
//   number.textContent = parseInt(number.textContent) + 1
// }

// function downNumber(){
//   number.textContent = parseInt(number.textContent) - 1
// }

// plus.addEventListener("click", upNumber);
// minus.addEventListener("click", downNumber);
// pause.addEventListener("click", function(){
//   clearTimeout(timer);
// })


let counter_id = document.getElementById("counter")
let pause_id = document.getElementById("pause")
let minus_id = document.getElementById("-")
let plus_id = document.getElementById("+")
let heart_id = document.getElementById("<3")
let list_id = document.getElementById("list")
let comment_id = document.getElementsByTagName("form")[0]

let life = true;

let counter = 0
//As a user, i should see the timer increment every second once the page has loaded
let timer = setInterval(function(){
  if (life){
    counter_id.innerHTML = counter
    counter += 1;
  }

}, 1000);

//As a user, i can manually increment and decrement the counter as i like
plus_id.addEventListener("click", function(){
  counter += 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1
})

minus_id.addEventListener("click", function(){
  counter -= 1;
  counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1
})