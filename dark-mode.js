// Saving darkMode State
var darkModeState = localStorage.getItem("darkMode"); // Get the stored value from localStorage

// Checking DarkMode State
function checkDarkModeState() {
    var darkModeState = localStorage.getItem("darkMode"); // Get the stored value from localStorage
    
    if (darkModeState === "true") {
        darkMode(true); // Enable dark mode
    } else {
        darkMode(false); // Disable dark mode
    }

    localStorage.setItem("darkMode", darkModeState); // Store the updated state in localStorage
}
function checkDarkModeStateOnButtonPress() {
    var darkModeState = localStorage.getItem("darkMode"); // Get the stored value from localStorage
  
    if (darkModeState === "true") {
      darkMode(false); // Disable dark mode
      darkModeState = "false"; // Update the state to "false"
    } else {
      darkMode(true); // Enable dark mode
      darkModeState = "true"; // Update the state to "true"
    }
  
    localStorage.setItem("darkMode", darkModeState); // Store the updated state in localStorage
  }

// Dark Mode
function darkMode(isEnabled) {
    var progressBars = document.querySelectorAll(".w3-light-grey, .w3-dark-grey"); // All Progress Bars
    var shadows = document.querySelectorAll(".box-shadow, .box-shadow-dark"); // All Box Shadows
    var hrElements = document.querySelectorAll("hr"); // All HR Tags
    
    var score = document.getElementById("score"); // Score Element
    var high = document.getElementById("high"); // High Element
    var canvas = document.querySelector("canvas:first-of-type"); // Canvas Element

    // Body and Footer
    if (isEnabled == false) {
        document.body.classList.remove("dark-mode");
        document.getElementsByClassName("footer")[0].classList.remove("dark-mode");

        // Basically a Check if User is on the "game" page 
        if (score !== null && high !== null) {
            score.style.color = "black";
            high.style.color = "black";
            canvas.style.borderColor = "black";
        }
    }
    else if (isEnabled == true) {
        document.body.classList.add("dark-mode");
        document.getElementsByClassName("footer")[0].classList.add("dark-mode");

        // Basically a Check if User is on the "game" page 
        if (score !== null && high !== null) {
            score.style.color = "white";
            high.style.color = "white";
            canvas.style.borderColor = "#222222";
        }
    }

    // Box Shadows
    for (var i = 0; i < shadows.length; i++) {
        if (isEnabled == false) {
            shadows[i].classList.remove("box-shadow-dark");
            shadows[i].classList.add("box-shadow");
        } 
        else if (isEnabled == true) {
            shadows[i].classList.remove("box-shadow");
            shadows[i].classList.add("box-shadow-dark");
        }
    }

    // Progress Bar
    for (var i = 0; i < progressBars.length; i++) {
        if (isEnabled == false) {
            progressBars[i].classList.remove("w3-dark-grey");
            progressBars[i].classList.add("w3-light-grey");
        } 
        else if (isEnabled == true) {
            progressBars[i].classList.remove("w3-light-grey");
            progressBars[i].classList.add("w3-dark-grey");
        }
    }

    // HR
    for (var i = 0; i < hrElements.length; i++) {
        if (isEnabled == false) {
            hrElements[i].classList.remove("w3-dark-hr");
        } 
        else if (isEnabled == true){
            hrElements[i].classList.add("w3-dark-hr");
        }
    }

    // Footer Icon
    var darkModeIcon = document.getElementById("darkModeIcon");
    var gameIcon = document.getElementById("gameIcon");
    var arrowIcon = document.getElementById("arrowIcon");

    if (!isEnabled) {
        darkModeIcon.src = "images/light-mode-sun.png";
        gameIcon.src = "images/light-mode-game.png";
        
        if (arrowIcon) { // Basically a Check if User is on the "resume" page 
            arrowIcon.src = "images/light-mode-arrow.png";
        }
    } else {
        darkModeIcon.src = "images/dark-mode-sun.png";
        gameIcon.src = "images/dark-mode-game.png";
        
        if (arrowIcon) { // Basically a Check if User is on the "resume" page 
            arrowIcon.src = "images/dark-mode-arrow.png";
        }
    }
}