numbers = []

for i in range(1, 11):
    numbers.append(i)

print("numbers from 1 to 10:", numbers)
print("Number of elements in the list:", len(numbers))





start = int(input("Please eneter start number:"))
end = int(input("Please eneter end number:"))

numbers =[]

for i in range(start, end):
    numbers.append(i)

print(numbers)    





count = int(input("Please enter quantity of how many numbers do you want to enter:"))

numbers =[]
for i in range(count):
    num = int(input("Please enter number" + str(i) + ":"))
    numbers.append(num) 

print(numbers)




favorite_cars = ["Porsche ", "BMW ", "Bugatti", "Mercedes", "Lamborghini"]


print(favorite_cars[-3])
print(favorite_cars[-4])


names = ["Mariami", "Mariami"]
for name in names:
    if name == "Mariami":
        print("Hello admin")
    else:
        print("Hello user")




