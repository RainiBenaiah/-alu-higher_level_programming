#!/usr/bin/python3
'''a class called Square which represents a aquare'''


class Square:
    '''Square class with private size attribute'''

    def __init__(self, size):
        '''Initializes instances of Square.

           Args:
                size (int): Represents the size of one side of the square.
        '''
        self.__size = size
