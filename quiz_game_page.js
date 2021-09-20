function Send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_answer = "<center> <span> <h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "  <br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-primary' onclick='check()'> Check </button> </span> </center>";
    row= question_answer + input_box + check_button;
    document.getElementById("Output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}