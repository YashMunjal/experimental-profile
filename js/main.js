$(document).ready(function () {
    $(".bars").click(function () {
        if ($("nav").hasClass("opened")) {
            $("nav").removeClass("opened");
            $("nav a:not(:last)").fadeOut();
        }
        else {
            $("nav").addClass("opened");
            $("nav a").fadeIn();
        }
        $(window).resize(function () {
            if ($(window).width() >= 568) {
                $("nav a:not(:last)").show();
            }
        });
    });
 
});