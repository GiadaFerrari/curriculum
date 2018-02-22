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

//dynamic
const template = document.querySelector('template').content;
const templateEx = document.querySelector('.examTem').content;
const source = 'semesters.json'

fetch(source).then(result => result.json()).then(data => showData(data));


function showData(e) {

    console.log(e)
    e.forEach(elem => {

        const clone = template.cloneNode(true);
        const cloneEx = templateEx.cloneNode(true);
        const appendHere = document.querySelector('.semesters');
        const appendExam = clone.querySelector('.examAppend');

        const appendKnowl = clone.querySelector('.knowledge')
        const appendSkills = clone.querySelector('.skills')
        const appendCompet = clone.querySelector('.competencies')

        let exams = elem.exams


       clone.querySelector('a').id = elem.id;
       // clone.querySelector('.semesterContainer').id = elem.id;


        clone.querySelector('.semN').textContent = elem.semester + " "
        clone.querySelector('.ects').textContent = elem.ects
        clone.querySelectorAll('.semesterContainer h2').forEach((h2)=>{h2.style.cssText = "border-color:" + elem.color + ";"})
        clone.querySelectorAll('.semesterContainer h1').forEach((h1)=>{h1.style.cssText = "background-color:" + elem.color + "; opacity: .7;"  })

        elem.knowledge.forEach(know => {
            let knoLi = document.createElement('li')

            knoLi.textContent = know;
            appendKnowl.appendChild(knoLi)

        })
        elem.skills.forEach(skill => {
            let skillsLi = document.createElement('li')

            skillsLi.textContent = skill;
            appendSkills.appendChild(skillsLi)

        })
        elem.competencies.forEach(com => {
            let comLi = document.createElement('li')

            comLi.textContent = com;
            appendCompet.appendChild(comLi)

        })


        exams.forEach((ex) => {
            cloneEx.querySelector('.examName').textContent = ex.name;
            cloneEx.querySelector('.ectsEx').textContent = ex.ects
            cloneEx.querySelector('.timeEx').textContent = ex.time
            cloneEx.querySelector('.evaluationEx').textContent = ex.evaluation
            cloneEx.querySelector('.shortDes').textContent = ex.shortDescription
        })

        appendExam.appendChild(cloneEx);
        appendHere.appendChild(clone);


    })
}

//program slide

let semesters = document.querySelector('.circle');

window.onscroll = function () {
    sliderMobile()
}

function sliderMobile() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
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
