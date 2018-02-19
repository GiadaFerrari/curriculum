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
        if (link != "#sem4") {
            cont.classList.add('padMe')
        }


    }
});


//dynamic

const template = document.querySelector('template').content;
const templateEx = document.querySelector('.examTem').content;
const source = 'semesters.json'

fetch(source).then(result => result.json()).then(data => showData(data));

function showData(e) {

    e.forEach(elem => {
        console.log(elem[0].id)

        const clone = template.cloneNode(true);
        const cloneEx = templateEx.cloneNode(true);
        const appendHere = document.querySelector('.semesters');
        let exams = elem.exams


        clone.querySelector('a').name = elem.id
        clone.querySelector('.semN').textContent = elem.semesters
        clone.querySelector('.ects').textContent = elem.ects
        clone.querySelector('.knowledge').textContent = elem.knowledge
        clone.querySelector('.skills').textContent = elem.skills
        clone.querySelector('.competencies').textContent = elem.competencies
        exams.forEach((ex) => {
            cloneEx.querySelector('.examName').textContent = ex.name
            cloneEx.querySelector('.ectsEx').textContent = ex.ects
            cloneEx.querySelector('.timeEx').textContent = ex.time
            cloneEx.querySelector('.evaluationEx').textContent = ex.evaluation
            cloneEx.querySelector('.shortDes').textContent = ex.shortDescription
        })
        clone.appenChild(cloneEx);
        appendHere.appendChild(clone);



    })
}





/*   const clone = template.cloneNode(true);

        const appendHere = document.querySelector(".appendMe" + elem.category)

        clone.querySelector('.food').src = images + "small/" + elem.image + "-sm.jpg";

        clone.querySelector('.name').textContent = elem.name;
        clone.querySelector('.price').textContent = elem.price + ",-";
        clone.querySelector('.description').textContent = elem.shortdescription;
*/
