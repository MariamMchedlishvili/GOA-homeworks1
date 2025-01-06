def repeat_str(repeat,string):
   return string * repeat

def friend(x):
    friends = []
    
    for name in x:
        if len(name) == 4:
            friends.append(name)
    
    return friends


def descending_order(num):
    nums = list(str(num))
    nums.sort()
    nums = nums[::-1]
    return int("".join(nums))