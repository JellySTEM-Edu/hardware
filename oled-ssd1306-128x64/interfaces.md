# I²C — GME12864-11-12-13

Address `0x3C` is fixed (resistor-configured on-board). The Shield controller sits at `0x29` — no conflict.

## Bus topology

```
micro:bit V2
  │
  ├─ P19 (SCL) ──┬── Shield controller (0x29)
  │               └── OLED display (0x3C)
  │
  └─ P20 (SDA) ──┬── Shield controller (0x29)
                  └── OLED display (0x3C)
```

Pull-up resistors are provided by the Shield — no external pull-ups needed.