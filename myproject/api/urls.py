from django.urls import path
from .views import hello

urlpatterns = [
    path("hello/", hello),
    path('comments/', comments_list),
    path('comments/<int:pk>/', comment_detail),
]

