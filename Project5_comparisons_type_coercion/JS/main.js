document.write("Is " + 3 + " a string or a number?")

function type_of() {
    document.getElementById("type") .innerHTML = typeof 3;
}

function equalto() {
    var x = 5==8;
    document.getElementById("equal") .innerHTML = x;
}

function compare() {
    var y = 6
    document.getElementById("comp") .innerHTML = y === 7-1
}

function greater() {
    var x = 90;
    var y = 6;
    document.getElementById("great") .innerHTML = y < x && 10 > 12
}

function or_func () {
    document.getElementById("or") .innerHTML = 10 > 9 || 11 >12
}

function not_func() {
    document.getElementById("not") .innerHTML = 10 != 11
}