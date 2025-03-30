// Navbar toggle functionality

$(document).ready(function() {
    // Load the navbar and initialize its functionality
    $('#navbar').load('components/navbar.html', function(response, status, xhr) {
        if (status === "error") {
            console.error('Error loading navbar:', xhr.status, xhr.statusText);
        } else {
            console.log('Navbar HTML loaded successfully');
            initializeNavbar();
            setActiveNavbarItem();
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

function setActiveNavbarItem() {
    var currentPage = window.location.pathname; // Get the full path of the current URL
    $('.navbar-wrapper nav a').each(function() {
        var link = $(this).attr('href'); // Get the href attribute of each link
        // Compare the current page URL with the link in the navbar
        if (currentPage === link || currentPage.endsWith(link)) {
            $(this).addClass('active-page');  // Add class to active item
        }
    });
}