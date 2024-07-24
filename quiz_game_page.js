player1_n = localStorage.getItem("p1_name");
player2_n = localStorage.getItem("p2_name");
player1_s = 0;
player2_s = 0;
console.log(player1_n);
document.getElementById("player1_name").innerHTML =player1_n+":";
document.getElementById("player2_name").innerHTML =player2_n+":";
document.getElementById("player1_score").innerHTML = player1_s;
document.getElementById("player2_score").innerHTML = player2_s;
document.getElementById("player_question").innerHTML = "Question turn- "+player1_n;
document.getElementById("player_answer").innerHTML = "Answer Turn- "+player2_n;
function sendButton() {
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    console.log(number1);
    console.log(number2);
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button><br>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_s = player1_s +1;
            document.getElementById("player1_score").innerHTML = player1_s;
        }
        else
        {
            player2_s = player2_s +1;
            document.getElementById("player2_score").innerHTML = player2_s;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_n;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_n;
    }
    if(answer_turn == "player1")
        {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_n;
        }
        else
        {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_n;
        }
        document.getElementById("output").innerHTML="";
}