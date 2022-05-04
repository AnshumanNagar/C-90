var player_1;
var player_2;

var questionTurn;
var answerTurn;

function onload(){
    player_1 = localStorage.getItem("player_1");
    player_2 = localStorage.getItem("player_2");

    document.getElementById("player1_Name").innerHTML = "Player 1: " + player_1;
    document.getElementById("player2_Name").innerHTML = "Player 2: " + player_2;

    questionTurn = player_1;
    answerTurn = player_2;

    document.getElementById("question_turn").innerHTML = "Question: " + questionTurn;
    document.getElementById("answer_turn").innerHTML = "Answer: " + answerTurn;
}