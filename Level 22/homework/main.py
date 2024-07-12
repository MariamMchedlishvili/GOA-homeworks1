def number(num):
    print(num + 5)

print(number(5))    


def numbers(int1, int2):
    print(int1 * int2)

numbers(2, 3)


def string_length(string):
    print(len(string))

string_length("GOA")


def string_list(str1, str2):
    print(len(str1))
    print(len(str2))

string_list("Mariami", "GOA")



def string(str):
    reverse = str[:: -1]
    if str == reverse:
        return True
    else:
        return False
    
print(string("WOW"))


def longest_string(*str):
    longest = ""
    for i in str:
        if len(i) > len(longest):
            longest = i
    return longest

print(longest_string("apple", "watermelon", "blueberry"))


def numbers(num):
    number = 1
    for i in range(1,num):
        number = i * number
    return number 



def integer(int1, int2):
    n = sorted(int1)
    a = sorted(int2)
    
    return n[-1] + a[-1]

num1 = [2,4,5,6]
num2 = [3,7,8,9]

print(integer(num1,num2))




def sum(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum



def string(str):
    count = 0
    for i in string:
        if i == "i" or i == "o" or i =="a" or i =="e" or i == "u":
            count += 1
    
    return string


def integer_list(int):
    new_list = []
    for i in int:
        square = i * i
        new_list.append(square)


def inverse_string(string):
    return string[::-1]


def integer(int):
    if int % 2 == 0:
        return True
    else:
        return False
    

def string_list(*str):
    longest = ""
    for i in str:
        if len(i) > len(longest):
            longest = i
    return longest





    
def smallest_number(numbers):
    smallest = numbers[0]
    for num in numbers[1:]:
        if num < smallest:
            smallest = num
    
    return smallest



def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a


def uppercase_string(str):
    return str.upper()
str = "Hello World"
uppercase_str = uppercase_string(str)
print(str)
print(uppercase_str)



def calculate():
    numbers = [10,20,30]
    print(sum(numbers) / len(numbers))

calculate()


      