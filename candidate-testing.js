const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";

let correctAnswer = "Sally Ride";

let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName(candidateName) {
    console.log("Enter your name: ");
candidateName = this.candidateName 
}
  // TODO 1.1b: Ask for candidate's name //



function askQuestion(question){
    console.log("Who was the first American woman in space? Please type her name. ");
candidateAnswer = this.question

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}


// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswer) {
  if (correctAnswer) {
    console.log("Correct! ");
  } else { 
    console.log("Incorrect. ") ;
  }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}
function runProgram() {
  askForName(this.candidateName);
  // TODO 1.1c: Greet candidate using their name //
  console.log("\nHello," + this.candidateName + ". Good luck with your quiz!");
  askQuestion(this.question);
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};