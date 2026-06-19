# Example 03 — Theremin

Move your hand over the sensor to control the pitch of a musical note in real time. Closer hand = higher pitch, further away = lower pitch. Like playing a real theremin instrument — no touching required.

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
1. Download `03-theremin.hex`
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

    if (distance > 0 && distance <= 60) {
        // Map 1–60 cm to 2000–100 Hz (closer = higher pitch)
        let frequency = Math.map(distance, 1, 60, 2000, 100)
        music.playTone(frequency, 100)
    } else {
        music.rest(50)
    }
})
```

---

## What you should see

Hold your hand 10–60 cm above the sensor and slowly move it up and down. The pitch of the tone changes continuously with your hand position — higher when close, lower when far. Moving smoothly gives a sliding musical effect.

**Tips:**
- Move your hand slowly for the smoothest pitch changes
- Try playing a simple tune by moving to different heights and pausing
- The sensor works best when nothing else is directly above it — clear the area around it
