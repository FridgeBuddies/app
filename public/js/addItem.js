function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );


function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}

//    var items = [];
//Creates added items with options to delete
//X within span within div within item name
function addItem() {
    var ul = document.getElementById("contents");
    var newItem = document.getElementById("itemToAdd");
//    items.push(newItem);
   // console.log(items[].value);
    var li = document.createElement("div");
    var sp = document.createElement("span");
    sp.className += "close";
    sp.appendChild(document.createTextNode('x'));
    li.className += "item";
    li.setAttribute('id', newItem.value);
//    for (var i = 0; i < items.length; i++){
//	li.appendChild(document.createTextNode(items[i].value));
 //   }
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(sp);
    ul.appendChild(li);
    var br = document.createElement("br");
    ul.appendChild(br);
}

//Click X to delete function
$(document).on('click', '.close', function(event) {
    console.log("clicked");
    this.parentElement.style.display = 'none';
  })

