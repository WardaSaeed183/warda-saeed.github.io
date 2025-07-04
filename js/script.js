// Function to reveal elements on scroll
function reveal() {
    // Select all elements with the class 'reveal'
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        // getBoundingClientRect().top gives the distance of the element from the top of the viewport
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // The height at which the element should become visible

        // If the top of the element is less than the window height minus the visibility threshold...
        if (elementTop < windowHeight - elementVisible) {
            // ...add the 'active' class to it.
            reveals[i].classList.add('active');
        } else {
            // Otherwise, remove the 'active' class.
            reveals[i].classList.remove('active');
        }
    }
}

// Add an event listener to the window that calls the 'reveal' function on scroll
window.addEventListener('scroll', reveal);

// Call reveal once on page load to check initial positions
reveal();