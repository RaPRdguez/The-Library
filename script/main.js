
// menu btn functionality

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

// Scroll Reveal

ScrollReveal().reveal('.news-cards', {delay: 1000});
ScrollReveal().reveal('.social', {delay: 1200});
ScrollReveal().reveal('.footer-links', {delay: 1200});
ScrollReveal().reveal('.footer', {delay: 1200});