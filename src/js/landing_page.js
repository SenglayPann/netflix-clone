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