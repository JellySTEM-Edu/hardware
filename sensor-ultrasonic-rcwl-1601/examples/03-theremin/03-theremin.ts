jellystem.connectUltrasonic(
    jellystem.UltrasonicModel.RCWL_1601,
    DigitalPin.P13,
    DigitalPin.P14
)

basic.forever(function () {
    let distance = jellystem.readUltrasonicDistance(jellystem.UltrasonicUnit.Cm)

    if (distance > 0 && distance <= 60) {
        let frequency = Math.map(distance, 1, 60, 2000, 100)
        music.playTone(frequency, 100)
    } else {
        music.rest(50)
    }
})
