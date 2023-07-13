// A flag variable to keep track of the current state of the image
var isFlipped = false;

function flipImage() {
    
    // Retrieve element with the ID
    var image = document.getElementById("arrowIcon");
    var interests = document.getElementById("interests");

    // Check if the image is flipped
    if (isFlipped) {
        // If the image is flipped, set the CSS transform property to rotate 0 degrees
        image.style.transform = "rotate(0deg)";

        // Hide the interests element
        interests.style.display = "none";
        interests.style.opacity = 0;
        interests.style.height = 0;
        interests.style.margin = "8px 0px";

        // Update the flag variable to indicate that the image is no longer flipped
        isFlipped = false;
    } else {
        // If the image is not flipped, set the CSS transform property to rotate 180 degrees
        image.style.transform = "rotate(180deg)";

        // Show the interests element
        interests.style.display = "block";
        interests.style.opacity = 1;
        interests.style.height = "auto";
        interests.style.margin = "0px !important";

        // Update the flag variable to indicate that the image is flipped
        isFlipped = true;
    }

    // Apply a transition to the transform property to smoothly animate the rotation
    image.style.transition = "transform 0.3s ease";
}