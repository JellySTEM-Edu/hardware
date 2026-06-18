# Example 01 — Counter

Press A to count up, press B to count down. A good first program to test that buttons and the OLED display both work together.

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
1. Download `01-counter.hex`
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
let count = 0

jellystem.oledInit()
jellystem.oledDisplay("Count:")
jellystem.oledDisplayNumber(count)

input.onButtonPressed(Button.A, function () {
    count += 1
    jellystem.oledClear()
    jellystem.oledDisplay("Count:")
    jellystem.oledDisplayNumber(count)
})

input.onButtonPressed(Button.B, function () {
    count -= 1
    jellystem.oledClear()
    jellystem.oledDisplay("Count:")
    jellystem.oledDisplayNumber(count)
})
```

---

## What you should see

The screen shows `Count:` on the first line and `0` below it. Press A to increase the number, B to decrease it. The screen updates immediately on each press.
