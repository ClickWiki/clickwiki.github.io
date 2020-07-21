---
layout: page
title: OS Compatibility
permalink: /os-compatibility/
category:
---
[Clickteam Fusion 2.5] and its predecessors have been built and continuously expanded from its previous versions. Due to this, Clickteam products have a strong dependency on Windows and still maintains a lot of legacy code. The [next generation of Fusion](/fusion/3.0/) will be using cross-platform technologies to deliver a native product to all platforms.

This page will list problems and solutions for **Windows** users, as well as providing details on how to run Fusion on other desktop operating systems, such as **macOS** and **GNU/Linux**.

{% include TOC %}

## {{ site.win_logo }} Windows

Clickteam's products are built and designed for Windows and are fully supported on this platform. However there is a rare chance you may encounter a problem due to external factors.

#### Minimum Requirements

- [Fusion 2.5](/fusion/2.5/) only runs and exports for **Windows XP Service Pack 3** or newer.
- [Multimedia Fusion 2](/fusion/2.0/) can be run and exports for **Windows 98 Second Edition** and newer.

#### Potential Problems

* **Random crashes when using Direct3D in the editor or running a program.**
  * **Cause:** Improperly installed graphic drivers.
  * **Solution:**
    * Re-install the graphic drivers on your system, or roll back to a previous version if a previous one worked.
    * Re-installing DirectX 9 from a redistribute may also help.

* **Antivirus is triggered during exportation or with specific extensions** or
* **Extensions, runtime or creations mysteriously disappear or cannot be found.**
  * **Cause:** [Antivirus is triggering a false positive.](/extensions/#antivirus-false-positives)
  * **Solution:**
    * Add the Fusion folder as an exception or to the blacklist for scanning.
    * Exclude Fusion processes from being scanned. Eg. `mmf2.exe` and `stdrt.exe`.
    * Report the affected file to the antivirus company as a false positive.

* **Cannot write to "protected" directories.** _(Such as creating an INI in the Windows directory)_
  * **Cause:** Windows prevents this for security reasons.
  * **Solution:** The program will need to be ran as an administrator, run in compatibility mode or save the file elsewhere.

---
## {{ site.mac_logo }} macOS

Mac users are now able to purchase the **Mac Editor**, which is an optimized version of [Fusion 2.5] running in a Wine wrapper providing better integration with the Mac environment. The creations exported to macOS are **native** to the platform, and are not Wine wrappers.

The [next generation of Fusion](/fusion/3.0/) will be able to have a native editor for this platform.

* [Mac Editor Information](http://www.clickteam.com/fusion-2-5-mac-editor-information)
* [Download LAME](https://sites.google.com/site/advaithdownloadstorage/lame_enc.dll?attredirects=0&d=1)

{{ site.steam_logo }} **The Mac version of the product is not available via Steam (Mac).** You can install Steam (Windows) through Wine with [this guide](#installing-clickteam-products-on-mac-through-wine).


## {{ site.linux_logo }} GNU/Linux

There is currently no optimized editor or any plans to create an exporter to this platform with the current [Fusion 2.5] product [(Source)](http://community.clickteam.com/threads/85571-Linux-Exporter?p=624620&viewfull=1#post624620).

Good news, [Fusion 3] will natively support this platform.

------

## Running on non-Windows platforms

### Using the Wine Compatibility Layer

[Wine is an open source project](https://www.winehq.org/about/) that translates Windows API calls to a language the OS understands (such as DirectX → OpenGL). Once you set up a **"wine prefix"**, you can then proceed to install your desired [Clickteam] product like you would on Windows. Performance is near native and is compatible with a vast amount of Fusion's features.

[Further details about running under Wine are documented further on this page.](#wine)

##### {{ site.mac_logo }} macOS

{:.table .table-sm}
Software    | Free to Use?  | Description
----------- | ------------- | -------------------
[PlayOnMac](https://www.playonmac.com/) | Yes - Open Source | Provides a frontend for managing Wine.
[Wineskin](http://wineskin.urgesoftware.com/) | Yes - Open Source | Creates wrappers.
[WineBottler](http://winebottler.kronenberg.org/) | Yes - Free | Creates wrappers.
[CrossOver](https://www.codeweavers.com/products/crossover-mac/) | Commercial | Provides an easy to use interface. **Supports the Wine project.**

##### {{ site.linux_logo }} GNU/Linux

{:.table .table-sm}
Software    | Free to Use?  | Description
----------- | ------------- | -------------------
[Wine](https://winehq.org/) | Yes - Open Source | Packages available for your distribution.
[PlayOnLinux](https://www.playonlinux.com/) | Yes - Open Source |  Provides a frontend for managing Wine.
[CrossOver](https://www.codeweavers.com/products/crossover-linux/) | Commercial | Provides an easy to use interface. **Supports the Wine project.**

#### Using Virtualization Software

If you would prefer to have the product running with as much compatibility as possible, while still using your main operating system, then you'll require: **a copy of Windows**, **virtualization software** and **additional disk space**. As virtualizing another computer adds overhead to your system resources, there may have degraded performance and/or unoptimized graphics (depending on the virtualization platform and hardware)

##### {{ site.mac_logo }} macOS

{:.table .table-sm}
Software    | Free to Use?  |
----------- | ------------- |
[VirtualBox](https://www.virtualbox.org/) | Yes - Free / Open Source
[Parallels](https://www.parallels.com/) | Commercial
[VMWare Fusion](https://www.vmware.com/uk/products/fusion) | Commercial

##### {{ site.linux_logo }} GNU/Linux

{:.table .table-sm}
Software    | Free to Use?  |
----------- | ------------- |
[VirtualBox](https://www.virtualbox.org/) | Yes - Free / Open Source
[QEMU](http://wiki.qemu.org/Main_Page) | Yes - Open Source
[KVM](http://www.linux-kvm.org/page/Main_Page) | Yes - Open Source
[VMWare Workstation](https://www.vmware.com/products/workstation/) | Commercial
[VMWare Player](https://my.vmware.com/web/vmware/free#desktop_end_user_computing/vmware_player/7_0) (64-bit only) | Commercial

### Dual Booting

On a Macintosh, this is available through **Bootcamp**. This requires a Windows license and splitting your disk's partitions. It also means you must restart your computer to switch operating systems.

**For systems with existing operating systems:**

{{ site.mac_logo }} **Mac:** Navigate to **Launchpad → Utilities → Bootcamp Assistant** and follow the on-screen instructions.

{{ site.linux_logo }} **Linux:** Use a disk partition utility such as **GParted** in a live session to split your partitions, then proceed to install Windows to the new unallocated space. Beware that Windows will overwrite the boot loader and will require a re-installation of GRUB to continue using the Linux operating system.


**Always back up data before dual booting!** As splitting partitions on an existing system can introduce data loss if the process fails or is interrupted.

* * *

##### Comparison

If one of [Clickteam]'s products are the only ones forcing you to run a Windows environment, here's a table to help you decide:

{:.table .table-sm}
. | Wine | Dual Boot | Virtual Machine
- | ---- | --------- | -----------------------
**Additional Costs** | Most packages are free. Paid support optional. | Nothing | Depends on virtualization software. Some free, some not.
**Windows License** | Not applicable | Required | Required
**Ease to Setup** | Generally easy | Quite easy | Quite easy
**Performance** | Runs at almost native speeds | Runs at native speeds | Emulating another PC adds overhead
**Disk Space Overheads** | Low, usually 100-300 MB from Wine | Disk partitions must be split | Virtual machine storage grows over time with use
**Compatibility with Clickteam's products** | Most common features | All features are designed for Windows | All features, but there could be graphical glitches
**Desktop Integration** | Yes | n/a | Depends on virtualization software
**Maintenance** | Optional to upgrade to newer Wine versions | Yes, for Windows | Yes, for Windows
**Reboot required to use?** | No | Yes | No

[Clickteam] support the use of a Wine environment as the **Mac Editor** is based on a WineSkin package. Bugs are considered (and sometimes fixed) when submitted to the [Bug Tracker](/clickteam/bug-tracker/).

* * *

### Wine

A common misconception is that [Wine] is an emulator, which is not true. **Wine** is an acronym for **W**ine **I**s **N**ot an **E**mulator, and simply translates Windows instructions to other operating systems, such as Linux, macOS and BSD. This makes it a superior solution than virtualizing a full Windows environment, especially for the sake of one application.

[Learn more about Wine](https://www.winehq.org/about/)

#### Known Wine Issues

There's a [database entry](https://appdb.winehq.org/objectManager.php?sClass=version&iId=29933) on WineHQ's Application Database that rates the application's compatibility.

Here's a list of issues with the Wine environment.

{:.table .table-sm}
Problem | {{ site.mac_logo }} Symptoms on macOS | {{ site.linux_logo }} Symptoms on GNU/Linux | Solution
------- | ---------------- | --------------------- | ---------
Direct3D in the Frame Editor | This may appear as a black screen. | Some graphic cards/drivers will have no problems, for some computers there will be a rendering glitch or black screen. | To fix this, you must disable "Use Direct3D in the Frame Editor" from the Preferences dialog under the "Frame Editor" tab.
Direct3D programs may render the runtime incorrectly. | Interface objects (Buttons, edit boxes, etc) will not appear. (Windows runtime ONLY) | Some graphic cards/drivers will have no problems, but weaker computers may have problems rendering the frame correctly. | To prevent this, switch the Display Mode (Application Properties> Runtime Options> Display Options) to "Standard" or use the /DIB command switch.

##### Extensions

Depending on the version of Wine, there may be problems with some extensions. Those that require a deep Windows dependency are likely to throw an error or crash.

- **.NET Object**
- **DirectShow** - This may work depending on the format and computer.
- **Rich text boxes** require the libraries **riched20** and/or **riched30** from **winetricks** to prevent a crash when these controls are displayed.
- **Web Control Object** - **May** require **one** of the Internet Explorer **winetricks** to be installed: _**ie6, ie7, ie8**_.
- **Scintilla** Instant editor crash

#### Installing Clickteam Products on Mac through Wine

##### Installing Fusion

###### Installing the Standalone Version

This is a guide to install Fusion on Mac.

**Required:**

* [Wineskin](http://wineskin.urgesoftware.com/tiki-index.php)
* [Fusion Icons](https://sites.google.com/site/advaithdownloadstorage/FusionIcons.zip?attredirects=0&d=1) (*)
* Fusion Installer for either [demo](http://www.clickteam.com/webftp/files/mmf2/Demo/MMF2Demo_En.exe), [free](http://www.clickteam.com/webftp/files/mmf2/Demo/cf25freeSetup.exe) (or as applicable)

**Steps:**

1. [Download Wineskin](http://wineskin.urgesoftware.com/tiki-index.php?page=Downloads) if you haven't already.
2. Open Wineskin Winery and click Create New Blank Wrapper
3. When your wrapper finishes creating, drag it from the Wineskin folder to your desktop.
4. Right-click the wrapper and click "Open Package Contents", and double-click Wineskin.
5. Click Install Software, then Choose Setup Executable
6. Find and select the Fusion Installer.
7. Go through setup with all normal settings. (but agree to the T&C)
8. When it asks you to choose the executable, choose /mmf2u.exe.
9. (*) If you haven't already, unzip the Fusion Icons zip file.
10. (*) In the Wineskin window, click Advanced and then Browse under Icon.
11. (*) Find the FusionIcons folder and choose the correct icon(Free, Standard, Dev)
12. Close the window and move the wrapper to the Applications folder.
13. Open Fusion like you normally would open a Mac app
14. In Fusion, go to Tools&gt;Preferences and go to the Frame Editor tab
15. Uncheck "Use Direct3D in editor for Direct3D applications" and click OK.

(*) _Optional, these steps are to add the Fusion logo to your wrapper._

###### Installing the Steam Version

This is a guide to install Steam on Mac and correctly install Fusion.

1. [Download PlayOnMac](http://repository.playonmac.com/PlayOnMac/PlayOnMac_4.2.12.dmg) if you haven't already.
2. Click "Install a Program" and choose Steam.
3. Install Steam normally (in the C drive), but **uncheck** Launch Steam at the end.
4. Once it closes, make sure Steam is selected and click Run.
5. Log in to your account and try to download Fusion.
6. If Steam closes while installing Fusion, try to re-open it and wait (it might take a while).
7. Once Fusion is ready to launch, try to launch it and wait (it might take a while).
8. Once it launches, go to Tools&gt;Preferences and **uncheck** "Use Direct3D in editor for Direct3D applications".

**Launching Fusion:**

1. Open PlayOnMac
2. Select Steam and click Run
3. Launch Fusion from Steam

##### Installing Tools

This is a guide to install Install Creator or Patch Maker on Mac.

**Required:**

* [Wineskin](http://wineskin.urgesoftware.com/tiki-index.php)
* [Tools Icons](https://sites.google.com/site/clickwikifiles/ToolsIcons.dmg?attredirects=0&d=1) (*)
* Installers for:
  * [Install Creator 2](http://www.clickteam.com/webftp/files/4/5/icinst.exe)
  * [Install Creator Pro](http://www.clickteam.com/webftp/files/5/5/icpinst.exe)
  * [Patch Maker](http://www.clickteam.com/webftp/files/9/5/pminst.exe)

**Steps:**

1. [Download Wineskin](http://wineskin.urgesoftware.com/tiki-index.php?page=Downloads) if you haven't already.
2. Open Wineskin Winery and click Create New Blank Wrapper
3. When your wrapper finishes creating, drag it from the Wineskin folder to your desktop.
4. Right-click the wrapper and click "Open Package Contents", and double-click Wineskin.
5. Click Install Software, then Choose Setup Executable
6. Find and select the correct Installer.
7. Go through setup with all normal settings. (but agree to the T&C)
8. When it asks you to choose the executable, choose /ic.exe or /PatchMaker.exe.
9. (*) If you haven't already, double-click the Tools Icons dmg file.
10. (*) In the Wineskin window, click Advanced and then Browse under Icon.
11. (*) Click ToolsIcons under Devices and choose the correct icon (Install Creator, Patch Maker)
12. Close the window and move the wrapper to the Applications folder.
13. Open the tool like you normally would open a Mac app

(*) Optional, these steps are to add the tool's logo to your wrapper.

##### Installing Fusion Exporters

**Required:** Exporter installer ([XNA](http://clickstore.clickteam.com/index.php?route=account/download), [Other](https://shop.clickteam.com/))

This is a guide to install Exporters on Fusion on Mac.

_Note: You must have installed **a full (paid) version** of Fusion in [this way](#installing-the-standalone-version)._

**Steps:**

1. Right-click on the Fusion wrapper and click "Open Package Contents".
2. Open Wineskin.
3. Click Install Software, then Choose Setup Executable
4. Find and select the correct Installer.
5. Go through setup with all normal settings. (but agree to the T&C).

###### Installing the XNA Exporter for the Steam version

This is a guide to install the XNA Exporter on the Steam version of Fusion on Mac.

_Note: You must have installed **the steam version** of Fusion in [this way](#Installing_the_Steam_Version)._

1. Open PlayOnMac
2. Click Steam and click Configure
3. Go to Miscellaneous and click "Run a .exe file in this virtual drive"
4. Choose the XNA exporter installer
5. Go through setup with all normal settings. (but agree to the T&C).

#### Integration outside of Wine environment

It is possible for Mac/Linux to call programs native to their system, but please take caution if you plan to distribute your product to another user's system. Programs can be called by running the System Object's **Execute an external program** → **"With an evaluated pathname"** action.

Here are some examples for a Linux environment:

##### Unix Pathname

{:.table .table-sm}
Fusion Command | Fusion Parameters | Action
-------------- | ----------------- | ----------------------
`"/usr/bin/nautilus"` |  | Would open the Nautilus file manager.
`"/bin/bash"` | `"/path/to/script.sh"` | Executes a shell script in the background. **[1]**
`"/usr/bin/gnome-terminal"` | `"-e /path/to/script.sh"` | Opens the Terminal and run a shell script.
`"/usr/bin/zenity"` | `"--info --title="Test Dialog" --text="Fusion opened me." "` | Open zenity (for creating dialogs) to create your own natively. (Make sure any parameters involving speech marks [""] are properly parsed by Fusion)

**[1]** Note that user scripts and binaries will refuse to open for security reasons if they are not marked as executable.

##### Via Wine's Z: Drive

Similar thing again, but this will fail if the wine prefix has removed the Z: drive.

{:.table .table-sm}
Command | Parameters | Action
-------------- | ----------------- | ----------------------
`"Z:\usr\bin\nautilus"` | | Open Nautilus.
`"Z:\bin\bash"` | `"/path/to/script.sh"` | The Unix pathname needs to be correct in the parameter, since this is called via Linux and had left the Wine environment.*
`"Z:\usr\bin\gnome-terminal"` | `"-e /path/to/script.sh"` | Opens the Terminal and run a shell script.
`"Z:\usr\bin\zenity"` | `"--info --title="Test Dialog" --text="Fusion opened me." "` | Open zenity (for creating dialogs) to create your own natively. (Make sure any parameters involving speech marks [""] are properly parsed by Fusion)

#### Detecting if running in a Wine environment

Wine includes files in its Windows directory that could be checked if they exist, for example: `C:\windows\system32\winecfg.exe`

[Wine]: https://winehq.org/
[Clickteam]: /clickteam/
[Clickteam Fusion 2.5]: /fusion/2.5/
[Fusion 2.5]: /fusion/2.5/
[Fusion 3]: /fusion/3.0/
