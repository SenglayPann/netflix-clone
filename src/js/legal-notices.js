var acc = document.getElementsByClassName("accordion");
console.log(acc[0].nextElementSibling)
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
var panel = this.nextElementSibling;

if (panel.style.maxHeight) {
panel.style.maxHeight = null;
} else {
    console.log(panel.scrollHeight)
panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}

console.log(document.querySelector('body').scrollHeight)