$(document).ready(function () {

	var startBtn = $("#start");
	var map, infoWindow;

	$("#map").remove();


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


			} //end of j (opiton) for loop

		} //end of i (question) for loop


		var searchArr = [];
		//queston-1
		$("input[name='question-0'").click(function () {
			var radioValue = $("input[type='radio']:checked").val();
			if (radioValue) {
				console.log("radio click: " + radioValue);
				searchArr.push(radioValue)
				console.log(searchArr)

			}

		}); //end of radion value function
		
		$("input[name='question-1'").click(function () {
			 var radioValue = $("input[type='radio']:checked").val();
			if (radioValue) {
				console.log("radio click: " + radioValue);
				searchArr.push($("input[type='radio']:checked").val())
				console.log(searchArr)

			}

		});

		$("input[name='question-2'").click(function () {
			var radioValue = $("input[type='radio']:checked").val();
		   if (radioValue) {
			   console.log("radio click: " + radioValue);
			   searchArr.push($("input[type='radio']:checked").val())
			   console.log(searchArr)

		   }

	   });

	   $("input[name='question-3'").click(function () {
		var radioValue = $("input[type='radio']:checked").val();
	   if (radioValue) {
		   console.log("radio click: " + radioValue);
		   searchArr.push($("input[type='radio']:checked").val())
		   console.log(searchArr)

	   }

   });


		var city = $('<div class="row-fluid city">' +
			'<h3 class="card-title"> Zip Code(Must be in Orange County)</h3>' +
			'<input id="user-input">' +
			'</div>')

		var submitBtn = $('<div class="row-fluid submit-div"><button type="button" class="btn btn-info submit">Submit</button></div>');

		$("#questions-here").append(city, submitBtn);


		//submit function
		submitBtn.on('click', function () {
			var zip = $("#user-input").val();
			searchArr.push(zip)
			console.log("you clicked submit")
			console.log(searchArr)

			// $(".quiz-container").remove();

		}) //end of submit function


	}) //end of start function

	//start of submit button function



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