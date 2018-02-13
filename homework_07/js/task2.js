var maxNumber = 5;
var firstPrize = 10;
var totalPrize = 0;
var totalAttempts = 3;
var continueGame = false;
var message = confirm("Do you want to play a game?");
if (!message) {
    console.log("You did not become a millionaire");
} else {
    while (message) {
        var winNumber = Math.floor(Math.random() * (maxNumber + 1));
        console.log(winNumber);
        for (var i = 0; i < totalAttempts; i++) {
            var prize;
            switch (i) {
                case 0:
                    prize = firstPrize;
                    break;
                case 1:
                    prize = Math.floor(firstPrize / 2);
                    break;
                case 2:
                    prize = Math.floor(firstPrize / 4);
                    break;
                default:
                    prize = 0;
                    break;
            }
            var userNumber = prompt("Enter a number from 0 to " + maxNumber +
				        "\nAttempts left " + (totalAttempts - i) +
				        "\nTotal prize " + totalPrize + "$" +
				        "\nPossible prize on current attempt " + prize + "$");
            if (!isNaN(userNumber) && winNumber == userNumber) {
                totalPrize += prize;
                console.log("Thank you for a game. Your prize is:" + totalPrize + "$");
                var continueGame = confirm("Do you want to continue a game?");
                continueGame = true;
                break;
            }
        }
        if (continueGame) {
            maxNumber *= 2;
            firstPrize *= 3;
            continueGame = false;
        } else {
            console.log("Thank you for a game. Your prize is:" + totalPrize + "$");
            var continueGame = confirm("Do you want to play again?");
            if (!continueGame)
                break;
        }
    }
}