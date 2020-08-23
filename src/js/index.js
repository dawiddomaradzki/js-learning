import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// basic strings task #2

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