// Arghyatech Portfolio - Main JavaScript

document.addEventListener("DOMContentLoaded", function() {
    console.log("Arghyatech Portfolio Loaded Successfully!");

    // Contact Form Submission Alert (if form exists on the page)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully. We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link is an internal page anchor or standard link
            const targetHref = this.getAttribute('href');
            if (targetHref.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetHref);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});