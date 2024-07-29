def dna_to_rna(dna):
    rna = dna.replace('T', 'U')
    return rna

def find_short(s):
    words = s.split()
    
    shortest_length = len(words[0])
    
    for word in words:
        if len(word) < shortest_length:
            shortest_length = len(word)
    
    return shortest_length