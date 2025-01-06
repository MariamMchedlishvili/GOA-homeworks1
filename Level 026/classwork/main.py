name = input("Please enter your name:")
capitalized_string = name.upper()
print(capitalized_string)

#capitalize  სტრიქონის პირველ სიმბოლოს გარდაქმნის დიდი სიმბოლოთი
#upper გარდაქმნის ყველა სიმბოლოს დიდი ასოთი


sentence = "This is a sentence for counting letters."
count = sentence.count('t')
print(count)

word = input("Enter a word in uppercase:")
word_lower= word.lower()
print(word_lower)


#count მეთოდი ითვლის სტრიქონში ასოების რაოდენობას.
#lower მეთოდი გარდაქმნის სტრიქონში არსებულ ყველა სიმბოლოს მცირე ასოებად.



string = "Python programming"
find = string.find("y")
index = string.index("programming")

print(find)
print(index)




emails = []

count = int(input("Please enter how many emails do you want to input: "))

for i in range(count):
    email = input("Please enter email: ")

    if email.endswith("@gmail.com"):
        emails.append(email)
        print("Email was correct")
    else:
        print("Invalid email")


print(emails)