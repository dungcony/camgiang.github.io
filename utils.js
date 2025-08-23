// ================ UTILITY FUNCTIONS ================
// File chứa các hàm tiện ích có thể tái sử dụng

const Utils = {
    // ================ DOM HELPERS ================
    getElement: (selector) => document.querySelector(selector),
    getElements: (selector) => document.querySelectorAll(selector),

    // ================ TIME CALCULATIONS ================
    calculateTimeDifference: (startDate) => {
        const now = new Date();
        const timeDiff = now - new Date(startDate);

        return {
            days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
        };
    },

    // ================ ANIMATION HELPERS ================
    createFloatingElement: (content, styles = {}) => {
        const element = document.createElement('div');
        element.innerHTML = content;

        // Default styles
        const defaultStyles = {
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: '1000',
            fontSize: '20px'
        };

        Object.assign(element.style, defaultStyles, styles);
        return element;
    },

    addFloatingElement: (element, duration = 2000) => {
        document.body.appendChild(element);
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, duration);
    },

    // ================ RANDOM HELPERS ================
    getRandomItem: (array) => array[Math.floor(Math.random() * array.length)],
    getRandomNumber: (min, max) => Math.random() * (max - min) + min,

    // ================ ANIMATION EFFECTS ================
    createHeartBurst: (centerX, centerY, count = 5) => {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = Utils.createFloatingElement('💖', {
                    left: centerX + 'px',
                    top: centerY + 'px',
                    animation: 'floatUp 2s ease-out forwards'
                });
                Utils.addFloatingElement(heart, 2000);
            }, i * 100);
        }
    },

    createSparkleEffect: (x, y) => {
        const sparkle = Utils.createFloatingElement('✨', {
            left: x + 'px',
            top: y + 'px',
            fontSize: '12px',
            animation: 'fadeInUp 1s ease-out forwards'
        });
        Utils.addFloatingElement(sparkle, 1000);
    },

    // ================ UI HELPERS ================
    showMessage: (container, message, className = 'success-message', duration = 4000) => {
        // Remove existing message
        const existingMsg = container.querySelector(`.${className}`);
        if (existingMsg) {
            existingMsg.remove();
        }

        // Create new message
        const msg = document.createElement('div');
        msg.className = className;
        msg.innerHTML = message;
        container.appendChild(msg);

        // Auto remove
        setTimeout(() => {
            if (msg.parentNode) {
                msg.remove();
            }
        }, duration);

        return msg;
    },

    // ================ MODAL HELPERS ================
    showModal: (modal, content) => {
        if (modal) {
            const contentElement = modal.querySelector('#letterContent');
            if (contentElement) {
                contentElement.innerHTML = content;
            }
            modal.style.display = 'block';
        }
    },

    hideModal: (modal) => {
        if (modal) {
            modal.style.display = 'none';
        }
    },

    // ================ LOADING HELPERS ================
    hideLoadingScreen: (loadingElement, delay = 2000) => {
        setTimeout(() => {
            if (loadingElement) {
                loadingElement.classList.add('fade-out');
                setTimeout(() => {
                    loadingElement.style.display = 'none';
                }, 500);
            }
        }, delay);
    },

    // ================ EVENT HELPERS ================
    addClickEffect: (element, scaleDown = 0.95, duration = 150) => {
        element.style.transform = `scale(${scaleDown})`;
        setTimeout(() => {
            element.style.transform = '';
        }, duration);
    },

    // ================ SLIDESHOW HELPERS ================
    createSlideshow: (images, container) => {
        let currentIndex = 0;
        let autoPlayInterval;

        const imageElement = container.querySelector('#slideshow-image');
        const captionElement = container.querySelector('#slideshow-caption');
        const dotsContainer = container.querySelector('#slideshow-dots');
        const prevBtn = container.querySelector('#prevBtn');
        const nextBtn = container.querySelector('#nextBtn');

        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = container.querySelectorAll('.dot');

        const updateSlide = (index) => {
            if (!images[index]) return;

            imageElement.src = images[index].src;
            captionElement.textContent = images[index].caption;

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            currentIndex = index;
        };

        const goToSlide = (index) => {
            updateSlide(index);
        };

        const nextSlide = () => {
            const nextIndex = (currentIndex + 1) % images.length;
            updateSlide(nextIndex);
        };

        const prevSlide = () => {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlide(prevIndex);
        };

        const startAutoPlay = () => {
            autoPlayInterval = setInterval(nextSlide, 4000);
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };

        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Auto-pause on hover
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);

        // Start auto-play
        startAutoPlay();

        return {
            goToSlide,
            nextSlide,
            prevSlide,
            startAutoPlay,
            stopAutoPlay
        };
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
