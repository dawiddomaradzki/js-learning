// objectsFirst task #1 // Stwórz 2 obiekty:rectangle i circle. Obiekt rectangle powinien mieć właściwości height, width, natomiast circle właściwość radius. Oba obiekty powinny mieć metodę showArea(), która zwróci pole danej figury.

const objectsFirstTask1 = document.querySelector(".button__objectsFirst1--js");

const rectangle = {
  height: 20,
  width: 5,
  showArea() {
    return console.log(
      `Kwadrat ma szerokość ${this.width} i wysokość ${
        this.height
      }. Jego pole wynosi ${this.height * this.width}.`
    );
  },
};

const circle = {
  radius: 15,
  showArea() {
    return console.log(
      `Koło ma promień ${this.radius}. Jego pole wynosi ${
        this.radius * this.radius * 3.14
      }.`
    );
  },
};

objectsFirstTask1.addEventListener("click", (e) => {
  rectangle.showArea();
  circle.showArea();
});

// objectsFirst task #2 //

const objectsFirstTask2 = document.querySelector(".button__objectsFirst2--js");

const currentUser = {
  name: "Dawid",
  surname: "Domaradzki",
  email: "dawid@pl.pl",
  www: "dawid.pl",
  userType: "male",
  isActive: true,
  show() {
    return console.log(
      `Imię: ${this.name}, Nazwisko: ${this.surname}, Email: ${this.email}, www: ${this.www},	Płeć: ${this.userType}, Aktywny: ${this.isActive}`
    );
  },
  setActive(active) {
    this.isActive = active;
    return console.log(`Aktywny: ${this.isActive}`);
  },
};

objectsFirstTask2.addEventListener("click", (e) => {
  currentUser.show();
  currentUser.setActive(false);
});

// objectsFirst task #3 //
const objectsFirstTask3 = document.querySelector(".button__objectsFirst3--js");

const book = {
  title: "Wiedźmin",
  author: "Andrzej Sapkowski",
  pageCount: 666,
  publisher: "Znak",
  showDetails() {
    for (const key in book) {
      if (typeof book[key] !== "function") {
        console.log(`${key} ${book[key]}`);
      }
    }
  },
};

objectsFirstTask3.addEventListener("click", (e) => {
  book.showDetails();
  console.log(Object.keys(book));
  console.log(Object.values(book));
  console.log(Object.entries(book));
});

// objectsFirst task #4 //
const objectsFirstTask4 = document.querySelector(".button__objectsFirst4--js");

let getPlanet = () => {
  let objectsFirstTask4Planet = document.getElementById(
    "objectsFirst4_0Input"
  ).value;
  return objectsFirstTask4Planet;
};

let getDistance = () => {
  let objectsFirstTask4Distance = document.getElementById(
    "objectsFirst4_1Input"
  ).value;

  let distanceNumber = parseInt(objectsFirstTask4Distance);
  return distanceNumber;
};

const spaceShip = {
  name: "Enterprise",
  currentLocation: "Earth",
  flyDistance: 0,
  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
  },
  showInfo() {
    return console.log(
      `Statek ${this.name} doleciał do miejsca ${this.currentLocation}. Statek przeleciał już całkowity dystans ${this.flyDistance}.`
    );
  },
  meetClingon() {
    let lose = 0;
    let win = 0;

    for (let i = 0; i < 100; i++) {
      if (Math.round(Math.random()) == 0) {
        lose += 1;
      } else {
        win += 1;
      }
    }

    if (lose < win) {
      return console.log(
        `Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami. Lose: ${lose}, Win: ${win}`
      );
    } else if (lose == win) {
      return console.log(`W sumie remis czyli luz. Lose: ${lose}, Win: ${win}`);
    } else if (lose > win) {
      return console.log(
        `Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów. Lose: ${lose}, Win: ${win}`
      );
    }
  },
};

objectsFirstTask4.addEventListener("click", (e) => {
  spaceShip.flyTo(getPlanet(), getDistance());
  spaceShip.showInfo();
  spaceShip.meetClingon();
});
