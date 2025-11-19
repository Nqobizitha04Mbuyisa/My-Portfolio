
// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMobile = document.querySelector('.close-mobile');

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeMobile.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Profile image fullscreen effect
const profileImg = document.querySelector('.profile-img');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');

profileImg.addEventListener('click', () => {
    fullscreenOverlay.style.display = 'flex';
});

fullscreenOverlay.addEventListener('click', () => {
    fullscreenOverlay.style.display = 'none';
});

// Update current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
