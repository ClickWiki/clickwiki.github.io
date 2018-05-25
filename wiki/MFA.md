---
layout: page
title: MFA
permalink: /file-extensions/MFA/
category: file-extensions
---

{% include thumbnail image = "/wiki/assets/Clickteam/Filetypes/MFA.png" text = "File icon depends on the product installed" %}

**MFA** (Multimedia Fusion Application) is the file format used by [Multimedia Fusion]
and up which replaces the [GAM] file format used by [The Games Factory] and older programs.
A creator's events, frames and files are stored inside the file, and acts as the
"source code" to a user's application or game.

{% include TOC %}

## Backups
It is strongly recommended to take regular backups of MFA files. In the event
they become corrupt,they may become unreadable and require special support to
recover it's contents. There is a feature in the Preferences which allows Fusion
to create automatic backups on each save. These files use numbering for its extension,
starting with **.000** up to **.999**.

Backups are particularly important with beta software, as these are still being tested.
They may corrupt the MFA, or perform strange quirks that should be reported to the [Bug Tracker].

## Fusion 2.5 Changes
[Clickteam Fusion 2.5] further expands upon the original MFA format used by [Multimedia Fusion 2]:

* Files created by version 2.5 cannot be opened with MMF2.
* Files opened in version 2.5 that were saved in 2.0 are automatically backed up the first time they are opened and prompted to choose a language.
* Improved compression, particularly images with alpha channels.

## Missing Extensions / Frames
This occurs when your copy of Fusion is missing an extension or contains a frame
featuring objects that are incompatible with your system (for example, an [ActiveX] control).
In many cases, these may be available to download from the Extension Manager, or through
an extension pack.

With really old projects from [Multimedia Fusion 1.5] that contain extensions
incompatible with newer versions of Windows or Fusion, you may need to copy
an existing extension's [MFX] files in order to dismiss the "incompatible
extensions" message.

## Fusion 3 Changes
[Clickteam] have confirmed that:

* Events will be saved in **JSON** format.
* There will be a conversion tool from MFA.

This move will enable Fusion to support version control systems (such as Git) for the first time.

[Clickteam]: /clickteam/
[Multimedia Fusion]: /fusion/
[Multimedia Fusion 2]: /fusion/2.0/
[Clickteam Fusion 2.5]: /fusion/2.5/
[MMF]: /fusion/
[GAM]: /file-extensions/GAM/
[MFX]: /file-extensions/MFX/
[The Games Factory]: /games-factory/
[TGF]: /games-factory/
[Bug Tracker]: /clickteam/bug-tracker/
[ActiveX]: /extensions/activex/
