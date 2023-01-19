
// menu btn functionality

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// Scroll Reveal

ScrollReveal().reveal('.news-cards', {delay: 800});
ScrollReveal().reveal('.social', {delay: 800});
ScrollReveal().reveal('.footer-links', {delay: 800});
ScrollReveal().reveal('.footer', {delay: 800});