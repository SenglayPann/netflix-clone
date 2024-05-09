const nav = document.getElementById('navbar-container');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) { // Fixed typo here
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropDownListContainer = document.getElementById('dropdown-image-container');
    const dropDownList = document.getElementById('dropdown-content');
    let timeout ;

    
    dropDownListContainer.addEventListener('mouseenter', () => {
        console.log(1)
        dropDownList.style.display = 'block';
    })
    dropDownListContainer.addEventListener('mouseleave', () => {
        console.log(2)
        timeout = setTimeout(() => {
            dropDownList.style.display = 'none';
        }, 500);
    });

    dropDownList.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
    })
})


