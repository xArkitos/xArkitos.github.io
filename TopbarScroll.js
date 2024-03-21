window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var topbar = document.querySelector('.topbar');

    if (scrollPosition >= 720) {
        topbar.classList.add('scrolled');
        topbar.style.backgroundColor = '#0e0e0e'; // Change background color to black
    } else {
        topbar.classList.remove('scrolled');
        topbar.style.backgroundColor = '#F2F2F2'; // Reset background color to default
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

});

window.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, { threshold: 0.6 }); // Set threshold to 0.8 for 80% of viewport height

    const hiddenElements = document.querySelectorAll('.Haste');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.topbar nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation behavior
            
            // Get the href attribute value (HTML file to navigate to)
            const targetHTML = this.getAttribute('href');
            
            // Navigate to the HTML file
            window.location.href = targetHTML;

            // Extract the section ID from the link's href attribute
            const targetId = this.getAttribute('href').split('#')[1];
            
            // Scroll to the section after a short delay (adjust as needed)
            setTimeout(() => {
                if (targetId) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop;
                        window.scrollTo({
                            
                            behavior: 'smooth'
                        });
                    }
                }
            }, 500); // Delay to ensure the new page has loaded, adjust as needed
        });
    });
});








