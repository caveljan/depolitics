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


class SearchForm(forms.ModelForm):
    class Meta:
        model = Politician
        fields = ('first_name',
                  'last_name',
                  'name_variants',
                  'current_function',
                  'previous_functions')
        # fields = ('identification_string', )