input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        # . . . #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.TShirt)
})
basic.forever(function () {
	
})
