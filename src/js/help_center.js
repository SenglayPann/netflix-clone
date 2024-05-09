
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

var dropDowns = document.querySelectorAll(".link-box");

dropDowns.forEach(function(dropDown) {
    dropDown.addEventListener("click", function() {
        var dropdown = this.nextElementSibling;
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "flex";
        }
    });
});
