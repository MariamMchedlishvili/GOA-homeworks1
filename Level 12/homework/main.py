for i in range(21):
    print(i)



num1 = int(input("Please enter your number:"))
if num1 % 2 == 0:
    print("number is even.")

else:
    print("number is not even.")



for i in range(0, 21, 2):
    print(i)



sum = 0
for i in range(50, 101):
    sum += i 

print("total:", sum)


num2 = int(input("Please enter your number:"))
num3 = int(input("Please enter your number:"))

if num1 < num2:
    smaller = num1
    larger = num2

else:
    smaller = num1
    larger = num2

for num in range(smaller, larger + 1 ):
    print(num)



num = 1
for i in range(5,11):
    num *= i

print("total is:", num)

