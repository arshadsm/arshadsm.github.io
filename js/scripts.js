// Smooth Scrolling with Offset for Fixed Header using Event Delegation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        const offset = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

// Typewriter Effect with requestAnimationFrame for smoother performance
const typeWriterText = "Data Engineering Portfolio";
let i = 0;

function typeWriter() {
    if (i < typeWriterText.length) {
        document.getElementById("typewriter").textContent += typeWriterText.charAt(i);
        i++;
        requestAnimationFrame(typeWriter);
    }
}
window.onload = typeWriter;

// Fade-In Effect on Scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
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
    setTimeout(showSlides, 5000);
}
