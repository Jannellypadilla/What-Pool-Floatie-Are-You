/*Add your JavaScript here*/

var watermelonScore = 0;
var cherryScore = 0;

var questionCount =0;

var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");

//HTML stored by DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


q1a1.addEventListener("click", watermelon);
q1a2.addEventListener("click", cherry);

q2a1.addEventListener("click", cherry);
q2a2.addEventListener("click", watermelon);

q3a1.addEventListener("click", watermelon);
q3a2.addEventListener("click", cherry);

function watermelon (){
  watermelonScore += 1;
  questionCount += 1;

console.log("questionCount = " + questionCount + "watermelonScore = " + watermelonScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
    
  }
}

function cherry(){
  cherryScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "cherryScore = " + cherryScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();

  }
  
}

function updateResult(){
  if (watermelonScore >= 2){
    result.innerHTML = "Watermelon Floatie!";
    document.getElementById("result_pic1").style.display='block'; 
  console.log("Watermelon Floatie!");
} else if (cherryScore >= 2) {
    result.innerHTML = "Cherry Floatie!";
    document.getElementById("result_pic2").style.display='block'; 
  console.log("Cherry Floatie!");
} else if (cherryScore == 0 && watermelonScore ==0 && questionCount == 0){
  document.getElementById("result_pic2").style.display='none';
 document.getElementById("result_pic1").style.display='none';
  window.location="";
  }
}

function disableButton(button) {
  button.disabled = true;
}

function disableQ1() {
  disableButton(q1a1);
  disableButton(q1a2);
}

function disableQ2() {
  disableButton(q2a1);
  disableButton(q2a2);
}

function disableQ3() {
  disableButton(q3a1);
  disableButton(q3a2);
}

function reset(){
  watermelonScore = 0;
  cherryScore = 0;
  questionCount= 0;
  updateResult();
}

var resets = document.getElementById("jannelly");
resets.addEventListener("click",reset);

