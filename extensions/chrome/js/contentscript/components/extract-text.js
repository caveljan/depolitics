// Extract the text from body and place the capitalized words into an array
function extractText() {
    var bodyText = document.getElementsByTagName("body")[0].innerText;
    bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    // console.log(bodyText);

    let bodyTextArray = [];
    bodyTextArray = bodyText.split(" ");
    // console.log("words in page", bodyTextArray);

    // Intead of extracting the capitalized words
    // to use an AI parser that detects the probability of the word being a (human) Name
    // return artificialInteligenceParser(bodyTextArray)
    // returns an array of 0.95+ probability of the word being a name

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