def add(num1, num2):
    print(num1 + num2)
add(18, 2)


def calculate(num1, num2):
    choise = input("Please enter arithmetical signs:")

    if choise == "*":
        print(num1 * num2)
    
    if choise == "/":
        print(num1 / num2)
    
    if choise == "+":
        print(num1 + num2)

    if choise == "-":
        print(num1 - num2)

calculate(10, 5)