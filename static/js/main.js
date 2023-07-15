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

//down버튼 슬라이드
const DownBtnP = document.querySelector('.PeopleWrap').querySelector('.downBtn');

DownBtnP.addEventListener("click", ()=>{
    var location = document.querySelector('.Sc2').offsetTop;

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
