var wishList = [];

//chrome.storage.local.clear();

chrome.storage.local.get('myList', function(myList) {
    myList = myList['myList'];
    if (myList) {
        for (var i = 0; i < myList.length; i++) {
            wishList.push(myList[i]);
        }
    }
    //console.log(wishList)

});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request + ' -> ' + typeof(request));
        if (typeof(request) === 'number') {
            var min = 123456789;
            var currWinner = -1;
            for (var i = 0; i < wishList.length; i++) {
                console.log(wishList[i].price + typeof(wishList[i].price));
                var placeholderPrice = Number(wishList[i].price.replace(/[^0-9.-]+/g,""));

                if(Math.abs(placeholderPrice - request) < min)
                {
                    currWinner = i;
                    min = Math.abs(placeholderPrice - request);
                }
            }
            sendResponse(wishList[currWinner]);
        } else {
            wishList.push(request);
            chrome.storage.local.set({'myList': wishList});
            sendResponse(wishList);
        }
    });


function ClearList() {
    console.log('clearing');
    console.log(myList);
    chrome.storage.local.clear();
}
