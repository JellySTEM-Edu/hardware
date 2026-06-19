# Example 02 — Proximity Alert

Beeps when an object comes within 15 cm. The closer the object, the higher the pitch and the faster the beeps — like a parking sensor. At 4 cm or less it switches to a continuous high tone.

---

## What you need

- BBC micro:bit V2
- JellySTEM Shield
- RCWL-1601 ultrasonic sensor
- 4-wire dupont cable

---

## Wiring

See `wiring.md` in this folder for the full connection diagram.

**Quick reference — Trig → P13, Echo → P2:**

| Sensor pin | Shield pin |
|------------|------------|
| GND        | GND        |
| VCC        | 3V3        |
| Trig       | P13        |
| Echo       | P2         |

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
jellystem.connectUltrasonic(jellystem.UltrasonicModel.RCWL_1601, DigitalPin.P13, DigitalPin.P2)

basic.forever(function () {
    let dist = jellystem.readUltrasonicDistance(jellystem.UltrasonicUnit.Cm)

    if (dist <= 0 || dist >= 15) {
        music.stopAllSounds()
        basic.pause(200)
    } else if (dist <= 4) {
        music.play(music.tonePlayable(1000, 80), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(Math.map(dist, 4, 15, 1000, 300), 80), music.PlaybackMode.UntilDone)
        basic.pause(Math.map(dist, 4, 15, 0, 1000))
    }
})
```

---

## What you should see

When nothing is within 15 cm the micro:bit is silent. Move your hand toward the sensor:

- **15 → 4 cm** — beeping tone that rises in pitch and speeds up as you get closer
- **4 cm or less** — continuous high tone at 1000 Hz

Move your hand slowly for the smoothest effect.
