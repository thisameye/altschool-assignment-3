document.addEventListener('DOMContentLoaded', function (){
//     const nav = document.querySelector(".nav")
//     const hamburger = document.querySelector(".burger-menu")

//     hamburger.onclick =  function () {
//     if (nav.className == "show"){
//         menuEl.className = "nav"
//     } else {
//         menuEl.className = "show"
//     }
// }

    const burgerMenu = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");

    burgerMenu.addEventListener('click', function(){
        nav.classList.toggle('show');
    });

    nav.addEventListener('click', function(){
        nav.classList.remove('show');
    });

});