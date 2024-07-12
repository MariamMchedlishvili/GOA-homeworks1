for i in range(21):
    print(i)

for i in range(1, 11):
    print(i)

for i in range(0, 101, 2):
    print(i)    




num1 = float(input("Please enter first number:"))
if num1 > 0:
    print("the number is positive.")

if num1 < 0:
    print("the number is negative.")

if num1 == 0:
    print("the number is zero.")




age = int(input("Please enter your age:"))

if age > 18:
    print("you are an adult.")

else:
    print("you are a virgin.")


day =int(input("Please enter number:"))

if day == 1:
    print("Monday.")

elif day == 2:
    print("Tuesday.") 

elif day == 3:
    print("Wednesday.")

elif day == 4:
    print("Thursday")
    
elif day == 5:
    print("Friday.")

elif day == 6:
    print("Saturday.")

elif day == 7:
    print("Sunday.")   

else:
    print("Please enter a number between 1 and 7.")  