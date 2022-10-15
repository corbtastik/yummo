(function (window, document) {
    let collapsibles = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

})(window, document);