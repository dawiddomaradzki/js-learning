// Arrays Users task #1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
// Claire Lucas -> clairelucas@memora.com

import { users } from "./users";

const usersTask = document.querySelector(".button__arraysUsers1--js");

let names = users.map((person) => person.name + " " + person.email);

usersTask.addEventListener("click", (e) => {
  console.log(names);
});
