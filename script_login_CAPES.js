document.addEventListener('DOMContentLoaded', function () {
    // Rotar imágenes de fondo
    const images = document.querySelectorAll('.background-slider img');
    let currentIndex = 0;
    function rotateImages() {
        images.forEach(img => img.classList.remove('active'));
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    setInterval(rotateImages, 2350);

    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');
            const validUsers = [
                { user: "equipo", pass: "CAPES1234" },
            ];
            const isValid = validUsers.some(u => u.user === username && u.pass === password);
            if (isValid) {
                // Guardar autenticación en localStorage
                localStorage.setItem('capes_authenticated', 'true');
                localStorage.setItem('username', username);
                // Redirigir a CAPES.html sin prefijo
                window.location.href = 'https://emiliocolor.com/CAPES.html';
            } else {
                errorMessage.style.display = 'block';
                document.getElementById('password').value = '';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        });
    }

    // Limpiar formulario
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('username').autocomplete = 'off';
            document.getElementById('password').autocomplete = 'new-password';
            document.getElementById('username').focus();
        });
    }

    // Ocultar error al escribir
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (usernameInput) {
        usernameInput.addEventListener('input', function () {
            document.getElementById('errorMessage').style.display = 'none';
        });
    }
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            document.getElementById('errorMessage').style.display = 'none';
        });
    }
});
