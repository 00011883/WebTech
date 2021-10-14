console.log("Hello JavaScript!");

const btnI = document.getElementById("increase-btn");
const btnD = document.getElementById("decrease-btn");
const btnReset = document.getElementById('reset-btn');
const number = document.getElementById("number-box");

btnI.addEventListener("click", () => {
  number.textContent == 30 ? alert("Are you done with clicking me?!") : number.textContent++;
});

btnD.addEventListener("click", () => 
  number.textContent == 0 ? 0 : number.textContent--
);

btnReset.addEventListener('click', () => {
  number.textContent == 0 ? alert("You can't reset initial value") : number.textContent = 0;
})