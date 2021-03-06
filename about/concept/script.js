// random generator logic

let idString = "";

for (let i = 0; i < 8; i++) {
    let randomChar = getRandomChar();

    idString += randomChar;
}

function getRandomChar() {
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                 "u", "v", "w", "x", "y", "z",
                 "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    indexNumber = Math.ceil(Math.random()*100 % 35);

    return chars[indexNumber];
}

console.log(idString);



//

let tabAbout = document.getElementById("tab-about");
let tabAdd = document.getElementById("tab-add");
let tabSearch = document.getElementById("tab-search");

let contentAbout = document.getElementById("content-about");
let contentAdd = document.getElementById("content-add");
let contentSearch = document.getElementById("content-search");

let linkAdd = document.getElementById("link-add");
let linkSearch = document.getElementById("link-search");


tabAbout.addEventListener("click", function() {
    setActiveClassToTab(this);

    contentAbout.style.display = "block";
    contentAdd.style.display = "none";
    contentSearch.style.display = "none";
})

tabAdd.addEventListener("click", function() {
    setActiveClassToTab(this);

    contentAdd.style.display = "block";
    contentAbout.style.display = "none";
    contentSearch.style.display = "none";
})

tabSearch.addEventListener("click", function() {
    setActiveClassToTab(this);

    contentSearch.style.display = "block";
    contentAbout.style.display = "none";
    contentAdd.style.display = "none";
})


linkAdd.addEventListener("click", () => {
    setActiveClassToTab(tabAdd);

    contentAdd.style.display = "block";
    contentAbout.style.display = "none";
    contentSearch.style.display = "none"; 
})

linkSearch.addEventListener("click", () => {
    setActiveClassToTab(tabSearch);

    contentSearch.style.display = "block";
    contentAbout.style.display = "none";
    contentAdd.style.display = "none";
})



function setActiveClassToTab(element) {
    let ulTabs = document.getElementById("ul-tabs");

    for (let i = 0; i < ulTabs.children.length; i++) {
        let currentTab = ulTabs.children[i];
        currentTab.classList.remove("active");
    }

    element.classList.add("active");
}
