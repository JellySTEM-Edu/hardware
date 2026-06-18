# Example 02 — Bouncing Ball

A filled circle bounces around the OLED screen, reflecting off all four edges. Runs automatically with no buttons needed.

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
1. Download `02-bouncing-ball.hex`
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
let x = 20
let y = 20
let dx = 9
let dy = 5
let r = 6

jellystem.oledInit()

basic.forever(function () {
    jellystem.oledClear()
    jellystem.oledCircle(
        jellystem.OledCircleStyle.Filled,
        x,
        y,
        r
    )
    basic.pause(40)
    x += dx
    y += dy
    if (x - r <= 7 || x + r >= 120) {
        dx = 0 - dx
    }
    if (y - r <= 5 || y + r >= 60) {
        dy = 0 - dy
    }
})
```

---

## What you should see

A solid circle moving continuously around the screen, bouncing off every edge. No buttons needed — it runs on its own as soon as the micro:bit starts.
