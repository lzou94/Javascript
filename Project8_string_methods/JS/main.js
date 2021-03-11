function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
} //joins strings together

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice") .innerHTML = Section;
} //splits strings

Sentence = "My name is Lisa Zou"
document.write(Sentence.toUpperCase() + "<br>")
document.write(Sentence.search("Lisa") + "<br>")
//returns strings to uppercase

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string") .innerHTML = x.toString();
}
//returns things into a string

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision") .innerHTML = x.toPrecision(10);
}
//returns number to specified number of characters, does round

var num = 3.14159265
document.write(num.toFixed(4) + "<br>")
//the number specified in the toFixed is the number of decimal places it will return the number to. Also rounds.

//valueOf() returns the primitive value of number