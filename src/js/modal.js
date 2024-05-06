document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.getElementsByClassName('modalOpenButton');
  const modalContainer = document.getElementById('modal-container');
  const modal = document.getElementById('modal');
  const modalClosingButton = document.getElementById("closing-button");

  const setOpen = (button) => {
    button.addEventListener('click', () => {
      modalContainer.style.zIndex = 9999;
      modalContainer.style.opacity = 1;
      modalContainer.style.scale = 1;
      modal.style.scale = 1;
      modal.style.opacity = 1;
    })
  }

  const setClose = (button) => {
    button.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-container') || e.target.classList.contains('closing-button')) {
        modalContainer.style.zIndex = -9999;
        modalContainer.style.opacity = 0;
        modal.style.scale= .8;
        modal.style.opacity = 0;
      }
    });
  }

  // setClose(modalContainer);
  setClose(modalClosingButton)

  // setOpen(modalClosingButton);

  for (let i = 0; i < openButtons.length; i++) {
    setOpen(openButtons[i]);
  }

});
