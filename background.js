var wishList = [];

//chrome.storage.local.clear();

chrome.storage.local.get('myList', function(myList) {
    myList = myList['myList'];
    for (var i = 0; i < myList.length; i++) {
        wishList.push(myList[i]);
    }
    console.log(wishList)

});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        wishList.push(request);
        chrome.storage.local.set({'myList': wishList});
        sendResponse(wishList);
    });