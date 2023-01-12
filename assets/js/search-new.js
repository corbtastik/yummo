// Mock variables
window.posts = []

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  /* do what you want with the form */

  // You must return false to prevent the default form behavior
  return false;
}

let form = document.getElementById('search-form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

const Site = (function(window, config = {}, lunr, utils) {

  const posts = window.posts

  const searchIndex = lunr(function () {
    // Index these fields in each "document"
    this.ref("id")
    this.field("title", { boost: 10 })
    this.field("description", {})
    this.field("date", {})
    this.field("author", {})
    this.field("category", { boost: 10 })
    this.field("tags", { boost: 10 })
    this.field("content", {})
    // Iterate over each post and add as a "document" into index
    for (let key in posts) {
      // Clean up content by removing cruft
      const cleanedContent = posts[key].content
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\\"\[\]↑<>|]/g, " ")
        .replace(/\s{2,}/g, " ").trim()
      // Add these "documents" to the index
      this.add({
        "id": key,
        "title": posts[key].title,
        "description": posts[key].description,
        "date": posts[key].date,
        "author": posts[key].author,
        "category": posts[key].category,
        "tags": posts[key].tags,
        "content": cleanedContent
      })
    }
  })

  const searchTerm = function(paramName) {
    let query = window.location.search.substring(1)
    let vars = query.split("&")
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=")
      if (pair[0] === paramName) {
        return decodeURIComponent(pair[1]
          .replace(/\+/g, "%20"))
      }
    }
  }

  const searchResults = function() {
    let results = searchIndex.search(searchTerm("q"))
    let resultPosts = results.map(function (match) {
      return posts[match.ref]
    });
    utils.log("Search found " + resultPosts.length + " matching posts.")
    return resultPosts
  }

  const renderResults = function(resultPosts) {
    // resultPages from previous example
    let resultsString = ""
    resultPosts.forEach(function (r) {
      resultsString += "<li>"
      resultsString +=   "<a class='result' href='" + r.url + "?q=" + searchTerm + "'><h3>" + r.title + "</h3></a>"
      resultsString +=   "<div class='snippet'>" + r.content.substring(0, 200) + "</div>"
      resultsString += "</li>"
    })
    document.querySelector("#search-results").innerHTML = resultsString
  }

  return {

  }

})(window, { resultsLimit: 100 }, lunr, Utils);