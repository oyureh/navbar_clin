from django.urls import path
from applaudos import views

urlpatterns = [
    path('', views.tabelaLaudos, name='tabelaLaudos'),
    path('laudario/', views.laudario, name='laudario'),
]
