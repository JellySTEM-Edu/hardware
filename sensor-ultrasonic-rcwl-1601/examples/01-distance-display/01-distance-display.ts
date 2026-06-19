jellystem.connectUltrasonic(
    jellystem.UltrasonicModel.RCWL_1601,
    DigitalPin.P13,
    DigitalPin.P14
)

basic.forever(function () {
    let distance = jellystem.readUltrasonicDistance(jellystem.UltrasonicUnit.Cm)
    basic.showNumber(distance)
    basic.pause(500)
})
