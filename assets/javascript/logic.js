
$(document).ready(function () {


	var startBtn = $("#start");
	var map, infoWindow, service;
	$("#map").hide()

	var quizItems = [{
		question: "How far are you willing to travel?",
		options: ["5 miles", "10 miles", "25 miles"],
	},
	{
		//change to what type of activity
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

	//map initialization to OC
	var orangeCounty = {
		lat: 33.7175,
		lng: -117.8311
	};
	function initMap() {
		// var orangeCounty = {
		// 	lat: -33.866, 
		// 	lng: 151.196
		// };

		infowindow = new google.maps.InfoWindow();

		map = new google.maps.Map(document.getElementById("map"), {
			center: orangeCounty,
			zoom: 10
		});

	};

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
			//converts distance in meters to miles
			distance = 1609.34 * distance;
			var activity = $('input:radio[name=question-1]:checked').val();
			var budget = $('input:radio[name=question-2]:checked').val();
			var groupSize = $('input:radio[name=question-3]:checked').val();
			var location = $("#user-input").val();

			// var request = {
			// 	radius: distance,
			// 	minPriceLevel: budget,
			// 	maxPriceLevel: budget
			// };
			// "&radius=" + distance + "&minPriceLevel=" + budget + "&maxPriceLevel=" + budget;

			//checking to see if submitBtn is working
			console.log("you clicked submit")

			//set of the results page
			$(".quiz-container").remove();
			$("#map").show();



			initMap();
			var service = new google.maps.places.PlacesService(map);



			// Create the places service.

			// var getNextPage = null;
			// var moreButton = document.getElementById('more');
			// moreButton.onclick = function() {
			//   moreButton.disabled = true;
			//   if (getNextPage) getNextPage();
			// };

			// Perform a nearby search.
			service.nearbySearch(
				{
					location: orangeCounty,
					radius: distance,
					type: ['store']
				},
				function (results, status, pagination) {
					if (status !== 'OK') return;

					createMarkers(results);
					//   moreButton.disabled = !pagination.hasNextPage;
					getNextPage = pagination.hasNextPage && function () {
						pagination.nextPage();
					};
				});



			function createMarkers(places) {
				var bounds = new google.maps.LatLngBounds();
				var placesList = document.getElementById('places');

				for (var i = 0, place; place = places[i]; i++) {
					var image = {
						url: place.icon,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
					};

					var marker = new google.maps.Marker({
						map: map,
						icon: image,
						title: place.name,
						position: place.geometry.location
					})
				}
			}

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


	$("#contact").click(function (event) {
		event.preventDefault();
		$(".subcontainer").remove();
		$(".quiz-container").remove();
		$("#map").remove();
		$("#top-container").remove();

		var contact = $('<div id="top-container" class="container">' + '<section class="main-section">' + '<h1 id="contact-name"> Contact </h1>' + '<form id="contact-form">' + '<div class="form-group">' + '<label for="name">Name</label>' + '<input type="text" class="form-control" id="name">' + '</div>' + '<div class="form-group">' + '<label for="email">Email</label>' + '<input type="email" class="form-control" id="email">' + '</div>' + '<div class="form-group">' + '<label for="message">Message</label>' + '<textarea class="form-control" id="message" rows="7">' + '</textarea>' + '</div>' + '<input type="submit">' + '</form>' + '</section>' + '</div>');
		$('.container-fluid').append(contact);


	});


}) //end of document ready function