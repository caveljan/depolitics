getDatabase();


chrome.storage.sync.get(['activeOptions', 'database'], function(element) {
    let database = element['database'];
    let options = {};
    options['activeOptions'] = element['activeOptions'];

    main(database, options);
});


function main(database, options) {
    let onWikipedia = /wikipedia.org/.test(document.location.href);

    if (options['activeOptions'] == "on-wiki" && onWikipedia) {
        replaceText(database);
    }

    if (options['activeOptions'] == "on-site") {
        replaceText(database);
    }
}
