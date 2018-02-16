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
//core areas slider
let coreArea = document.querySelector('.coreAreas');

window.onscroll = function(){sliderMobile()}
function sliderMobile() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop>600){
        console.log ('hi papa');
        coreArea.classList.add('moveMeUpCA', 'gridMeCA');
        coreArea.classList.remove('coreAreas')

    } else { console.log ('hi mama');
            coreArea.classList.add('coreAreas')
     coreArea.classList.remove('moveMeUpCA', 'gridMeCA')}}
