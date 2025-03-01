// Navbar toggle functionality

$(document).ready(function() {
    // Load the navbar and initialize its functionality
    $('#footer').load('components/footer.html', function(response, status, xhr) {
        if (status === "error") {
            console.error('Error loading footer:', xhr.status, xhr.statusText);
        } else {
            console.log('Footer HTML loaded successfully');
        }
    });
});