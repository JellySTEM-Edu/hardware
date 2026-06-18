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

## In MakeCode - JellySTEM Extension

The JellySTEM extension wraps the OLED library with student-friendly blocks under the **OLED Display** group. This is the extension used in all examples in this repository.

**Add in MakeCode:**
1. Go to [makecode.microbit.org](https://makecode.microbit.org) and open your project
2. Click **Extensions**
3. Paste this URL and press Enter:
   ```
   https://github.com/JellySTEM-Edu/pxt-jellystem
   ```

**GitHub:** [github.com/JellySTEM-Edu/pxt-jellystem](https://github.com/JellySTEM-Edu/pxt-jellystem)

---

## Original SSD1306 Extension (underlying library)

The JellySTEM extension builds on top of the `pxt-oled-ssd1306` extension by Tinkertanker. It is included automatically when you add JellySTEM — you do not need to add it separately.

**Extension:** `tinkertanker/pxt-oled-ssd1306` v2.0.18
**GitHub:** [github.com/tinkertanker/pxt-oled-ssd1306](https://github.com/tinkertanker/pxt-oled-ssd1306)
**License:** MIT
**Credit:** © Tinkertanker Pte Ltd

If you want to use the low-level extension directly (without JellySTEM), add it in MakeCode Extensions by searching for **OLED12864** or pasting:
```
https://github.com/tinkertanker/pxt-oled-ssd1306
```
