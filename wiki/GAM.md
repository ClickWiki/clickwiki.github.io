---
layout: page
title: GAM
permalink: /file-extensions/GAM/
category: file-extensions
---

{% include thumbnail image = "/wiki/assets/Clickteam/Filetypes/GAM.png" text = "File icon when TGF1 is installed" %}

**GAM** (The Games Factory Save File) is the file format used by [The Games Factory]
and its predecessors. As with a [MFA] file, the developer's events, frames and
sprites are stored inside the file, and acts as the "source code" to the user's game.

All [Multimedia Fusion] products can import data to a newer format, but cannot
save back to .gam. Protected GAM files cannot be opened. Samples and music (MIDI)
can be imported from the load dialog box by selecting this file type.

{% include TOC %}

## Protected GAM Files
When the user decides to export their creation, they have an option labelled
"Protect Game". This prevents the GAM file alongside the stand alone executable/setup
program from being opened in the editor. If attempted, the user will be greeted with
the message "Cannot open protected GAM file" (in [TGF]) or "Cannot read a protected TGF
or C&C." (in MMF and up)

Historically, it was possible to contact Clickteam to unlock the file. However, as
one of the developer's hard drives failed, the utility has been lost and hence,
older GAM files are permanently locked.

## Upgrading to MFA
It is possible to upgrade older GAM files to the newer, [MFA] format by importing
them into [MMF]. This then allows you to export your assets (sounds, images etc)
as well as viewing events and frames. However, it should be noted the game may
not behave as expected as the runtime has greatly changed since The Games Factory
era. For example, in TGF1 the "Hide mouse pointer" action would hide the mouse
pointer for just that frame, but in MMF2, this would hide throughout the entire
application until the action "Show mouse pointer" occurs.

## Limitations
Not yet documented.

## Bugs
Not yet documented.

[Multimedia Fusion]: /fusion/
[MMF]: /fusion/
[MFA]: /file-extensions/MFA/
[The Games Factory]: /games-factory/
[TGF]: /games-factory/
