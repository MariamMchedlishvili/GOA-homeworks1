def filter_list(l):
    filtered_list = []
    for item in l:
        if isinstance(item, int):
            filtered_list.append(item)
    return filtered_list



def stray(arr):
    result = 0
    for num in arr:
        result ^= num
    return result