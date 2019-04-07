

function promptBox() {
    chrome.storage.local.get('myList', function(myList) {
        myList = myList['myList'];
        console.log(myList);
        if (myList) {
            for (var i = 0; i < myList.length; i++) {
                $('#items').append(
                    '<div class="entry"><a href=' + myList[i].url + '><img id="itemPic" src=' + myList[i].img + '></a>' +
                    '<div><div class="text">' + myList[i].name + '</div>' +
                    '<div>' + myList[i].price + '</div></div></div>');

            }
        }
        //console.log(wishList)

    });

}

document.addEventListener('DOMContentLoaded', function() {
    promptBox();
    var btn = document.getElementById('deleteAll');
    btn.addEventListener('click', function() {
        chrome.storage.local.clear();
    })
    $('body').on('click', 'a', function(){
        chrome.tabs.create({url: $(this).attr('href')});
        return false;
    });
});




