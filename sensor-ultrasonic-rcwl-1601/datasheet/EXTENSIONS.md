# Extensions

## JellySTEM Extension (recommended)

The JellySTEM extension includes ultrasonic sensor blocks under the **Distance Sensors → Ultrasonic** group. Supports both the RCWL-1601 and the HC-SR04 with different timing constants for each.

**Add in MakeCode:**
1. Go to [makecode.microbit.org](https://makecode.microbit.org) and open your project
2. Click **Extensions**
3. Paste this URL and press Enter:
   ```
   https://github.com/JellySTEM-Edu/pxt-jellystem
   ```

**GitHub:** [github.com/JellySTEM-Edu/pxt-jellystem](https://github.com/JellySTEM-Edu/pxt-jellystem)

---

## Underlying Implementation

The JellySTEM ultrasonic driver is adapted from the MakerBit ultrasonic extension by 1010Technologies. It uses a background measurement loop with a 3-reading median filter to reduce noise, and a hardware event system for threshold crossing callbacks.

**Original extension:** `pxt-makerbit-ultrasonic`
**GitHub:** [github.com/1010Technologies/pxt-makerbit-ultrasonic](https://github.com/1010Technologies/pxt-makerbit-ultrasonic)
**License:** MIT
**Credit:** © 1010Technologies
