function My_First_Function() { //Defines and names the function
    var str = "This text is green!"; //The string that appears when action is done to button
    var result = str.fontcolor("green"); //Defines the text color of said string
    document.getElementById("Green_Text") .innerHTML = result; //ID name of the function, use this to call
}