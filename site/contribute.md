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
  caption = "Something to describe this image"
%}
```
{% endraw %}

#### `gallery`
Creates a clickable thumbnail that enlarges upon clicking it. Multiple gallery
tags can be placed next to each other.
{% raw %}
```
{% include gallery
  image = "/path/to/image/on/clickwiki.png"
  caption = "Something to describe this image"
%}
```
{% endraw %}

#### `alert`
This is for drawing attention to elements of a page.
{% raw %}
```
{% include alert
  type = "warning / clock / info / question / warning"
  title = "This page is incomplete!"
  message = "Please help us finish this page."
%}
```
{% endraw %}

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
