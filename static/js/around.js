const Buttons = document.querySelectorAll('.button');

Buttons.forEach(function(item){
    item.addEventListener("click", ()=>{
        document.querySelector('.selected').classList.remove('selected');
        item.classList.add('selected');
        OpenTap();
    })
})

function OpenTap() {
    if(Buttons[0].classList.contains('selected')){
        document.getElementById('first').style.display = "flex";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "none";
    }else if(Buttons[1].classList.contains('selected')){
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "flex";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "none";
    }else if(Buttons[2].classList.contains('selected')){
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "flex";
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "none";
    }else if(Buttons[3].classList.contains('selected')){
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "flex";
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "none";
    }else if(Buttons[4].classList.contains('selected')){
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "flex";
        document.getElementById('sixth').style.display = "none";
    }else{
        document.getElementById('first').style.display = "none";
        document.getElementById('second').style.display = "none";
        document.getElementById('third').style.display = "none";
        document.getElementById('fourth').style.display = "none";
        document.getElementById('fifth').style.display = "none";
        document.getElementById('sixth').style.display = "flex";
    }
}
