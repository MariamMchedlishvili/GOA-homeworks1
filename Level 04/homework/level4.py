from turtle import *
# we want to draw a castle

#step: 1 draw a castle outline
width(10)
penup()
goto(-350, -200)
pendown()


color("dark grey")
begin_fill()
forward(600)
left(90)

forward(200)
left(90)

forward(150)
left(270)

forward(160)
left(90)

forward(300)
left(90)

forward(160)
left(270)

forward(150)
left(90)

forward(200)
left(90)


end_fill()



penup()
goto(-120,160)
pendown()

begin_fill()

forward(140)
left(90)

forward(160)
left(-270)

forward(140)
left(90)

forward(160)
left(90)
end_fill()


#drawing windows

penup()
goto(-90,180)
pendown()
color("grey")
begin_fill()


forward(80)
left(90)

forward(120)
left(90)

forward(80)
left(90)

forward(120)
left(90)


end_fill()


penup()
goto(-180,20)
pendown()

begin_fill()

forward(85)
left(90)

forward(110)
left(-270)

forward(85)
left(90)

forward(110)
end_fill()

penup()
goto(80,20)
pendown()

begin_fill()

forward(-110)
left(90)

forward(-85)
left(90)

forward(-110)
left(-270)

forward(-85)

end_fill()

#drawing the door
penup()
goto(-110,-200)
pendown()
color("brown")
begin_fill()

forward(-120)
left(90)

forward(-180)
left(90)

forward(-120)
left(-270)

forward(-180)
left(90)

end_fill()

#drawing a flag
penup()
goto(-50,320)
pendown()

color("black")

left(-90)
forward(30)

penup()
goto(-50,340)
pendown()

color("green")
begin_fill()
forward(40)
left(-90)

forward(90)
left(-90)

forward(40)
left(-90)

forward(90)

end_fill()


# drawing King
penup()
goto(-300, -200)
pendown()

color("blue")
begin_fill()

forward(30)
left(-90)

forward(45)
left(-90)

forward(30)
left(-90)

forward(45)
left(-90)

end_fill()

penup()
goto(-315, -170)
color("yellow")
begin_fill()

circle(-20)
end_fill()

#drawing Queen

penup()
goto(-240, -200)
pendown()

color("purple")
begin_fill()

forward(25)
left(-90)

forward(40)
left(-90)

forward(25)
left(-90)

forward(40)
left(-90)

end_fill()

penup()
goto(-255, -160)
pendown()

color("yellow")
begin_fill()

circle(-15)

end_fill()





exitonclick()


