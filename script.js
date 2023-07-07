var morningScore = 0;
var nightScore = 0;
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",morning);
q1a2.addEventListener("click",night);
q2a1.addEventListener("click",morning);
q2a2.addEventListener("click",night);
q3a1.addEventListener("click",morning);
q3a2.addEventListener("click",night);