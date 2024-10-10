"""
Created by: Caleb Andreas
Created on: Oct 2024
This module is a program that plays rock paper scissors
"""

from microbit import *
from time import sleep
import random

# variables
random_number = -1
score_number = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 2)
        display.clear()

        # if random_number was 0 (rock)
        if random_number == 0:
            display.clear()
            display.show(Image.SQUARE_SMALL)
            sleep(5)
            display.clear()
            display.show(Image.HAPPY)

        # if random_number was 1 (paper)
        if random_number == 1:
            display.clear()
            display.show(Image.SQUARE)
            sleep(5)
            display.clear()
            display.show(Image.HAPPY)

        # if random_number was 2 (scissors)
        if random_number == 2:
            display.clear()
            display.show(Image.SWORD)
            sleep(5)
            display.clear()
            display.show(Image.HAPPY)

    # Adds 1 to score when a button is pressed.
    if button_a.is_pressed():
        score_number = score_number + 1
        display.clear()
        display.show(Image.YES)
        sleep(3)
        display.clear
        display.show(Image.HAPPY)

    # Display score when b button pressed.
    if button_b.is_pressed():
        display.clear()
        display.scroll("Score:  " + str(score_number))
        display.clear
        display.show(Image.HAPPY)
