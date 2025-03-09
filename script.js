// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Function to close menu
const closeMenu = () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        // Reset to bars icon
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
};

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    // Toggle between bars and times (cross) icon
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    // Check if menu is active and click is outside menu and menu toggle
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
    closeMenu();
});