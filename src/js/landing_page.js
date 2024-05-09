var acc = document.getElementsByClassName("layout5-box-inner");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                var svg = this.querySelector('svg');
                console.log(panel.style.maxHeight)
                if (panel.style.maxHeight) {
                    svg.style.transform = 'rotate(0deg)';
                    panel.style.padding = '0px';
                    panel.style.maxHeight = null;
                } else {
                    svg.style.transform = 'rotate(45deg)';
                    panel.style.padding = '24px';
                    panel.style.maxHeight = panel.scrollHeight + 48 + "px";
                } 
                
                
            });
        }

const inputBox = document.getElementById("input-box");
const button = document.getElementById("start-button");

function checkEmail() {
    const inputValue = inputBox.value;
    if (inputValue === 'cybernexus@gmail.com') { 
        window.location.href = './pages/sign_in.html';
    } else { 
        setTimeout(() => {
            alert("Invalid email!! Please enter 'cybernexus@gmail.com'");
        }, 10);
        inputBox.value = '';
    }
}

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { 
        checkEmail();
    }
});

button.addEventListener('click', function() {
    checkEmail();
});

const signInButton = document.getElementById('sign-in')
signInButton.addEventListener("click", function() {
    window.location.href = './pages/sign_in.html'
})