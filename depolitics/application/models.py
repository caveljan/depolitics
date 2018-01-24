from django.db import models

class Politician(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    name_variants = models.TextField()
    current_function = models.CharField(max_length=100)
    previous_functions = models.TextField()
    identification_string = models.CharField(max_length=8, unique=True)
