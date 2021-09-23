let start = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    let elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})