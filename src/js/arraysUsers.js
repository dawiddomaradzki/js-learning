import { users } from "./users";

// Arrays Users task #1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// Claire Lucas -> clairelucas@memora.com

const usersTask1 = document.querySelector(".button__arraysUsers1--js");

const names = users.map((person) => person.name + " " + person.email);

usersTask1.addEventListener("click", (e) => {
  console.log(names);
});

// Arrays Users task #2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi

const userTask2 = document.querySelector(".button__arraysUsers2--js");

const adults = users.filter((person) => {
  return person.age >= 18;
});

const adultsAge = adults.map((adultperson) => {
  return adultperson.name + " " + adultperson.age;
});

userTask2.addEventListener("click", (e) => {
  console.log(adultsAge);
});

// Arrays Users task #3
// Wypisz tablicę z wszystkimi kobietami

const userTask3 = document.querySelector(".button__arraysUsers3--js");

const female = users.filter((person) => {
  return person.gender == "female";
});

const femaleNames = female.map((femalesNames) => femalesNames.name);

userTask3.addEventListener("click", (e) => {
  console.log(femaleNames);
});

// Arrays Users task #4
// Wypisz tablicę użytkowników którzy maja tag "dolor"

const userTask4 = document.querySelector(".button__arraysUsers4--js");

const dolor = users.filter((person) => {
  return person.tags.includes("dolor");
});

const dolorPerson = dolor.map((dolorPerson) => dolorPerson.name);

userTask4.addEventListener("click", (e) => {
  console.log(dolor);
  console.log(dolorPerson);
});

// Arrays Users task #5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni

const userTask5 = document.querySelector(".button__arraysUsers5--js");

const allAdults = users.every((person) => {
  return person.age >= 18;
});

userTask5.addEventListener("click", (e) => {
  console.log(allAdults);
});

// Arrays Users task #6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni

const userTask6 = document.querySelector(".button__arraysUsers6--js");

const justOneAdults = users.some((person) => {
  return person.age >= 18;
});

userTask6.addEventListener("click", (e) => {
  console.log(justOneAdults);
});

// Arrays Users task #7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami

const userTask7 = document.querySelector(".button__arraysUsers7--js");

const onlyNames = users.map((person) => {
  return person.name;
});

const onlyNamesString = onlyNames.join(" ").toUpperCase().split(" ");

let functionNames = (onlyNamesString) => {
  let justNames = [];
  for (let i = 0; i < onlyNamesString.length; i += 2) {
    justNames.push(onlyNamesString[i]);
  }

  return justNames;
};

userTask7.addEventListener("click", (e) => {
  console.log(functionNames(onlyNamesString));
});

// Arrays Users task #8
// Wypisz liczbę kobiet i liczbę mężczyzn. Wypisz tekst która grupa jest liczniejsza (np. "kobiety wygrywają")

const userTask8 = document.querySelector(".button__arraysUsers8--js");

const men = users.filter((person) => {
  return person.gender === "male";
});

const women = users.filter((person) => {
  return person.gender === "female";
});

const comparison = () => {
  if (men.length > women.length) {
    console.log("Mężczyzn jest więcej niż kobiet w tablicy");
  }
  if (men.length < women.length) {
    console.log("Kobiet jest więcej niż mężczyzn w tablicy");
  } else {
    console.log("Mężczyzn i kobiet jes po równo w tablicy");
  }
};

userTask8.addEventListener("click", (e) => {
  console.log(men);
  console.log(women);
  comparison();
});
