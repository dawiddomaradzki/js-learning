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

// basic arrays task #5 // Mamy tablicę: 
// Posortuj ją po długościach kolejnych elementów.Na początku powinien być najkrótszy tekst, na końcu najdłuższy.Następnie napisz, ile liter mają wszystkie elementy razem.

const arraysTask5 = document.querySelector('.button__arraysTask5--js');

const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]

const compare = (a,b) => {

        if (a.length < b.length) {
            return -1
        }
        if (a.length > b.length) {
            return 1
        }
        return 0
}

const aCountArr = tab.join('').replace(/^,/i, '');
arraysTask5.addEventListener('click', (e) => {
    console.log(tab.sort(compare));
    console.log(`Liczba liter we wszystkich stringach w tablicy wynosi: ${aCountArr.length+1}`);
});

// basic arrays task #6 // Mamy tablicę:
// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

const arraysTask6 = document.querySelector('.button__arraysTask6--js');

const tabUsers = [
    { name: "Marcin", age: 14 },
    { name: "Piotr", age: 18 },
    { name: "Agnieszka", age: 13 },
    { name: "Weronika", age: 20 }
];

let mature = (tabUsers) => {
    let name = [];
    for (let i = 0; i < tabUsers.length; i++) {
        if (tabUsers[i].age >= 18) {
            name.push(tabUsers[i].name);
        }
    }
  return name;
};

let functionMature = tabUsers.map(el => {
    
    if (el.age >= 18) {
        return el.name;
    }
});

   

arraysTask6.addEventListener('click', (e) => {
    console.log(`Osoby pełnoletnie to: ${mature(tabUsers).join(', ')}`);
    // console.log(`Osoby pełnoletnie to: ${functionMature}`);
    console.log(`Osoby pełnoletnie to: ${functionMature.filter(Boolean)}`);
});

// basic arrays task #7 // Napisz funkcję checkPalindrom(txt), która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

const arraysTask7 = document.querySelector('.button__arraysTask7--js');

const palindrom = (event) => {
    event.preventDefault();
    let arraysTask7Input = document.getElementById("arraysTask7Input").value.toLowerCase().replace(/\s/g, '');

    let arraysTask7InputPalindrome = arraysTask7Input.split('').reverse().join('');

    // return arraysTask7Input;
    return arraysTask7Input === arraysTask7InputPalindrome;
}



// toLowerCase().replace(/[\W_]/g, '');

arraysTask7.addEventListener('click', (e) => {
    console.log(palindrom(event));
});