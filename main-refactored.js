// ================ MAIN APPLICATION LOGIC ================
// File chính được tái cấu trúc để dễ maintain

class WebsiteApp {
    constructor() {
        this.config = WEBSITE_CONFIG;
        this.utils = Utils;
        this.currentQuoteIndex = 0;
        this.init();
    }

    // ================ INITIALIZATION ================
    init() {
        this.setupLoadingScreen();
        this.setupCounter();
        this.setupQuotes();
        this.setupBackgroundEffects();
        this.setupGallery();
        this.setupInteractiveElements();
        this.setupContactForm();
        this.setupSecretLetters();
        this.setupNavigation();
        this.setupEasterEggs();

        console.log('💖 Website loaded with care! 💖');
    }

    // ================ LOADING SCREEN ================
    setupLoadingScreen() {
        window.addEventListener('load', () => {
            const loading = this.utils.getElement('#loading');
            this.utils.hideLoadingScreen(loading);
        });
    }

    // ================ FRIENDSHIP COUNTER ================
    setupCounter() {
        const counterElement = this.utils.getElement('#loveCounter');
        if (!counterElement) return;

        this.updateCounter();
        setInterval(() => this.updateCounter(), 1000);
    }

    updateCounter() {
        const time = this.utils.calculateTimeDifference(this.config.FRIENDSHIP_START_DATE);

        const elements = {
            days: this.utils.getElement('#days'),
            hours: this.utils.getElement('#hours'),
            minutes: this.utils.getElement('#minutes'),
            seconds: this.utils.getElement('#seconds')
        };

        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = time[key];
            }
        });
    }

    // ================ QUOTES ROTATION ================
    setupQuotes() {
        const quotesContainer = this.utils.getElement('.love-quotes');
        if (!quotesContainer) return;

        // Auto-rotate quotes
        setInterval(() => this.rotateQuote(), 4000);

        // Manual rotation button
        const nextBtn = this.utils.getElement('#nextQuote');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.rotateQuote());
        }
    }

    rotateQuote() {
        const quoteElements = this.utils.getElements('.quote');
        if (quoteElements.length === 0) return;

        // Hide current quote
        quoteElements.forEach(q => q.classList.remove('active'));

        // Show next quote
        this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.config.QUOTES.length;

        setTimeout(() => {
            if (quoteElements[0]) {
                quoteElements[0].textContent = `"${this.config.QUOTES[this.currentQuoteIndex]}"`;
                quoteElements[0].classList.add('active');
            }
        }, 250);
    }

    // ================ BACKGROUND EFFECTS ================
    setupBackgroundEffects() {
        // Floating hearts
        setInterval(() => this.createFloatingHeart(), 3000);

        // Particles
        setInterval(() => this.createParticle(), 500);
    }

    createFloatingHeart() {
        const hearts = ['💖', '💕', '💗', '💘', '💝'];
        const heart = this.utils.createFloatingElement(
            this.utils.getRandomItem(hearts),
            {
                left: this.utils.getRandomNumber(0, 100) + 'vw',
                className: 'floating-heart',
                animationDuration: this.utils.getRandomNumber(2, 5) + 's',
                fontSize: this.utils.getRandomNumber(15, 25) + 'px'
            }
        );

        const container = this.utils.getElement('.floating-hearts');
        if (container) {
            container.appendChild(heart);
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = this.utils.getRandomNumber(0, 100) + 'vw';
        particle.style.animationDuration = this.utils.getRandomNumber(4, 8) + 's';
        particle.style.animationDelay = this.utils.getRandomNumber(0, 2) + 's';

        const container = this.utils.getElement('.particles');
        if (container) {
            this.utils.addFloatingElement(particle, 8000);
            container.appendChild(particle);
        }
    }

    // ================ GALLERY ================
    setupGallery() {
        const galleryItems = this.utils.getElements('.photo-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const rect = item.getBoundingClientRect();
                this.utils.createHeartBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    3
                );
            });
        });
    }

    // ================ INTERACTIVE ELEMENTS ================
    setupInteractiveElements() {
        // Heart button
        const heartButton = this.utils.getElement('#heartButton');
        if (heartButton) {
            heartButton.addEventListener('click', (e) => {
                const rect = heartButton.getBoundingClientRect();
                this.utils.createHeartBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    6
                );
                this.utils.addClickEffect(heartButton);
            });
        }

        // Message generator
        this.setupMessageGenerator();
    }

    setupMessageGenerator() {
        const generateBtn = this.utils.getElement('#generateMessage');
        const messageDiv = this.utils.getElement('#generatedMessage');

        if (generateBtn && messageDiv) {
            generateBtn.addEventListener('click', () => {
                const randomMessage = this.utils.getRandomItem(this.config.NICE_MESSAGES);

                messageDiv.classList.remove('show');

                setTimeout(() => {
                    messageDiv.textContent = randomMessage;
                    messageDiv.classList.add('show');

                    // Heart burst effect
                    this.utils.createHeartBurst(
                        this.utils.getRandomNumber(0, window.innerWidth),
                        window.innerHeight * 0.2,
                        5
                    );
                }, 250);

                this.utils.addClickEffect(generateBtn);
            });
        }
    }

    // ================ CONTACT FORM ================
    setupContactForm() {
        const contactForm = this.utils.getElement('.contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show success message
            this.utils.showMessage(
                contactForm,
                this.config.MESSAGES.SUCCESS_CONTACT,
                'success-message'
            );

            // Heart celebration
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const heart = this.utils.createFloatingElement('💖', {
                        left: this.utils.getRandomNumber(0, 100) + 'vw',
                        top: '100vh',
                        fontSize: '25px',
                        animation: 'floatUp 3s ease-out forwards'
                    });
                    this.utils.addFloatingElement(heart, 3000);
                }, i * 200);
            }

            contactForm.reset();
        });
    }

    // ================ SECRET LETTERS ================
    setupSecretLetters() {
        const secretHearts = this.utils.getElements('.secret-heart');
        const letterModal = this.utils.getElement('#letterModal');
        const closeModal = this.utils.getElement('.close-modal');

        secretHearts.forEach(heart => {
            heart.addEventListener('click', () => {
                const letterIndex = parseInt(heart.getAttribute('data-letter'));
                const letter = this.config.SECRET_LETTERS[letterIndex];

                if (letter && letterModal) {
                    const content = `
                        <h4>${letter.title}</h4>
                        <p>${letter.content}</p>
                        <div style="margin-top: 20px;">${this.config.MESSAGES.LETTER_SIGNATURE}</div>
                    `;

                    this.utils.showModal(letterModal, content);
                    this.createMagicalEffect();
                }
            });
        });

        // Close modal functionality
        if (closeModal && letterModal) {
            closeModal.addEventListener('click', () => {
                this.utils.hideModal(letterModal);
            });

            letterModal.addEventListener('click', (e) => {
                if (e.target === letterModal) {
                    this.utils.hideModal(letterModal);
                }
            });
        }

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && letterModal && letterModal.style.display === 'block') {
                this.utils.hideModal(letterModal);
            }
        });
    }

    createMagicalEffect() {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.utils.createSparkleEffect(
                    this.utils.getRandomNumber(0, window.innerWidth),
                    this.utils.getRandomNumber(0, window.innerHeight)
                );
            }, i * 200);
        }
    }

    // ================ NAVIGATION ================
    setupNavigation() {
        const navLinks = this.utils.getElements('nav a');
        navLinks.forEach(link => {
            if (window.location.pathname.includes(link.getAttribute('href')) ||
                (window.location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // ================ EASTER EGGS ================
    setupEasterEggs() {
        // Title click for heart rain
        const title = this.utils.getElement('h1');
        if (title) {
            let clickCount = 0;
            title.addEventListener('click', () => {
                clickCount++;
                if (clickCount >= 3) {
                    for (let i = 0; i < 20; i++) {
                        setTimeout(() => this.createFloatingHeart(), i * 100);
                    }
                    clickCount = 0;
                }
            });
        }

        // Mouse move sparkles
        let sparkleTimeout;
        document.addEventListener('mousemove', (e) => {
            clearTimeout(sparkleTimeout);
            sparkleTimeout = setTimeout(() => {
                if (Math.random() < 0.1) {
                    this.utils.createSparkleEffect(e.clientX, e.clientY);
                }
            }, 50);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WebsiteApp();
});
