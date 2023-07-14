from django.contrib import admin
from django.urls import path, include
from social import views

urlpatterns = [
    path('join/', views.join, name='join'),
    path('login/', views.login, name='login'),
]
