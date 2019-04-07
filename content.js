var url = window.location.href;

var currentProduct = {
    'name': $('#productTitle').text().trim(),
    'price': $('#priceblock_ourprice').text().trim(),
    'img' : $('#landingImage').attr('src'),
    'url' : url
};

var nearestPrice = {'name': 'why',
    'price': 'whyyy',
    'img': 'no',
    'url': 'nooo'};

$(document).ready(function(){
    var wishBtn = $('<input type="button" value="Add to Savey"/>');
    wishBtn.css({
        'background-image': 'linear-gradient(45deg, #c670ca 0%, #25a5c8 52%, #20e275 90%)',
        'border-radius': '20px',
        'box-sizing': 'border-box',
        'display': 'block',
        'width' : '100%',
        'height' : '40px',
        'font-weight': 'bold',
        });
    wishBtn.attr('id', 'wishBtn');
    $("#selectQuantity").append(wishBtn);
    $("#wishBtn").click(sendData);
    comparePrice();
});


function sendData() {
    console.log(currentProduct);

    chrome.runtime.sendMessage(currentProduct, function(response) {
        console.log(response + ' Back! from background.js!');
    });
}

function comparePrice() {
    var currentPrice = currentProduct.price;
    currentPrice = Number(currentPrice.replace(/[^0-9.-]+/g,""));

    //console.log(currentPrice);

    chrome.runtime.sendMessage(currentPrice, function(response) {
        nearestPrice = {'name': response.name,
        'price': response.price,
        'img': response.img,
        'url': response.url};

        console.log(nearestPrice.url);

        var reminder = $('<div id="reminderBox" style="background-image: linear-gradient(45deg, #c670ca 0%, #25a5c8 52%, #20e275 90%); text-align: center; border-radius: 20px"> <strong>Wait!</strong><br/> Before you buy this, remember you have this item in your Savey list, which costs... <br/><strong>' +
            nearestPrice.price + '</strong><a href=' + nearestPrice.url + '><img style="border-radius: 20px; max-width: 90%;" src=' + nearestPrice.img + '></a>' +
            '<div>' + nearestPrice.name + '</div></div>');

        $( "#priceInsideBuyBox_feature_div" ).append(reminder);
    });




}

