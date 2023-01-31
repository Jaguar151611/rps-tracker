input.onButtonPressed(Button.A, function () {
    P1 += 1
    Rounds += 1
    basic.showString("A")
    basic.pause(500)
    UpdateScreen()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    basic.showString("T")
    basic.pause(500)
    UpdateScreen()
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
    Rounds += 1
    basic.showString("B")
    basic.pause(500)
    UpdateScreen()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    OLED.init(128, 64)
    OLED.writeStringNewLine("Wanna Play Some RPS")
    basic.pause(2000)
    OLED.clear()
    UpdateScreen()
}
function UpdateScreen () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1" + ": " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2" + ": " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + ": " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + ": " + Rounds)
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
Reset()
