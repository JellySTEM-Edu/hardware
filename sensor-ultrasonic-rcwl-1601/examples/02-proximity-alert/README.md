# Example 02 — Proximity Alert

Sounds an alarm and lights up the micro:bit LED grid when an object comes within 20 cm. The alarm tone gets faster as the object gets closer — like a parking sensor.

---

## What you need

- BBC micro:bit V2
- JellySTEM Shield
- RCWL-1601 ultrasonic sensor
- 4-wire dupont cable

---

## Wiring

See `wiring.md` in this folder for the full connection diagram.

**Quick reference — Trig → P13, Echo → P14:**

| Sensor pin | Shield pin |
|------------|------------|
| GND        | GND        |
| VCC        | 3V3        |
| Trig       | P13        |
| Echo       | P14        |

> 📷 *Screenshot placeholder — add photo of wired connection here*

---

## Setting up MakeCode

1. Go to [makecode.microbit.org](https://makecode.microbit.org) and create a new project
2. Click **Extensions**
3. Paste this URL into the search bar and press Enter:
   ```
   https://github.com/JellySTEM-Edu/pxt-jellystem
   ```
4. Click the JellySTEM extension to add it
5. Ultrasonic blocks are under **JellySTEM → Distance Sensors → Ultrasonic**

---

## How to use this example

**Option A — Flash the .hex file (easiest):**
1. Download `02-proximity-alert.hex`
2. Plug your micro:bit into your computer via USB
3. Drag and drop the `.hex` file onto the `MICROBIT` drive
4. Wait for the micro:bit to restart

**Option B — Enter the code yourself:**

Copy the blocks or JavaScript below into a new MakeCode project with the JellySTEM extension loaded.

---

## Code

**Blocks:**

> 📷 *Screenshot placeholder — add image here*

**MakeCode JavaScript:**

```typescript
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
        // Pause gets shorter as object gets closer — faster beeping
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
```

---

## What you should see

When nothing is within 20 cm, the screen is blank and silent. Move your hand toward the sensor — the LEDs light up and a beeping tone starts. The closer your hand, the faster the beeps, down to a continuous tone at 1 cm.
