from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add_name, name='add_name'),
    path('search/', views.search_id_string, name='search_id_string'),
    path('api/database', views.api_database, name='api_database'),
    path('api/search', views.api_search, name='api_search')
]