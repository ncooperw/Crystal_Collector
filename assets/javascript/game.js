//functions

//User get a random number between 19 and 120 and has to guess -- math random
//there are 4 crystals with a random value 1 - 12 attached -- 4 variable with math random
// user presses the crystals and the value adds in a userTotal section -- variable userTotal
//if user goes over the number to guess they lose and losses total increases write "You lost!" to html -- variable wins and losses
//if user gets the number they win and wins increases write "You won!" to the html
// game resets with win or loss

//variables
var targetNumber;
var wins = 0;
var losses = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userTotal;

//function to start game
$(document).ready(function () {
    function gameStart() {

        $("#message").text("");
        $("#userTotal").text("");
        //Create target number for user to aim for
        userTotal = 0;
        var max = 120;
        var min = 19;
        targetNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("target number " + targetNumber);
        $("#number-to-guess").text(targetNumber);
        //Create random value for each crystal
        var crystMax = 12;
        var crystMin = 1;
        crystalOne = Math.floor(Math.random() * (crystMax - crystMin + 1) + crystMin);
        crystalTwo = Math.floor(Math.random() * (crystMax - crystMin + 1) + crystMin);
        crystalThree = Math.floor(Math.random() * (crystMax - crystMin + 1) + crystMin);
        crystalFour = Math.floor(Math.random() * (crystMax - crystMin + 1) + crystMin);

        console.log(crystalOne);
        console.log(crystalTwo);
        console.log(crystalThree);
        console.log(crystalFour);

        $(".red-crystal").on("click", function () {

            userTotal = userTotal + crystalOne;
            console.log("User Total " + userTotal);
            $("#userTotal").text(userTotal);
            checkScore();
        })
        $(".red-crystal").on("click", function () {

            userTotal = userTotal + crystalOne;
            console.log("User Total " + userTotal);
            $("#userTotal").text(userTotal);
            checkScore();
        })
        $(".blue-crystal").on("click", function () {

            userTotal = userTotal + crystalTwo;
            console.log("User Total " + userTotal);
            $("#userTotal").text(userTotal);
            checkScore();
        })
        $(".green-crystal").on("click", function () {

            userTotal = userTotal + crystalThree;
            console.log("User Total " + userTotal);
            $("#userTotal").text(userTotal);
            checkScore();
        })
        $(".yellow-crystal").on("click", function () {

            userTotal = userTotal + crystalFour;
            console.log("User Total " + userTotal);
            $("#userTotal").text(userTotal);
            checkScore();
        })
    }

    function checkScore() {
        if (userTotal === targetNumber) {
            wins++;
            $("#wins").text(wins);
            $("#message").text("You Won!");
            // alert("You won!");
            gameStart();
        };
        if (userTotal > targetNumber) {
            losses++;
            $("#losses").text(losses);
            $("#message").text("You Lost!");
            // alert("You lost!");
            gameStart();
        }
    }


    gameStart();
});