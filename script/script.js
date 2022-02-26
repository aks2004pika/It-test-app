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

var question1SwapAnim = {
  animation: "question1Anim .6s ease-out forwards",
};

var question2SwapAnim = {
  animation: "question2Anim .6s ease-out forwards",
};

var question3SwapAnim = {
  animation: "question3Anim .6s ease-out forwards",
};

var question1SwapAnimRe = {
  animation: "question1AnimRe .6s ease-out forwards",
};

var question2SwapAnimRe = {
  animation: "question2AnimRe .6s ease-out forwards",
};

var question3SwapAnimRe = {
  animation: "question3AnimRe .6s ease-out forwards",
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

// Questions swap mechanics
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const questionBlock = document.querySelector(".questionBlock");
const submitBlock = document.querySelector(".submitBg");
var nextClickCount = 0;
var previousClickCount = 0;

nextBtn.onclick = () => {
  nextClickCount++;
  previousClickCount--;
  switch (nextClickCount) {
    case 1:
      Object.assign(questionBlock.style, question1SwapAnim);
      break;
    case 2:
      Object.assign(questionBlock.style, question2SwapAnim);
      break;
    case 3:
      Object.assign(questionBlock.style, question3SwapAnim);
      break;
    case 4:
      Object.assign(submitBlock.style, rulesAnim);
  }
};

previousBtn.onclick = () => {
  previousClickCount++;
  nextClickCount--;
  switch (previousClickCount) {
    case 0:
      Object.assign(questionBlock.style, question1SwapAnimRe);
      break;
    case -1:
      Object.assign(questionBlock.style, question2SwapAnimRe);
      break;
    case -2:
      Object.assign(questionBlock.style, question3SwapAnimRe);
      break;
  }
};

// Game Scoring
const Q1Options = document.querySelectorAll(".Q1Answers");
const Q2Options = document.querySelectorAll(".Q2Answers");
const Q3Options = document.querySelectorAll(".Q3Answers");
const Q4Options = document.querySelectorAll(".Q4Answers");
const submitBtn = document.querySelector(".submitBtn");
const answers = [3, 1, 2, 1];
var Q1Value = 0;
var Q2Value = 0;
var Q3Value = 0;
var Q4Value = 0;
var score = 0;

function Q1ValueHandler() {
  Q1Options[0].onclick = () => {
    Q1Value = 1;
    return Q1Value;
  };
  Q1Options[1].onclick = () => {
    Q1Value = 2;
    return Q1Value;
  };
  Q1Options[2].onclick = () => {
    Q1Value = 3;
    return Q1Value;
  };
  Q1Options[3].onclick = () => {
    Q1Value = 4;
    return Q1Value;
  };
  return Q1Value;
}

function Q2ValueHandler() {
  Q2Options[0].onclick = () => {
    Q2Value = 1;
    return Q2Value;
  };
  Q2Options[1].onclick = () => {
    Q2Value = 2;
    return Q2Value;
  };
  Q2Options[2].onclick = () => {
    Q2Value = 3;
    return Q2Value;
  };
  Q2Options[3].onclick = () => {
    Q2Value = 4;
    return Q2Value;
  };
  return Q2Value;
}

function Q3ValueHandler() {
  Q3Options[0].onclick = () => {
    Q3Value = 1;
    return Q3Value;
  };
  Q3Options[1].onclick = () => {
    Q3Value = 2;
    return Q3Value;
  };
  Q3Options[2].onclick = () => {
    Q3Value = 3;
    return Q3Value;
  };
  Q3Options[3].onclick = () => {
    Q3Value = 4;
    return Q3Value;
  };
  return Q3Value;
}

function Q4ValueHandler() {
  Q4Options[0].onclick = () => {
    Q4Value = 1;
    return Q4Value;
  };
  Q4Options[1].onclick = () => {
    Q4Value = 2;
    return Q4Value;
  };
  Q4Options[2].onclick = () => {
    Q4Value = 3;
    return Q4Value;
  };
  Q4Options[3].onclick = () => {
    Q4Value = 4;
    return Q4Value;
  };
  return Q4Value;
}

Q1ValueHandler();
Q2ValueHandler();
Q3ValueHandler();
Q4ValueHandler();

submitBtn.onclick = () => {
  calculateScore();
  Q1Value = 0;
  Q2Value = 0;
  Q3Value = 0;
  Q4Value = 0;
};

function calculateScore() {
  var userAnswers = [Q1Value, Q2Value, Q3Value, Q4Value];

  if (answers.length != userAnswers.length) {
    return false;
  } else {
    for (var i = 0; i < answers.length; i++) {
      answers[i] != userAnswers[i] ? score : score++;
    }

    console.log(`${score}/4`);
  }
}
