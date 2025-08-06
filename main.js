// Hiệu ứng highlight menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});

// Hiệu ứng ảnh động nhẹ
const galleryImgs = document.querySelectorAll('.gallery img');
galleryImgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.boxShadow = '0 8px 24px rgba(231,84,128,0.18)';
    });
    img.addEventListener('mouseout', () => {
        img.style.boxShadow = '';
    });
});

// Hiệu ứng gửi liên hệ
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const msg = document.createElement('div');
        msg.className = 'success-message';
        msg.innerText = 'Gửi liên hệ thành công! Cảm ơn bạn đã nhắn tin 💌';
        contactForm.appendChild(msg);
        contactForm.reset();
        setTimeout(() => msg.remove(), 3500);
    });
}
