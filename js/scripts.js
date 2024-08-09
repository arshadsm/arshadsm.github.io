// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleSwitch = document.createElement('button');
toggleSwitch.innerHTML = "Toggle Dark Mode";
toggleSwitch.style.position = 'fixed';
toggleSwitch.style.top = '20px';
toggleSwitch.style.right = '20px';
toggleSwitch.style.padding = '10px';
toggleSwitch.style.background = '#333';
toggleSwitch.style.color = '#fff';
toggleSwitch.style.border = 'none';
toggleSwitch.style.cursor = 'pointer';
document.body.appendChild(toggleSwitch);

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Apply the dark mode based on user preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Sticky Navigation Bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const sticky = navbar.offsetTop;
    
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Dark Mode CSS Styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: #fff;
    }
    .dark-mode a {
        color: #77d7c5;
    }
    nav.sticky {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #2c3e50;
        box-shadow: 0 4px 2px -2px gray;
        z-index: 1000;
    }
    nav.sticky + .content {
        padding-top: 60px; /* Adjust this based on your navbar height */
    }
`;
document.head.appendChild(style);
