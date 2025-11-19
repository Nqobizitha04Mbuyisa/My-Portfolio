
// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMobile = document.querySelector('.close-mobile');

if (mobileMenu && mobileNav) {
    mobileMenu.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });
}

if (closeMobile && mobileNav) {
    closeMobile.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
}

// Profile image fullscreen effect
const profileImg = document.querySelector('.profile-img');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');

if (profileImg && fullscreenOverlay) {
    profileImg.addEventListener('click', () => {
        fullscreenOverlay.style.display = 'flex';
    });

    fullscreenOverlay.addEventListener('click', () => {
        fullscreenOverlay.style.display = 'none';
    });
}

// Update current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.getElementById('current-year');
if (footerYear) footerYear.textContent = currentYear;

// Ensure Education section is visible
const educationSection = document.getElementById('education');
if (educationSection) educationSection.style.display = 'block';
