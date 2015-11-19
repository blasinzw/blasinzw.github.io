(function () {
    'use-strict';

    $('a[href*=#]:not([href=#],[href^=#accord],[href^=#collapse])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Hides navbar on page load
    $(document).ready(function () {
        var animated = false;
        $(".navbar").hide();

        $("#programmer").hide();
        $("#engineer").hide();
        $("#leader").hide();

        //shows labels
        setTimeout(function () {
            $("#programmer").fadeIn("slow");
            setTimeout(function () {
                $("#engineer").fadeIn("slow");
                setTimeout(function () {
                    $("#leader").fadeIn("slow");
                }, 1500);
            }, 1500);
        }, 500);
      });

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").fadeIn("slow");
        } else {
            $(".navbar-fixed-top").fadeOut("slow");
        }
    });
}).call(this);
