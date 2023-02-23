input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
