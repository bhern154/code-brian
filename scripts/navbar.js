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

    $('.toggle-btn').on('click', function () {
        const $nav = $('nav');
        const $wrapper = $('.navbar-wrapper');
        const isCollapsed = $nav.hasClass('collapsed');

        $nav.toggleClass('collapsed');
        $(this).toggleClass('active');

        if (!isCollapsed) {
            // COLLAPSING
            $wrapper.addClass('collapsed');
            $wrapper.addClass('animate-close');
            void $wrapper[0].offsetWidth; // trigger reflow to restart animation
            setTimeout(() => {
                $wrapper.removeClass('animate-close');
            }, 300); // match duration of bounce-shrink
        } else {
            // EXPANDING
            $wrapper.removeClass('collapsed');
            $wrapper.addClass('animate-open');
            void $wrapper[0].offsetWidth; // trigger reflow to restart animation
            setTimeout(() => {
                $wrapper.removeClass('animate-open');
            }, 300); // match duration of expand-smooth
        }
    });
}


function setActiveNavbarItem() {
    const currentPage = window.location.pathname;
    let $prevActive = $('.navbar-wrapper nav a.active-page .nav-icon');

    $('.navbar-wrapper nav a').each(function () {
        const link = $(this).attr('href');
        const $icon = $(this).find('.nav-icon');
        const isActive = (currentPage === link || currentPage.endsWith(link));

        if (isActive) {
            if (!$(this).hasClass('active-page')) {
                // This is the NEW active item, fade icon change
                $icon.addClass('fade');
                setTimeout(() => {
                    $icon.attr('src', $icon.data('icon-active'));
                    $icon.removeClass('fade');
                }, 150);
            }
            $(this).addClass('active-page');
        } else {
            if ($(this).hasClass('active-page')) {
                // This was active but now not, fade back to outline icon
                $icon.addClass('fade');
                setTimeout(() => {
                    $icon.attr('src', $icon.data('icon'));
                    $icon.removeClass('fade');
                }, 150);
            }
            $(this).removeClass('active-page');
        }
    });
}