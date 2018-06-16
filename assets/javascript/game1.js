// variables
var targetNumber;
// var counter = 0;

// need to look at random lottery number to create a variable for number options for crystals and number options for guessed number

$(document).ready(function () {
   
        // generate a random number at the start of the game between 19 and 120

        targetNumber = 0;
        var max = 120;
        var min = 19;
        targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(targetNumber);
        $("#number-to-guess").text(targetNumber);

        //create random number assigned to each crystal between 1 and 12 on click

        var num1 = Math.floor(Math.random() * (11 + 1));
        var num2 = Math.floor(Math.random() * 11 + 1);
        var num3 = Math.floor(Math.random() * 11 + 1);
        var num4 = Math.floor(Math.random() * 11 + 1);
    
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    $(".red-crystal").on("click", function () {
        console.log("Number 1 " + num1);
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $("#userTotal").text(userTotal);
        //win/lose condition
        if (userTotal == targetNumber) {
            winFunction();
        } else if (userTotal > targetNumber) {
            loseFunction();
        }

    })
    $(".blue-crystal").on("click", function () {
        console.log("Number 2 " + num2);
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $("#userTotal").text(userTotal);
        //win/lose condition
        if (userTotal == targetNumber) {
            winFunction();
        } else if (userTotal > targetNumber) {
            loseFunction();
        }

    })
    $(".green-crystal").on("click", function () {
        console.log("Number 3 " + num3);
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $("#userTotal").text(userTotal);
        //win/lose condition
        if (userTotal == targetNumber) {
            winFunction();
        } else if (userTotal > targetNumber) {
            loseFunction();
        }

    })

    // $(".crystal").cursor("isHover");

    $(".yellow-crystal").on("click", function () {
        console.log("Number 4 " + num4);
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $("#userTotal").text(userTotal);
        //win/lose condition
        if (userTotal == targetNumber) {
            winFunction();
        } else if (userTotal > targetNumber) {
            loseFunction();
        }

    })

    function winFunction() {
        alert("You Win!");
        wins++;
        reset();
    }

    function loseFunction() {
        alert("You Lose!");
        losses++;
        reset();
    }

    function reset() {

    }
})