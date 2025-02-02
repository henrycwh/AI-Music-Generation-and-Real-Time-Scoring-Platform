"""
URL configuration for music_generation_web_server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from web_server.views import home_page_view
from web_server.views import music_library_view
from web_server.views import music_evaluation_view

urlpatterns = [
    path('music_generation_web_server/web_server/', home_page_view, name='home_page_view'),
    path('web_server/music_library_view/', music_library_view, name='music_library_view'),
    path('web_server/music_evaluation_view/', music_evaluation_view, name='music_evaluation_view'),
]
