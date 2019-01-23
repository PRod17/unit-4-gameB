$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var playerTotal = 0;
    var chicagoTotal = 0;

    var $winsText = document.getElementById("wins-text");
    console.log($winsText);
    var $lossesText = document.getElementById("losses-text");
    console.log($lossesText);
    var $chicagoTotal = document.getElementById("chicago-total");
    console.log($chicagoTotal);
    var $playerTotal = document.getElementById("player-total");
    console.log($playerTotal);





    // Initial Variables
    var chicagoTotal = Math.floor(Math.random() * 101) + 19;

    console.log(chicagoTotal);
    $("#chicago-total").append("" + chicagoTotal);




    var chicagoButton1 = Math.floor(Math.random() * 12) + 1;
    console.log(chicagoButton1);

    $("#button-1").on("click", function () {
        console.log(chicagoButton1);
        playerTotal += chicagoButton1;
        $($playerTotal).text(playerTotal);
        match();

    });


    var chicagoButton2 = Math.floor(Math.random() * 12) + 1;
    console.log(chicagoButton2);

    $("#button-2").on("click", function () {
        console.log(chicagoButton2);
        playerTotal += chicagoButton2;
        $($playerTotal).text(playerTotal);
        match();

    });


    var chicagoButton3 = Math.floor(Math.random() * 12) + 1;
    console.log(chicagoButton3);

    $("#button-3").on("click", function () {
        console.log(chicagoButton3);
        playerTotal += chicagoButton3;
        $($playerTotal).text(playerTotal);
        match();

    });


    var chicagoButton4 = Math.floor(Math.random() * 12) + 1;
    console.log(chicagoButton4);

    $("#button-4").on("click", function () {
        console.log(chicagoButton4);
        playerTotal += chicagoButton4;
        $($playerTotal).text(playerTotal);
        match();

    });


    function match() {
        console.log("match function running");

        if (playerTotal === chicagoTotal) {
            wins++;
            console.log(wins + "wins");
            $("#wins-text").text(wins);
            reset();

        }
        else if (playerTotal > chicagoTotal) {
            losses++;
            console.log("losses" + losses);
            $("#losses-text").text(losses);
            reset();
        }
    };


    function reset() {

        playerTotal = 0;
        chicagoTotal = 0;

        $("#chicago-total").empty();

        chicagoTotal = Math.floor(Math.random() * 101) + 19;
        console.log(chicagoTotal);
        // $("#chicago-total").empty();
        $("#chicago-total").append("" + chicagoTotal);

        chicagoButton1 = Math.floor(Math.random() * 12) + 1;
        console.log(chicagoButton1);

        chicagoButton2 = Math.floor(Math.random() * 12) + 1;
        console.log(chicagoButton2);

        chicagoButton3 = Math.floor(Math.random() * 12) + 1;
        console.log(chicagoButton3);

        chicagoButton4 = Math.floor(Math.random() * 12) + 1;
        console.log(chicagoButton4);





    };



});



