//
// ClickWiki Website Source File
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// (C) Copyright 2018 Luke Horwell <code@horwell.me>
//

// ClickWiki Settings
var fadeSpeed = 200;

// Show a random image in the header
var no = Math.floor(Math.random() * 5);
$("#dynamic-header").attr("src", "/site/img/header/img" + no + ".png").fadeIn(fadeSpeed);

// For pages that contain relative dates in format MM/YYYY.
$(document).ready(function() {
   $(".relative-date").each(function() {
        var date = $(this).html();
        var sugarDate = Sugar.Date(date);

        var relative = sugarDate.relative().raw;
        $(this).fadeIn(fadeSpeed).html(relative);

        var month = Sugar.Date.format(sugarDate, "%B");
        var year = date.split("/")[1];
        if (year == undefined || year == null) {
            // Just year present
            $(this).attr("title", date);
        } else {
            // Month and year present
            $(this).attr("title", month + " " + year);
        }
   });
});

// Search page only
function searchForums() {
    var keywords = $("#google-input").val();
    window.location.href = "https://www.google.com/search?q=site%3Acommunity.clickteam.com+" + keywords.replace(" ", "+") + "&ie=UTF-8";
}

if (window.location.pathname === "/search/") {
    $(document).ready(function() {
        $("#google-input").on("keyup", function (e) {
            if (e.keyCode == 13) {
                searchForums();
            }
        });
        $("#google-input").on("input", function() {
            $("#google-search").fadeIn(fadeSpeed);
        });
    });
}

// Colour tables if they are just a "Yes" or "No"
$("td").each(function() {
   var value = $(this).html();
   if (value == "Yes" || value.startsWith("Yes -")) {
       $(this).addClass("yes");
   } else if (value == "Partial" || value.startsWith("Partial - ")) {
       $(this).addClass("partial");
   } else if (value == "No" || value.startsWith("No - ")) {
       $(this).addClass("no");
   }
});

// Colour links red if they direct to 404.
var checked = [];
$("a").each(function() {
    if (this.hostname != "clickwiki.github.io" && this.hostname != "localhost") {
        return;
    }

    // Ensure there is a '/' at the end to avoid duplicates
    var path = this.pathname;
    if (path.endsWith("/") === false) {
        path += "/";
    }

    // Do not check site pages
    switch (path) {
        case "/":
        case "/search/":
        case "/about/":
        case "/license":
            return;
    }

    // Spare HTTP requests and only check the URL once
    if (checked.includes(path)) {
        return;
    }
    checked[checked.length] = path;

    // Check the link and make adjustments if it doesn't exist
    var anchor = this;
    var response = jQuery.ajax({
        url: path,
        type: "HEAD",
        complete: function(xhr, response) {
            if (response === "error") {
                anchor.classList.add("nonexistent");
                anchor.title = "This page does not exist yet.";
            }
        }
    });
});

// Show warning when navigating from redirect link
if (window.location.href.endsWith("?redirect=true")) {
    $("header").prepend('<div class="site-warning"><span class="fa fa-info-circle"></span> <strong>URL Changed:</strong> <a href="/about/#why-was-the-wiki-migrated-from-mediawiki">clickwiki.net is now clickwiki.github.io</a>. Please update your bookmarks or ask the webmaster of the site you were navigated from.</div>');
}
