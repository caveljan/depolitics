function getDatabase() {
    let xhr = new XMLHttpRequest();
    let url = "http://127.0.0.1:8080/api/database";

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

