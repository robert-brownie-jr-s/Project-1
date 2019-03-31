$(document).ready(function(){

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
  

	$("#submit-home").click(function () {
		$(".subcontainer").remove();
		console.log('hello')


//created questions on page
for (i = 0; i < quizItems.length; i++) {
  $("#questions-here").append("<h3 id='question-text' class='row-fluid'>" + quizItems[i].question + "</h3>");
  
//created options for each question
  for (j = 0; j < quizItems[i].options.length; j++) {
    $('#questions-here').append("<div class='option-div inline row-fluid'> <input type='radio' class='option-here ' name='question-" + i + "' value= " + quizItems[i].options[j] + "'> </div>" + quizItems[i].options[j]);
  

  } //end of j for loop

} //end of i for loop

var city = $('<div class="row-fluid city">' +
 '<h5 class="card-title">What City/Zip Code are you planning to be in (Must be in Orange County)</h5>' + 
  '<input id="user-input">' + 
'</div>')

$("#questions-here").append(city);



}) //end of submit function


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0VKHpsqWkKic4BZ4Sc8ArYp7WdLvQ-Vc",
    authDomain: "project1-c10f1.firebaseapp.com",
    databaseURL: "https://project1-c10f1.firebaseio.com",
    projectId: "project1-c10f1",
    storageBucket: "project1-c10f1.appspot.com",
    messagingSenderId: "696380136176"
  };
  firebase.initializeApp(config);;



}) //end of document ready function