$(document).ready(function() {
    // Fetch JSON data for projects
    $.getJSON('/json/projects.json', function(data) {
        const $projectsContainer = $('.projects-container'); // Container to hold all project cards

        // Loop through each project and create a project card
        data.forEach(project => {
            const skills = project.skills.map(skill => `<p>${skill}</p>`).join('');
            
            const projectCard = `
                <div class="project-block">
                    <p class="sub-heading">${project.company}</p>
                    <p class="sub-heading-thin">${project.role}</p>
                    <p class="dates">${project.dates}</p>
                    <a href="${project.website}" target="_blank" class="website-link">
                        <span>${project.websiteDisplay}</span> <i class="fa fa-link"></i>
                    </a>
                    <p>${project.description}</p>
                    <div class="skills-tags">${skills}</div>
                    <img src="${project.image}" alt="${project.imageAlt}" class="${project.imageClass}">
                </div>
            `;

            // Append the project card to the container
            $projectsContainer.append(projectCard);
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading projects data:', textStatus, errorThrown);
    });
});
