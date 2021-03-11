function count_To_Ten() {
    var Digit = ""; //func var set
    var X = 1; //another func var set at 1 to start
    while (X < 11) { 
        Digit += "<br>" + X;
        X++;
    } //while x is less than 11, add one to start func var, show digit
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
} //call digit

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
} //length is number of items in array

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " + 
        Cat_Picture[2] + ".";
} //the numbers are the index numbers with a value

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X)
//let makes variable have block scope which means it can only be accessed within the {}