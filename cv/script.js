const specificLinks = document.querySelectorAll('.links a[href="projects.html"]');
const overlay2 = document.getElementById('overlay2');

specificLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        overlay2.style.display = 'block';
        overlay2.style.transition = 'opacity 0.5s ease'; // 设置过渡效果

        requestAnimationFrame(() => {
            overlay2.style.opacity = '1'; // 渐变显示
        });

        setTimeout(() => {
            window.location.href = this.href; // 导航到目标链接
        }, 500); // 与 transition 的时间一致
    });
});