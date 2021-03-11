var slideIndex = 1;
showSlides(slideIndex); 
//Starts the slides and names their positioning

//Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}


//thumbnail image controls
function currentSlide() {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} //if n is greater than number of slides, then returns to 1?
    if (n < 1) {slideIndex = slides.length} //if n is less than the starting slide then set as number of slides, these two if statements create a loop
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } //display slide at current slide
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

