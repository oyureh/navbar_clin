from django.shortcuts import render

def laudario(request):
    return render(
        request,
        'laudario.html', 
    )