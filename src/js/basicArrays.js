// basic arrays task #1 // Zadeklaruj tablicę tab z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.
// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość.Skorzystaj z pętli for, for of i forEach.

const { event, Event } = require("jquery");

const arraysTask1 = document.querySelector(".button__arraysTask1--js");

let randomArray = ["kartka", "monitor", "myszka", "tran", "zeszyt"];

const forFunction = (randomArray) => {
  for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = randomArray[i].toUpperCase();
  }
  return randomArray;
};

const forOfFunction = (randomArray) => {
  for (let element of randomArray) {
    element.toUpperCase();
  }
  return randomArray;
};

const forEach = (randomArray) => {
  randomArray.forEach((element) => {
    element.toUpperCase();
  });
  return randomArray;
};

arraysTask1.addEventListener("click", (e) => {
  console.log(`Tablica zawiera slowa: ${randomArray}`);
  console.log(`Ilość elementów tablicy to: (${randomArray.length})`);
  console.log(`Pierwszy element tablicy to: ${randomArray[0]}`);
  console.log(
    `Ostatni element tablicy to: ${randomArray[randomArray.length - 1]}`
  );
  console.log(forFunction(randomArray));
  console.log(forOfFunction(randomArray));
  console.log(forEach(randomArray));
});

// basic arrays task #2 // Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie. Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą console.table().

const arraysTask2 = document.querySelector(".button__arraysTask2--js");

const newRandomArray = ["kartka", "monitor", "myszka", "tran", "zeszyt"];
newRandomArray.push("ostatni");
newRandomArray.unshift("pierwszy");

arraysTask2.addEventListener("click", (e) => {
  console.log(newRandomArray);
  console.table(newRandomArray);
});

// basic arrays task #3 // Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

const arraysTask3 = document.querySelector(".button__arraysTask3--js");

arraysTask3.addEventListener("click", (e) => {
  if (newRandomArray.length > 3) {
    newRandomArray.splice(2, 1);
  }
  console.table(newRandomArray);
});

// basic arrays task #4 // Mamy tablicę:
// Posortuj ją i wypisz w konsoli.

const arraysTask4 = document.querySelector(".button__arraysTask4--js");

const names = ["Marcin", "Ania", "Monika", "Piotrek", "Beata"];

arraysTask4.addEventListener("click", (e) => {
  console.log(names.sort());
});

// basic arrays task #5 // Mamy tablicę:
// Posortuj ją po długościach kolejnych elementów.Na początku powinien być najkrótszy tekst, na końcu najdłuższy.Następnie napisz, ile liter mają wszystkie elementy razem.

const arraysTask5 = document.querySelector(".button__arraysTask5--js");

const tab = [
  "xloremipsumdolor",
  "kloremipsum",
  "aloremipsumdol",
  "blor",
  "cloremipsu",
  "gloremip",
];

const compare = (a, b) => {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  return 0;
};

const aCountArr = tab.join("").replace(/^,/i, "");
arraysTask5.addEventListener("click", (e) => {
  console.log(tab.sort(compare));
  console.log(
    `Liczba liter we wszystkich stringach w tablicy wynosi: ${
      aCountArr.length + 1
    }`
  );
});

// basic arrays task #6 // Mamy tablicę:
// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

const arraysTask6 = document.querySelector(".button__arraysTask6--js");

const tabUsers = [
  { name: "Marcin", age: 14 },
  { name: "Piotr", age: 18 },
  { name: "Agnieszka", age: 13 },
  { name: "Weronika", age: 20 },
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

let functionMature = tabUsers.map((el) => {
  if (el.age >= 18) {
    return el.name;
  }
});

arraysTask6.addEventListener("click", (e) => {
  console.log(`Osoby pełnoletnie to: ${mature(tabUsers).join(", ")}`);
  // console.log(`Osoby pełnoletnie to: ${functionMature}`);
  console.log(`Osoby pełnoletnie to: ${functionMature.filter(Boolean)}`);
});

// basic arrays task #7 // Napisz funkcję checkPalindrom(txt), która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

const arraysTask7 = document.querySelector(".button__arraysTask7--js");

const palindrom = (event) => {
  event.preventDefault();
  let arraysTask7Input = document
    .getElementById("arraysTask7Input")
    .value.toLowerCase()
    .replace(/\s/g, "");

  let arraysTask7InputPalindrome = arraysTask7Input
    .split("")
    .reverse()
    .join("");

  return arraysTask7Input === arraysTask7InputPalindrome;
};

arraysTask7.addEventListener("click", (e) => {
  console.log(palindrom(event));
});

// basic arrays task #8 // Napisz funkcję, która zwróci losową liczbę z przedziału min-max.

const arraysTask8 = document.querySelector(".button__arraysTask8--js");

const generateRandomNumber = () => {
  //   event.preventDefault();

  let arraysTask8InputMin = document.getElementById(
    "arraysTask8InputMin"
  ).value;

  let arraysTask8InputMax = document.getElementById(
    "arraysTask8InputMax"
  ).value;

  let intervalMin = parseInt(arraysTask8InputMin);
  let intervalMax = parseInt(arraysTask8InputMax);

  return (
    Math.floor(Math.random() * (intervalMax - intervalMin + 1)) + intervalMin
  );
};

arraysTask8.addEventListener("click", (e) => {
  console.log(generateRandomNumber());
});

// basic arrays task #9 // Napisz funkcję <,>generateRandomTable(min, max, count),która zwróci tablicę o długości count, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania. Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.

const arraysTask9 = document.querySelector(".button__arraysTask9--js");

const generateRandomTable = () => {
  let arraysTask9InputMin = document.getElementById(
    "arraysTask9InputMin"
  ).value;

  let arraysTask9InputMax = document.getElementById(
    "arraysTask9InputMax"
  ).value;

  let arraysTask9InputCount = document.getElementById("arraysTask9Count").value;

  let intervalMin = parseInt(arraysTask9InputMin);
  let intervalMax = parseInt(arraysTask9InputMax);
  let tableCount = parseInt(arraysTask9InputCount);

  let table = [];

  for (let i = 0; i < tableCount; i++) {
    table.push(
      Math.floor(Math.random() * (intervalMax - intervalMin + 1)) + intervalMin
    );
  }

  return table;
};

arraysTask9.addEventListener("click", (e) => {
  let generateRandomTableArray = [];

  let finalArray = generateRandomTableArray.concat(generateRandomTable());

  console.table(finalArray);
  console.log(finalArray);
  console.log(`Największa liczba w tabeli to: ${Math.max(...finalArray)}`);
});

// basic arrays task #9 Stwórz funkcję monthName(nr), która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę.Dla przykładu: monthName(10) -> "październik"

const arraysTask10 = document.querySelector(".button__arraysTask10--js");

const months = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

let getMonthNumber = () => {
  let arraysTask10Input = document.getElementById("arraysTask10Input").value;

  let arraysTask10InputNumber = parseInt(arraysTask10Input);

  return arraysTask10InputNumber;
};

arraysTask10.addEventListener("click", (e) => {
  console.log(getMonthNumber());

  let getMonthNumberCondition = (number) => {
    if (number >= 1 && number <= 12) {
      console.log(`Podany miesiąc to ${months[number - 1]}`);
    } else {
      console.log("Podana wartość jest niewłaściwa");
    }
  };
  const getMonthNumberForwarded = getMonthNumber();

  getMonthNumberCondition(getMonthNumberForwarded);
});
