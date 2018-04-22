$(document).ready(function () {
    var defaultImage = $("header").css("background-image");
    $("nav.navpage li").hover(function () {
        var $headerimg = $("header");
        $headerimg.css("background-image", "url(header/" + this.id + ".jpg)");
    }, function () {
        var $headerimg = $("header");
        $headerimg.css("background-image", defaultImage).animate({opacity: 1});
    });
});

$(document).ready(function () {
    var defaultImage = $("header").css("background-image");
    $("nav.navpage li").hover(function () {
        var $headerimg = $("header");
        $headerimg.css("background-image", "url(header/" + this.id + ".jpg)");
    }, function () {
        var $headerimg = $("header");
        $headerimg.css("background-image", defaultImage).animate({opacity: 1});
    });
});
