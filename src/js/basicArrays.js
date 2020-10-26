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
})
