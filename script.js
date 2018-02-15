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

