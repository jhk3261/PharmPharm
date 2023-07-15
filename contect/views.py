from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Pharmacist

def search_pharmacist(request):
    query = request.GET.get('query')
    pharmacists = Pharmacist.objects.filter(name__icontains=query)
    context = {
        'query': query,
        'pharmacists': pharmacists
    }
    return render(request, '/templates/contect/contact.html', context)