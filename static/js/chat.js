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


//  room.html 관련

// 방 이름 입력
const roomName = "{{room_name}}";
// 웹소켓 요청 주소
const chatSocket = new WebSocket(
    `ws://${window.location.host}/ws/chat/${roomName}/`
);

// - 서버로부터 메세지를 수신했을 때 실행되는 이벤트 핸들러 -
chatSocket.onmessage = function (e) {
    // 서버로부터 데이터 수신
    const data = JSON.parse(e.data);
    // 받은 데이터를 화면에 추가
    document.querySelector(
        "#chat-log"
    ).innerHTML += `<div>${data.user} : ${data.message}</div>`;
};

// - 웹소켓 연결이 끊겼을 때 발생하는 핸들러 -
chatSocket.onclose = function (e) {
    console.error("Chat socket closed unexpectedly");
};

// - 엔터 눌렀을 때 자동으로 메세지가 보내지게 하기 위해 설정 -
document.querySelector("#chat-message-input").focus();
document.querySelector("#chat-message-input").onkeyup = function (e) {
    if(e.keyCode === 13) {
        // enter, return
        document.querySelector("#chat-message-submit").click();
    }
};

// - 전송버튼을 눌러 메세지를 보낼 때 발생하는 이벤트 핸들러 -
document.querySelector("#chat-message-submit").onclick = function (e) {
    // Input 필드의 value를 가져온다.
    const messageInputDom = document.querySelector("#chat-message-input");
    const message = messageInputDom.value;

    //  빈 메세지일 때는 메세지를 보내지 않는다.
    if(message === "") return;

    // 빈 메세지가 아닐 때는 서버에 해당 내용을 전송
    chatSocket.send(
        JSON.stringify({
            message: message,
            user: "{{user}}",
        })
    );
    
    // 인풋값 초기화
    messageInputDom.value = "";
};

// - 채팅방 나가기를 클릭했을 때 호출되는 이벤트 핸들러 -
document.querySelector("#room-leave").onclick = function(e){
    chatSocket.close();
    window.location.pathname = `/chat`;
};