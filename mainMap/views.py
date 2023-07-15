from django.shortcuts import render, redirect

# Create your views here.

def mapSearch(request):
    return render(request, 'static/mainMap/humanMapSearching.html')
