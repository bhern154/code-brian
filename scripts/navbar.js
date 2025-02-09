// Fetch and load the navbar
function loadNavbar() {
    return fetch('components/navbar.html')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            const navbarContainer = document.getElementById('navbar');
            navbarContainer.innerHTML = data; // Insert the navbar HTML into the DOM

            console.log('Navbar HTML loaded successfully');
            
            // Initialize navbar after HTML is loaded
            initializeNavbar();
        })
        .catch((error) => {
            console.error('Error loading navbar:', error);
        });
}

// Initialize navbar functionality
function initializeNavbar() {
    console.log('Initializing navbar');

    // Select the navbar and toggle button
    const nav = document.querySelector('nav');
    const toggleButton = document.querySelector('.toggle-btn');

    if (nav && toggleButton) {
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('collapsed'); // Add or remove the 'collapsed' class to toggle visibility of links
            toggleButton.classList.toggle('active'); // Add or remove the 'active' class to change the arrow direction
        });
    } else {
        console.warn('Navbar elements not found. Initialization skipped.');
    }
}

// Initialize the navbar
initializeNavbar();

// Load the navbar and initialize its functionality
loadNavbar();
