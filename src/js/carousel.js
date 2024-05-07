//find the handle

document.addEventListener("click", (e) => {
    let handle;
    if (e.target.matches(".handle")) {
      handle = e.target;
    } else {
      handle = e.target.closest(".handle");
    }
    if (handle != null) onHandleClick(handle);
  });
  
  //functions when click on the handle
  
  function onHandleClick(handle) {
    const progressBar = handle
      .closest(".carousel-row")
      .querySelector(".carousel-progress");
  
    const slider = handle.closest(".carousel-container").querySelector(".slider");
  
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
  
    const progressBarItemCount = progressBar.children.length;
  
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex <= 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1);
        setTimeout(() => {
          progressBar.children[sliderIndex].classList.remove("active-item");
          progressBar.children[progressBarItemCount - 1].classList.add(
            "active-item"
          );
        }, 600);
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1);
      }
      setTimeout(() => {
        progressBar.children[sliderIndex].classList.remove("active-item");
        progressBar.children[sliderIndex - 1].classList.add("active-item");
      }, 600);
    }
  
    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0);
        setTimeout(() => {
          progressBar.children[sliderIndex].classList.remove("active-item");
          progressBar.children[0].classList.add("active-item");
        }, 600);
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1);
      }
      setTimeout(() => {
        progressBar.children[sliderIndex].classList.remove("active-item");
        progressBar.children[sliderIndex + 1].classList.add("active-item");
      }, 600);
    }
  }
  
  //throtle
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".carousel-progress").forEach(calProgressBar);
  }, 250);
  
  window.addEventListener("resize", throttleProgressBar);
  // progress bar
  
  document.querySelectorAll(".carousel-progress").forEach(calProgressBar);
  
  function calProgressBar(progressBar) {
    progressBar.innerHTML = "";
  
    const slider = progressBar.closest(".carousel-row").querySelector(".slider");
    const itemCount = slider.children.length;
    // console.log(itemCount)
  
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );
    // console.log(itemsPerScreen)
  
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    );
    //progress bar item calc
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);
  
    // reset slider item per screen
    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1);
      sliderIndex = progressBarItemCount - 1;
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");
      if (i === sliderIndex) {
        barItem.classList.add("active-item");
      }
      progressBar.appendChild(barItem);
    }
  }
  
  // throttle
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
  
      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
  
  // video controlling
  
  document.addEventListener("DOMContentLoaded", function () {
    
  });
  
  // sliding-arrow effect
  
  const genreTitle = document.querySelectorAll(".genre-title");
  genreTitle.forEach((genreTitle) => {
    const slidingArrow = genreTitle.querySelector(".sliding-arrow");
  
    genreTitle.addEventListener("mouseover", () => {
      // Remove class to reset transition delay when hovering starts again
      slidingArrow.style.removeProperty("transition-delay");
    });
  
    genreTitle.addEventListener("mouseleave", () => {
      // Add class to apply transition delay after hovering stops
      slidingArrow.style.setProperty("transition-delay", ".4s");
      setTimeout(() => {
        slidingArrow.style.removeProperty("transition-delay");
      }, 400);
    });
  });
  
  // hidden card script
  
  const hiddenInfoCard = document.querySelectorAll(".hidden-info-card");
  
  hiddenInfoCard.forEach((hiddenInfoCard) => {
    const hiddenInfo = hiddenInfoCard.querySelector(".card-info");
  
    hiddenInfoCard.addEventListener("mouseenter", () => {
      hiddenInfo.style.setProperty("display", "block");
    });
  
    // hide when mouse lease
    hiddenInfoCard.addEventListener("mouseleave", () => {
      hiddenInfo.style.setProperty("display", "none");
    });
  });
  
  // hidden card video script
  
  document.addEventListener("DOMContentLoaded", () => {
    const hiddenInfoCards = document.getElementsByClassName("hidden-info-card");
    [...hiddenInfoCards].forEach((hiddenCard) => {
      const dummyVideo =
        hiddenCard.querySelector(".card-dummy-video").children[0];
      // console.log(dummyVideo)
      dummyVideo.pause();
      hiddenCard.addEventListener("mouseenter", () => {
        setTimeout(() => {
          dummyVideo.play();
          console.log("play");
        }, 500);
      });
      hiddenCard.addEventListener("mouseleave", () => {
        dummyVideo.pause();
        dummyVideo.currentTime = 0;
        console.log("paused");
      });
    });
  });
  