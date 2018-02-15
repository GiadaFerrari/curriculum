

function load(){
    //document.getElementById("sidenav").style.width = "250px";

}

function openNav() {
     document.getElementById("sidenav").style.transition = "0.5s";
    //document.getElementById("sidenav").style.width = "250px";

}

function closeNav() {
    document.getElementById("sidenav").style.transition = "0.5s";
    document.getElementById("sidenav").style.width = "0";

}

window.onload = load
