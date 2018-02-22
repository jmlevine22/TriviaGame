

$(document).ready(function(){


	$("#button").click(function() {

		

		
		//sets inital BUTTON timer notification
		$("#button").html("You have 60 seconds!");
		$(":button").css("background-color", "green");

		//$("#button").prop("disabled", true);


		//Sets static variables 
		var questionTitles = ["Question 1:", "Question 2:", "Question 3:"];
		var questions = ["What is the physical phenomenon which occurs when pairs or groups of particles are generated or interact in ways such that the quantum state of each particle cannot be described independently of the state of the other(s), even when the particles are separated by a large distance?", "That radiation and matter have properties both of particles and of waves is called what?", "When two particles are entangled and it is observed that one has its spin up, how long does it take for the other’s spin to be down?"];
		


		//appends first question 
 		$("#questionTitle").html(questionTitles[0]);
 		$("#questionBody").html(questions[0]);


 		//sets non-static variable 
 		var questionOneAnswers = ["Quantum Entanglement", " Schrodinger's Equation", "Higgs Boson", "Refraction"]; 

 		
 		for (var i=0; i < questionOneAnswers.length; i++) {

 			var radioOne = document.createElement("INPUT");
 			radioOne.setAttribute("type", "radio");
 			radioOne.setAttribute("name", "answer");



 				if (questionOneAnswers[i] == questionOneAnswers[0]) {
 					radioOne.setAttribute("id", "right"); 
 				};

 				if (questionOneAnswers[i]!== questionOneAnswers[0]) {
 				radioOne.setAttribute("id", "wrong");
 			}


			document.getElementById("answerChoice").appendChild(radioOne);
 			$("#answerChoice").append(questionOneAnswers[i]);

 			
 			
		 };  //end of for loop 

		 /*var keepAnswer = (radioOne).click();

 			if (keepAnswer == radioOne.attr("id", "right")) {
 				alert("winnder");
 			}*/
		

		var button = document.createElement("button");
			button.innerHTML = "Submit";

		var body = document.getElementsByTagName("body")[0];
			body.appendChild(button);


		button.addEventListener ("click", function() {


		//apends next set of question titles and body 
		$("#questionTitle").html(questionTitles[1]);
 		$("#questionBody").html(questions[1]);

		

 		var questionTwoAnswers = ["Mixing", "Entanglement", "Wave-Partical Duality", "Refraction"]; 

 		$("#answerChoice").empty()
 		for (var i=0; i < questionTwoAnswers.length; i++) {

 			var radioTwo = document.createElement("INPUT");
 			radioTwo.setAttribute("type", "radio");
 			radioTwo.setAttribute("name", "answer");

 			if (questionTwoAnswers[i] == questionOneAnswers[2]) {
 					radioOne.setAttribute("id", "right"); 
 				};

 				if (questionTwoAnswers[i]!== questionTwoAnswers[0]) {
 				radioOne.setAttribute("id", "wrong");
 			}

			document.getElementById("answerChoice").appendChild(radioTwo);
 			$("#answerChoice").append(questionTwoAnswers[i]);


 		}; //end for loop 


 		//START OF QUESTION 3
 		button.addEventListener ("click", function() {

		$("#questionTitle").html(questionTitles[2]);
 		$("#questionBody").html(questions[2]);

 		var questionThreeAnswers = ["1 microsecond", "Instantaneously", "The time it takes for light to travel bewteen them", "1 nanosecond"]; 

 		$("#answerChoice").empty()
 		for (var i=0; i < questionThreeAnswers.length; i++) {


 			var radioThree = document.createElement("INPUT");
 			radioThree.setAttribute("type", "radio");
 			radioThree.setAttribute("name", "answer");

 			if (questionThreeAnswers[i] == questionThreeAnswers[1]) {
 					radioOne.setAttribute("id", "right"); 
 				};

 				if (questionThreeAnswers[i]!== questionThreeAnswers[1]) {
 				radioOne.setAttribute("id", "wrong");
 			}

			document.getElementById("answerChoice").appendChild(radioThree);
 			$("#answerChoice").append(questionThreeAnswers[i]);

 		};

 		button.addEventListener ("click", function() {

 		//if ( $( radioThree[i] ).is( ":checked" ) && $(radioThree[i]) == $(questionThreeAnswers[1]) ) {
 			//alert("you win"); {
 			//	else alert("you lose");
 			//}
 	//}
 		//} 
 		$("#button").html("Results");
		$(":button").css("background-color", "blue");
		button.innerHTML = "Restart";

		$("#question").html("Game Over");

		
	

		clearTimeout(thirtySeconds);
		clearTimeout(sixtySeconds);
		clearTimeout(tenSeconds);



	});
 	});


	}); //end whole button click function





	//sets TIMERS and names corresponding/subsequent FUNCTIONS 
	
	setTimeout(sixtySeconds, 1000 * 60);
		setTimeout(thirtySeconds, 1000 * 30);
		setTimeout(tenSeconds, 1000 * 50);
		setTimeout(eachQuestion, 1000 * 20);
	
		
	function thirtySeconds() {
		$("#button").html("You have 30 seconds!");
		$(":button").css("background-color", "yellow");
	};


		
		
	function tenSeconds() {
		$("#button").html("You have 10 seconds!");
		$(":button").css("background-color", "red");
	};


  
		
	function sixtySeconds() {

		$("#button").html("Results");
		$(":button").css("background-color", "blue");
		button.innerHTML = "Restart";

		$("#question").html("Game Over");


		

		
		//var correctAnswers = [questionOneAnswers[0], questionTwoAnswers[2], questionThreeAnswers[1]];	
		//var radioButtons = document.getElementsByName("answer");
		/*for (var x = 0; x < radioButtons.length; x++); {
			if (radioButtons[x].checked == true) && (radioButtons[x].checked) == (correctAnswers[i]) {
				alert("you win");
			};

		}; //end for loop
		*/

	
	





	
	/*function results () {
	for questionOneAnswers () {
		if (answerChoice[0]) {
			alert("you're right");
		};
	};
	}; 

	var results = ""; */

/*function check () {

	for questionOneAnswers {
		if document.getElementsById("answerChoice[0]").checked = "true"
} alert("correct")
}; */

}; //end of function sixtySeconds 


}); //end of button onclick function

});  //ending brackets for document.ready function 


//QUESTOINS: adding multiple onclick submit button & timeout options for each question

