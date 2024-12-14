ScrollReveal().reveal(".explore__card", {
    duration: 1000,
    interval: 500,
    reset: true
});

// Configuración general de ScrollReveal
const srSocialLink = ScrollReveal({
    distance: '40px',
    duration: 1200,
    easing: 'ease-in-out',
    delay: 200,
    reset: true
});

// Aplicar ScrollReveal a cada enlace social con un ligero intervalo
srSocialLink.reveal('.social-link', {
    origin: 'bottom',
    interval: 200, // Aparecen con un pequeño desfase entre ellos
    scale: 0.85,  // Aparecen desde un tamaño reducido para dar efecto de "zoom in"
    opacity: 0
});


const srSobreMi = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    delay: 200,
    reset: true
});

// Aplica efectos a diferentes partes
srSobreMi.reveal('.sobremi h2', {
    origin: 'top'
});

srSobreMi.reveal('.portfolio h2', {
    origin: 'top'
});

srSobreMi.reveal('.section__container h2', {
    origin: 'top'
});

srSobreMi.reveal('.sobremi p', {
    origin: 'left',
    delay: 300
});



srSobreMi.reveal('.sobremi .fila', {
    origin: 'bottom',
    interval: 300
});

srSobreMi.reveal('.sobremi .btn', {
    origin: 'bottom',
    delay: 200
});

const srPortafolio = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    scale: 0.9,  // Aparecen con un tamaño inicial reducido para dar efecto de "zoom in"
    opacity: 0   // Empiezan invisibles
});

// Aplicar efecto a cada elemento de .portfolio-item con un intervalo
srPortafolio.reveal('.portfolio-item', {
    origin: 'left',  // Comienzan desde la izquierda
    interval: 200,   // Intervalo de 200ms entre cada item
    rotate: { x: 0, y: 20, z: 0 }  // Giro leve para dar un efecto tridimensional
});

ScrollReveal().reveal('.contact-section h2', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    delay: 200
});

ScrollReveal().reveal('.contact-section p', {
    duration: 1000,
    origin: 'top',
    distance: '30px',
    easing: 'ease-in-out',
    delay: 400
});

ScrollReveal().reveal('.form-group', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out',
    interval: 200 // Intervalo entre los elementos
});

ScrollReveal().reveal('.primary-btn', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    delay: 600
});

ScrollReveal().reveal('.footer-left p', {
    origin: 'bottom',      // Efecto de aparición desde abajo
    distance: '20px',      // Distancia desde la que aparece
    duration: 1000,        // Duración del efecto en milisegundos
    delay: 200             // Retardo antes de que comience
});

ScrollReveal().reveal('.footer-right', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 300             // Retardo antes de que comience
});

ScrollReveal().reveal('.social-links li', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 400,            // Retardo inicial
    interval: 100          // Intervalo entre la animación de cada ícono
});