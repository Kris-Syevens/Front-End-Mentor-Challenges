// Selectors

const numbersOptions = document.querySelectorAll(".numbers");
let submit = document.getElementById("submit-button");
let chosenValue = document.querySelector("#rating-selected");
let cardStart = document.getElementById("card-start");
let cardEnd = document.querySelector(".card-end");

// Functions

function removeActiveClass() {
  numbersOptions.forEach((numbers) => {
    numbers.classList.remove("active");
  });
}

// Event Listeners

numbersOptions.forEach((numbers) => {
  numbers.addEventListener("click", () => {
    removeActiveClass();
    numbers.classList.toggle("active");
    let activeValue = document.querySelector(".active").innerText;
    chosenValue.innerText = activeValue;
  });
});

submit.addEventListener("click", () => {
  numbersOptions.forEach((number) => {
    if (!number.classList.contains("active")) {
      return;
    } else {
      cardStart.classList.add("hidden");
      cardEnd.classList.remove("hidden");
    }
  });
});
