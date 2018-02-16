let logo = document.querySelector(".logo");
let sidenav = document.getElementById("sidenav");

//nav

logo.addEventListener('click', () => {
    window.location.replace('index.html')
})

//document.body.addEventListener('click', closeNav);


function load() {
    sidenav.classList.add('open-mq');
}

window.onload = load

function openNav() {
    sidenav.classList.add('open');
    sidenav.classList.remove('close');
    sidenav.style.transition = "0.5s";
}


function closeNav() {
    sidenav.style.transition = "0.5s";
    sidenav.classList.remove('open');
    sidenav.classList.remove('open-mq');
    sidenav.classList.add('close');

}
//core areas

const modalCoreArea = document.querySelector(".modal-coreArea");
console.log(modalCoreArea);
modalCoreArea.addEventListener("click", () => modalCoreArea.classList.add("hide"));


const businessimg = document.querySelector(".businessimg");

businessimg.addEventListener("click", () => modalCoreArea.classList.remove("hide"));
