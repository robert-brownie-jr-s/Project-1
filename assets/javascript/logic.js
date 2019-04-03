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
			var searchArr = [];
			var firstValue = $('input:radio[name=question-0]:checked').val();
			var secondValue = $('input:radio[name=question-1]:checked').val();
			var thirdValue = $('input:radio[name=question-2]:checked').val();
			var fourthValue = $('input:radio[name=question-3]:checked').val();


			// var checked_site_radio = $('input:radio[name=user_site]:checked').val();
			if (firstValue) {
				searchArr.push("Distance: " + firstValue)
			}
			if (secondValue) {
				searchArr.push("Activity: " + secondValue)
			}
			if (thirdValue) {
				searchArr.push("Budget: " + thirdValue)
			}
			if (fourthValue) {
				searchArr.push("Group Size: " + fourthValue)
			}


			//set of the results page



			var zip = $("#user-input").val();
			searchArr.push("Zip Code: " + zip)

			//checking to see if submitBtn is working
			console.log("you clicked submit")
			console.log(searchArr)
			console.log(zip)

			// Load the stores GeoJSON onto the map.
			map.data.loadGeoJson('stores.json');

			// Define the custom marker icons, using the store's "category".
			map.data.setStyle(feature => {
				return {
					icon: {
						url: `img/icon_${feature.getProperty('category')}.png`,
						scaledSize: new google.maps.Size(64, 64)
					}
				};
			});

			const apiKey = 'AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0';
			const infoWindow = new google.maps.InfoWindow();
			infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });

			// Show the information for a store when its marker is clicked.
			map.data.addListener('click', event => {

				const category = event.feature.getProperty('category');
				const name = event.feature.getProperty('name');
				const description = event.feature.getProperty('description');
				const hours = event.feature.getProperty('hours');
				const phone = event.feature.getProperty('phone');
				const position = event.feature.getGeometry().get();
				const content = sanitizeHTML`
	<img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
	<div style="margin-left:220px; margin-bottom:20px;">
	  <h2>${name}</h2><p>${description}</p>
	  <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
	  <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
	</div>
  `;

				infoWindow.setContent(content);
				infoWindow.setPosition(position);
				infoWindow.open(map);
			});

		


			// $.ajax({
			// 	type: "GET",
			// 	url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyCLoFEbhSlB0abkW_Ipic1I18qD7-mtHa0",
			// 	dataType: "text"
			// })
			// 

			$(".quiz-container").remove();
		$("#map").show();
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