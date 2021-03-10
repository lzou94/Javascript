document.write("Is " + 3 + " a string or a number?") //Coercion statement, allows me to write numbers with strings and other primitives

function type_of() {
    document.getElementById("type") .innerHTML = typeof 3;
} //typeof tells me what kind of value it is

function equalto() {
    var x = 5==8;
    document.getElementById("equal") .innerHTML = x;
} //== means equal to, returns with true or false

function compare() {
    var y = 6
    document.getElementById("comp") .innerHTML = y === 7-1
} //equal type and equal value

function greater() {
    var x = 90;
    var y = 6;
    document.getElementById("great") .innerHTML = y < x && 10 > 12
} //boolean and, both statements must be true to return true

function or_func () {
    document.getElementById("or") .innerHTML = 10 > 9 || 11 >12
} //or, one or both must be true in order for a true value to return

function not_func() {
    document.getElementById("not") .innerHTML = 10 != 11
} //not. true return would mean a double negative