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
                let yummoInfo = JSON.parse(this.responseText);
                console.log(JSON.stringify(yummoInfo));
                let div = document.getElementById("yummo-info");
                
            } else {
                console.log("Oh no that's a YummoRequest error!");
            }
        }
    }

    /**
     * Handle button click event
     */
    function onClick() {
        new YummoRequest("http://localhost:4002/yummo.json")
            .get();
    }

    /*
     * Run on module load
     */
    document.getElementById("yummo-button").addEventListener("click", onClick);

})(window, document);