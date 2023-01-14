let count = 0;
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
  decrease.style.color ="red"
let reset = document.querySelector("#reset");

let button = document.querySelectorAll(".btn");

button.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const varmı = e.currentTarget.classList;
    if (varmı.contains("decrease")) {
      count--;
    } else if (varmı.contains("increase")) {
      count++;
    } else {
      count = 0;
      window.location.reload();
    }

    if (count > 0) {
      increase.style.color = "green";
      increase.textContent = count +" pozitive";
     
    }
    if (count < 0) {
      decrease.style.color = "red";
      
    decrease.textContent = count  + " negative";
    }
    if (count === 0) {
      reset.style.color = "#222";
      reset.textContent = count;
    }
    
    
  });
});
