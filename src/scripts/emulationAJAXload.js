/*Script for Emulation get request by AJAX and add new blocks in Page*/
/*HERE NEED CHANGE URL FOR CORRECT*/

var data = [
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "design",
        src: "https://picsum.photos/405/311",
        title: "Cool App Design",
        desc: "development, mobile"
    },
    {
        type: "illusrt",
        src: "https://picsum.photos/405/311",
        title: "Cool App Ill",
        desc: "development, illusrt"
    },
    {
        type: "illusrt",
        src: "https://picsum.photos/405/311",
        title: "Cool App Ill",
        desc: "development, illusrt"
    },
    {
        type: "illusrt",
        src: "https://picsum.photos/405/311",
        title: "Cool App Ill",
        desc: "development, illusrt"
    },
    {
        type: "illusrt",
        src: "https://picsum.photos/405/311",
        title: "Cool App Ill",
        desc: "development, illusrt"
    },
    {
        type: "illusrt",
        src: "https://picsum.photos/405/311",
        title: "Cool App Ill",
        desc: "development, illusrt"
    },
    {
        type: "photo",
        src: "https://picsum.photos/405/311",
        title: "Photo App Prof",
        desc: "development, photo"
    },
    {
        type: "photo",
        src: "https://picsum.photos/405/311",
        title: "Photo App Prof",
        desc: "development, photo"
    },
    {
        type: "brochures",
        src: "https://picsum.photos/405/311",
        title: "Brochures Prof",
        desc: "brochures"
    },
    {
        type: "brochures",
        src: "https://picsum.photos/405/311",
        title: "Brochures Prof",
        desc: "brochures"
    },
    {
        type: "brochures",
        src: "https://picsum.photos/405/311",
        title: "Brochures Prof",
        desc: "brochures"
    },
    {
        type: "wall",
        src: "https://picsum.photos/405/311",
        title: "Wall app Prof",
        desc: "wall brochures"
    },
    {
        type: "wall",
        src: "https://picsum.photos/405/311",
        title: "Wall app Prof",
        desc: "wall brochures"
    },
    {
        type: "wall",
        src: "https://picsum.photos/405/311",
        title: "Wall app Prof",
        desc: "wall brochures"
    }
];

loadLocalStorage();

function loadLocalStorage() {
    if (document.location.href === "http://localhost:3000/" || document.location.href ==="http://localhost:3000/index.html") {
        localStorage.setItem("jsonData", JSON.stringify(data));
        var dataLoad = JSON.parse(localStorage.getItem("jsonData")),
            currentEl = null;

        for (var i = 0; i<dataLoad.length; i++) {
            currentEl = dataLoad[i];
            var $newEl = $(".hiddenElem").clone();

            $(".home-row-col-link-title", $newEl).text(currentEl.title);
            $(".home-row-col-link-desc", $newEl).text(currentEl.desc);
            $(".home-row-col-pic", $newEl).attr("src", currentEl.src);
            $newEl.addClass(currentEl.type);
            $newEl.addClass("home-row-col grid-item");
            $newEl.removeClass("hiddenElem");
            $(".grid").prepend($newEl);
        }
    }
};