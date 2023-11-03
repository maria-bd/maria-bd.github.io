const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu ul a'); // Define the links variable
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    this.classList.toggle('active');
});
links.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
