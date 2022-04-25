const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const questions = document.getElementsByClassName("questions");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answers = document.getElementsByClassName("answers");

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const arrow5 = document.getElementById("arrow5");
const arrows = document.getElementsByClassName("arrows");

question1.onclick = function () {
  removeActiveAnswer();
  removeActiveArrow();
  removeActiveQuestion();
  answer1.classList.add("active-answer");
  arrow1.classList.add("active-arrow");
  question1.classList.add("active-question");
};

question2.onclick = function () {
  removeActiveAnswer();
  removeActiveArrow();
  removeActiveQuestion();
  answer2.classList.add("active-answer");
  arrow2.classList.add("active-arrow");
  question2.classList.add("active-question");
};

question3.onclick = function () {
  removeActiveAnswer();
  removeActiveArrow();
  removeActiveQuestion();
  answer3.classList.add("active-answer");
  arrow3.classList.add("active-arrow");
  question3.classList.add("active-question");
};

question4.onclick = function () {
  removeActiveAnswer();
  removeActiveArrow();
  removeActiveQuestion();
  answer4.classList.add("active-answer");
  arrow4.classList.add("active-arrow");
  question4.classList.add("active-question");
};

question5.onclick = function () {
  removeActiveAnswer();
  removeActiveArrow();
  removeActiveQuestion();
  answer5.classList.add("active-answer");
  arrow5.classList.add("active-arrow");
  question5.classList.add("active-question");
};

function removeActiveAnswer() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.remove("active-answer");
  }
}

function removeActiveArrow() {
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].classList.remove("active-arrow");
  }
}

function removeActiveQuestion() {
  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.remove("active-question");
  }
}
