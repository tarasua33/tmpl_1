/*JS for hidden FILTER(home-page) on other pages*/
$(function () {
    if (document.location.href !== "http://localhost:3000/" & document.location.href !=="http://localhost:3000/index.html") {
        $(".navBar-filter").css("display","none");
    }
});