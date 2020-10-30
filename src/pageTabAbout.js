// javascript tab 1

const aboutTab = () => {
    const tab = document.querySelector("#tab1");

    if (tab.checked == true) {
        addText();
    }

    tab.addEventListener('click', (e) => {
        removePrevious();
        addText();
    })

    function removePrevious() {
        const contentDiv = document.querySelector("#contentTabs");
        
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    function addText() {
        const contentDiv = document.querySelector("#contentTabs");

        const parToAdd = document.createElement('p');
        parToAdd.textContent = "Our restaurant is all about tomatoes! It's wonderful! Here, have some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        contentDiv.appendChild(parToAdd);
    }


}

export default aboutTab