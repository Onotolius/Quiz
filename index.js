import { questions } from "./db.js";
const question = document.getElementById("questionContainer");
const answersContainer = document.getElementById("answersContainer");
const questionsTotal = document.querySelector(".question__total");
const scoreContainer = document.querySelector(".quiz__score");
const nextBtn = document.querySelector(".btn-next");
const resetBtn = document.querySelector(".btn-reset");
const answerDescription = document.querySelector(".answers__description");
let score = 0;
let currentQuestionIndex = 0;
let isAnswered = false;
questionsTotal.textContent = questions.length;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  answersContainer.innerHTML = "";
  isAnswered = false;
  question.textContent = currentQuestion.title;
  currentQuestion.answers.map((answer) => {
    let element = document.createElement("li");
    element.classList.add("answers__list-item");
    element.dataset.correct = answer.isCorrect;
    element.innerHTML = answer.text;
    answersContainer.appendChild(element);
  });
}
renderQuestion();
answersContainer.addEventListener("click", function (event) {
  console.log("CLICK");
  if (isAnswered) return;
  const target = event.target;
  if (!target.classList.contains("answers__list-item")) return;
  console.log(target.dataset); // увидеть атрибут
  const isCorrect = target.dataset.correct === "true";
  console.log(isCorrect); // увидеть значение
  if (isCorrect) {
    target.classList.add("correct");
    score += 1;
    scoreContainer.textContent = `${score}`;
  } else {
    target.classList.add("wrong");
  }
  isAnswered = true;
  console.log(Array.from(answersContainer.children));
  Array.from(answersContainer.children).forEach((element) => {
    if (element.dataset.correct === "true") {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  });
  answerDescription.textContent = questions[currentQuestionIndex].explanation;
});
