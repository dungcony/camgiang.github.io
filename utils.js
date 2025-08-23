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
    }
};

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
