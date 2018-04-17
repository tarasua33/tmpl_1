/*script for change Active Item Menu*/
$(function () {
    if (document.location.href === "http://localhost:3000/" || document.location.href ==="http://localhost:3000/index.html") {
        $("#home").addClass("isActiveItem");
    }
    if (document.location.href ==="http://localhost:3000/work.html") {
        $("#work").addClass("isActiveItem");
    }
});