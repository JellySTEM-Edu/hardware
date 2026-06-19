# Wiring — RCWL-1601 Ultrasonic Sensor

## The connector

The RCWL-1601 has a 4-pin header, labeled left to right on the module:

```
[ GND ] [ Echo ] [ Trig ] [ VCC ]
```

> Pin order can vary between manufacturers. Always check the silkscreen labels on your specific module before connecting.

## How to connect to the JellySTEM Shield

The sensor uses two digital GPIO pins:

- **Trig** — output from the micro:bit to start a measurement
- **Echo** — input to the micro:bit that receives the return pulse

### Recommended connection

P13 and P14 are used in the examples because they are adjacent on the Shield and do not conflict with common peripherals.

| Sensor pin | Shield pin | Wire color (recommended) |
|------------|------------|--------------------------|
| GND        | GND        | Black                    |
| Echo       | P14        | Green                    |
| Trig       | P13        | Blue                     |
| VCC        | 3V3 or 5V  | Red                      |

### Other pin choices

Trig and Echo can use any free digital GPIO on the Shield:

| Available GPIO pins |
|---|
| P0 |
| P1 |
| P2 |
| P8 |
| P9 |
| P13 |
| P14 |
| P15 |
| P16 |

Avoid:

| Pin | Reason |
|---|---|
| P19 | I²C SDA |
| P20 | I²C SCL |
| P12 | IR receiver |
| P5 | micro:bit Button A |
| P11 | micro:bit Button B |

> 📷 *Screenshot placeholder — add photo of wired connection here*

## Power options

The RCWL-1601 accepts both 3.3 V and 5 V.

| Power option | Shield pin | Notes |
|---|---|---|
| 3.3 V | 3V3 | Safe for all micro:bit GPIO. Range up to ~400 cm. |
| 5 V | 5V | Maximum range up to ~450 cm. Echo output remains 3.3 V logic. |

3V3 is recommended unless maximum range is required.

## Cable

Use a 4-wire female-to-female Dupont cable.

For reliable measurements, keep the cable under 30 cm.

## How it works

```
micro:bit (Trig pin) ──► Trig ──► sensor fires ultrasonic pulse
                                           │
                                pulse reflects from object
                                           │
micro:bit (Echo pin) ◄── Echo ◄── sensor returns pulse duration
```

1. micro:bit sends a 10 µs HIGH pulse on Trig
2. Sensor transmits 8 ultrasonic bursts at 40 kHz
3. Echo goes HIGH for the round-trip travel time
4. micro:bit measures the pulse width and converts it to distance

## Which pins can I use?

Any two free GPIO pins can be used for Trig and Echo.

Examples:

| Trig | Echo |
|---|---|
| P13 | P14 |
| P0 | P1 |
| P8 | P9 |
| P15 | P16 |
| P2 | P13 |

Changing pins only requires updating the pin selection in the JellySTEM block.
