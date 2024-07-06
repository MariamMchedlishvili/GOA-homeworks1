def arithmetic_operations(num1, num2):
    print(num1 + num2)
    print(num1 - num2)
    print(num1 * num2)
    print(num1 / num2)

arithmetic_operations(5, 10)


def number(num1, num2):
    count = 0
    while num1 < 100:
        num1 += num2
        count += 1
    return num1, count

num1 = 2
num2 = 3

final_sum, iterations = number(num1, num2)

print(final_sum)



def check_odd_even(number):
    if number % 2 == 0:
        result = "Even"
    else:
        result = "Odd"
        print("The number " + str(number) + " is " + result + ".")
        return result
    
check_odd_even(7)


def find_largest_number(numbers):
    largest = numbers[0]
    
    for number in numbers:
        if number > largest:
            largest = number
            
    return largest

numbers_list = [6, 102, 52, 78, 74, 17]
largest_number = find_largest_number(numbers_list)
print("The largest number in the list is:", largest_number)


def find_sum(numbers):
    total = 0
    
    for number in numbers:
        total += number
        
    return total

numbers_list = [78, 55, 17, 10, 27, 62]
total_sum = find_sum(numbers_list)
print(total_sum)


def reverse_sequence(numbers):
    return numbers[::-1]

input_sequence = [1, 'two', 3, 'four', 5]
reversed_sequence = reverse_sequence(input_sequence)
print("Reversed sequence:", reversed_sequence)




def find_longest_shortest(strings):
    shortest = strings[0]
    longest = strings[0]
    
    for string in strings:
        if len(string) < len(shortest):
            shortest = string
        if len(string) > len(longest):
            longest = string
            
    return longest, shortest

strings_list = ["apple", "banana", "orange", "kiwi", "pear"]
longest_string, shortest_string = find_longest_shortest(strings_list)
print("Longest string:", longest_string)
print("Shortest string:", shortest_string)


def uppercase_string(input_str):
    uppercase_str = input_str.upper()
    return uppercase_str

str = "hello world"
uppercase_str = uppercase_string(str)
print("Original string:", str)
print("Uppercase string:", uppercase_str)




def count_consonants(input_string):
    consonants = "bcdfghjklmnpqrDstvwxyzgCDFGHJHLMNPQRSTVWXYZ"
    consonant_count = 0
    
    for i in input_string:
        if i in consonants:
            consonant_count += 1
            
    return consonant_count

input_str = "Hello World"
consonant_count = count_consonants(input_str)
print("Number of consonants in the string:", consonant_count)


def integer(int):
    if int % 2 == 0:
        return True
    else:
        return False
    

def sum_even_indices(numbers):
    sum_even = 0
    for i in range(0, len(numbers), 2):
        sum_even += numbers[i]
    return sum_even


def is_even(num):
    return num % 2 == 0

number = int(input("Please enter number:"))
result = is_even(number)
if result:
    print("number is even")
else:
    print("number is odd")


def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True  # 2 is prime
    if num % 2 == 0:
        return False
    
    num = int((num)) + 1
    for i in range(3, num, 2):
        if num % i == 0:
            return False

    return True
number = 17
if is_prime(number):
    print("number is a prime number.")
else:
    print("number is not a prime number.")



def uppercase_strings(string_list):
    uppercase_list = [string.upper() for string in string_list]
    return uppercase_list

str_list = ["Mariami", "Nikolozi", "Lile", "Mako"]
uppercase_list = uppercase_strings(str_list)
print("Original list:", str_list)
print("Uppercase list:", uppercase_list)

def process_numbers(numbers):
    updated_list = []
    for num in numbers:
        if num % 2 == 0:
            updated_list.append(num / 2)
        else:
            updated_list.append(num * 2)
    return updated_list

numbers_list = [3, 8, 5, 2, 10, 7]
updated_list = process_numbers(numbers_list)
print("Original list of numbers:", numbers_list)
print("Updated list of numbers:", updated_list)





def reverse_and_uppercase(input_str):
    reversed_uppercase_str = input_str[::-1].upper()
    return reversed_uppercase_str

input_str = "hello world"
reversed_uppercase_str = reverse_and_uppercase(input_str)

print("Reversed and uppercase string:", reversed_uppercase_str)


def categorize_strings(strings):
    odd = []
    even = []
    
    for string in strings:
        if len(string) % 2 == 0:
            even.append(string.upper())
        else:
            odd.append(string.upper())
    
    return odd, even

strings_list = ["Lizi", "Nika", "Mariami", "Mako"]
odd_list, even_list = categorize_strings(strings_list)

print("Strings with odd lengths (uppercase):", odd_list)
print("Strings with even lengths (uppercase):", even_list)




def process_strings(strings):
    result_list = []
    
    for string in strings:
        if len(string) % 2 == 0:
            result_list.append(string.upper())
        else:
            modified_string = string[0].upper() + string[1:].lower()
            result_list.append(modified_string)
    
    return result_list


def convert_case(strings):
    converted_list = []
    
    for string in strings:
        if string.isupper():
            converted_list.append(string.lower())
        elif string.islower():
            converted_list.append(string.upper())
        else:
            converted_list.append(string)  
    
    return converted_list

strings_list = ["DAto", "MARI", "LILE", "NiKa"]
converted_list = convert_case(strings_list)

print("Converted list of strings:", converted_list)


def process_string(input_str):
    index = input_str.find('a')  
    if index % 2 == 0:
        return input_str.upper()
    else:
        return input_str.capitalize()

input_str = "example string to demonstrate"
processed_str = process_string(input_str)
print("Processed string:", processed_str)
