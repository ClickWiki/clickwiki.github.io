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
        $(this).attr("title", month + " " + year);
   });
});
