let 최적_온도 = false
let 정상_온도 = false
let 수정_필요 = false
input.onButtonPressed(Button.B, function () {
    최적_온도 = 28 <= Math.round(input.temperature()) && Math.round(0) <= input.temperature()
    정상_온도 = 23 <= Math.round(input.temperature()) && Math.round(input.temperature()) < 28 || 30 < Math.round(input.temperature()) && Math.round(input.temperature()) < 35
    수정_필요 = !(최적_온도 || 정상_온도)
    if (최적_온도) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
        basic.clearScreen()
    }
    if (정상_온도) {
        basic.showString("NOT BAD")
        basic.showString("" + (input.temperature()))
    }
})
input.onButtonPressed(Button.A, function () {
    if (200 > Math.round(input.lightLevel())) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("" + (input.lightLevel()))
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("" + (input.lightLevel()))
    }
})
