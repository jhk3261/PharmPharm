import json
from .models import Message, Room

from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async

"""
Django의 Views.py와 비슷한 클래스
여기에 웹소켓과 관련된 동작들을 정의해서 사용할 수 있음
"""

class ChatConsumer(AsyncWebsocketConsumer):
    
    """
    WebSocket 연결이 정상적으로 이루어졌을 때 호출되는 메소드
    클라이언트가 채팅에 연결하면 실행
    """

    async def connect(self):
        # 파라미터 값으로 채팅 룸의 이름을 가져온다.
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]

        # 웹 소켓 내부의 그룹이름
        self.room_group_name = "chat_%s" % self.room_name

        # 채널 레이어에 해당 방장 그룹 추가
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        # 웹소켓 연결 허용
        await self.accept()


    """
    사용자와 WebSocket 연결이 종료되었을 때 호출되는 메소드
    클라이언트가 채팅에서 연결을 끊으면 실행
    """

    async def disconnect(self, close_code):
        # 현재 방의 연결을 끊는다.
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)
    

    """
    사용자가 메세지를 보낼 때 호출되는 메소드
    """

    async def receive(self, text_data):
        # 클라이언트에서 보낸 채팅 데이터를 들고온다.
        text_data_json = json.loads(text_data)
        # 채팅 내용 부분 추출
        message = text_data_json["message"]
        # 유저 닉네임 추출
        user = text_data_json["user"]

        print("receive 함수 실행")

        # 대화내용을 DB에 저장
        await self.save_message_on_db(user, self.room_name, message)

        # 룸 그룹으로 메세지 보냄
        # type : chat_message => 아래에 있는 chat_message() 실행
        # 만약에 type이 disconnect이면 종료 명령 실행
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type" : "chat_message",
                "message" : message,
                "user" : user,
            },
        )
    
    async def chat_message(self, event):
        print(event)
        message = event["message"]
        user = event["user"]

        print("chat_message 함수 실행")

        # 웹소켓으로 메세지 보냄
        await self.send(text_data=json.dumps({"message" : message, "user" : user}))
    

    """
    데이터베이스에 메세지 내용을 저장하는 메소드
    """

    @database_sync_to_async
    def save_message_on_db(self, user, room_name, message):
        room = Room.objects.get(name = room_name)
        message = Message.objects.create(user=user, room=room, content = message)

        message.save()