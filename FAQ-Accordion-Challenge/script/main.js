// Selectors

const questionsAll = document.querySelectorAll(".questions");
const answersAll = document.querySelectorAll(".answers");
const arrowsAll = document.querySelectorAll(".arrows");

// Event Listeners & Logic

questionsAll.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("active-question")) {
      question.classList.remove("active-question");
      question.parentElement.nextElementSibling.classList.remove(
        "active-answer"
      );
      question.nextElementSibling.classList.remove("active-arrow");
    } else {
      question.classList.add("active-question");
      question.parentElement.nextElementSibling.classList.add("active-answer");
      question.nextElementSibling.classList.add("active-arrow");
    }
  });
});
