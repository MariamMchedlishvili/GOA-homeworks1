def calculate_average():
    numbers = [1, 2, 3, 4, 5]
    print(sum(numbers) / len(numbers))

calculate_average()


def  manual_sum(numbers_list):
    sum = 0

    for num in numbers_list:
        sum = sum + num
    return sum

print(manual_sum([1,2,3,4,5]))




def greet(name):
    print("Hello", name)

greet("Mariami")



def manual_max(num1, num2):
    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2
    else:
        return "Both number is equal"
    
print(manual_max(20, 20))


def list(numbers_list):
    for num in numbers_list:
        if num % 2 == 0:
            print("even:", num)
        else:
            print("odd:", num)

list([3,2,4,7,8,10])


def print_even_numbers(n):
    for i in range(2,n + 1):
        if i % 2 == 0:
         print(i)

print_even_numbers(5)




def sum(num1, num2):
    print(num1 + num2)

sum(2,4)


def sum(num1, num2):
    return num1 + num2
print(sum(3,7))


def joined_string(str1, str2):
    print(str1 + str2)

joined_string("Mari", "ami")


def find_maximum(num1, num2):
   if num1 > num2:
       return num1
   else:
       return num2
   
print(find_maximum(25, 20))


def calculate_area(width, legth):
    print(width * legth)

calculate_area(10,15)



def sum(numbers_list):
    sum = 0
    
    for num in numbers_list:
        sum = sum + num
    return sum

print(sum([5,15,10]))





