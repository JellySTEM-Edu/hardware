# Example 03 — Reaction Timer

A circle appears on the OLED screen after a random delay. Press A the moment you see it — your reaction time shows in milliseconds with a rating.

---

## What you need

- BBC micro:bit V2
- JellySTEM Shield
- OLED display (GME12864-11-12-13) wired to the Shield I²C port

See `wiring.md` in this folder for the full wiring diagram and color coding.

**Quick reference:**

| OLED | Shield | Wire color |
|------|--------|------------|
| GND  | GND    | Black      |
| VCC  | 3V3    | Red        |
| SCL  | P19    | Yellow     |
| SDA  | P20    | Blue       |

---

## Setting up MakeCode

1. Go to [makecode.microbit.org](https://makecode.microbit.org) and create a new project
2. Click **Extensions**
3. Paste this URL into the search bar and press Enter:
   ```
   https://github.com/JellySTEM-Edu/pxt-jellystem
   ```
4. Click the JellySTEM extension to add it
5. You should now see **JellySTEM** blocks in the toolbox — OLED blocks are under **OLED Display**

---

## How to use this example

**Option A — Flash the .hex file (easiest):**
1. Download `03-reaction-timer.hex`
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
let startTime = 0
let reaction = 0
let waiting = false

jellystem.oledInit()
jellystem.oledDisplay("Press A to start")

input.onButtonPressed(Button.A, function () {
    if (waiting) {
        reaction = input.runningTime() - startTime
        jellystem.oledClear()
        jellystem.oledDisplay("Time: " + reaction + "ms")
        if (reaction < 200) {
            jellystem.oledDisplay("Incredible!")
        } else if (reaction < 350) {
            jellystem.oledDisplay("Great!")
        } else {
            jellystem.oledDisplay("Keep trying!")
        }
        waiting = false
        jellystem.oledDisplay("Press A again")
    } else {
        jellystem.oledClear()
        jellystem.oledDisplay("Get ready...")
        jellystem.oledDisplay("Press A at the circle")
        basic.pause(Math.randomRange(1000, 4000))
        jellystem.oledClear()
        jellystem.oledCircle(
            jellystem.OledCircleStyle.Outline,
            64,
            32,
            20
        )
        startTime = input.runningTime()
        waiting = true
    }
})
```

---

## What you should see

The screen shows `Press A to start`. Press A, then wait — after a random delay between 1 and 4 seconds a large circle appears on screen. Press A immediately when you see it. Your reaction time in milliseconds appears with a rating:

- Under 200ms — Incredible!
- Under 350ms — Great!
- 350ms and above — Keep trying!

Press A again to play another round.
