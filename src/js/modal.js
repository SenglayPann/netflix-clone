document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementsByClassName('button');
    const modalContainer = document.getElementById('modal-container');
    const modal = document.getElementById('modal');

    button[0].addEventListener('click', () => {
      modalContainer.style.zIndex = 9999;
      modalContainer.style.opacity = 1;
      modalContainer.style.scale = 1;
      modal.style.scale = 1;
      modal.style.opacity = 1;
    })

    modalContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-container')) {
        modalContainer.style.zIndex = -9999;
        modalContainer.style.opacity = 0;
        modal.style.scale = .8;
        modal.style.opacity = 0;
      }
    })
  });