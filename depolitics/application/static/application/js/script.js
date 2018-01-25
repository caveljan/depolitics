/////////////////
// Function Calls
setActiveTab();
clearSearchedResponse();
expandGiftDrawer();


////////////
// Functions
function setActiveTab() {
    let tabAbout = document.getElementById("tab-about");
    let tabAdd = document.getElementById("tab-add");
    let tabSearch = document.getElementById("tab-search");
    let tabGift = document.getElementById("tab-gift");

    let contentAbout = document.getElementById("content-about");
    let contentAdd = document.getElementById("content-add");
    let contentSearch = document.getElementById("content-search");
    let contentGift = document.getElementById("content-gift");

    let linkAdd = document.getElementById("link-add");
    let linkSearch = document.getElementById("link-search");

    function setActiveClassToTab(element) {
        let ulTabs = document.getElementById("ul-tabs");

        for (let i = 0; i < ulTabs.children.length; i++) {
            let currentTab = ulTabs.children[i];
            currentTab.classList.remove("active");
        }

        element.classList.add("active");
    }

    tabAbout.addEventListener("click", function() {
        setActiveClassToTab(this);

        contentAbout.style.display = "block";
        contentAdd.style.display = "none";
        contentSearch.style.display = "none";
        contentGift.style.display = "none";
    })

    tabAdd.addEventListener("click", function() {
        setActiveClassToTab(this);

        contentAdd.style.display = "block";
        contentAbout.style.display = "none";
        contentSearch.style.display = "none";
        contentGift.style.display = "none";
    })

    tabSearch.addEventListener("click", function() {
        setActiveClassToTab(this);

        contentSearch.style.display = "block";
        contentAbout.style.display = "none";
        contentAdd.style.display = "none";
        contentGift.style.display = "none";
    })

    tabGift.addEventListener("click", function() {
        setActiveClassToTab(this);

        contentGift.style.display = "block";
        contentAbout.style.display = "none";
        contentAdd.style.display = "none";
        contentSearch.style.display = "none";
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
}


function clearSearchedResponse() {
    let inputSearchString = document.getElementById("input-search-string");
    let searchResponse = document.getElementById("search-response");

    inputSearchString.addEventListener("input", function() {
        if(this.value == "") {
            searchResponse.style.display = "none";
        }
    })
}


function expandGiftDrawer() {
    let giftCryptoExpand = document.getElementById("gift-crypto-expand");
    let giftCardCrypto = document.getElementById("gift-card-crypto");
    let giftCardDrawer = document.getElementById("gift-card-drawer");

    giftCryptoExpand.addEventListener("click", () => {
        if (giftCardCrypto.style.height == "630px") {
            giftCryptoExpand.innerHTML = "&#9660;";
            giftCardCrypto.style.height = "200px";
            giftCardDrawer.style.display = "none";
        } else {
            giftCryptoExpand.innerHTML = "&#9650;";
            giftCardCrypto.style.height = "630px";
            giftCardDrawer.style.display = "block";
            // window.scrollTo(0,document.body.scrollHeight);
        }
    });
}



$(document).on("submit", "#add-form", function(e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "/add/",
        data: {
            first_name: $("#input-first-name").val(),
            last_name: $("#input-last-name").val(),
            name_variants: $("#input-name-variants").val(),
            current_function: $("#input-current-function").val(),
            previous_functions: $("#input-previous-functions").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response){
            let data = response;
            console.log(data);
            let idString = data['identification_string'][0]['identification_string'];
            let name = $("#input-first-name").val() + " " + $("#input-last-name").val()
            let stringContent = 'the Identification String for the politician ' +
                                 name + ' is ' + 
                                 '<span class="input-id-string">' + idString + '</span>';
            
            $("#input-first-name").val('');
            $("#input-last-name").val('');
            $("#input-name-variants").val('');
            $("#input-current-function").val('');
            $("#input-previous-functions").val('');
            $("#text-id-string")[0].innerHTML = stringContent;

            // $("#input-id-string")[0].textContent = "success";
        }
    });
});


$(document).on("submit", "#search-form", function(e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "/search/",
        data: {
            identification_string: $("#input-search-string").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response){
            let data = response;
            let politician = data['politician'][0];
            let firstName = politician['first_name'];
            let lastName = politician['last_name'];
            let nameVariants = politician['name_variants']
            let currentFunction = politician['current_function']
            let previousFunctions = politician['previous_functions']
            console.log(firstName);
            console.log(lastName);

            $("#search-response").css("display", "block");
            $("#search-first-name").text(firstName);
            $("#search-last-name").text(lastName);
            $("#search-name-variants").text(nameVariants);
            $("#search-current-function").text(currentFunction);
            $("#search-previous-functions").text(previousFunctions);
        }
    });
});