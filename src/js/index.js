import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// basic strings task #1 // Wyliczenie ilości słów w tekście
const quantity = document.querySelector('.button__stringsTask1--js');
const element = document.getElementById('exercise__one');

quantity.addEventListener('click', (e) => {
    const text = element.innerText.split(" ");
    console.log(text);
    console.log(text.length);

});

// basic strings task #2 // przywitanie za pomocą prompt i powiększenie pierwszej litery w kazdym slowie

const greeting = document.querySelector('.button__stringsTask2--js');

greeting.addEventListener('click', (e) => {
    var userInput = getInputFromUser();

    if (userInput != null) {
        var nameAfterProcessing = processUserName(userInput);
        alert(`Cześć ` + nameAfterProcessing);
    }
});

function getInputFromUser() {
    var result = prompt(`Podaj swoje imię`);
    if (!result) {
        alert(`Anulowałeś to ziom`);
    }

    return result;
}

function processUserName(userInput) {
    var splitedName = userInput.toLowerCase().split(' ');

    for (var i = 0; i < splitedName.length; i++) {

        splitedName[i] = splitedName[i].charAt(0).toUpperCase() + splitedName[i].substring(1);
    }

    return splitedName.join(' ');
}