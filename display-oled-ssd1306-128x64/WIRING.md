# Wiring — OLED SSD1306 128×64

## The connector

The OLED module has a 4-pin header. Pin order left-to-right when viewing the screen face-on:

```
[ GND ] [ VCC ] [ SCL ] [ SDA ]
```

> Pin order can vary between batches. Always check the silkscreen labels on your specific module.

## How to connect to the JellySTEM Shield

The Shield has a dedicated I²C header that provides power and both data lines in one spot. Connect directly with a 4-wire cable:

| OLED pin | Shield pin | Wire color (recommended) |
|----------|------------|--------------------------|
| GND      | GND        | Black                    |
| VCC      | 3V3        | Red                      |
| SCL      | P19        | Yellow                   |
| SDA      | P20        | Blue                     |

> These are recommendations only. Any colors work as long as you are consistent. The color coding above follows the common I²C convention used in most JellySTEM kits.

## Cable

A standard 4-wire female-to-female dupont cable works. The 4 wires can be kept as a ribbon or separated individually. Length up to ~30 cm is fine for I²C at 100 kHz — longer cables may need external pull-up resistors, but this is not needed on the JellySTEM Shield.

## I²C bus

The OLED connects to the same I²C bus as the Shield controller. Both devices have different addresses so they do not conflict:

```
micro:bit V2
  │
  ├─ P19 (SCL) ──┬── Shield controller (0x29)
  │               └── OLED display (0x3C)
  │
  └─ P20 (SDA) ──┬── Shield controller (0x29)
                  └── OLED display (0x3C)
```

- OLED address: `0x3C` (fixed, resistor-configured on-board — cannot be changed)
- Pull-up resistors are provided by the Shield — no external pull-ups needed
- I²C speed: 100 kHz (standard mode) — supported by both the Shield and the SSD1306 controller
