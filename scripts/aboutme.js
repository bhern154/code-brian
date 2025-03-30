$(document).ready(function() {
    // Fetch the JSON file
    $.getJSON("json/about-me-timeline.json", function(data) {
        generateTimeline(data);
    }).fail(function() {
        console.error("Error loading timeline");
    });

    function generateTimeline(timelineData) {
        // Ensure the timeline container exists
        const $timelineContainer = $(".timeline");

        // Check if the container is found
        if ($timelineContainer.length === 0) {
            console.error("Timeline container not found!");
            return;
        }

        // Loop through the timeline data and create elements
        $.each(timelineData, function(index, item) {
            const $timelineItem = $("<div>").addClass("timeline-item");

            $timelineItem.html(`
                <div class="dot"></div>
                <p class="sub-heading-thin white-color" >${item.date}</h3>
                <p class="sub-heading yellow-color">${item.title}</h4>
                <p class="white-color">${item.description}</p>
            `);

            // Append the created item to the timeline container
            $timelineContainer.append($timelineItem);
        });

        // Apply visibility update on scroll
        updateTimelineVisibility();
        $(window).on("scroll", updateTimelineVisibility);
    }

    function updateTimelineVisibility() {
        $(".timeline-item").each(function() {
            const $item = $(this);
            const rect = $item[0].getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= $(window).height();

            if (isVisible) {
                $item.addClass("active");
            } else {
                $item.removeClass("active");
            }
        });
    }
});
