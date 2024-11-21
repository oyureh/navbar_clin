from django.urls import path
from applaudos import views

urlpatterns = [
    path('', views.laudario, name='laudario'),
]
