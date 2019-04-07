chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.storage.local.set({'myList': request}, function() {
            console.log('Settings saved');
        });
        sendResponse(request.name);
    });