//동물/인간 전환 탭


//각페이지 nav 색 설정
const MainMenu = document.querySelectorAll('.MainMenu');

window.onload = function(){
    MainMenu[2].classList.add('active');
}

//인기순 최신순 색변화
const filters = document.querySelectorAll('.fill');

filters.forEach(filter => {
    filter.addEventListener("click", ()=> { 
        document.querySelector('.PeopleWrap').querySelector('.filter').querySelector('.active')?.classList.remove('active');
        document.querySelector('.AnimalWrap').querySelector('.filter').querySelector('.active')?.classList.remove('active');
        filter.classList.add('active');
    });

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

//글증가 페이지 번호 부여

