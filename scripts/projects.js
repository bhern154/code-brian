$(document).ready(function() {
    // Fetch JSON data for projects
    $.getJSON('/json/projects.json', function(data) {
        const $projectsContainer = $('.projects-container'); // Select the container for project cards

        // Loop through each project and generate its card
        data.forEach(project => {
            // Generate skill tags with icons dynamically
            const skills = project.skills.map(skill => {
                return `<p><img src="${skill.icon}" alt="" class="skill-icon"> ${skill.name}</p>`;
            }).join('');
            
            // Create the HTML structure for a project card
            const projectCard = $(`
                <div class="project-block fade-effect">
                    <p class="sub-heading accent-color">${project.company}</p>
                    <p class="sub-heading-thin">${project.role}</p>
                    <p class="dates">${project.dates}</p>
                    <a href="${project.website}" target="_blank" class="website-link">
                        <span>${project.websiteDisplay}</span> <i class="fa fa-link"></i>
                    </a>
                    <p>${project.description}</p>
                    <div class="skills-tags">${skills}</div>
                    <img src="${project.image}" alt="${project.imageAlt}" class="${project.imageClass}">
                </div>
            `);

            // Append the generated project card to the container
            $projectsContainer.append(projectCard);
        });

        // Initialize Intersection Observer for fade-in/out effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Fade in when 50% or more of the card is visible
                if (entry.intersectionRatio >= 0.5) {
                    $(entry.target).addClass('fade-in').removeClass('fade-out');
                } 
                // Fade out when less than 50% of the card is visible
                else {
                    $(entry.target).addClass('fade-out').removeClass('fade-in');
                }
            });
        }, { threshold: [0.5] }); // 50% visibility threshold

        // Observe each project block for visibility changes
        $('.project-block').each(function() {
            observer.observe(this);
        });

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Log an error message if JSON data fails to load
        console.error('Error loading projects data:', textStatus, errorThrown);
    });
});
