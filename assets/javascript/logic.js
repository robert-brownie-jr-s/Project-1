$(document).ready(function () {

	var submitBtn = $(".submit");
	var startBtn = $("#start");
	var map, infoWindow;
	
	$("#map").hide();
		

	var quizItems = [{
		question: "How far are you willing to travel?",
		options: ["5 miles", "10 miles", "25 miles"],
	},
	{
		question: "Activity Level",
		options: ["active", "not active "],

	},
	{
		question: "Budget?",
		options: ["expensive", "cheap"],
	},
	{
		question: "How big is your group?",
		options: ["1", "2", "3+"],
	}] //end of quiz items 

	startBtn.click(function (event) {
		event.preventDefault();
		$(".subcontainer").remove();



		//created questions on page
		for (i = 0; i < quizItems.length; i++) {
			$("#questions-here").append("<h3 id='question-text' class='row-fluid'>" + quizItems[i].question + "</h3>");

			//created options for each question
			for (j = 0; j < quizItems[i].options.length; j++) {
				$('#questions-here').append("<div class='option-div inline '> <input type='radio' class='option-here ' name='question-" + i + "' value= " + quizItems[i].options[j] + "'>" + quizItems[i].options[j]) + "</div>";


			} //end of j for loop

		} //end of i for loop

		var city = $('<div class="row-fluid city">' +
			'<h3 class="card-title"> Zip Code(Must be in Orange County)</h3>' +
			'<input id="user-input">' +
			'</div>')

		var qButton = $('<div class="row-fluid submit-div"><button type="button" class="btn btn-info submit">Submit</button></div>');

		$("#questions-here").append(city, qButton);

		console.log(quizItems.question[i])

		// event.stopPropagation();

		//start of submit button function
		$(document).on('click', submitBtn, function () {

			// $(".quiz-container").remove();

			var radioValue;
			//queston-1
			$("input[type='button']").click(function () {
				 radioValue = $("input[name='question-1']:checked").val();
				 if(radioValue){
					alert("Your are a - " + radioValue);
				}
			});

			//queston-2
			$("input[type='button']").click(function () {
				 radioValue = $("input[name='question-2']:checked").val();
				if (radioValue) {
					console.log(radioValue)
				}
			});

			//queston-3
			$("input[type='button']").click(function () {
				 radioValue = $("input[name='question-3']:checked").val();
				if (radioValue) {
					console.log(radioValue)
				}
			});

			//queston-4
			$("input[type='button']").click(function () {
				 radioValue = $("input[name='question-4']:checked").val();
				if (radioValue) {
					console.log(radioValue)
				}
			});


		}) //end of submit function

	}) //end of start function





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