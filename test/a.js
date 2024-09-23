window.addEventListener('load', function() {
    const transitionScreen = document.getElementById('screen-transition');
    
    // 动画结束后，移除过渡层
    setTimeout(() => {
        transitionScreen.style.transform = 'scale(0)'; // 让它缩小
    }, 100); // 等待一小段时间，确保动画能看到

    transitionScreen.addEventListener('transitionend', () => {
        transitionScreen.remove(); // 动画结束后移除元素
    });
});
