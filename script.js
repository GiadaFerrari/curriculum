let logo = document.querySelector(".logo");

logo.addEventListener('click',()=>{
    window.location.replace('index.html')
})



function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {

    document.getElementById("sidenav").style.width = "0";

}



const modalCoreArea = document.querySelector(".modal-coreArea");
console.log(modalCoreArea);
modalCoreArea.addEventListener("click", ()=>modalCoreArea.classList.add("hide"));


const businessimg = document.querySelector(".businessimg");

businessimg.addEventListener("click", ()=>modalCoreArea.classList.remove("hide"));

