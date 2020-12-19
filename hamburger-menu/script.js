const button = document.getElementById('button');
const navbar = document.getElementById('nav');

button.addEventListener('click', function(){
    navbar.classList.toggle("active");
    button.classList.toggle("active");
})
