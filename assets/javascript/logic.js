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

//created questions on page
for (i = 0; i < quizItems.length; i++) {
  $("#questions-here").append("<h3 id='question-text'>" + quizItems[i].question + "</h3>");
  
//created options for each question
  for (j = 0; j < quizItems[i].options.length; j++) {
    $('#questions-here').append("<input type='radio' class='option-here' name='question-" + i + "' value= " + quizItems[i].options[j] + "' >" + quizItems[i].options[j]);
  

  } //end of j for loop

} //end of i for loop

var cityCard = $(' <div class="card text-white bg-success mb-3" style="max-width: 18rem;">' + 
'<div class="card-header">City/Zip</div>' +
'<div class="card-body">' +
 '<h5 class="card-title">What City/Zip Code are you planning to be in (Must be in Orange County)</h5>' + 
  '<input id="user-input">' + 
'</div>')

$(".zip-code").append(cityCard);



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