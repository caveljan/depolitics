// Extract the text from body and place it into an array
function extractText() {
    var bodyText = document.getElementsByTagName("body")[0].innerText;
    // bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    console.log(bodyText);

    // var bodyTextArray = [];
    // bodyTextArray = $.each(bodyText.split(" ").slice(0,-1), function(index, item) { });
    // console.log(bodyTextArray);
    // return bodyTextArray;
}