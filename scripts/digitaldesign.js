document.addEventListener("DOMContentLoaded", () => {
    fetch("/json/digital-design.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".gallery-container");
            container.innerHTML = ""; // Clear existing content

            data.forEach(gallery => {
                const galleryDiv = document.createElement("div");
                galleryDiv.classList.add("gallery");

                galleryDiv.innerHTML = `
                    <div class="gallery-heading">
                        <div class="gallery-title sub-heading accent-color-3">${gallery["gallery-title"]}</div>
                        <div class="gallery-subtitle sub-heading-thin accent-color-4">${gallery["gallery-subtitle"]}</div>
                        <p class="gallery-description">${gallery["gallery-description"]}</p>
                    </div>
                    <div class="gallery-slider">
                        <button class="prev gallery-btn">&#10094;</button>
                        <div class="slider-track"></div>
                        <button class="next gallery-btn">&#10095;</button>
                    </div>
                `;

                const track = galleryDiv.querySelector(".slider-track");
                const slider = galleryDiv.querySelector(".gallery-slider");

                gallery.images.forEach(item => {
                    let imgWrapper = document.createElement("div");
                    imgWrapper.classList.add("slider-item");

                    let imgElement = document.createElement("img");
                    imgElement.src = item.image;
                    imgElement.alt = item.description;
                    imgElement.loading = "lazy";  // Add this line for lazy loading

                    imgWrapper.appendChild(imgElement);
                    track.appendChild(imgWrapper);
                });

                container.appendChild(galleryDiv);

                // Adjust item width dynamically
                const items = galleryDiv.querySelectorAll(".slider-item");
                const itemWidth = slider.offsetWidth * 0.9; // 80% of slider width

                items.forEach(item => {
                    item.style.width = `${itemWidth}px`;
                });

                let index = 0;
                const prev = galleryDiv.querySelector(".prev");
                const next = galleryDiv.querySelector(".next");

                prev.addEventListener("click", () => slide(-1));
                next.addEventListener("click", () => slide(1));

                function slide(direction) {
                    index = (index + direction + items.length) % items.length;
                    const offset = -index * (itemWidth + 5); // Adjust for gaps
                    track.style.transform = `translateX(${offset}px)`;
                }
            });
        })
        .catch(error => console.error("Error loading gallery:", error));
});
