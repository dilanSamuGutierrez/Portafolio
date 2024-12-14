document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de TypeIt con pausas variables y un efecto más natural
    new TypeIt("#callback", {
        speed: 50,
        startDelay: 800,
        breakLines: false,
        waitUntilVisible: true,
        afterComplete: function() {
            // Agrega más personalización si lo deseas
        }
    })
    .type("Soy ")
    .pause(500)
    .type("<span class='highlight'>Dilan Gutierrez</span>", { delay: 700 }) 
    .delete(15, { delay: 100 })
    .type("<span class='highlight'>Desarrollador Web</span>", { delay: 700 }) 
    .go();
});
