---
layout: page
title: Hardware Acceleration (HWA/Direct3D)
permalink: /hwa/
category:
---

[Clickteam Fusion 2.5] includes the HWA features of [MMF2]. The HWA features allow you to build applications that use the capabilities of 3D-accelerated graphic cards.

{% include TOC %}

## Changes from old non-HWA versions
##### Changes for the users of non-HWA versions like the Unicode version of MMF2
If you've never used the HWA version of MMF2 here is a quick list of changes:


* New Direct3D modes in the Display Mode property of the application. These modes use Direct3D to display 2D graphics.
* If the Display mode of the application is set to a standard mode, there are only a few changes in the interface:
  * The Ink Effect list is replaced with a dialog box. The effects of the normal version of Clickteam Fusion 2.5 are located in the Standard folder. The others are for the Direct3D modes.
  * The "Set Ink Effect" and "Set Semi-transparency" actions have been moved from the Visibility sub-menu to the Effects / Compatibility sub-menu. You can still use these actions in your applications.
  * The Coefficient property of the Semi-transparent effect has been replaced by a Blend Coefficient property. For compatibility reasons with HWA features this property now takes a value from 0 to 255, instead of 0 to 128. The old "Set Semi-transparency" action still uses values between 0 and 128 so your existing applications are 100% compatible. You can either continue using this action, or use the new "Effect / Set alpha-blending coefficient" action instead (this one takes a value between 0 and 255). Note: be careful, in non Direct3D display modes the 0-255 coefficient used by this new action is internally converted to a 0-128 value, so when you retrieve it with the new "Effect / Alpha-blending coefficient" expression you may get a different value (for example if you set it to 241, you'll get 240).
  * When you run or build the application, Clickteam Fusion 2.5 uses the standard runtime, to avoid any compatibility issues for your applications.

* When you set the Display Mode of the application to a Direct3D mode, you get access to new HWA features:
  * Graphic display is faster, especially in full-screen mode.
  * You can use pixel shader effects.
  * You can apply a blending coefficient and an RGB coefficient at the same time as an effect.
  * You can apply an effect to frames and layers.
  * Angles now support floating point values.
  * There are some limitations, though, especially the fact that child windows (buttons, edit boxes, etc) are not displayed in full-screen mode. See the "Limitations" section below.
  * When you run or build the application, Clickteam Fusion 2.5 uses the HWA runtime, which is the runtime used by the previous HWA version.

Note: the frame editor by default uses Direct3D to display frames of Direct3D applications. You can force the frame editor to use standard graphic display by unchecking the "Use Direct3D" option in the preferences of the frame editor.

### HWA Features
##### Accelerated display modes
There are 2 accelerated display modes: Direct3D 8 and Direct3D 9. They use Direct3D (version 8 or 9) to display graphics. In Direct3D mode, the Clickteam Fusion 2.5 engine uses the 3D-accelerated capabilities of the graphic card to display 2D graphics. Also, in full-screen mode, the engine swaps between multiple screens to accelerate the display and avoid tearing issues that occur in standard software or windowed modes.

To use HWA features you need to set the display mode to Direct3D 9 or Direct3D 8 in the properties of the application. Note: if Direct3D 9 (or 8) is not installed on the user's machine, your application will automatically run in software mode.

##### Effects - Pixel shaders
Additionally, to accelerated graphics, Direct3D modes allow you to apply special effects to pictures, via pixel shaders. A pixel shader is a function that is applied to each pixel of your images. The pixel shader function is executed directly by the graphic card, saving time for the CPU of the machine.

[Clickteam Fusion 2.5] is provided with a few pixel shaders. You can also create your own shaders with an Effect Editor.

Various shader packs have been created by users, connect to our website or to our forum to download them, and install them in the Effects directory of Clickteam Fusion 2.5. They allow you to give amazing effects to your objects. You can even apply effects to an entire frame or on a layer, those have new effect options in their properties, and new effect actions & expressions in the event editor (Storyboard and Layer objects).


#### Other features
* "Anti-aliasing when resizing" - this new option in the properties of the application allows you to anti-alias resized graphics when the "Resize to fill window size" option is selected.
* Storyboard object / New Display Mode expression: returns 1 (standard graphic mode), 2 (DirectDraw), 4 (Direct3D8) or 8 (Direct3D9).
* Storyboard object / New Pixel Shader Version expression returns the maximum version of the pixel shaders supported by the video card. Returns major version * 100 + minor version, for example, 104 if the video card supports shaders 1.4.
* Active Picture object / New "Software mode" option: this option allows you to create the Active Picture object in software mode, useful for example if your Active Picture is a hidden object used to create a level with Create Backdrop actions (if the object is optimized for HWA, then creating backdrops from it can be very slow).

## Limitations in Direct3D mode
The Direct3D mode is a very specialized mode, unlike the standard software mode. Not everything works with it.

##### Options that don't work
Frame properties: "Grab desktop" and "Keep display from previous frame" don't work. Edit box object / Button object: the "Transparent" option doesn't work. XOR, AND, OR ink effects: they are not supported in HWA. The underline & strike-out font attributes are not supported in HWA.

##### Objects that don't work or are not optimized
Important: in Direct3D full-screen mode (when you select the Change resolution mode option, or when you use the Set Full-Screen mode action), windowed objects like buttons, edit boxes, list boxes, or sub-applications are not displayed. You can use Active System Box objects instead of buttons, and the sub-application object contains a new "Display as sprite" option that allows it to work in full-screen mode (with limitations). Some graphical 3rd party objects like the Lens object don't work or may be slow (at least at the time this documentation was written). The Animation object works but is not optimized. The Ellipse shape of the Quick Backdrop object is not optimized, it's very slow in HWA mode.

##### Important: Image size
In Direct3D mode, images are displayed faster when they are stored in the video card. You should estimate the size of the images of each frame and try to keep their size below 32, 64, 128, 256 or 512 Mb (depending on the minimum specifications of your application).

Also, in Direct3D mode, images are stored as textures. Usually, texture sizes are a power of 2. For example, if a 100x50 image is stored in a texture, the size of the texture will be 128x64 (128 is the nearest power of 2 above 100, and 64 is the nearest power of 2 above 50). To avoid losing space try using images whose dimensions are a power of 2.

Last thing, video cards can't display textures larger than a maximum dimension. You should avoid using textures larger than 1024 pixels unless you only target recent graphic cards (recent graphic cards may support at least 2048x2048 pixel textures). If an image is larger than the maximum size, it won't be displayed.

##### Known issues
* Multi-line string objects sometimes don't wrap correctly.
* Rotating an object with a background-accessing shader will mess up the shader.
* You may experience incorrect transparency effect with objects having an alpha channel or a blending coefficient if their layer has an effect itself.
* Clickteam Fusion 2.5 supports pixel shaders version 3 only partly.
* [Causes problems with running through Wine](/os-compatibility/). In the [Mac Editor](/fusion/2.5/#Mac), this is "fixed" by disabling Direct3D in the frame editor and application by default.

[Clickteam Fusion 2.5]: /fusion/2.5/
[MMF2]: /fusion/2.0/
