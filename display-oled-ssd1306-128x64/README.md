# OLED SSD1306 128×64

An OLED display is a small screen that lights up individual pixels to show text and graphics. This one is 128 pixels wide and 64 pixels tall — about the size of a postage stamp. It connects to the micro:bit using I²C, which means only two wires are needed to send it information.

Model: GME12864-11-12-13 V3.22 · Address: 0x3C · Supply: 3.3 V · Datasheet: `datasheet/GME12864-11.pdf`

## Wiring (JellySTEM Shield)

| OLED | Shield |
|------|--------|
| GND  | GND    |
| VCC  | 3V3    |
| SDA  | P20    |
| SCL  | P19    |

## In MakeCode

The JellySTEM extension includes OLED blocks under the **OLED Display** group. No extra extension needed — just add JellySTEM and the blocks are ready to use.
