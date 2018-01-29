chrome.storage.sync.get(['activeOptions'], function(element) {
    if (element['activeOptions'] == 'off') {
      extensionIsOff()
    } else if (element['activeOptions'] == 'onWiki') {
      extensionIsOnWiki();
    } else if (element['activeOptions'] == 'onSite') {
      extensionIsOnSite();
    }
});


function extensionIsOnWiki() {
    chrome.storage.sync.set({activeOptions: 'onWiki'});
    document.getElementById('extensionOnWiki').setAttribute("checked", "checked");
    document.getElementById('popupTitle').textContent = "depolitics is active";
    document.getElementById('radioButtonOnWiki').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radioButtonOnSite').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radioButtonOff').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('underForm').style.display = 'block';

}

document.getElementById('extensionOnWiki').addEventListener('click', function(ev) {
    extensionIsOnWiki();
});
document.getElementById('radioButtonOnWiki').addEventListener('click', function(ev) {
    extensionIsOnWiki();
});


function extensionIsOnSite() {
    chrome.storage.sync.set({activeOptions: 'onSite'});
    document.getElementById('extensionOnWiki').setAttribute("checked", "checked");
    document.getElementById('popupTitle').textContent = "depolitics is active";
    document.getElementById('radioButtonOnSite').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radioButtonOnWiki').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radioButtonOff').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('underForm').style.display = 'block';
}

document.getElementById('extensionOnSite')
        .addEventListener('click', () => { extensionIsOnSite(); });

document.getElementById('radioButtonOnSite')
        .addEventListener('click', () => { extensionIsOnSite(); });


function extensionIsOff() {
    chrome.storage.sync.set({activeOptions: 'off'});
    document.getElementById('extensionOff').setAttribute("checked", "checked");
    document.getElementById('popupTitle').textContent = "depolitics is";
    document.getElementById('radioButtonOff').style.background = "hsl(0, 0%, 90%)";
    document.getElementById('radioButtonOnWiki').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('radioButtonOnSite').style.background = "hsl(0, 0%, 30%)";
    document.getElementById('underForm').style.display = 'none';
}

document.getElementById('extensionOff')
        .addEventListener('click', () => { extensionIsOff(); });

document.getElementById('radioButtonOff')
        .addEventListener('click', () => { extensionIsOff(); });


document.getElementById('adjustOptions')
        .addEventListener('click', () => { chrome.runtime.openOptionsPage(); })
