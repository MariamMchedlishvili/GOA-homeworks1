def digitize(n):
    reversed_digits = []
    for digit in str(n)[::-1]:
        reversed_digits.append(int(digit))
    return reversed_digits


def are_you_playing_banjo(name):
    if name[0] == "R" or name[0] == 'r':
        return name + " plays banjo"
    else:
        return name + " does not play banjo"


def rps(p1, p2):
    player1 = p1
    player2 = p2
    if player1 == player2:
        return "Draw!"
    elif (player1 == "rock" and player2 == "scissors") or \
         (player1 == "scissors" and player2 == "paper") or \
         (player1 == "paper" and player2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"
    

def count_sheep(num):
    sheep_count = ""  
    for i in range(1, num + 1):
        sheep_count = sheep_count + str(i) + " sheep..."  
    return sheep_count


def greet(name, owner):
    if name == owner:
        return "Hello boss"
    else:
        return "Hello guest"
    
def rental_car_cost(days):
    daily_rate = 40  
    total_cost = days * daily_rate  
    
    if days >= 7:
        total_cost -= 50  
    elif days >= 3:
        total_cost -= 20  
    return total_cost


def remove_exclamation_marks(s):
    result = ""
    for i in s:
        if i != '!':
            result += i
    return result
