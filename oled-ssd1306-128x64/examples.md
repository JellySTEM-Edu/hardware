# Examples — GME12864-11-12-13

> **Note:** Normal mode is 24 columns × 8 rows. Strings longer than 24 characters will be cut off.

---

## 1. Live sensor dashboard

Show temperature, light, and sound updating every second.

```typescript
OLED12864_I2C.init(60)

basic.forever(function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(0, 0, "Temp:  " + input.temperature() + " C", 1)
    OLED12864_I2C.showString(0, 1, "Light: " + input.lightLevel(), 1)
    OLED12864_I2C.showString(0, 2, "Sound: " + input.soundLevel(), 1)
    basic.pause(1000)
})
```

---

## 2. Counter with A/B buttons

A increments, B decrements. Useful for testing button input and display updates.

```typescript
let count = 0

OLED12864_I2C.init(60)
OLED12864_I2C.showString(0, 0, "Count:", 1)
OLED12864_I2C.showNumber(0, 1, count, 1)

input.onButtonPressed(Button.A, function () {
    count += 1
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(0, 0, "Count:", 1)
    OLED12864_I2C.showNumber(0, 1, count, 1)
})

input.onButtonPressed(Button.B, function () {
    count -= 1
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(0, 0, "Count:", 1)
    OLED12864_I2C.showNumber(0, 1, count, 1)
})
```

---

## API reference (v1.5.0)

| Function | Description |
|---|---|
| `init(addr)` | Initialise display. addr = 60 (0x3C) or 61 (0x3D) |
| `clear()` | Clear all content |
| `showString(x, y, s, color)` | Show text. x: col 0–23, y: row 0–7, color: 1=white 0=black |
| `showNumber(x, y, num, color)` | Show a number at column/row position |
| `zoom(d)` | Zoom mode (double size). x: 0–11, y: 0–3 |
| `on()` / `off()` | Turn display on/off |
| `invert(d)` | Invert display colors |
| `pixel(x, y, color)` | Set individual pixel. x: 0–127, y: 0–63 |
| `draw()` | Force redraw |

## Tips

- Always call `OLED12864_I2C.init(60)` once in `on start` before any other OLED calls.
- Call `OLED12864_I2C.clear()` before writing new content to avoid old text showing through.
- Keep strings to 24 characters or fewer — anything longer is silently cut off.
- Avoid calling `clear()` too rapidly in a `forever` loop — it causes visible flicker. Use `basic.pause()` to throttle updates.