window.addEventListener("scroll", function() {
    const heroHeight = document.getElementById("aerial-hero").offsetHeight;
    
    if (window.scrollY >= heroHeight) {
        document.getElementById("landed-sticky-header").style.zIndex = "3";  // Bring it to the front
    } else {
        document.getElementById("landed-sticky-header").style.zIndex = "1";  // Send it to the back
    }
});