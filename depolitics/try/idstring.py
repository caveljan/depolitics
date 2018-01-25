import math
import random

class IdentificationStringField:
    description = "The Identification String for the Politician."

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)

    def get_random_char(self):
        chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                 "u", "v", "w", "x", "y", "z",
                 "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        indexNumber = math.ceil(random.random()*100 % 35)

        return chars[indexNumber]

    def make_string(self):
        idString = ""

        for i in range(0, 8):
            idString += self.get_random_char()

        return idString


