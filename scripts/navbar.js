// Navbar toggle functionality

$(document).ready(function() {
    // Load the navbar and initialize its functionality
    $('#navbar').load('components/navbar.html', function(response, status, xhr) {
        if (status === "error") {
            console.error('Error loading navbar:', xhr.status, xhr.statusText);
        } else {
            console.log('Navbar HTML loaded successfully');
            initializeNavbar();
        }
    });
});

// Initialize navbar functionality
function initializeNavbar() {
    console.log('Initializing navbar');

    $('.toggle-btn').on('click', function() {
        $('nav').toggleClass('collapsed');  // Toggle visibility of links
        $(this).toggleClass('active');      // Change the arrow direction
    });
}
