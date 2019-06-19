---
layout: product
title: Windows Exporter
permalink: /exporters/Windows/
category: exporters

image: "/wiki/assets/Clickteam/EXE_Image.jpg"
status: "Released"
release_date: "2006"
release_date_numerical: "2006"
products:
  - tgf
  - mmf1
  - tgf2
  - mmf2
  - mmf2dev
  - cf2.5
  - cf2.5dev
shop_link: "https://www.clickteam.com/web-shop"
support_link: "http://community.clickteam.com/forums/331-Fusion-2-5"
---

![](/wiki/assets/Clickteam/Fusion_Windows.png)

The **Windows Runtime** (sometimes called the EXE Runtime) exports creations into a single Windows Executable file. The file may be freely distributed to other computers and users where the software will run providing it is running Windows 98 or newer (for MMF2) or Windows XP SP3 or later (for Fusion 2.5).

All new projects default to the Windows Runtime and it is probably the most widely used runtime, with the most extensions available.

{% include TOC %}

# History
The runtime could be considered old, as it is started with the older [Multimedia Fusion 1.5](/fusion/1.5) and has some bugs that cannot be fixed without re-writing code. For instance, the bug that adds a lot of white space to version details is still present in [Fusion 2.5](/fusion/2.5).

# Formats
Since the début of [Multimedia Fusion](/fusion) and [The Games Factory](/games-factory), the runtime has been capable of creating applications, games, and screensavers in the following formats:

* **Windows Executable** (.exe)
* **Windows Screensaver** (.scr)

# Command Line Switches
The following command line switches can be used on your stand-alone application to change some behaviours.

Switch | Parameter
--- | ---
/DIB | forces standard graphic mode
/DIB3 | forces standard graphic mode, 256 colors
/DIB4 | forces standard graphic mode, 16 millions of colors, 24 bits
/DIB6 | forces standard graphic mode, 32768 colors
/DIB7 | forces standard graphic mode, 65536 colors
/DIB8 | forces standard graphic mode, 16 millions of colors, 32 bits
/DDRAW | forces DirectDraw + VRAM mode
/NOVR | no VRAM in DirectDraw mode
/DEBUG | displays graphic mode in title bar
/MIS0 | disables the Machine Independent Speed option
/MIS1 | forces the Machine Independent Speed option
/NOF | runs in windowed mode
/NOC | prevents images from being compressed in memory (for internal test)
/NOX | disables Alt+F4
/NOK | disables the Keep Screen Ratio option (in full screen mode)
/VSYNC | forces V-Sync ON

# Including External Files
The external files option is only available for the Windows Runtime, it can be selected under the Application's properties under the "Windows" tab (for [Fusion 2.5](/fusion/2.5)) or the general tab (for [MMF2](/fusion/2.0)). When checked, the final executable will also pack all the files external to the application. When the application starts, these files will be extracted using obscured file names to a temporary location with Fusion loading them when needed. All these files can be viewed in the [Data Elements](/interface/data-elements) dialog.

Alternately, the developer may consider using [Binary Data](/interface/binary-data), also available in the [Data Elements](/interface/data-elements) dialog. This makes porting the application to other platforms very convenient as this feature is supported on most (if not, all) platforms. Instead, the developer will need to specifically state which files to include, and can extract them as necessary (for some objects, data will be directly read, removing the need for extraction)

The external files feature cannot be used alongside [Binary Data](/interface/binary-data), as these options are not compatible.

# Problems with distribution
## Antivirus False Positives
In some cases, specific extensions or the compressed runtime flags an antivirus that the executable contains malicious code. This can be quite scary, especially for your users. Don't worry, the files themselves are harmless, and you are strongly recommended to send your file to the organisation behind your Antivirus to ensure this does not happen again.

A known workaround is to uncheck the "Compress the Runtime" option in your Application's properties. This prevents stdrt.exe from running and the antivirus does not trigger.

## Extensions have a dependency
Some extensions may depend on certain software on the host system in order to work properly.

For example:
* The [Superbar Progress Bar](/extensions/superbar-progress-bar) only works on Windows 7 and higher systems.
* The [.NET extension](/extensions/.net) will depend on having Microsoft .NET Framework installed.
* The [DirectShow](/extensions/directshow) object uses the codecs available on your system. If one is missing on another user's system, the video will not play.

## Compatibility with Wine
[Wine](https://winehq.org/) is a compatibility layer for non-Windows systems (such as macOS and Linux). This technology translates Windows API calls to the native operating system, delivering near-expected performance for users on those systems. Despite Fusion's heavy Windows dependency, programs created by this runtime work on other operating systems with minimal problems. However, it is known that on some Mac systems, using the Direct3D runtime (default [Fusion 2.5](/fusion/2.5) feature or by using the [HWA](/hwa) exporter for [MMF2](/fusion/2.0)) will render graphical problems. [Clickteam](/clickteam) has expressed their interest in supporting Fusion under Wine, as the [Mac Editor](/os-compatibility/#-macos) is based on a Wine wrapper. (Not to be confused with the fact the [Mac Runtime](/exporters/mac) exports native code for macOS systems.)

