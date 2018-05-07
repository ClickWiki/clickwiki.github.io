// Show a random image in the header
var no = Math.floor(Math.random() * 5);
$("#dynamic-header").attr("src", "/site/img/header/img" + no + ".png").fadeIn(200);
