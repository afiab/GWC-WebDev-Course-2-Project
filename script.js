var morningScore = 0;
var nightScore = 0;
var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", morning);
q1a2.addEventListener("click", night);
q2a1.addEventListener("click", morning);
q2a2.addEventListener("click", night);
q3a1.addEventListener("click", morning);
q3a2.addEventListener("click", night);

restart.addEventListener("click", reset);

function reset() {
  result.innerHTML = "Your result is...";
  restart.innerHTML = "What kind of person am I?"
  morningScore = 0;
  nightScore = 0;
  questionCount = 0;
  console.log("Question count: " + questionCount);
  console.log("nightScore: " + nightScore);
}

function morning() {
  morningScore += 1;
  questionCount += 1;

  console.log("Question count: " + questionCount);
  console.log("morningScore: " + morningScore);

  if (questionCount >= 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}

function updateResult() {
  if (morningScore >= 2) {
    result.innerHTML = "You're a morning person!";
    restart.innerHTML = "Restart"
    console.log("You are a morning person!");
  } else if (nightScore >= 2) {
    result.innerHTML = "You're a night person!";
    restart.innerHTML = "Restart"
    console.log("You are a night person!");
  }
}

function night() {
  nightScore += 1;
  questionCount += 1;

  console.log("Question count: " + questionCount);
  console.log("nightScore: " + nightScore);

  if (questionCount >= 3) {
    console.log("The quiz is done!");
    updateResult();
  }

}