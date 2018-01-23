from django.shortcuts import render
from django.http import HttpResponse

from .models import Politician


def index(request):
    politicians_list = Politician.objects.all()
    context = {
        'politicians_list': politicians_list,
    }

    # template = loader.get_template('add/index.html')
    # return HttpResponse(template.render(context, request))

    return render(request, 'add/index.html', context)
