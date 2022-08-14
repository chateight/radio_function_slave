input.onButtonPressed(Button.A, function () {
    id += 1
    basic.showString("" + (id))
    basic.pause(100)
})
radio.onReceivedString(function (receivedString) {
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
})
let id = 0
music.playMelody("G A - - - - - - ", 300)
radio.setGroup(1)
radio.setTransmitPower(7)
id = 0
basic.showString("" + (id))
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        radio.sendString("" + (id))
        basic.pause(1000)
        id = 0
        basic.showString("" + (id))
    }
})
