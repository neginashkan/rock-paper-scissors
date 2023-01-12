const buttons = document.querySelectorAll(".game-btn");
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
  const userImage = document.getElementById("user-img");
  const computerImage = document.getElementById("computer-img");
  const userEl = document.getElementById("user");
  const computerEl = document.getElementById("computer");
  let computer = computerChoice();
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
