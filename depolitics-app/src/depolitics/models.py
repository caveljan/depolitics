from django.db import models

from random import randint, sample


def fisher_yates_durstenfeld_shuffle(chars):
    remaining_chars = len(chars)-1
    while remaining_chars > 1:
        index = randint(0, remaining_chars)
        remaining_chars -= 1
        chars[index], chars[remaining_chars] = chars[remaining_chars], chars[index]
    return chars


def get_random_char():
    chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
             'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
             'u', 'v', 'w', 'x', 'y', 'z',
             '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    chars_shuffled = fisher_yates_durstenfeld_shuffle(chars*2)
    chars_sampled = sample(chars_shuffled, len(chars_shuffled) - int(len(chars_shuffled)/2))
    index = randint(0, len(chars)-1)
    return chars_sampled[index]


def make_id_string():
    idString = ''
    for i in range(0, 8):
        idString += get_random_char()
    return idString


class Politician(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    name_variants = models.TextField(blank=True)
    current_function = models.CharField(max_length=100)
    previous_functions = models.TextField(blank=True)
    identification_string = models.CharField(max_length=8,   
                                             primary_key=True,
                                             editable=False,
                                             default=make_id_string)
