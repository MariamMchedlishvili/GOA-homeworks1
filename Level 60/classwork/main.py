def get_sum(a, b):
    if a == b:  
        return a
    else:
        total = 0
        for i in range(min(a, b), max(a, b) + 1):
            total += i
        return total


def number(lines):
    result = []
    
    for index in range(len(lines)):
        word = str(index + 1) + ": " + lines[index]
        result.append(word)
    
    return result



def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    st = st.lower()
    
    for char in alphabet:
        if char not in st:
            return False
    
    return True

def wave(people):
    string = []
    
    for i in range(len(people)):
        if people[i].isalpha():
            new_string = people[:i] + people[i].upper() + people[i + 1:]
            string.append(new_string)
    
    return string