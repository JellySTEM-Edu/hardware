# OLED Display — GME12864-11-12-13

## Overview

| Property | Value |
|---|---|
| Model | GME12864-11-12-13 V3.22 |
| Screen size | 0.96 inch |
| Resolution | 128 × 64 pixels |
| Controller | SSD1306-compatible |
| Interface | I²C |
| I²C address | 0x3C |
| Supply voltage | 3.3 V |

A small monochrome OLED display used in JellySTEM projects for showing sensor readings, status messages, and simple graphics. Verified working with the BBC micro:bit V2 and the MakeCode `OLED12864_I2C` extension.

## In this folder

| File | Contents |
|---|---|
| `pinout.md` | Pin descriptions and connector diagram |
| `power.md` | Voltage, current, and power notes |
| `interfaces.md` | I²C wiring, addressing, and timing |
| `examples.md` | MakeCode usage examples |
| `troubleshooting.md` | Common problems and fixes |
| `images/` | Photos and diagrams |

## Quick-start (JellySTEM Shield)

Connect the display to the JellySTEM Shield's I²C header:

| OLED pin | Shield pin |
|---|---|
| GND | GND |
| VCC | 3V3 |
| SDA | P20 (SDA) |
| SCL | P19 (SCL) |

Then add the `OLED12864_I2C` extension in MakeCode and call `OLED.init(128, 64)` in your `on start` block.