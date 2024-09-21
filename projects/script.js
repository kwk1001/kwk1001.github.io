const titles = document.querySelectorAll('.title');
const details = document.getElementById('details');

document.getElementById('scrolling-titles').addEventListener('scroll', () => {
    const midPoint = window.innerHeight / 2;
    titles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const titleMid = rect.top + rect.height / 2;
        if (titleMid < midPoint + 20 && titleMid > midPoint - 20) {
            title.classList.add('active');
            title.classList.remove('inactive');
        } else {
            title.classList.remove('active');
            title.classList.add('inactive');
        }
    });
});

function showDetails(project) {
    details.classList.add('active');
    document.querySelectorAll('.project-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(project).classList.add('active');
}

function hideDetails() {
    details.classList.remove('active');
}
