$(document).ready(function() {
    // Fetch work experience data from JSON file
    $.getJSON('/json/work-experience.json', function(data) {
        const $workContainer = $('.work-container'); // Select the container where work blocks will be added

        data.forEach(work => {
            // Generate skill tags with icons dynamically
            const skills = work.skills.map(skill => {
                return `<p><img src="/images/${skill.icon}" alt="" class="skill-icon"> ${skill.name}</p>`;
            }).join('');
            
            // Create the HTML structure for a work block
            const workCard = $(`
                <div class="work-block fade-effect">
                    <p class="sub-heading accent-color">${work.company}</p>
                    <p class="sub-heading-thin">${work.role}</p>
                    <p class="dates">${work.dates}</p>
                    <a href="${work.website}" target="_blank" class="website-link">
                        <span>${work.websiteDisplay}</span> <i class="fa fa-link"></i>
                    </a>
                    <p>${work.description}</p>
                    <div class="skills-tags">${skills}</div>
                    <img src="${work.image}" alt="${work.imageAlt}" class="${work.imageClass}">
                </div>
            `);

            // Append the generated work card to the container
            $workContainer.append(workCard);
        });

        // Initialize Intersection Observer to detect when work cards enter/exit the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If at least 50% of the card is visible, fade in
                if (entry.intersectionRatio >= 0.5) {
                    $(entry.target).addClass('fade-in').removeClass('fade-out');
                } 
                // If less than 50% is visible, fade out
                else {
                    $(entry.target).addClass('fade-out').removeClass('fade-in');
                }
            });
        }, { threshold: [0.5] }); // 50% of the element must be in view

        // Observe each work block for visibility changes
        $('.work-block').each(function() {
            observer.observe(this);
        });

    }).fail(function(jqXHR, textStatus, errorThrown) {
        // Log an error message if JSON data fails to load
        console.error('Error loading work experience data:', textStatus, errorThrown);
    });
});
