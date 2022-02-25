// First Stage
const firstBtn = document.getElementById("startBtn");
const rulesSection = document.querySelector(".rulesSection");
const rulesCancelBtn = document.getElementById("rulesCancelBtn");

// animattions
var rulesAnim = {
  animation: "rulesOpenAnim .3s ease-out forwards",
};

var rulesAnimReverse = {
  animation: "rulesCloseAnim .3s ease-out forwards",
};

// Actions
firstBtn.onclick = () => {
  Object.assign(rulesSection.style, rulesAnim);
};

rulesCancelBtn.onclick = () => {
  Object.assign(rulesSection.style, rulesAnimReverse);
};
