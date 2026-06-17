# Examples — GME12864-11-12-13

All examples use the `OLED12864_I2C` MakeCode extension with the BBC micro:bit V2 and JellySTEM Shield.

---

## 1. Hello World

The minimal example — initialise the display and show a string.

```typescript
OLED.init(128, 64)
OLED.writeStringNewLine("Hello JellySTEM!")
```

---

## 2. Show a sensor reading

Display a changing value (e.g. light level) that updates in a loop.

```typescript
OLED.init(128, 64)

basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Light level:")
    OLED.writeStringNewLine("" + input.lightLevel())
    basic.pause(500)
})
```

---

## 3. Multi-line status display

Show several lines of information at once.

```typescript
OLED.init(128, 64)

basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Temp: " + input.temperature() + "C")
    OLED.writeStringNewLine("Light: " + input.lightLevel())
    OLED.writeStringNewLine("Sound: " + input.soundLevel())
    basic.pause(1000)
})
```

---

## 4. Display on button press

Only refresh the display when the A button is pressed.

```typescript
OLED.init(128, 64)
OLED.writeStringNewLine("Press A")

input.onButtonPressed(Button.A, function () {
    OLED.clear()
    OLED.writeStringNewLine("Button pressed!")
    OLED.writeStringNewLine("Time: " + input.runningTime() + "ms")
})
```

---

## Tips

- Always call `OLED.init(128, 64)` once in `on start` before any other OLED calls.
- Call `OLED.clear()` before writing new content to avoid old text showing through.
- The display has 8 text rows at the default font size. Writing more lines than fit will wrap or clip depending on the extension version.
- Avoid calling `OLED.clear()` too rapidly in a `forever` loop — it can cause visible flicker. Use `basic.pause()` to throttle updates.