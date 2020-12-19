const buttonLeft = document.getElementById('button-left');
const navbarLeft = document.getElementById('nav-left');

buttonLeft.addEventListener('click', function(){
    navbarLeft.classList.toggle("active");
    buttonLeft.classList.toggle("active");
})



const buttonRight = document.getElementById('button-right');
const navbarRight = document.getElementById('nav-right');

buttonRight.addEventListener('click', function(){
    navbarRight.classList.toggle("active");
    buttonRight.classList.toggle("active");
})