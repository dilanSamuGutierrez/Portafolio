// Toggle menu for small screens
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-container').classList.toggle('open');
});
// Close menu when a link is clicked
document.querySelectorAll('.menu-center ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.menu-container').classList.remove('open');
    });
});