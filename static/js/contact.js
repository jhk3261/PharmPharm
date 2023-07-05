// Modal을 가져옵니다.
var modals = document.getElementsByClassName("Modal");
// Modal을 띄우는 클래스 이름을 가져옵니다.
var btns = document.getElementsByClassName("Booking_Icon");
// Modal을 닫는 close 클래스를 가져옵니다.
var spanes = document.getElementsByClassName("Modal_Close");
var cancel = document.getElementsByClassName("Modal_Content_Input_Cancel");
var items = document.querySelectorAll(".Article_Nav_Content_item_btn");
var funcs = [];
 
console.log(cancel)
// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick =  function() {
      modals[num].style.display = "block";
      console.log(num);
    };

    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
    spanes[num].onclick = function() {
      modals[num].style.display = "none";
    };

    cancel[num].onclick = function() {
      modals[num].style.display = "none";
    };
  }
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
// Modal 영역 밖을 클릭하면 Modal을 닫습니다.
window.onclick = function(event) {
  if (event.target.className == "Modal") {
      event.target.style.display = "none";
  }
};

document.addEventListener('DOMContentLoaded', function() {

  items.forEach(function(item) {
    items.addEventListener('click', function() {
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// 색 바뀌는
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.Counselor_Nav_Btn');
  // var buttons_N = document.querySelectorAll('.Counselor_Nav_Btn_N');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var buttons2 = document.querySelectorAll('.Booking_Nav_Btn');

  buttons2.forEach(function(button) {
    button.addEventListener('click', function() {
      buttons2.forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});