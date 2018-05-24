---
layout: product
title: Extension Manager
permalink: /extensions/manager/

image: "/wiki/assets/Screenshots/ExtensionManager.jpg"
image_caption: "Screenshot of the feature."
developer: "[Clickteam](/clickteam/)"
status: "Supported"
initial_release_build: "December 2013"
initial_release_date: "12/2013"
platforms:
  - windows
languages:
  - en
  - fr
  - jp
shop_link: null
support_link: null
links:
  - "[Official Database List](http://www.clickteam.com/cem)"
  - "[News](http://community.clickteam.com/threads/90802-Clickteam-Extension-Manager-News)"
  - "[Uploader for Extension Developers](http://www.clickteam.com/extension-manager-uploader)"
---

The **Clickteam Extension Manager** *(short handed to **CEM**)* is a feature in [Fusion 2.5](Fusion_2.5 "wikilink") that allows the user to install, re-install and uninstall extensions, including those approved from third parties. The manager can be accessed by clicking **View** → **Extension Manager** or by opening the New Object dialog and clicking the **Manager** button.

This feature is similar to [Jaffob's](http://community.clickteam.com/members/7749-Jaffob) creation called [ExtensionView](/ExtensionView/) designed for [MMF2](/fusion/2.0/).

{% include TOC %}

## Features

The Manager is quite simple in its usage. Note that downloading and re-installation requires a working internet connection.

**It can:**

-   **Download** extensions direct from [Clickteam](/clickteam/)'s servers.
-   **Re-install** extensions should there be an update or corruption.
-   **Uninstall** extensions you no longer want or need (except if they built-in to Fusion)
-   Find out which runtimes are supported for an extension.

**It cannot:**

-   Automatically update extensions if they are updated.
-   Perform integrity checks for corruption.
-   Install or re-install extensions not listed by [Clickteam](/clickteam/).

## Third Party Extensions

There is a large number of [extensions](/extensions/) available and some of these have been previously featured in [Extension Packs](/extensions/packs/) or are well known to the community. However, a significant portion of extensions ever built may not be listed. Developers that submit their extensions (sometimes along with their source code) to [Clickteam](/clickteam/) can have their extension listed. If there is a demand from the [community](/clickteam/community/), then the extension will also be added.

Some extensions may not be added if they have issues, for instance, if they are not compatible on newer versions of Windows.

**Extension Developers must ensure their extension meets the following criteria:**

-   Only **1 ZIP/JSON file per extension** (no bundles).
-   Graphical extensions are **preferred to work with [HWA](/HWA/)** instead of the Standard display mode.
-   If Unicode characters are used, they **must be ported to the Unicode** version of Fusion 2.5.
-   **CHM help file and an example** is preferred.
-   Beta versions are **not** accepted.
-   The ZIP filename must be the same as your MFX filename.
-   Filenames are **case sensitive**.
-   By submitting, the developer **authorises Clickteam to publish them**.

Developers can publish their extensions here: <http://www.clickteam.com/extension-manager-uploader>

### Gallery

{% include gallery
    image = "/wiki/assets/Clickteam/CEM_Logo.jpg"
    text = "Extension Manager logo"
%}
