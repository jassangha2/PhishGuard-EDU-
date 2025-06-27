const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log credentials to console (for training purpose ONLY)
    console.log(`Captured Email: ${email}`);
    console.log(`Captured Password: ${password}`);

    // Redirect to educational page
    window.location.href = 'success.html';
});