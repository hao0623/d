input.onButtonPressed(Button.A, function () {
    a += 1
})
input.onButtonPressed(Button.AB, function () {
    a = 0
})
input.onButtonPressed(Button.B, function () {
    a += -1
})
let a = 0
a = 0
basic.forever(function () {
    basic.showString("a=")
    basic.showNumber(a)
})
