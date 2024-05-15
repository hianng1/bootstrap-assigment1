// JavaScript để xử lý các sự kiện hover và touch
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý sự kiện hover
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });

        dropdown.addEventListener('mouseout', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        });
    });

    // Xử lý sự kiện touch trên các thiết bị di động
    var toggler = document.querySelector('.navbar-toggler');
    toggler.addEventListener('click', function() {
        var navbar = document.querySelector('#navbarTogglerDemo02');
        navbar.classList.toggle('show');
    });
});
