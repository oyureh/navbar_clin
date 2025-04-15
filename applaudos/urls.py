from django.urls import path
from applaudos import views

urlpatterns = [
    path('', views.tabelaLaudos, name='tabelaLaudos'),
    path('laudario/', views.laudario, name='laudario'),
    path('home/', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('clinica/', views.clinica, name='clinica'),
]
