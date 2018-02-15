

function load(){
    document.getElementById("sidenav").classList.add('open-mq');

}

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
}

window.onload = load
