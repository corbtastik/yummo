// let searchIndex = lunr(function () {
//     this.ref("id");
//     this.field("title", { boost: 10 });
//     this.field("description");
//     this.field("date");
//     this.field("author");
//     this.field("category", { boost: 10 });
//     this.field("tags", { boost: 10 });
//     this.field("content");
//     for (let key in window.posts) {
//         const cleanedContent = posts[key].content
//             .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\"\[\]↑<>|]/g, " ")
//             .replace(/\s{2,}/g, " ").trim();
//         this.add({
//             "id": key,
//             "title": posts[key].title,
//             "description": posts[key].description,
//             "date": posts[key].date,
//             "author": posts[key].author,
//             "category": posts[key].category,
//             "tags": posts[key].tags,
//             "content": cleanedContent
//         });
//     }
// });

// function getQueryVariable(variable) {
//     let query = window.location.search.substring(1);
//     let vars = query.split("&");
//     for (let i = 0; i < vars.length; i++) {
//         let pair = vars[i].split("=");
//         if (pair[0] === variable) {
//             return decodeURIComponent(pair[1]
//               .replace(/\+/g, "%20"));
//         }
//     }
// }

// let searchTerm = getQueryVariable("q");
// let results = searchIndex.search(searchTerm);
// let resultPosts = results.map(function (match) {
//     return posts[match.ref];
// });
// // resultPages from previous example
// let resultsString = "";
// resultPosts.forEach(function (r) {
//     resultsString += "<li>";
//     resultsString +=   "<a class='result' href='" + r.url + "?q=" + searchTerm + "'><h3>" + r.title + "</h3></a>";
//     resultsString +=   "<div class='snippet'>" + r.content.substring(0, 200) + "</div>";
//     resultsString += "</li>"
// });
// document.querySelector("#search-results").innerHTML = resultsString;

// const documents = [
//     { id: "1", title: "Document 1", body: "This is the first document." },
//     { id: "2", title: "Document 2", body: "This is the second document about something else." },
//     { id: "3", title: "Document 3", body: "And here's a third document with different content." }
// ];

// const idx = lunr(function () {
//     this.ref('id')
//     this.field('title')
//     this.field('body')

//     documents.forEach(function (doc) {
//         this.add(doc)
//     }, this)
// });

const idx = lunr(function () {
    this.ref("id");
    this.field("title", { boost: 10 });
    this.field("description");
    this.field("date");
    this.field("author");
    this.field("category", { boost: 10 });
    this.field("tags", { boost: 10 });
    this.field("content");
    for (let key in window.posts) {
        if(posts[key].content) {
            const cleanedContent = posts[key].content
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\"\[\]↑<>|]/g, " ")
                .replace(/\s{2,}/g, " ").trim();
            this.add({
                "id": key,
                "title": posts[key].title,
                "description": posts[key].description,
                "date": posts[key].date,
                "author": posts[key].author,
                "category": posts[key].category,
                "tags": posts[key].tags,
                "content": cleanedContent
            });
        } else {
            this.add({
                "id": key,
                "title": posts[key].title,
                "description": posts[key].description,
                "date": posts[key].date,
                "author": posts[key].author,
                "category": posts[key].category,
                "tags": posts[key].tags
            });            
        }
    }
});

const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('search-results');

searchInput.addEventListener('input', function () {
    const query = this.value;
    console.log(query)
    const results = idx.search(query);
    console.log(results);
    // resultsList.innerHTML = ''; // Clear previous results
    const elements = document.getElementsByClassName('home-list');
    console.log(elements);
    // results.forEach(function (result) {
    //     const doc = documents.find(d => d.id === result.ref);
    //     if (doc) {
    //         const li = document.createElement('li');
    //         li.textContent = doc.title;
    //         resultsList.appendChild(li);
    //     }
    // });
});
