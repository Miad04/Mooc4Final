function scrollToTop() {
    // Find the element with id "top"
    const topElement = document.getElementById("top");

    // Scroll to the topElement's position
    topElement.scrollIntoView({
        behavior: 'smooth'
    });
}