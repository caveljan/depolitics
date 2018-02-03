function extractText() {
    let bodyText = document.getElementsByTagName("body")[0].innerText;
    bodyText = bodyText.replace(/(\r\n|\n|\r)/gm," ");
    // console.log(bodyText);

    let bodyTextClusters = [];
    const clusterSplit = 1;
    for (let i=0; i < clusterSplit; i++) {
        bodyTextClusters[i] = bodyText.slice(bodyText.length/clusterSplit*i,
                                             bodyText.length/clusterSplit*(i+1))
    }
    // console.log(bodyTextClusters);
    
    return bodyTextClusters;
}


function* textClusterIterator(clusters) {
    for (let i = 0; i < clusters.length; i++) {
        yield clusters[i];
    }

    // let nextIndex = 0;
    
    // return {
    //    next: function() {
    //        return nextIndex < clusters.length ?
    //            {value: clusters[nextIndex++], done: false} :
    //            {done: true};
    //    }
    // };
}
