array = [0] * 5

array[0] = 10
array[1] = 20
array[2] = 30
array[3] = 40
array[4] = 50


print(array[2])
print(array[4])




N = int(input("Enter the number: ")) 
array = [0] * N  
for i in range(N):
    num = int(input("Enter number " + str(i + 1) + ": "))
    array[i] = num


print("Elements at odd indices:")
for i in range(1, N, 2): 
        print(array[i])





array = [0] * 10
print("Enter 10 integers:")
for i in range(10):
    array[i] = int(input("Enter number" + str(i + 1) ) )

for i in range(10):
    array[i] *= 2  

print("Doubled numbers:")
for i in range(10):
    print(array[i])



N = int(input("Enter the number of numbers (N): "))
array = []


print("Enter the numbers:")
for i in range(N):
    num = int(input("Enter number" + str(i + 1)))  
    array.append(num)  


print("Numbers in reverse order:")
for i in range(N - 1, -1, -1): 
    print(array[i])