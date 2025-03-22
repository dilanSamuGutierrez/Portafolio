
ScrollReveal().reveal(".explore__card", {
    duration: 1000,
    interval: 500,
    reset: true,
    mobile: false
});

const sr = ScrollReveal({
    duration: 1000,
    distance: '50px',
    easing: 'ease-out',
    reset: true,
    mobile:false
});

sr.reveal('.tech-section', { delay: 300, origin: 'bottom', distance: '60px' });
sr.reveal('.tech-item', { delay: 300, interval: 100, origin: 'bottom', scale: 0.9,distance: '20px' });
sr.reveal('.hero-right dotlottie-player', { delay: 400, origin: 'right', distance: '70px' });



const ScrollRevealAboutMi = ScrollReveal({
    duration: 1000,
    origin: 'top',
    distance: '30px',
    opacity: 0,
    reset: true
});

ScrollRevealAboutMi.reveal('.sobre-mi', { delay: 100 });
ScrollRevealAboutMi.reveal('.titulo', { delay: 200, origin: 'top', distance: '30px' });
ScrollRevealAboutMi.reveal('.perfil', { delay: 300, origin: 'left' });
ScrollRevealAboutMi.reveal('.foto', { delay: 400, origin: 'left', distance: '30px' });
ScrollRevealAboutMi.reveal('.texto-contenido', { delay: 500, origin: 'right' });
ScrollRevealAboutMi.reveal('.btn-cv-container', { delay: 600, origin: 'bottom' });


// Detectar si es un dispositivo móvil basado en el ancho de pantalla
if (window.innerWidth > 768) {

    const ScrollRevealContact = ScrollReveal({
        duration: 1000,
        distance: '30px',
        easing: 'ease-in-out',
        reset: false
    });

   
    ScrollRevealContact.reveal('.contact-me-section .titulo', { delay: 200, origin: 'top' });
    ScrollRevealContact.reveal('.contact-form', { delay: 300, origin: 'left', distance: '80px' });
    ScrollRevealContact.reveal('.info-section', { delay: 300, origin: 'right', distance: '80px' });
    ScrollRevealContact.reveal('.contact-item', { delay: 400, interval: 200, origin: 'bottom', scale: 0.95 });
} else {
    console.log('ScrollReveal deshabilitado en dispositivos móviles.');
}
