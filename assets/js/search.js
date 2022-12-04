let searchIndex = lunr(function () {
    this.ref("id");
    this.field("title", {boost: 10});
    this.field("content");
    for (var key in window.posts) {
        this.add({
            "id": key,
            "title": posts[key].title,
            "content": posts[key].content
        });
    }
});

function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
        }
    }
}

let searchTerm = getQueryVariable("q");
// creation of searchIndex from earlier example
let results = searchIndex.search(searchTerm);
let resultPosts = results.map(function (match) {
    return posts[match.ref];
});
// resultPages from previous example
let resultsString = "";
resultPosts.forEach(function (r) {
    resultsString += "<li>";
    resultsString +=   "<a class='result' href='" + r.url + "?q=" + searchTerm + "'><h3>" + r.title + "</h3></a>";
    resultsString +=   "<div class='snippet'>" + r.content.substring(0, 200) + "</div>";
    resultsString += "</li>"
});
document.querySelector("#search-results").innerHTML = resultsString;