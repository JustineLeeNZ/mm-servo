basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, randint(0, 180))
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P1, randint(0, 180))
    basic.pause(200)
    pins.servoWritePin(AnalogPin.P2, randint(0, 180))
    basic.pause(200)
})
