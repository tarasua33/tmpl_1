/*Script for RUN Filter items on HOME PAGE*/

$(function () {
    if (document.location.href === "http://localhost:3000/" || document.location.href ==="http://localhost:3000/index.html") {
        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        $(function () {
            $("#allWorks").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#allWorks").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '*' });
            });
            $("#design").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#design").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '.design' });
            });
            $("#illusrt").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#illusrt").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '.illusrt' });
            });
            $("#photo").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#photo").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '.photo' });
            });
            $("#wall").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#wall").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '.wall' });
            });
            $("#brochures").on("click", function () {
                $(".isActiveFilter").toggleClass("isActiveFilter");
                $("#brochures").toggleClass("isActiveFilter");
                $('.grid').isotope({ filter: '.brochures' });
            });
        });
    }
});