const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) { // Fixed typo here
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
});