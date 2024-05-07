
// accordion-hidding-texts

var accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        this.classList.toggle('active');

        var icon = this.querySelector('.arrow-icon');
        icon.style.transform = icon.style.transform === 'rotate(90deg)' ? 'rotate(360deg)' : 'rotate(90deg)';

        // Select the next sibling element (sub-menu)
        var subMenu = this.nextElementSibling;

        // Toggle the 'active' class to trigger CSS transitions
        if (this.classList.contains('active')) {
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        } else {
            subMenu.style.maxHeight = null;
        }
    });
});



// scroll-down-sidebar (sticky)

var sidebar = document.getElementById('sidebar');
window.addEventListener('scroll', function() {
    // Get the current scroll position relative to the viewport
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Calculate the distance between the top of the viewport and the top of the sidebar
    var sidebarTopDistance = sidebar.getBoundingClientRect().top;

    // Calculate the maximum distance the sidebar can be from the top
    var maxTopDistance = 100; // Adjust this value based on your layout

    if (scrollPosition > sidebarTopDistance - maxTopDistance) {
        sidebar.style.position = 'sticky';
        sidebar.style.top = '100px';
        sidebar.style.maxWidth = '275px';
        sidebar.style.marginRight = '30px'
        sidebar.style.maxHeight = 'calc(100vh - 175px)';
        sidebar.style.width = '25%';
        sidebar.style.float = 'left';
        sidebar.style.overflowY = 'auto';
        sidebar.style.msOverflowStyle = 'none';
        sidebar.style.scrollbarWidth = 'none';
        sidebar.style.paddingBottom = '40px';
    } else {
        sidebar.style.position = 'static'; // Reset to initial position
    }
});

// Add a resize event listener to recalculate the maximum sidebar height when the window is resized
window.addEventListener('resize', function() {
    sidebar.style.maxHeight = 'calc(100vh - 175px)';
});



// anchor-clicking

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adjust the delay time as needed
    });
});

// scroling-black

