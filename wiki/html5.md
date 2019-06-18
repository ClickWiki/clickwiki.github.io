---
layout: product
title: HTML5 Exporter
permalink: /exporters/HTML5/
category: exporters

image: "/wiki/assets/Clickteam/HTML5_Image.jpg"
status: "Released"
release_date: "2014"
release_date_numerical: "2014"
products:
  - cf2.5free
  - cf2.5
  - cf2.5dev
shop_link: "https://www.clickteam.com/web-shop"
support_link: "https://community.clickteam.com/forums/348-HTML5-Export-Module-2-5"
links:
  - "[View on Steam](https://store.steampowered.com/app/267652)"
  - "[About the HTML5 Exporter](https://www.clickteam.com/html5-export-module)"
  - "[HTML5 Exporter Details](https://www.clickteam.com/html5-export-module-details)"
  - "[HTML5 Export Module 2.5 Owner's Lounge](http://community.clickteam.com/forums/373-Owner-s-Lounge-HTML5-(2-5))"
---

![](/wiki/assets/Clickteam/Fusion_HTML5.png)

The **HTML5 Runtime** exports creations for use any HTML5 browser that supports the Canvas element. The file needs to be placed on a web server to work as the creation cannot be locally ran through the file system. The free but limited version of the exporter is bundled with all versions of [Clickteam Fusion 2.5](/fusion/2.5) as of build 284. The free edition only exports to this limited version.

{% include TOC %}

# Build Types
There are three build types for HTML5:

## HTML5 Application (limited version)
See Free Version.

## HTML5 Development
This bundles the source code for all the extensions within **Runtime.js**, which will accelerate the time required to build the creation but use more disk space. The events used in your creation (the "source code") is also compiled with no obscuration, allowing for debugging or modification. This should not be uploaded to a live production server, as this could potentially allow others to steal your source code.

## HTML5 Final Project
The build time will take slightly longer, but will only result in obscured runtime code and the assets required for your creation. This is intended for final exports as it prevents hackers from stealing your source or modifying runtime behaviour.

# Structure
The exporter creates files for use on a web server only. If the creation is attempted to run on a local computer (via the file system) than the web browser will display an error as it is not designed to do so.

Suppose the name of the creation is "MyApp".

* {% include fa icon = "folder" %} **MyApp**
    * {% include fa icon = "file-code" %} index.html - Your runtime is executed here.
    * {% include fa icon = "folder" %} **resources - Your assets are stored here.**
        * {% include fa icon = "music" %} 9999.mp3 - Silence required in order to play sounds on some devices.
        * {% include fa icon = "file" %} MyApp.cc1
        * {% include fa icon = "file" %} MyApp.cch
        * {% include fa icon = "image" %} fire1D.png - For virtual joysticks: P1 pushed down.
        * {% include fa icon = "image" %} fire1U.png - For virtual joysticks: P1 unpushed.
        * {% include fa icon = "image" %} fire2D.png - For virtual joysticks: P2 pushed down.
        * {% include fa icon = "image" %} fire2U.png - For virtual joysticks: P2 unpushed.
        * {% include fa icon = "file-code" %} index.html - Redirects to Clickteam's HTML5 webpage.
        * {% include fa icon = "image" %} joyback.png - For virtual joysticks: Beneath the stick.
        * {% include fa icon = "image" %} joyfront.png - For virtual joysticks: Top of the stick.
        * {% include fa icon = "image" %} M0001*.png - All your image assets.
        * {% include fa icon = "music" %} 0000*.wav - All your audio assets in WAV format.
        * {% include fa icon = "music" %} 0000*.ogg - All your audio assets in OGG format.
    * {% include fa icon = "folder" %} **src - Your source code is stored here.**
        * {% include fa icon = "file-code" %} Runtime.js - Compiled source code.
        * {% include fa icon = "file-code" %} index.html - Redirects to Clickteam's HTML5 webpage.

# Running on a local system
As you cannot run **index.html** directly from the file system, you will need a web server and access it via a URL. There are a few various methods.

* **By pressing Build & Run within Fusion.**
    * This runs a Lacewing-powered web server on your local system, opening your web browser.
    * This option is not compatible for Mac or Wine users.
* **Using python's web server module.**
    * Python must be installed on your system.
    * Open a command prompt with your creation folder as the working directory.
    * Type this command to host on port 8080: `python -m SimpleHTTPServer 8080`
* **Running your own local web server**
    * **Apache** - Windows, Mac, Linux, and others.
    * **Microsoft Internet Information Services** (IIS) - Windows only.
    * **Personal Web Sharing** - Mac only.
    
# Running on a external server
There are many services available that will allow you to host your HTML5 creations, some free and others paid.

* [PKSoft Shared FTP Server](https://community.clickteam.com/threads/91793-FTP-Site-for-Testing-your-HTML5-projects): This is for Fusion users to host their games and is intended for testing purposes. Other users can see your files, because it is a shared login. You cannot embed your apps. (**[Instructions](/best-practices/html5-hosting/#pksoft-ftp-server)**)
* [Netlify](https://netlify.com): This is a web hosting platform for hosting static sites and apps. HTTPS is enabled. You create a personal account (You can also use a GitHub, GitLab, or Bitbucket account.) There are [free & paid plans](https://www.netlify.com/pricing/. You can embed your apps in iframes. (**[Instructions](/best-practices/html5-hosting/#netlify)**)

# Free Version
The free version comes bundled with [Fusion 2.5](/fusion/2.5) build 284 and later. It is also the only exporter available for [Clickteam Fusion 2.5 Free](/fusion/2.5#free), which features [more editor limitations](/fusion/2.5#free).

**Runtime Limitations**
* Each application cannot contain more than 3 frames.
* Each frame cannot contain more than 100 backdrop objects and 30 other objects.
* Each frame cannot contain more than 150 events.

**Available Objects**
* ![Active](https://clickwiki.net/wiki/assets/Extensions/Graphics/active.png){:width="16px"} [Active]( /extensions/active-object)
* ![Backdrop](https://clickwiki.net/wiki/assets/Extensions/Backgrounds/backdrop.png){:width="16px"} [Backdrop](/extensions/backdrop)
* ![Button](https://clickwiki.net/wiki/assets/Extensions/Interface/button-object.png){:width="16px"} [Button](/extensions/button)
* ![Combo Box](https://clickwiki.net/wiki/assets/Extensions/Interface/combo-object.png){:width="16px"} [Combo Box](/extensions/combo-box)
* ![Counter](https://clickwiki.net/wiki/assets/Extensions/Data/counter.png){:width="16px"} [Counter](/extensions/counter)
* ![Edit Box](https://clickwiki.net/wiki/assets/Extensions/Interface/edit-object.png){:width="16px"} [Edit Box](/extensions/edit-box)
* ![fgl](https://clickwiki.net/wiki/assets/Extensions/HTML5/fgl.png){:width="16px"} [fgl](/extensions/fgl) (Advertisements)
* ![Hi-Score](https://clickwiki.net/wiki/assets/Extensions/Games/hi-score.png){:width="16px"} [Hi-Score](/extensions/hi-score)
* ![HTML5](https://clickwiki.net/wiki/assets/Extensions/HTML5/html5.png){:width="16px"} [HTML5](/extensions/html5)
* ![List](https://clickwiki.net/wiki/assets/Extensions/Interface/list-object.png){:width="16px"} [List](/extensions/list)
* ![Lives](https://clickwiki.net/wiki/assets/Extensions/Games/lives.png){:width="16px"} [Lives](/extensions/lives)
* ![Physics - Engine](https://clickwiki.net/wiki/assets/Extensions/Physics/physics-engine.png){:width="16px"} [Physics - Engine](/box2d)
* ![Physics - Fan](https://clickwiki.net/wiki/assets/Extensions/Physics/physics-fan.png){:width="16px"} [Physics - Fan](/box2d)
* ![Physics - Magnet](https://clickwiki.net/wiki/assets/Extensions/Physics/physics-magnet.png){:width="16px"} [Physics - Magnet](/box2d)
* ![Physics - Particles](https://clickwiki.net/wiki/assets/Extensions/Physics/physics-particles.png){:width="16px"} [Physics - Particles](/box2d)
* ![Physics - Rope and Chain](https://clickwiki.net/wiki/assets/Extensions/Physics/physics-rope-and-chain.png){:width="16px"} [Physics - Rope and Chain](/box2d)
* ![Question & Answer](https://clickwiki.net/wiki/assets/Extensions/Text/question-answer.png){:width="16px"} [Question & Answer](/extensions/question-answer)
* ![Quick Backdrop](https://clickwiki.net/wiki/assets/Extensions/Backgrounds/quick-backdrop.png){:width="16px"} [Quick Backdrop](/extensions/quick-backdrop)
* ![Score](https://clickwiki.net/wiki/assets/Extensions/Games/score.png){:width="16px"} [Score](/extensions/score)
* ![ScreenZoom](https://clickwiki.net/wiki/assets/Extensions/HTML5/screenzoom.png){:width="16px"} [ScreenZoom](/extensions/screenzoom)
* ![String](https://clickwiki.net/wiki/assets/Extensions/Text/string.png){:width="16px"} [String](/extensions/string)
* ![Sub-Application](https://clickwiki.net/wiki/assets/Extensions/Interface/sub-application.png){:width="16px"} [Sub-Application](/extensions/sub-application)

**Available Movements**
* [Clickteam Circular](/movements/clickteam-circular)
* [Clickteam Invaders](/movements/clickteam-invaders)
* [Physics - Static](/box2d)
* [Physics - 8 directions](/box2d)
* [Physics - Bouncing ball](/box2d)
* [Physics - Background](/box2d)
* [Physics - Platform](/box2d)
* [Physics - Spring](/box2d)
* [Physics - Spaceship](/box2d)
* [Physics - Race car](/box2d)

[Information from Clickteam](https://community.clickteam.com/threads/92265-HTML5-Free-version-Limitations)

# Debugging
Most major web browsers feature "Developer Tools" that allow debugging and inspection of code. This can usually be activated by pressing `F12` or `Ctrl`+`Shift`+`I` (`command`+`option`+`I` on macOS). The web console can be invaluable to identify why a project is not loading or a trace back of a crash or freeze.

For instance, a common error that may occur is:

```
Uncaught ReferenceError: Runtime is not defined
```

This is because the **Runtime.js** file is not accessible. This could be due to the fact it's non-existent, is pointing to the wrong file (eg. RuntimeDev.js) or there is a permissions error on the web server.

If the HTML5 runtime promptly halts and freezes due to an error, this could be as a result of a bug in an extension or object, which can be reported on the forum should it be easily reproduced.

If no buttons show up and you cannot click on active objects, upgrade to build 285.1.