from django import forms

from .models import Politician


class AddForm(forms.ModelForm):
    class Meta:
        model = Politician
        fields = ('first_name',
                  'last_name',
                  'name_variants',
                  'current_function',
                  'previous_functions')




    # first_name = forms.CharField(max_length=30)
    # last_name = forms.CharField(max_length=30)
    # name_variants = forms.TextField(blank=True)
    # current_function = forms.CharField(max_length=100)
    # previous_functions = forms.TextField(blank=True)