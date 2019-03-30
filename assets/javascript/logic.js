$(document).ready(function(){



	$("#submit-home").click(function () {
		$(".subcontainer").remove();
		console.log('hello')

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

for (i = 0; i < quizItems.length; i++) {

	var questionDiv = $("<div class='form-check-input row questions' type='radio'>")
	var questions = '<h2> ' + quizItems[i].question + '?' + '</h2>';
	
	questionDiv.append(questions);
	$("#questions-here").append(questionDiv);

} //end of i for loop

for (j = 0; j < quizItems.length; j++) {

	var optionDiv = $("<div class='form-check-input row options' type='radio'>");
	var options =  '<p>' +	quizItems[j].options + '</p>';
	optionDiv.append(options);

	$("#options-here").append(optionDiv);
	} //end of j for loop

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