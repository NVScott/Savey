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

$(document).ready(function(){
    var wishBtn = $('<input type="button" value="Add to Savey"/>');
    wishBtn.css({
        'background-image': 'linear-gradient(45deg, #c670ca 0%, #25a5c8 52%, #20e275 90%)',
        });
    $("#onetime").append(wishBtn);
});
