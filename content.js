// var elements = document.getElementsByTagName('*');
//
// var button = document.createElement("BUTTON");
// button.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(button);
//
// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//
//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];
//
//         if (node.nodeType === 3) {
//             var text = node.nodeValue;
// 	    var replacedText = text;
// 	    if (text.substring(0, 1) == "$") {
// 		var number = Number(text.replace(/[^0-9\.]+/g,""));
// 		number = (number/240).toFixed(3);
// 		if (number != 0) {
// 			replacedText = number + " Surgeries";
// 		}
// 	    }
//
//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }
var currentProduct = {
    'name': $('#productTitle').text().trim(),
    'price': $('#priceblock_ourprice').text().trim(),
    'img' : $('#landingImage').attr('src'),
};

var nearestPrice = {'name': 'why',
    'price': 'whyyy',
    'img': 'no'};



$(document).ready(function(){
    var wishBtn = $('<input type="button" value="Add to Savey"/> ');
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
    //console.log(currentProduct);

    chrome.runtime.sendMessage(currentProduct, function(response) {
        console.log(response);
    });


}


function comparePrice() {
    var currentPrice = currentProduct.price;
    currentPrice = Number(currentPrice.replace(/[^0-9.-]+/g,""));

    console.log(currentPrice);

    chrome.runtime.sendMessage(currentPrice, function(response) {
        nearestPrice = {'name': response.name,
        'price': response.price,
        'img': response.img};

        var reminder = $('<div id="reminderBox" style="background-image: linear-gradient(45deg, #c670ca 0%, #25a5c8 52%, #20e275 90%); text-align: center; border-radius: 20px"> <strong>Wait!</strong><br/> Before you buy this, remember you have this item in your Savey list, which costs... <br/><strong>' +
            nearestPrice.price + '</strong><img style="border-radius: 20px; max-width: 90%;" src=' + nearestPrice.img + '><div>' +
            '</div><div>' + nearestPrice.name + '</div></div>');

        $( "#priceInsideBuyBox_feature_div" ).append(reminder);
    });




}

