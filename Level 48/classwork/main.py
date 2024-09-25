def accum(st):
    result = [] 
    for i, char in enumerate(st):
        part = char.upper() + char.lower() * i
        result.append(part)  
    return '-'.join(result) 