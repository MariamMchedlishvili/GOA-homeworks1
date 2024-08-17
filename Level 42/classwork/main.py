def remove_exclamation_marks(s):
    result = ''
    for i in s:
        if i != '!':
            result += i
    return result



def distinct(seq):
    result = []
    for num in seq:
        if num not in result:
            result.append(num)
            
    return result
