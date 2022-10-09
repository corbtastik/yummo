/**
 * Custom JavaScript sample that makes an AJAX request.
 **/
(function (window, document) {
    // execute javascript in strict mode
    'use strict';

    function YummoAjaxRequest(resourceURL) {
        this.resourceURL = resourceURL;
        this.httpRequest = new XMLHttpRequest();
    }

    YummoAjaxRequest.prototype.get = function() {
        if(!this.httpRequest) {
            console.log("Giving up, cannot create XMLHttpRequest instance.");
            return false;
        }
        this.httpRequest.onreadystatechange = this.handleRequest;
        this.httpRequest.open("GET", this.resourceURL);
        this.httpRequest.send();
    }

    YummoAjaxRequest.prototype.handleRequest = function() {
        if(this.readyState === XMLHttpRequest.DONE) {
            if(this.status === 200) {
                createView(JSON.parse(this.responseText), "yummo-info-ajax", "yummo-button-ajax");
            } else {
                console.log("Oh no that's a YummoRequest error!");
            }
        }
    }

    /**
     * Handle ajax button click
     */
    function onAjaxClick() {
        new YummoAjaxRequest("/yummo.json").get();
    }

    function YummoFetchRequest(resourceURL) {
        this.resourceURL = resourceURL;
    }

    YummoFetchRequest.prototype.get = function() {
        fetch(this.resourceURL)
            .then((response) => response.json())
            .then((data) => {
                createView(data, "yummo-info-fetch", "yummo-button-fetch");
            });
    }

    /**
     * Handle fetch button click
     */
    function onFetchClick() {
        new YummoFetchRequest("/yummo.json").get();
    }

    /**
     *
     * @param yummoInfo: Yummo info JSON object
     * @param targetId: Element id to create for result (yummo-info-ajax or yummo-info-fetch)
     * @param buttonId: Button id that triggered request (yummo-button-ajax or yummo-button-fetch)
     */
    function createView(yummoInfo, targetId, buttonId) {
        // Remove yummo-info element if it exists and create a new one below
        if(document.getElementById(targetId)) {
            document.getElementById(targetId).remove();
        }

        // Create an unordered list to render yummo-info into
        const element = document.createElement("ul");
        element.setAttribute("id", targetId);
        // Get the parent element
        const parent = document.getElementById(buttonId).parentElement;
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
        document.getElementById(targetId).appendChild(listItem);

        // Append each list item as a child of the unordered list
        listItem = document.createElement("li");
        listItem.appendChild(titleNode);
        document.getElementById(targetId).appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(tagNode);
        document.getElementById(targetId).appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(descriptionNode);
        document.getElementById(targetId).appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(versionNode);
        document.getElementById(targetId).appendChild(listItem);

        listItem = document.createElement("li");
        listItem.appendChild(buildDateNode);
        document.getElementById(targetId).appendChild(listItem);
    }

    /*
     * Run on module load
     */
    document.getElementById("yummo-button-ajax").addEventListener("click", onAjaxClick);
    document.getElementById("yummo-button-fetch").addEventListener("click", onFetchClick);

})(window, document);