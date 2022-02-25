// First Stage
const firstBtn = document.getElementById("startBtn");
const rulesSection = document.querySelector(".rulesSection");
const bg1 = document.querySelector(".bg1");
const rulesCancelBtn = document.getElementById("rulesCancelBtn");

// animations
var rulesAnim = {
  animation: "rulesOpenAnim .3s ease-out forwards",
};

var rulesAnimReverse = {
  animation: "rulesCloseAnim .3s ease-out forwards",
};

var bg1Anim = {
  animation: "bg1Anim .6s ease-out forwards",
};

var gameBgAnim = {
  animation: "gameBgAnim .6s ease-out forwards",
};

// Actions
firstBtn.onclick = () => {
  Object.assign(rulesSection.style, rulesAnim);
};

rulesCancelBtn.onclick = () => {
  Object.assign(rulesSection.style, rulesAnimReverse);
};

// Making the timer
const timeOutput = document.getElementById("timeOutput");
const startingTime = 45;
var time = startingTime * 60;

setInterval(countDown, 1000);

function countDown() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeOutput.innerHTML = `${minutes}m : ${seconds}s`;
  time--;
}

// Starting the game
const startBtn = document.getElementById("rulesStartBtn");
const gameBg = document.querySelector(".gameBg");

startBtn.onclick = () => {
  Object.assign(bg1.style, bg1Anim);
  Object.assign(rulesSection.style, bg1Anim);
  Object.assign(gameBg.style, gameBgAnim);
};

// Game mechanics
const nextBtn = document.getElementById("nextBtn");
const Q1Options = document.querySelectorAll(".Q1Answers");
const answer = 3;
var Q1Value;

Q1Options[0].onclick = () => {
  Q1Value = 1;
};

Q1Options[1].onclick = () => {
  Q1Value = 2;
};

Q1Options[2].onclick = () => {
  Q1Value = 3;
};

Q1Options[3].onclick = () => {
  Q1Value = 4;
};

nextBtn.onclick = () => {
  answer == Q1Value ? console.log("correct") : console.log("incorrect");
};
