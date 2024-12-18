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


