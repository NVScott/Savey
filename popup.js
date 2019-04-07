function promptBox() {
    chrome.storage.local.get('myList', function(myList) {
        myList = myList['myList'];
        console.log(myList);
        if (myList) {
            for (var i = 0; i < myList.length; i++) {
                $('#items').append(
                    '<li>' + myList[i].name + '</li>');
            }
        }
        //console.log(wishList)

    });

}

document.addEventListener('DOMContentLoaded', function() {
    promptBox();
});

