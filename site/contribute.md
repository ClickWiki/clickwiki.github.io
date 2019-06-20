---
layout: page
title: Contributing
permalink: /contribute/
---

Thanks for wanting to help us build the ClickWiki!

{% include TOC %}

---

## Quickstart

1. Sign up or sign in to GitHub.
2. Fork this repository.
3. [Create](https://github.com/ClickWiki/clickwiki.net/new/master/wiki) or edit a page. Refer below for details.
4. Create a pull request.

## Formatting

Our pages use [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
as well as some custom defined "templates" that can be used across the site.

At the top of every page, there **must** be some YAML metadata, which looks like this:
```
---
layout: product
title: Clickteam Fusion 2.5
permalink: /fusion/2.5/
---
```

There are 3 layouts:

* `page` shows a basic page. Use [Clicker](https://github.com/ClickWiki/clickwiki.net/edit/master/wiki/clicker.md) as an example.
* `product` shows a box on the right. [Use Fusion 2.5](https://github.com/ClickWiki/clickwiki.net/edit/master/wiki/fusion-2.5.md) as an example.
* `menu` shows a selection screen. Use [Exporters](https://github.com/ClickWiki/clickwiki.net/edit/master/wiki/exporters.md) as an example.

Some layouts use additional YAML data, please see [Page Layouts](#page-layouts) below.

## Permalinks and Organsiation
**Permalink** is the URL, take note of the existing links of where they are
pointing to the non-existent page.

All wiki pages go inside the `/wiki/` directory with the `md` extension.
For media assets, see below.

Some URLs are nested, for instance `/fusion/` has subpages for its versions,
such as `/fusion/1.5`, `/fusion/2.0`, etc.

### Media Assets
These are stored in `/wiki/assets/` and then organised into the relevant subfolder.
Essentially, subfolders determine the type of content and its license. See the
[README](https://github.com/ClickWiki/clickwiki.net/blob/master/README.md) for details.

## Page Layouts
Here are examples and all the possible combinations

#### `page`
Does not require additional data.

#### `product`
Below shows all the possible combinations. Copy and paste then tweak to what's
applicable for the product you're editing.

```
image: "/wiki/assets/xxxx/zzzz.png"
image_caption: "Something to describe this image"
developer: "[Clickteam](/clickteam/)"
status: "Active / Discontinued"
initial_release_build: "Build Number / Date goes here"
initial_release_date: "MM/YYYY"
last_stable_build: "Build Number / Date goes here"
last_stable_date: "MM/YYYY"
last_beta_build: "Build Number / Date goes here"
last_beta_date: "MM/YYYY"
predecessor: "[Multimedia Fusion 2](/fusion/2.0/)"
successor: "[Clickteam Fusion 2.5](/fusion/2.5/)"
platforms:
  - windows
  - windows9x
  - mac
  - linux
  - steam
  - android
  - flash
  - html5
  - ios
  - java
  - xna
  - winphone
languages:
  - en
  - fr
  - jp
shop_link: "https://www.clickteam.com/web-shop"
support_link: "http://community.clickteam.com/forums/xxx"
links:
  - "[Link 1](http://example1.com)"
  - "[Link 2](http://example2.com)"
```

#### `menu`
```
menu:
  - title: "Name of category"
    description: "Optional, text appears under title"
    items:
      - name: "Name of item 1"
        icon: "/wiki/assets/xxx/zzz.png"
        url: "/url/on/clickwiki"
        hint: "Optional text appears under item"

      - name: "Name of item 2"
        icon: "/wiki/assets/xxx/zzz.png"
        url: "/url/on/clickwiki"
```

Repeat the items as many times as needed.

### `extlist`
```
extensions:
    - name: "3D Actives"
      description: ""
      icon: "/wiki/assets/Extensions/3D/3d-3dactives.png"
      download: "fusion"
      dev_only: true
      hwa: true / false
      official: true
      legacy: true
      supported:
        - win
        - mac
        - flash
        - ios
        - android
        - html5
        - xna
        - uwp
```

These are optional:

* **download**: URL to download or `fusion` if obtained via [Extension Manager](/extensions/manager/)
* **info**: URL to get more information about the extension.
* **dev_only**: Can only be used in MMF2 Developer or CF2.5 Developer.
* **hwa**: `true` if this extension is optimised. `false` if unsupported.
* **official**`: `true` if this extension is produced by [Clickteam](/clickteam/).
* **legacy**: `true` if this extension is designed for MMF1.5 and is provided for compatibility only.
* **supported**: List the platforms this extension works on:
  * `win, mac, flash, ios, android, html5, xna, uwp`


## Includes
These are like templates that you can _include_ on any page.

#### `TOC` - Table of Contents
Populates with headings for the page. Usually placed near the top after the
first or second paragraph.

{% raw %}
```
{% include TOC %}
```
{% endraw %}


#### `thumbnail`
Places a text box to the right side of the page.
{% raw %}
```
{% include thumbnail
  image = "/path/to/image/on/clickwiki.png"
  text = "Something to describe this image"
%}
```
{% endraw %}

<blockquote style="overflow:auto">
{% include thumbnail image = "/wiki/assets/Clickteam/Filetypes/GAM.png" text = "File icon when TGF1 is installed" %}
</blockquote>

#### `gallery`
Creates a clickable thumbnail that enlarges upon clicking it. Multiple gallery
tags can be placed next to each other.
{% raw %}
```
{% include gallery
  image = "/path/to/image/on/clickwiki.png"
  text = "Something to describe this image"
%}
```
{% endraw %}

<blockquote>
{% include gallery image = "/wiki/assets/Clickteam/Icon InstallCreator.png" text = "Install Creator 2 Icon" %}
</blockquote>

#### `alert`
This is for drawing attention to elements of a page.
{% raw %}
```
{% include alert
  type = "warning / clock / info / question"
  title = "This page is incomplete!"
  message = "Please help us finish this page."
%}
```
{% endraw %}

<blockquote>
{% include alert type = "warning" title = "This page is incomplete!" message = "Please help us finish this page." %}
</blockquote>

#### `fa` - Inline FontAwesome icon
Use any of the [FontAwesome 5 icons](https://fontawesome.com/icons) and embed them inline.

{% raw %}
```
This is a {% include fa icon = "laptop" %} laptop.
```
{% endraw %}

> This is a {% include fa icon = "laptop" %} laptop.

#### `magazine-listing` - Magazine issue listing

To populate the table, adapt the following in the page's metadata:

```
magazines:
  - issue: 1
    date: "October 2014"
    cover: "/wiki/assets/Clickteam/Fused/Fused_Cover_Issue_1.jpg"
    pdf: "http://download.clickteam.com/newsletters/October2014.pdf"
    announcement: "http://community.clickteam.com/threads/89228-Fused-October-E-Magazine-Clickteam"
    topics:
      - "Item 1"
      - "[Item 2 as link](/example/)"
      - "Item 3"
```

For the table to appear on the page, add the following:

```
{% raw %}{% include magazine-listing %}{% endraw %}
```

## Folder Restructure
Inside the repository:

* `_includes/` - ClickWiki Internals ("Templates")
* `_layouts/` - ClickWiki Internals (Layout)
* `redirects/` - Contains redirects from our previous site structure.
* `_sass/` - ClickWiki Internals (Styling)
* `site/` - ClickWiki project specific pages and assets.
* `_site/` - Auto generated on local machines.
* `wiki/` - Actual wiki content.

In most instances, contributors will be making changes and creating files
inside the `wiki/` folder. However, if you're a developer looking to change
the website in general, you'll be familiar with the files in the other folders.

## Further Reading
If you're completely new to GitHub, Jekyll (for local editing) and/or Markdown,
check out the following links:

* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Learn Git basics](https://try.github.io/)
* [How to install Jekyll](https://jekyllrb.com/docs/installation/)
