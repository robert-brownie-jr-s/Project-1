$(document).ready(function () {

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
		question: "On a scale from 0 (cheapest) to 4 (most expensive) what is you budget? ",
		options: ["0", "1", "2", "3", "4"],
	},
	{
		question: "How big is your group?",
		options: ["1", "2", "3+"],
	}] //end of quiz items 

	startBtn.click(function (event) {
		event.preventDefault();
		$(".subcontainer").remove();

		var description = $('<div class="instruction-list">' + '<h5 class="instructions"> Answer questions below to find your activity! </h5>' + '</div>')

		$('#questions-here').prepend(description);




		//created questions on page
		for (i = 0; i < quizItems.length; i++) {
			$("#questions-here").append("<h4 id='question-text' class='row-fluid'>" + quizItems[i].question + "</h4>");

			//created options for each question
			for (j = 0; j < quizItems[i].options.length; j++) {
				$('#questions-here').append("<div class='option-div inline '> <input type='radio' class='option-here ' name='question-" + i + "' value= " + quizItems[i].options[j] + "'>" + quizItems[i].options[j]) + "</div>";


			} //end of j (opiton) for loop

		} //end of i (question) for loop

		var city = $('<div class="row-fluid city">' +
			'<h4 class="card-title"> Zip Code(Must be in Orange County)</h4>' +
			'<input id="user-input">' +
			'</div>')

		var submitBtn = $('<div class="row-fluid submit-div"><button type="button" class="btn btn-submit">Submit</button></div>');

		$("#questions-here").append(city, submitBtn);


		//submit function
		submitBtn.on('click', function () {

			//obtain value of radio buttons

			var distance = $('input:radio[name=question-0]:checked').val();
			var activity = $('input:radio[name=question-1]:checked').val();
			var budget = $('input:radio[name=question-2]:checked').val();
			var groupSize = $('input:radio[name=question-3]:checked').val();
			var location = $("#user-input").val();


			//checking to see if submitBtn is working
			console.log("you clicked submit")



			//set of the results page
			$(".quiz-container").remove();
			$("#map").show();

			// START OF API //
			function start() {
				// 2. Initialize the JavaScript client library.
				gapi.client.init({
					'apiKey': 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0',
				}).then(function () {
					// 3. Initialize and make the API request.
					return gapi.client.request({
						'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
					})
				}).then(function (response) {
					console.log(response.result);
				}, function (reason) {
					console.log('Error: ' + reason.result.error.message);
				});
			};
			// 1. Load the JavaScript client library.
			gapi.load('client', start);

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
	firebase.initializeApp(config);






}) //end of document ready function