def bumps(road):
    
    num_bumps = road.count('n')
    
    if num_bumps <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"
    


def greet(name):
    names = ['riley', 'molly', 'BILLY' ]
    if name in names:
        formatted_name = name.capitalize()
        return f"Hello {formatted_name}!"
    

def reverse(lst):
    empty_list = list() 
    
    for item in lst:
        empty_list = [item] + empty_list  
    
    return empty_list 
    
def averages(arr):
    result = []  
    
    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        result.append(avg)
    
    return result


def last_survivor(letters, coords):
    letters_list = list(letters)
    for pos in coords:
        if 0 <= pos < len(letters_list):  
            del letters_list[pos]
    return letters_list[0] if letters_list else None 


def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for char in s:
        digit = int(char)
        
        if digit % 2 == 0:
            even_sum += digit
        else:
            odd_sum += digit
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"