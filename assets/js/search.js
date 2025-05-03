console.log(window.posts);
const idx = lunr(function () {
    this.ref("id");
    this.field("title", { boost: 10 });
    this.field("description", { boost: 9 });
    this.field("date");
    this.field("author");
    this.field("category");
    this.field("tags", { boost: 11 });

    window.posts.forEach(function (doc) {
        // console.log(doc);
        this.add(doc);
    }, this)
});
// const idx = lunr(function () {
//     this.ref("id");
//     this.field("title", { boost: 10 });
//     this.field("description");
//     this.field("date");
//     this.field("author");
//     this.field("category", { boost: 10 });
//     this.field("tags", { boost: 10 });
//     this.field("content");
//     for (let key in documents) {
//         if(posts[key].content) {
//             const cleanedContent = posts[key].content
//                 .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\"\[\]↑<>|]/g, " ")
//                 .replace(/\s{2,}/g, " ").trim();
//             this.add({
//                 "id": key,
//                 "title": posts[key].title,
//                 "description": posts[key].description,
//                 "date": posts[key].date,
//                 "author": posts[key].author,
//                 "category": posts[key].category,
//                 "tags": posts[key].tags,
//                 "content": cleanedContent
//             });
//         } else {
//             this.add({
//                 "id": key,
//                 "title": posts[key].title,
//                 "description": posts[key].description,
//                 "date": posts[key].date,
//                 "author": posts[key].author,
//                 "category": posts[key].category,
//                 "tags": posts[key].tags
//             });            
//         }
//     }
// });

const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('search-results');

searchInput.addEventListener('input', function () {
    const query = this.value;
    const results = idx.search("*" + query + "*");
    
    const mainList = document.createElement('main');
    mainList.id = 'main-list';
    mainList.style.clear = 'both';
    // Create .home-list container
    const homeList = document.createElement('div');
    homeList.className = 'home-list';
    // Create <section>
    const section = document.createElement('section');
    // Create inner <ul>
    const innerUl = document.createElement('ul');

    results.forEach(function (result) {
        const doc = window.posts.find(d => d.id === result.ref);
        if (doc) {
            // layout: post
            // title: "samples/markdown"
            // description: "Yummo markdown sampler"
            // date: 2022-09-01
            // author: Corbs
            // category: samples
            // feature_image: /assets/images/samples/markdown-logo.png
            // tags:
            //   - markdown
            //   - sample
            //   - yummo
            console.log("MATCH: " + doc.id + 
                "," + doc.date.substring(0,10) +
                "," + doc.title +
                "," + doc.description +
                "," + doc.author +
                "," + doc.category +
                "," + doc.feature_image +
                "," + doc.tags
            );
            innerUl.appendChild(
                createListItem(doc.url, doc.date.substring(0,10), doc.title, doc.description));
        }
    });
    
    // Nesting structure
    section.appendChild(innerUl);
    homeList.appendChild(section);
    mainList.appendChild(homeList);
    
    // Finally append to body or another container
    document.getElementById('yolo-container').replaceChild(mainList, document.getElementById("main-list"));
});

// Helper function to create each list item
function createListItem(href, date, title, description) {
    const li = document.createElement('li');
    li.className = 'yolo-menu-item';
    li.onclick = () => { location.href = href; };

    const columns = document.createElement('div');
    columns.className = 'columns';

    const column = document.createElement('div');
    column.className = 'column';

    const img = document.createElement('img');
    img.src = '/assets/images/me.png';

    const dateSpan = document.createElement('span');
    dateSpan.className = 'yolo-date';
    dateSpan.textContent = date;

    const titleSpan = document.createElement('span');
    titleSpan.className = 'yolo-title';
    const a = document.createElement('a');
    a.href = href;
    a.textContent = title;
    titleSpan.appendChild(a);

    const descSpan = document.createElement('span');
    descSpan.className = 'yolo-description';
    descSpan.textContent = description;

    const pillsDiv = document.createElement('div');
    pillsDiv.className = 'pills';
    const tagA = document.createElement('a');
    tagA.href = '/tags/#weekly-report';
    tagA.className = 'pill';
    tagA.textContent = '#weekly-report';
    pillsDiv.appendChild(tagA);

    const clearDiv = document.createElement('div');
    clearDiv.style.clear = 'both';

    // Append all children
    column.appendChild(img);
    column.appendChild(dateSpan);
    column.appendChild(titleSpan);
    column.appendChild(descSpan);
    column.appendChild(pillsDiv);
    column.appendChild(clearDiv);
    columns.appendChild(column);
    li.appendChild(columns);

    return li;
}