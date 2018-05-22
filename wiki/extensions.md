---
layout: page
title: Extensions
permalink: /extensions/
---

**Extensions**, or also known as Objects, allow the user to expand the
functionality of Fusion by either installing additional [Extension Packs],
purchasing extensions from the ClickStore or by downloading from the [Extension Manager]
(Fusion 2.5 only). Extensions are compatible with both Standard and Developer editions of
[Multimedia Fusion 2] and [Clickteam Fusion 2.5], and will appear in the "Create new object"
dialog once installed. The Games Factory 2, demo and free edition do not support extensions,
and some are exclusive to the Developer versions or certain runtimes only.

There are over 360 extensions available from both Clickteam and third party developers,
with more in development. It will be impossible to document every single extension out there.
However, ClickWiki will do its best to list the vast majority of them.

{% include TOC %}

## Extension List
ClickWiki aims to achieve a number of past, present and future extensions. Note that
not all extensions can be documented.

**Extension Categories:**

* [3D](/extensions/3D/)
* [Firefly](/extensions/firefly/)
* [Android](/extensions/android/)
* [Audio](/extensions/audio/)
* [Backgrounds](/extensions/backgrounds/)
* [User Input (Controls)](/extensions/controls/)
* [Data Handling](/extensions/data/)
* [Database](/extensions/database/)
* [Events](/extensions/events/)
* [File Management](/extensions/files/)
* [Games](/extensions/games/)
* [Graphics and Animations](/extensions/graphics/)
* [HTML5](/extensions/html5/)
* [Interface](/extensions/interface/)
* [Internet](/extensions/internet/)
* [iOS](/extensions/iOS/)
* [Math](/extensions/math/)
* [Movements](/extensions/movements/)
* [Network](/extensions/network/)
* [Other Objects](/extensions/other/)
* [Physics](/extensions/physics/)
* [Printer](/extensions/printer/)
* [Protection](/extensions/protection/)
* [Script](/extensions/script/)
* [Storage](/extensions/storage/)
* [System](/extensions/system/)
* [Text](/extensions/text/)
* [Time](/extensions/time/)
* [Video](/extensions/video/)
* [XNA](/extensions/xna/)

## Default Objects
These objects are part of the Fusion runtime and are available for all platforms.

* [![Icon](/wiki/assets/Extensions/Built-in/system.png) System Object (Special Conditions)](/extensions/system-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/sound.png) Sound Object](/extensions/sound-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/storyboard.png) Storyboard Object (Storyboard controls)](/extensions/storyboard-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/timer.png) Timer Object (The timer)](/extensions/timer-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/create.png) Create Object (Create new objects)](/extensions/create-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/input.png) The mouse pointer and keyboard](/extensions/mouse-keyboard-object/)
* [![Icon](/wiki/assets/Extensions/Built-in/player.png) Player Object](/extensions/player-object/)

## Sources of Extensions
Extensions are files ending .'mfx' and are usually packaged in zip files or in
rare cases, an installer. Most extensions come with help documentation and examples.
The most common sources that you can obtain extensions are:

* via the [Extension Manager] (Fusion 2.5)
* via the [Community Forums]
* via the [ClickStore]
* by visiting third party sites listing available extensions
* by hiring an independent developer.

Most extensions built for [Multimedia Fusion 2] are compatible with [Clickteam Fusion 2.5],
but new extensions written for 2.5 are not backwards compatible with 2.0. If you have
MMF2 installed and run Fusion 2.5 for the first time, you'll be offered to import your
old extensions. Some extensions required tweaks from its author in order to prevent
crashes and should be re-downloaded should the user upgrade from 2.0 to 2.5, for example,
this is the case with the **File-Folder Object**.

## Installing an Extension
Depending on the medium you retrieved an extension, you can add them into Fusion in a couple of ways:

#### From a zip file

1. Navigate to your installation directory for Fusion. This will differ depending on your installed edition and version.

      For Windows users, this will be:

        C:\Program Files (x86)\Clickteam Fusion 2.5

      For Steam users, this will be:

        C:\Program Files (x86)\Steam\steamapps\common\Clickteam Fusion 2.5

2. Most extensions have a directory structure like this:

    * Data
    * Examples
    * Extensions
    * Help

    Extract these folders to the installation folder, prompting "Yes" to append into these directories.

3. Start Fusion to re-index the extensions (or if it is already running, click "Refresh" on the Create new object dialog)

#### From the extension manager
A new feature introduced in [Clickteam Fusion 2.5] is the Extension Manager.
This can be accessed by clicking "Manager" from the **Create New Object** dialog.
This feature currently only lets you browse, install and uninstall extensions
very conveniently. It lacks functionality for checking for updates or changing the category.

Read more about the [Extension Manager].

## Built-in Objects Across Exporters
These objects are part of the Fusion runtime that work across all platforms and cannot
be removed or modified. Note that some features are specific to certain runtimes and
are disabled other exporters. The table below lists the differences in features between exporters.

If you want export to Mac but the Mac exporter lacks a function your app requires, you
can use a Only available for the Developer editions of [Clickteam Fusion 2.5] and [Multimedia Fusion 2].
Java Runtime (now deprecated) Java Mac Application, or a Wine wrapper if the Java Runtime (now deprecated)
Java exporter also lacks that function or you don't have the Clickteam Fusion 2.5 Developer version.

{% include alert
    type = "info"
    title = "This table is a dump from the previous MediaWiki instance. It needs cleaning up."
%}

<table class="wikitable table table-sm">
    <tbody>
        <tr>
            <th>Object/Function</th>
            <td>
                <a href="/wiki/Windows_Runtime" title="Works with the Windows Exporter."><img alt="Works with the Windows Exporter." height="48" src="/wiki/assets/Platforms/Windows.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/Mac_Runtime" title="Works with the Mac Exporter."><img alt="Works with the Mac Exporter." height="48" src="/wiki/assets/Platforms/Mac.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/Flash_Runtime" title="Works with the Flash Exporter."><img alt="Works with the Flash Exporter." height="48" src="/wiki/assets/Platforms/Flash.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/IOS_Runtime" title="Works with the iOS Exporter."><img alt="Works with the iOS Exporter." height="48" src="/wiki/assets/Platforms/iOS.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/Android_Runtime" title="Works with the Android Exporter."><img alt="Works with the Android Exporter." height="48" src="/wiki/assets/Platforms/Android.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/HTML5_Runtime" title="Works with the Android Exporter."><img alt="Works with the Android Exporter." height="48" src="/wiki/assets/Platforms/HTML5.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/XNA_Runtime" title="Works with the XNA Exporter."><img alt="Works with the XNA Exporter." height="48" src="/wiki/assets/Platforms/XNA.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/UWP_Runtime" title="Works with the UWP Exporter."><img alt="Works with the UWP Exporter." height="48" src="/wiki/assets/Platforms/UWP.png" width="48"></a>
            </td>
            <td>
                <a href="/wiki/Java_Runtime" title="Works with the Java Exporter."><img alt="Works with the Java Exporter." height="48" src="/wiki/assets/Platforms/Java.png" width="48"></a>
            </td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/extensions/special-object/">Special / Special Conditions</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td>╍╍ Execute another program</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Application menu / menu bar</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Clipboard</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Binary files</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile Devices and BlackBerry</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td>╍╍ Application Menu</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Partially available on Mobile Devices and BlackBerry</td>
        </tr>
        <tr>
            <td>╍╍ Have files been dropped?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
        </tr>
        <tr>
            <td>╍╍ Is text available on clipboard?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile devices or BlackBerry</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td>╍╍ Filenames</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Drag &amp; Drop</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial*</td>
        </tr>
        <tr>
            <td>╍╍ Command Line</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Read text from clipboard</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile devices or BlackBerry</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/Sound_Object" title="Sound Object">Sound</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td>╍╍ Samples</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial*</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
        </tr>
        <tr>
            <td>╍╍ Music (MIDI)</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Partial*</td>
        </tr>
        <tr>
            <td colspan="10">*No File actions available on HTML5, Java for Mobile Devices, or Java for BlackBerry.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td>╍╍ Music (MIDI)</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td>╍╍ Main Pan</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
        </tr>
        <tr>
            <td>╍╍ Sample &amp; Channel Pan</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
        </tr>
        <tr>
            <td colspan="10"><b>Note</b>: Java lacks many Sound expressions not listed here.</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/Storyboard_Controls" title="Storyboard Controls">Storyboard Controls</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td>╍╍ Frame Position</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Demo</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td>╍╍ Clear screen/zone</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
        </tr>
        <tr>
            <td>╍╍ Change full screen / window mode</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
        </tr>
        <tr>
            <td colspan="10">
                *Not available on Mobile Devices and <a href="/wiki/Java_Runtime" title="Java Runtime (now deprecated)"><img alt="Java Runtime (now deprecated)" height="24" src="/w/images/a/a6/Icon_Java.png" width="24"></a> BlackBerry.
            </td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's conditions.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's expressions.</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/Timer_Object" title="Timer Object">The timer</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object.</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/Create_Object" title="Create Object">Create new objects / New Objects</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td>╍╍ Create object by name</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile Devices and BlackBerry.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's conditions.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's expressions.</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/The_Mouse_%26_Keyboard_object" title="The Mouse &amp; Keyboard object">The mouse pointer and keyboard</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td>╍╍ Hide/Show Mouse Pointer</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile Devices or BlackBerry</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td>╍╍ The keyboard</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
        </tr>
        <tr>
            <td>╍╍ Mouse wheel movement</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile Devices or BlackBerry</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's expressions.</td>
        </tr>
        <tr>
            <th colspan="10" style="background:lightgray;text-align:center">
                <a href="/wiki/Player_Object" title="Player Object">Player</a>
            </th>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Actions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's actions.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Conditions</b></td>
        </tr>
        <tr>
            <td colspan="10">╍╍ All exporters are compatible with this object's conditions.</td>
        </tr>
        <tr>
            <td colspan="10">╍ <b>Expressions</b></td>
        </tr>
        <tr>
            <td>╍╍ Current key/input device</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#9F9;vertical-align:middle;text-align:center;">Yes</td>
            <td style="background:#E4E4E4;vertical-align:middle;text-align:center;">?</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td style="background:#F99;vertical-align:middle;text-align:center;">No</td>
            <td class="table-partial" style="background:#FFB;vertical-align:middle;text-align:center;">Yes*</td>
        </tr>
        <tr>
            <td colspan="10">*Not available on Mobile Devices or BlackBerry</td>
        </tr>
    </tbody>
</table>


## Writing Your Own
If you are a programmer, Clickteam have SDKs available for you to create your own
extensions for use in Fusion for various exporters, providing you know the programming language.

## Common Problems
#### Antivirus False Positives
Unfortunately, there are a minority of extensions are suspect to being flagged by antiviruses
as "false positives" (namely Norton and Avast!). Don't worry, these extensions are not harmful,
however they can affect Fusion and installation procedures. It is strongly recommended you inform
the organisation behind your antivirus about this, so they can prevent this happening in future.
In the meantime, to prevent the false positive, you can:

* Exclude *.mfx files from being scanned.
* Exclude the Fusion installation directory from being scanned.
* Switch to another antivirus.
* Turn off real-time scanning (not generally recommended)

#### Third party extensions may diminish
When you encounter a problem and seek advise from the Community Forums, you may discover
that the extension you were using has been deprecated, abandoned or is no longer supported
by its author. Due to this, you may be using buggy code that may be the cause of crashing
or unpredicted results from your projects.

#### Stuck in the "Other Objects" Category
When you install many extensions, some of them may not be assigned a category. To clean
them up from the "Other Objects" category, you will need to manually edit a file called
**exts.ini** from the Extensions folder.


[Community Forums]: /clickteam/forums/
[ClickStore]: /clickstore/
[Extension Packs]: /extensions/packs/
[Extension Manager]: /extensions/manager/
[Multimedia Fusion 2]: /fusion/2.0/
[Clickteam Fusion 2.5]: /fusion/2.5/
