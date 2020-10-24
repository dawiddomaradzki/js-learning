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


function cutting() {

    let input = prompt(`Podaj tekst`);

    if (input.length > 10) {
        const slicedInput = input.slice(0, 10);
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

function fromBottom() {

    let generatedNumber = '';
    for (let i = 0; i <= var7; i++) {
        generatedNumber += i

        for (let j = i; j > 0; j--) {
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