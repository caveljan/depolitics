chrome.storage.sync.get(['activeOptions'], function(element) {
    if (element['activeOptions'] == 'off') {
      extensionIsOff()
    } else if (element['activeOptions'] == 'on-wiki') {
      extensionIsOnWiki();
    } else if (element['activeOptions'] == 'on-site') {
      extensionIsOnSite();
    }
});


function extensionIsOnWiki() {
    chrome.storage.sync.set({activeOptions: 'on-wiki'});
    document.getElementById('extension-on-wiki').setAttribute("checked", "checked");
    document.getElementById('popup-title').textContent = "depolitics is active";
    document.getElementById('radio-button-on-wiki').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radio-button-on-site').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radio-button-off').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('under-form').style.display = 'block';
}

document.getElementById('extension-on-wiki').addEventListener('click', function(ev) {
    extensionIsOnWiki();
});
document.getElementById('radio-button-on-wiki').addEventListener('click', function(ev) {
    extensionIsOnWiki();
});


function extensionIsOnSite() {
    chrome.storage.sync.set({activeOptions: 'on-site'});
    document.getElementById('extension-on-wiki').setAttribute("checked", "checked");
    document.getElementById('popup-title').textContent = "depolitics is active";
    document.getElementById('radio-button-on-site').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radio-button-on-wiki').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radio-button-off').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('under-form').style.display = 'block';
}

document.getElementById('extension-on-site')
        .addEventListener('click', () => { extensionIsOnSite(); });

document.getElementById('radio-button-on-site')
        .addEventListener('click', () => { extensionIsOnSite(); });


function extensionIsOff() {
    chrome.storage.sync.set({activeOptions: 'off'});
    document.getElementById('extension-off').setAttribute("checked", "checked");
    document.getElementById('popup-title').textContent = "depolitics is";
    document.getElementById('radio-button-off').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radio-button-on-wiki').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radio-button-on-site').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('under-form').style.display = 'none';
}

document.getElementById('extension-off')
        .addEventListener('click', () => { extensionIsOff(); });

document.getElementById('radio-button-off')
        .addEventListener('click', () => { extensionIsOff(); });


document.getElementById('adjust-options')
        .addEventListener('click', () => { chrome.runtime.openOptionsPage(); })


let updateDatabase = document.getElementById('update-database');

updateDatabase.addEventListener("click", () => {
    // console.log("C");
    updateDatabase.innerHTML = "<p>database updated</p>"
    setDatabase();
    setTimeout(function() {
        updateDatabase.innerHTML = "<p>update database</p>"
        // location.reload();
    }, 750);
})
