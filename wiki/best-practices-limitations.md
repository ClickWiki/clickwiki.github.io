---
layout: page
title: Limitations
permalink: /best-practices/limitations/
category: best-practices
---

##### Maximum Limits

- **Runtime**
    - Number of global values and strings: **Unlimited**
    - Integers: **-2,147,483,648 / +2,147,483,647** _(Unsigned)_

- **Objects**
    - Number of alterable values and strings: **26**
    - Number of internal flags: **32**
    - Launching (shooting) object speed: **250**
        - _Legacy speed of 100 was quite slow at high resolutions._

- **[Storyboard](/interface/storyboard-editor/)**
    - Number of frames: **&gt;1000**

- **[Events](/interface/event-editor/)**
    - No more than **200 event lines** can be on screen at the same time.
    - Number of event lines in a frame: **16,000 - 20,000**
    - Conditions per event: **128**
    - Actions per event: **128**

- **[Frames](/interface/frame-editor/)**
    - Frame size: **32,767 pixels**
    - Backdrops per frame: **65,536**
    - Objects per frame: **20,000**
    - Unique actives per frame: **1,000**

- **[MFA](/file-extensions/MFA/)**
    - File size: **2 GB**

- **Memory (RAM)**
    - Fusion is a **32-bit** program, and can only use up to **2 GB**.
        - Optimisation is essential if you are running out of memory.
        - _The program will crash if this limit is reached._

##### Objects

- **List Object**
    - 32,768 lines.
    - The **Internal List Object** does not have this limit.

- **INI**
    - File size: **64 kB**
    - Maximum characters: **1024**
    - The **INI++ Object** does not have this limit.

- **Rich Edit Object**
    - File size: **4 GB** _(of text)_

- **MagicDeque**
    - Number of elements: **2 MB**
