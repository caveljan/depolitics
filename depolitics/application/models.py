from django.db import models

from math import ceil
from random import random, randint


def fisher_yates_shuffle(chars):
    list_range = range(0, len(chars))
    for i in list_range:
        j = randint(list_range[0], list_range[-1])
        chars[i], chars[j] = chars[j], chars[i]
    return chars


def get_random_char():
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
             "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
             "u", "v", "w", "x", "y", "z",
             "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    chars_shuffled = fisher_yates_shuffle(chars)
    print(chars)
    print("_________")
    print(chars_shuffled)
    indexNumber = ceil(random()*100 % 35)
    return chars_shuffled[indexNumber]


def make_id_string():
    idString = ""
    for i in range(0, 8):
        idString += get_random_char()
    return idString


class Politician(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    name_variants = models.TextField(blank=True)
    current_function = models.CharField(max_length=100)
    previous_functions = models.TextField(blank=True)
    identification_string = models.CharField(max_length=8, primary_key=True, editable=False, default=make_id_string)
