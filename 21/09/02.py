
with open('21/09/input.txt', 'r') as f:
    y = 0
    verts = []
    for line in f:
        x = 0
        for char in line[:100]:
            z = int(char)
            vert = (x, y, z)
            verts.append(vert)
            x += 1
        y += 1 
    print(verts)
