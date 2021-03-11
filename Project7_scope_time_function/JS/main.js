var x = 10
function Add_numbers_1() {
    document.write(15 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2(); //x is a global variable here because it is delcared outside the functions

function local_var() {
    var y = 10
    document.write(y + 20)
}
local_var(); //y is a local variable because it is defined within the function

function error_func() {
    console.log(y + 20)
}
error_func(); //console will return with error because y was previously defined, but only locally
function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("Greeting") .innerHTML = "How are you today?";
    }
}//if the time is before 6pm then it returns string

function my_Own() {
    if(10 < 20) {
        document.getElementById("Correct") .innerHTML = "Congratulations it worked";
    }
}//returns string if the statement is true, and it is

function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote;
}//else returns if if statement is false

function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }//conditional and statement
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    } //conditional and statement and it must be between 12pm and 6pm
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}