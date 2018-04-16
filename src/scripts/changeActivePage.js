/*script for change Active Item Menu*/
$(function () {
    if (document.location.href === "http://localhost:3000/" || document.location.href ==="http://localhost:3000/index.html") {
        $("#home").addClass("isActiveItem");
    }
});