let divs = document.querySelectorAll(".color");
let text = document.querySelector("p");
let green = divs[0];
let red = divs[1];
let blue = divs[2];

green.addEventListener("click", () => {
    text.style.color = "green";

});

red.addEventListener("click", () => {
  
  text.style.color = "red";
});

blue.addEventListener("click", () => {
    text.style.color = "blue";

});