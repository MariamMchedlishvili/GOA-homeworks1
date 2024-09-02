def to_camel_case(text):
    result = ''
    capitalize_next = False

    for char in text:
        if char in '-_':
            capitalize_next = True
        else:
            if capitalize_next:
                result += char.upper()
                capitalize_next = False
            else:
                result += char
    return result