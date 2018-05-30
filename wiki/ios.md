---
layout: product
title: iOS Exporter
permalink: /exporters/iOS/
category: exporters

image: "wiki/assets/Clickteam/IOS_Image.jpg"
status: "Released"
initial_release_date: "7/2012"
products:
  - mmf2
  - mmf2dev
  - cf25
  - cf25dev
shop_link: "https://www.clickteam.com/web-shop"
support_link: "https://community.clickteam.com/forums/346-iOS-Export-Module-2-5"
links:
  - "[About the iOS Export Module](https://www.clickteam.com/ios-export-module)"
  - "[iOS Export Module Details](https://www.clickteam.com/ios-export-module-details)"
  - "[View on Steam](https://store.steampowered.com/app/267651)"
  - "[iOS Export Module 2.0 Support Forum Archive](https://community.clickteam.com/forums/265-iOS-Export-Module-Version-2-0)"
  - "[iOS Export Module 2.5 Owner's Lounge](https://community.clickteam.com/forums/372-Owner-s-Lounge-iOS-(2-5)"
  - "[iOS Export Module 2.0 Owner's Lounge](https://community.clickteam.com/forums/252-Owner-s-Lounge-iOS-Exporter)"
---

![](wiki/assets/Clickteam/Fusion_IOS.png)

The iOS Exporter is an exporter that allows you to export to Apple iOS Devices, including iPhones, iPods, and iPads. You will also need a [Mac](https://apple.com/mac) running Xcode and a [Registration in an Apple Developer Program](https://developer.apple.com/programs). (You can test on your own device for free with Xcode 7 and up.)

{% include TOC %}

# Build Types

## iOS Xcode Project
iOS Xcode Project is the build type you should use on your first build.

* This will generate a ZIP file containing multiple files and folders, including a CCI file and an XCODEPROJ file.
* Transfer the ZIP file to your Mac (using a Removable storage device, Online storage, or Home Server) and unzip the file by double-clicking it.
* Open the XCODEPROJ file. (You will need Xcode installed. [Download](https://developer.apple.com/xcode/downloads)).

## iOS Application (.cci)
iOS Application is the build type you should use when you update your game.

* This will generate a CCI file.
* You must name it Application.cci , or else it will not work.
* Transfer the file to your Mac.
* Drag it into the folder that used to be the ZIP file that was previously created.
* If it asks if you want to replace the file Application.cci , click Yes.
* Open the XCODEPROJ file again. It should be updated.

## iOS Final Xcode project
When you are ready to publish your project, select the build type iOS Final Xcode Project.

* Follow the same steps as iOS Xcode Project.
* Build the file in Xcode.

# Requirements
* [Xcode](https://developer.apple.com/xcode) ([Download](https://developer.apple.com/xcode/downloads)) is needed to simulate/test/publish your application.
* You will need a [Mac](https://www.apple.com/mac) to run Xcode.

# Quick Guide to Install Apps

## 1: Fusion
1. Set the build type to iOS Xcode Project
2. Under iOS Settings, choose the Bundle id, Orientations, Devices, and Version.
3. Go to File > Build > Application

## 2: Transfer
4. Upload/copy the ZIP file to online storage, a home server or a removable storage device
5. Go to a This product is compatible with Mac with Xcode and download/move the file.
**Note: Steps 4 and 5 are not required if you run Fusion and Xcode on the same computer.**

## 3: Xcode
6. Double-click the ZIP file (in Finder), then double-click the XCODEPROJ file.
7. In the Project navigator, click on the Project name
8. In the main area, choose your Build number
9. Choose a Team
10. Click "Fix issue" under the Team drop-down
11. Plug in your iOS device
12. At the top, choose your device in the drop-down and press Play.

$$ 4. iOS Device
13. After the app downloads, you will see a dialog box. Press Cancel.
14. Go to Settings> General> Profile> [your apple id] and press Trust
15. Confirm the trust.
16. Open the app from the Home screen.
**Note: if the app runs without a dialog box, then skip steps 13-16.**
