// 手机端显示navigation
const toggleButton = document.getElementById('openMenu');
const body = document.body;
const navigationBar = document.getElementsByClassName('navigation-bar')[0];
const fixedPage = document.getElementById('fixedPage');
const closeButton = document.getElementById('closeMenu');

// 显示固定页面
toggleButton.addEventListener('click', () => {
    fixedPage.classList.add('show');
    body.style.overflow = "hidden";
    toggleButton.style.display = "none";
    navigationBar.style.position = "fixed";
    closeButton.style.display = "block"; // 显示固定页面
});

// 关闭固定页面
closeButton.addEventListener('click', () => {
    fixedPage.classList.remove('show'); // 隐藏固定页面
    body.style.overflow = "";
    toggleButton.style.display = "block";
    navigationBar.style.position = "Absolute";
    closeButton.style.display = "none";
});