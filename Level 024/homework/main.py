def make_upper_case(s):
       return s.upper()


def hero(bullets, dragons):
    if bullets >= dragons * 2:
        return True  
    else:
        return False
    
def invert(lst):
    inverted_list = []
    for num in lst:
        inverted_list.append(-num)
    return inverted_list


def difference_in_ages(ages):
    min_age = min(ages)
    max_age = max(ages)
    age_difference = max_age - min_age
    return (min_age, max_age, age_difference)


def sum_mix(arr):
    total_sum = 0
    for num in arr:
        total_sum += int(num)  # Convert num to integer if it's a string
    return total_sum