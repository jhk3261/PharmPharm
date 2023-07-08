// 동물/인간 전환 탭
const themeBtn = document.querySelector('.tapwrap');
const peopleWrap = document.getElementById('PeopleWrap');
const animalWrap = document.getElementById('AnimalWrap');

// scroll event
const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
});

function initializeScrollReveal(container) {
    const mainIntro = container.querySelector('.Mainintro');
    const mainText = container.querySelector('.MainText');
    const pointEnter = container.querySelector('.PointEnter');
    const downBtn = container.querySelector('.downBtn');
    const subTitle = container.querySelector('.SubTitle');
    const findBtn = container.querySelector('.FindBtn');
    const moveBtnWrap = container.querySelector('.MoveBtnWrap');

    sr.reveal(mainIntro, { delay: 300, origin: 'bottom' });
    sr.reveal(mainText, { delay: 500, origin: 'bottom' });
    sr.reveal(pointEnter, { delay: 700, origin: 'bottom' });
    sr.reveal(downBtn, { delay: 900, origin: 'bottom' });

    sr.reveal(subTitle, { delay: 300, origin: 'left' });
    sr.reveal(findBtn, { delay: 300, origin: 'right' });
    sr.reveal(moveBtnWrap, { delay: 500, origin: 'bottom' });
}

initializeScrollReveal(peopleWrap);

function ChangeOpacity(container) {
    const mainIntro = container.querySelector('.Mainintro');
    const mainText = container.querySelector('.MainText');
    const pointEnter = container.querySelector('.PointEnter');
    const downBtn = container.querySelector('.downBtn');
    const subTitle = container.querySelector('.SubTitle');
    const findBtn = container.querySelector('.FindBtn');
    const moveBtnWrap = container.querySelector('.MoveBtnWrap');

    mainIntro.style.opacity = 1;
    mainText.style.opacity = 1;
    pointEnter.style.opacity = 1;
    downBtn.style.opacity = 1;
    subTitle.style.opacity = 1;
    findBtn.style.opacity = 1;
    moveBtnWrap.style.opacity = 1;
}

function toggleWrap() {
    if (!animalWrap.classList.contains('active')) {
        // AnimalWrap이 active가 아닌 경우
        ChangeOpacity(peopleWrap);
        initializeScrollReveal(animalWrap);
        animalWrap.classList.add('active');
        peopleWrap.classList.remove('active');
    } else {
        // AnimalWrap이 active인 경우
        ChangeOpacity(animalWrap);
        initializeScrollReveal(peopleWrap);
        animalWrap.classList.remove('active');
        peopleWrap.classList.add('active');
    }
}
themeBtn.addEventListener('click', () => {
    toggleWrap();
});

//down버튼 슬라이드
const DownBtnP = document.querySelector('.PeopleWrap').querySelector('.downBtn');
const DownBtnA = document.querySelector('.AnimalWrap').querySelector('.downBtn');

console.log(DownBtnA);
DownBtnP.addEventListener("click", ()=>{
    var location = document.querySelector('.Sc2').offsetTop;

    console.log(location);
    window.scrollTo({top: location, behavior: 'smooth'});
})
DownBtnA.addEventListener("click", ()=>{
    var location = document.querySelector('.AnimalWrap').querySelector('.Sc2').offsetTop;

    console.log(location);
    window.scrollTo({top: location, behavior: 'smooth'});
})

//nav바 event
const scP = document.querySelectorAll('.Sc2')
const scheightP = scP[0].offsetTop-100;
const scheightA = scP[1].offsetTop-100;

window.addEventListener("scroll", function(){
    const header = this.document.querySelectorAll('header');

    header.forEach(function(item){
        item.classList.toggle("sticky", window.scrollY > 0);
        if(item.classList.contains('sticky')){
            let scroll = window.scrollY;
            const sticky = document.querySelectorAll('.sticky');
            sticky.forEach(function(item){
                if( scroll > scheightP ) {
                    item.style.boxShadow = "0 0 0";
                    item.style.color = "#ffffff";
                    item.querySelector('i').style.color = "#ffffff";
                }else{
                    item.style.boxShadow = "0 3px 10px #dadada7d";
                    item.style.color = "#000000";
                    item.querySelector('i').style.color = "#000000";
                }
            })
        } else {
            item.style.boxShadow = "0 0 0 ";
        }
    })
})

//돋보기 클릭 event
const icon = document.querySelectorAll('.fa-magnifying-glass');
const search = document.querySelectorAll('.Search');
const input = document.querySelectorAll('.input');
icon.forEach(function(item){
    item.addEventListener("click", ()=>{
        search.forEach(function(i){
            i.classList.toggle('active');
        })
        icon.forEach(function(i){
            i.classList.toggle('active');
        })
        input.forEach(function(i){
            i.classList.toggle('active');
        })
    })
})


//동물헤더 서브메뉴(약국찾기)



// const HumanTap = document.getElementById('PeopleWrap');
// const AnimalTap = document.getElementById('AnimalWrap');

// console.log(HumanTap);
// themeBtn.addEventListener('click',()=>{


//     document.body.classList.toggle("ani-theme");
//     themeBtn.classList.toggle("people");

//     localStorage.setItem("saved-theme", getCurrentTheme());
//     localStorage.setItem("saved-icon", getCurrentIcon());

//     document.body.classList.contains("ani-theme")?
//         AnimalTap.style.display = "block" : HumanTap.style.display = "block";

//     document.body.classList.contains("ani-theme")?
//         HumanTap.style.display = "none" :AnimalTap.style.display = "none" ;


// });

// const getCurrentTheme = () => document.body.classList.contains("ani-theme") ? "ani" : "peo";
// const getCurrentIcon = () => themeBtn.classList.contains("people") ? "people" : "animal";

// const savedTheme = localStorage.getItem("saved-theme");
// const savedIcon = localStorage.getItem("saved-icon");

// if(savedTheme) {
//     document.body.classList[savedTheme === "ani" ? "add" : "remove"]("ani-theme");
//     themeBtn.classList[savedIcon === "people" ? "add" : "remove"]("people");
// };
