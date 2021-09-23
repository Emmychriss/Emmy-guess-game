"use strict";
// alert("Welcome to Emmy short guess game!");
var randomNum = document.querySelector(".number").textContent;
randomNum = Math.trunc(Math.random() * 20 + 1); // any random number from 1-20
// console.log(randomNum);

const submitGuess = document.querySelector(".submit-guess");
const tryAgain = document.querySelector(".try-again");

let attempt = 20;
let score = 20;
let highscore = 0;

const info = function () {
  return alert(
    `PLAYER NAME: ${document.querySelector(".name").value}\nPLAYER ID: ${
      document.querySelector(".player-id").value
    }\nYOUR COUNTRY: ${document.querySelector(".player-country").value}`
  );
};
submitGuess.addEventListener("click", function () {
  const guess = Number(document.querySelector(".user-guess").value);
  if (!guess) {
    document.querySelector(".info").textContent = "NO VALID GUESS!";
  } else if (guess !== randomNum) {
    if (attempt > 0) {
      document.querySelector(".info").textContent =
        guess > randomNum ? "Your guess is too high" : "Your guess is too low";
      attempt--;
      score--;
      document.querySelector(".attempt").textContent = attempt;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".info").textContent = "GAME OVER!";
    }
    //   } else if (guess > randomNum) {
    //     if (attempt > 0) {
    //       document.querySelector(".info").textContent = "guess is too high";
    //       attempt--;
    //       score--;
    //       document.querySelector(".attempt").textContent = attempt;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".info").textContent = "GAME OVER!";
    //     }
    //   } else if (guess < randomNum) {
    //     if (attempt > 0) {
    //       document.querySelector(".info").textContent = "guess is too low";
    //       attempt--;
    //       score--;
    //       document.querySelector(".attempt").textContent = attempt;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".info").textContent = "GAME OVER";
    //     }
  } else if (guess === randomNum) {
    document.querySelector(".info").textContent = "CORRECT GUESS!!";
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.backgroundColor = "grey";
    document.querySelector(".number").style.color = "white";
    document.querySelector(
      ".number"
    ).textContent = `Emmy's secret number = ${randomNum}✨`;
    document.querySelector(".number").style.width = "200px";
    document.querySelector(".number").style.left = "45%";
    if (
      document.querySelector(".name").value &&
      document.querySelector(".player-id").value &&
      document.querySelector(".player-country").value
    )
      info();
    else {
      alert(
        "To proceed, please supply your Name, ID, and country in the provided field"
      );
    }
  }
});

tryAgain.addEventListener("click", function () {
  document.querySelector(".name").value = "";
  document.querySelector(".player-id").value = "";
  document.querySelector(".player-country").value = "";
  document.querySelector(".user-guess").value = "";
  document.querySelector(".info").textContent = "Start Guessing...";
  document.querySelector(".attempt").textContent = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.backgroundColor = "white";
  document.querySelector(".number").style.color = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "100px";
  document.querySelector(".number").style.left = "46.5%";
  //   document.querySelector(".number").textContent = Math.trunc(
  //     Math.random() * 20 + 1
  //   );
});
