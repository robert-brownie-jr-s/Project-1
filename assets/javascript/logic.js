$(document).ready(function(){



function quizQuestions () {
var quizItems = [{
  question: "How far are you willing to travel?",
  options: ["5 miles", "10 miles","25 miles"],
},
{
  question: "Do you want to be active?",
  options: ["yes", "no"],

},
{
  question: "Do you want to spend money?",
  options: ["yes", "no"],
},
{
  question: "How big is you group?",
  options: ["1", "2" , "3 or more"],
}] //end of quiz items 


 function quizPage() {
	var quizDiv = $("<div>");
	quizItems.attr('class', 'quiz-items');
	quizDiv.append(quizItems.question);
	quizDiv.append(quizItems.options);

	

 } //end of quizPage function
 quizPage();
 $("#submit-home").trigger('click');
} //end of questions function

$("#submit-home").click(function () {
  $(".subcontainer").remove();
  console.log('hello')

 
quizPage();
}) //end of submit function

/*
// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0VKHpsqWkKic4BZ4Sc8ArYp7WdLvQ-Vc",
  authDomain: "project1-c10f1.firebaseapp.com",
  databaseURL: "https://project1-c10f1.firebaseio.com/",
  projectId: "project1-c10f1",
  storageBucket: "project1-c10f1.appspot.com",
  messagingSenderId: "696380136176"
};
firebase.initializeApp(config);
*/


}) //end of document ready function