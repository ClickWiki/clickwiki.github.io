---
layout: page
title: Platform Instructions for Chowdren
permalink: /chowdren/platforms/
category: chowdren
---

This page is dedicated to explaining the steps to get [Chowdren](/chowdren/) running on a particular target platform. Instructions are provided as a rough indicator and may not be 100% accurate or up-to-date. **Proceed at your own risk.**

Console platforms require a development kit and/or a license to develop applications for that platform.

{% include alert
    type = "warning"
    title = "Missing or outdated Instructions."
    message = "This page is incomplete and currently has no contributors to complete the instructions for other platforms."
%}

### Windows

#### Exporter

You can use the exporter to easily create a Chowdren-powered Windows Executable (EXE).

> [http://mp2.dk/chowdren/setup.exe](http://mp2.dk/chowdren/setup.exe)

**This adds new build options:**

- Chowdren (Windows)
- Chowdren (Windows + Source)
- Chowdren (Source)
- Chowdren (CCN)

#### Command Line

**Instructions for Windows systems.**

Maithas has provided a pre-compiled command line tool to quickly get started. [(Forum Post)](http://community.clickteam.com/threads/74080-Chowdren-Blazingly-fast-Fusion-exporter-for-desktop-mobile-and-consoles?p=678350&viewfull=1#post678350)

1) Download the Chowdren command-line tool, and extract it somewhere:

> [http://mp2.dk/chowdren/chowdren-cmdtool.zip](http://mp2.dk/chowdren/chowdren-cmdtool.zip)

2) Run **chowdren-update.bat**. This updates Chowdren to the newest version.

3) Install the Chowdren exporter plugin, if you have not done so already.

> [http://mp2.dk/chowdren/setup.exe](http://mp2.dk/chowdren/setup.exe)

4) Export the game using the "Chowdren (CCN)" build option to **e.g.** _cmdtool/game.ccn_.

5) Open **chowdren-cmd.bat** and run the following command:

    python -m chowdren.run game.ccn gamesrc

6) Install CMake using the Win32 installer:

> [http://www.cmake.org/download/](https://www.cmake.org/download/)

7) Install Visual Studio 2015:

> [https://go.microsoft.com/fwlink/?LinkId=532606&clcid=0x409](https://go.microsoft.com/fwlink/?LinkId=532606&clcid=0x409)

8) Follow these steps:

- Open the CMake GUI
- Set the source directory to _cmdtool/gamesrc_
- Set the build directory to _cmdtool/gamesrc/build_
- Click "Configure", and generate a project file using the 'Visual Studio 14 2015' generator.
- Set CMAKE_BUILD_TYPE to "Release".

9) Open **build/Chowdren.sln** in Visual Studio 2015 and click "Build".

10) Copy the '**OpenAL32.dll'** and '**SDL2.dll'** files from **`anaconda-master/Chowdren/base/bin/win32`** to the **`gamesrc/build/Release`** directory.

11) **Done!** Your new executable can be found at **`_gamesrc/build/_Release/Chowdren.exe`**.

* * *

### Mac

Not documented.

* * *

### Linux

There are literally hundreds of Linux distributions out there. Depending on which distribution(s) you are targeting, take care as the following instructions may need tweaking to work on other distributions. [It has warned that cross-distro Linux applications are more involved.](http://community.clickteam.com/threads/74080-Chowdren-Blazingly-fast-Fusion-exporter-for-desktop-amp-consoles?p=647305&viewfull=1#post647305)

Many major distributions are free and can even be ran directly from disc as a "live session" without installing to a system.

**Instructions for Linux-based systems.**

##### Ubuntu/Debian

These steps are correct for [Ubuntu 14.04](https://www.ubuntu.com/download/desktop) and [it's derivatives](https://wiki.ubuntu.com/UbuntuFlavors), and are provided as a rough indicator.

1. Start by opening a terminal. For many desktop environments, you can press **CTRL+ALT+T**.

2. Install the necessary packages on your system.

        sudo apt-get install python pip git cmake cmake-qt-gui libboost-python1.54.0 libopenal-dev libboost-dev libsdl2-dev libvorbis-dev libboost-dev


3. You'll also need to install additional modules for Python.

        sudo python -m pip install setuptools
        sudo python -m pip install Pillow Cython


4. Next, download the Chowdren Command Line tool.

    > [http://mp2.dk/chowdren/cmdtool.zip](http://mp2.dk/chowdren/cmdtool.zip)


5. Enter the directory, and start building. In the meantime, use the **Chowdren Exporter** and export as a **"Chowdren (CCN)"** file to the "Chowdren" folder.

        cd anaconda-master
        python build.py build_ext -f --inplace


6. Assuming you saved the file as **myapp.ccn** and saved it into the **Chowdren** folder:

        cd Chowdren
        python -m chowdren.run myapp.ccn myappsrc
        cmake-gui


7. In the **cmake-gui** application:

    - Set source directory to `anaconda-master/Chowdren/myappsrc`
    - Set build directory to `anaconda-master/Chowdren/myappsrc/build`
    - Click "Configure".
    - Accept a dialog confirmation to use "Unix Makefiles" and "Use default native compilers"
    - Enter a value for CMAKE_BUILD_TYPE. This is either "Release" or "Debug".
    - Click "Configure", and then "Generate", providing there are no errors.

    <br>
    If you get an error about missing Boost libraries, install this additional package:

        sudo apt-get install libboost-all-dev


8. With the make files in place, it's now time to build the actual program.

        cd myappsrc/build
        make

    **Tip:** For a much faster compile time for processors with 2 or more cores, add the **-j2** parameter at the end of **`make`**, changing the "2" to the amount of cores you have.


9. **Done!** Providing all of your events are [compatible](/chowdren/compatibility), the build will complete successfully. If not, **`make`** will output errors of the code that isn't implemented in Chowdren. To execute the generated binary program:

    cd ..
    ./build/Chowdren


If you get an error about a segmentation fault, this generally means you are in the wrong working directory.

* * *

### Android

Get 32-bit builds of all the installers mentioned below.

1) Install Python 2.7 (remember to enable the 'set PATH' option)

> [http://www.python.org/downloads](https://www.python.org/downloads)

2) Install the Microsoft Visual C++ Compiler Package for Python 2.7:

> [http://www.microsoft.com/en-us/download/details.aspx?id=44266](https://www.microsoft.com/en-us/download/details.aspx?id=44266)

3) Run the following command in a console:

    python -m pip install setuptools Pillow Cython

4) Install CMake (enable 'set PATH for all users')

> [http://www.cmake.org/download/](https://www.cmake.org/download/)

5) Download Anaconda/Chowdren here:

> [https://github.com/matpow2/anaconda](https://github.com/matpow2/anaconda)

Note: Downloading the ZIP is fine, but you may want to use Git if you need to update Chowdren often.

The Git command is:

    git clone https://github.com/matpow2/anaconda.git


6) Run **`build_all.bat`** in the root directory

7) Export your Fusion game somewhere, e.g. **`anaconda/Chowdren/Game.ccn`**. Use the Chowdren exporter plugin with the build option "**Chowdren (CCN)**".

8) Open a Command Prompt and type

    cd C:\somepathhere\anaconda\Chowdren
    python -m chowdren.run Game.ccn gamesrc --platform android
    cd gamesrc
    python ../base/build.py

9) **Done!** File is in **`apk/release.apk`**.

* * *

### Wii U

Not documented.

* * *

### Nintendo 3DS

Not documented.

* * *

### PlayStation 4

Not documented.

* * *

### PlayStation Vita

Not documented.
