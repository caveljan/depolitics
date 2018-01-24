from django.shortcuts import render
from django.http import HttpResponse

from .models import Politician


def index(request):
    politicians_list = Politician.objects.all()
    context = {
        'politicians_list': politicians_list,
    }

    return render(request, 'application/index.html', context)
