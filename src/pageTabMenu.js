// javascript tab 2

const menuTab = () => {
    const tab = document.querySelector("#tab2");

    if (tab.checked == true) {
        addMenu();
    }

    tab.addEventListener('click', (e) => {
        removePrevious();
        addMenu();
    })

    function removePrevious() {
        const contentDiv = document.querySelector("#contentTabs");
        
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    function addMenu() {
        const contentDiv = document.querySelector("#contentTabs");

        const menu = document.createElement('p');
        menu.textContent = "The menu:";
        const menuList = document.createElement('ul');
        const courseOne = document.createElement('li');
        courseOne.textContent = "Tomatoes with garlic and butter.";
        const courseTwo = document.createElement('li');
        courseTwo.textContent = "Fried tomatoes with fatty noodles.";
        const courseThree = document.createElement('li');
        courseThree.textContent = "Pulled pork with tomatoe stuffing(...).";

        menuList.appendChild(courseOne);
        menuList.appendChild(courseTwo);
        menuList.appendChild(courseThree);

        contentDiv.appendChild(menu);
        contentDiv.appendChild(menuList);
    }


}

export { menuTab }