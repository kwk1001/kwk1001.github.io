const rows = document.querySelectorAll('.fade-row');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // 只执行一次
        }
    });
});

rows.forEach(row => {
    observer.observe(row);
});

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 20 + 'px';
    cursor.style.top = e.pageY + 20 + 'px';
});

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    const cursor = document.getElementById('cursor');
    cursor.style.display = 'none'; // 隐藏光标
}

const device = navigator.userAgent.toLowerCase();
if(/iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints >1)){
    const cursor = document.getElementById('cursor');
    cursor.style.display = 'none'; // 隐藏光标
}

const transitionScreen = document.querySelector('.transition-screen');
const shapeBottom = document.querySelector('.shape-round.bottom');
const shapeTop = document.querySelector('.shape-round.top');
const wrap = document.querySelector('.wrap');

const duration = 2200; // 总持续时间
const startTime = performance.now(); // 动画开始时间
const scaleYFactor = 3; // scaleYBottom / scaleYTop 的加速因子
const translateYTransitionFactor = 4; // translateYTransition 的加速因子
const translateYWrapFactor = 2; // translateYWrap 的加速因子

let animationStartTime; // 用于记录每次动画的开始时间

function ease(t, factor) {
    return Math.pow(t, factor);
}

function easeInOut(t) {
    return (Math.sin((t - 0.5) * Math.PI) + 1) / 2; // 使用正弦函数进行平滑插值
}

function animate() {
    const currentTime = performance.now();
    const overlay = document.getElementById('overlay');
    const elapsedTime = (currentTime - animationStartTime) / 1000; // 转换为秒

    if (elapsedTime <= 0.8) {
        overlay.style.display = 'block';
    } else if (elapsedTime > 0.8) {
        overlay.style.display = 'none'; // 1 秒后隐藏覆盖层
    } 

    // 1. scaleYBottom 动画
    if (elapsedTime <= 0.4) {
        const t = ease(elapsedTime / 0.4, scaleYFactor);
        shapeBottom.style.transform = `scale(1, ${t})`;
    } else if (elapsedTime <= 0.8) {
        const t = ease((elapsedTime - 0.4) / 0.4, scaleYFactor);
        shapeBottom.style.transform = `scale(1, ${1 - t})`;
    } else if (elapsedTime > 0.8) {
        shapeBottom.style.transform = `scale(1, 0)`;
    } 

    // 2. scaleYTop 动画
    if (elapsedTime >= 0.9 && elapsedTime <= 1.5) {
        const t = ease((elapsedTime - 0.9) / 0.6, scaleYFactor);
        shapeTop.style.transform = `scale(1, ${t})`;
    } else if (elapsedTime > 1.5 && elapsedTime <= 1.6) {
        shapeTop.style.transform = `scale(1, 1)`;
    } else if (elapsedTime > 1.6 && elapsedTime <= 2.2) {
        const t = ease((elapsedTime - 1.6) / 0.6, scaleYFactor);
        shapeTop.style.transform = `scale(1, ${1 - t})`;
    } else if (elapsedTime > 2.2) {
        shapeTop.style.transform = `scale(1, 0)`;
    } 

    // 3. translateYTransition 动画
    if (elapsedTime <= 0.8) {
        const t = ease(elapsedTime / 0.8, translateYTransitionFactor);
        const translateY = 100 - (100 * easeInOut(t)); // 使用平滑插值
        transitionScreen.style.transform = `translate(0%, ${translateY}%)`;
    } else if (elapsedTime >= 0.9 && elapsedTime <= 2.2) {
        const t = ease((elapsedTime - 0.9) / 1.3, translateYTransitionFactor);
        const translateY = -100 * easeInOut(t); // 使用平滑插值
        transitionScreen.style.transform = `translate(0%, ${translateY}%)`;
    } else if (elapsedTime > 2.2) {
        transitionScreen.style.transform = `translate(0%, -100%)`;
    } 

    // 4. translateYWrap 动画
    if (elapsedTime >= 0.3 && elapsedTime <= 0.9) {
        const t = ease((elapsedTime - 0.3) / 0.6, translateYWrapFactor);
        const translateYWrap = 100 * (1 - easeInOut(t)); // 使用正弦函数进行平滑过渡
        wrap.style.transform = `translate(0%, ${translateYWrap}%)`;
    } else if (elapsedTime > 0.8 && elapsedTime <= 1.4) {
        // 停留在0位置
        wrap.style.transform = `translate(0%, 0%)`;
    } else if (elapsedTime > 1.4 && elapsedTime <= 2.0) {
        const t = ease((elapsedTime - 1.4) / 0.6, translateYWrapFactor);
        const translateYWrap = -105 * easeInOut(t); // 从0转变为-70
        wrap.style.transform = `translate(0%, ${translateYWrap}%)`;
    }

    if (elapsedTime < duration / 1000) {
        requestAnimationFrame(animate);
    }
}