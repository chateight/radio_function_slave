radio.onReceivedNumber(function (receivedNumber) {
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    id += 1
    basic.showString("" + (id))
    basic.pause(100)
})
let id = 0
music.playMelody("G A - - - - - - ", 300)
radio.setGroup(1)
id = 2
basic.showString("" + (id))
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        radio.sendNumber(id)
    }
    basic.pause(1000)
})
