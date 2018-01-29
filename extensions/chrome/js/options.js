// Set default options at the start
chrome.storage.sync.get(['activeOptions'], function(element) {
    if(element['activeOptions'] == null) {
        default_options();
    }
});


// Set checked item while window opened
chrome.storage.sync.get(['activeOptions'], function(element) {
    var activeOptions = element['activeOptions'];
    document.getElementById(activeOptions).setAttribute("checked", "checked");
});


function save_options () {
    var activeOptionsForm = document.querySelector('input[name="activeOptionsForm"]:checked').value;

    chrome.storage.sync.set({
        activeOptions: activeOptionsForm,
    }, function() {
        var status = document.getElementById('status-save');
        status.textContent = 'Options are saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });

    chrome.storage.sync.get(['activeOptions'], function(element) {
        var activeOptions = element['activeOptions'];
        document.getElementById(activeOptions).setAttribute("checked", "checked");
    });
}

document.getElementById('btn-save').addEventListener('click', function(ev) {
    save_options();
    setTimeout(function() {
        location.reload();
    }, 750);
});


function default_options () {
    chrome.storage.sync.set({
        activeOptions: 'onWiki',
    }, function() {
        var status = document.getElementById('status-default');
        status.textContent = 'Options are default.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });

    chrome.storage.sync.get(['activeOptions'], function(element) {
        var activeOptions = element['activeOptions'];
        document.getElementById(activeOptions).setAttribute("checked", "checked");
    });
}

document.getElementById('btn-reset').addEventListener('click', () => {
    default_options();
    setTimeout(function() {
        location.reload();
    }, 750);
});
