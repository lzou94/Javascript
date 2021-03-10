function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";

} //Conditional operator. If first statement is true then left side. If not then right side

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} //Constructor of a class function. Vehicle is the class- Make, Model, Year, and Color are descriptors?
//this refers to owner object here
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //creates new variables with the class constructor func
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
} //Displays the variable given the class construct via owner object (Vehicle?) Can someone tell me if I'm understanding this correctly

function count_Function() {
    document.getElementById("Nested_Function") .innerHTML = Count()
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    } 
} //function within a function. The nested func takes the starting point and adds one. since the HTML will call and display the count func, therefore that's the one thats displayed.