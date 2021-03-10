function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}

function my_Dictionary1() {
    var Animal = {
        Species:"Cat",
        Color:"Black",
        Breed:"Tabby",
        Age: 4,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary1") .innerHTML = Animal.Sound;
}