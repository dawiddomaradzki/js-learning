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
