# Pinout — GME12864-11-12-13

## Physical connector

The display module has a 4-pin header (left to right when viewing the screen face-on):

```
[ GND ][ VCC ][ SCL ][ SDA ]
```

> **Note:** Pin order can vary between batches. Always verify against the silkscreen labels on your specific module before wiring.

## Pin descriptions

| Pin | Label | Direction | Description |
|---|---|---|---|
| 1 | GND | — | Ground |
| 2 | VCC | Input | Power supply (3.3 V) |
| 3 | SCL | Input | I²C clock |
| 4 | SDA | Bidirectional | I²C data |

## JellySTEM Shield mapping

| OLED pin | Shield header | micro:bit pin |
|---|---|---|
| GND | GND | — |
| VCC | 3V3 | — |
| SCL | P19 | P19 |
| SDA | P20 | P20 |

## Notes

- This module has no hardware address-select pin; the I²C address (0x3C) is fixed by an on-board resistor configuration.
- There is no reset pin exposed on this module variant.