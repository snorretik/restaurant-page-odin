const pageLoadFunc = () => {
    const contentDiv = document.querySelector("#content");
    // const reference = document.querySelector("#tab1");

    const inputTab1 = document.createElement('input');
    inputTab1.setAttribute('id', 'tab1');
    inputTab1.setAttribute('class', 'radioKnop');
    inputTab1.setAttribute('type', 'radio');
    inputTab1.setAttribute('name', 'tabs');
    inputTab1.setAttribute('checked', true);
    const labelTab1 = document.createElement('label');
    labelTab1.setAttribute('class', 'label');
    labelTab1.setAttribute('for', 'tab1');
    labelTab1.textContent = "About";
    const inputTab2 = document.createElement('input');
    inputTab2.setAttribute('id', 'tab2');
    inputTab2.setAttribute('class', 'radioKnop');
    inputTab2.setAttribute('type', 'radio');
    inputTab2.setAttribute('name', 'tabs');
    const labelTab2 = document.createElement('label');
    labelTab2.setAttribute('class', 'label');
    labelTab2.setAttribute('for', 'tab2');
    labelTab2.textContent = "Menu";
    const inputTab3 = document.createElement('input');
    inputTab3.setAttribute('id', 'tab3');
    inputTab3.setAttribute('class', 'radioKnop');
    inputTab3.setAttribute('type', 'radio');
    inputTab3.setAttribute('name', 'tabs');
    const labelTab3 = document.createElement('label');
    labelTab3.setAttribute('class', 'label');
    labelTab3.setAttribute('for', 'tab3');
    labelTab3.textContent = "Contact";

    const titleRest = document.createElement('h1');
    titleRest.textContent = "Tommies Restaurant";
    const imageRest = document.createElement('img');
    imageRest.setAttribute('src', '../src/cropped-restaurant-image.jpg');
    const breakExtra = document.createElement('br');
    const breakExtraTwo = document.createElement('br');
    // const someText = document.createElement('p');
    // someText.textContent = "Our restaurant is all about tomatoes! It's wonderful! Here, have some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    contentDiv.appendChild(titleRest);
    contentDiv.appendChild(imageRest);
    contentDiv.appendChild(breakExtra);
    contentDiv.appendChild(breakExtraTwo);
    
    contentDiv.appendChild(inputTab1);
    contentDiv.appendChild(labelTab1);
    contentDiv.appendChild(inputTab2);
    contentDiv.appendChild(labelTab2);
    contentDiv.appendChild(inputTab3);
    contentDiv.appendChild(labelTab3);
    // contentDiv.appendChild(someText);
}

export { pageLoadFunc }