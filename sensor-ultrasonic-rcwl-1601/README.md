# Ultrasonic Distance Sensor — RCWL-1601

An ultrasonic sensor measures distance by sending out a sound pulse too high for humans to hear, then timing how long it takes to bounce back off an object. The further away the object, the longer the echo takes to return. This works like how bats navigate in the dark.

This sensor can detect objects from 2 cm up to 450 cm away. It works at both 3.3 V and 5 V, making it directly compatible with the JellySTEM Shield without a voltage divider.

Model: RCWL-1601 · Interface: Trig / Echo · Supply: 3.3 V – 5 V · Range: 2 – 450 cm · Datasheet: `datasheet/`

## Wiring (JellySTEM Shield)

| Sensor pin | Shield pin | Wire color (recommended) |
|------------|------------|--------------------------|
| GND        | GND        | Black                    |
| VCC        | 3V3 or 5V  | Red                      |
| Trig       | Any GPIO   | Green                    |
| Echo       | Any GPIO   | Blue                     |

> 📷 *Screenshot placeholder — add photo of Shield GPIO pins here*

> **Note:** Unlike most sensors in JellySTEM kits, the RCWL-1601 can safely use either 3V3 or 5V. Both work correctly with the micro:bit V2.

See `WIRING.md` for full wiring details and cable guidance.

## In MakeCode

The JellySTEM extension includes ultrasonic blocks under the **Distance Sensors** group. Add it in MakeCode via Extensions → paste:
```
https://github.com/JellySTEM-Edu/pxt-jellystem
```
