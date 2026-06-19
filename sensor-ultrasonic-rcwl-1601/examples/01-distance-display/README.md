# Example 01 — Distance Display

Reads the distance to the nearest object and shows it on the micro:bit LED display, updating every half second. The simplest way to confirm the sensor is wired and working.

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
1. Download `01-distance-display.hex`
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
    DigitalPin.P2)

basic.forever(function () {
    basic.showNumber(jellystem.readUltrasonicDistance(jellystem.UltrasonicUnit.Inch))
})
```

---

## What you should see

The micro:bit LED display scrolls a number showing the distance in inches to the nearest object. Move your hand toward and away from the sensor to watch the number change.

If the display shows `137`, the sensor has not been set up correctly — check your wiring.
If the display shows `0`, nothing is within range or the object is too close (under 2 cm).
