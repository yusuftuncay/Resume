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
        document.getElementById("darkModeIcon").src = "img/light.png";
    }
    else if (shadows[0].classList.contains("box-shadow-dark")) {
        document.getElementById("darkModeIcon").src = "img/dark.png";
    }
}