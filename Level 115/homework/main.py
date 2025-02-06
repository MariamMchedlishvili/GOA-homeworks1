def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  
    return result


def sum_digits(n):
    result = 0
    n = abs(n) 
    while n > 0:
        result += n % 10
        n //= 10
    return result


def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1) 
    max2 = max(lst)  

    return max1 + max2

