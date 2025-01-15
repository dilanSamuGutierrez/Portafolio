// Selecciona los elementos necesarios
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); // Selecciona todos los enlaces del menú

// Agrega el evento de clic para alternar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Agrega el evento de clic a cada enlace para cerrar el menú
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


function showSection(sectionId, button) {
    document.querySelectorAll('.portfolio-content').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');


    const buttons = document.querySelectorAll('.menu-item');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Limpiar mensajes de error previos
        document.querySelectorAll(".error-message").forEach((el) => el.remove());
        document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));

        // Validar campo de nombre
        if (!nameInput.value.trim()) {
            showError(nameInput, "Por favor, introduce tu nombre.");
            isValid = false;
        }

        // Validar campo de correo
        if (!emailInput.value.trim()) {
            showError(emailInput, "Por favor, introduce tu correo electrónico.");
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, "El correo electrónico no parece válido. Inténtalo nuevamente.");
            isValid = false;
        }

        // Validar campo de mensaje
        if (!messageInput.value.trim()) {
            showError(messageInput, "El mensaje no puede estar vacío.");
            isValid = false;
        }

        // Evitar el envío del formulario si hay errores
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Función para mostrar mensajes de error
    function showError(input, message) {
        input.classList.add("is-invalid");

        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;

        input.parentElement.appendChild(error);

        // Animación para destacar el error
        error.style.opacity = 0;
        setTimeout(() => {
            error.style.opacity = 1;
            error.style.transform = "translateY(0)";
        }, 50);
    }

    // Función para validar correos electrónicos
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
