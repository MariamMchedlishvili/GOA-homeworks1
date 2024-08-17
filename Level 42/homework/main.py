def to_jaden_case(string):
    jaden_cased_words = []

    words = string.split()

    for word in words:
        jaden_cased_words.append(word.capitalize())

    jaden_cased_string = ' '.join(jaden_cased_words)
    
    return jaden_cased_string




def stray(arr):
    arr.sort()
    
    if arr[0] != arr[1]:
        return arr[0]
    else:
        return arr[-1]
    

def dup(arry):
    result = []

    for word in arry:
        new_word = word[0]

        for i in range(1, len(word)):
            if word[i] != word[i - 1]:
                new_word += word[i]
        
        result.append(new_word)
    
    return result

# join ფუნქცია აერთიანებს სიტყვებს ერთ სტრიქონში
# replace ფუნქცია სტრინგას ანაცვლებს სტრიქონში