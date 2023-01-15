const buttons = document.querySelectorAll(".game-btn");
const startGameBtn = document.getElementById("start-game-btn");
const userChoiceHtml = document.getElementById("user-choice-html");
const resultHtml = document.getElementById("result-html");
const tryAginBtn = document.getElementById("try-agin-btn");
tryAginBtn.addEventListener("click", function () {
  userChoiceHtml.style.display = "block";
  resultHtml.style.display = "none";
});
function visibilityOn() {
  const startGameHtml = document.getElementById("start-game-html");
  userChoiceHtml.style.display = "block";
  startGameHtml.style.display = "none";
}
startGameBtn.addEventListener("click", visibilityOn);
function show(event) {
  game(event.target.id);
}
buttons.forEach((buttons) => buttons.addEventListener("click", show));
function computerChoice() {
  const choices = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function game(user) {
  userChoiceHtml.style.display = "none";
  resultHtml.style.display = "block";
  const userImage = document.getElementById("user-img");
  const computerImage = document.getElementById("computer-img");
  const userEl = document.getElementById("user");
  const computerEl = document.getElementById("computer");
  let computer = computerChoice();
  userImage.src = `/images/${user}.png`;
  computerImage.src = `/images/${computer}.png`;
  userImage.classList.add(`.${user}-user`);
  computerImage.classList.add(`.${computer}-computer`);
  userEl.textContent = user;
  computerEl.textContent = computer;
  const resultEl = document.getElementById("result");
  let result;
  if (user === computer) {
    result = "It's a draw 😐";
  }
  if (user === "rock" && computer === "paper") {
    result = "You lost 😥";
  }
  if (user === "scissors" && computer === "rock") {
    result = "You lost 😔";
  }
  if (user === "paper" && computer === "scissors") {
    result = "You lost 😖";
  }
  if (computer === "rock" && user === "paper") {
    result = "You win 😍";
  }
  if (computer === "scissors" && user === "rock") {
    result = "You win 🥰";
  }
  if (computer === "paper" && user === "scissors") {
    result = "You win 😎";
  }
  resultEl.textContent = result;
}
