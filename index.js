// Flag variables to keep track of the current state of the images
var isInterestsFlipped = false;
var isProjectsFlipped = false;

// Function to flip the interests image and toggle the visibility of the interests element
function flipImage() {
    // Retrieve elements with the IDs
    var image = document.getElementById("arrowIcon");
    var interests = document.getElementById("interests");

    // Check if the interests image is flipped
    if (isInterestsFlipped) {
        // If the image is flipped, set the CSS transform property to rotate 0 degrees
        image.style.transform = "rotate(0deg)";

        // Hide the interests element
        interests.style.display = "none";
        interests.style.opacity = 0;
        interests.style.height = 0;
        interests.style.margin = "8px 0px";

        // Update the flag variable to indicate that the image is no longer flipped
        isInterestsFlipped = false;
    } else {
        // If the image is not flipped, set the CSS transform property to rotate 180 degrees
        image.style.transform = "rotate(180deg)";

        // Show the interests element
        interests.style.display = "block";
        interests.style.opacity = 1;
        interests.style.height = "auto";
        interests.style.margin = "0px !important";

        // Update the flag variable to indicate that the image is flipped
        isInterestsFlipped = true;
    }

    // Apply a transition to the transform property to smoothly animate the rotation
    image.style.transition = "transform 0.3s ease";
}

// Function to flip the projects image and toggle the visibility of the projects element
function toggleProjects() {
    // Retrieve elements with the IDs
    var image = document.getElementById("projectsIcon");
    var projects = document.getElementById("projects");

    // Check if the projects image is flipped
    if (isProjectsFlipped) {
        // If the image is flipped, set the CSS transform property to rotate 0 degrees
        image.style.transform = "rotate(0deg)";

        // Hide the projects element
        projects.style.display = "none";
        projects.style.opacity = 0;
        projects.style.height = 0;
        projects.style.margin = "8px 0px";

        // Update the flag variable to indicate that the image is no longer flipped
        isProjectsFlipped = false;
    } else {
        // If the image is not flipped, set the CSS transform property to rotate 180 degrees
        image.style.transform = "rotate(180deg)";

        // Show the projects element
        projects.style.display = "block";
        projects.style.opacity = 1;
        projects.style.height = "auto";
        projects.style.margin = "0px !important";

        // Update the flag variable to indicate that the image is flipped
        isProjectsFlipped = true;
    }

    // Apply a transition to the transform property to smoothly animate the rotation
    image.style.transition = "transform 0.3s ease";
}
