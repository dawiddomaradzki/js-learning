import { cities } from "./cities";

// Arrays Cities task #1
// Wypisz ile miast jest w Polsce

const citiesTask1 = document.querySelector(".button__arraysCities1--js");

citiesTask1.addEventListener("click", (e) => {
  console.log(`W tablicy znajduje się ${cities.length} miast`);
});

// Arrays Cities task #2
// Wypisz ile jest ludzi w tych miastach

const citiesTask2 = document.querySelector(".button__arraysCities2--js");

const allPeople = cities.reduce((total, city) => {
  return city.people + total;
}, 0);

citiesTask2.addEventListener("click", (e) => {
  console.log(
    `Łącznie w miastach znajdujących się w tablicy jest ${allPeople} ludzi`
  );
});

// Arrays Cities task #3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi

const citiesTask3 = document.querySelector(".button__arraysCities3--js");

const firstCity = cities.find((city) => {
  return city.people > 10000;
});

citiesTask3.addEventListener("click", (e) => {
  console.log(firstCity);
});

// Arrays Cities task #4
// Wypisz miasta, w których ludzi jest ponad średnią

const citiesTask4 = document.querySelector(".button__arraysCities4--js");

const median = parseInt(allPeople) / parseInt(cities.length);

const aboveMedian = cities.filter((city) => {
  return city.people > median;
});

const aboveMedianNames = aboveMedian.map((city) => {
  return city.name;
});

citiesTask4.addEventListener("click", (e) => {
  console.log(median);
  console.log(aboveMedian);
  console.log(aboveMedianNames);
});

// Arrays Cities task #5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi

const citiesTask5 = document.querySelector(".button__arraysCities5--js");

const cityAbove10000 = cities.filter((city) => {
  return city.people > 10000;
});

const cityAbove10000Array = cityAbove10000.map((city) => {
  return city.name;
});

citiesTask5.addEventListener("click", (e) => {
  console.log(cityAbove10000);
  console.log(cityAbove10000Array);
});
