import { cities } from "./cities";

// Arrays Cities task #1
// Wypisz ile miast jest w Polsce

const citiesTask1 = document.querySelector(".button__arraysCities1--js");

citiesTask1.addEventListener("click", (e) => {
  console.log(`W tablicy znajduje się ${cities.length} miast`);
});
