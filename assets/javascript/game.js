
// Variables
// Create an array for words
			var words = ["coded", "game", "hanging", "program"];
			var alphabet = ["a","b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		
// list of letters in the words
			var lettersofwords =[];
// length of word

// varriable for the letters spaces
		var underscore = 0;

 // start game function
   		
  //  		function start() {
  //  			// create an onkey function to pick the letter clicked
  //  			document.onkeyup = function(event) {
  //  				var guess = event.key;
  //  				if (alphabet.indexOf(guess) === -1) 
  //  			 {alert("invalid")}
  //  			 }
  // //call function start 			}
  // start();
   			// body...

// Choose words randomly
var computerguess = words[Math.floor(Math.random() * words.length)];
console.log(computerguess);

// Split the words into letters of what computer chose.
var computerchoice = computerguess.split("");
console.log(computerchoice);
// Loop for the words being split to letters
        for (var i = 0; i < word.length; i++) {
            words[i] = "_";
        }
   


// // Show the number of spaces of the letter split by word compute chosen
// var underscore = computerchoice.length;
// console.log(numberofletterspace);

// Push the letter chosen into the spaces.
		// numberofletterspace.push(computerchoice);
		// console.log()





 // End of Start function
 
