# ClickWiki

[![Contributors Count](https://img.shields.io/github/contributors/clickwiki/clickwiki.net.svg)](https://github.com/ClickWiki/clickwiki.net/graphs/contributors)
[![Issues Count](https://img.shields.io/github/issues/clickwiki/clickwiki.net.svg)](https://github.com/ClickWiki/clickwiki.net/issues)
[![Discord Chat](https://img.shields.io/discord/302307904717979649.svg?colorB=7289DA&logo=discord)(https://discord.gg/PydJ8UE)



A community Wiki-based website for [Clickteam](https://clickteam.com). This repository contains the
code and content delivering the wiki, powered by [Jekyll](https://jekyllrb.com/).

The wiki aims to:

* Deliver facts, history and some documentation to Clickteam's products.
* Collate notable examples and user creations.
* Archive the growing number of extensions and features.

All contributions come from the community of clickers. If you spot something missing, we'd greatly appreciate your input.


# Moved from MediaWiki
Previously, we've been using [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) to host the Wiki as a service. Our instance
has been getting a little rusty by being prone to cache issues. It also has the maintainance hurdle with the database,
software versions and protecting user information.

We've migrated to become a static site to reduce costs, boost speed, improve security (no more database) and flexibility.


# Contributing
[Fork this repository](https://help.github.com/articles/fork-a-repo/) and clone this to your computer, this will allow you
to make changes to the wiki and its contents. Once commited and pushed to your fork, you can create a pull request to this repository
where one of ClickWiki's team members can review and merge.

To preview the changes on your computer, you'll need to [install Jekyll](https://jekyllrb.com/docs/installation/) or push to your
fork to preview on GitHub Pages.

Our [Issue Tracker](https://github.com/ClickWiki/clickwiki.net/issues) keeps track of website problems (both cosmetic and functional)
as well as content issues.


# License
The data in this repository is under the following licenses:

* **[GPLv3](/LICENSE-GPLv3)** - Website Assets & Code
    * `_clickwiki/`
    * `_includes/`
    * `_layouts/`

* **[CC-BY-4.0](/LICENSE-CC-BY-4.0)** - Wiki Content
    * Applies to screenshots, text and graphics in the `wiki/assets/CC-BY-4.0/` folder.

* **No license** - Used under the basis of "fair use"
    * Some works are copyrighted (e.g. Clickteam's logo). There is no license associated and such assets must be placed in `wiki/assets/NonFree/`.
    * Usage of such media is similar to [Wikipedia's policy](https://en.wikipedia.org/wiki/Wikipedia:Uploading_images)
