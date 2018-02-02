// Get the options from chrome.storage and call main with options as parameter
// setTimeout(function(){
getDatabase();
// console.log('got database');
// }, 5000);


chrome.storage.sync.get(['activeOptions', 'database'], function(element) {
    let options = {};
    let activeOptions = element['activeOptions'];
    let database = element['database']; 

    options['activeOptions'] = activeOptions;
    _main(options, database);
});


function _main(options, database) {

    if (/wikipedia/.test(document.location.href)) {
        var isWiki = true;
    } else {
        var isWiki = false;
    }

    if (options['activeOptions'] == "onWiki" && isWiki) {
        replaceText(database);
        // replaceText(extractText(), database);
    } else if (options['activeOptions'] == "onSite") {
        replaceText(database);
        // replaceText(extractText(), database);
    }
}
