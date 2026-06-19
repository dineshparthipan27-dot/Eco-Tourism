
AOS.init({
    once: true,
});



function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a'); // Added 'a' tag

    if (!hamburger || !navLinks) return; 

    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
        if (navLinks.classList.contains('nav-active')) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }
    });

   
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
            document.body.style.overflow = ''
        });
    });
}


document.addEventListener('DOMContentLoaded', initNavigation);