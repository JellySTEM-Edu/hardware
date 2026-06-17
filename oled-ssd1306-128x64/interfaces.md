# Interfaces — GME12864-11-12-13

## I²C

This display uses I²C exclusively — there is no SPI mode on this module variant.

### Address

| Address | Condition |
|---|---|
| **0x3C** | Fixed (resistor-configured on-board) |
| 0x3D | Not available on this variant |

### Bus configuration (JellySTEM Shield)

| Signal | micro:bit pin | Shield header |
|---|---|---|
| SDA | P20 | SDA |
| SCL | P19 | SCL |

The JellySTEM Shield connects both the Shield controller (0x29) and the OLED (0x3C) to the same I²C bus. Both devices coexist without conflict because they have different addresses.

### I²C bus topology

```
micro:bit V2
  │
  ├─ P19 (SCL) ──┬── Shield controller (0x29)
  │               └── OLED display (0x3C)
  │
  └─ P20 (SDA) ──┬── Shield controller (0x29)
                  └── OLED display (0x3C)
```

### Pull-up resistors

The JellySTEM Shield provides pull-up resistors on the SDA and SCL lines. No external pull-ups are needed when using the Shield I²C header.

### Speed

The SSD1306 supports Standard Mode (100 kHz) and Fast Mode (400 kHz). MakeCode's I²C runs at 100 kHz by default, which is fully supported.

## Controller

The display is driven by an **SSD1306** (or compatible) OLED controller. Key characteristics relevant to MakeCode:

- 128 × 64 pixel framebuffer
- Commands sent over I²C using the standard SSD1306 protocol
- Supports partial display updates and scrolling commands
- Display RAM is write-only; pixel readback is not possible

## MakeCode extension

Use the `OLED12864_I2C` extension. Add it in MakeCode via **Extensions → search "OLED12864"**.

Verified working with micro:bit V2 and MakeCode v6+.