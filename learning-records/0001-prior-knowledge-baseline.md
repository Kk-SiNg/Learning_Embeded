# Prior Knowledge Baseline — Hardware, Architecture, and Peripherals

The user has substantial self-assessed knowledge across Levels 1–2 and parts of Levels 4–5 of the embedded systems stack. Key established knowledge includes:

- **Power electronics**: P=V*I, voltage regulation (buck converters), LiPo battery specs (S/C ratings), motor circuits and stall currents
- **Mechatronics**: Brushed and BLDC motors, motor drivers, quadrature encoders, drivetrain design
- **MCU architecture**: Harvard vs. Von Neumann, RISC vs. CISC, CPU pipelining (including stalls), pin muxing, IC packages (DIP/SOIC/QFP/BGA)
- **Memory**: RAM/Flash/EEPROM characteristics and trade-offs
- **MCU selection**: Can choose between ESP32, STM32, nRF52, RP2040 based on project constraints
- **Peripherals**: UART, I2C, SPI basics; ESP32 Wi-Fi and LEDC/PWM
- **Interrupts**: Hardware vs. software interrupts, PWM generation (hardware vs. software)
- **C**: Basic syntax and logical operations

This is a competition robotics context, so all of this is grounded in real hardware experience, not just textbook knowledge.

**Implications**: The teaching path should skip Levels 1–2 and start at Level 3 (Embedded C mastery). The user's C knowledge is described as "basic syntax" — this is the sharpest edge of the zone of proximal development. Volatile, pointers, bit manipulation, and memory layout are the gate to everything above.
