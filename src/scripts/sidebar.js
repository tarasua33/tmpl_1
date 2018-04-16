$(function () {
    /*script for target sidebar*/
    $(".sidebarTarget").on("click", function () {
        $(".sidebar").slideToggle(500, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        })
    });

    /*script for target contact info*/
    $(".contactInfo-target").on("click", function () {
        $(".contactInfo-contact").slideToggle(300);
    })
});