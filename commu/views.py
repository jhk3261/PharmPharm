from django.shortcuts import render
from .models import Community

# Create your views here.

def list(request):
    list = Community.objects
    return render(request, 'comunityList.html', {'list':list})