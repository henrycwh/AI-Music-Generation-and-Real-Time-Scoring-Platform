from django.shortcuts import render

# Create your views here.

def home_page_view(request):
    return render(request, 'Main_Page.html')

def music_library_view(request):
    return render(request, 'Music_Library.html')

def music_evaluation_view(request):
    return render(request, 'Music_Evaluation_Room.html')