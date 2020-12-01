let number = document.getElementById("counter")
number.addEventListener("DOMContentLoaded", function(e){
  let num = parseInt(number.innerHTML)
  setInterval(function(){num += 1 }, 1000);
})