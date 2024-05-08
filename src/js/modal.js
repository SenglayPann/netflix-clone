
  // document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.getElementsByClassName("modalOpenButton");
    const idleOpenButtons = document.getElementById("IdleModalOpenButton");
    const modalContainer = document.getElementById("modal-container");
    const modal = document.getElementById("modal");
    const modalClosingButton = document.getElementById("closing-button");
    const modalVideo = document.getElementById("modal-video");
    // console.log(modalVideo)
  
    modalVideo.addEventListener("loadedmetadata", () => {
      modalVideo.pause();
    });
  
    const setOpen = (button) => {
      button.addEventListener("click", () => {
        // img url of the curren card
        const imgURL = button
          .closest(".img-container")
          .children[0].getAttribute("src");
  
        const modalImgAttribute = modal.querySelector(".modal-thumbnail-img img");
        // change position first
        modalImgAttribute.setAttribute("src", imgURL);
        modalContainer.style.zIndex = 9999;
        modalContainer.style.opacity = 1;
        modalContainer.style.scale = 1;
        if (modalVideo.paused) {
          modalVideo.muted
            ? (MmodalMuteButton.innerHTML = mutedIcon)
            : (MmodalMuteButton.innerHTML = unmutedIcon);
        }
        // wait until the position is ended
        setTimeout(() => {
          modal.style.scale = 1;
          modal.style.opacity = 1;
  
          setTimeout(() => {
            modalVideo.play();
            modalVideo.style.opacity = 1;
            setTimeout(() => {
              // pause video at after loop for 3 time
              modalVideo.style.opacity = 0;
              modalVideo.pause();
              modalVideo.currentTime = 0;
            }, modalVideo.duration * 3000);
          }, 800);
        }, 100);
      });
    };
  
    const setOpenById = (button) => {
      button.addEventListener("click", () => {
        const modalImgAttribute = modal.querySelector(".modal-thumbnail-img img");
  
        modalImgAttribute.setAttribute(
          "src",
          'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYwOhiGN8er4J6VJfTV8Rdt7h2DJq9oqZYzG9vCXN7rKryH3ramCOCwgnfy_tsCRNIqRMsium14k3MDdyPT5nQUhBxYjGGPuwPJq.webp?r=375"'
        );
  
        modalContainer.style.zIndex = 9999;
        modalContainer.style.opacity = 1;
        modalContainer.style.scale = 1;
        setTimeout(() => {
          modal.style.scale = 1;
          modal.style.opacity = 1;
  
          setTimeout(() => {
            modalVideo.play();
            modalVideo.style.opacity = 1;
            setTimeout(() => {
              modalVideo.style.opacity = 0;
              modalVideo.pause();
              modalVideo.currentTime = 0;
            }, modalVideo.duration * 3000);
          }, 800);
        }, 100);
      });
    };
  
    const setClose = (button) => {
      button.addEventListener("click", (e) => {
        if (e.target.classList.contains("closing-button")) {
          setTimeout(() => {
            modalContainer.style.zIndex = -9999;
            modalContainer.style.opacity = 0;
          }, 250);
  
          modalVideo.pause();
          modalVideo.style.opacity = 0;
          modalVideo.currentTime = 0;
  
          modal.style.scale = 0.8;
          modal.style.opacity = 0;
  
          clearTimeout(setOpen);
        }
      });
    };
  
    // setClose(modalContainer);
    setClose(modalClosingButton);
  
    for (let i = 0; i < openButtons.length; i++) {
      setOpen(openButtons[i]);
    }
  
    setOpenById(idleOpenButtons);
  
    //video control for modal
  
    const MmodalMuteButton = document.getElementById("modal-mute-button");
    const unmutedIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M17.304 21.0151C18.4898 19.8326 19.4302 18.4274 20.0712 16.8803C20.7121 15.3332 21.0411 13.6747 21.039 12.0001C21.0411 10.3255 20.7121 8.66697 20.0712 7.11987C19.4302 5.57277 18.4898 4.1676 17.304 2.98511L16.242 4.04561C17.2883 5.08899 18.118 6.32887 18.6836 7.69397C19.2492 9.05907 19.5393 10.5225 19.5375 12.0001C19.5375 15.1066 18.2775 17.9191 16.242 19.9546L17.304 21.0151Z" fill="black"/>
      <path fill="white" d="M15.1815 18.894C16.0882 17.9896 16.8073 16.915 17.2974 15.7319C17.7876 14.5488 18.0391 13.2806 18.0375 12.0001C18.0391 10.7194 17.7876 9.45106 17.2974 8.26797C16.8073 7.08487 16.0882 6.01028 15.1815 5.10596L14.121 6.16646C14.8882 6.93168 15.4967 7.84096 15.9114 8.84207C16.3261 9.84317 16.5389 10.9164 16.5375 12C16.5393 13.0837 16.3268 14.1571 15.9124 15.1585C15.4979 16.1598 14.8896 17.0694 14.1225 17.835L15.1815 18.894Z" fill="black"/>
      <path fill="white" d="M15.0375 11.4999C15.0387 12.3208 14.8646 13.1339 14.5253 13.8923C14.186 14.6507 13.6882 15.3396 13.0605 15.9193L12 14.9374C12.4882 14.4864 12.8754 13.9506 13.1393 13.3607C13.4031 12.7708 13.5385 12.1384 13.5375 11.4999C13.5375 10.1583 12.9495 8.943 12 8.06245L13.0605 7.08052C13.6882 7.66025 14.186 8.34912 14.5253 9.10754C14.8646 9.86597 15.0387 10.679 15.0375 11.4999V11.4999ZM10.5 5.94442C10.4998 5.81375 10.4598 5.68578 10.3846 5.57523C10.3093 5.46467 10.2019 5.37601 10.0747 5.31944C9.9475 5.26286 9.80562 5.24067 9.6654 5.25541C9.52517 5.27015 9.39228 5.32122 9.282 5.40276L5.7375 8.02773H2.25C2.05109 8.02773 1.86032 8.10089 1.71967 8.23113C1.57902 8.36136 1.5 8.53799 1.5 8.72217V14.2777C1.5 14.4618 1.57902 14.6385 1.71967 14.7687C1.86032 14.8989 2.05109 14.9721 2.25 14.9721H5.7375L9.282 17.5971C9.39228 17.6786 9.52517 17.7297 9.6654 17.7444C9.80562 17.7591 9.9475 17.737 10.0747 17.6804C10.2019 17.6238 10.3093 17.5351 10.3846 17.4246C10.4598 17.314 10.4998 17.1861 10.5 17.0554V5.94442ZM6.468 9.26383L9 7.38885V15.611L6.468 13.736C6.33524 13.6374 6.1702 13.5835 6 13.5832H3V9.4166H6C6.1702 9.41632 6.33524 9.36245 6.468 9.26383V9.26383Z" fill="black"/>
      </svg>
      `;
    const mutedIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M10.0755 5.3249C10.2026 5.38612 10.3098 5.48192 10.3849 5.60132C10.46 5.72071 10.4999 5.85886 10.5 5.9999V17.9999C10.4998 18.141 10.4598 18.2792 10.3846 18.3986C10.3093 18.518 10.2019 18.6138 10.0747 18.6749C9.9475 18.736 9.80562 18.76 9.6654 18.744C9.52517 18.7281 9.39228 18.673 9.282 18.5849L5.7375 15.7499H2.25C2.05109 15.7499 1.86032 15.6709 1.71967 15.5302C1.57902 15.3896 1.5 15.1988 1.5 14.9999V8.9999C1.5 8.80099 1.57902 8.61023 1.71967 8.46957C1.86032 8.32892 2.05109 8.2499 2.25 8.2499H5.7375L9.282 5.4149C9.39236 5.32669 9.52539 5.27143 9.66578 5.25551C9.80616 5.23959 9.94819 5.26364 10.0755 5.3249ZM9 7.5599L6.468 9.5849C6.33524 9.69141 6.1702 9.7496 6 9.7499H3V14.2499H6C6.1702 14.2502 6.33524 14.3084 6.468 14.4149L9 16.4399V7.5599ZM20.781 8.4689C20.8508 8.53857 20.9063 8.62134 20.9441 8.71245C20.9819 8.80357 21.0013 8.90125 21.0013 8.9999C21.0013 9.09856 20.9819 9.19624 20.9441 9.28735C20.9063 9.37847 20.8508 9.46124 20.781 9.5309L18.3105 11.9999L20.781 14.4689C20.9218 14.6097 21.0009 14.8007 21.0009 14.9999C21.0009 15.1991 20.9218 15.3901 20.781 15.5309C20.6402 15.6717 20.4492 15.7509 20.25 15.7509C20.0508 15.7509 19.8598 15.6717 19.719 15.5309L17.25 13.0604L14.781 15.5309C14.6402 15.6717 14.4492 15.7509 14.25 15.7509C14.0508 15.7509 13.8598 15.6717 13.719 15.5309C13.5782 15.3901 13.4991 15.1991 13.4991 14.9999C13.4991 14.8007 13.5782 14.6097 13.719 14.4689L16.1895 11.9999L13.719 9.5309C13.6493 9.46117 13.594 9.37839 13.5562 9.28728C13.5185 9.19617 13.4991 9.09852 13.4991 8.9999C13.4991 8.90129 13.5185 8.80364 13.5562 8.71253C13.594 8.62142 13.6493 8.53864 13.719 8.4689C13.8598 8.32807 14.0508 8.24896 14.25 8.24896C14.3486 8.24896 14.4463 8.26838 14.5374 8.30612C14.6285 8.34386 14.7113 8.39917 14.781 8.4689L17.25 10.9394L19.719 8.4689C19.7887 8.39906 19.8714 8.34364 19.9626 8.30584C20.0537 8.26803 20.1513 8.24856 20.25 8.24856C20.3487 8.24856 20.4463 8.26803 20.5374 8.30584C20.6286 8.34364 20.7113 8.39906 20.781 8.4689Z" fill="black"/>
      </svg>
      `;
    const replayIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2425_9920)">
      <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01"/>
      <path d="M18.364 18.364C16.7353 19.9927 14.4853 21 12 21C7.02945 21 3 16.9706 3 12C3 7.02945 7.02945 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63605C19.193 6.46505 21 8.5 21 8.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21 4V8.5H16.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_2425_9920">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
      </svg>        
      `;
    MmodalMuteButton.addEventListener("click", function () {
      if (modalVideo.paused) {
        modalVideo.muted
          ? (MmodalMuteButton.innerHTML = mutedIcon)
          : (MmodalMuteButton.innerHTML = unmutedIcon);
        modalVideo.play();
        modalVideo.style.opacity = 1;
        setTimeout(() => {
          modalVideo.style.opacity = 0;
          modalVideo.pause();
          modalVideo.currentTime = 0;
        }, modalVideo.duration * 3000);
      } else if (modalVideo.muted) {
        modalVideo.muted = false;
        MmodalMuteButton.innerHTML = unmutedIcon;
      } else {
        modalVideo.muted = true;
        MmodalMuteButton.innerHTML = mutedIcon;
      }
    });
  
    // replay
  
    modalVideo.addEventListener("pause", () => {
      if (modalVideo.currentTime === 0) {
        MmodalMuteButton.innerHTML = replayIcon;
      }
    });
  // });