from django.shortcuts import render
from django.shortcuts import render


def tabelaLaudos(request):
    return render(
        request,
        'tabelaLaudos.html', 
    )

def laudario(request):
    return render(
        request,
        'laudario.html', 
    )

def home(request):
    return render(
        request,
        'home.html', 
    )

def login(request):
    return render(
        request,
        'login.html', 
    )

def clinica(request):
    return render(
        request,
        'home-clinica.html', 
    )




