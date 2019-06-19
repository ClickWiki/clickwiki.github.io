---
layout: product
title: Android Exporter
permalink: /exporters/Android/
category: exporters

image: "/wiki/assets/Clickteam/Android_Image.jpg"
status: "Released"
release_date: "April 2013"
release_date_numerical: "4/2013"
products:
  - mmf2
  - mmf2dev
  - cf2.5
  - cf2.5dev
shop_link: "https://www.clickteam.com/web-shop"
support_link: "https://community.clickteam.com/forums/345-Android-Export-Module-2-5"
links:
  - "[View on Steam](https://store.steampowered.com/app/267650)"
  - "[About the Android Exporter](https://www.clickteam.com/android-export-module)"
  - "[HTML5 Exporter Details](https://www.clickteam.com/html5-export-module-details)"
  - "[Android Export Module 2.0 Support Forum Archive](https://community.clickteam.com/forums/323-Android-Export-Module-Version-2-0)"
  - "[Android Export Module 2.5 Owner's Lounge](https://community.clickteam.com/forums/366-Owner-s-Lounge-Android-(2-5))"
  - "[Android Export Module 2.0 Owner's Lounge](https://community.clickteam.com/forums/253-Owner-s-Lounge-Android-Exporter)"
---

![](/wiki/assets/Clickteam/Fusion_Android.png)

The **Android/OUYA Export Module** exports creations for Android-powered devices (smartphones, tablets, and the OUYA). It was first released for purchase in April 2013 and exports to the **APK** format, ready for installation on Android or for publication to Google Play, or other marketplace services.

{% include TOC %}

# Requirements
## Dependencies
**In order for the exporter to work, a few external dependencies need to be installed on your computer:**

* [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
    * The first time you build an Android application, you'll be prompted for the pathname of the JDK directory.
        * **Example Path:** `C:\Program Files (x86)\Java\jdk1.8.0_25`
        * This can also be changed later in Fusion's preferences.
    * For 64-bit machines, it is advisable to install at least the 32-bit version, not only the 64-bit version, as it is known is cause a conflict with the [Flash Exporter](/exporters/flash).
* [Android SDK (Tools Only)](https://developer.android.com/studio#command-tools)
    * Not to be confused with the ADT Bundle or Android Studio.
    * Install at least the Android 4.0 platform package (API #14).
    * The first time you build an Android application, you'll be prompted for the pathname of the Android SDK directory.
        * **Example SDK Tools Path:** `C:\Program Files (x86)\Android\android-sdk`
        * **Example Android Studio Path:** `C:\Users\your_user_name\AppData\Local\Android\sdk`

Note that Fusion 2.5 will attempt to detect the JDK and Android SDK automatically.

## Releasing Applications
* You will need a certificate to sign your applications before being able to release them.
* If you want to publish applications on Google Play, you will need to [register to be a developer](https://play.google.com/apps/publish/signup/). There is one-off fee of $25.

You will also need to read Google's documentation, especially how to design, publish and test your application properly. You can find this documentation on the [Android Developers](https://developer.android.com) site.

## Android Requirements
Applications exported by Fusion will work on Android devices that meet the following criteria:

* Android 2.3 "Gingerbread" or above.
    * The [MMF2](/fusion/2.0) version of the exporter runs from Android 1.6 "Donut".
* Device has a GPU (graphic processor).
    * Applications can run without a GPU but they will be very slow.

# Understanding APIs
APIs are the framework that apps are built upon for specific platform versions. Each new platform version adds new APIs that are not available in the previous version, thus, lower APIs maintain compatibility with future versions whilst newer APIs work with newer features of Android. Fusion by default uses **API 14** (Android 4.0-4.0.2), but it is advisable to use the latest API possible.

Fusion will be unable to build your application if the selected Build API is not installed in the Android SDK. Alternately, if builds fail with specific APIs, try a different one.

Some features require specific API versions to be installed in addition to your target API level, but these do not need the Build API in Fusion to be changed.

{% include alert
    type = "info"
    title = "This table is a dump from the previous MediaWiki instance. It needs cleaning up."
%}

<table class="wikitable">
<tr>
<th> API
</th>
<th colspan="2"> Android Version
</th>
<th> Required for...
</th></tr>
<tr>
<th style="background:#F99"> 8
</th>
<th style="background:#F99"> Android 2.2
</th>
<td style="background:#F99"> Froyo
</td>
<td style="background:#F99"> No longer supported in <a href="Fusion_2.5" class="mw-redirect" title="Fusion 2.5">Fusion 2.5</a>
</td></tr>
<tr>
<th style="background:#FFB; color: black"> 10
</th>
<th style="background:#FFB; color: black"> Android 2.3.3
</th>
<td> Gingerbread
</td>
<td style="background:#FFB; color: black"> Admob
</td></tr>
<tr>
<th> 14
</th>
<th> Android 4.0
</th>
<td rowspan="2"> Ice Cream Sandwich
</td>
<td>
</td></tr>
<tr>
<th> 15
</th>
<th> Android 4.0.3
</th>
<td>
</td></tr>
<tr>
<th> 16
</th>
<th> Android 4.1.2
</th>
<td rowspan="3"> Jelly Bean
</td>
<td>
</td></tr>
<tr>
<th style="background:#FFB; color: black"> 17
</th>
<th style="background:#FFB; color: black"> Android 4.2.2
</th>
<td style="background:#FFB; color: black" rowspan="2"> OUYA
</td></tr>
<tr>
<th style="background:#FFB; color: black"> 18
</th>
<th style="background:#FFB; color: black"> Android 4.3.1
</th></tr>
<tr>
<th> 19
</th>
<th> Android 4.4.2
</th>
<td rowspan="2"> KitKat
</td>
<td>
</td></tr>
<tr>
<th> 20
</th>
<th> Android 4.4W.2
</th>
<td>
</td></tr>
<tr>
<th style="background:#FFB; color: black"> 21
</th>
<th style="background:#FFB; color: black"> Android 5.0.1
</th>
<td rowspan="2"> Lollipop
</td>
<td style="background:#FFB; color: black"> OUYA
</td></tr>
<tr>
<th> 22
</th>
<th> Android 5.1.1
</th>
<td>
</td></tr>
<tr>
<th style="background:#F99"> 23
</th>
<th style="background:#F99"> Android 6.0
</th>
<td style="background:#F99"> Marshmallow
</td>
<td style="background:#F99"> Temporarily incompatible until future update
</td></tr></table>

# Permissions
For certain features (such as vibration) to work on Android, you must declare which permissions required for your app. When the user installs the app, they will be presented with them and can choose to accept. You should only use the permissions that are necessary for your app.

There are two PDF documents available on the [Community Forums](/clickteam/forums) from Fernando that details each of permissions. Alternately, they are [available on the Android Developers website](https://developer.android.com/reference/android/Manifest.permission.html).

[https://community.clickteam.com/threads/84241-Android-Permissions?p=616495&viewfull=1#post616495](https://community.clickteam.com/threads/84241-Android-Permissions?p=616495&viewfull=1#post616495)

# Compiling from Android Source
By default, Fusion will delete the project (temporary) files after compiling. If you require the source code to modified before compiling, you can use a trick to prevent it from being deleted.

### Retrieval
1. Disconnect your Android device from the PC and perform a Build & Run. Fusion will become stuck after compiling.

2. Type into Windows Explorer:
```
%temp%
```
Which should open a path similar to:
```
C:\Users\<username>\AppData\Local\Temp
```
3. Sort the folder by date and you'll find the latest AndXXXX.tmp folder.

4. Wait for the RuntimeAndroid-X.apk files to appear in the bin directory. Fusion will have finished compiling.

5. Copy the entire folder elsewhere on the system.


### Compiling
1. Delete the contents of the bin directory.

2. Open a command prompt on the root of the folder.
(Tip: Hold Shift and right-click the folder)

3. To compile for release:
```
ant release
```
Or, compile for debugging:
```
ant debug
```

[Instructions were sourced from this post](https://community.clickteam.com/threads/93461-Get-Android-Project-instead-of-APK?p=670707&viewfull=1#post670707)