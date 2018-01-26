import json
from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from .models import Politician
from .forms import AddForm



def index(request):
    politicians_list = Politician.objects.all()
    context = {
        'politicians_list': politicians_list,
    }

    return render(request, 'application/index.html', context)


def add_name(request):
    # TODO validate if there isn't someone with the same first_name, last_name already
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        name_variants = request.POST['name_variants']
        current_function = request.POST['current_function']
        previous_functions = request.POST['previous_functions']
        Politician.objects.create(
            first_name = first_name,
            last_name = last_name,
            name_variants = name_variants,
            current_function = current_function,
            previous_functions = previous_functions
        )
        identification_string = list(Politician.objects.
                                                filter(first_name=first_name).
                                                filter(last_name=last_name).
                                                values('identification_string'))
        return JsonResponse(identification_string, safe=False)


@csrf_exempt
def search_id_string(request):
    # TODO validate if there isn't any string in the database
    if request.method == "POST":
        identification_string = request.POST['identification_string']
        politician = list(Politician.objects.
                                    filter(identification_string=identification_string).
                                    values('first_name',
                                           'last_name',
                                           'name_variants',
                                           'current_function',
                                           'previous_functions'))
        return JsonResponse(politician, safe=False)


def api_database(request):
    politicians = list(Politician.objects.all().values())
    return JsonResponse(politicians, safe=False)


def api_search(request):
    identification_string = request.GET.get('identification_string', '')
    politician = list(Politician.objects.
                                filter(identification_string=identification_string).
                                values('first_name',
                                       'last_name',
                                       'name_variants',
                                       'current_function',
                                       'previous_functions'))
    return JsonResponse(politician, safe=False)
