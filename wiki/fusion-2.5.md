---
layout: product
title: Clickteam Fusion 2.5
permalink: /fusion/2.5/
category: fusion

image: "/wiki/assets/Clickteam/Fusion2.5_Press_Image.jpg"
image_caption: "Press image demonstrating the interface."
developer: "[Clickteam](/clickteam/)"
status: "Active"
initial_release_build: "Build 280"
initial_release_date: "12/2013"
last_stable_build: "Build 287.9"
last_stable_date: "12/2016"
last_beta_build: "Build 288.1"
last_beta_date: "02/2017"
predecessor: "[Multimedia Fusion 2](/fusion/2.0/)"
platforms:
  - windows
  - mac
languages:
  - en
  - fr
  - jp
shop_link: "https://www.clickteam.com/web-shop"
support_link: "http://community.clickteam.com/forums/331-Fusion-2-5"
links:
  - "[Download free version](http://www.clickteam.com/webftp/files/mmf2/Demo/cf25freeSetup.exe)"
  - "[View on Steam - Free Version](http://store.steampowered.com/app/478960/)"
  - "[View on Steam - Base](http://store.steampowered.com/app/248170)"
  - "[View on Steam - Dev Upgrade](http://store.steampowered.com/app/267810)"
  - "[Steam Community Hub - Free Version](http://steamcommunity.com/app/478960)"
  - "[Steam Community Hub - Full Version](http://steamcommunity.com/app/248170)"
  - "[Compare Versions](#comparison)"
---

**Clickteam Fusion 2.5**, or simply **Fusion 2.5** is an upgrade from [Clickteam] featuring a highly optimised runtime and new exporters. It is the successor to [Multimedia Fusion 2] and marks an end to the [The Games Factory] brand. Likewise with [Multimedia Fusion 2], there are multiple editions of the software, sharing the same interface but have different runtime agreements and features.

The software is compatible with previously saved [MFA] files, but once saved, cannot be opened in [MMF2]. Most extensions will continue working without needing updates from the developer. Extensions that were broken have since been fixed.

{% include TOC %}

## Upgrading from previous versions
New and refined features have been implemented with Fusion 2.5, here is a summary of them:

### New features

#### General / Runtime

* Dropped the name "Multimedia".
* Integrated [Unicode], [HWA] and language support.
* Improved User Interface, such as:
  * Better docking features
  * More organised properties window
  * Skins
* Better compression of [MFA] files (particularly images containing alpha channels)
* Integrated [Box2D] Physics (7 new objects)
* New expressions for the System Object - Distance and Angle expressions.
* New events for the Timer Object - "Fire event after" and "Fire N events every M events".
* New "For each object" actions and conditions.
* New "Create by Name" action.
* Faster loops.
* Multiple Touch Object has gesture recognition.
* Debugger size and position is saved, as well as remembering objects in last session.

#### Frame Editor
* Supports frames larger than 32767.
* Status bar displays size and position of selected object.
* Paint tool (in toolbar) allows placing multiple objects into the frame without losing the selection. (old [K&P]/[TGF1]/[C&C] behaviour)
* Can hide or lock layers from the Layers bar.
* [Extension Manager] to download extensions from the server.

#### Event Editor & Event List Editor
* Skins can change the look, colours and icons.
* Scrolling is pixel-precise.
* New "Find Event" / "Find Object" commands.
* Event lines can be temporally disabled.
* Columns and rows are highlighted depending on the cursor's position.
* Tooltip shows for the current object at the top of a highlighted column.

#### Expression Editor
* Object list is displayed for easy access for an object's expressions.
* Menus can pop up either left or right clicks.
* TAB key jumps to the next non-defined parameter.
* New toolbar and features (such as changing font size and formatting)
* Expressions are easier to read by lacking restricting on spaces.
* Working undo and redo.
* New buttons for Random and Random Range.
* Real time syntax checking, with red/green colours.
* New "Where?" button can indicates a syntax error.

#### Picture Editor
* Files can be dropped into the editor.
* Improved import/export features - such as sprite sheets, setting the hotspot at predefined positions and cropping)
* Drawing colours can be swapped.
* Zoom is now done at the mouse position.
* New "G" button centers to the mass of the image.
* New RGB and hexadecimal colour edit boxes.


### Changes
* The software, as well as EXEs produced will no longer run on Windows 9x, Windows NT 4.0 or Windows 2000. Windows XP SP3 or higher is required.
* [Vitalize!] and [Java] has been dropped, but still can be built if [Multimedia Fusion 2] is installed on the same machine. A checkbox called "Show deprecated build types" will appear.
* If you had the [Unicode] exporter for [MMF2], it will no longer work in [MMF2].
* Exporter installations for [MMF2] will require new ones for [Fusion 2.5].
* [MFA] files created in [Fusion 2.5] and not compatible with [MMF2]. The software will automatically create a backup when opening MMF2-based [MFA] files for the first time.


[Read Francois' feature list post on the forums](http://community.clickteam.com/threads/82845-Fusion-2-5-feature-list)

[Read Yves' notes about the product on the forums](http://community.clickteam.com/threads/82692-About-Clickteam-Fusion-2-5)


## Interface
As with [Multimedia Fusion 2], the editor is split up into various interfaces, used in order to modify different aspects of applications or games.

* [Storyboard Editor] - For modifying frames and their fade transitions.
* [Frame Editor] - For modifying the objects, extensions and appearance of a frame.
* [Event Editor] - For defining the logic of the program, through actions, conditions and events.
* [Data Elements] - For modifying samples, binary data and external files used in a application.
* [Toolbars] - A customizable dockable interface throughout the program.


**New in Fusion 2.5:**

* [Skins] - For theming Clickteam Fusion 2.5.


**Standard/Developer Only:**

* [Event List Editor] - An expanded view to see conditions and actions.


## Editions
#### Developer
![Icon for Developer](/wiki/assets/Clickteam/Icon CF2.5Dev.png){:.left .icon}
This is the complete version of the software, including a runtime that permits you to distribute credit-free, royalty-free. It also allows the use of Developer only extensions. The user will see a purple logo.

#### Standard
![Icon for Developer](/wiki/assets/Clickteam/Icon CF2.5.png){:.left .icon}
This still features the same interface from the Developer edition, but is much more affordable and doesn't work with Developer only extensions and requires the user to credit Clickteam with a "Made with Fusion" logo somewhere in their product. Users who purchase this product will see a red logo.

#### Free
![Icon for Developer](/wiki/assets/Clickteam/Icon CF2.5Free.png){:.left .icon}
A freeware version of Fusion 2.5 that exports to HTML5 with limitations. The user is allowed to distribute any creations they create, and it forces a splash when the exported HTML5 application is ran. Users of this product will see a silver logo.

**Limitations of the free version editor:**

* You cannot load more than 1 application in the editor.
* Global events are disabled, as well as object behaviours.
* You cannot install other type of objects with the [Extension Manager].
* You cannot export images with the [Picture Editor].
* You cannot export or replace sound samples or music files with the [Data Elements] editor.
* Plus the [restrictions of the limited HTML5 Exporter](/exporters/html5). <sup>[(Thread)](http://community.clickteam.com/threads/92265-HTML5-Free-version-Limitations)</sup>

## Comparison
While all editions of the product share the same interface, the Developer version has more features and capabilities as well as the royalty, logo and credit free [Runtime Agreement] and the Free version only works with the limited HTML5 exporter and has other limitations.

* [See a comparison table for Clickteam Fusion 2.5](/fusion/compare)

## Exporters

An exporter enables a user to build an application or game to a different platform. These can be optionally purchased and allow developing for more than one platform (the default being Windows or Mac, depending which editor you purchased). Extensions may be incompatible and/or behave differently with exporters due to code differences, so it is essential to [check the compatibility](/extensions/#compatibility) between them first.

See the [Exporters] page for a list of current exporters.


## Mac Editor
Due to heavy roots with [Microsoft Windows](/os-compatibility/#Windows), it is not technically possible for a native port of the editor. Instead, Fusion is bundled inside a Wine wrapper powered by [WineSkin](http://wineskin.urgesoftware.com/). The [exporters] available today work on the Mac version with minimal fuss. Some exporter dependencies (such as the Android SDK and Java JDK for the [Android Exporter](/exporters/android/)) crossover with OS X's version, eliminating the need for a separate Windows copy.
The [Mac Export Module](/exporters/mac/) comes built in with the Mac Editor (as well as the normal Windows and limited HTML5 exporters).


[Clickteam]: /clickteam/
[Fusion 2.5]: /fusion/2.5/
[Multimedia Fusion 2]: /fusion/2.0/
[MMF2]: /fusion/2.0/
[The Games Factory]: /games-factory/
[MFA]: /file-extensions/mfa/
[Unicode]: /fusion/unicode/
[HWA]: /hwa/
[Box2D]: /box2d/
[K&P]: /klik-and-play/
[TGF1]: /games-factory/
[C&C]: /click-and-create/
[Extension Manager]: /extensions/manager/
[Vitalize!]: /exporters/Vitalize/
[Exporters]: /exporters/
[Java]: /exporters/java/
[Storyboard Editor]: /interface/storyboard-editor/
[Frame Editor]: /interface/frame-editor/
[Event Editor]: /interface/event-editor/
[Event List Editor]: /interface/event-list-editor/
[Data Elements]: /interface/data-elements/
[Toolbars]: /interface/toolbars/
[Picture Editor]: /interface/picture-editor/
[Skins]: /interface/skins/
[Runtime Agreement]: /runtime-agreement/
