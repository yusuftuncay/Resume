/* Dark Mode */
function DarkMode() {
    document.body.classList.toggle("dark-mode"); /* Body */
    document.getElementsByClassName("footer")[0].classList.toggle("dark-mode"); /* Footer */

    var progressBars = document.querySelectorAll('.w3-light-grey, .w3-dark-grey'); /* All Progress Bars */
    var shadows = document.querySelectorAll('.box-shadow, .box-shadow-dark'); /* All Box Shadows */
    var hrElements = document.querySelectorAll('hr');

    /* Box Shadows */
    for (var i = 0; i < shadows.length; i++) {
        if (shadows[i].classList.contains("box-shadow")) {
            shadows[i].classList.remove("box-shadow");
            shadows[i].classList.add("box-shadow-dark");
        } 
        else if (shadows[i].classList.contains("box-shadow-dark")) {
            shadows[i].classList.remove("box-shadow-dark");
            shadows[i].classList.add("box-shadow");
        }
    }

    /* Progress Bar */
    for (var i = 0; i < progressBars.length; i++) {
        if (progressBars[i].classList.contains("w3-light-grey")) {
            progressBars[i].classList.remove("w3-light-grey");
            progressBars[i].classList.add("w3-dark-grey");
        } 
        else if (progressBars[i].classList.contains("w3-dark-grey")) {
            progressBars[i].classList.remove("w3-dark-grey");
            progressBars[i].classList.add("w3-light-grey");
        }
    }

    /* HR */
    for (var i = 0; i < hrElements.length; i++) {
        if (hrElements[i].classList.contains("w3-dark-hr")) {
            hrElements[i].classList.remove("w3-dark-hr");
        } 
        else {
            hrElements[i].classList.add("w3-dark-hr");
        }
    }

    /* Footer Icon */
    if (shadows[0].classList.contains("box-shadow")) {
        document.getElementById("darkModeIcon").src = "img/light-mode-sun.png";
        document.getElementById("arrowIcon").src = "img/light-mode-arrow.png";
    }
    else if (shadows[0].classList.contains("box-shadow-dark")) {
        document.getElementById("darkModeIcon").src = "img/dark-mode-sun.png";
        document.getElementById("arrowIcon").src = "img/dark-mode-arrow.png";
    }
}

/* A flag variable to keep track of the current state of the image */
var isFlipped = false;

function FlipImage() {
    /* Retrieve element with the ID */
    var image = document.getElementById("arrowIcon");
    var interests = document.getElementById("interests");

    /* Check if the image is flipped */
    if (isFlipped) {
        /* If the image is flipped, set the CSS transform property to rotate 0 degrees */
        image.style.transform = "rotate(0deg)";

        /* Hide the interests element */
        interests.style.display = "none";
        interests.style.opacity = 0;
        interests.style.height = 0;
        interests.style.margin = "8px 0px";

        /* Update the flag variable to indicate that the image is no longer flipped */
        isFlipped = false;
    } else {
        /* If the image is not flipped, set the CSS transform property to rotate 180 degrees */
        image.style.transform = "rotate(180deg)";

        /* Show the interests element */
        interests.style.display = "block";
        interests.style.opacity = 1;
        interests.style.height = "auto";
        interests.style.margin = "0px !important";

        /* Update the flag variable to indicate that the image is flipped */
        isFlipped = true;
    }

    /* Apply a transition to the transform property to smoothly animate the rotation */
    image.style.transition = "transform 0.3s ease";
}