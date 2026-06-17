# Examples — OLED SSD1306 128×64

These examples use the **JellySTEM extension** in MakeCode. OLED blocks are under the **OLED Display** group. Wire the display to the JellySTEM Shield I²C port (SDA → P20, SCL → P19) before running any program.

## Setting up MakeCode

JellySTEM is not loaded automatically. Before you can use any of these examples, add the extension:

1. Go to [makecode.microbit.org](https://makecode.microbit.org) and create a new project
2. Click **Extensions**
3. Paste this URL into the search bar and press Enter:
   ```
   https://github.com/JellySTEM-Edu/pxt-jellystem
   ```
4. Click the JellySTEM extension to add it
5. You should now see **JellySTEM** blocks in the toolbox, including the **OLED Display** group

## How the JellySTEM OLED blocks work

Before using any OLED block, you must run **set up OLED display** once in `on start`. This initialises the screen.

Each call to **OLED display** adds a new line of text, working top to bottom. When you want to update what's on screen, call **OLED clear screen** first, then write your new lines.

> **Note:** Each line fits about 16 characters at normal size. Text that is too long will be cut off.

---

## 1. Counter

Press A to count up, press B to count down. A good first program to test that buttons and the display both work.

**Test file:** `tests/01-counter/`

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

**What you should see:** `Count:` on the first line, the current number below. A increases it, B decreases it.

---

## 2. Bouncing Ball

A filled circle bounces around the screen, reflecting off all four edges.

**Test file:** `tests/02-bouncing-ball/`

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

**What you should see:** A solid circle bouncing smoothly around the screen, reflecting off every edge.

---

## 3. Reaction Timer

Tests how fast you can press A. A circle appears after a random delay — press A the moment you see it and your reaction time shows on screen.

**Test file:** `tests/03-reaction-timer/`

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
        jellystem.oledDisplay("Get ready... ")
        jellystem.oledDisplay("Press A when you see Circle")
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

**What you should see:** Press A to start. After a random wait, a large circle appears — press A immediately. Your reaction time in milliseconds shows on screen with a rating.

---

## JellySTEM OLED block reference

| Block | What it does |
|---|---|
| `set up OLED display on I2C (P19/P20)` | Initialises the display. Run once in `on start`. |
| `OLED clear screen` | Erases everything on screen. |
| `OLED display [text]` | Prints a line of text. Each call adds a new line. |
| `OLED display number [num]` | Prints a number on its own line. |
| `OLED progress bar [%]` | Draws a bar that fills from 0 to 100%. |
| `OLED line from x y to x y` | Draws a straight line between two pixel positions. |
| `OLED rectangle from x y to x y` | Draws a rectangle between two corner positions. |
| `OLED [outline/filled] circle at x y radius r` | Draws a circle, outline or filled. |
