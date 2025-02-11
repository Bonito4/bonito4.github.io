// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    // AOS initialization
    AOS.init({
        once: true,
        offset: 100,
        duration: 800
    });

    // Typing effect
    new Typewriter('#typing-text', {
        strings: ['GRAPHIC DESIGNER', 'WEB DEVELOPER', 'DATA SPECIALIST'],
        autoStart: true,
        loop: true,
        delay: 60
    });

    // Initialize all event listeners
    initScrollListeners();
    initFormHandlers();
    initSmoothScroll();
    checkMobile();

    // Initialize popup
    const popup = document.getElementById('development-popup');
    const closePopup = document.getElementById('close-popup');
    
    // Show popup after a short delay
    setTimeout(() => {
        popup.classList.add('show');
    }, 1000);
    
    // Close popup when button is clicked
    closePopup.addEventListener('click', () => {
        popup.classList.remove('show');
    });
    
    // Also close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
    });
});

// Initialize scroll event listeners
function initScrollListeners() {
    window.addEventListener('scroll', () => {
        handleScrollProgress();
        handleNavHighlight();
    });
}

// Initialize smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                updateActiveNavLink(this);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(clickedLink) {
    document.querySelectorAll('.navlist a').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Scroll progress
function handleScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }
}

// Navigation highlighting
function handleNavHighlight() {
    const sections = document.querySelectorAll('main > div[id]');
    const scrollY = window.pageYOffset;
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
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
}

// Form submission
function initFormHandlers() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
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
            }
        });
    }
}

// Handle mobile navigation
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.navlist a').forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.querySelector('.navigator');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }
}

// Handle window resize
window.addEventListener('resize', checkMobile);
