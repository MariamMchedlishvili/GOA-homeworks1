
def odd_index_sum(numbers):
    total = 0
    for i in range(len(numbers)):
        if i % 2 != 0:
            total += numbers[i]
    return total

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
result = odd_index_sum(numbers)  
print(result)