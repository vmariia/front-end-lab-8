var maxNumber = 5;
var firstPrize = 10;
var secondPrize = 5;
var thirdPrize = 2;
var totalPrize = 0;
var totalAtempts = 3;
var continueGame = false;
var leftAtempts;
var message = confirm("Do you want to play a game?");

if (!message) {   
	console.log("You did not become a millionaire");
} else {
	while (true) {
		var winNumber = Math.floor(Math.random() * maxNumber) + 1;
		console.log(winNumber);
		for (var i = 0; i < totalAtempts; i++)
		{
			var prize;
			switch (i)
			{
			case 0:
			    prize = firstPrize;
			    break;
			case 1:
			    prize = secondPrize;
			    break;
			case 2:
			    prize = thirdPrize;
			    break;
			default:
			    prize = 0;
			    break;
			}
			leftAtempts = totalAtempts - i; 
			var userNumber = +prompt("Enter a number from 0 to " + maxNumber + 
				        "\nAttempts left " + leftAtempts +
				        "\nTotal prize " + totalPrize + "$" +
				        "\nPossible prize on current attempt " + prize + "$");
			if (winNumber == userNumber) {
				totalPrize += prize;
				var continueGame = confirm("Do you want to continue a game?");
				continueGame = true;
				break;
			}
		}
		if (continueGame) {
            maxNumber *= 2;
            firstPrize *= 3;
            secondPrize *= 3;
            thirdPrize *= 3;
            continueGame = false;
        } else {
            console.log("Thank you for a game. Your prize is:" + totalPrize + "$");
            var continueGame = confirm("Do you want to continue a game?");
            if (!continueGame)
                break;
        }
	}
}