function storageInstance() {
    let storage;
    try {
        storage = window['localStorage'];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return storage;
    } catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
}

function testStorage() {
    let storage = storageInstance();
    if(storage.getItem("message") !== null) {
        console.log("Message already saved to localStorage: " + storage.getItem("message"));
    } else {
        storage.setItem("message", "Howdy from custom.js at " + new Date().toUTCString());
        console.log(storage.getItem("message"));
    }
}

testStorage();



