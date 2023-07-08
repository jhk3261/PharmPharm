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