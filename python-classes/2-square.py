#!/usr/bin/python3
'''Defined a class called Square which represents a aquare'''


class Square:
    '''Square class with private size attr'''

    def __init__(self, size):
        '''Initializes instances of Square.

           Args:
                size (int): Represents the size of one side of the square.
        '''
        if (type(size) != int):
            raise TypeError("size must be an integer")
        if (size < 0):
            raise ValueError("size must be >= 0")
        self.__size = size
