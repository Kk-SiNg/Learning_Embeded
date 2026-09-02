# Mission: Embedded Systems for Robotics Competitions

## Why
To become the firmware specialist on a competitive robotics team (Robocon, SAE, hackathons) — someone who can write deterministic, low-level code that extracts maximum performance from hardware under strict time constraints. This grounds all learning in real competition pressure: code that's "good enough for a tutorial" is not good enough here.

## Success looks like
- Can write bare-metal peripheral drivers (GPIO, UART, SPI, I2C, CAN) by reading only the reference manual — no HAL, no copy-paste
- Can architect a FreeRTOS-based firmware for a multi-actuator robot with sensor fusion, prioritized tasks, and zero deadlocks
- Can debug timing issues and communication bus errors live at a competition using an oscilloscope and logic analyzer
- Can design the firmware architecture for an open-ended system ("Design a sensor for X") and defend hardware, RTOS, and power trade-offs

## Constraints
- ~4–7 hours/week of study time
- Hardware on hand: ESP32, STM32 Nucleo, Arduino, Raspberry Pi Pico (RP2040)
- CS student — strong on algorithms and data structures, weaker on EE fundamentals
- Primary interest: low-level programming and RTOS — not PCB design or mechanical

## Out of scope
- PCB layout and schematic capture (KiCad, Altium)
- ROS 2 / high-level middleware (may revisit later)
- Machine learning on the edge (TinyML)
- Linux kernel driver development (may revisit later)
