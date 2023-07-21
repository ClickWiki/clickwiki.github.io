---
layout: product
title: Install Creator
permalink: /tools/install-creator/
category: tools

image: "/wiki/assets/Screenshots/InstallCreator2Screenshot.jpg"
image_caption: "Screenshot of Install Creator Pro Version 2.0 (Build #45)"
developer: "[Clickteam](/clickteam/)"
status: "Supported"
initial_release_build: "v1.0"
initial_release_date: "1999"
last_stable_build: "v2.0"
last_stable_date: "2016"
platforms:
  - windows
languages:
  - en
  - fr
shop_link: "https://www.clickteam.com/web-shop"
support_link: "https://community.clickteam.com/forums/195-Install-Creator-and-Patch-Maker"
links:
  - "[Product Details](https://www.clickteam.com/install-creator)"
  - "[Download Install Creator 2 (Free Version)](http://www.clickteam.com/webftp/files/4/5/icinst.exe)"
---

**Install Creator** is a program by [Clickteam] that lets you make installers for any project.
Install Creator is the companion product to [Patch Maker] and a stripped down version is
included with [Multimedia Fusion 2] and [Clickteam Fusion 2.5]. It features a step-by-step
wizard to easily set up files, the presentation (such as images) and various pages of text
to your installer. Uninstallers can be also created too.

In the Options menu, there is an option labeled Run As Administrator. If this is unchecked,
then users will not have to enter an administrator password to run the installer.
The user will still be able to run it as admin by right-clicking the file and clicking
Run As Administrator. If the program is not run as admin, it will give an error when
attempted to install into admin-protected areas (such as the Program Files folder).

{% include TOC %}

# Versions
## Registered
Install Creator can be bought from the [Clickteam Shop](https://shop.clickteam.com/).


## Unregistered
The Free version of Install Creator has the same features of the registered version,
but there is an extra page at the end about Clickteam and Install Creator.

## Install Creator Pro
Install Creator Pro has more features, such as the ability to put multiple software
options in one installer. It is targeted for professional use, such as product keys,
download support, and multiple installation versions. The product can be purchased
from the [Clickteam Shop](https://shop.clickteam.com/).

## Old Version
Not documented.

## Error Messages

##### **Error 21FC** - This file contains invalid data.
Possible causes:

* **Hardware Failure** - Faulty RAM may cause a corruption when decompressing the files.
  * Try the installation on another computer.
  * Try running a memory test to check for any RAM errors.
* **File is corrupt** - This could be due to a hard drive fault or transfer issue, or a malicious program injecting the original file.
  * Try re-obtaining the file, either through backups, or download again (if applicable).
  * If the file is from a disc, try cleaning the surface.
  * Obtain a checksum (ie. MD5) of the original file, and verifying again on the target computer.

## Gallery
{% include gallery
    image = "/wiki/assets/Clickteam/Icon InstallCreator.png"
    text = "Install Creator 2 Icon"
%}
{% include gallery
    image = "/wiki/assets/Clickteam/Icon InstallMaker.png"
    text = "Install Maker Icon"
%}

[Clickteam]: /clickteam/
[Patch Maker]: /patch-maker/
[Multimedia Fusion 2]: /fusion/2.0/
[Clickteam Fusion 2.5]: /fusion/2.5/
