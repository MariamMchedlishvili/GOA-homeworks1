def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))

#ფუნქცია find_short იღებს ერთ არგუმენტს s, რომელიც არის სტრიქონი. split(" ") მეთოდი ყოფს ს სტრიქონს სიტყვების სიაში,
#საზღვრის სახით ინტერვალის გამოყენებით. სიტყვების ეს სია ინახება list1-ში.
#word_len ინახავს სიაში ყველაზე მოკლე სიტყვის სიგრძეს.
#მოცემულ სტრიქონში ყველაზე მოკლე სიტყვებია "the" და "who", რომელთაგან ორივეს სიგრძე 3-ია.

txt = "Hello my name is Mariami, I'm 16 ears old."
x = txt.split(",")
print(x)

txt = "Mr. Smith. Mrs. Johnson. Dr. Brown."
x = txt.split(".")
print(x)

txt = "12:30:45"
x = txt.split(":")
print(x)

txt = "Mariami;Nikolozi;lile;mako;"
x = txt.split(";")
print(x)


txt = "hello_world_python_programming"
x = txt.split("_")
print(x)



txt = "GOA/is/the/best/"
x = txt.split("/")
print(x)


txt = "startklearningkprogrammingk"
x = txt.split("k")
print(x)

list = "12312312312345678933"
x = list.split("3")
print(x)


txt = "My name is Mariami"
x  = txt.split("l")
print(x)


txt = "start learning programming"
x = txt.split(" ")
print(x)





def reverse_words(text):
    words = text.split(" ")
    
    reversed_text = ""
    for i in range(len(words)):
        reversed_word = words[i][::-1]
        
        reversed_text += reversed_word
        
        if i < len(words) - 1:
            reversed_text += " "
    
    return reversed_text