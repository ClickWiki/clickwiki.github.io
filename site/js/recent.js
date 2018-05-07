// Show the stats image in the header.
$(document).ready(function() {
    $("#dynamic-header").attr("src", "/site/img/header/stats.png").fadeIn(200);
});

// Use the GitHub API to fetch latest commits.
$.ajax({
  dataType: "json",
  url: "https://api.github.com/repos/ClickWiki/clickwiki.net/commits",
  success: getCommitSuccess,
  error: getCommitFailed
});

function getCommitSuccess(data) {
    var commits = "";
    $.each(data, function() {
        var url = this["url"];
        var user_name = this["author"]["login"];
        var user_avatar = this["author"]["avatar_url"];
        var user_url = this["author"]["html_url"];
        var commit_message = this["commit"]["message"];
        var commit_url = "https://github.com/ClickWiki/clickwiki.net/commit/" + this["sha"];
        var timestamp = this["commit"]["committer"]["date"];
        commits += "<tr>";
        commits += "<td><a href='" + user_url + "'><img src='" + user_avatar + "' alt=''/></a> <a href='" + user_url + "'>" + user_name + "</a></td>";
        commits += "<td><a href='" + commit_url + "'>" + commit_message + "</a></td>";
        commits += "<td>" + timestamp  + "</td>";
        commits += "</tr>";
    });

    $("#loading").hide();
    $("#commits-table").html(commits).show();
}

function getCommitFailed() {
    $("#loading").hide();
    $("#loading-error").show();
}
