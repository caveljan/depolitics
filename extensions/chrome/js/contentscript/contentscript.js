// Get the options from chrome.storage and call main with options as parameter
getDatabase();

chrome.storage.sync.get(['activeOptions', 'database'], function(element) {
    let options = {};
    let activeOptions = element['activeOptions'];
    let database = element['database']; 

    options['activeOptions'] = activeOptions;
    _main(options, database);
});


function _main(options, database) {
    // Ben Alman's replaceText plugin
    // http://www.benalman.com/projects/jquery-replacetext-plugin/
    $.fn.replaceText = function(search, replace, text_only) {
        return this.each(function(){
            var node = this.firstChild,
                val,
                new_val,
                remove = [];
            if ( node ) {
                do {
                    if ( node.nodeType === 3 ) {
                        val = node.nodeValue;
                        new_val = val.replace( search, replace );
                        if ( new_val !== val ) {
                            if ( !text_only && /</.test( new_val ) ) {
                                $(node).before( new_val );
                                remove.push( node );
                            } else {
                                node.nodeValue = new_val;
                            }
                        }
                    }
                } while ( node = node.nextSibling );
            }
            remove.length && $(remove).remove();
        });
    };

    if (/wikipedia/.test(document.location.href)) {
        var isWiki = true;
    } else {
        var isWiki = false;
    }

    if (options['activeOptions'] == "onWiki" && isWiki) {
        replaceText(extractText(), database);
    } else if (options['activeOptions'] == "onSite") {
        replaceText(extractText(), database);
    }
}
