def to_weird_case(words):
    words_list = words.split(' ')
    

    weird_case_words = []


    for word in words_list:

        transformed_word = ''
        
        for i in range(len(word)):
            if i % 2 == 0:
                transformed_word += word[i].upper()
            else:
                transformed_word += word[i].lower()
        
        weird_case_words.append(transformed_word)
    

    return ' '.join(weird_case_words)


def clean_string(s):
    result = []

    for char in s:
        if char == '#':
            if result:
                result.pop()
        else:
            result.append(char)

    return ''.join(result)