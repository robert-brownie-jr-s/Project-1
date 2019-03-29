$("#submit-home").click(function () {
	$(".subcontainer").remove();
	console.log('hello')
})


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

