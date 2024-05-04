const inputBox = document.getElementById("input0");
const arrow = document.getElementById("click-on");
const content = document.getElementById("container-box");
const arrowChangeColor = document.getElementById("svg-arrow");
const initialHeight = content.clientHeight;
const initialWidth = content.clientWidth;
inputBox.addEventListener('focus', () => {
  arrow.style.display = 'block';
});

inputBox.addEventListener('blur', () => {
  if (inputBox.value.length === 0) {
    arrow.style.display = 'none';
    arrowChangeColor.style.fill = 'gray';
  }  
});
inputBox.addEventListener('keydown', () => {
  arrowChangeColor.style.fill = 'black';
});

content.addEventListener('keypress', (event) => {
    const inputBox = document.getElementById("input0");
    const arrowChangeColor = document.getElementById("svg-arrow");
    content.style.height = initialHeight + "px";
    content.style.width = initialWidth + "px";
    console.log()
    if (event.keyCode === 13) {
    content.style.height = initialHeight + "px";
    content.style.width = initialWidth + "px";
    event.preventDefault();
    content.innerHTML = `
    <div class="preloader"></div>
    `;
    setTimeout(() => {
      content.innerHTML = `
      <div class="form-section">
                <h1 id="header">Contact us</h1>
                <h3 id="sub-header">Your Issue: </h3>
                <div class="input-container">
                    <div class="input-box">
                        <input id="input0" type="text" placeholder="Describe your issue">
                        <button id="click-on">
                            <svg id="svg-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="m13.084 1.662 3.398 3.397H0v1.875h16.483l-3.4 3.4 1.327 1.326 4.999-5.001a.938.938 0 0 0 0-1.326l-5-4.997-1.325 1.326Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div> 
            <div id="quick-link-container-replacement">
                <p>Try these recommendations</p>
                <ul class="links-replacement">
                    <li>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#050505" d="M8 7h8v2H8zM8 11h5v2H8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6v16h12V4ZM4 2v20h16V2H4Z" fill="#050505"></path></svg>
                        <a href="#">
                            <span>How to restart your Netflix account</span>
                            <br>
                            <small>
                                To restart your Netflix account, sign in to Netflix and select Restart Your Membership from any non-Kids profile.
                            </small>
                        </a>
                        
                    </li>
                    <li>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#050505" d="M8 7h8v2H8zM8 11h5v2H8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6v16h12V4ZM4 2v20h16V2H4Z" fill="#050505"></path></svg>
                        <a href="#">
                            <span>How to pay for Netflix</span>
                            <br>
                            <small>
                                There are several options to pay for Netflix.
                            </small>
                        </a>
                        
                    </li>
                    <li>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#050505" d="M8 7h8v2H8zM8 11h5v2H8z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H6v16h12V4ZM4 2v20h16V2H4Z" fill="#050505"></path></svg>
                        <a href="#">
                            <span>Billing and Payments</span>
                            <br>
                            <small>
                                Learn how to update or change your Netflix payment method, resolve payment issues, or investigate unexpected charges.
                            </small>
                        </a>
                        
                    </li>
                </ul>
                <div id="contact-us">
                    <p>Get in touch : </p>
                    <div class="buttons-container">
                        <button class="button">
                            <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.94 6.25a1 1 0 0 1 1.367-.366l1.732 1a1 1 0 0 1 .366 1.367l-1.227 2.125-.397.688.58.543c1.184 1.107 2.62 2.172 4.24 3.108 1.62.935 3.26 1.646 4.812 2.118l.76.231.397-.688 1.227-2.126a1 1 0 0 1 1.366-.366l1.732 1a1 1 0 0 1 .367 1.366l-1 1.733c-.374.647-1.493 1.16-3.596.955-2.004-.195-4.529-1.027-7.065-2.491-2.536-1.465-4.52-3.235-5.69-4.873-1.229-1.72-1.344-2.944-.97-3.591l1-1.732Zm2.367-2.098a3 3 0 0 0-4.098 1.099l-1 1.732c-1.007 1.744-.24 3.915 1.075 5.754 1.372 1.92 3.592 3.868 6.317 5.442 2.725 1.573 5.523 2.521 7.872 2.75 2.25.219 4.514-.202 5.52-1.946l1-1.733a3 3 0 0 0-1.098-4.098l-1.732-1a3 3 0 0 0-4.098 1.099l-.821 1.422a21.879 21.879 0 0 1-3.643-1.69 21.883 21.883 0 0 1-3.285-2.31l.821-1.422A3 3 0 0 0 8.04 5.152l-1.732-1Z" fill="#000"></path></svg>
                            <span>
                                <strong>Call Us</strong>
                                <br>
                                <small>Wait time : less than 1 minute</small>
                            </span>
                        </button>
                        <button class="button">
                            <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.5a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6v3a1 1 0 0 1-1.555.832l-4.74-3.16a4 4 0 0 0-2.219-.672H6a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6h12Zm4 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h3.486a6 6 0 0 1 3.328 1.008L16 18.63V15.5h2a4 4 0 0 0 4-4v-2Zm-16 3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000"></path></svg>
                            <span>
                                <strong>Chat with Us</strong>
                                <br>
                                <small>Wait time : 9 minute</small>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
      `;
    }, 300);
  }
});