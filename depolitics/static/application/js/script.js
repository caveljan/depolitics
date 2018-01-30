/////////////////
// Function Calls
setActiveTab();
clearSearchedResponse();
expandGiftDrawer();
disableSearchIfEmptyString();
disableAddIfEmptyString();
noHoverDisabledButton()
copyCryptosOnClick();

ajaxAddForm();
ajaxSearchForm()



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
        if (giftCardCrypto.style.height == "530px") {
            giftCryptoExpand.innerHTML = "&#9660;";
            giftCardCrypto.style.height = "200px";
            giftCardDrawer.style.display = "none";
        } else {
            giftCryptoExpand.innerHTML = "&#9650;";
            giftCardCrypto.style.height = "530px";
            giftCardDrawer.style.display = "block";
            // window.scrollTo(0,document.body.scrollHeight);
        }
    });
}


function setOpacity(button) {

    button.style.opacity = "0.3";
}


function disableAddIfEmptyString() {
    let inputFirstName = document.getElementById("input-first-name");
    let inputLastName = document.getElementById("input-last-name");
    let inputCurrentFunction = document.getElementById("input-current-function");
    let inputAddSubmit = document.getElementById("input-add-submit");

    if (inputFirstName.value == "" 
        || inputLastName.value == "" 
        || inputCurrentFunction.value == "") {
            setOpacity(inputAddSubmit)
    }

    let firstNameState = false;
    let lastNameState = false;
    let currentFunctionState = false;

    inputFirstName.addEventListener("input", (event) => {
        if (inputFirstName.value == "") {
            setOpacity(inputAddSubmit);
            firstNameState = false;
        } else {
            firstNameState = true;
            setButton()
        }
    });

    inputLastName.addEventListener("input", (event) => {
        if (inputLastName.value == "") {
            setOpacity(inputAddSubmit);
            lastNameState = false;
        } else {
            lastNameState = true;
            setButton()
        }
    });

    inputCurrentFunction.addEventListener("input", (event) => {
        if (inputCurrentFunction.value == "") {
            setOpacity(inputAddSubmit);
            currentFunctionState = false;
        } else {
            currentFunctionState = true;
            setButton()
        }
    });

    inputAddSubmit.addEventListener("click", () => {
        setOpacity(inputAddSubmit);
    });

    function setButton() {
        if (firstNameState && lastNameState && currentFunctionState) {
            inputAddSubmit.style.opacity = "1";
        }
    }
}


function disableSearchIfEmptyString() {
    let inputSearchString = document.getElementById("input-search-string");
    let inputSearchSubmit = document.getElementById("input-search-submit");
    if (inputSearchString.value.length < 8) {
        setOpacity(inputSearchSubmit)
    }

    inputSearchString.addEventListener("input", (event) => {
        if (inputSearchString.value.length < 8) {
            setOpacity(inputSearchSubmit);
        } else {
            inputSearchSubmit.style.opacity = "1";
            inputSearchSubmit.removeAttribute("disabled");
        }
    });
}


function noHoverDisabledButton() {
    let buttons = document.getElementsByClassName("button");

    for (let button of buttons) {
        button.addEventListener("mouseenter", () => {
            let opacity = button.style.opacity;
            if (opacity == 0.3) {
                button.style.backgroundColor = "hsl(0, 0%, 30%)";
                button.style.color = "hsl(0, 0%, 90%)";
            } else {
                button.style.backgroundColor = "hsl(0, 0%, 70%)";
                button.style.color = "hsl(0, 0%, 10%)";
            }
        });
        button.addEventListener("mouseleave", () => {
            let opacity = button.style.opacity;
            if (opacity == 0.3) {
                button.style.backgroundColor = "hsl(0, 0%, 30%)";
                button.style.color = "hsl(0, 0%, 90%)";
            } else {
                button.style.backgroundColor = "hsl(0, 0%, 30%)";
                button.style.color = "hsl(0, 0%, 90%)";
            }
        })
    }
}


function copyCryptosOnClick() {
    function copyBtcAdressOnClick() {
        let btc = document.getElementById("btc-address");
        let address = "1CKoEnMU3Hy1UiWfJVBTruVSmrLvhDkXd6"
        copyCryptoAddress(btc, address)
    }

    function copyEthAdressOnClick() {
        let eth = document.getElementById("eth-address");
        let address = "0x91936fc5A7e13ae96273E371fD3407B0F3ABc553"
        copyCryptoAddress(eth, address)
    }

    function copyBchAdressOnClick() {
        let bch = document.getElementById("bch-address");
        let address = "qrlar2grfap9n86gfrm6z69yw56ezv35zyts7ufxjv"
        copyCryptoAddress(bch, address)
    }

    function copyCryptoAddress(crypto, address) {
        crypto.addEventListener("click", () => {
            let range = document.createRange();
            range.selectNode(crypto);
            let selection = window.getSelection()
            selection.removeAllRanges();
            selection.addRange(range);

            try {  
                if (crypto.innerHTML == address) {
                    document.execCommand('copy');
                }
                crypto.innerHTML = `<span class="address-copy">address<br>copied</span>`;
                setTimeout(function() {
                    crypto.innerText = address;
                }, 2000);
            } catch(err) {
                crypto.innerHTML = `<span class="address-copy">address<br>couldn't be copied</span>`;
                setTimeout(function() {
                    crypto.innerText = address;
                }, 2000);
            }
            window.getSelection().removeAllRanges(); 
        });
    }

    copyBtcAdressOnClick();
    copyEthAdressOnClick();
    copyBchAdressOnClick();
}



// AJAX
function ajaxAddForm() {
    let inputAddSubmit = document.getElementById("input-add-submit");

    inputAddSubmit.addEventListener("click", event => {
        event.preventDefault();
        makeAjaxCall();
    })

    function makeAjaxCall() {
        let xhr = new XMLHttpRequest();
        let url = "/add/";

        let firstName = document.getElementById("input-first-name").value;
        let lastName = document.getElementById("input-last-name").value;
        let nameVariants = document.getElementById("input-name-variants").value;
        let currentFunction = document.getElementById("input-current-function").value;
        let previousFunctions = document.getElementById("input-previous-functions").value;
        let csrfmiddlewaretoken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

        let parameters = `first_name=${firstName}&last_name=${lastName}&name_variants=${nameVariants}&current_function=${currentFunction}&previous_functions=${previousFunctions}&csrfmiddlewaretoken=${csrfmiddlewaretoken}`;

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                if (data["not filled"] == 1) {
                    handleNotFilled(data);                    
                } else if (data["exists"] != 1) {
                    handleResponse(data);
                } else {
                    handleExists(data);
                }
            }
        }
        xhr.send(parameters);
    }

    function sanitizeName(name) {
        // replaces spaces at start and end of string
        // and capitalizes first character
        function capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        let strName = capitalizeFirst(name.replace(/^\s+|\s+$/g, ''));
        return strName;
    }

    function handleNotFilled(data) {
        let textIdString = document.getElementById("text-id-string");
        let stringContent = `first Name, last Name, and current political function must be filled.
                             <span id="close-add-not-filled" class="input-close-result">×</span>`;
        textIdString.innerHTML = stringContent;

        let closeAddNotFilled = document.getElementById("close-add-not-filled");
        closeAddNotFilled.addEventListener("click", () => {
            textIdString.innerHTML = "";
        });
    }

    function handleResponse(data) {
        let firstName = document.getElementById("input-first-name");
        let lastName = document.getElementById("input-last-name");
        let nameVariants = document.getElementById("input-name-variants");
        let currentFunction = document.getElementById("input-current-function");
        let previousFunctions = document.getElementById("input-previous-functions");
        let textIdString = document.getElementById("text-id-string");

        strFirstName = sanitizeName(firstName.value);
        strLastName = sanitizeName(lastName.value);

        let idString = data[0]['identification_string'];
        let name = strFirstName + " " + strLastName;
        let stringContent = `The Identification String for the politician ${name} is
                             <span class="input-id-string">${idString}</span>.
                             <span id="close-add-response" class="input-close-result">×</span>`;
        textIdString.innerHTML = stringContent;

        let closeAddResponse = document.getElementById("close-add-response");
        closeAddResponse.addEventListener("click", () => {
            textIdString.innerHTML = "";
        });

        firstName.value = "";
        lastName.value = "";
        nameVariants.value = "";
        currentFunction.value = "";
        previousFunctions.value = "";
    }

    function handleExists(data) {
        let firstName = document.getElementById("input-first-name");
        let lastName = document.getElementById("input-last-name");
        let nameVariants = document.getElementById("input-name-variants");
        let currentFunction = document.getElementById("input-current-function");
        let previousFunctions = document.getElementById("input-previous-functions");
        let textIdString = document.getElementById("text-id-string");

        strFirstName = sanitizeName(firstName.value);
        strLastName = sanitizeName(lastName.value);

        let identificationString = data["identification_string"][0]["identification_string"];
        let name = strFirstName + " " + strLastName;
        let stringContent = `The politician ${name} is already in the database with the 
                             Identification String <span class="input-id-string">${identificationString}</span>.
                             <span id="close-add-exists" class="input-close-result">×</span>`;
        textIdString.innerHTML = stringContent;

        let closeAddExists = document.getElementById("close-add-exists");
        closeAddExists.addEventListener("click", () => {
            textIdString.innerHTML = "";
        });

        firstName.value = "";
        lastName.value = "";
        nameVariants.value = "";
        currentFunction.value = "";
        previousFunctions.value = "";
    }
}


function ajaxSearchForm() {
    let inputSearchSubmit = document.getElementById("input-search-submit");

    inputSearchSubmit.addEventListener("click", event => {
        event.preventDefault();
        makeAjaxCall();
    })

    function makeAjaxCall() {
        let xhr = new XMLHttpRequest();
        let url = "/search/";

        let searchString = document.getElementById("input-search-string").value;
        let csrfmiddlewaretoken = document.querySelector('input[name="csrfmiddlewaretoken"]').value;

        let parameters = `identification_string=${searchString}`;

        xhr.open("POST", url, true);
        xhr.withCredentials = false;
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                if (data["not filled"] == 1) {
                    handleNotFilled(data);
                } else if (data["not found"] == 1) {
                    handleNotFound(data);
                } else {
                    handleResponse(data);
                }
            }
        }
        xhr.send(parameters);
    }

    function handleNotFilled(data) {
        let searchFoundDiv = document.getElementById("search-found");
        let stringContent = `<p>An Identification String must be provided.
                             <span id="close-search-not-filled" class="input-close-result">×</span></p>`;
        searchFoundDiv.innerHTML = stringContent;

        let closeSearchNotFilled = document.getElementById("close-search-not-filled");
        closeSearchNotFilled.addEventListener("click", () => {
            searchFoundDiv.innerHTML = "";
        });
    }

    function handleNotFound(data) {
        let firstName = document.getElementById("search-first-name");
        let lastName = document.getElementById("search-last-name");
        let nameVariants = document.getElementById("search-name-variants");
        let currentFunction = document.getElementById("search-current-function");
        let previousFunctions = document.getElementById("search-previous-functions");
        let searchFound = document.getElementById("search-found");
        let searchResponse = document.getElementById("search-response");
        let inputSearchString = document.getElementById("input-search-string");
        let inputSearchSubmit = document.getElementById("input-search-submit");

        setOpacity(inputSearchSubmit);
        inputSearchString.value = "";
        firstName.innerText = "";
        lastName.innerText = "";
        nameVariants.innerText = "";
        currentFunction.innerText = "";
        previousFunctions.innerText = "";

        identificationString = data["identification_string"];
        if (identificationString != "") {
            notFoundString = `<p>The Identification String 
                                 <span class="input-id-string">${identificationString}</span> 
                             is not assigned, yet.
                             <span id="close-search-not-found" class="input-close-result">×</span></p>`;
        } else {
            notFoundString = ""
        }

        searchResponse.style.display = "none";
        searchFound.innerHTML = notFoundString;

        let closeSearchNotFound = document.getElementById("close-search-not-found");
        closeSearchNotFound.addEventListener("click", () => {
            searchFound.innerHTML = "";
        });
    }

    function handleResponse(data) {
        let politician = {
            "firstName": data[0].first_name,
            "lastName": data[0].last_name,
            "nameVariants": data[0].name_variants,
            "currentFunction": data[0].current_function,
            "previousFunctions": data[0].previous_functions
        }
        let firstName = document.getElementById("search-first-name");
        let lastName = document.getElementById("search-last-name");
        let nameVariants = document.getElementById("search-name-variants");
        let currentFunction = document.getElementById("search-current-function");
        let previousFunctions = document.getElementById("search-previous-functions");
        let searchFound = document.getElementById("search-found");
        let searchResponse = document.getElementById("search-response");
        let inputSearchString = document.getElementById("input-search-string");
        let inputSearchSubmit = document.getElementById("input-search-submit");

        setOpacity(inputSearchSubmit);
        identificationString = inputSearchString.value;
        inputSearchString.value = "";
        searchFound.innerHTML = `<p>The Identification String
                                    <span class="input-id-string">${identificationString}</span>
                                 is assigned to the politician
                                 <span id="close-search-response" class="input-close-result">×</span></p>`;
        searchResponse.style.display = "block";

        let closeSearchResponse = document.getElementById("close-search-response");
        closeSearchResponse.addEventListener("click", () => {
            searchResponse.style.display = "none";
            searchFound.innerHTML = "";
        });

        firstName.innerText = politician.firstName;
        lastName.innerText = politician.lastName;
        nameVariants.innerText = politician.nameVariants;
        currentFunction.innerText = politician.currentFunction;
        previousFunctions.innerText = politician.previousFunctions;
    }
}



///////////////////
// AJAX with jQuery

// $(document).on("submit", "#add-form", function(e) {
//     e.preventDefault();

//     $.ajax({
//         type: "POST",
//         url: "/add/",
//         data: {
//             first_name: $("#input-first-name").val(),
//             last_name: $("#input-last-name").val(),
//             name_variants: $("#input-name-variants").val(),
//             current_function: $("#input-current-function").val(),
//             previous_functions: $("#input-previous-functions").val(),
//             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//         },
//         success: function(response){
//             let data = response;
//             console.log(data);
//             let idString = data['identification_string'][0]['identification_string'];
//             let name = $("#input-first-name").val() + " " + $("#input-last-name").val()
//             let stringContent = 'the Identification String for the politician ' +
//                                  name + ' is ' + 
//                                  '<span class="input-id-string">' + idString + '</span>';
            
//             $("#input-first-name").val('');
//             $("#input-last-name").val('');
//             $("#input-name-variants").val('');
//             $("#input-current-function").val('');
//             $("#input-previous-functions").val('');
//             $("#text-id-string")[0].innerHTML = stringContent;

//             // $("#input-id-string")[0].textContent = "success";
//         }
//     });
// });


// $(document).on("submit", "#search-form", function(e) {
//     e.preventDefault();

//     $.ajax({
//         type: "POST",
//         url: "/search/",
//         data: {
//             identification_string: $("#input-search-string").val(),
//             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//         },
//         success: function(response){
//             let data = response;
//             let politician = data['politician'][0];
//             let firstName = politician['first_name'];
//             let lastName = politician['last_name'];
//             let nameVariants = politician['name_variants']
//             let currentFunction = politician['current_function']
//             let previousFunctions = politician['previous_functions']
//             console.log(firstName);
//             console.log(lastName);

//             $("#search-response").css("display", "block");
//             $("#search-first-name").text(firstName);
//             $("#search-last-name").text(lastName);
//             $("#search-name-variants").text(nameVariants);
//             $("#search-current-function").text(currentFunction);
//             $("#search-previous-functions").text(previousFunctions);
//         }
//     });
// });
