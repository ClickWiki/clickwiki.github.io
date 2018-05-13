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


// Show the stats image in the header.
$(document).ready(function() {
    $("#dynamic-header").attr("src", "/site/img/header/stats.png").fadeIn(200);
});

// Use the GitHub API to fetch latest commits.
$.ajax({
    dataType: "json",
    url: "https://api.github.com/repos/ClickWiki/clickwiki.net/commits",
    data: {
      "since": Sugar.Date("3 months ago").raw
    },
    success: getCommitSuccess,
    error: getCommitFailed,
    statusCode: {
        403: function(xhr) {
            // Likely too many requests (60 per hour)
            console.log(xhr.responseText);
            getCommitForbidden();
        }
    }
});

function getCommitSuccess(data) {
    var commits = "";
    $.each(data, function() {
        var url = this["url"];
        var user_name = this["author"]["login"];
        var user_avatar = this["author"]["avatar_url"];
        var user_url = this["author"]["html_url"];
        var commit_message = this["commit"]["message"].split("\n")[0];
        var commit_url = "https://github.com/ClickWiki/clickwiki.net/commit/" + this["sha"];
        var timestamp = this["commit"]["committer"]["date"];
        var relative = Sugar.Date(timestamp).relative().raw;
        commits += "<tr>";
        commits += "<td class='avatar'><a href='" + user_url + "' target='_blank' rel='noopener'><img src='" + user_avatar + "' alt=''/></a> <a href='" + user_url + "'>" + user_name + "</a></td>";
        commits += "<td class='commit'><a href='" + commit_url + "' target='_blank' rel='noopener'>" + commit_message + "</a></td>";
        commits += "<td class='date'>" + relative  + "</td>";
        commits += "</tr>";
    });

    if (commits == "") {
        getCommitEmpty();
    }

    $("#loading").hide();
    $("#commits-table").html(commits).show();
}

function getCommitFailed() {
    $("#loading").hide();
    $("#loading-error").show();
}

function getCommitForbidden() {
    $("#loading-error").hide();
    $("#commits-forbidden").fadeIn(fadeSpeed);
}

function getCommitEmpty() {
    $("#loading").hide();
    $("#commits-empty").fadeIn(fadeSpeed);
}
