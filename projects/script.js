const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(container => {
    const corners = container.querySelectorAll('.corner');
    const originalSize = 25; // 原始大小

    container.addEventListener('mouseenter', () => {
        corners.forEach(corner => {
            corner.style.width = '40px'; // 设置悬停时的大小
            corner.style.height = '40px';
            corner.style.borderColor = '#333'; // 改变边框颜色
        });
    });

    container.addEventListener('mouseleave', () => {
        corners.forEach(corner => {
            corner.style.width = `${originalSize}px`; // 恢复原始大小
            corner.style.height = `${originalSize}px`;
            corner.style.borderColor = 'var(--color-cornor)'; // 恢复原来的边框颜色
        });
    });
});

const specificLinks = document.querySelectorAll('.links a[href="cv.html"]');
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

function showDescription(descriptionId) {
    // 隐藏项目列表
    document.querySelector('.project-list').classList.remove('d-fade-in');
    document.querySelector('.project-list').classList.add('d-fade-out');
    document.getElementById('back').classList.add('d-fade-out');

    // 隐藏所有描述内容
    document.querySelectorAll('.description-container').forEach(description => {
        description.classList.add('hidden');
        description.classList.add('d-fade-out'); // 确保所有描述内容的 fade-in 类被移除
    });

    // 先移除 hidden 类，让元素变得可见，但不会立即触发过渡
    setTimeout(() => {
        document.getElementById('back').classList.remove('hidden');
        
        const descriptionElement = document.getElementById(descriptionId);
        descriptionElement.classList.remove('hidden');

        // 通过一个额外的短暂延迟，给浏览器时间应用显示后的状态，再触发渐入效果
        setTimeout(() => {
            document.getElementById('back').classList.remove('d-fade-out');
            descriptionElement.classList.remove('d-fade-out');
            descriptionElement.classList.add('d-fade-in');
            document.getElementById('back').classList.add('d-fade-in');
        }, 50); // 16ms ~ 50ms 是一帧的时间
    }, 500);
}

function showAll() {
    // 隐藏描述内容
    document.querySelectorAll('.description-container').forEach(description => {
        description.classList.remove('d-fade-in');
        description.classList.add('d-fade-out');
    });

    document.getElementById('back').classList.remove('d-fade-in');
    document.getElementById('back').classList.add('d-fade-out');

    // 显示项目列表
    setTimeout(() => {
        document.getElementById('back').classList.add('hidden');
        document.querySelector('.project-list').classList.remove('d-fade-out');
        document.querySelector('.project-list').classList.add('d-fade-in');
        document.querySelectorAll('.description-container').forEach(description => {
            description.classList.add('hidden');
        });
    }, 500);
}