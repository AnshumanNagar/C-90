function addUser(){
    var player1 = document.getElementById("player1_Name").value;
    var player2 = document.getElementById("player2_Name").value;

    localStorage.setItem("player_1", player1);
    localStorage.setItem("player_2", player2);

    window.location = "game_page.html";
}