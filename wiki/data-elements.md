---
layout: page
title: Data Elements
permalink: /interface/data-elements/
category: interface
---

{% include thumbnail
  image = "/wiki/assets/Screenshots/Data_Elements.png"
  text = "The data elements dialog with no embedded sounds."
%}

The **Data Elements** dialog interface allows the developer to view all of the data associated with the currently open [MFA](/file-extensions/mfa). It also allows modifications and inclusions of certain elements.

The dialog box can be opened by clicking ![Data Elements](https://clickwiki.github.io/wiki/assets/UI/DataElements.png) or from **View** on the menu bar.

{% include TOC %}

# Sounds
Samples that were imported through the [Sound Object](/extensions/sound-object) appear here. You can preview them with the **Play** button, **Replace** all instances of this sound with another sound file or **Extract** them out of the [MFA](/file-extensions/mfa) file.

This interface cannot directly delete sounds from your [MFA](/file-extensions/mfa). Sounds that are no longer tied to any event will be removed after closing and re-opening the file.

There are other options for individual sound samples:

* **Preload** - Loads the sample into memory when the application/frame starts.
* **Load on call** - Loads the sound into memory when called by an event.
* **Play from disk** - Plays the sample directly from the executable - This works by extracting the sample block per block as it plays it. This won't load the entire sample into memory, which is slower but useful for long sounds in order to reduce memory.

# Music
This tab is visually similar to Sounds, which again is associated with the [Sound Object](/extensions/sound-object). The only exception is that there are no options. Don't forget the term "music" refers to MIDI, which is a sequencer format, not an audio stream.


# Binary Data
This tab allows you to add and remove binary data for inclusion in your application. See [Binary Data](/interface/binary-data) for information on this feature.


# External Files
This tab lists all of the external files in use by your application. You cannot directly remove any files listed here, instead you'd need to delete the action that selects an external file.

**[<i class="fab fa-windows"></i>](/os-compatibility/#-windows) Applies to the Windows Runtime only.**


# Extensions
This tab lists all of the extensions currently in use by your application. This excludes common Clickteam objects such as [Counter](/extensions/counter) and [String](/extensions/string). You can also retrieve the file name of the extensions themselves. For instance the [Rich Edit Object](/extensions/rich-edit) is `kcriched.mfx`.


# Effect files
Not yet documented.