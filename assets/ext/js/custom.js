/**
 * Custom JavaScript sample that makes an AJAX request.
 **/
(function (window, document) {
    // execute javascript in strict mode
    'use strict';

    function YummoRequest(resourceURL) {
        this.resourceURL = resourceURL;
        this.httpRequest = new XMLHttpRequest();
    }

    YummoRequest.prototype.get = function() {
        if(!this.httpRequest) {
            console.log("Giving up, cannot create XMLHttpRequest instance.");
            return false;
        }
        this.httpRequest.onreadystatechange = this.handleRequest;
        this.httpRequest.open("GET", this.resourceURL);
        this.httpRequest.send();
    }

    YummoRequest.prototype.handleRequest = function() {
        if(this.readyState === XMLHttpRequest.DONE) {
            if(this.status === 200) {
                createView(JSON.parse(this.responseText));
            } else {
                console.log("Oh no that's a YummoRequest error!");
            }
        }
    }

    function createView(yummoInfo) {
        // Remove yummo-info element if it exists and create a new one below
        if(document.getElementById("yummo-info")) {
            document.getElementById("yummo-info").remove();
        }

        // Create an unordered list to render yummo-info into
        const element = document.createElement("ul");
        element.setAttribute("id", "yummo-info");
        // Get the parent element
        const parent = document.getElementById("yummo-button").parentElement;
        // Append dynamic data to parent element
        parent.append(element);

        // Create textNodes for each yummo-info property
        const retrievedAtNode = document.createTextNode("Retrieved at: " + new Date().toLocaleString());
        const titleNode = document.createTextNode("Title: " + yummoInfo.title);
        const tagNode = document.createTextNode("Tag: " + yummoInfo.tag_text);
        const descriptionNode = document.createTextNode("Description: " + yummoInfo.description);
        const versionNode = document.createTextNode("Version: " + yummoInfo.version);
        const buildDateNode = document.createTextNode("Build Date: " + yummoInfo.build_date);

        // Add retrieve time first
        let listItem = document.createElement("li");
        listItem.appendChild(retrievedAtNode);
        document.getElementById("yummo-info").appendChild(listItem);

        // Append each list item as a child of the unordered list
        listItem = document.createElement("li");
        listItem.appendChild(titleNode);
        document.getElementById("yummo-info").appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(tagNode);
        document.getElementById("yummo-info").appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(descriptionNode);
        document.getElementById("yummo-info").appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(versionNode);
        document.getElementById("yummo-info").appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(buildDateNode);
        document.getElementById("yummo-info").appendChild(listItem);
    }

    /**
     * Handle button click event
     */
    function onClick() {
        new YummoRequest("/yummo.json")
            .get();
    }

    /*
     * Run on module load
     */
    document.getElementById("yummo-button").addEventListener("click", onClick);

})(window, document);