const inputBox = document.getElementById("input0");
const arrow = document.getElementById("click-on");
const content = document.getElementById("quick-link-container");
console.log(inputBox);
console.log(arrow);
console.log(content);

inputBox.addEventListener('focus', () => {
  arrow.style.display = 'block';
});

inputBox.addEventListener('blur', () => {
  if (inputBox.value.length === 0) {
    arrow.style.display = 'none';
  }
  
});
// inputBox.addEventListener('keydown', () => {
//   if (inputBox.value.length === 5) {
//     content.innerHTML = 'slay';
//   }
// });

arrow.addEventListener('click', () => { 
  content.innerHTML = 'slay';
});
