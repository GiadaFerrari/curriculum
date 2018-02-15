let logo = document.querySelector(".logo");

logo.addEventListener('click',()=>{
    window.location.replace('index.html')
})

function load(){
    document.getElementById("sidenav").classList.add('open-mq');}

window.onload = load

function openNav() {
     document.getElementById("sidenav").classList.add('open');
    document.getElementById("sidenav").classList.remove('close');
     document.getElementById("sidenav").style.transition = "0.5s";
}


function closeNav() {
    document.getElementById("sidenav").style.transition = "0.5s";
    document.getElementById("sidenav").classList.remove('open');
    document.getElementById("sidenav").classList.remove('open-mq');
    document.getElementById("sidenav").classList.add('close');
    document.getElementById("sidenav").classList.remove('closebtn');
}





const modalCoreArea = document.querySelector(".modal-coreArea");
console.log(modalCoreArea);
modalCoreArea.addEventListener("click", ()=>modalCoreArea.classList.add("hide"));


const businessimg = document.querySelector(".businessimg");

businessimg.addEventListener("click", ()=>modalCoreArea.classList.remove("hide"));


