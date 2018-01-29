// Extract the text from body and place the capitalized words into an array
function extractText() {
    var bodyText = document.getElementsByTagName("body")[0].innerText;
    bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    // console.log(bodyText);

    let bodyTextArray = [];
    bodyTextArray = bodyText.split(" ");
    // console.log(bodyTextArray);

    let capitalizedWords = [];
    let regexp = /^[A-Z]/;

    for (let word of bodyTextArray) {
        if (regexp.test(word)) {
            capitalizedWords.push(word);
        }
    }

    // console.log("capitalized words", capitalizedWords);
    return capitalizedWords;
}