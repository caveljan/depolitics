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


function replaceText(text, database) {
    console.log("array of text", text);
    console.log("database", database);

    for (let i=0; i < text.length; i++) {
        for(let j=0; j < database.length; j++) {
            if (database[j]["last_name"] == text[i]) {
                let identificationString = database[j]["identification_string"];

                if (database[j]["first_name"] == text[i-1]) {
                    let politicianFullName = text[i-1] + " " + text[i];
                    $("*").replaceText(politicianFullName, identificationString);
                } else {
                    let politicianLastName = text[i];
                    $("*").replaceText(politicianLastName, identificationString);
                }
            }
        }
    }
}