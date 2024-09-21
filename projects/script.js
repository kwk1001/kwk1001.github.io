document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("scrolling-text");
    const textItems = document.querySelectorAll(".text-item");
    const descriptionPanel = document.getElementById("description-panel");
    const descriptionContent = document.getElementById("description-content");

    const projectDescriptions = {
        "Project 1": "Description for Landscape project.",
        "Project 2": "Description for Abstract project.",
        "Project 3": "Description for Parachute project.",
        "Project 4": "Description for Blue project.",
        "Project 5": "Description for Sunset project."
        // Add more descriptions as needed
    };

    textItems.forEach(item => {
        item.addEventListener("click", () => {
            const projectKey = item.getAttribute("data-project");
            const description = projectDescriptions[projectKey];

            descriptionContent.innerHTML = `<h2>${projectKey}</h2><p>${description}</p>`;
            descriptionPanel.classList.add("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!descriptionPanel.contains(event.target) && !event.target.classList.contains("text-item")) {
            descriptionPanel.classList.remove("active");
        }
    });

    const scrollingContainer = document.querySelector('.scrolling-container');

    scrollingContainer.addEventListener('scroll', () => {
        if (scrollingContainer.scrollTop === 0) {
            scrollingContainer.scrollTop = scrollingContainer.scrollHeight / 2;
        } else if (scrollingContainer.scrollTop + scrollingContainer.clientHeight >= scrollingContainer.scrollHeight) {
            scrollingContainer.scrollTop = scrollingContainer.scrollHeight / 2 - scrollingContainer.clientHeight;
        }
    });

    // Set initial scroll position to the middle for seamless scrolling
    scrollingContainer.scrollTop = scrollingContainer.scrollHeight / 2;
});
