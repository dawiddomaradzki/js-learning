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

// basic strings task #5 // zmienne losowe za pomocą MATH

const stringsTask5 = document.querySelector('.button__stringsTask5--js');

const min = 10;
const max = 100000;

function randomNumber() {
    
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    return result.toString().padStart(10, ".");
}

stringsTask5.addEventListener('click' , (e) => {
    
    console.log(randomNumber());
    console.log(randomNumber());
    console.log(randomNumber());
    console.log(randomNumber());
    console.log(randomNumber());
    
});

// basic strings task #6 // Wygeneruj pod zmienną uniqueID tekst będący losowym ciągiem liter i cyfr o długości 20 znaków.

const stringsTask6 = document.querySelector('.button__stringsTask6--js');

const allCharacters = "0123456789abcdefghijklmnoprstuwxyz";

function randomCharacters() {
    
    let uniqueID = "";
    for (let i = 0; i < 20; i++) {
       uniqueID += allCharacters[Math.floor(Math.random() * 34)]; 
    }

    return uniqueID;
}

stringsTask6.addEventListener ('click' , (e) => {
    console.log(randomCharacters());
});

// basic strings task #7 // Stwórz zmienną x równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst: Liczba x * x da w wyniku x * x Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.


const stringsTask7 = document.querySelector('.button__stringsTask7--js');

let varX = 7;

stringsTask7.addEventListener('click', (e) => {

    console.log(`Liczba ${varX} * ${varX} da w wyniku ${varX * varX}`);
});

// basic loops task #1 // Za pomocą pętli wypisz w konsoli tekst 12345678910

const loopsTask1 = document.querySelector('.button__loopsTask1--js');

loopsTask1.addEventListener('click', (e) => {

    let loopNumber = "";
    for (let i = 1; i < 11; i++) {
        loopNumber += i;
    }

    console.log(loopNumber);
});

// basic loops task #2 // Stwórz zmienną n, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną txt, która będzie zawierać jakiś tekst np. kot.

const loopsTask2 = document.querySelector('.button__loopsTask2--js');

let loopNumber2 = 6;
let loopText2 = "Tekst";


loopsTask2.addEventListener('click', (e) => {

    let replication = '';
    for (let i = 0; i < loopNumber2; i++) {
        replication += loopText2;
    }


    if (loopNumber2 > 0) {
        console.log(loopText2.repeat(loopNumber2));
        console.log(replication);
    }

    else {
        console.log('podana liczba jest mniejsza od 0')
    }
 
});

// basic loops task #3 // Wygeneruj i wypisz w konsoli tekst:

const loopsTask3 = document.querySelector('.button__loopsTask3--js');


loopsTask3.addEventListener('click', (e) => {
    let inputPrompt = cutting();
    const returnInput = `╔═══════════════════════════════════════╗
           ${inputPrompt}               
╚═══════════════════════════════════════╝`;
    console.log(returnInput);
});


function cutting (){

    let input = prompt(`Podaj tekst`);

    if (input.length > 10) {
        const slicedInput = input.slice(0,10);
        return slicedInput + `...`;
    }

    return input;
};

// basic loops task #4 // Zrób losowanie 10 liczb z przedziału 1-10. 

const loopsTask4 = document.querySelector('.button__loopsTask4--js');

const minNumber = 1;
const maxNumber = 10;


function randomNumbers() {

    let randomNumber = [];
    for (let i = 0; i < 10; i++) {
        randomNumber[i] = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }

    return randomNumber;
};

loopsTask4.addEventListener('click', (e) => {

    console.log(randomNumbers());

    const isOver5 = randomNumbers().filter(i => i > 5).length;  

        console.log(isOver5);

        if (isOver5 > 5) {
            console.log('udało się');
        }

        else {
            console.log('niestety nie tym razem');
        }
       
});

// basic loops task #5 // Za pomocą pętli wygeneruj tekst:

const loopsTask5 = document.querySelector('.button__loopsTask5--js');

const var7 = 7;

function fromBottom () {

    let generatedNumber = '';
    for (let i = 0; i <= var7; i++) {
        generatedNumber += i

        for (let j = i ;  j > 0; j--){
            generatedNumber += "-"   
        }
    }
    return generatedNumber
}

loopsTask5.addEventListener('click', (e) => {
    console.log(fromBottom());
});

// basic loops task #6 // Za pomocą prompt() pobierz od użytkownika liczbę z przedziału min-max. Pamiętaj, że prompt() zwraca zawsze tekst, więc skonwertuj ją na liczbę.

const loopsTask6 = document.querySelector('.button__loopsTask6--js');

const minTask6 = 1;
const maxTask6 = 1000;

loopsTask6.addEventListener('click', (e) => {

const input = prompt('podaj liczbę od 1-1000');
const inputToNumber = parseInt(input);
console.log(input);
console.log(inputToNumber);

    if (inputToNumber >= 1 && inputToNumber <= 1000) {
        let i = 0;
        let loopCounter = 0;
        while (i !== inputToNumber) {
            i = Math.floor(Math.random() * (maxTask6 - minTask6 + 1));
            loopCounter++

        }
        console.log(`Aby uzyskać wpisaną liczbę, pętla wykonała się ${loopCounter} razy`);
    } else {
        console.log(`Zla liczba, sproboj ponownie`);
    }
    
});

const functionsTask1 = document.querySelector('.button__functionsTask1--js');

let task1Text = 'Jakiś Tekst!';

function textCounter(task1Text) {

    let counter = 1;
    for (let i = 0; i < task1Text.length; i++) {
        if (/^[a-zA-Z]+$/.test(task1Text[i])) {
            counter++
        } 
    }
    return counter    
}

functionsTask1.addEventListener('click', (e) => {

    console.log(task1Text.split(''));
    console.log(textCounter(task1Text));
    console.log(`podany tekst zawiera ${textCounter(task1Text)} liter`);
});

