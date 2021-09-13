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
    window.addEventListener('resize',function() {
        const mediaQuery = window.matchMedia('(min-width: 715px)')
        if (mediaQuery.matches) {
            links.style.display = "flex";
        } else {
            links.style.display = "none";
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
