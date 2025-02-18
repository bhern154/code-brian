$(document).ready(function() {
    $.getJSON('/json/work-experience.json', function(data) {
        const $workContainer = $('.work-container'); // Add a container div in HTML to hold all work cards

        data.forEach(work => {
            const skills = work.skills.map(skill => {
                return `<p><img src="/images/${skill.icon}" alt="" class="skill-icon"> ${skill.name}</p>`;
            }).join('');
            
            const workCard = `
                <div class="work-block">
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
            `;

            $workContainer.append(workCard);
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading work experience data:', textStatus, errorThrown);
    });
});
