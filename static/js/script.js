// Initialize AOS
AOS.init({
    once: true,
    offset: 100,
    duration: 800
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 500);
});

// Typing effect
new Typewriter('#typing-text', {
    strings: ['BONIFACE OTIM', 'WEB DEVELOPER', 'DATA SPECIALIST'],
    autoStart: true,
    loop: true,
    delay: 75
});

// Scroll progress
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
});

// Improved navigation highlighting
const sections = document.querySelectorAll('main > div[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.pageYOffset;
        
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.navlist a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Update scroll behavior
document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        document.querySelectorAll('.navlist a').forEach(link => {
            link.classList.remove('active');
        });
        
        this.classList.add('active');
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    try {
        // Add your form submission logic here
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.display = 'block';
        formMessage.style.color = 'green';
    } catch (error) {
        formMessage.textContent = 'Error sending message. Please try again.';
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
    }
});

// Initialize tilt effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400
});

// Handle navigation menu on mobile
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.navlist a').forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.querySelector('.navigator');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }
}

window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);
