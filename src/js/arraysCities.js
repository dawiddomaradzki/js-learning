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
