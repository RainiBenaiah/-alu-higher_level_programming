#!/usr/bin/python3
"""
doc
"""


def test_int(x):
    return all(isinstance(ele, int) for ele in x)


def test_float(x):
    return all(isinstance(ele, float) for ele in x)


def test_row(mtrx):
    n = len(mtrx[0])
    for row in mtrx:
        if len(row) != n:
            return False
    return True
