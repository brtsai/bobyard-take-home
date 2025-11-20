from django.urls import path
from .views import hello, comments_list, comment_detail 

urlpatterns = [
    path("hello/", hello),
    path('comments/', comments_list),
    path('comments/<int:pk>/', comment_detail),
]

