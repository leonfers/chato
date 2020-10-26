function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

chrome.runtime.onInstalled.addListener(function() {
    const chat_id = uuidv4();
    chrome.storage.sync.set({"id": chat_id }, function(){
        console.log("chat id: "+ chat_id)
    })
});