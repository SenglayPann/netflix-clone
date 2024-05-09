
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    const icon = this.querySelector(".icon > svg"); 
    if (this.classList.contains("active")) {
      icon.style.transform = "rotate(180deg)"; 
    } else {
      icon.style.transform = "rotate(0deg)"; 
    }
  });
}

// window.onscroll = function() {detectStickyDiv()};
  
//   function detectStickyDiv() {
//     const dropdownBorder = document.getElementById('dropdown-border');
//     var inputBox = document.getElementById("input-box");
//     var rect = inputBox.getBoundingClientRect();
    
//     if (rect.top <= 0) {
//       dropdownBorder.style.setProperty("top", "5px");
//       dropdownBorder.style.setProperty("opacity", "1");
//     } else {
//       dropdownBorder.style.setProperty("top", "-42px");
//       dropdownBorder.style.setProperty("opacity", "0");
//     }
//   }
