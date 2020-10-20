// javascript tab 3

const contactTab = () => {
    const tab = document.querySelector("#tab3");

    if (tab.checked == true) {
        addContact();
    }

    tab.addEventListener('click', (e) => {
        removePrevious();
        addContact();
    })

    function removePrevious() {
        const contentDiv = document.querySelector("#contentTabs");
        
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    function addContact() {
        const contentDiv = document.querySelector("#contentTabs");

        const contactPhone = document.createElement('p');
        contactPhone.textContent = "phone: 1234567890";
        const contactEmail = document.createElement('p');
        contactEmail.textContent = "email: abcdefghijk";

        // contentDiv.appendChild(contactBreak);
        contentDiv.appendChild(contactPhone);
        contentDiv.appendChild(contactEmail);
    }
}

export { contactTab }