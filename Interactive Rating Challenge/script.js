

const numbersOptions = document.querySelectorAll(".numbers");
let submit = document.getElementById("submit-button");
let chosenValue = document.querySelector("#rating-selected");
let cardStart = document.getElementById("card-start");
let cardEnd = document.querySelector(".card-end");

numbersOptions.forEach((numbers) => {
  numbers.addEventListener("click", () => {
    removeActiveClass();
    numbers.classList.add("active");
    let activeValue = document.querySelector(".active").innerText;
    chosenValue.innerText = activeValue;
  });
});

function removeActiveClass() {
  numbersOptions.forEach((numbers) => {
    numbers.classList.remove("active");
  });
}

submit.onclick = function () {
  cardStart.classList.add("hidden");
  cardEnd.classList.remove("hidden");
};




