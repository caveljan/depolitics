from django.contrib import admin

from .models import Politician

admin.site.register(Politician)

admin.site.site_header = 'depolitics administration'
admin.site.site_title = 'depolitics administration'