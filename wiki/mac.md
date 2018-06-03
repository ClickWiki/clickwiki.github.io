---
layout: product
title: Mac Exporter
permalink: /exporters/Mac/
category: exporters

image: "/wiki/assets/Clickteam/Mac_Image.png"
status: "Released"
release_date: "with Mac Editor: September 27, 2016; for Windows Editor: April 24, 2017"
release_date_numerical: "9/2016"
products:
  - cf2.5
  - cf2.5dev
shop_link: "https://www.clickteam.com/web-shop"
support_link: "https://community.clickteam.com/forums/387-Mac-Export-Module-amp-Fusion-MAC-Editor"
links:
  - "[View on Steam](https://store.steampowered.com/app/574330)"
  - "[About the Mac Exporter](https://www.clickteam.com/mac-export-module)"
  - "[Release Announcement](https://steamcommunity.com/games/248170/announcements/detail/1281681022013632372)"
---

![](/wiki/assets/Clickteam/Fusion_Mac.png)

The **Mac Exporter** is an new exporter alongside the [Fusion 2.5](/fusion/2.5) [Mac Editor](/fusion/2.5/#mac-editor) that exports Fusion apps to macOS. The runtime is based on the [iOS Exporter](/exporters/iOS) and is native to macOS (unlike [Java](/exporters/Java) Mac Application). The Mac Exporter is built-in to the Mac Editor, and is also available separately for the Windows editor.

# Build Types 
## MAC application
Exports a native Mac application (.app). You do not need any other software for this build type.

## MAC Xcode project
This Build Type exports an Xcode project, similar to an iOS Xcode Project or iOS Final Xcode Project. Recommended if you want to modify your application in Xcode.

## MAC application file (.ccm)
Note: This build type was added in build 288.1.  
Similar to an iOS application (cci), this build type should be used when updating your Xcode project. If you add any extensions or modify certain features, you will have to rebuild your Xcode project.
