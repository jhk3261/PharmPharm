from django.shortcuts import render
from .models import Message, Room

def index(request):
    return render(request, "index.html")

def room(request, room_name, nickname):
    # 방이 있으면 해당 방 정보를 들고오고, 방이 없으면 방을 생성한다.
    room, created = Room.objects.get_or_create(name=room_name)

    # 만약 최초로 방이 생성되면 DB에 저장
    if created:
        room.save()
    
    # 해당 방의 메세지 내용만 들고오기
    message = Message.objects.filter(room=room)

    return render(
        request,
        "room.html",
        {"room_name": room_name, "messages": message, "user": nickname},
    )