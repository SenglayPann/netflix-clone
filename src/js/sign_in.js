document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInButton = document.getElementById('sign-in-btn');

    signInButton.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === 'cybernexus@gmail.com' && password === 'cybernexus123') {
            // Redirect to homepage.html
            window.location.href = './homepage.html';
        } else {
            emailInput.value = '';
            passwordInput.value = '';
            setTimeout(() => {
                alert(`try email: 'cybernexus@gmail.com'\n password: 'cybernexus123`);
            }, 10);
        }
    });
});
