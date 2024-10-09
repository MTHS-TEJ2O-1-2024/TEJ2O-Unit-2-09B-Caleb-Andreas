/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program plays rock paper scissors.
*/

// variables
let randomNumber: number = 0
let scoreNumber = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Runs rock paper scissors program when shaken.
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0 (rock)
    if (randomNumber == 0) {
        basic.clearScreen()
        basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 1 (paper)
    if (randomNumber == 1) {
        basic.clearScreen()
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 2 (scissors)
    if (randomNumber == 2) {
        basic.clearScreen()
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
})

// Add 1 to score when A button pressed.
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    scoreNumber = scoreNumber + 1
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    basic.pause(3000)
    basic.showIcon(IconNames.Happy)
})

// Show score when B button pressed.
input.onButtonPressed(Button.B, function() {
    basic.clearScreen()
    basic.showString('Score: ' + (scoreNumber).toString())
    basic.showIcon(IconNames.Happy)
})
