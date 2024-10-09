/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Oct 2024
 * This program plays rock paper scissors.
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
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

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }
})
