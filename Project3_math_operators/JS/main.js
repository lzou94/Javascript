function first_math_func () {
    var addition = 2 + 2;
    document.getElementById("Math") .innerHTML = "2 + 2 = " + addition
}

function subtraction_func () {
    var Subtraction = 5 -2;
    document.getElementById("Math2") .innerHTML = "5 - 2 = " + Subtraction
}

function multi_func () {
    var simple_Math1 = 6 * 8;
    document.getElementById("Math3") .innerHTML = "6 * 8 = " + simple_Math1
}


function more_Math() {
    var simple_Math3 = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5") .innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math3
}

function modulus_Operator() {
    var simple_Math4 = 25 % 6;
    document.getElementById("Math6") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math4
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7") .innerHTML = -x;
}

function rando_num() {
    document.getElementById("Math8") .innerHTML = Math.random() 
}

function increment_plus() {
    var z = 5;
    z++
    document.getElementById("Math9") .innerHTML = z++
}

function increment_decrease() {
    var y = 5;
    y--
    document.getElementById("Math10") .innerHTML = y--
}
