document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.background-slider img');
    let currentIndex = 0;
    function rotateImages() {
        images.forEach(img => img.classList.remove('active'));
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    setInterval(rotateImages, 2350);
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const validUsers = [
        { user: "emiliocolor", pass: 
        "ADMINISTRADOR1234" },
        { user: "mariosaenz86162@gmail.com", pass: 
        "C​LASSCLOUD2" },
        { user: "jarturosanmar@gmail.com", pass: 
        "CLASSCLOUD3" },
        { user: "evan", pass: 
        "CLASSCLOUD4" }
    ];
    const isValid = validUsers.some(u => u.user === username && u.pass === password);
    if (isValid) {
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('username', username);
        window.location.href = 'inicio.html';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('password').value = '';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});

document.getElementById('clearBtn').addEventListener('click', function () {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('username').autocomplete = 'off';
    document.getElementById('password').autocomplete = 'new-password';
    document.getElementById('username').focus();
});

document.getElementById('username').addEventListener('input', function () {
    document.getElementById('errorMessage').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function () {
    document.getElementById('errorMessage').style.display = 'none';
});
