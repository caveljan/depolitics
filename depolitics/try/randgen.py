from math import ceil
from random import random, randint, sample


def fisher_yates_durstenfeld_shuffle(chars):
    # Fisher Yates 
    #
    # list_range = range(0, len(chars))
    # for i in list_range:
    #     j = randint(list_range[0], list_range[-1])
    #     chars[i], chars[j] = chars[j], chars[i]
    # return chars
    remaining_chars = len(chars)-1
    while remaining_chars > 1:
        index = randint(0, remaining_chars)
        remaining_chars -= 1
        chars[index], chars[remaining_chars] = chars[remaining_chars], chars[index]
    print('shuffle', chars)
    return chars


def get_random_char():
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
             "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
             "u", "v", "w", "x", "y", "z",
             "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    chars_shuffled = fisher_yates_durstenfeld_shuffle(chars*2)
    chars_sampled = sample(chars_shuffled, len(chars_shuffled)- int(len(chars_shuffled)/2))
    print('sample', chars_sampled)
    print('sammple ordered', sorted(chars_sampled))
    index = randint(0, len(chars)-1)
    return chars_sampled[index]


def make_id_string():
    idString = ""
    for i in range(0, 8):
        idString += get_random_char()
    return idString


id_string = make_id_string()
print(id_string)