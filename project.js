let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector ('.header .flex . navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/*const observer =  new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show'); 
        }

    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

*/






