let shareArrow = document.getElementById("arrow-icon");

let modal = document.getElementById("modal");
let cardTargets = document.querySelectorAll(".card-targets");

shareArrow.onclick = function () {
  modal.style.display = "flex";
};

window.onclick = function (event) {
  cardTargets.forEach((target) => {
    if (event.target == target) {
      modal.style.display = "none";
    }
  });
};
