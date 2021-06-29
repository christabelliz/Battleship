var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
	guess = prompt("Ready, steady, go! (Enter a number between 0-6):");
	if (guess < 0 || guess > 6) {
		alert(" That's a strange definition of number in range 0-6!");
		} else {
			guesses = guesses + 1;
			if (guess == location1 || guess == location2 || guess == location3) {
				alert ("Ladys and Gentlemen, it's a HIT!")
				hits = hits + 1; 
				if (hits == 3) {
					isSunk = true;
					alert ("Damn You! You sunk my ship!")
				}
			} else {
				alert ("Missed...")
			}
		}
	}
var stats = "You needed " + guesses + " attempts to sink a ship, " + "your effectivness is: " + (3/guesses) + ".";
alert (stats);
