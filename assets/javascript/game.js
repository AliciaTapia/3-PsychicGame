


// variables

var wins = 0;
var loses = 0;
var sofar = [];
var guessCounter = 10;
var letters = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k","l","m", "n", "o", "p", "q","r","s", "t", "u", "v", "w","x","y","z"];


alert("guess what leeter am i thinking of ...")
//Lets allow the computer to choose a random letter....
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        	console.log(userGuess);
        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
     
        guessCounter --;
		// if(userGuess === randomLetter){
		// 	wins++;
		// 	reset();
		// }
		console.log(guessCounter);
	// when user guessed incorrectly, log letter guessed
		// else if(guessesLeft != 0) { 
		// 	sofar.push(userGuess);
		// 	guessesLeft--;
		// } 

		// ESTE ES IMPORTANTE ENTENDER QUE EN ESTE CASO USER GUESS ESTA DICIENDO POR MEDIO DE "PUSH" QUE SE ALMACENE EN VARIABLE SOFAR
sofar.push(userGuess);

	// when user has no more guesses left
		// else if(guessesLeft == 0){
		// 	loses++;
		// 	var gameOver = confirm("Game over! Try again?");
		// 	// if user hits OK, reset game
		// 	if(gameOver){
		// 		reset();
		// 	} 
		// }
  //   }

//VERIFICA QUE LA LETRA QUE EL USUARIO ESCOGIO SEA LA MISMA QUE LA QUE LA COMPU ESCOGIO ...

if(userGuess===randomLetter){
	// si la letra que el usuario escogio es === (igual a) la letra random de la compu entonces aumenta los ganados...
	wins ++;
}
else if(guessCounter ===0){
	// y aqui dice que en dado caso que no son iguales y que ademas ya no nos quedan intentos
	//por que teniamos 10 para empezar pues que ya perdiste ....
loses++;

// var gameOver = confirm("Game over! Try again?");
// 			// if user hits OK, reset game
// 			if(gameOver){
// 				reset();
// 			} 
reset();

	}

	document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#loses").innerHTML = loses;
		document.querySelector("#guessesLeft").innerHTML = guessCounter;
		document.querySelector("#soFar").innerHTML = sofar;

}



// function reset when user guesses the correct letter
function reset(){
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	var wins = 0;
	var loses = 0;
	var sofar = [];
	var guessCounter = 10;
}



	// live tallying of wins vs losses and letters guessed so far
		// var html = "<h1>The Psychic Game!</h1>" + 
		// "<p>Guess the letter I'm thinking" +
		// "<p>Wins: " + wins + "</p>" +
		// "<p>Losses: " + loses + "</p>" +
		// "<p>Guesses left: " + guessesLeft + "</p>" +
		// "<p>Guesses so far: " + sofar +"</p>";

		
		
 
	