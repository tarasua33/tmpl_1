var currentItemVisible = 15;

openOlderArticles();

function openOlderArticles() {
    var $listArticles = $(".blog-container-col-block");
    for (var i =0; i<$listArticles.length; i++) {
        if (+$listArticles[i].getAttribute("data-number") < currentItemVisible) {
            $listArticles[i].classList.remove("olderArticle");
        }
    }
}

$(".blog-olderButt").on("click", function () {
    currentItemVisible = currentItemVisible + 5;
    openOlderArticles();
});