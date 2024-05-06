// Select all accordion buttons
var accordionBtns = document.querySelectorAll('.accordion-btn');

// Loop through each accordion button
accordionBtns.forEach(function(btn) {
    // Add click event listener
    btn.addEventListener("click", function() {
        // Toggle the 'active' class to show/hide the content
        this.classList.toggle('active');

        // Toggle the rotation of the arrow icon
        var icon = this.querySelector('svg');
        if (icon.style.transform === 'rotate(90deg)') {
            icon.style.transform = 'rotate(360deg)';
        } else {
            icon.style.transform = 'rotate(90deg)';
        }

        // Select the next sibling element (content) and toggle its visibility
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// scroll-down-sidebar

// Select the sidebar element
var sidebar = document.getElementById('sidebar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Get the current scroll position relative to the viewport
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Calculate the distance between the top of the viewport and the top of the sidebar
    var sidebarTopDistance = sidebar.getBoundingClientRect().top;

    // Calculate the maximum distance the sidebar can be from the top
    var maxTopDistance = 100; // Adjust this value based on your layout

    // Adjust the sidebar's position based on the scroll position and other factors
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
    } else {
        sidebar.style.position = 'static'; // Reset to initial position
    }
});

// Add a resize event listener to recalculate the maximum sidebar height when the window is resized
window.addEventListener('resize', function() {
    sidebar.style.maxHeight = 'calc(100vh - 175px)';
});
