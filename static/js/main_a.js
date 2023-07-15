// 동물/인간 전환 탭
const themeBtn = document.querySelector('.tapwrap');
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

initializeScrollReveal(animalWrap);

//down버튼 슬라이드
const DownBtnA = document.querySelector('.AnimalWrap').querySelector('.downBtn');

DownBtnA.addEventListener("click", ()=>{
    var location = document.querySelector('.AnimalWrap').querySelector('.Sc2').offsetTop;

    console.log(location);
    window.scrollTo({top: location, behavior: 'smooth'});
})

//nav바 event
const scP = document.querySelector('.Sc2');
const scheight = scP.offsetTop-100;

window.addEventListener("scroll", function(){
    const header = this.document.querySelector('header');

    header.classList.toggle("sticky", window.scrollY > 0);
        if(header.classList.contains('sticky')){
            let scroll = window.scrollY;
            const sticky = document.querySelector('.sticky');
            if( scroll > scheight ) {
                sticky.style.boxShadow = "0 0 0 0";
                sticky.style.color = "#ffffff";
                sticky.querySelector('i').style.color = "#ffffff";
            }else{
                sticky.style.boxShadow = "0 3px 10px #dadada7d";
                sticky.style.color = "#000000";
                sticky.querySelector('i').style.color = "#000000";
            }
        } else {
            header.style.boxShadow = "0 0 0 ";
        }
    });

//돋보기 클릭 event
const icon = document.querySelector('.fa-magnifying-glass');
const search = document.querySelector('.Search');
const input = document.querySelector('.input');
icon.addEventListener("click", ()=>{
    search.classList.toggle('active');
    icon.classList.toggle('active');
    input.classList.toggle('active');
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
