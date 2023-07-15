from django.db import models

# 메세지의 내용을 저장하는 Message 모델
class Message(models.Model):
    # 유저 닉네임
    user = models.CharField(max_length=100)
    # 방 정보
    room = models.ForeignKey(
        "Room", related_name="room", on_delete=models.CASCADE, db_column="room_id"
    )
    # 채팅 내용 
    content = models.TextField()
    # 채팅 전송 시간 
    send_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.content
    
    def last_30_messages(self):
        return Message.objects.order_by("create_at").all()[:30]

# 채팅방 정보를 저장하는 Room 모델
class Room(models.Model):
    # 채팅방 번호(채팅방 번호는 유니크(unique)하다. 즉, 중복된 방 번호는 없다)
    name = models.CharField(max_length=100, unique=True)
    # 채팅 방 상태(0 : 대화 전, 1 : 채팅 진행 중, 2 : 채팅 종료)
    status = models.IntegerField(default=0)