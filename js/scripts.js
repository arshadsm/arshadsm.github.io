// Smooth Scrolling with Offset for Fixed Header using Event Delegation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const offset = document.querySelector('nav').offsetHeight + 10; // Add extra 10px for padding
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Typewriter Effect with requestAnimationFrame for smoother performance
let typeWriterText = document.getElementById("typewriter").textContent.trim(); // Get the existing text
let i = 0;

function typeWriter() {
    if (i < typeWriterText.length) {
        document.getElementById("typewriter").textContent = typeWriterText.slice(0, i + 1);
        i++;
        requestAnimationFrame(typeWriter);
    }
}

window.onload = () => {
    document.getElementById("typewriter").textContent = ""; // Clear the text for animation
    typeWriter();
};

// Fade-In Effect on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Slideshow with Lazy Loading Images
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    slideIndex = (slideIndex + 1 > slides.length) ? 1 : slideIndex + 1;
    const currentSlide = slides[slideIndex - 1];

    if (currentSlide && currentSlide.dataset.src) {
        currentSlide.src = currentSlide.dataset.src;
        delete currentSlide.dataset.src;
    }

    currentSlide.style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Additional Event Listener for Smooth Scrolling (if required)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = document.querySelector('nav').offsetHeight + 10; // Add extra 10px for padding
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
