
    const hash = window.location.hash;
    if (hash) {
    const descriptionId = hash.substring(1);
    showDescription(descriptionId);
    history.replaceState(null, '', window.location.pathname);
    }

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
    // step1: 隐藏项目列表
    const projectList = document.querySelector('.project-list');
    projectList.classList.remove('d-fade-in');
    projectList.classList.add('d-fade-out');
    setTimeout(() => {
        projectList.style.display = 'none';
        document.querySelector('.right-column').style.overflow = 'hidden';
        document.querySelector('.right-column').style.marginLeft = '15%';
        document.querySelector('.right-column').style.width = '85%';
    }, 500); // 动画过渡后关闭项目列表，修改属性

    // step2: 在上一步结束后开始显示描述内容
    const descriptionElement = document.getElementById(descriptionId);
    setTimeout(() => {
        document.getElementById('back').classList.remove('d-fade-out');
        document.getElementById('back').classList.add('d-fade-in');
        descriptionElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        descriptionElement.classList.remove('hidden', 'd-fade-out');  // 恢复显示，移除动画
        descriptionElement.classList.add('d-fade-in');  // 添加渐入动画
    }, 500); // 确保与项目列表隐藏动画同步
}

function showAll() {
    // step1: 隐藏描述内容(先播动画)
    document.querySelectorAll('.description-container').forEach(description => {
        description.classList.remove('d-fade-in');
        description.classList.add('d-fade-out');
    });
    document.getElementById('back').classList.remove('d-fade-in');
    document.getElementById('back').classList.add('d-fade-out');

    setTimeout(() => {
        document.querySelectorAll('.description-container').forEach(description => {
            description.classList.add('hidden');  // 完全移除元素，避免占用空间
        });
    }, 500); // 与渐出动画同步

    // step2: 显示项目列表
    const projectList = document.querySelector('.project-list');
    projectList.style.display = 'block';  // 恢复显示项目列表
    setTimeout(() => {
        document.querySelector('.right-column').style.overflow ='auto';
        document.querySelector('.right-column').style.marginLeft = '20%';
        document.querySelector('.right-column').style.width = '80%';
        projectList.classList.remove('d-fade-out');
        projectList.classList.add('d-fade-in');
    }, 500); // 播放动画
}