// basic arrays task #1 // Zadeklaruj tablicę tab z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.
// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość.Skorzystaj z pętli for, for of i forEach.


const arraysTask1 = document.querySelector('.button__arraysTask1--js');

let randomArray = ['kartka', 'monitor', 'myszka', 'tran', 'zeszyt'];

const forFunction = (randomArray) => {
    for (let i=0; i<randomArray.length; i++) {
        randomArray[i] = randomArray[i].toUpperCase();
    }
    return randomArray;
}

const forOfFunction = (randomArray) => {
    for (let element of randomArray) {
        element.toUpperCase();
    }
    return randomArray;
}

const forEach = (randomArray) => {
    randomArray.forEach(element => {
        element.toUpperCase();
    });
    return randomArray;
}

arraysTask1.addEventListener('click', (e) => {
    console.log(`Tablica zawiera slowa: ${randomArray}`);
    console.log(`Ilość elementów tablicy to: (${randomArray.length})`);
    console.log(`Pierwszy element tablicy to: ${randomArray[0]}`);
    console.log(`Ostatni element tablicy to: ${randomArray[randomArray.length-1]}`);
    console.log(forFunction(randomArray));
    console.log(forOfFunction(randomArray));
    console.log(forEach(randomArray));
});

// basic arrays task #2 // Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie. Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą console.table().


const arraysTask2 = document.querySelector('.button__arraysTask2--js');

const newRandomArray = ['kartka', 'monitor', 'myszka', 'tran', 'zeszyt'];
newRandomArray.push('ostatni');
newRandomArray.unshift('pierwszy');

arraysTask2.addEventListener('click', (e) => {
    
    console.log(newRandomArray);
    console.table(newRandomArray);
});

// basic arrays task #3 // Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

const arraysTask3 = document.querySelector('.button__arraysTask3--js');

arraysTask3.addEventListener('click', (e) => {

    if (newRandomArray.length > 3) {
        newRandomArray.splice(2,1)
    }
    console.table(newRandomArray);
});

// basic arrays task #4 // Mamy tablicę:
// Posortuj ją i wypisz w konsoli.

const arraysTask4 = document.querySelector('.button__arraysTask4--js');

const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotrek",
    "Beata"];

arraysTask4.addEventListener('click', (e) => {
    console.log(names.sort());
}); 




