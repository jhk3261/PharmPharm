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

// 예약 메모 글자수 제한
$('.Modal_Content_Input_Txt2').keyup(function (e) {
	let content = $(this).val();
    
    // 글자수 세기
    if (content.length == 0 || content == '') {
    	$('.textCount').text('0자');
    } else {
    	$('.textCount').text(content.length + '자');
    }
    
    // 글자수 제한
    if (content.length > 300) {
    	// 300자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 300));
        // 300자 넘으면 알림창 뜨도록
        alert('글자수는 300자까지 입력 가능합니다.');
    };
});



// // index.html 파일
// document.querySelector("#room-name-submit").onclick = function (e) {
//   // 자신의 프로젝트에서 방 번호 입력하는 부분의  
//   // Input태그 아이디를 room-name-input으로 설정
//   const roomName = document.querySelector("#room-name-input").value;
//   // 자신의 프로젝트에서 유저 닉네임 입력하는 부분의 
//   //  Input태그 id를 nickname-input으로 설정
//   const userName = document.querySelector("#nickname-input").value;
//   // 채팅방 입장시 주소창의 경로
//   window.location.pathname = `/chat/${roomName}/${userName}`;
// };

// index.html 파일
document.querySelector("#room-name-submit").onclick = function (e) {
  // 자신의 프로젝트에서 방 번호 입력하는 부분의  
  // Input태그 아이디를 room-name-input으로 설정
  const roomName = document.querySelector(".Booking_Box_item1").value
  // 자신의 프로젝트에서 유저 닉네임 입력하는 부분의 
  //  Input태그 id를 nickname-input으로 설정
  const userName = document.querySelector(".Booking_Box_item2").value;
  // 채팅방 입장시 주소창의 경로
  window.location.pathname = `/chat/${roomName}/${userName}`;
};