  
const images = ['images/1.jfif','images/2.jfif','images/3.jpg'];
const time = 3000;
const imgSlide = document.getElementById("slideImg");
const links = document.querySelector('.nav_links');
function hamburger() {
    if(links.style.display == "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}
/* I dont use media query in css because with min-width it doesnt work and after i close menu in smaller version with hamburger and than resize to
desktop size menu doesnt show */
window.addEventListener('resize',function() {
    const mediaQuery = window.matchMedia('(min-width: 660px)')
    if (mediaQuery.matches) {
        if(links.style.display === "none") {
            links.style.display="flex";
        }
    }
});
let i=0;
function slider() {
    imgSlide.src = images[i];

    if(i < images.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slider()", time);
}
window.onload = slider;