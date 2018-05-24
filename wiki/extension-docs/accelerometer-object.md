---
layout: extension
title: Accelerometer Object
permalink: /extensions/accelerometer-object/

icon: "/wiki/assets/Extensions/Controls/accelerometer-object.png"
developer: "[Clickteam](/clickteam/)"
status: "Supported"
release_date_text: "December 2013"
release_date: "12/2013"
products:
  - mmf2
  - mmf2dev
  - cf2.5free
  - cf2.5
  - cf2.5dev
runtimes:
  - ios
  - android
  - html5
  - xna
  - uwp
languages:
  - en
  - fr
  - jp
license: "Free"
includes_examples: false
includes_help: true
links: null
---

The Accelerometer object allows you to receive information from the accelerometers from your mobile device (Android, iPhone, iPad etc.). Please note that the accelerometer hardware drains the battery of the device, and it is a good practice to turn it on only when necessary. The accelerometers are turned on when an Accelerometer object is present in the frame, at the start of the frame. They are turned off when the frame ends.

When you run an application on the PC with the object, it will return values of zero.

{% include TOC %}

## Conditions
### Device orientation changed
This condition is true when the orientation of the device has changed. If this is the case, you can get the new orientation by using the Get current orientation expression of the object.

## Expressions
Device orientation

    Orientation( "Accelerometer object" )

This expression returns the current orientation of the device. A new orientation can be detected by triggering the "Device orientation changed" condition.

It returns values from 0 to 6:

* Unknown (should not happen unless you shake the device)
* Portrait
* Portrait upside down
* Landscape left
* Landscape right
* Face up
* Face down

## Direct values

X Acceleration

    XDirect( "Accelerometer object" )

Y Acceleration

    YDirect( "Accelerometer object" )

Z Acceleration

    ZDirect( "Accelerometer object" )

These expressions return the raw values from the accelerometer. The accelerometers are not precise devices, the value will fluctuate very much, even if you do not touch the device.

### Gravity isolated values

X Acceleration

    XGravity( "Accelerometer object" )

Y Acceleration

    YGravity( "Accelerometer object" )

Z Acceleration

    ZGravity( "Accelerometer object" )

These expressions return the values from the accelerometer taking away the gravity factor. The accelerometers are not precise devices, the value will fluctuate very much, even if you do not touch the device.

### Instantaneous values

X Acceleration

    XInstant( "Accelerometer object" )

Y Acceleration

    YInstant( "Accelerometer object" )

Z Acceleration

    ZInstant( "Accelerometer object" )

These expressions return the values from the accelerometer from the last evaluation. The accelerometers are not precise devices, the value will fluctuate very much, even if you do not touch the device.
