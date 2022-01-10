// Toggle Menu for Mobile View
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


// Stiky Navigation Bar
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("stiky", window.scrollY > 10);
})

// Jquery Easing - Smooth Scrollong Page
$('.scrolling-page').on('click', function(e) { 
    
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top
    }, 1200, 'easeInOutExpo');

    e.preventDefault();
});

// Image Lightbox
function toggle(){
    var blur = document.getElementById('hero');
    blur.classList.toggle('blur-effect');
    var blur = document.getElementById('about');
    blur.classList.toggle('blur-effect');
    var blur = document.getElementById('education');
    blur.classList.toggle('blur-effect');
    var blur = document.getElementById('skill');
    blur.classList.toggle('blur-effect');
    var blur = document.getElementById('contact');
    blur.classList.toggle('blur-effect');
    var blur = document.getElementById('svg');
    blur.classList.toggle('blur-effect');
    
    var popup = document.getElementById('popup');
    popup.classList.toggle('blur');
}