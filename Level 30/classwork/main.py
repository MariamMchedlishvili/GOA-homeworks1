def filter_odd(numbers_list):
    even_numbers = []

    for number in numbers_list:
        if number % 2 == 0:
            even_numbers.append(number)
    
    return even_numbers



result = filter_odd([1,2,3,4,5,6,7,8,9,10])

print(result)


def even_sum(numbers):
    total = 0
    for num in numbers:
        if num % 2 == 0:
            total += num
    return total

numbers = filter_odd([1,2,3,4,5,6,7,8,9,1])
result = even_sum(numbers)  
print(result) 


def odd_index_sum(numbers):
    total = 0
    for i in range(len(numbers)):
        if i % 2 != 0:
            total += numbers[i]
    return total

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
result = odd_index_sum(numbers)  
print(result)