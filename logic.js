var button1 = document.querySelector("#button1");
var player1display = document.getElementById("player1");
var player1score = 0;


var button2 = document.querySelector("#button2");
var player2display = document.getElementById("player2");
var player2score = 0;

var resetbutton = document.getElementById("reset");



var numInput = document.querySelector("input");
var ParA = document.querySelector("#para");

var winningnum = 5;
var gameOver = false;

button1.addEventListener("click", function () {
    if (!gameOver) {
        player1score++
    }
    if (player1score === winningnum) {
        player1display.classList.add("winner");
        gameOver = true;
    }

    player1display.textContent = player1score;

})

button2.addEventListener("click", function () {
    if (!gameOver) {
        player2score++;

    }
    if (player2score === winningnum) {
        player2display.classList.add("winner");
        gameOver = true;

    }
    player2display.textContent = player2score;
})

resetbutton.addEventListener("click", function () {
  reset();

})
function reset(){
    player1score = 0;
    player1display.textContent = player1score;
    player2score = 0;
    player2display.textContent = player2score;
    gameOver = false;
    player1display.classList.remove("winner");
    player2display.classList.remove("winner");

}

numInput.addEventListener("change", function () {
    ParA.textContent=numInput.value;
    winningnum=Number(numInput.value);
    reset();

})




