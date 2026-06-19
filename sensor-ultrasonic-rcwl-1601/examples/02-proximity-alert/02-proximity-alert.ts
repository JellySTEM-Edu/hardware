jellystem.connectUltrasonic(
    jellystem.UltrasonicModel.RCWL_1601,
    DigitalPin.P13,
    DigitalPin.P14
)

basic.forever(function () {
    let distance = jellystem.readUltrasonicDistance(jellystem.UltrasonicUnit.Cm)

    if (distance > 0 && distance <= 20) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        `)
        let beepDelay = Math.map(distance, 1, 20, 50, 500)
        music.playTone(880, beepDelay)
        basic.pause(beepDelay)
        basic.clearScreen()
        basic.pause(beepDelay)
    } else {
        basic.clearScreen()
        basic.pause(100)
    }
})
