// Extract the text from body and place the capitalized words into an array
function extractText() {
    var bodyText = document.getElementsByTagName("body")[0].innerText;
    bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    // console.log(bodyText);

    let timeStart = new Date();
    console.log("start");
    // compromise NLP, 3-5 seconds, too slow
    // let x = nlp(bodyText).people().out('array');
    let x = nlp(bodyText).people().normalize().out('text');
    x = new Set(x.split(" "));
    console.log(x);

    // let doc = nlp(bodyText).nouns();
    // let docs = doc.match('#LastName');
    // console.log(docs.out('array'));
    let timeEnd = new Date();
    console.log(timeEnd - timeStart);



    let bodyTextArray = [];
    bodyTextArray = bodyText.split(" ");
    // console.log("words in page", bodyTextArray);

    // Intead of extracting the capitalized words
    // to use a NER (Named Entity Recognition) to the detect words being a Person
    // return ner(bodyTextArray)
    // returns an array of 0.95+ probability of the word (group of words) being a Person

    let capitalizedWords = [];
    let regexp = /^[A-Z]/;

    for (let word of bodyTextArray) {
        if (regexp.test(word)) {
            capitalizedWords.push(word);
        }
    }

    console.log("capitalized words", capitalizedWords);
    return x;
}