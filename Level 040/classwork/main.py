def sum_str(a, b):
    a = int(a) if a else 0
    b = int(b) if b else 0
    return str(a + b)


def flick_switch(lst):
    result = []
    toggle = True 
    for item in lst:
        if item == 'flick':  
            toggle = not toggle
        result.append(toggle) 
    return result

def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result