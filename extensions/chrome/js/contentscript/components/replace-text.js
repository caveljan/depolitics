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
    // console.log("array of text", text);
    // console.log("database", database);

    let textSet = new Set(text);
    // console.log(textSet);

    let databaseLastNames = new Set()
    for (let i=0; i < database.length; i++) {
        databaseLastNames.add(database[i]["last_name"]);
    }
    // console.log(databaseLastNames);

    let textDatabaseIntersection = new Set([...textSet].filter(x => databaseLastNames.has(x)));
    console.log(textDatabaseIntersection)


    for(let politicianLastName of textDatabaseIntersection) {
        // console.log(politicianLastName);
        for (let i=0; i <database.length; i++) {
            if (database[i]["last_name"] == politicianLastName) {
                let identificationString = database[i]["identification_string"];

                // makes an array out of name_variants, removing commas and spaces 
                let name_variants = database[i]["name_variants"]
                                                        .split(",")
                                                        .map(item => item.trim());
                // console.log(name_variants);

                // for (let k=0; k < name_variants.length; k++) {
                //     name_variant = name_variants[k].split(" ");
                //     let length = name_variant.length;
                //     if (name_variant[length - 1] == text[i] &&
                //         name_variant[length - 2] == text[i-1] &&
                //         name_variant[length - 3] == text[i-2]) {
                //         // console.log(k, name_variant);
                //         $("*").replaceText(name_variants[k], identificationString);
                //     }
                // }
                
                // if (database[i]["first_name"] == text[i-1]) {
                //     let politicianFullName = text[i-1] + " " + text[i];
                //     $("*").replaceText(politicianFullName, identificationString);
                // }

                // if (database[i]["first_name"] != text[i-1]) {
                    // let politicianLastName = text[i];
                    $("*").replaceText(politicianLastName, identificationString);                    
                // }
            }
        }
    }



    // for (let i=0; i < text.length; i++) {
    //     for(let j=0; j < database.length; j++) {
    //         if (database[j]["last_name"] == text[i]) {
    //             let identificationString = database[j]["identification_string"];

    //             // makes an array out of name_variants, removing commas and spaces 
    //             let name_variants = database[j]["name_variants"]
    //                                                     .split(",")
    //                                                     .map(item => item.trim());
    //             // console.log(name_variants);

    //             for (let k=0; k < name_variants.length; k++) {
    //                 name_variant = name_variants[k].split(" ");
    //                 let length = name_variant.length;
    //                 if (name_variant[length - 1] == text[i] &&
    //                     name_variant[length - 2] == text[i-1] &&
    //                     name_variant[length - 3] == text[i-2]) {
    //                     // console.log(k, name_variant);
    //                     $("*").replaceText(name_variants[k], identificationString);
    //                 }
    //             }
                
    //             if (database[j]["first_name"] == text[i-1]) {
    //                 let politicianFullName = text[i-1] + " " + text[i];
    //                 $("*").replaceText(politicianFullName, identificationString);
    //             }

    //             if (database[j]["first_name"] != text[i-1]) {
    //                 let politicianLastName = text[i];
    //                 $("*").replaceText(politicianLastName, identificationString);                    
    //             }
    //         }
    //     }
    // }
}