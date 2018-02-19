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


//program slide

let semesters = document.querySelector('.circle');

window.onscroll = function () {
    sliderMobile()
}

function sliderMobile() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        console.log('hi papa');
        semesters.classList.add('moveMeUp', 'gridMe');


    } else {
        console.log('hi mama');
        semesters.classList.remove('moveMeUp', 'gridMe')
    }


}


let semAnchor = document.querySelectorAll('.circle a');
let semTarget = document.querySelectorAll('.semesterContainer')
semAnchor.forEach((e) => {


    e.addEventListener('click', padMe);


        function padMe(e) {

            semTarget.forEach((a) => {
                a.classList.remove('padMe')
            })
            let link = this.getAttribute("href");
            let cont = document.querySelector(link);
            console.log(cont)
            if (link != "#sem4"){
            cont.classList.add('padMe')}


        }
    }
);







//semAnchor.forEach((anchors)=>{window.scroll({behavior: 'smooth'});})
