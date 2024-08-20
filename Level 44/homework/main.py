def pig_it(text):
    words = text.split()
    result = []

    for word in words:
        if word.isalpha():
            pig_word = word[1:] + word[0] + "ay"
            result.append(pig_word)
        else:
            result.append(word)

    return " ".join(result)



def duplicate_count(text):
    text = text.lower()

    char_count = {}

    for char in text:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    duplicates = 0
    for count in char_count.values():
        if count > 1:
            duplicates += 1
    
    return duplicates