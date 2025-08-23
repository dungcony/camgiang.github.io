// ================ LOADING ANIMATION ================
window.addEventListener('load', function () {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.classList.add('fade-out');
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }, 2000); // Show loading for 2 seconds
});

// ================ LOVE COUNTER ================
// Ngày bắt đầu yêu nhau (bạn có thể thay đổi ngày này)
// Format: 'YYYY-MM-DD' - Ví dụ: '2024-03-15' cho ngày 15 tháng 3 năm 2024
const loveStartDate = new Date('2024-01-01T00:00:00'); // ⚠️ THAY ĐỔI NGÀY NÀY THEO THỰC TẾ!

function updateLoveCounter() {
    const now = new Date();
    const timeDiff = now - loveStartDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
}

// Update counter every second
if (document.getElementById('loveCounter')) {
    setInterval(updateLoveCounter, 1000);
    updateLoveCounter(); // Initial call
}

// ================ LOVE QUOTES ROTATION ================
const quotes = [
    "Em là ánh sáng trong cuộc đời anh 🌟",
    "Mỗi ngày bên em đều là một món quà 🎁",
    "Em xinh đẹp nhất khi em cười 😊",
    "Anh yêu em nhiều hơn tất cả những gì em có thể tưởng tượng 💕",
    "Em là lý do anh tin vào tình yêu 💖",
    "Với anh, em là cả thế giới 🌍",
    "Em làm trái tim anh đập nhanh hơn 💓",
    "Anh muốn ôm em mãi mãi như thế này 🤗"
];

let currentQuoteIndex = 0;

function rotateQuote() {
    const quoteElements = document.querySelectorAll('.quote');
    if (quoteElements.length === 0) return;

    // Hide current quote
    quoteElements.forEach(q => q.classList.remove('active'));

    // Show next quote
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

    // Update quote text and show
    setTimeout(() => {
        if (quoteElements[0]) {
            quoteElements[0].textContent = `"${quotes[currentQuoteIndex]}"`;
            quoteElements[0].classList.add('active');
        }
    }, 250);
}

// Auto-rotate quotes every 4 seconds
if (document.querySelector('.love-quotes')) {
    setInterval(rotateQuote, 4000);

    // Manual quote rotation button
    const nextQuoteBtn = document.getElementById('nextQuote');
    if (nextQuoteBtn) {
        nextQuoteBtn.addEventListener('click', rotateQuote);
    }
}

// ================ FLOATING HEARTS ================
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['💖', '💕', '💗', '💘', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

    const container = document.querySelector('.floating-hearts');
    if (container) {
        container.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 5000);
    }
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// ================ PARTICLES BACKGROUND ================
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';

    const container = document.querySelector('.particles');
    if (container) {
        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
}

// Create particles periodically
setInterval(createParticle, 500);

// ================ INTERACTIVE HEART BUTTON ================
const heartButton = document.getElementById('heartButton');
if (heartButton) {
    heartButton.addEventListener('click', function (e) {
        // Create flying hearts
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const flyingHeart = document.createElement('div');
                flyingHeart.className = 'flying-heart';
                flyingHeart.innerHTML = '💖';

                const rect = heartButton.getBoundingClientRect();
                flyingHeart.style.left = (rect.left + rect.width / 2) + 'px';
                flyingHeart.style.top = (rect.top + rect.height / 2) + 'px';
                flyingHeart.style.transform = `rotate(${Math.random() * 360}deg)`;

                document.body.appendChild(flyingHeart);

                // Remove after animation
                setTimeout(() => {
                    if (flyingHeart.parentNode) {
                        flyingHeart.parentNode.removeChild(flyingHeart);
                    }
                }, 2000);
            }, i * 100);
        }

        // Button animation
        heartButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            heartButton.style.transform = '';
        }, 150);
    });
}

// ================ ENHANCED GALLERY ================
// Add click effect to gallery images
const galleryItems = document.querySelectorAll('.photo-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        // Create heart burst effect
        const rect = this.getBoundingClientRect();
        for (let i = 0; i < 3; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = (rect.left + rect.width / 2) + 'px';
            heart.style.top = (rect.top + rect.height / 2) + 'px';
            heart.style.fontSize = '20px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = `flyHeart 1.5s ease-out forwards`;
            heart.style.animationDelay = (i * 0.1) + 's';

            document.body.appendChild(heart);

            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1500);
        }
    });
});

// ================ MENU HIGHLIGHTING ================
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute('href')) ||
        (window.location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
    }
});

// ================ ENHANCED FORM HANDLING ================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Create success message with animation
        const existingMsg = contactForm.querySelector('.success-message');
        if (existingMsg) {
            existingMsg.remove();
        }

        const msg = document.createElement('div');
        msg.className = 'success-message';
        msg.innerHTML = '💌 Gửi liên hệ thành công! Cảm ơn bạn đã nhắn tin cho Cẩm Giang! 💕';
        contactForm.appendChild(msg);

        // Create heart celebration
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💖';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = '25px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.animation = 'floatUp 3s ease-out forwards';

                document.body.appendChild(heart);

                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 3000);
            }, i * 200);
        }

        contactForm.reset();

        // Remove message after 4 seconds
        setTimeout(() => {
            if (msg.parentNode) {
                msg.remove();
            }
        }, 4000);
    });
}

// ================ SMOOTH SCROLL FOR MOBILE ================
// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// ================ ROMANTIC EASTER EGGS ================
// Secret heart rain when clicking the title
const title = document.querySelector('h1');
if (title) {
    let clickCount = 0;
    title.addEventListener('click', function () {
        clickCount++;
        if (clickCount >= 3) {
            // Heart rain effect
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createFloatingHeart();
                }, i * 100);
            }
            clickCount = 0;
        }
    });
}

// Add sparkle effect on mouse move (subtle)
let sparkleTimeout;
document.addEventListener('mousemove', function (e) {
    clearTimeout(sparkleTimeout);
    sparkleTimeout = setTimeout(() => {
        if (Math.random() < 0.1) { // 10% chance
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '999';
            sparkle.style.fontSize = '12px';
            sparkle.style.animation = 'fadeInUp 1s ease-out forwards';

            document.body.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }
    }, 50);
});

// ================ LOVE MESSAGE GENERATOR ================
const loveMessages = [
    "Em xinh đẹp như một thiên thần từ thiên đường! 👼✨",
    "Nụ cười của em làm cả thế giới này trở nên tươi sáng! 🌟😊",
    "Em là món quà tuyệt vời nhất mà cuộc đời tặng cho anh! 🎁💕",
    "Mỗi ngày bên em đều là một ngày hạnh phúc nhất! 🌈💖",
    "Em chơi PUBG giỏi quá, anh tự hào về em lắm! 🎮🏆",
    "Màu hồng pastel đẹp nhất khi em mặc! 💗👗",
    "Em là ánh sáng dẫn lối cho anh trong cuộc đời này! 🌟💫",
    "Yêu em nhiều hơn tất cả những ngôi sao trên trời! ⭐💕",
    "Em là lý do anh tin vào tình yêu đích thực! 💘🌹",
    "Với anh, em là cả thế giới! 🌍💖"
];

const generateBtn = document.getElementById('generateMessage');
const messageDiv = document.getElementById('generatedMessage');

if (generateBtn && messageDiv) {
    generateBtn.addEventListener('click', function () {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

        // Hide current message
        messageDiv.classList.remove('show');

        setTimeout(() => {
            messageDiv.textContent = randomMessage;
            messageDiv.classList.add('show');

            // Create heart burst
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.top = '20vh';
                    heart.style.fontSize = '20px';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1000';
                    heart.style.animation = 'floatUp 2s ease-out forwards';

                    document.body.appendChild(heart);

                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 2000);
                }, i * 100);
            }
        }, 250);

        // Button animation
        generateBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateBtn.style.transform = '';
        }, 150);
    });
}

// ================ SECRET LOVE LETTERS ================
const secretLetters = [
    {
        title: "💖 Thư tình số 1",
        content: "Em yêu à, từ ngày đầu tiên gặp em, anh đã biết rằng em chính là người anh đã tìm kiếm suốt cuộc đời. Em xinh đẹp, dễ thương và ngoan hiền đến mức làm anh say đắm không thể tự kiềm chế được."
    },
    {
        title: "💕 Thư tình số 2",
        content: "Mỗi khi nhìn thấy em cười, trái tim anh lại đập thật nhanh. Em có biết không, nụ cười của em chính là nguồn động lực để anh cố gắng mỗi ngày. Anh muốn được bảo vệ nụ cười ấy mãi mãi."
    },
    {
        title: "💗 Thư tình số 3",
        content: "Em chơi PUBG giỏi thật đấy! Anh thích nhìn em tập trung khi chơi game, thích cách em vui mừng khi 'ăn gà'. Những khoảnh khắc đơn giản ấy với em là hạnh phúc lớn nhất của anh."
    },
    {
        title: "💘 Thư tình số 4",
        content: "Anh yêu tất cả mọi thứ về em - từ cách em nói chuyện dễ thương, cách em quan tâm mọi người xung quanh, cho đến cách em làm cho cuộc sống này trở nên ý nghĩa hơn bao giờ hết."
    },
    {
        title: "💝 Thư tình số 5",
        content: "Em là công chúa nhỏ của anh, là điều tuyệt vời nhất đã đến với cuộc đời anh. Anh hứa sẽ luôn yêu thương, trân trọng và làm em hạnh phúc. Yêu em mãi mãi! 💖"
    }
];

const secretHearts = document.querySelectorAll('.secret-heart');
const letterModal = document.getElementById('letterModal');
const letterContent = document.getElementById('letterContent');
const closeModal = document.querySelector('.close-modal');

secretHearts.forEach(heart => {
    heart.addEventListener('click', function () {
        const letterIndex = parseInt(this.getAttribute('data-letter'));
        const letter = secretLetters[letterIndex];

        if (letter && letterModal && letterContent) {
            letterContent.innerHTML = `
                <h4>${letter.title}</h4>
                <p>${letter.content}</p>
                <div style="margin-top: 20px;">💌 Từ người yêu em nhất 💌</div>
            `;

            letterModal.style.display = 'block';

            // Create magical effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'fixed';
                    sparkle.style.left = Math.random() * 100 + 'vw';
                    sparkle.style.top = Math.random() * 100 + 'vh';
                    sparkle.style.fontSize = '20px';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.zIndex = '9999';
                    sparkle.style.animation = 'fadeInUp 2s ease-out forwards';

                    document.body.appendChild(sparkle);

                    setTimeout(() => {
                        if (sparkle.parentNode) {
                            sparkle.parentNode.removeChild(sparkle);
                        }
                    }, 2000);
                }, i * 200);
            }
        }
    });
});

// Close modal functionality
if (closeModal && letterModal) {
    closeModal.addEventListener('click', function () {
        letterModal.style.display = 'none';
    });

    letterModal.addEventListener('click', function (e) {
        if (e.target === letterModal) {
            letterModal.style.display = 'none';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && letterModal && letterModal.style.display === 'block') {
        letterModal.style.display = 'none';
    }
});

console.log('💖 Website loaded with love! 💖');