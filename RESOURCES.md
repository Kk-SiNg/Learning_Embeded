# Embedded Systems Resources

## Knowledge

### Architecture & Bare-Metal Programming

- [Video Course: "Modern Embedded Systems Programming" by Miro Samek (Quantum Leaps)](https://www.youtube.com/c/StateMachineCOM)
  The gold-standard free video course for bare-metal ARM Cortex-M programming. Walks through what happens at the machine level when C executes. Use for: boot sequence, linker scripts, interrupts, startup code, register-level peripheral access. Companion site: [state-machine.com/video-course](https://www.state-machine.com/video-course).

- [Book: *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu](https://www.oreilly.com/library/view/the-definitive-guide/9780124080829/)
  The "bible" for understanding the ARM core used in STM32. Use for: exception model, NVIC, memory map, MPU, low-power modes, and debug architecture.

- [Book: *Modern STM32 in Practice*](https://leanpub.com/mastering-stm32)
  Bridges the gap between toy projects and production-ready STM32 code. Use for: CubeMX integration, HAL vs. register-level trade-offs, real project structure.

### Embedded C

- [Book: *Expert C Programming: Deep C Secrets* by Peter van der Linden](https://www.oreilly.com/library/view/expert-c-programming/9780133522389/)
  Covers the dark corners of C that matter in embedded: pointer arithmetic, declaration parsing, volatile, linking. Use for: volatile/const, structure padding, pointer gymnastics.

- [Reference: STM32F4 Reference Manual (RM0090)](https://www.st.com/resource/en/reference_manual/dm00031020.pdf)
  The primary source of truth for all peripherals on the STM32F4 series. Use for: register definitions, peripheral configurations, memory maps. Learning to read this document *is* a skill.

### RTOS

- [Book: *Hands-On RTOS with Microcontrollers* by Brian Amos](https://www.packtpub.com/product/hands-on-rtos-with-microcontrollers/9781838826734)
  FreeRTOS on STM32, project-based. Use for: task management, synchronization primitives, debugging concurrency failures.

- [Official FreeRTOS Documentation](https://www.freertos.org/Documentation/RTOS_book.html)
  The canonical reference. Use for: API details, kernel configuration, tick-less idle mode.

### Competition-Specific

- [FastBit Embedded Brain Academy (Udemy)](https://www.udemy.com/user/kaborana/)
  Comprehensive paid courses covering embedded C, bare-metal drivers, RTOS, and STM32. Use for: structured project-based learning when a topic needs more depth than self-study provides.

## Wisdom (Communities)

- [r/embedded](https://reddit.com/r/embedded)
  Well-moderated subreddit for embedded systems professionals. Use for: career questions, tool recommendations, debugging help, industry perspectives.

- [EEVblog Forum - Microcontrollers](https://www.eevblog.com/forum/microcontrollers/)
  Hardware-adjacent firmware discussions from experienced engineers. Use for: schematic review, oscilloscope/logic analyzer technique, production debugging.

- [STM32 Community Forum](https://community.st.com/)
  Official ST forum. Use for: STM32-specific HAL/LL issues, CubeMX configuration, errata workarounds.

## Gaps

- No high-quality free resource found specifically for CAN bus bare-metal implementation on STM32. Will need to rely on RM0090 + community examples.
- Sensor fusion (Kalman filters, complementary filters) for competition robots — need a resource that bridges theory and embedded implementation.
