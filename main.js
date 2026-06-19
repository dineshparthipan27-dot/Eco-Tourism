
AOS.init({
    once: true,
});


// Navigation Initialization Function
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a'); // Added 'a' tag

    if (!hamburger || !navLinks) return; // Safety check

    // Toggle Mobile Menu & Change Hamburger to 'X'
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        if (navLinks.classList.contains('nav-active')) {
            document.body.style.overflow = 'hidden'; // Disable scroll when open
        } else {
            document.body.style.overflow = ''; // Enable scroll when closed
        }
    });

    // Close menu automatically when a link is clicked (Good UX)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            document.body.style.overflow = ''
        });
    });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initNavigation);