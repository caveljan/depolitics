function getDatabase() {
    // setDatabase();
    chrome.storage.sync.get(['database'], function(element) {
        let database = element['database'];
        // console.log(database);
        if (!database) {
            console.log('set db')
            setDatabase()
        }
    });
}

function setDatabase() {
    let xhr = new XMLHttpRequest();
    let url = "https://depolitics.org/api/database";

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            // console.log("data", data);

            chrome.storage.sync.set({
                database: data,
            }, function() { });
        }
    }

    xhr.send();
}
