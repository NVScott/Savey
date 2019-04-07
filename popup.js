function promptBox() {
    chrome.storage.local.get('myList', function(myList) {
        myList = myList['myList'];
        console.log(myList);
        if (myList) {
            for (var i = 0; i < myList.length; i++) {
                $('#items').append(
                    '<div class="entry"><img id="itemPic" src=' + myList[i].img + '>' +
                    '<div><div class="text">' + myList[i].name + '</div>' +
                    '<div>' + myList[i].price + '</div></div></div>');

            }
        }
        //console.log(wishList)

    });

}

document.addEventListener('DOMContentLoaded', function() {
    promptBox();
});

function requestClear() {
    pass
}

