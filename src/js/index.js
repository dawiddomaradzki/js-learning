import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// basic strings task #1 // Wyliczenie ilości słów w tekście
const stringsTask1 = document.querySelector('.button__stringsTask1--js');
var element1 = document.getElementById('exerciseOne');

stringsTask1.addEventListener('click', (e) => {
    const text = element1.innerText.split(" ");
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

// basic strings task #3 // sprawdzanie występowania słowa w zdaniu

const stringsTask3 = document.querySelector('.button__stringsTask3--js');
var element3 = document.getElementById('exerciseThree');

stringsTask3.addEventListener('click', (e) => {
 const text3 = element3.innerText.split('chcesz').length - 1;

if (text3 > -1) {
    console.log(`Zdanie zawiera ${text3} słowa "chcesz"`);
}

else {

    console.log(`Zdanie nie zawiera słowa "chcesz"`);
}
});

// basic strings task #4 // wypisywanie tekstu w konsoli w różnej konfiguracji

const stringsTask4 = document.querySelector('.button__stringsTask4--js')
var element4 = document.getElementById('exerciseFour').innerText;



function alternate (element4) {
    const smallLetters = element4.toLowerCase().split('');

for (let i = 0; i < smallLetters.length; i += 2) {
    smallLetters[i] = smallLetters[i].toUpperCase();
}

return smallLetters.join('');
};

stringsTask4.addEventListener ('click', (e) => {
    console.log(element4.toLowerCase());
    console.log(element4.toUpperCase());
    console.log(alternate(element4));
    console.log(element4.replace('dont','do not'));
    
});


