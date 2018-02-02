function extractText() {
    let bodyText = document.getElementsByTagName("body")[0].innerText;
    bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    // console.log(bodyText);
    let bodyTextClusters = [];

    for (let i=0; i < 20; i++) {
        bodyTextClusters[i] = bodyText.slice(bodyText.length/20*i, bodyText.length/20*(i+1))
    }
    // console.log(bodyTextClusters)
    
    return bodyTextClusters;
}


function textClusterIterator(clusters) {
    let nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < clusters.length ?
               {value: clusters[nextIndex++], done: false} :
               {done: true};
       }
    };
}