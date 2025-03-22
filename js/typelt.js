document.addEventListener('DOMContentLoaded', function() {
    new TypeIt("#callback", {
        speed: 50,
        startDelay: 800,
        breakLines: false,
        waitUntilVisible: true,
        afterComplete: function() {
        }
    })
    .pause(500)
    .type("Dilan Gutierrez", { delay: 1000 }) 
    .delete(15, { delay: 500 })
    .type("Desarrollador Web", { delay: 1000 }) 
    .go();
});
