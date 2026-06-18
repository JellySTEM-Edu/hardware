# Wiring — Example 02: Bouncing Ball

This example uses the OLED display connected to the JellySTEM Shield I²C port. All OLED examples use the same wiring.

## What port to use

Connect to the **I²C header** on the JellySTEM Shield. It is labeled with SDA and SCL on the board.

## Connection table

| OLED pin | Shield pin | Wire color (recommended) |
|----------|------------|--------------------------|
| GND      | GND        | Black                    |
| VCC      | 3V3        | Red                      |
| SCL      | P19        | Yellow                   |
| SDA      | P20        | Blue                     |

> Check the silkscreen labels on your OLED module — pin order can vary between batches.

## Will this example work on this port?

Yes. The Bouncing Ball example draws to the OLED display continuously using I²C on P19 and P20. No other pins are used — the animation runs entirely through the display and does not require any sensors or buttons.

## Cable

A 4-wire female-to-female dupont cable. Up to ~30 cm is fine.
