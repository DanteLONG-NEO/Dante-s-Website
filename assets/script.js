/*let scrolling = false;

document.addEventListener("wheel", (e) => {
    if (scrolling) return; // 防止连续触发
    scrolling = true;

    if (e.deltaY > 0) {
        scrollNext(); // 向下滚动
    } else if (e.deltaY < 0) {
        scrollPrevious(); // 向上滚动
    }

    // 延迟一段时间允许下一次滚动
    setTimeout(() => scrolling = false, 500); // 延迟时间设置为 500 毫秒
});

function scrollNext() {
    const divs = document.querySelectorAll("div"); // 获取页面中的所有 div
    const viewportHeight = window.innerHeight; // 视口高度
    const currentScroll = window.scrollY; // 当前滚动位置

    let nextDiv = null;

    // 寻找当前滚动位置所在的 div，并且找到下一个 div
    divs.forEach(div => {
        const divTop = div.offsetTop;
        const divBottom = divTop + div.offsetHeight;

        if (currentScroll + viewportHeight / 2 >= divTop && currentScroll + viewportHeight / 2 < divBottom) {
            nextDiv = div.nextElementSibling; // 找到下一个 div
        }
    });

    if (nextDiv) {
        const nextDivCenter = nextDiv.offsetTop - (viewportHeight / 2) + nextDiv.offsetHeight / 2;
        window.scrollTo({ top: nextDivCenter, behavior: "smooth" });
    } else {
        // 如果已经滚动到最后一个 div，停止滚动
        const lastDiv = divs[divs.length - 1];
        const lastDivCenter = lastDiv.offsetTop - (viewportHeight / 2) + lastDiv.offsetHeight / 2;
        window.scrollTo({ top: lastDivCenter, behavior: "smooth" });
    }
}

function scrollPrevious() {
    const divs = document.querySelectorAll("div"); // 获取页面中的所有 div
    const viewportHeight = window.innerHeight; // 视口高度
    const currentScroll = window.scrollY; // 当前滚动位置

    let prevDiv = null;

    // 寻找当前滚动位置所在的 div，并且找到上一个 div
    divs.forEach(div => {
        const divTop = div.offsetTop;
        const divBottom = divTop + div.offsetHeight;

        if (currentScroll + viewportHeight / 2 > divTop && currentScroll + viewportHeight / 2 <= divBottom) {
            prevDiv = div.previousElementSibling; // 找到上一个 div
        }
    });

    if (prevDiv) {
        const prevDivCenter = prevDiv.offsetTop - (viewportHeight / 2) + prevDiv.offsetHeight / 2;
        window.scrollTo({ top: prevDivCenter, behavior: "smooth" });
    } else {
        // 如果已经滚动到第一个 div，停止滚动
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}*/

// 获取所有图片和 iframe
const images = Array.from(document.querySelectorAll('img'));
const iframes = Array.from(document.querySelectorAll('iframe'));
const loader = document.getElementById('loader-container');

// 记录加载开始的时间
const startTime = Date.now();

// 定义一个函数移除占位符类


// 定义一个 Promise，等待所有 img 和 iframe 元素加载完成
const loadPromises = [
  ...images.map(img => {
    return new Promise(resolve => {
      if (img.complete) {
        resolve(); // 图片已经加载完成
      } else {
        img.addEventListener('load', () => {
          resolve();
        });
        img.addEventListener('error', () => {
          resolve();
        });
      }
    });
  }),
  ...iframes.map(iframe => {
    return new Promise(resolve => {
      iframe.addEventListener('load', () => {
        resolve();
      });
      iframe.addEventListener('error', () => {
        resolve();
      });
    });
  })
];

Promise.all(loadPromises).then(() => {
  // 计算加载完成所用的时间
  const elapsedTime = Date.now() - startTime;
  const remainingTime = Math.max(1500 - elapsedTime, 0); // 至少显示3秒

  // 确保 loader 至少显示3秒
  setTimeout(() => {
    loader.classList.add('hidden'); // 添加隐藏类，触发渐隐效果
    setTimeout(() => {
      loader.style.display = 'none'; // 等待过渡完成后切换为 display: none
    }, 1000); // 与 CSS 中的 transition 时间一致
  }, remainingTime);
});

