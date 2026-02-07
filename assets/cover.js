let lastScrollTime = 0; // To track the last scroll time
    let isScrolling = false; // To prevent multiple scroll triggers

    function scrollDown() {
        // Fade in the page container
        // Scroll the page down
        window.scrollTo({
            top: window.innerHeight, 
            behavior: 'smooth'
        });
    }

    function scrollUp() {
        // Fade out the page container
        // Scroll the page up
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Detect wheel scroll
    document.body.addEventListener('wheel', (event) => {
        let currentTime = new Date().getTime();
        
        // Limiting scroll events to once every 500ms
        if (currentTime - lastScrollTime > 500) {
            lastScrollTime = currentTime;

            if (event.deltaY > 0) {
                // Scrolling down
                scrollDown();
            } else if (event.deltaY < 0) {
                // Check if #aboutMe's scroll position is at the top
                let aboutMe = document.getElementById('aboutMe');
                if (aboutMe.scrollTop === 0) {
                    // If scrolled to the top inside #aboutMe, trigger scrollUp
                    scrollUp();
                }
            }
        }
    });