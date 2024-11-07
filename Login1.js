document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username && password) {
            // Redirect to homepage.html after successful login
            window.location.href = 'index1.html'; 
        } else {
            alert('Please fill in both fields.');
        }
    });
});
