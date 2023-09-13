window.addEventListener("scroll", function() {
    const heroHeight = document.getElementById("hero-section").offsetHeight;
    
    if (window.scrollY >= heroHeight) {
        document.getElementById("sticky-header").style.zIndex = "3";  // Bring it to the front
    } else {
        document.getElementById("sticky-header").style.zIndex = "1";  // Send it to the back
    }
});
