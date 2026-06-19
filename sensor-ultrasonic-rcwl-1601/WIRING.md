# Wiring — RCWL-1601 Ultrasonic Sensor

## The connector

The RCWL-1601 has a 4-pin header, labeled left to right on the module:

```
[ GND ] [ Echo ] [ Trig ] [ VCC ]
```

> Pin order can vary between manufacturers. Always check the silkscreen labels on your specific module before connecting.

## How to connect to the JellySTEM Shield

The sensor uses two digital GPIO pins — one for triggering, one for receiving the echo. These can be any free digital pins on the Shield.

**Recommended pins: Trig → P13, Echo → P14**

| Sensor pin | Shield pin | Wire color (recommended) |
|------------|------------|--------------------------|
| GND        | GND        | Black                    |
| VCC        | 3V3 or 5V  | Red                      |
| Trig       | P13        | Green                    |
| Echo       | P14        | Blue                     |

> 📷 *Screenshot placeholder — add photo of wired connection here*

## Power options

Unlike most I²C peripherals in JellySTEM kits, this sensor accepts **both 3.3 V and 5 V**:

| Power option | Shield pin | Notes |
|---|---|---|
| 3.3 V | 3V3 | Safe for all micro:bit GPIO. Slightly shorter range (~400 cm). |
| 5 V | 5V | Maximum range (~450 cm). Echo pin output is still 3.3 V logic — safe for micro:bit. |

Either option is fine for classroom use. 3V3 is recommended to keep all connections consistent.

## Cable

A 4-wire female-to-female dupont cable. Keep length under 30 cm for reliable timing — longer cables can add parasitic capacitance that slows the Trig pulse edge.

## How it works

```
micro:bit (P13) ──► Trig ──► sensor fires ultrasonic pulse
                                        │
                             pulse bounces off object
                                        │
micro:bit (P14) ◄── Echo ◄── sensor signals round-trip time
```

1. micro:bit sends a 10 µs HIGH pulse on Trig
2. Sensor fires 8 ultrasonic bursts at 40 kHz
3. Echo pin goes HIGH for the duration of the round trip
4. micro:bit measures the HIGH time → JellySTEM converts to distance

## Which pins can I use?

Trig and Echo can use any free digital GPIO on the Shield. Avoid P19 and P20 (reserved for I²C) and P12 (IR receiver). Common choices:

| Use case | Trig | Echo |
|---|---|---|
| Standalone sensor | P13 | P14 |
| With OLED display | P13 | P14 (OLED on P19/P20 — no conflict) |
| With motors | P13 | P14 (motors via I²C — no conflict) |
