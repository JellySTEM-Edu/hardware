# Wiring — Example 02: Proximity Alert

This example uses the RCWL-1601 connected to P13 (Trig) and P2 (Echo) on the JellySTEM Shield. Sound uses the micro:bit V2 built-in speaker.

## Connection table

| Sensor pin | Shield pin |
|------------|------------|
| GND        | GND        |
| VCC        | 3V3        |
| Trig       | P13        |
| Echo       | P2         |

> 📷 *Screenshot placeholder — add photo here*

## Will this example work on these pins?

Yes. P13 and P2 are free GPIO with no conflicts. Sound is handled by `music.play` which uses the micro:bit V2 built-in speaker — no extra hardware needed.
